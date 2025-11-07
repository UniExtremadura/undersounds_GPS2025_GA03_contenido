'use strict';

var utils = require('../utils/writer.js');
var Albums = require('../service/AlbumsService');

module.exports.albumsAlbumIdCommentsGET = function albumsAlbumIdCommentsGET (req, res, next, albumId, page, limit) {
  Albums.albumsAlbumIdCommentsGET(albumId, page, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsAlbumIdCommentsPOST = function albumsAlbumIdCommentsPOST (req, res, next, body, albumId) {
  Albums.albumsAlbumIdCommentsPOST(body, albumId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsAlbumIdCoverPOST = function albumsAlbumIdCoverPOST (req, res, next, albumId) {
  Albums.albumsAlbumIdCoverPOST(albumId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsAlbumIdDELETE = function albumsAlbumIdDELETE (req, res, next, albumId, hard) {
  Albums.albumsAlbumIdDELETE(albumId, hard)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsAlbumIdGET = function albumsAlbumIdGET (req, res, next, albumId, include) {
  Albums.albumsAlbumIdGET(albumId, include)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsAlbumIdPATCH = function albumsAlbumIdPATCH (req, res, next, body, albumId) {
  Albums.albumsAlbumIdPATCH(body, albumId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsAlbumIdPublishPOST = function albumsAlbumIdPublishPOST (req, res, next, albumId) {
  Albums.albumsAlbumIdPublishPOST(albumId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsAlbumIdStatsGET = function albumsAlbumIdStatsGET (req, res, next, albumId, range) {
  Albums.albumsAlbumIdStatsGET(albumId, range)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsAlbumIdTracksPOST = function albumsAlbumIdTracksPOST (req, res, next, body, albumId) {
  Albums.albumsAlbumIdTracksPOST(body, albumId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsAlbumIdTracksTrackIdDELETE = function albumsAlbumIdTracksTrackIdDELETE (req, res, next, albumId, trackId) {
  Albums.albumsAlbumIdTracksTrackIdDELETE(albumId, trackId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsGET = function albumsGET (req, res, next, page, limit, include, artistId, labelId, genre, tag, releaseState, q) {
  Albums.albumsGET(page, limit, include, artistId, labelId, genre, tag, releaseState, q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.albumsPOST = function albumsPOST (req, res, next, body) {
  Albums.albumsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.labelsLabelIdAlbumsGET = function labelsLabelIdAlbumsGET (req, res, next, labelId, page, limit) {
  Albums.labelsLabelIdAlbumsGET(labelId, page, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
