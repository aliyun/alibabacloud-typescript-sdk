// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayRouteRequestDirectResponseJSON extends $dara.Model {
  /**
   * @remarks
   * The mock return value.
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * The mock return code.
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
   * user
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the service belongs.
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
   * 80
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
   * The service port number.
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
   * The key of the request header.
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
   * The value of the request header.
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
   * Specifies whether to ignore case sensitivity.
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
   * 
   * *   PRE: prefix matching
   * *   EQUAL: exact matching
   * *   ERGULAR: regular expression matching
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
   * The name of the parameter.
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

export class AddGatewayRouteRequestPredicates extends $dara.Model {
  /**
   * @remarks
   * The information about header matching.
   */
  headerPredicates?: AddGatewayRouteRequestPredicatesHeaderPredicates[];
  /**
   * @remarks
   * The information about method matching.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * The information about route matching.
   */
  pathPredicates?: AddGatewayRouteRequestPredicatesPathPredicates;
  /**
   * @remarks
   * The information about URL parameter matching.
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
   * The status code returned.
   * 
   * @example
   * 302
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
   * The path to be redirected to.
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
   * *   `ALL_PATH`: request path
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

export class AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapList extends $dara.Model {
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
  paramMapsList?: AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList[];
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
   * The name of the service group.
   * 
   * @example
   * None
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
   * The transcoder of the Dubbo protocol.
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
   * The namespace to which the service belongs.
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
   * 80
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
   * The service port number.
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
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * a route for xxx
   */
  description?: string;
  /**
   * @remarks
   * The type of the destination service. Valid values:
   * 
   * *   Single
   * *   Multiple
   * *   VersionOriented
   * *   Mock
   * *   Redirect
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
   * The domain ID.
   * 
   * @example
   * 20
   */
  domainId?: number;
  /**
   * @remarks
   * The domain IDs.
   * 
   * @example
   * [0,94]
   */
  domainIdListJSON?: string;
  /**
   * @remarks
   * Specifies whether to activate Web Application Firewall (WAF).
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  enableWaf?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Fallback service.
   * 
   * @example
   * true
   */
  fallback?: boolean;
  /**
   * @remarks
   * The information about the Fallback service.
   */
  fallbackServices?: AddGatewayRouteRequestFallbackServices[];
  /**
   * @remarks
   * The ID of the gateway.
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
   * The name of the route.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The routing policy in a JSON string.
   * 
   * @example
   * {"CORS":"{\\"allowMethods\\":\\"GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH\\",\\"allowHeaders\\":\\"*\\",\\"exposeHeaders\\":\\"*\\",\\"unitNum\\":12,\\"allowCredentials\\":true,\\"status\\":\\"off\\",\\"allowOrigins\\":\\"*\\",\\"timeUnit\\":\\"h\\"}","Timeout":"{\\"unitNum\\":10,\\"timeUnit\\":\\"s\\",\\"status\\":\\"off\\"}","Retry":"{\\"attempts\\":2,\\"retryOn\\":[\\"5xx\\"],\\"status\\":\\"off\\"}","HTTPRewrite":"{\\"pathType\\":\\"EQUAL\\",\\"path\\":\\"/o\\",\\"status\\":\\"off\\"}","Waf":"{\\"enabled\\":false}","HeaderOp":"{\\"status\\":\\"off\\",\\"headerOpItems\\":[{\\"directionType\\":\\"Request\\",\\"opType\\":\\"Add\\",\\"key\\":\\"kkk\\",\\"value\\":\\"ll\\"}]}"}
   */
  policies?: string;
  /**
   * @remarks
   * The matching rule.
   */
  predicates?: AddGatewayRouteRequestPredicates;
  /**
   * @remarks
   * The configuration of the redirection.
   */
  redirectJSON?: AddGatewayRouteRequestRedirectJSON;
  /**
   * @remarks
   * The sequence number of the route. (A small value indicates a high priority.)
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * Op: Manage routes.
   * 
   * @example
   * Op
   */
  routeType?: string;
  /**
   * @remarks
   * The list of services.
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

