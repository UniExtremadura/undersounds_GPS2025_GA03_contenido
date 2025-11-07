'use strict';


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
 * Subir imágenes del producto
 *
 * merchId UUID 
 * returns MerchResponse
 **/
exports.merchMerchIdImagesPOST = function(merchId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "images" : [ {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    }, {
      "alt" : "alt",
      "width" : 6,
      "url" : "http://example.com/aeiou",
      "height" : 1
    } ],
    "artist" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "name" : "name",
    "description" : "description",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "variants" : [ {
      "color" : "color",
      "size" : "size",
      "price" : 0.8008282,
      "currency" : "EUR",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sku" : "sku",
      "stock" : 6
    }, {
      "color" : "color",
      "size" : "size",
      "price" : 0.8008282,
      "currency" : "EUR",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sku" : "sku",
      "stock" : 6
    } ],
    "label" : {
      "name" : "name",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "availability" : "in_stock",
    "type" : "camiseta",
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
 * Subir o actualizar archivo de audio
 *
 * trackId UUID 
 * returns TrackResponse
 **/
exports.tracksTrackIdAudioPOST = function(trackId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
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
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

