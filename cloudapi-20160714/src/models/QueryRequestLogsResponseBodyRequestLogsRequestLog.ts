// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRequestLogsResponseBodyRequestLogsRequestLog extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * 4b83229ebcab4ecd88956fb3********
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * ApiName
   */
  apiName?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * VIPROOM_VIPROOM
   */
  appName?: string;
  /**
   * @remarks
   * The time when API Gateway finished forwarding the request to the backend service.
   * 
   * @example
   * 1731487224969
   */
  backendRequestEnd?: number;
  /**
   * @remarks
   * The time when API Gateway started to forward the request to the backend service.
   * 
   * @example
   * 1731487224969
   */
  backendRequestStart?: number;
  /**
   * @remarks
   * The time when API Gateway finished receiving the response from the backend service.
   * 
   * @example
   * 1731487224989
   */
  backendResponseEnd?: number;
  /**
   * @remarks
   * The time when API Gateway started to receive the response from the backend service.
   * 
   * @example
   * 1731487224989
   */
  backendResponseStart?: number;
  /**
   * @remarks
   * The IP address of the client that sends the request.
   * 
   * @example
   * 21.237.XXX.XXX
   */
  clientIp?: string;
  /**
   * @remarks
   * The X-Ca-Nonce header included in the request from the client.
   * 
   * @example
   * d43df9db-3b05-4cd6-888a-1c0b********
   */
  clientNonce?: string;
  /**
   * @remarks
   * The application ID that is used by the caller.
   * 
   * @example
   * 11096****
   */
  consumerAppId?: string;
  /**
   * @remarks
   * The App Key that is used by the caller.
   * 
   * @example
   * 20412****
   */
  consumerAppKey?: string;
  /**
   * @remarks
   * The custom trace ID.
   * 
   * @example
   * 95657ED9-2F6F-426F-BD99-79C8********
   */
  customTraceId?: string;
  /**
   * @remarks
   * The requested domain name in the request.
   * 
   * @example
   * 360bdd88695c48ae8085c7f2********-ap-southeast-1.alicloudapi.com
   */
  domain?: string;
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * X500ER
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Backend service connect failed `Timeout connecting to [/1XX.20.0.XX:8080]`
   */
  errorMessage?: string;
  /**
   * @remarks
   * The specific error message returned by the backend service.
   * 
   * @example
   * error msg
   */
  exception?: string;
  /**
   * @remarks
   * The time when API Gateway finished receiving the request.
   * 
   * @example
   * 1731487224968
   */
  frontRequestEnd?: number;
  /**
   * @remarks
   * The time when API Gateway started to receive the request.
   * 
   * @example
   * 1731487224968
   */
  frontRequestStart?: number;
  /**
   * @remarks
   * The time when API Gateway finished forwarding the response to the client.
   * 
   * @example
   * 1731487224989
   */
  frontResponseEnd?: number;
  /**
   * @remarks
   * The time when API Gateway started to forward the response to the client.
   * 
   * @example
   * 1731487224989
   */
  frontResponseStart?: number;
  /**
   * @remarks
   * The ID of the API group to which the API belongs.
   * 
   * @example
   * dc024277fe6c4cada79ba0bd6********
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group to which the API belongs.
   * 
   * @example
   * GroupName
   */
  groupName?: string;
  /**
   * @remarks
   * The HTTP method that is used to send the request.
   * 
   * @example
   * POST
   */
  httpMethod?: string;
  /**
   * @remarks
   * The path of the request.
   * 
   * @example
   * /testPath
   */
  httpPath?: string;
  /**
   * @remarks
   * The initial request ID when API Gateway calls an API. For example, if API-1 calls API-2, the initialRequestId parameter in the log of API-2 indicates the ID of the request from API-1.
   * 
   * @example
   * 95657ED9-2F6F-426F-BD99-79C8********
   */
  initialRequestId?: string;
  /**
   * @remarks
   * The ID of the API Gateway instance to which the API belongs.
   * 
   * @example
   * apigateway-bj-ab2b********
   */
  instanceId?: string;
  /**
   * @remarks
   * The JSON web token (JWT) claims. The claims can be configured at the group level.
   * 
   * @example
   * {}
   */
  jwtClaims?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The request body. A request body cannot exceed 1,024 bytes in size.
   * 
   * @example
   * param=paramName
   */
  requestBody?: string;
  /**
   * @remarks
   * The request headers.
   * 
   * @example
   * content-type: application/x-www-form-urlencoded
   */
  requestHeaders?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95657ED9-2F6F-426F-BD99-79C8********
   */
  requestId?: string;
  /**
   * @remarks
   * The protocol used by the client to send the request. Valid values: HTTP, HTTPS, and WS.
   * 
   * @example
   * HTTP
   */
  requestProtocol?: string;
  /**
   * @remarks
   * The query string for the request.
   * 
   * @example
   * username=name
   */
  requestQueryString?: string;
  /**
   * @remarks
   * The size of the request. Unit: bytes.
   * 
   * @example
   * 1923
   */
  requestSize?: string;
  /**
   * @remarks
   * The request time, in UTC.
   * 
   * @example
   * 2022-10-29T03:59:59Z
   */
  requestTime?: string;
  /**
   * @remarks
   * The response body. A response body cannot exceed 1,024 bytes in size.
   * 
   * @example
   * param=paramName
   */
  responseBody?: string;
  /**
   * @remarks
   * The headers in the API response.
   * 
   * @example
   * content-type: application/x-www-form-urlencoded
   */
  responseHeaders?: string;
  /**
   * @remarks
   * The size of returned data. Unit: bytes.
   * 
   * @example
   * 23441
   */
  responseSize?: string;
  /**
   * @remarks
   * The total time consumed to access the backend resources. The total time includes the time consumed to request a connection to the resources, the time consumed to establish the connection, and the time consumed to call the backend service. Unit: milliseconds.
   * 
   * @example
   * 324
   */
  serviceLatency?: string;
  /**
   * @remarks
   * The ID of the API environment.
   * 
   * @example
   * 8a305b7f10334052a52d9156********
   */
  stageId?: string;
  /**
   * @remarks
   * The name of the API environment.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  statusCode?: string;
  /**
   * @remarks
   * The total time consumed by the request. Unit: milliseconds.
   * 
   * @example
   * 1345
   */
  totalLatency?: string;
  /**
   * @remarks
   * The plug-in hit by the request and the relevant context.
   * 
   * @example
   * []
   */
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

