// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRouteResponseBodyDataResultComment extends $dara.Model {
  /**
   * @remarks
   * The status.
   * 
   * @example
   * error
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultDirectResponse extends $dara.Model {
  /**
   * @remarks
   * The return value for service mocking.
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * The response code returned.
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

export class ListGatewayRouteResponseBodyDataResultFallbackServices extends $dara.Model {
  /**
   * @remarks
   * The type of the protocol.
   * 
   * @example
   * DUBBO
   */
  agreementType?: string;
  /**
   * @remarks
   * The name of the group to which the service belongs.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the service belongs.
   * 
   * @example
   * Namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The weight in the form of a percentage value.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 353
   */
  serviceId?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * service name
   */
  serviceName?: string;
  /**
   * @remarks
   * The service port number.
   * 
   * @example
   * 8848
   */
  servicePort?: number;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * MSE
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
      agreementType: 'AgreementType',
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      percent: 'Percent',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      servicePort: 'ServicePort',
      sourceType: 'SourceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementType: 'string',
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      percent: 'number',
      serviceId: 'number',
      serviceName: 'string',
      servicePort: 'number',
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

export class ListGatewayRouteResponseBodyDataResultRedirect extends $dara.Model {
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
   * The hostname to be redirected to.
   * 
   * @example
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /test
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

export class ListGatewayRouteResponseBodyDataResultRoutePredicatesHeaderPredicates extends $dara.Model {
  /**
   * @remarks
   * The header key.
   * 
   * @example
   * userid
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
   * The value.
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

export class ListGatewayRouteResponseBodyDataResultRoutePredicatesPathPredicates extends $dara.Model {
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
   * The path of the node.
   * 
   * @example
   * /getIp
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

export class ListGatewayRouteResponseBodyDataResultRoutePredicatesQueryPredicates extends $dara.Model {
  /**
   * @remarks
   * The key.
   * 
   * @example
   * userid
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
   * The value.
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

export class ListGatewayRouteResponseBodyDataResultRoutePredicates extends $dara.Model {
  /**
   * @remarks
   * The headers used for route matching.
   */
  headerPredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicatesHeaderPredicates[];
  /**
   * @remarks
   * The HTTP methods used for route matching.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * The path used for route matching.
   */
  pathPredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicatesPathPredicates;
  /**
   * @remarks
   * The parameters used for route matching.
   */
  queryPredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicatesQueryPredicates[];
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
      headerPredicates: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultRoutePredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: ListGatewayRouteResponseBodyDataResultRoutePredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultRoutePredicatesQueryPredicates },
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

export class ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList extends $dara.Model {
  /**
   * @remarks
   * The key extracted from the input parameter.
   * 
   * @example
   * name
   */
  extractKey?: string;
  /**
   * @remarks
   * The position of the input parameter.
   * 
   * > Valid values:
   * 
   * *   `ALL_QUERY_PARAMETER`: request parameter
   * 
   * *   `ALL_HEADER`: request header
   * 
   * *   `ALL_PATH`: request path
   * 
   * *   `ALL_BODY`: request body
   * 
   * @example
   * ALL_QUERY_PARAMETER
   */
  extractKeySpec?: string;
  /**
   * @remarks
   * The type of the backend service parameter.
   * 
   * @example
   * java.lang.String
   */
  mappingType?: string;
  static names(): { [key: string]: string } {
    return {
      extractKey: 'ExtractKey',
      extractKeySpec: 'ExtractKeySpec',
      mappingType: 'MappingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractKey: 'string',
      extractKeySpec: 'string',
      mappingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapList extends $dara.Model {
  /**
   * @remarks
   * The method name of the Dubbo service.
   * 
   * @example
   * sayHello
   */
  dubboMothedName?: string;
  /**
   * @remarks
   * The HTTP method.
   * 
   * > Valid values:
   * 
   * *   ALL_GET
   * 
   * *   ALL_POST
   * 
   * *   ALL_PUT
   * 
   * *   ALL_DELETE
   * 
   * *   ALL_PATCH
   * 
   * @example
   * ALL_GET
   */
  httpMothed?: string;
  /**
   * @remarks
   * The path used for method matching.
   * 
   * @example
   * /mytestzbk/sayhello
   */
  mothedpath?: string;
  /**
   * @remarks
   * The information about parameter mappings.
   */
  paramMapsList?: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList[];
  /**
   * @remarks
   * The pass-through type of the header.
   * 
   * > Valid values:
   * 
   * *   PASS_ALL: All headers are passed through.
   * 
   * *   PASS_NOT: All headers are not passed through.
   * 
   * *   PASS_ASSIGN: Specified headers are passed through.
   * 
   * @example
   * PASS_NOT
   */
  passThroughAllHeaders?: string;
  /**
   * @remarks
   * The list of headers to be passed through.
   */
  passThroughList?: string[];
  static names(): { [key: string]: string } {
    return {
      dubboMothedName: 'DubboMothedName',
      httpMothed: 'HttpMothed',
      mothedpath: 'Mothedpath',
      paramMapsList: 'ParamMapsList',
      passThroughAllHeaders: 'PassThroughAllHeaders',
      passThroughList: 'PassThroughList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboMothedName: 'string',
      httpMothed: 'string',
      mothedpath: 'string',
      paramMapsList: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList },
      passThroughAllHeaders: 'string',
      passThroughList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.paramMapsList)) {
      $dara.Model.validateArray(this.paramMapsList);
    }
    if(Array.isArray(this.passThroughList)) {
      $dara.Model.validateArray(this.passThroughList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder extends $dara.Model {
  /**
   * @remarks
   * The Dubbo service group.
   * 
   * @example
   * service group
   */
  dubboServiceGroup?: string;
  /**
   * @remarks
   * The name of the Dubbo service.
   * 
   * @example
   * org.apache.dubbo.samples.basic.api.DemoService
   */
  dubboServiceName?: string;
  /**
   * @remarks
   * The version of the Dubbo service.
   * 
   * @example
   * 0.0.0
   */
  dubboServiceVersion?: string;
  /**
   * @remarks
   * The forwarding rules of the Dubbo service.
   */
  mothedMapList?: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapList[];
  static names(): { [key: string]: string } {
    return {
      dubboServiceGroup: 'DubboServiceGroup',
      dubboServiceName: 'DubboServiceName',
      dubboServiceVersion: 'DubboServiceVersion',
      mothedMapList: 'MothedMapList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboServiceGroup: 'string',
      dubboServiceName: 'string',
      dubboServiceVersion: 'string',
      mothedMapList: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapList },
    };
  }

  validate() {
    if(Array.isArray(this.mothedMapList)) {
      $dara.Model.validateArray(this.mothedMapList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRouteServices extends $dara.Model {
  /**
   * @remarks
   * The type of the protocol.
   * 
   * @example
   * DUBBO
   */
  agreementType?: string;
  /**
   * @remarks
   * The name of the group to which the service belongs.
   * 
   * @example
   * api
   */
  groupName?: string;
  /**
   * @example
   * Health
   */
  healthStatus?: string;
  /**
   * @remarks
   * The transcoder of the Dubbo protocol.
   */
  httpDubboTranscoder?: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
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
   * The weight in the form of a percentage value.
   * 
   * @example
   * 11
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 1563
   */
  serviceId?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * hu
   */
  serviceName?: string;
  /**
   * @remarks
   * The Dubbo port number.
   * 
   * @example
   * 20880
   */
  servicePort?: number;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  unhealthyEndpoints?: string[];
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
      agreementType: 'AgreementType',
      groupName: 'GroupName',
      healthStatus: 'HealthStatus',
      httpDubboTranscoder: 'HttpDubboTranscoder',
      name: 'Name',
      namespace: 'Namespace',
      percent: 'Percent',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      servicePort: 'ServicePort',
      sourceType: 'SourceType',
      unhealthyEndpoints: 'UnhealthyEndpoints',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementType: 'string',
      groupName: 'string',
      healthStatus: 'string',
      httpDubboTranscoder: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder,
      name: 'string',
      namespace: 'string',
      percent: 'number',
      serviceId: 'number',
      serviceName: 'string',
      servicePort: 'number',
      sourceType: 'string',
      unhealthyEndpoints: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(this.httpDubboTranscoder && typeof (this.httpDubboTranscoder as any).validate === 'function') {
      (this.httpDubboTranscoder as any).validate();
    }
    if(Array.isArray(this.unhealthyEndpoints)) {
      $dara.Model.validateArray(this.unhealthyEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The route comment (ingress).
   */
  comment?: ListGatewayRouteResponseBodyDataResultComment;
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
  directResponse?: ListGatewayRouteResponseBodyDataResultDirectResponse;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 265
   */
  domainId?: number;
  /**
   * @remarks
   * The domain IDs.
   */
  domainIdList?: number[];
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * y.com
   */
  domainName?: string;
  /**
   * @remarks
   * The domain names.
   */
  domainNameList?: string[];
  dynamicRoute?: boolean;
  /**
   * @remarks
   * Indicates whether Web Application Firewall (WAF) is activated.
   * 
   * @example
   * false
   */
  enableWaf?: string;
  /**
   * @remarks
   * Indicates whether the Fallback service is enabled.
   * 
   * @example
   * true
   */
  fallback?: boolean;
  /**
   * @remarks
   * The information about the Fallback service.
   */
  fallbackServices?: ListGatewayRouteResponseBodyDataResultFallbackServices[];
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 496
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-cf0e7f52ecc7429dbc7ba4d5e3656100
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-25T07:14:01.817+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 47
   */
  id?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The matching rules.
   * 
   * @example
   * {\\"PathPredicates\\":{\\"Path\\":\\"/rpc/compute \\",\\"Type\\":\\"PRE\\",\\"IgnoreCase\\":true}}
   */
  predicates?: string;
  /**
   * @remarks
   * The information about redirection.
   */
  redirect?: ListGatewayRouteResponseBodyDataResultRedirect;
  /**
   * @remarks
   * The order.
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * The matching rules.
   */
  routePredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicates;
  /**
   * @remarks
   * The information about services.
   */
  routeServices?: ListGatewayRouteResponseBodyDataResultRouteServices[];
  /**
   * @remarks
   * The information about services.
   * 
   * @example
   * []
   */
  services?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The route type.
   * 
   * @example
   * Op
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      defaultServiceId: 'DefaultServiceId',
      defaultServiceName: 'DefaultServiceName',
      destinationType: 'DestinationType',
      directResponse: 'DirectResponse',
      domainId: 'DomainId',
      domainIdList: 'DomainIdList',
      domainName: 'DomainName',
      domainNameList: 'DomainNameList',
      dynamicRoute: 'DynamicRoute',
      enableWaf: 'EnableWaf',
      fallback: 'Fallback',
      fallbackServices: 'FallbackServices',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      predicates: 'Predicates',
      redirect: 'Redirect',
      routeOrder: 'RouteOrder',
      routePredicates: 'RoutePredicates',
      routeServices: 'RouteServices',
      services: 'Services',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: ListGatewayRouteResponseBodyDataResultComment,
      defaultServiceId: 'number',
      defaultServiceName: 'string',
      destinationType: 'string',
      directResponse: ListGatewayRouteResponseBodyDataResultDirectResponse,
      domainId: 'number',
      domainIdList: { 'type': 'array', 'itemType': 'number' },
      domainName: 'string',
      domainNameList: { 'type': 'array', 'itemType': 'string' },
      dynamicRoute: 'boolean',
      enableWaf: 'string',
      fallback: 'boolean',
      fallbackServices: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultFallbackServices },
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      predicates: 'string',
      redirect: ListGatewayRouteResponseBodyDataResultRedirect,
      routeOrder: 'number',
      routePredicates: ListGatewayRouteResponseBodyDataResultRoutePredicates,
      routeServices: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultRouteServices },
      services: 'string',
      status: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.comment && typeof (this.comment as any).validate === 'function') {
      (this.comment as any).validate();
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
    if(Array.isArray(this.fallbackServices)) {
      $dara.Model.validateArray(this.fallbackServices);
    }
    if(this.redirect && typeof (this.redirect as any).validate === 'function') {
      (this.redirect as any).validate();
    }
    if(this.routePredicates && typeof (this.routePredicates as any).validate === 'function') {
      (this.routePredicates as any).validate();
    }
    if(Array.isArray(this.routeServices)) {
      $dara.Model.validateArray(this.routeServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 11
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The data structure.
   */
  result?: ListGatewayRouteResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 36
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListGatewayRouteResponseBodyData;
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
   * The error message returned if the request failed.
   * 
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 83F02EAB-ECDF-55C6-B332-8649E5E7AF2C
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
      data: ListGatewayRouteResponseBodyData,
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

