// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayRouteRequestDirectResponseJSON extends $dara.Model {
  /**
   * @remarks
   * The mock response body.
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * The mock response code.
   * 
   * @example
   * 403
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

export class AddGatewayRouteRequestFallbackServices extends $dara.Model {
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * DUBBO
   */
  agreementType?: string;
  /**
   * @remarks
   * The service group name.
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
   * user
   */
  name?: string;
  /**
   * @remarks
   * The namespace where the service resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The weight percentage.
   * 
   * @example
   * 80
   */
  percent?: number;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 353
   */
  serviceId?: number;
  /**
   * @remarks
   * The service port.
   * 
   * @example
   * 443
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
   * The service version.
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

export class AddGatewayRouteRequestPredicatesHeaderPredicates extends $dara.Model {
  /**
   * @remarks
   * The request header key.
   * 
   * @example
   * debug
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
   * The corresponding value.
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

export class AddGatewayRouteRequestPredicatesPathPredicates extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ignore case.
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
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The route matching type. Valid values:
   * - PRE: prefix match
   * - EQUAL: exact match
   * - ERGULAR: regular expression match
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

export class AddGatewayRouteRequestPredicatesQueryPredicates extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
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
   * The matching value.
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

export class AddGatewayRouteRequestPredicates extends $dara.Model {
  /**
   * @remarks
   * The request header matching rules.
   */
  headerPredicates?: AddGatewayRouteRequestPredicatesHeaderPredicates[];
  /**
   * @remarks
   * The method matching rules.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * The path matching rules.
   */
  pathPredicates?: AddGatewayRouteRequestPredicatesPathPredicates;
  /**
   * @remarks
   * The URL parameter matching rules.
   */
  queryPredicates?: AddGatewayRouteRequestPredicatesQueryPredicates[];
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
      headerPredicates: { 'type': 'array', 'itemType': AddGatewayRouteRequestPredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: AddGatewayRouteRequestPredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': AddGatewayRouteRequestPredicatesQueryPredicates },
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

export class AddGatewayRouteRequestRedirectJSON extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 302
   */
  code?: number;
  /**
   * @remarks
   * The redirect hostname.
   * 
   * @example
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * The redirect path.
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

export class AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList extends $dara.Model {
  /**
   * @remarks
   * The key extracted from the input parameter location.
   * 
   * @example
   * name
   */
  extractKey?: string;
  /**
   * @remarks
   * The input parameter location. Valid values:
   * - ALL_QUERY_PARAMETER: request parameters
   * - ALL_HEADER: request headers
   * - ALL_PATH: URI of the request
   * - ALL_BODY: request body
   * 
   * @example
   * ALL_QUERY_PARAMETER
   */
  extractKeySpec?: string;
  /**
   * @remarks
   * The backend parameter type.
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

export class AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapList extends $dara.Model {
  /**
   * @remarks
   * The Dubbo method name.
   * 
   * @example
   * sayHello
   */
  dubboMothedName?: string;
  /**
   * @remarks
   * The HTTP method. Valid values:
   * - ALL_GET: all GET methods
   * - ALL_POST: all POST methods
   * - ALL_PUT: all PUT methods
   * - ALL_DELETE: all DELETE methods
   * - ALL_PATCH: all PATCH methods
   * 
   * @example
   * ALL_GET
   */
  httpMothed?: string;
  /**
   * @remarks
   * The method matching path.
   * 
   * @example
   * /mytestzbk/sayhello
   */
  mothedpath?: string;
  /**
   * @remarks
   * The parameter mapping list.
   */
  paramMapsList?: AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList[];
  /**
   * @remarks
   * The header pass-through type. Valid values:
   * - PASS_ALL: pass through all headers
   * - PASS_NOT: do not pass through headers
   * - PASS_ASSIGN: pass through specified headers
   * 
   * @example
   * PASS_NOT
   */
  passThroughAllHeaders?: string;
  /**
   * @remarks
   * The list of specified headers to pass through.
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
      paramMapsList: { 'type': 'array', 'itemType': AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList },
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

export class AddGatewayRouteRequestServicesHttpDubboTranscoder extends $dara.Model {
  /**
   * @remarks
   * The service group.
   * 
   * @example
   * group
   */
  dubboServiceGroup?: string;
  /**
   * @remarks
   * The Dubbo service name.
   * 
   * @example
   * org.apache.dubbo.samples.basic.api.DemoService
   */
  dubboServiceName?: string;
  /**
   * @remarks
   * The Dubbo service version.
   * 
   * @example
   * 0.0.0
   */
  dubboServiceVersion?: string;
  /**
   * @remarks
   * The list of Dubbo forwarding rules.
   */
  mothedMapList?: AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapList[];
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
      mothedMapList: { 'type': 'array', 'itemType': AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapList },
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

export class AddGatewayRouteRequestServices extends $dara.Model {
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * DUBBO
   */
  agreementType?: string;
  /**
   * @remarks
   * The service group name.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The Dubbo protocol transcoding configuration.
   */
  httpDubboTranscoder?: AddGatewayRouteRequestServicesHttpDubboTranscoder;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * user
   */
  name?: string;
  /**
   * @remarks
   * The namespace where the service resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The traffic distribution percentage for the current service or service version. This parameter is required only when multiple services or tag-based routing is used.
   * 
   * @example
   * 80
   */
  percent?: number;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 353
   */
  serviceId?: number;
  /**
   * @remarks
   * The service port.
   * 
   * @example
   * 443
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
   * The service version. This parameter is required only when tag-based routing is used.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      agreementType: 'AgreementType',
      groupName: 'GroupName',
      httpDubboTranscoder: 'HttpDubboTranscoder',
      name: 'Name',
      namespace: 'Namespace',
      percent: 'Percent',
      serviceId: 'ServiceId',
      servicePort: 'ServicePort',
      sourceType: 'SourceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementType: 'string',
      groupName: 'string',
      httpDubboTranscoder: AddGatewayRouteRequestServicesHttpDubboTranscoder,
      name: 'string',
      namespace: 'string',
      percent: 'number',
      serviceId: 'number',
      servicePort: 'number',
      sourceType: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.httpDubboTranscoder && typeof (this.httpDubboTranscoder as any).validate === 'function') {
      (this.httpDubboTranscoder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The route description.
   * 
   * @example
   * a route for xxx
   */
  description?: string;
  /**
   * @remarks
   * The destination service type. Valid values:
   * - Single: single service
   * - Multiple: multiple services
   * - VersionOriented: tag-based routing
   * - Mock: mock
   * - Redirect: redirect
   * 
   * @example
   * Multiple
   */
  destinationType?: string;
  /**
   * @remarks
   * The mock response configuration.
   */
  directResponseJSON?: AddGatewayRouteRequestDirectResponseJSON;
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * 20
   */
  domainId?: number;
  /**
   * @remarks
   * The domain name list.
   * 
   * @example
   * [0,94]
   */
  domainIdListJSON?: string;
  /**
   * @remarks
   * **[Deprecated]** Use UpdateGatewayRouteWafStatus to update the WAF status of the route.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  enableWaf?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the fallback service.
   * 
   * @example
   * true
   */
  fallback?: boolean;
  /**
   * @remarks
   * The fallback service.
   */
  fallbackServices?: AddGatewayRouteRequestFallbackServices[];
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 526
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-492af9b04bb4474cae9d645be8*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The JSON string of the route policy.
   * 
   * @example
   * {"CORS":"{\\"allowMethods\\":\\"GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH\\",\\"allowHeaders\\":\\"*\\",\\"exposeHeaders\\":\\"*\\",\\"unitNum\\":12,\\"allowCredentials\\":true,\\"status\\":\\"off\\",\\"allowOrigins\\":\\"*\\",\\"timeUnit\\":\\"h\\"}","Timeout":"{\\"unitNum\\":10,\\"timeUnit\\":\\"s\\",\\"status\\":\\"off\\"}","Retry":"{\\"attempts\\":2,\\"retryOn\\":[\\"5xx\\"],\\"status\\":\\"off\\"}","HTTPRewrite":"{\\"pathType\\":\\"EQUAL\\",\\"path\\":\\"/o\\",\\"status\\":\\"off\\"}","Waf":"{\\"enabled\\":false}","HeaderOp":"{\\"status\\":\\"off\\",\\"headerOpItems\\":[{\\"directionType\\":\\"Request\\",\\"opType\\":\\"Add\\",\\"key\\":\\"kkk\\",\\"value\\":\\"ll\\"}]}"}
   */
  policies?: string;
  /**
   * @remarks
   * The matching rules.
   */
  predicates?: AddGatewayRouteRequestPredicates;
  /**
   * @remarks
   * The redirect configuration.
   */
  redirectJSON?: AddGatewayRouteRequestRedirectJSON;
  /**
   * @remarks
   * The route order. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * The route type. Valid values:
   * - Op: management and control route
   * 
   * @example
   * Op
   */
  routeType?: string;
  /**
   * @remarks
   * The service list. This parameter is required when the route points to a single service, multiple services, or tag-based routing.
   */
  services?: AddGatewayRouteRequestServices[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      description: 'Description',
      destinationType: 'DestinationType',
      directResponseJSON: 'DirectResponseJSON',
      domainId: 'DomainId',
      domainIdListJSON: 'DomainIdListJSON',
      enableWaf: 'EnableWaf',
      fallback: 'Fallback',
      fallbackServices: 'FallbackServices',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      name: 'Name',
      policies: 'Policies',
      predicates: 'Predicates',
      redirectJSON: 'RedirectJSON',
      routeOrder: 'RouteOrder',
      routeType: 'RouteType',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      description: 'string',
      destinationType: 'string',
      directResponseJSON: AddGatewayRouteRequestDirectResponseJSON,
      domainId: 'number',
      domainIdListJSON: 'string',
      enableWaf: 'boolean',
      fallback: 'boolean',
      fallbackServices: { 'type': 'array', 'itemType': AddGatewayRouteRequestFallbackServices },
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      name: 'string',
      policies: 'string',
      predicates: AddGatewayRouteRequestPredicates,
      redirectJSON: AddGatewayRouteRequestRedirectJSON,
      routeOrder: 'number',
      routeType: 'string',
      services: { 'type': 'array', 'itemType': AddGatewayRouteRequestServices },
    };
  }

  validate() {
    if(this.directResponseJSON && typeof (this.directResponseJSON as any).validate === 'function') {
      (this.directResponseJSON as any).validate();
    }
    if(Array.isArray(this.fallbackServices)) {
      $dara.Model.validateArray(this.fallbackServices);
    }
    if(this.predicates && typeof (this.predicates as any).validate === 'function') {
      (this.predicates as any).validate();
    }
    if(this.redirectJSON && typeof (this.redirectJSON as any).validate === 'function') {
      (this.redirectJSON as any).validate();
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

