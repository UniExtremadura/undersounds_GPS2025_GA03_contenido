// service/AlbumsService.js
'use strict';

// -------- PRISMA ROBUST LOADER --------
let prisma;
try {
  // Intenta cargar tu singleton si existe
  const prismaModule = require('../src/db/prisma');
  prisma = prismaModule?.prisma || prismaModule?.default || prismaModule;
  if (!prisma) {
    const { PrismaClient } = require('@prisma/client');
    prisma = new PrismaClient();
  }
} catch (e) {
  // Fallback: cliente directo
  const { PrismaClient } = require('@prisma/client');
  prisma = new PrismaClient();
}
console.log('[AlbumsService] Prisma loaded =', !!prisma);

// -------- HELPERS --------
const toInt = (v, def) => {
  const n = parseInt(v, 10);
  return Number.isFinite(n) && n > 0 ? n : def;
};

const buildInclude = (includeCsv) => {
  if (!includeCsv) return undefined;
  const parts = String(includeCsv).split(',').map(s => s.trim()).filter(Boolean);
  const include = {};
  const allowed = ['tracks', 'label', 'stats', 'artist', 'cover'];
  for (const p of parts) if (allowed.includes(p)) include[p] = true;
  return Object.keys(include).length ? include : undefined;
};

const like = (q) => ({ contains: q, mode: 'insensitive' });

// ----------------- COMMENTS -----------------

exports.albumsAlbumIdCommentsGET = async function (albumId, page, limit) {
  const pageNum = toInt(page, 1);
  const pageSize = toInt(limit, 20);
  const skip = (pageNum - 1) * pageSize;

  // Ajusta este where si tu Comment se relaciona de otra forma
  const where = { targetType: 'album', targetId: albumId };

  const [data, total] = await Promise.all([
    prisma.comment.findMany({ where, orderBy: { createdAt: 'desc' }, skip, take: pageSize }),
    prisma.comment.count({ where }),
  ]);

  return { data, meta: { total, page: pageNum, limit: pageSize } };
};

exports.albumsAlbumIdCommentsPOST = async function (body, albumId) {
  const created = await prisma.comment.create({
    data: {
      targetType: 'album',
      targetId: albumId,
      text: body?.text ?? null,
      rating: body?.rating ?? null,
      userId: body?.userId ?? null,
      status: 'visible',
    },
  });
  return { data: created };
};

// ----------------- COVER -----------------

exports.albumsAlbumIdCoverPOST = async function (albumId /*, body */) {
  // Ejemplo simple: crea imagen y enlaza
  const createdImage = await prisma.image.create({
    data: {
      url: '',      // TODO: body.url / URL del uploader
      alt: 'cover', // TODO: body.alt
      width: null,
      height: null,
    },
  });

  const updated = await prisma.album.update({
    where: { id: albumId },
    data: { coverId: createdImage.id }, // en 1–1, coverId debe ser @unique
    include: { cover: true, tracks: true, label: true, stats: true, artist: true },
  });

  return { data: updated };
};

// ----------------- CRUD ÁLBUM -----------------

exports.albumsAlbumIdDELETE = async function (albumId, hard) {
  if (hard === true) {
    await prisma.album.delete({ where: { id: albumId } });
    return;
  }
  await prisma.album.update({
    where: { id: albumId },
    data: { releaseState: 'archived' }, // o deletedAt: new Date()
  });
};

