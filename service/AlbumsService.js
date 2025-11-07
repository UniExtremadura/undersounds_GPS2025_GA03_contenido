'use strict';


/**
 * Listar comentarios del álbum
 *
 * albumId UUID 
 * page Integer  (optional)
 * limit Integer  (optional)
 * returns PaginatedCommentList
 **/
exports.albumsAlbumIdCommentsGET = function(albumId,page,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "targetId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "replies" : [ null, null ],
    "rating" : 1,
    "targetType" : "album",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "text" : "text",
    "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "status" : "visible",
    "likes" : 6,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "targetId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "replies" : [ null, null ],
    "rating" : 1,
    "targetType" : "album",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "text" : "text",
    "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "status" : "visible",
    "likes" : 6,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "meta" : {
    "total" : 123,
    "limit" : 20,
    "page" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Comentar en un álbum
 *
 * body CommentCreateInput 
 * albumId UUID 
 * returns CommentResponse
 **/
exports.albumsAlbumIdCommentsPOST = function(body,albumId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "targetId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "replies" : [ null, null ],
    "rating" : 1,
    "targetType" : "album",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "text" : "text",
    "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "status" : "visible",
    "likes" : 6,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Subir o actualizar portada del álbum
 *
 * albumId UUID 
 * returns AlbumResponse
 **/
exports.albumsAlbumIdCoverPOST = function(albumId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "releaseDate" : "2000-01-23",
    "description" : "description",
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "title" : "title",
    "tracks" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "tags" : [ "tags", "tags" ],
    "cover" : {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    },
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "stats" : {
      "playCount" : 9,
      "likeCount" : 3,
      "ratingAvg" : 4.5,
      "commentCount" : 2
    },
    "price" : 0.8008282,
    "genres" : [ "genres", "genres" ],
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "releaseState" : "draft",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar o archivar lógicamente un álbum
 *
 * albumId UUID 
 * hard Boolean Si true, borrado físico irreversible (optional)
 * no response value expected for this operation
 **/
exports.albumsAlbumIdDELETE = function(albumId,hard) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtener detalle de un álbum
 *
 * albumId UUID 
 * include List Campos relacionados a incluir, separados por coma. Ej. `tracks,label,stats` (optional)
 * returns AlbumResponse
 **/
exports.albumsAlbumIdGET = function(albumId,include) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "releaseDate" : "2000-01-23",
    "description" : "description",
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "title" : "title",
    "tracks" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "tags" : [ "tags", "tags" ],
    "cover" : {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    },
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "stats" : {
      "playCount" : 9,
      "likeCount" : 3,
      "ratingAvg" : 4.5,
      "commentCount" : 2
    },
    "price" : 0.8008282,
    "genres" : [ "genres", "genres" ],
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "releaseState" : "draft",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar parcialmente un álbum
 *
 * body AlbumUpdateInput 
 * albumId UUID 
 * returns AlbumResponse
 **/
exports.albumsAlbumIdPATCH = function(body,albumId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "releaseDate" : "2000-01-23",
    "description" : "description",
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "title" : "title",
    "tracks" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "tags" : [ "tags", "tags" ],
    "cover" : {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    },
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "stats" : {
      "playCount" : 9,
      "likeCount" : 3,
      "ratingAvg" : 4.5,
      "commentCount" : 2
    },
    "price" : 0.8008282,
    "genres" : [ "genres", "genres" ],
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "releaseState" : "draft",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Publicar álbum
 *
 * albumId UUID 
 * returns AlbumResponse
 **/
exports.albumsAlbumIdPublishPOST = function(albumId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "releaseDate" : "2000-01-23",
    "description" : "description",
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "title" : "title",
    "tracks" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "tags" : [ "tags", "tags" ],
    "cover" : {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    },
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "stats" : {
      "playCount" : 9,
      "likeCount" : 3,
      "ratingAvg" : 4.5,
      "commentCount" : 2
    },
    "price" : 0.8008282,
    "genres" : [ "genres", "genres" ],
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "releaseState" : "draft",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Estadísticas de un álbum
 *
 * albumId UUID 
 * range String Rango temporal para agregados (optional)
 * returns AlbumStats
 **/
exports.albumsAlbumIdStatsGET = function(albumId,range) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "salesCount" : 200,
    "playsLast30Days" : 1200,
    "totalPlays" : 12345,
    "playsLast7Days" : 321,
    "ratingAvg" : 4.5
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Añadir pistas a un álbum
 *
 * body AlbumId_tracks_body 
 * albumId UUID 
 * returns AlbumResponse
 **/
exports.albumsAlbumIdTracksPOST = function(body,albumId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "releaseDate" : "2000-01-23",
    "description" : "description",
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "title" : "title",
    "tracks" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "tags" : [ "tags", "tags" ],
    "cover" : {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    },
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "stats" : {
      "playCount" : 9,
      "likeCount" : 3,
      "ratingAvg" : 4.5,
      "commentCount" : 2
    },
    "price" : 0.8008282,
    "genres" : [ "genres", "genres" ],
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "releaseState" : "draft",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Quitar una pista del álbum
 *
 * albumId UUID 
 * trackId UUID 
 * no response value expected for this operation
 **/
exports.albumsAlbumIdTracksTrackIdDELETE = function(albumId,trackId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Listar álbumes
 *
 * page Integer  (optional)
 * limit Integer  (optional)
 * include List Campos relacionados a incluir, separados por coma. Ej. `tracks,label,stats` (optional)
 * artistId UUID  (optional)
 * labelId UUID  (optional)
 * genre String  (optional)
 * tag String  (optional)
 * releaseState String Estado de publicación (optional)
 * q String Búsqueda full-text por título/descripcion (optional)
 * returns PaginatedAlbumList
 **/
exports.albumsGET = function(page,limit,include,artistId,labelId,genre,tag,releaseState,q) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "releaseDate" : "2000-01-23",
    "description" : "description",
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "title" : "title",
    "tracks" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "tags" : [ "tags", "tags" ],
    "cover" : {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    },
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "stats" : {
      "playCount" : 9,
      "likeCount" : 3,
      "ratingAvg" : 4.5,
      "commentCount" : 2
    },
    "price" : 0.8008282,
    "genres" : [ "genres", "genres" ],
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "releaseState" : "draft",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "releaseDate" : "2000-01-23",
    "description" : "description",
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "title" : "title",
    "tracks" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "tags" : [ "tags", "tags" ],
    "cover" : {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    },
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "stats" : {
      "playCount" : 9,
      "likeCount" : 3,
      "ratingAvg" : 4.5,
      "commentCount" : 2
    },
    "price" : 0.8008282,
    "genres" : [ "genres", "genres" ],
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "releaseState" : "draft",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "meta" : {
    "total" : 123,
    "limit" : 20,
    "page" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear álbum
 *
 * body AlbumCreateInput 
 * returns AlbumResponse
 **/
exports.albumsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "releaseDate" : "2000-01-23",
    "description" : "description",
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "title" : "title",
    "tracks" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "tags" : [ "tags", "tags" ],
    "cover" : {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    },
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "stats" : {
      "playCount" : 9,
      "likeCount" : 3,
      "ratingAvg" : 4.5,
      "commentCount" : 2
    },
    "price" : 0.8008282,
    "genres" : [ "genres", "genres" ],
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "releaseState" : "draft",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Discografía de la label
 *
 * labelId UUID 
 * page Integer  (optional)
 * limit Integer  (optional)
 * returns PaginatedAlbumList
 **/
exports.labelsLabelIdAlbumsGET = function(labelId,page,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "releaseDate" : "2000-01-23",
    "description" : "description",
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "title" : "title",
    "tracks" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "tags" : [ "tags", "tags" ],
    "cover" : {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    },
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "stats" : {
      "playCount" : 9,
      "likeCount" : 3,
      "ratingAvg" : 4.5,
      "commentCount" : 2
    },
    "price" : 0.8008282,
    "genres" : [ "genres", "genres" ],
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "releaseState" : "draft",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "releaseDate" : "2000-01-23",
    "description" : "description",
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "title" : "title",
    "tracks" : [ {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "trackNumber" : 5,
      "stats" : {
        "playCount" : 7
      },
      "album" : {
        "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "title" : "title"
      },
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "audio" : {
        "codec" : "codec",
        "bitrate" : 2,
        "url" : "http://example.com/aeiou"
      },
      "title" : "title",
      "durationSec" : 5,
      "lyrics" : {
        "language" : "language",
        "text" : "text"
      },
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    } ],
    "tags" : [ "tags", "tags" ],
    "cover" : {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    },
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "stats" : {
      "playCount" : 9,
      "likeCount" : 3,
      "ratingAvg" : 4.5,
      "commentCount" : 2
    },
    "price" : 0.8008282,
    "genres" : [ "genres", "genres" ],
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "releaseState" : "draft",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "meta" : {
    "total" : 123,
    "limit" : 20,
    "page" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

