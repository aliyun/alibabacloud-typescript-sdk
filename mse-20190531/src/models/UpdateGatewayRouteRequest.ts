// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteRequestDirectResponseJSON extends $dara.Model {
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

export class UpdateGatewayRouteRequestFallbackServices extends $dara.Model {
  /**
   * @remarks
   * The type of the protocol. Valid values:
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
   * The namespace in which the service resides.
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
   * 80
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 1
   */
  serviceId?: number;
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

export class UpdateGatewayRouteRequestPredicatesHeaderPredicates extends $dara.Model {
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
   * on
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

export class UpdateGatewayRouteRequestPredicatesPathPredicates extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform case-insensitive matching.
   * 
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @remarks
   * The path used for route matching.
   * 
   * @example
   * /test
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

export class UpdateGatewayRouteRequestPredicatesQueryPredicates extends $dara.Model {
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

export class UpdateGatewayRouteRequestPredicates extends $dara.Model {
  /**
   * @remarks
   * The information about header matching.
   */
  headerPredicates?: UpdateGatewayRouteRequestPredicatesHeaderPredicates[];
  /**
   * @remarks
   * The information about method matching.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * The information about path matching.
   */
  pathPredicates?: UpdateGatewayRouteRequestPredicatesPathPredicates;
  /**
   * @remarks
   * The information about parameter matching.
   */
  queryPredicates?: UpdateGatewayRouteRequestPredicatesQueryPredicates[];
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
      headerPredicates: { 'type': 'array', 'itemType': UpdateGatewayRouteRequestPredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: UpdateGatewayRouteRequestPredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': UpdateGatewayRouteRequestPredicatesQueryPredicates },
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

export class UpdateGatewayRouteRequestRedirectJSON extends $dara.Model {
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

export class UpdateGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList extends $dara.Model {
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

export class UpdateGatewayRouteRequestServicesHttpDubboTranscoderMothedMapList extends $dara.Model {
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
   * The path that is used to match a method.
   * 
   * @example
   * /mytestzbk/sayhello
   */
  mothedpath?: string;
  /**
   * @remarks
   * The information of parameter mappings.
   */
  paramMapsList?: UpdateGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList[];
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
      paramMapsList: { 'type': 'array', 'itemType': UpdateGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList },
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

export class UpdateGatewayRouteRequestServicesHttpDubboTranscoder extends $dara.Model {
  /**
   * @remarks
   * The Dubbo service group.
   * 
   * @example
   * service name
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
  mothedMapList?: UpdateGatewayRouteRequestServicesHttpDubboTranscoderMothedMapList[];
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
      mothedMapList: { 'type': 'array', 'itemType': UpdateGatewayRouteRequestServicesHttpDubboTranscoderMothedMapList },
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

export class UpdateGatewayRouteRequestServices extends $dara.Model {
  /**
   * @remarks
   * The type of the protocol. Valid values:
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
  httpDubboTranscoder?: UpdateGatewayRouteRequestServicesHttpDubboTranscoder;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * web
   */
  name?: string;
  /**
   * @remarks
   * The namespace in which the service resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The percentage.
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
   * 1
   */
  serviceId?: number;
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
      httpDubboTranscoder: UpdateGatewayRouteRequestServicesHttpDubboTranscoder,
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

export class UpdateGatewayRouteRequest extends $dara.Model {
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
   * The destination service type.
   * 
   * @example
   * Mock
   */
  destinationType?: string;
  /**
   * @remarks
   * The information about service mocking.
   */
  directResponseJSON?: UpdateGatewayRouteRequestDirectResponseJSON;
  /**
   * @remarks
   * The associated domain name.
   * 
   * @example
   * [90]
   */
  domainIdListJSON?: string;
  /**
   * @remarks
   * Specifies whether to activate Web Application Firewall (WAF).
   * 
   * @example
   * false
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
  fallbackServices?: UpdateGatewayRouteRequestFallbackServices[];
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 501
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-86575c0bc9f04ecfbacb92b8e392a2c4
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * 139
   */
  id?: number;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * route-web
   * 
   * @deprecated
   */
  name?: string;
  /**
   * @remarks
   * The route matching conditions.
   */
  predicates?: UpdateGatewayRouteRequestPredicates;
  /**
   * @remarks
   * The information about redirection.
   */
  redirectJSON?: UpdateGatewayRouteRequestRedirectJSON;
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
   * The information about destination services.
   */
  services?: UpdateGatewayRouteRequestServices[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      description: 'Description',
      destinationType: 'DestinationType',
      directResponseJSON: 'DirectResponseJSON',
      domainIdListJSON: 'DomainIdListJSON',
      enableWaf: 'EnableWaf',
      fallback: 'Fallback',
      fallbackServices: 'FallbackServices',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      name: 'Name',
      predicates: 'Predicates',
      redirectJSON: 'RedirectJSON',
      routeOrder: 'RouteOrder',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      description: 'string',
      destinationType: 'string',
      directResponseJSON: UpdateGatewayRouteRequestDirectResponseJSON,
      domainIdListJSON: 'string',
      enableWaf: 'boolean',
      fallback: 'boolean',
      fallbackServices: { 'type': 'array', 'itemType': UpdateGatewayRouteRequestFallbackServices },
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      name: 'string',
      predicates: UpdateGatewayRouteRequestPredicates,
      redirectJSON: UpdateGatewayRouteRequestRedirectJSON,
      routeOrder: 'number',
      services: { 'type': 'array', 'itemType': UpdateGatewayRouteRequestServices },
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

