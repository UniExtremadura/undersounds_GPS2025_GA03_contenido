'use strict';

var utils = require('../utils/writer.js');
var Uploads = require('../service/UploadsService');

module.exports.albumsAlbumIdCoverPOST = function albumsAlbumIdCoverPOST (req, res, next, albumId) {
  Uploads.albumsAlbumIdCoverPOST(albumId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.merchMerchIdImagesPOST = function merchMerchIdImagesPOST (req, res, next, merchId) {
  Uploads.merchMerchIdImagesPOST(merchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tracksTrackIdAudioPOST = function tracksTrackIdAudioPOST (req, res, next, trackId) {
  Uploads.tracksTrackIdAudioPOST(trackId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
