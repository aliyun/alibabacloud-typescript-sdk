// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRouteResponseBodyDataResultComment extends $dara.Model {
  /**
   * @remarks
   * Status.
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
   * Mock return value
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * Response code.
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
   * Protocol Type.
   * 
   * @example
   * DUBBO
   */
  agreementType?: string;
  /**
   * @remarks
   * Service group name.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * Service namespace.
   * 
   * @example
   * Namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Weight percentage.
   * 
   * @example
   * 100
   */
  percent?: number;
  /**
   * @remarks
   * Service ID.
   * 
   * @example
   * 353
   */
  serviceId?: number;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * service name
   */
  serviceName?: string;
  /**
   * @remarks
   * Service port.
   * 
   * @example
   * 8848
   */
  servicePort?: number;
  /**
   * @remarks
   * Source type.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  /**
   * @remarks
   * Service version.
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
   * Response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Redirect hostname
   * 
   * @example
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * Path.
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
   * Header KEY
   * 
   * @example
   * userid
   */
  key?: string;
  /**
   * @remarks
   * Matching type
   * 
   * @example
   * PRE
   */
  type?: string;
  /**
   * @remarks
   * Matching value
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
   * Case insensitive
   * 
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @remarks
   * Node path.
   * 
   * @example
   * /getIp
   */
  path?: string;
  /**
   * @remarks
   * Matching type.
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
   * Parameter name
   * 
   * @example
   * userid
   */
  key?: string;
  /**
   * @remarks
   * Matching type
   * 
   * @example
   * PRE
   */
  type?: string;
  /**
   * @remarks
   * Matching value
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
   * Header matching
   */
  headerPredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicatesHeaderPredicates[];
  /**
   * @remarks
   * HTTP method matching
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * Route Path matching.
   */
  pathPredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicatesPathPredicates;
  /**
   * @remarks
   * Parameter matching
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
   * Extract key from input.
   * 
   * @example
   * name
   */
  extractKey?: string;
  /**
   * @remarks
   * Input parameter position.
   * 
   * > Input parameter position enumeration values.
   * >
   * > - Request parameter: `ALL_QUERY_PARAMETER`
   * >
   * > - Request header: `ALL_HEADER`
   * >
   * > - Request path: `ALL_PATH`
   * >
   * > - Request body: `ALL_BODY`
   * 
   * @example
   * ALL_QUERY_PARAMETER
   */
  extractKeySpec?: string;
  /**
   * @remarks
   * Backend parameter type.
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
   * Dubbo method name.
   * 
   * @example
   * sayHello
   */
  dubboMothedName?: string;
  /**
   * @remarks
   * Http method.
   * 
   * > Supported HTTP method parameter values.
   * >
   * > - ALL_GET
   * >
   * > - ALL_POST
   * >
   * > - ALL_PUT
   * >
   * > - ALL_DELETE
   * >
   * > - ALL_PATCH
   * 
   * @example
   * ALL_GET
   */
  httpMothed?: string;
  /**
   * @remarks
   * Method matching path.
   * 
   * @example
   * /mytestzbk/sayhello
   */
  mothedpath?: string;
  /**
   * @remarks
   * Parameter mapping list.
   */
  paramMapsList?: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList[];
  /**
   * @remarks
   * Header pass-through type.
   * 
   * > Pass-through type enumeration values.
   * >
   * > - Pass through all: PASS_ALL
   * >
   * > - No pass-through: PASS_NOT
   * >
   * > - Specified parameters: PASS_ASSIGN
   * 
   * @example
   * PASS_NOT
   */
  passThroughAllHeaders?: string;
  /**
   * @remarks
   * Specified pass-through Header list.
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
   * Dubbo service group.
   * 
   * @example
   * service group
   */
  dubboServiceGroup?: string;
  /**
   * @remarks
   * Dubbo service name.
   * 
   * @example
   * org.apache.dubbo.samples.basic.api.DemoService
   */
  dubboServiceName?: string;
  /**
   * @remarks
   * Dubbo service version.
   * 
   * @example
   * 0.0.0
   */
  dubboServiceVersion?: string;
  /**
   * @remarks
   * Dubbo forwarding rule list.
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
   * Protocol Type.
   * 
   * @example
   * DUBBO
   */
  agreementType?: string;
  /**
   * @remarks
   * Service group name.
   * 
   * @example
   * api
   */
  groupName?: string;
  /**
   * @remarks
   * Health status
   * 
   * - Health
   * 
   * - Unhealthy
   * 
   * - Checking
   * 
   * - Unknown
   * 
   * @example
   * Health
   */
  healthStatus?: string;
  /**
   * @remarks
   * Dubbo protocol conversion body.
   */
  httpDubboTranscoder?: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Weight percentage
   * 
   * @example
   * 11
   */
  percent?: number;
  /**
   * @remarks
   * Service ID
   * 
   * @example
   * 1563
   */
  serviceId?: number;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * hu
   */
  serviceName?: string;
  /**
   * @remarks
   * Service port.
   * 
   * @example
   * 20880
   */
  servicePort?: number;
  /**
   * @remarks
   * Source type
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  /**
   * @remarks
   * Unhealthy Endpoint list
   */
  unhealthyEndpoints?: string[];
  /**
   * @remarks
   * Service version.
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
   * Route comment (ingress)
   */
  comment?: ListGatewayRouteResponseBodyDataResultComment;
  /**
   * @remarks
   * Default service ID.
   * 
   * @example
   * 1
   */
  defaultServiceId?: number;
  /**
   * @remarks
   * Default service name.
   * 
   * @example
   * test
   */
  defaultServiceName?: string;
  /**
   * @remarks
   * Destination type.
   * 
   * @example
   * Single
   */
  destinationType?: string;
  /**
   * @remarks
   * Mock configuration
   */
  directResponse?: ListGatewayRouteResponseBodyDataResultDirectResponse;
  /**
   * @remarks
   * Domain ID.
   * 
   * @example
   * 265
   */
  domainId?: number;
  /**
   * @remarks
   * Domain list.
   */
  domainIdList?: number[];
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * y.com
   */
  domainName?: string;
  /**
   * @remarks
   * Domain name list.
   */
  domainNameList?: string[];
  /**
   * @remarks
   * Whether to enable dynamic routing
   */
  dynamicRoute?: boolean;
  /**
   * @remarks
   * Whether to enable WAF
   * 
   * @example
   * false
   */
  enableWaf?: string;
  /**
   * @remarks
   * Whether to enable Fallback service.
   * 
   * @example
   * true
   */
  fallback?: boolean;
  /**
   * @remarks
   * Fallback service.
   */
  fallbackServices?: ListGatewayRouteResponseBodyDataResultFallbackServices[];
  /**
   * @remarks
   * Gateway ID.
   * 
   * @example
   * 496
   */
  gatewayId?: number;
  /**
   * @remarks
   * Gateway unique identifier.
   * 
   * @example
   * gw-cf0e7f52ecc7429dbc7ba4d5e3656100
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2022-01-25T07:14:01.817+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * Route ID.
   * 
   * @example
   * 47
   */
  id?: number;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Matching rules
   * 
   * @example
   * {\\"PathPredicates\\":{\\"Path\\":\\"/rpc/compute \\",\\"Type\\":\\"PRE\\",\\"IgnoreCase\\":true}}
   */
  predicates?: string;
  /**
   * @remarks
   * Redirection
   */
  redirect?: ListGatewayRouteResponseBodyDataResultRedirect;
  /**
   * @remarks
   * Order
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * Matching rules
   */
  routePredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicates;
  /**
   * @remarks
   * Service.
   */
  routeServices?: ListGatewayRouteResponseBodyDataResultRouteServices[];
  /**
   * @remarks
   * Service.
   * 
   * @example
   * []
   */
  services?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * Route type
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
   * Page number.
   * 
   * @example
   * 11
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Data structure.
   */
  result?: ListGatewayRouteResponseBodyDataResult[];
  /**
   * @remarks
   * Total number of entries.
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
   * Code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: ListGatewayRouteResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 83F02EAB-ECDF-55C6-B332-8649E5E7AF2C
   */
  requestId?: string;
  /**
   * @remarks
   * Request result, with the following values:
   * 
   * - `true`: The request is successful.
   * 
   * - `false`: The request failed.
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

