// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRequestLogsResponseBodyRequestLogsRequestLog extends $dara.Model {
  apiId?: string;
  apiName?: string;
  appName?: string;
  backendRequestEnd?: number;
  backendRequestStart?: number;
  backendResponseEnd?: number;
  backendResponseStart?: number;
  clientIp?: string;
  clientNonce?: string;
  consumerAppId?: string;
  consumerAppKey?: string;
  customTraceId?: string;
  domain?: string;
  errorCode?: string;
  errorMessage?: string;
  exception?: string;
  frontRequestEnd?: number;
  frontRequestStart?: number;
  frontResponseEnd?: number;
  frontResponseStart?: number;
  groupId?: string;
  groupName?: string;
  httpMethod?: string;
  httpPath?: string;
  initialRequestId?: string;
  instanceId?: string;
  jwtClaims?: string;
  region?: string;
  requestBody?: string;
  requestHeaders?: string;
  requestId?: string;
  requestProtocol?: string;
  requestQueryString?: string;
  requestSize?: string;
  requestTime?: string;
  responseBody?: string;
  responseHeaders?: string;
  responseSize?: string;
  serviceLatency?: string;
  stageId?: string;
  stageName?: string;
  statusCode?: string;
  totalLatency?: string;
  plugin?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      appName: 'AppName',
      backendRequestEnd: 'BackendRequestEnd',
      backendRequestStart: 'BackendRequestStart',
      backendResponseEnd: 'BackendResponseEnd',
      backendResponseStart: 'BackendResponseStart',
      clientIp: 'ClientIp',
      clientNonce: 'ClientNonce',
      consumerAppId: 'ConsumerAppId',
      consumerAppKey: 'ConsumerAppKey',
      customTraceId: 'CustomTraceId',
      domain: 'Domain',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      exception: 'Exception',
      frontRequestEnd: 'FrontRequestEnd',
      frontRequestStart: 'FrontRequestStart',
      frontResponseEnd: 'FrontResponseEnd',
      frontResponseStart: 'FrontResponseStart',
      groupId: 'GroupId',
      groupName: 'GroupName',
      httpMethod: 'HttpMethod',
      httpPath: 'HttpPath',
      initialRequestId: 'InitialRequestId',
      instanceId: 'InstanceId',
      jwtClaims: 'JwtClaims',
      region: 'Region',
      requestBody: 'RequestBody',
      requestHeaders: 'RequestHeaders',
      requestId: 'RequestId',
      requestProtocol: 'RequestProtocol',
      requestQueryString: 'RequestQueryString',
      requestSize: 'RequestSize',
      requestTime: 'RequestTime',
      responseBody: 'ResponseBody',
      responseHeaders: 'ResponseHeaders',
      responseSize: 'ResponseSize',
      serviceLatency: 'ServiceLatency',
      stageId: 'StageId',
      stageName: 'StageName',
      statusCode: 'StatusCode',
      totalLatency: 'TotalLatency',
      plugin: 'plugin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      appName: 'string',
      backendRequestEnd: 'number',
      backendRequestStart: 'number',
      backendResponseEnd: 'number',
      backendResponseStart: 'number',
      clientIp: 'string',
      clientNonce: 'string',
      consumerAppId: 'string',
      consumerAppKey: 'string',
      customTraceId: 'string',
      domain: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      exception: 'string',
      frontRequestEnd: 'number',
      frontRequestStart: 'number',
      frontResponseEnd: 'number',
      frontResponseStart: 'number',
      groupId: 'string',
      groupName: 'string',
      httpMethod: 'string',
      httpPath: 'string',
      initialRequestId: 'string',
      instanceId: 'string',
      jwtClaims: 'string',
      region: 'string',
      requestBody: 'string',
      requestHeaders: 'string',
      requestId: 'string',
      requestProtocol: 'string',
      requestQueryString: 'string',
      requestSize: 'string',
      requestTime: 'string',
      responseBody: 'string',
      responseHeaders: 'string',
      responseSize: 'string',
      serviceLatency: 'string',
      stageId: 'string',
      stageName: 'string',
      statusCode: 'string',
      totalLatency: 'string',
      plugin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRequestLogsResponseBodyRequestLogs extends $dara.Model {
  requestLog?: QueryRequestLogsResponseBodyRequestLogsRequestLog[];
  static names(): { [key: string]: string } {
    return {
      requestLog: 'RequestLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestLog: { 'type': 'array', 'itemType': QueryRequestLogsResponseBodyRequestLogsRequestLog },
    };
  }

  validate() {
    if(Array.isArray(this.requestLog)) {
      $dara.Model.validateArray(this.requestLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRequestLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CE5722A6-AE78-4741-A9B0-6C81********
   */
  requestId?: string;
  requestLogs?: QueryRequestLogsResponseBodyRequestLogs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      requestLogs: 'RequestLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      requestLogs: QueryRequestLogsResponseBodyRequestLogs,
    };
  }

  validate() {
    if(this.requestLogs && typeof (this.requestLogs as any).validate === 'function') {
      (this.requestLogs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

