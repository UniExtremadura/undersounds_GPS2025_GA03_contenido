'use strict';


/**
 * Listar productos de merchandising
 *
 * page Integer  (optional)
 * limit Integer  (optional)
 * artistId UUID  (optional)
 * labelId UUID  (optional)
 * type String Tipo de producto (optional)
 * availability String  (optional)
 * sort String Campo de ordenación (optional)
 * order String  (optional)
 * q String  (optional)
 * returns PaginatedMerchList
 **/
exports.merchGET = function(page,limit,artistId,labelId,type,availability,sort,order,q) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
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
  }, {
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
 * Listar comentarios de un producto
 *
 * merchId UUID 
 * page Integer  (optional)
 * limit Integer  (optional)
 * returns PaginatedCommentList
 **/
exports.merchMerchIdCommentsGET = function(merchId,page,limit) {
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
 * Comentar en un producto
 *
 * body CommentCreateInput 
 * merchId UUID 
 * returns CommentResponse
 **/
exports.merchMerchIdCommentsPOST = function(body,merchId) {
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
 * Eliminar producto
 *
 * merchId UUID 
 * no response value expected for this operation
 **/
exports.merchMerchIdDELETE = function(merchId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Detalle de producto
 *
 * merchId UUID 
 * returns MerchResponse
 **/
exports.merchMerchIdGET = function(merchId) {
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
 * Actualizar producto
 *
 * body MerchUpdateInput 
 * merchId UUID 
 * returns MerchResponse
 **/
exports.merchMerchIdPATCH = function(body,merchId) {
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
 * Listar variantes de un producto
 *
 * merchId UUID 
 * returns inline_response_200_1
 **/
exports.merchMerchIdVariantsGET = function(merchId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
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
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear variante
 *
 * body VariantCreateInput 
 * merchId UUID 
 * returns inline_response_201
 **/
exports.merchMerchIdVariantsPOST = function(body,merchId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "color" : "color",
    "size" : "size",
    "price" : 0.8008282,
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sku" : "sku",
    "stock" : 6
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
 * Eliminar variante
 *
 * merchId UUID 
 * variantId UUID 
 * no response value expected for this operation
 **/
exports.merchMerchIdVariantsVariantIdDELETE = function(merchId,variantId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Actualizar stock/precio de variante
 *
 * body VariantUpdateInput 
 * merchId UUID 
 * variantId UUID 
 * returns inline_response_201
 **/
exports.merchMerchIdVariantsVariantIdPATCH = function(body,merchId,variantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "color" : "color",
    "size" : "size",
    "price" : 0.8008282,
    "currency" : "EUR",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "sku" : "sku",
    "stock" : 6
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
 * Crear producto de merchandising
 *
 * body MerchCreateInput 
 * returns MerchResponse
 **/
exports.merchPOST = function(body) {
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

