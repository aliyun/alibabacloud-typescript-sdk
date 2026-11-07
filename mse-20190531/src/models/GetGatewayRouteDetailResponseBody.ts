// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayRouteDetailResponseBodyDataCors extends $dara.Model {
  /**
   * @remarks
   * Allow credentials.
   * 
   * @example
   * true
   */
  allowCredentials?: boolean;
  /**
   * @remarks
   * Cross-domain Header.
   * 
   * @example
   * *
   */
  allowHeaders?: string;
  /**
   * @remarks
   * Cross-domain methods.
   * 
   * @example
   * GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH
   */
  allowMethods?: string;
  /**
   * @remarks
   * Cross-domain.
   * 
   * @example
   * *
   */
  allowOrigins?: string;
  /**
   * @remarks
   * Response header.
   * 
   * @example
   * *
   */
  exposeHeaders?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * Time unit.
   * 
   * @example
   * h
   */
  timeUnit?: string;
  /**
   * @remarks
   * Time number.
   * 
   * @example
   * 24
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

export class GetGatewayRouteDetailResponseBodyDataDirectResponse extends $dara.Model {
  /**
   * @remarks
   * Mock return value.
   * 
   * @example
   * {}
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

export class GetGatewayRouteDetailResponseBodyDataFallbackServices extends $dara.Model {
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
   * namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Weight percentage.
   * 
   * @example
   * 80
   */
  percent?: number;
  /**
   * @remarks
   * Service ID.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * name
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

export class GetGatewayRouteDetailResponseBodyDataFlowMirror extends $dara.Model {
  /**
   * @remarks
   * Traffic replication percentage (%), value range 0-100.
   * 
   * @example
   * 90
   */
  percentage?: number;
  /**
   * @remarks
   * Target service port.
   * 
   * @example
   * 8790
   */
  port?: number;
  /**
   * @remarks
   * Enabling status, values:
   * 
   * - on: enabled
   * 
   * - off: disabled
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * Target service ID.
   * 
   * @example
   * 21
   */
  targetServiceId?: number;
  /**
   * @remarks
   * Target service name.
   * 
   * @example
   * test
   */
  targetServiceName?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      port: 'Port',
      status: 'Status',
      targetServiceId: 'TargetServiceId',
      targetServiceName: 'TargetServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      port: 'number',
      status: 'string',
      targetServiceId: 'number',
      targetServiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataHTTPRewrite extends $dara.Model {
  /**
   * @remarks
   * Instance address.
   * 
   * @example
   * aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * Node path.
   * 
   * @example
   * /test/client
   */
  path?: string;
  /**
   * @remarks
   * Rewrite type.
   * 
   * @example
   * PRE
   */
  pathType?: string;
  /**
   * @remarks
   * Matching Pattern.
   * 
   * @example
   * /test
   */
  pattern?: string;
  /**
   * @remarks
   * Enabling status.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * Replacement.
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

export class GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems extends $dara.Model {
  /**
   * @remarks
   * Request or response.
   * 
   * @example
   * Response
   */
  directionType?: string;
  /**
   * @remarks
   * Header Key.
   * 
   * @example
   * debug
   */
  key?: string;
  /**
   * @remarks
   * Operation type.
   * 
   * @example
   * Add
   */
  opType?: string;
  /**
   * @remarks
   * Setting value.
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

export class GetGatewayRouteDetailResponseBodyDataHeaderOp extends $dara.Model {
  /**
   * @remarks
   * Header field objects.
   */
  headerOpItems?: GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems[];
  /**
   * @remarks
   * Status.
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
      headerOpItems: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems },
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

export class GetGatewayRouteDetailResponseBodyDataRedirect extends $dara.Model {
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
   * Host.
   * 
   * @example
   * 16
   */
  host?: string;
  /**
   * @remarks
   * Path.
   * 
   * @example
   * 10111
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

export class GetGatewayRouteDetailResponseBodyDataRetry extends $dara.Model {
  /**
   * @remarks
   * Number of retry attempts.
   * 
   * @example
   * 1
   */
  attempts?: number;
  /**
   * @remarks
   * HTTP status codes.
   */
  httpCodes?: string[];
  /**
   * @remarks
   * Retry conditions.
   */
  retryOn?: string[];
  /**
   * @remarks
   * Retry status.
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

export class GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates extends $dara.Model {
  /**
   * @remarks
   * Request header KEY.
   * 
   * @example
   * id
   */
  key?: string;
  /**
   * @remarks
   * Type.
   * 
   * @example
   * PRE
   */
  type?: string;
  /**
   * @remarks
   * Matching value.
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

export class GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates extends $dara.Model {
  /**
   * @remarks
   * Whether to ignore case.
   * 
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @remarks
   * Path.
   * 
   * @example
   * /api
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

export class GetGatewayRouteDetailResponseBodyDataRoutePredicatesQueryPredicates extends $dara.Model {
  /**
   * @remarks
   * Parameter name.
   * 
   * @example
   * userid
   */
  key?: string;
  /**
   * @remarks
   * Type.
   * 
   * @example
   * PRE
   */
  type?: string;
  /**
   * @remarks
   * Matching value.
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

export class GetGatewayRouteDetailResponseBodyDataRoutePredicates extends $dara.Model {
  /**
   * @remarks
   * Header matching.
   */
  headerPredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates[];
  /**
   * @remarks
   * Method matching.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * Route matching.
   */
  pathPredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates;
  /**
   * @remarks
   * Parameter matching.
   */
  queryPredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicatesQueryPredicates[];
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
      headerPredicates: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates },
      methodPredicates: { 'type': 'array', 'itemType': 'string' },
      pathPredicates: GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates,
      queryPredicates: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataRoutePredicatesQueryPredicates },
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

