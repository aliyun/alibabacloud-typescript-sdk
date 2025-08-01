// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayRouteDetailResponseBodyDataCors extends $dara.Model {
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
   * h
   */
  timeUnit?: string;
  /**
   * @remarks
   * The unit number.
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
   * The mock return value.
   * 
   * @example
   * {}
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

export class GetGatewayRouteDetailResponseBodyDataFallbackServices extends $dara.Model {
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
   * namespace
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
   * The service ID.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * name
   */
  serviceName?: string;
  /**
   * @remarks
   * The port number of the service.
   * 
   * @example
   * 8848
   */
  servicePort?: number;
  /**
   * @remarks
   * The source type of the service.
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
   * 流量复制比例（%），取值0-100。
   * 
   * @example
   * 90
   */
  percentage?: number;
  /**
   * @remarks
   * 目标服务端口。
   * 
   * @example
   * 8790
   */
  port?: number;
  /**
   * @remarks
   * 开启状态，取值：
   * 
   * - on：开启
   * - off：关闭
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * 目标服务ID。
   * 
   * @example
   * 21
   */
  targetServiceId?: number;
  /**
   * @remarks
   * 目标服务名称。
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
   * The hostname of the gateway.
   * 
   * @example
   * aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The path of the node.
   * 
   * @example
   * /test/client
   */
  path?: string;
  /**
   * @remarks
   * The rewrite type.
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
   * The status of the policy.
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

export class GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems extends $dara.Model {
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
   * The type of the operation.
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

export class GetGatewayRouteDetailResponseBodyDataHeaderOp extends $dara.Model {
  /**
   * @remarks
   * The information about headers.
   */
  headerOpItems?: GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems[];
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
   * 16
   */
  host?: string;
  /**
   * @remarks
   * The path.
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
   * The number of retries allowed.
   * 
   * @example
   * 1
   */
  attempts?: number;
  /**
   * @remarks
   * The HTTP status codes.
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

export class GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates extends $dara.Model {
  /**
   * @remarks
   * The key of the request header.
   * 
   * @example
   * id
   */
  key?: string;
  /**
   * @remarks
   * The route type.
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

export class GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates extends $dara.Model {
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
   * /api
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

export class GetGatewayRouteDetailResponseBodyDataRoutePredicatesQueryPredicates extends $dara.Model {
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
   * The route type.
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

export class GetGatewayRouteDetailResponseBodyDataRoutePredicates extends $dara.Model {
  /**
   * @remarks
   * The information about header matching.
   */
  headerPredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates[];
  /**
   * @remarks
   * The information about method matching.
   */
  methodPredicates?: string[];
  /**
   * @remarks
   * The information about route matching.
   */
  pathPredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates;
  /**
   * @remarks
   * The information about parameter matching.
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
  extractKey?: string;
  extractKeySpec?: string;
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
  dubboMothedName?: string;
  httpMothed?: string;
  mothedpath?: string;
  paramMapsList?: GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoderMothedMapListParamMapsList[];
  passThroughAllHeaders?: string;
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
  dubboServiceGroup?: string;
  dubboServiceName?: string;
  dubboServiceVersion?: string;
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
   * The protocol type.
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
  httpDubboTranscoder?: GetGatewayRouteDetailResponseBodyDataRouteServicesHttpDubboTranscoder;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * dubbo4
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * acs_ecs_dashboard
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
   * The service ID.
   * 
   * @example
   * 782
   */
  serviceId?: number;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * xkc-crm
   */
  serviceName?: string;
  /**
   * @remarks
   * The port number of the service.
   * 
   * @example
   * 20880
   */
  servicePort?: number;
  /**
   * @remarks
   * The source type of the service.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  unhealthyEndpoints?: string[];
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

export class GetGatewayRouteDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of Application High Availability Service (AHAS).
   * 
   * @example
   * 1
   */
  ahasStatus?: number;
  /**
   * @remarks
   * The configuration for cross-origin resource sharing (CORS).
   */
  cors?: GetGatewayRouteDetailResponseBodyDataCors;
  /**
   * @remarks
   * The default service ID.
   * 
   * @example
   * 3
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
   * @example
   * a route for xxx
   */
  description?: string;
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
  directResponse?: GetGatewayRouteDetailResponseBodyDataDirectResponse;
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
   * The IDs of domains.
   */
  domainIdList?: number[];
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * 123.com
   */
  domainName?: string;
  /**
   * @remarks
   * The list of domain names.
   */
  domainNameList?: string[];
  /**
   * @remarks
   * Indicates whether Web Application Firewall (WAF) is activated.
   * 
   * @example
   * true
   */
  enableWaf?: boolean;
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
   * The information of the Fallback service.
   */
  fallbackServices?: GetGatewayRouteDetailResponseBodyDataFallbackServices[];
  /**
   * @remarks
   * 流量镜像配置。
   */
  flowMirror?: GetGatewayRouteDetailResponseBodyDataFlowMirror;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597c****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The information about the rewrite policy.
   */
  HTTPRewrite?: GetGatewayRouteDetailResponseBodyDataHTTPRewrite;
  /**
   * @remarks
   * The header settings.
   */
  headerOp?: GetGatewayRouteDetailResponseBodyDataHeaderOp;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 1050
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
   * The routing policy in a JSON string.
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
   * The matching conditions.
   * 
   * @example
   * {}
   */
  predicates?: string;
  /**
   * @remarks
   * The configuration of the redirection.
   */
  redirect?: GetGatewayRouteDetailResponseBodyDataRedirect;
  /**
   * @remarks
   * The retry configuration.
   */
  retry?: GetGatewayRouteDetailResponseBodyDataRetry;
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
  routePredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicates;
  /**
   * @remarks
   * The services.
   */
  routeServices?: GetGatewayRouteDetailResponseBodyDataRouteServices[];
  /**
   * @remarks
   * The configurations of services.
   * 
   * @example
   * [{\\"Percent\\":100,\\"ServiceId\\":126}]
   */
  services?: string;
  /**
   * @remarks
   * The status of the route. Valid values:
   * 
   * *   0: unpublished
   * *   2: publishing
   * *   3: published
   * *   4: editing (updated but not published)
   * *   5: unpublishing
   * *   6: unavailable
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The timeout configuration.
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
   * The status code returned. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetGatewayRouteDetailResponseBodyData;
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
   * FDF2D16C-5D28-5FAA-A56B-30BDE3559880
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

