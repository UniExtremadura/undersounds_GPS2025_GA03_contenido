'use strict';


/**
 * Listar pistas
 *
 * page Integer  (optional)
 * limit Integer  (optional)
 * include List Campos relacionados a incluir, separados por coma. Ej. `tracks,label,stats` (optional)
 * albumId UUID  (optional)
 * artistId UUID  (optional)
 * labelId UUID  (optional)
 * genre String  (optional)
 * tag String  (optional)
 * language String  (optional)
 * minDurationSec Integer  (optional)
 * maxDurationSec Integer  (optional)
 * releasedFrom date  (optional)
 * releasedTo date  (optional)
 * sort String Campo de ordenación (optional)
 * order String  (optional)
 * q String  (optional)
 * returns PaginatedTrackList
 **/
exports.tracksGET = function(page,limit,include,albumId,artistId,labelId,genre,tag,language,minDurationSec,maxDurationSec,releasedFrom,releasedTo,sort,order,q) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
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
 * Crear pista
 *
 * body TrackCreateInput 
 * returns TrackResponse
 **/
exports.tracksPOST = function(body) {
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


/**
 * Listar comentarios de una pista
 *
 * trackId UUID 
 * page Integer  (optional)
 * limit Integer  (optional)
 * returns PaginatedCommentList
 **/
exports.tracksTrackIdCommentsGET = function(trackId,page,limit) {
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
 * Comentar en una pista
 *
 * body CommentCreateInput 
 * trackId UUID 
 * returns CommentResponse
 **/
exports.tracksTrackIdCommentsPOST = function(body,trackId) {
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
 * Eliminar pista
 *
 * trackId UUID 
 * no response value expected for this operation
 **/
exports.tracksTrackIdDELETE = function(trackId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Detalle de pista
 *
 * trackId UUID 
 * include List Campos relacionados a incluir, separados por coma. Ej. `tracks,label,stats` (optional)
 * returns TrackResponse
 **/
exports.tracksTrackIdGET = function(trackId,include) {
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


/**
 * Añadir o actualizar letras
 *
 * body TrackId_lyrics_body 
 * trackId UUID 
 * returns TrackResponse
 **/
exports.tracksTrackIdLyricsPOST = function(body,trackId) {
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


/**
 * Actualizar parcialmente una pista
 *
 * body TrackUpdateInput 
 * trackId UUID 
 * returns TrackResponse
 **/
exports.tracksTrackIdPATCH = function(body,trackId) {
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


/**
 * URL de streaming/preview (redirección 302 o URL firmada)
 *
 * trackId UUID 
 * returns inline_response_200
 **/
exports.tracksTrackIdStreamGET = function(trackId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "url" : "http://example.com/aeiou",
  "expiresAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