export class GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapListParamMapsList extends $dara.Model {
  /**
   * @remarks
   * Input parameter extraction Key.
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
   * > - URI of the request: `ALL_PATH`
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

export class GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapList extends $dara.Model {
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
   * > Supported http method parameter values.
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
  paramMapsList?: GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapListParamMapsList[];
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
   * Specified Header pass-through list.
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
      paramMapsList: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapListParamMapsList },
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

export class GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoder extends $dara.Model {
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
  mothedMapList?: GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapList[];
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
      mothedMapList: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapList },
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

export class GetGatewayRouteDetailResponseBodyDataRouteServices extends $dara.Model {
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
  httpDubboTranscoder?: GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoder;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * dubbo4
   */
  name?: string;
  /**
   * @remarks
   * Namespace.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * Weight.
   * 
   * @example
   * 80
   */
  percent?: number;
  /**
   * @remarks
   * Service ID.
   * 
   * @example
   * 782
   */
  serviceId?: number;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * xkc-crm
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
   * Service source.
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
      httpDubboTranscoder: GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoder,
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

export class GetGatewayRouteDetailResponseBodyDataTimeout extends $dara.Model {
  /**
   * @remarks
   * Status.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * Time unit.
   * 
   * @example
   * s
   */
  timeUnit?: string;
  /**
   * @remarks
   * Unit number.
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

export class GetGatewayRouteDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Ahas status.
   * 
   * @example
   * 1
   */
  ahasStatus?: number;
  /**
   * @remarks
   * Cross-domain configuration.
   */
  cors?: GetGatewayRouteDetailResponseBodyDataCors;
  /**
   * @remarks
   * Default service ID.
   * 
   * @example
   * 3
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
   * Route description
   * 
   * @example
   * a route for xxx
   */
  description?: string;
  /**
   * @remarks
   * Target service type.
   * 
   * @example
   * Single
   */
  destinationType?: string;
  /**
   * @remarks
   * Mock information.
   */
  directResponse?: GetGatewayRouteDetailResponseBodyDataDirectResponse;
  /**
   * @remarks
   * Domain ID.
   * 
   * @example
   * 235
   */
  domainId?: number;
  /**
   * @remarks
   * Domain list
   */
  domainIdList?: number[];
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * 123.com
   */
  domainName?: string;
  /**
   * @remarks
   * Domain name list
   */
  domainNameList?: string[];
  /**
   * @remarks
   * Whether to enable Waf.
   * 
   * @example
   * true
   */
  enableWaf?: boolean;
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
   * Fallback services.
   */
  fallbackServices?: GetGatewayRouteDetailResponseBodyDataFallbackServices[];
  /**
   * @remarks
   * Traffic mirroring configuration.
   */
  flowMirror?: GetGatewayRouteDetailResponseBodyDataFlowMirror;
  /**
   * @remarks
   * Gateway ID.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * Gateway unique identifier ID.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597c****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Last modification time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Rewrite policy information.
   */
  HTTPRewrite?: GetGatewayRouteDetailResponseBodyDataHTTPRewrite;
  /**
   * @remarks
   * Header settings information.
   */
  headerOp?: GetGatewayRouteDetailResponseBodyDataHeaderOp;
  /**
   * @remarks
   * ID.
   * 
   * @example
   * 1050
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
   * Routing policy Json string.
   * 
   * @example
   * {
   *       "CORS": "{\\"allowMethods\\":\\"GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH\\",\\"allowHeaders\\":\\"*\\",\\"exposeHeaders\\":\\"*\\",\\"unitNum\\":12,\\"allowCredentials\\":true,\\"status\\":\\"off\\",\\"allowOrigins\\":\\"*\\",\\"timeUnit\\":\\"h\\"}",
   *       "Timeout": "{\\"unitNum\\":10,\\"timeUnit\\":\\"s\\",\\"status\\":\\"off\\"}",
   *       "Retry": "{\\"attempts\\":2,\\"retryOn\\":[\\"5xx\\"],\\"status\\":\\"off\\"}",
   *       "HTTPRewrite": "{\\"pathType\\":\\"EQUAL\\",\\"path\\":\\"/o\\",\\"status\\":\\"off\\"}",
   *       "Waf": "{\\"enabled\\":false}",
   *       "HeaderOp": "{\\"status\\":\\"off\\",\\"headerOpItems\\":[{\\"directionType\\":\\"Request\\",\\"opType\\":\\"Add\\",\\"key\\":\\"kkk\\",\\"value\\":\\"ll\\"}]}"
   * }
   */
  policies?: string;
  /**
   * @remarks
   * Matching conditions.
   * 
   * @example
   * {}
   */
  predicates?: string;
  /**
   * @remarks
   * Redirection configuration
   */
  redirect?: GetGatewayRouteDetailResponseBodyDataRedirect;
  /**
   * @remarks
   * Retry configuration.
   */
  retry?: GetGatewayRouteDetailResponseBodyDataRetry;
  /**
   * @remarks
   * Route order.
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * Route matching.
   */
  routePredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicates;
  /**
   * @remarks
   * Services.
   */
  routeServices?: GetGatewayRouteDetailResponseBodyDataRouteServices[];
  /**
   * @remarks
   * Service configuration information.
   * 
   * @example
   * [{\\"Percent\\":100,\\"ServiceId\\":126}]
   */
  services?: string;
  /**
   * @remarks
   * Route status.
   * 
   * - Not published: 0
   * 
   * - Publishing: 2
   * 
   * - Published: 3
   * 
   * - Editing (updates not published): 4
   * 
   * - Unpublishing: 5
   * 
   * - Unavailable: 6
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Timeout configuration.
   */
  timeout?: GetGatewayRouteDetailResponseBodyDataTimeout;
  static names(): { [key: string]: string } {
    return {
      ahasStatus: 'AhasStatus',
      cors: 'Cors',
      defaultServiceId: 'DefaultServiceId',
      defaultServiceName: 'DefaultServiceName',
      description: 'Description',
      destinationType: 'DestinationType',
      directResponse: 'DirectResponse',
      domainId: 'DomainId',
      domainIdList: 'DomainIdList',
      domainName: 'DomainName',
      domainNameList: 'DomainNameList',
      enableWaf: 'EnableWaf',
      fallback: 'Fallback',
      fallbackServices: 'FallbackServices',
      flowMirror: 'FlowMirror',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      HTTPRewrite: 'HTTPRewrite',
      headerOp: 'HeaderOp',
      id: 'Id',
      name: 'Name',
      policies: 'Policies',
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
      ahasStatus: 'number',
      cors: GetGatewayRouteDetailResponseBodyDataCors,
      defaultServiceId: 'number',
      defaultServiceName: 'string',
      description: 'string',
      destinationType: 'string',
      directResponse: GetGatewayRouteDetailResponseBodyDataDirectResponse,
      domainId: 'number',
      domainIdList: { 'type': 'array', 'itemType': 'number' },
      domainName: 'string',
      domainNameList: { 'type': 'array', 'itemType': 'string' },
      enableWaf: 'boolean',
      fallback: 'boolean',
      fallbackServices: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataFallbackServices },
      flowMirror: GetGatewayRouteDetailResponseBodyDataFlowMirror,
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      HTTPRewrite: GetGatewayRouteDetailResponseBodyDataHTTPRewrite,
      headerOp: GetGatewayRouteDetailResponseBodyDataHeaderOp,
      id: 'number',
      name: 'string',
      policies: 'string',
      predicates: 'string',
      redirect: GetGatewayRouteDetailResponseBodyDataRedirect,
      retry: GetGatewayRouteDetailResponseBodyDataRetry,
      routeOrder: 'number',
      routePredicates: GetGatewayRouteDetailResponseBodyDataRoutePredicates,
      routeServices: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataRouteServices },
      services: 'string',
      status: 'number',
      timeout: GetGatewayRouteDetailResponseBodyDataTimeout,
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
    if(Array.isArray(this.fallbackServices)) {
      $dara.Model.validateArray(this.fallbackServices);
    }
    if(this.flowMirror && typeof (this.flowMirror as any).validate === 'function') {
      (this.flowMirror as any).validate();
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

export class GetGatewayRouteDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. Note that 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetGatewayRouteDetailResponseBodyData;
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
   * FDF2D16C-5D28-5FAA-A56B-30BDE3559880
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
      data: GetGatewayRouteDetailResponseBodyData,
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