exports.albumsAlbumIdGET = async function (albumId, include) {
  const album = await prisma.album.findUnique({
    where: { id: albumId },
    include: buildInclude(include),
  });
  if (!album) {
    const err = new Error('Álbum no encontrado');
    err.status = 404;
    throw err;
  }
  return { data: album };
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PATCH con normalización coherente de genres/tags
exports.albumsAlbumIdPATCH = async function (body, albumId) {
  const patch = {
    title: body?.title,
    description: body?.description,
    price: body?.price,
    currency: body?.currency,
    releaseDate: body?.releaseDate ? new Date(body.releaseDate) : undefined,
    releaseState: body?.releaseState,
  };

  // Si vienen en el body, los tratamos:
  if (body && Object.prototype.hasOwnProperty.call(body, 'genres')) {
    patch.genres = Array.isArray(body.genres)
      ? body.genres
      : (typeof body.genres === 'string'
          ? body.genres.split(',').map(s => s.trim()).filter(Boolean)
          : []); // default si envían null/undefined
  }
  if (body && Object.prototype.hasOwnProperty.call(body, 'tags')) {
    patch.tags = Array.isArray(body.tags)
      ? body.tags.join(',') // a CSV si schema.tags es String
      : (typeof body.tags === 'string'
          ? body.tags
          : '');
  }

  // Limpia undefined
  Object.keys(patch).forEach(k => patch[k] === undefined && delete patch[k]);

  const updated = await prisma.album.update({
    where: { id: albumId },
    data: patch,
    include: { tracks: true, label: true, stats: true, artist: true, cover: true },
  });

  return { data: updated };
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// POST con normalización y defaults de genres/tags
exports.albumsPOST = async function (body) {
  console.log('[albumsPOST] body =', body);

  const genresValue =
    Array.isArray(body?.genres)
      ? body.genres
      : (typeof body?.genres === 'string'
          ? body.genres.split(',').map(s => s.trim()).filter(Boolean)
          : []); // por defecto []

  const tagsValue =
    Array.isArray(body?.tags)
      ? body.tags.join(',') // si envían array pero schema.tags es String, convierte a CSV
      : (typeof body?.tags === 'string'
          ? body.tags
          : ''); // por defecto ""

  const data = {
    title: body?.title,
    description: body?.description ?? null,
    price: body?.price ?? null,
    currency: body?.currency ?? null,
    releaseDate: body?.releaseDate ? new Date(body.releaseDate) : null,
    releaseState: body?.releaseState ?? 'draft',
    // En schema actual `genres` y `tags` son String (CSV). Normalizamos:
    genres: Array.isArray(genresValue) ? genresValue.join(',') : (typeof genresValue === 'string' ? genresValue : ''),
    tags: tagsValue,     // String (CSV)
    // Nota: relaciones (artist/label) se conectan más abajo para evitar errores de tipos
  };

  // Conecta artist/label si vienen ids. Usamos connectOrCreate para crear registros mínimos si no existen
  if (body?.artistId) {
    data.artist = {
      connectOrCreate: {
        where: { id: body.artistId },
        create: { id: body.artistId, name: body?.artistName ?? 'unknown artist' },
      },
    };
  }
  if (body?.labelId) {
    data.label = {
      connectOrCreate: {
        where: { id: body.labelId },
        create: { id: body.labelId, name: body?.labelName ?? 'unknown label' },
      },
    };
  }

  // cover es requerido en schema; si el cliente no envía coverId creamos una imagen mínima
  if (body?.coverId) {
    data.cover = { connect: { id: body.coverId } };
  } else {
    data.cover = { create: { url: body?.coverUrl ?? '', alt: body?.coverAlt ?? 'cover', width: Number.isFinite(body?.coverWidth) ? body.coverWidth : 0, height: Number.isFinite(body?.coverHeight) ? body.coverHeight : 0 } };
  }

  // Elimina undefined (dejamos null si lo pusimos explícitamente)
  Object.keys(data).forEach(k => data[k] === undefined && delete data[k]);

  const created = await prisma.album.create({ data });
  return { data: created };
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ----------------- TRACKS -----------------

exports.albumsAlbumIdTracksPOST = async function (body, albumId) {
  const tracks = Array.isArray(body?.tracks) ? body.tracks : [];
  if (!tracks.length) {
    const err = new Error('Debes enviar al menos una pista en body.tracks');
    err.status = 400;
    throw err;
  }

  const updated = await prisma.album.update({
    where: { id: albumId },
    data: {
      tracks: {
        create: tracks.map(t => ({
          title: t.title,
          durationSec: t.durationSec ?? null,
          trackNumber: t.trackNumber ?? null,
          // audio / lyrics anidados si existen:
          // audio: t.audio ? { create: { ...t.audio } } : undefined,
          // lyrics: t.lyrics ? { create: { ...t.lyrics } } : undefined,
        })),
      },
    },
    include: { tracks: true, label: true, stats: true, artist: true, cover: true },
  });

  return { data: updated };
};

exports.albumsAlbumIdTracksTrackIdDELETE = async function (albumId, trackId) {
  await prisma.track.delete({ where: { id: trackId } });
  return;
};

// ----------------- LISTADOS -----------------

exports.albumsGET = async function (
  page, limit, include, artistId, labelId, genre, tag, releaseState, q
) {
  const pageNum = toInt(page, 1);
  const pageSize = toInt(limit, 20);
  const skip = (pageNum - 1) * pageSize;

  const where = {};
  if (artistId) where.artistId = artistId;
  if (labelId) where.labelId = labelId;
  if (releaseState) where.releaseState = releaseState;

  // Si genres/tags son String[] en Prisma:
  // if (genre) where.genres = { has: genre };
  // if (tag)   where.tags   = { has: tag };

  // Si son String CSV:
  if (genre) where.genres = like(genre);
  if (tag)   where.tags   = like(tag);

  if (q) where.OR = [{ title: like(q) }, { description: like(q) }];

  const [rows, total] = await Promise.all([
    prisma.album.findMany({
      where,
      include: buildInclude(include),
      orderBy: { createdAt: 'desc' },
      skip,
      take: pageSize,
    }),
    prisma.album.count({ where }),
  ]);

  return { data: rows, meta: { total, page: pageNum, limit: pageSize } };
};

exports.labelsLabelIdAlbumsGET = async function (labelId, page, limit) {
  const pageNum = toInt(page, 1);
  const pageSize = toInt(limit, 20);
  const skip = (pageNum - 1) * pageSize;

  const where = { labelId };

  const [rows, total] = await Promise.all([
    prisma.album.findMany({ where, orderBy: { createdAt: 'desc' }, skip, take: pageSize }),
    prisma.album.count({ where }),
  ]);

  return { data: rows, meta: { total, page: pageNum, limit: pageSize } };
};
