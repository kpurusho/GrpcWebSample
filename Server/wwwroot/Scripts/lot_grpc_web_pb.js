/**
 * @fileoverview gRPC-Web generated client stub for lotresult
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.lotresult = require('./lot_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.lotresult.LotServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.lotresult.LotServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.lotresult.LotRequest,
 *   !proto.lotresult.LotResponse>}
 */
const methodDescriptor_LotService_GetLot = new grpc.web.MethodDescriptor(
  '/lotresult.LotService/GetLot',
  grpc.web.MethodType.UNARY,
  proto.lotresult.LotRequest,
  proto.lotresult.LotResponse,
  /**
   * @param {!proto.lotresult.LotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lotresult.LotResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.lotresult.LotRequest,
 *   !proto.lotresult.LotResponse>}
 */
const methodInfo_LotService_GetLot = new grpc.web.AbstractClientBase.MethodInfo(
  proto.lotresult.LotResponse,
  /**
   * @param {!proto.lotresult.LotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lotresult.LotResponse.deserializeBinary
);


/**
 * @param {!proto.lotresult.LotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.lotresult.LotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.lotresult.LotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.lotresult.LotServiceClient.prototype.getLot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/lotresult.LotService/GetLot',
      request,
      metadata || {},
      methodDescriptor_LotService_GetLot,
      callback);
};


/**
 * @param {!proto.lotresult.LotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.lotresult.LotResponse>}
 *     Promise that resolves to the response
 */
proto.lotresult.LotServicePromiseClient.prototype.getLot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/lotresult.LotService/GetLot',
      request,
      metadata || {},
      methodDescriptor_LotService_GetLot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.lotresult.WaferRequest,
 *   !proto.lotresult.WaferResponse>}
 */
const methodDescriptor_LotService_GetWafer = new grpc.web.MethodDescriptor(
  '/lotresult.LotService/GetWafer',
  grpc.web.MethodType.UNARY,
  proto.lotresult.WaferRequest,
  proto.lotresult.WaferResponse,
  /**
   * @param {!proto.lotresult.WaferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lotresult.WaferResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.lotresult.WaferRequest,
 *   !proto.lotresult.WaferResponse>}
 */
const methodInfo_LotService_GetWafer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.lotresult.WaferResponse,
  /**
   * @param {!proto.lotresult.WaferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lotresult.WaferResponse.deserializeBinary
);


/**
 * @param {!proto.lotresult.WaferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.lotresult.WaferResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.lotresult.WaferResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.lotresult.LotServiceClient.prototype.getWafer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/lotresult.LotService/GetWafer',
      request,
      metadata || {},
      methodDescriptor_LotService_GetWafer,
      callback);
};


/**
 * @param {!proto.lotresult.WaferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.lotresult.WaferResponse>}
 *     Promise that resolves to the response
 */
proto.lotresult.LotServicePromiseClient.prototype.getWafer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/lotresult.LotService/GetWafer',
      request,
      metadata || {},
      methodDescriptor_LotService_GetWafer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.lotresult.DefectsRequest,
 *   !proto.lotresult.DefectsResponse>}
 */
const methodDescriptor_LotService_GetDefects = new grpc.web.MethodDescriptor(
  '/lotresult.LotService/GetDefects',
  grpc.web.MethodType.UNARY,
  proto.lotresult.DefectsRequest,
  proto.lotresult.DefectsResponse,
  /**
   * @param {!proto.lotresult.DefectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lotresult.DefectsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.lotresult.DefectsRequest,
 *   !proto.lotresult.DefectsResponse>}
 */
const methodInfo_LotService_GetDefects = new grpc.web.AbstractClientBase.MethodInfo(
  proto.lotresult.DefectsResponse,
  /**
   * @param {!proto.lotresult.DefectsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lotresult.DefectsResponse.deserializeBinary
);


/**
 * @param {!proto.lotresult.DefectsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.lotresult.DefectsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.lotresult.DefectsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.lotresult.LotServiceClient.prototype.getDefects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/lotresult.LotService/GetDefects',
      request,
      metadata || {},
      methodDescriptor_LotService_GetDefects,
      callback);
};


/**
 * @param {!proto.lotresult.DefectsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.lotresult.DefectsResponse>}
 *     Promise that resolves to the response
 */
proto.lotresult.LotServicePromiseClient.prototype.getDefects =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/lotresult.LotService/GetDefects',
      request,
      metadata || {},
      methodDescriptor_LotService_GetDefects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.lotresult.DefectRequest,
 *   !proto.lotresult.Defect>}
 */
const methodDescriptor_LotService_GetDefect = new grpc.web.MethodDescriptor(
  '/lotresult.LotService/GetDefect',
  grpc.web.MethodType.UNARY,
  proto.lotresult.DefectRequest,
  proto.lotresult.Defect,
  /**
   * @param {!proto.lotresult.DefectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lotresult.Defect.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.lotresult.DefectRequest,
 *   !proto.lotresult.Defect>}
 */
const methodInfo_LotService_GetDefect = new grpc.web.AbstractClientBase.MethodInfo(
  proto.lotresult.Defect,
  /**
   * @param {!proto.lotresult.DefectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lotresult.Defect.deserializeBinary
);


/**
 * @param {!proto.lotresult.DefectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.lotresult.Defect)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.lotresult.Defect>|undefined}
 *     The XHR Node Readable Stream
 */
proto.lotresult.LotServiceClient.prototype.getDefect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/lotresult.LotService/GetDefect',
      request,
      metadata || {},
      methodDescriptor_LotService_GetDefect,
      callback);
};


/**
 * @param {!proto.lotresult.DefectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.lotresult.Defect>}
 *     Promise that resolves to the response
 */
proto.lotresult.LotServicePromiseClient.prototype.getDefect =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/lotresult.LotService/GetDefect',
      request,
      metadata || {},
      methodDescriptor_LotService_GetDefect);
};


module.exports = proto.lotresult;

