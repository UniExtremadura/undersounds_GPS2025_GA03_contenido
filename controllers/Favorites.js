'use strict';

var utils = require('../utils/writer.js');
var Favorites = require('../service/FavoritesService');

module.exports.usersUserIdFavoritesAlbumsAlbumIdDELETE = function usersUserIdFavoritesAlbumsAlbumIdDELETE (req, res, next, userId, albumId) {
  Favorites.usersUserIdFavoritesAlbumsAlbumIdDELETE(userId, albumId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdFavoritesAlbumsGET = function usersUserIdFavoritesAlbumsGET (req, res, next, userId, page, limit) {
  Favorites.usersUserIdFavoritesAlbumsGET(userId, page, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdFavoritesAlbumsPOST = function usersUserIdFavoritesAlbumsPOST (req, res, next, body, userId) {
  Favorites.usersUserIdFavoritesAlbumsPOST(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdFavoritesMerchGET = function usersUserIdFavoritesMerchGET (req, res, next, userId, page, limit) {
  Favorites.usersUserIdFavoritesMerchGET(userId, page, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdFavoritesMerchMerchIdDELETE = function usersUserIdFavoritesMerchMerchIdDELETE (req, res, next, userId, merchId) {
  Favorites.usersUserIdFavoritesMerchMerchIdDELETE(userId, merchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdFavoritesMerchPOST = function usersUserIdFavoritesMerchPOST (req, res, next, body, userId) {
  Favorites.usersUserIdFavoritesMerchPOST(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
