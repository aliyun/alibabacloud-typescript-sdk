// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteWafStatusResponseBodyDataCors extends $dara.Model {
  /**
   * @remarks
   * The credentials allowed.
   * 
   * @example
   * true
   */
  allowCredentials?: boolean;
  /**
   * @remarks
   * The headers allowed.
   * 
   * @example
   * *
   */
  allowHeaders?: string;
  /**
   * @remarks
   * The methods allowed.
   * 
   * @example
   * GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH
   */
  allowMethods?: string;
  /**
   * @remarks
   * The origins allowed.
   * 
   * @example
   * *
   */
  allowOrigins?: string;
  /**
   * @remarks
   * The response headers.
   * 
   * @example
   * *
   */
  exposeHeaders?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The time unit.
   * 
   * @example
   * s
   */
  timeUnit?: string;
  /**
   * @remarks
   * The unit number.
   * 
   * @example
   * 1
   */
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'AllowCredentials',
      allowHeaders: 'AllowHeaders',
      allowMethods: 'AllowMethods',
      allowOrigins: 'AllowOrigins',
      exposeHeaders: 'ExposeHeaders',
      status: 'Status',
      timeUnit: 'TimeUnit',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'boolean',
      allowHeaders: 'string',
      allowMethods: 'string',
      allowOrigins: 'string',
      exposeHeaders: 'string',
      status: 'string',
      timeUnit: 'string',
      unitNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataDirectResponse extends $dara.Model {
  /**
   * @remarks
   * The mock return value.
   * 
   * @example
   * [{\\"key\\":\\"h68d13466.sqa.eu95\\",\\"dims\\":\\"groupName=All}]
   */
  body?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 200
   */
  code?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      code: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataHTTPRewrite extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The HTTP request path.
   * 
   * @example
   * /test/client
   */
  path?: string;
  /**
   * @remarks
   * The path type of the HTTP request.
   * 
   * @example
   * PRE
   */
  pathType?: string;
  /**
   * @remarks
   * The matching pattern.
   * 
   * @example
   * /test
   */
  pattern?: string;
  /**
   * @remarks
   * The HTTP status.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The replacement.
   * 
   * @example
   * test
   */
  substitution?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      pathType: 'PathType',
      pattern: 'Pattern',
      status: 'Status',
      substitution: 'Substitution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      pathType: 'string',
      pattern: 'string',
      status: 'string',
      substitution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataHeaderOpHeaderOpItems extends $dara.Model {
  /**
   * @remarks
   * The request or response.
   * 
   * @example
   * Response
   */
  directionType?: string;
  /**
   * @remarks
   * The header key.
   * 
   * @example
   * debug
   */
  key?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * Add
   */
  opType?: string;
  /**
   * @remarks
   * The header value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      directionType: 'DirectionType',
      key: 'Key',
      opType: 'OpType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directionType: 'string',
      key: 'string',
      opType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataHeaderOp extends $dara.Model {
  /**
   * @remarks
   * The policy.
   */
  headerOpItems?: UpdateGatewayRouteWafStatusResponseBodyDataHeaderOpHeaderOpItems[];
  /**
   * @remarks
   * The status.
   * 
   * @example
   * off
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      headerOpItems: 'HeaderOpItems',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerOpItems: { 'type': 'array', 'itemType': UpdateGatewayRouteWafStatusResponseBodyDataHeaderOpHeaderOpItems },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.headerOpItems)) {
      $dara.Model.validateArray(this.headerOpItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRedirect extends $dara.Model {
  /**
   * @remarks
   * The response code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * ww.al.c
   */
  host?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      host: 'Host',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      host: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRetry extends $dara.Model {
  /**
   * @remarks
   * The number of retries allowed for a request.
   * 
   * @example
   * 1
   */
  attempts?: number;
  /**
   * @remarks
   * The HTTP status code.
   */
  httpCodes?: string[];
  /**
   * @remarks
   * The retry condition.
   */
  retryOn?: string[];
  /**
   * @remarks
   * The retry status.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      attempts: 'Attempts',
      httpCodes: 'HttpCodes',
      retryOn: 'RetryOn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      httpCodes: { 'type': 'array', 'itemType': 'string' },
      retryOn: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.httpCodes)) {
      $dara.Model.validateArray(this.httpCodes);
    }
    if(Array.isArray(this.retryOn)) {
      $dara.Model.validateArray(this.retryOn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesHeaderPredicates extends $dara.Model {
  /**
   * @remarks
   * The key of the request header.
   * 
   * @example
   * alibo
   */
  key?: string;
  /**
   * @remarks
   * The matching type.
   * 
   * @example
   * PRE
   */
  type?: string;
  /**
   * @remarks
   * The value of the request header.
   * 
   * @example
   * 200
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesPathPredicates extends $dara.Model {
  /**
   * @remarks
   * Indicates whether case sensitivity is ignored.
   * 
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /zookeeper/mmgw/unlogined/common.getBu
   */
  path?: string;
  /**
   * @remarks
   * The matching type.
   * 
   * @example
   * PRE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreCase: 'IgnoreCase',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreCase: 'boolean',
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesQueryPredicates extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * instanceId
   */
  key?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * PRE
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicates extends $dara.Model {
  /**
   * @remarks
   * The information about matching based on request headers.
   */
  headerPredicates?: UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesHeaderPredicates[];
  /**
   * @remarks
   * The information about method matching.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * The information about route matching.
   */
  pathPredicates?: UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesPathPredicates;
  /**
   * @remarks
   * The parameter matching rules.
   */
  queryPredicates?: UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesQueryPredicates[];
  static names(): { [key: string]: string } {
    return {
      headerPredicates: 'HeaderPredicates',
      methodPredicates: 'MethodPredicates',
      pathPredicates: 'PathPredicates',
      queryPredicates: 'QueryPredicates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerPredicates: { 'type': 'array', 'itemType': UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesQueryPredicates },
    };
  }

  validate() {
    if(Array.isArray(this.headerPredicates)) {
      $dara.Model.validateArray(this.headerPredicates);
    }
    if(Array.isArray(this.methodPredicates)) {
      $dara.Model.validateArray(this.methodPredicates);
    }
    if(this.pathPredicates && typeof (this.pathPredicates as any).validate === 'function') {
      (this.pathPredicates as any).validate();
    }
    if(Array.isArray(this.queryPredicates)) {
      $dara.Model.validateArray(this.queryPredicates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRouteServices extends $dara.Model {
  /**
   * @remarks
   * The name of the group to which the service belongs.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * test-aixue-gray
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 80
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 547
   */
  serviceId?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * b-service
   */
  serviceName?: string;
  /**
   * @remarks
   * The source type of the service.
   * 
   * @example
   * K8s
   */
  sourceType?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      percent: 'Percent',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      sourceType: 'SourceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      percent: 'number',
      serviceId: 'number',
      serviceName: 'string',
      sourceType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataTimeout extends $dara.Model {
  /**
   * @remarks
   * The status.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The time unit.
   * 
   * @example
   * s
   */
  timeUnit?: string;
  /**
   * @remarks
   * The unit number.
   * 
   * @example
   * 10
   */
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      timeUnit: 'TimeUnit',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      timeUnit: 'string',
      unitNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration for cross-origin resource sharing (CORS).
   */
  cors?: UpdateGatewayRouteWafStatusResponseBodyDataCors;
  /**
   * @remarks
   * The default service ID.
   * 
   * @example
   * 1
   */
  defaultServiceId?: number;
  /**
   * @remarks
   * The default service name.
   * 
   * @example
   * test
   */
  defaultServiceName?: string;
  /**
   * @remarks
   * The destination service type.
   * 
   * @example
   * Single
   */
  destinationType?: string;
  /**
   * @remarks
   * The information about service mocking.
   */
  directResponse?: UpdateGatewayRouteWafStatusResponseBodyDataDirectResponse;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 235
   */
  domainId?: number;
  /**
   * @remarks
   * The list of domain IDs.
   */
  domainIdList?: number[];
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * nbhamster.com
   */
  domainName?: string;
  /**
   * @remarks
   * The domain names.
   */
  domainNameList?: string[];
  /**
   * @remarks
   * Indicates whether WAF is activated.
   * 
   * @example
   * 0
   */
  enableWaf?: boolean;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 102
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597cd4a9****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-26T09:52:41.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-02-24T06:08:29.230+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The information about the rewrite policy.
   */
  HTTPRewrite?: UpdateGatewayRouteWafStatusResponseBodyDataHTTPRewrite;
  /**
   * @remarks
   * The header settings.
   */
  headerOp?: UpdateGatewayRouteWafStatusResponseBodyDataHeaderOp;
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The matching rule.
   * 
   * @example
   * {\\"PathPredicates\\":{\\"Path\\":\\"/metas\\",\\"Type\\":\\"PRE\\",\\"IgnoreCase\\":false}}
   */
  predicates?: string;
  /**
   * @remarks
   * The configuration of the redirection.
   */
  redirect?: UpdateGatewayRouteWafStatusResponseBodyDataRedirect;
  /**
   * @remarks
   * The retry configuration.
   */
  retry?: UpdateGatewayRouteWafStatusResponseBodyDataRetry;
  /**
   * @remarks
   * The sequence number of the route.
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * The information about route matching.
   */
  routePredicates?: UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicates;
  /**
   * @remarks
   * The information about services.
   */
  routeServices?: UpdateGatewayRouteWafStatusResponseBodyDataRouteServices[];
  /**
   * @remarks
   * The information about services.
   * 
   * @example
   * [{\\"Percent\\":100,\\"ServiceId\\":126}]
   */
  services?: string;
  /**
   * @remarks
   * The status of the route.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The timeout configuration.
   */
  timeout?: UpdateGatewayRouteWafStatusResponseBodyDataTimeout;
  static names(): { [key: string]: string } {
    return {
      cors: 'Cors',
      defaultServiceId: 'DefaultServiceId',
      defaultServiceName: 'DefaultServiceName',
      destinationType: 'DestinationType',
      directResponse: 'DirectResponse',
      domainId: 'DomainId',
      domainIdList: 'DomainIdList',
      domainName: 'DomainName',
      domainNameList: 'DomainNameList',
      enableWaf: 'EnableWaf',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      HTTPRewrite: 'HTTPRewrite',
      headerOp: 'HeaderOp',
      id: 'Id',
      name: 'Name',
      predicates: 'Predicates',
      redirect: 'Redirect',
      retry: 'Retry',
      routeOrder: 'RouteOrder',
      routePredicates: 'RoutePredicates',
      routeServices: 'RouteServices',
      services: 'Services',
      status: 'Status',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cors: UpdateGatewayRouteWafStatusResponseBodyDataCors,
      defaultServiceId: 'number',
      defaultServiceName: 'string',
      destinationType: 'string',
      directResponse: UpdateGatewayRouteWafStatusResponseBodyDataDirectResponse,
      domainId: 'number',
      domainIdList: { 'type': 'array', 'itemType': 'number' },
      domainName: 'string',
      domainNameList: { 'type': 'array', 'itemType': 'string' },
      enableWaf: 'boolean',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      HTTPRewrite: UpdateGatewayRouteWafStatusResponseBodyDataHTTPRewrite,
      headerOp: UpdateGatewayRouteWafStatusResponseBodyDataHeaderOp,
      id: 'number',
      name: 'string',
      predicates: 'string',
      redirect: UpdateGatewayRouteWafStatusResponseBodyDataRedirect,
      retry: UpdateGatewayRouteWafStatusResponseBodyDataRetry,
      routeOrder: 'number',
      routePredicates: UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicates,
      routeServices: { 'type': 'array', 'itemType': UpdateGatewayRouteWafStatusResponseBodyDataRouteServices },
      services: 'string',
      status: 'number',
      timeout: UpdateGatewayRouteWafStatusResponseBodyDataTimeout,
    };
  }

  validate() {
    if(this.cors && typeof (this.cors as any).validate === 'function') {
      (this.cors as any).validate();
    }
    if(this.directResponse && typeof (this.directResponse as any).validate === 'function') {
      (this.directResponse as any).validate();
    }
    if(Array.isArray(this.domainIdList)) {
      $dara.Model.validateArray(this.domainIdList);
    }
    if(Array.isArray(this.domainNameList)) {
      $dara.Model.validateArray(this.domainNameList);
    }
    if(this.HTTPRewrite && typeof (this.HTTPRewrite as any).validate === 'function') {
      (this.HTTPRewrite as any).validate();
    }
    if(this.headerOp && typeof (this.headerOp as any).validate === 'function') {
      (this.headerOp as any).validate();
    }
    if(this.redirect && typeof (this.redirect as any).validate === 'function') {
      (this.redirect as any).validate();
    }
    if(this.retry && typeof (this.retry as any).validate === 'function') {
      (this.retry as any).validate();
    }
    if(this.routePredicates && typeof (this.routePredicates as any).validate === 'function') {
      (this.routePredicates as any).validate();
    }
    if(Array.isArray(this.routeServices)) {
      $dara.Model.validateArray(this.routeServices);
    }
    if(this.timeout && typeof (this.timeout as any).validate === 'function') {
      (this.timeout as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateGatewayRouteWafStatusResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7466566F-F30F-4A29-965D-3E0AF21D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UpdateGatewayRouteWafStatusResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

