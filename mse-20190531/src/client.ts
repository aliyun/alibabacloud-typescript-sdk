// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GatewayDomain extends $tea.Model {
  certIdentifier?: string;
  gatewayId?: number;
  gatewayName?: string;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  mustHttps?: string;
  name?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mustHttps: 'MustHttps',
      name: 'Name',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      gatewayId: 'number',
      gatewayName: 'string',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mustHttps: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayOption extends $tea.Model {
  disableHttp2Alpn?: boolean;
  enableHardwareAcceleration?: boolean;
  enableWaf?: boolean;
  logConfigDetails?: GatewayOptionLogConfigDetails;
  traceDetails?: GatewayOptionTraceDetails;
  static names(): { [key: string]: string } {
    return {
      disableHttp2Alpn: 'DisableHttp2Alpn',
      enableHardwareAcceleration: 'EnableHardwareAcceleration',
      enableWaf: 'EnableWaf',
      logConfigDetails: 'LogConfigDetails',
      traceDetails: 'TraceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableHttp2Alpn: 'boolean',
      enableHardwareAcceleration: 'boolean',
      enableWaf: 'boolean',
      logConfigDetails: GatewayOptionLogConfigDetails,
      traceDetails: GatewayOptionTraceDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayService extends $tea.Model {
  gatewayTrafficPolicy?: TrafficPolicy;
  gatewayUniqueId?: string;
  groupName?: string;
  id?: number;
  metaInfo?: string;
  name?: string;
  namespace?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayTrafficPolicy: 'GatewayTrafficPolicy',
      gatewayUniqueId: 'GatewayUniqueId',
      groupName: 'GroupName',
      id: 'Id',
      metaInfo: 'MetaInfo',
      name: 'Name',
      namespace: 'Namespace',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayTrafficPolicy: TrafficPolicy,
      gatewayUniqueId: 'string',
      groupName: 'string',
      id: 'number',
      metaInfo: 'string',
      name: 'string',
      namespace: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicy extends $tea.Model {
  loadBalancerSettings?: TrafficPolicyLoadBalancerSettings;
  tlsSetting?: TrafficPolicyTlsSetting;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSettings: 'LoadBalancerSettings',
      tlsSetting: 'TlsSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSettings: TrafficPolicyLoadBalancerSettings,
      tlsSetting: TrafficPolicyTlsSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAuthResourceRequest extends $tea.Model {
  acceptLanguage?: string;
  authId?: number;
  authResourceHeaderList?: AddAuthResourceRequestAuthResourceHeaderList[];
  domainId?: number;
  gatewayUniqueId?: string;
  ignoreCase?: boolean;
  matchType?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authId: 'AuthId',
      authResourceHeaderList: 'AuthResourceHeaderList',
      domainId: 'DomainId',
      gatewayUniqueId: 'GatewayUniqueId',
      ignoreCase: 'IgnoreCase',
      matchType: 'MatchType',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authId: 'number',
      authResourceHeaderList: { 'type': 'array', 'itemType': AddAuthResourceRequestAuthResourceHeaderList },
      domainId: 'number',
      gatewayUniqueId: 'string',
      ignoreCase: 'boolean',
      matchType: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAuthResourceShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  authId?: number;
  authResourceHeaderListShrink?: string;
  domainId?: number;
  gatewayUniqueId?: string;
  ignoreCase?: boolean;
  matchType?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authId: 'AuthId',
      authResourceHeaderListShrink: 'AuthResourceHeaderList',
      domainId: 'DomainId',
      gatewayUniqueId: 'GatewayUniqueId',
      ignoreCase: 'IgnoreCase',
      matchType: 'MatchType',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authId: 'number',
      authResourceHeaderListShrink: 'string',
      domainId: 'number',
      gatewayUniqueId: 'string',
      ignoreCase: 'boolean',
      matchType: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAuthResourceResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAuthResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddAuthResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddAuthResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBlackWhiteListRequest extends $tea.Model {
  acceptLanguage?: string;
  content?: string;
  gatewayUniqueId?: string;
  isWhite?: boolean;
  name?: string;
  note?: string;
  resourceIdJsonList?: string;
  resourceType?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      content: 'Content',
      gatewayUniqueId: 'GatewayUniqueId',
      isWhite: 'IsWhite',
      name: 'Name',
      note: 'Note',
      resourceIdJsonList: 'ResourceIdJsonList',
      resourceType: 'ResourceType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      content: 'string',
      gatewayUniqueId: 'string',
      isWhite: 'boolean',
      name: 'string',
      note: 'string',
      resourceIdJsonList: 'string',
      resourceType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBlackWhiteListResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBlackWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddBlackWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddBlackWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRequest extends $tea.Model {
  acceptLanguage?: string;
  enableHardwareAcceleration?: boolean;
  enableSls?: boolean;
  enableXtrace?: boolean;
  enterpriseSecurityGroup?: boolean;
  internetSlbSpec?: string;
  name?: string;
  region?: string;
  replica?: number;
  resourceGroupId?: string;
  slbSpec?: string;
  spec?: string;
  tag?: AddGatewayRequestTag[];
  vSwitchId?: string;
  vSwitchId2?: string;
  vpc?: string;
  xtraceRatio?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      enableHardwareAcceleration: 'EnableHardwareAcceleration',
      enableSls: 'EnableSls',
      enableXtrace: 'EnableXtrace',
      enterpriseSecurityGroup: 'EnterpriseSecurityGroup',
      internetSlbSpec: 'InternetSlbSpec',
      name: 'Name',
      region: 'Region',
      replica: 'Replica',
      resourceGroupId: 'ResourceGroupId',
      slbSpec: 'SlbSpec',
      spec: 'Spec',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vSwitchId2: 'VSwitchId2',
      vpc: 'Vpc',
      xtraceRatio: 'XtraceRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      enableHardwareAcceleration: 'boolean',
      enableSls: 'boolean',
      enableXtrace: 'boolean',
      enterpriseSecurityGroup: 'boolean',
      internetSlbSpec: 'string',
      name: 'string',
      region: 'string',
      replica: 'number',
      resourceGroupId: 'string',
      slbSpec: 'string',
      spec: 'string',
      tag: { 'type': 'array', 'itemType': AddGatewayRequestTag },
      vSwitchId: 'string',
      vSwitchId2: 'string',
      vpc: 'string',
      xtraceRatio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayResponseBody extends $tea.Model {
  code?: number;
  data?: AddGatewayResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: AddGatewayResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayAuthConsumerRequest extends $tea.Model {
  acceptLanguage?: string;
  description?: string;
  encodeType?: string;
  gatewayUniqueId?: string;
  jwks?: string;
  keyName?: string;
  keyValue?: string;
  name?: string;
  tokenName?: string;
  tokenPass?: boolean;
  tokenPosition?: string;
  tokenPrefix?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      description: 'Description',
      encodeType: 'EncodeType',
      gatewayUniqueId: 'GatewayUniqueId',
      jwks: 'Jwks',
      keyName: 'KeyName',
      keyValue: 'KeyValue',
      name: 'Name',
      tokenName: 'TokenName',
      tokenPass: 'TokenPass',
      tokenPosition: 'TokenPosition',
      tokenPrefix: 'TokenPrefix',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      description: 'string',
      encodeType: 'string',
      gatewayUniqueId: 'string',
      jwks: 'string',
      keyName: 'string',
      keyValue: 'string',
      name: 'string',
      tokenName: 'string',
      tokenPass: 'boolean',
      tokenPosition: 'string',
      tokenPrefix: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayAuthConsumerResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayAuthConsumerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGatewayAuthConsumerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGatewayAuthConsumerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayDomainRequest extends $tea.Model {
  acceptLanguage?: string;
  certIdentifier?: string;
  gatewayUniqueId?: string;
  http2?: string;
  mustHttps?: boolean;
  name?: string;
  protocol?: string;
  tlsMax?: string;
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      certIdentifier: 'CertIdentifier',
      gatewayUniqueId: 'GatewayUniqueId',
      http2: 'Http2',
      mustHttps: 'MustHttps',
      name: 'Name',
      protocol: 'Protocol',
      tlsMax: 'TlsMax',
      tlsMin: 'TlsMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      certIdentifier: 'string',
      gatewayUniqueId: 'string',
      http2: 'string',
      mustHttps: 'boolean',
      name: 'string',
      protocol: 'string',
      tlsMax: 'string',
      tlsMin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayDomainResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGatewayDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGatewayDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequest extends $tea.Model {
  acceptLanguage?: string;
  destinationType?: string;
  directResponseJSON?: AddGatewayRouteRequestDirectResponseJSON;
  domainId?: number;
  domainIdListJSON?: string;
  enableWaf?: boolean;
  fallback?: boolean;
  fallbackServices?: AddGatewayRouteRequestFallbackServices[];
  gatewayId?: number;
  gatewayUniqueId?: string;
  name?: string;
  policies?: string;
  predicates?: AddGatewayRouteRequestPredicates;
  redirectJSON?: AddGatewayRouteRequestRedirectJSON;
  routeOrder?: number;
  routeType?: string;
  services?: AddGatewayRouteRequestServices[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  destinationType?: string;
  directResponseJSONShrink?: string;
  domainId?: number;
  domainIdListJSON?: string;
  enableWaf?: boolean;
  fallback?: boolean;
  fallbackServicesShrink?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  name?: string;
  policies?: string;
  predicatesShrink?: string;
  redirectJSONShrink?: string;
  routeOrder?: number;
  routeType?: string;
  servicesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      destinationType: 'DestinationType',
      directResponseJSONShrink: 'DirectResponseJSON',
      domainId: 'DomainId',
      domainIdListJSON: 'DomainIdListJSON',
      enableWaf: 'EnableWaf',
      fallback: 'Fallback',
      fallbackServicesShrink: 'FallbackServices',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      name: 'Name',
      policies: 'Policies',
      predicatesShrink: 'Predicates',
      redirectJSONShrink: 'RedirectJSON',
      routeOrder: 'RouteOrder',
      routeType: 'RouteType',
      servicesShrink: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      destinationType: 'string',
      directResponseJSONShrink: 'string',
      domainId: 'number',
      domainIdListJSON: 'string',
      enableWaf: 'boolean',
      fallback: 'boolean',
      fallbackServicesShrink: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      name: 'string',
      policies: 'string',
      predicatesShrink: 'string',
      redirectJSONShrink: 'string',
      routeOrder: 'number',
      routeType: 'string',
      servicesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayServiceVersionRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  serviceId?: number;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      serviceId: 'number',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayServiceVersionResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayServiceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGatewayServiceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGatewayServiceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewaySlbRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  httpPort?: number;
  httpsPort?: number;
  httpsVServerGroupId?: string;
  serviceWeight?: number;
  slbId?: string;
  type?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      httpsVServerGroupId: 'HttpsVServerGroupId',
      serviceWeight: 'ServiceWeight',
      slbId: 'SlbId',
      type: 'Type',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      httpPort: 'number',
      httpsPort: 'number',
      httpsVServerGroupId: 'string',
      serviceWeight: 'number',
      slbId: 'string',
      type: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewaySlbResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewaySlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGatewaySlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGatewaySlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMigrationTaskRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterType?: string;
  originInstanceAddress?: string;
  originInstanceName?: string;
  originInstanceNamespace?: string;
  projectDesc?: string;
  requestPars?: string;
  targetClusterName?: string;
  targetClusterUrl?: string;
  targetInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterType: 'ClusterType',
      originInstanceAddress: 'OriginInstanceAddress',
      originInstanceName: 'OriginInstanceName',
      originInstanceNamespace: 'OriginInstanceNamespace',
      projectDesc: 'ProjectDesc',
      requestPars: 'RequestPars',
      targetClusterName: 'TargetClusterName',
      targetClusterUrl: 'TargetClusterUrl',
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterType: 'string',
      originInstanceAddress: 'string',
      originInstanceName: 'string',
      originInstanceNamespace: 'string',
      projectDesc: 'string',
      requestPars: 'string',
      targetClusterName: 'string',
      targetClusterUrl: 'string',
      targetInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMigrationTaskResponseBody extends $tea.Model {
  data?: AddMigrationTaskResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddMigrationTaskResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMigrationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddMigrationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddMigrationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMockRuleRequest extends $tea.Model {
  acceptLanguage?: string;
  consumerAppIds?: string;
  dubboMockItems?: string;
  enable?: boolean;
  extraJson?: string;
  mockType?: number;
  name?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItems?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerAppIds: 'ConsumerAppIds',
      dubboMockItems: 'DubboMockItems',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      mockType: 'MockType',
      name: 'Name',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItems: 'ScMockItems',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerAppIds: 'string',
      dubboMockItems: 'string',
      enable: 'boolean',
      extraJson: 'string',
      mockType: 'number',
      name: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItems: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMockRuleResponseBody extends $tea.Model {
  code?: number;
  data?: AddMockRuleResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: AddMockRuleResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMockRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddMockRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddMockRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSSLCertRequest extends $tea.Model {
  acceptLanguage?: string;
  certIdentifier?: string;
  domainId?: number;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      certIdentifier: 'CertIdentifier',
      domainId: 'DomainId',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      certIdentifier: 'string',
      domainId: 'number',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSSLCertResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSSLCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddSSLCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddSSLCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityGroupRuleRequest extends $tea.Model {
  acceptLanguage?: string;
  description?: string;
  gatewayUniqueId?: string;
  portRange?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      description: 'Description',
      gatewayUniqueId: 'GatewayUniqueId',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      description: 'string',
      gatewayUniqueId: 'string',
      portRange: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityGroupRuleResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityGroupRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddSecurityGroupRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddSecurityGroupRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSourceRequest extends $tea.Model {
  acceptLanguage?: string;
  address?: string;
  gatewayUniqueId?: string;
  groupList?: string[];
  ingressOptionsRequest?: AddServiceSourceRequestIngressOptionsRequest;
  name?: string;
  pathList?: string[];
  source?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      gatewayUniqueId: 'GatewayUniqueId',
      groupList: 'GroupList',
      ingressOptionsRequest: 'IngressOptionsRequest',
      name: 'Name',
      pathList: 'PathList',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      gatewayUniqueId: 'string',
      groupList: { 'type': 'array', 'itemType': 'string' },
      ingressOptionsRequest: AddServiceSourceRequestIngressOptionsRequest,
      name: 'string',
      pathList: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSourceShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  address?: string;
  gatewayUniqueId?: string;
  groupListShrink?: string;
  ingressOptionsRequestShrink?: string;
  name?: string;
  pathListShrink?: string;
  source?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      gatewayUniqueId: 'GatewayUniqueId',
      groupListShrink: 'GroupList',
      ingressOptionsRequestShrink: 'IngressOptionsRequest',
      name: 'Name',
      pathListShrink: 'PathList',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      gatewayUniqueId: 'string',
      groupListShrink: 'string',
      ingressOptionsRequestShrink: 'string',
      name: 'string',
      pathListShrink: 'string',
      source: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSourceResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddServiceSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddServiceSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyGatewayRouteRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      routeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyGatewayRouteResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyGatewayRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTagPoliciesRequest extends $tea.Model {
  acceptLanguage?: string;
  appId?: string;
  appName?: string;
  enable?: boolean;
  namespace?: string;
  namespaceId?: string;
  region?: string;
  rules?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      namespace: 'Namespace',
      namespaceId: 'NamespaceId',
      region: 'Region',
      rules: 'Rules',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      namespace: 'string',
      namespaceId: 'string',
      region: 'string',
      rules: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTagPoliciesResponseBody extends $tea.Model {
  code?: number;
  data?: ApplyTagPoliciesResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': ApplyTagPoliciesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTagPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyTagPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyTagPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  ids?: string;
  instanceId?: string;
  originNamespaceId?: string;
  policy?: string;
  targetNamespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ids: 'Ids',
      instanceId: 'InstanceId',
      originNamespaceId: 'OriginNamespaceId',
      policy: 'Policy',
      targetNamespaceId: 'TargetNamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ids: 'string',
      instanceId: 'string',
      originNamespaceId: 'string',
      policy: 'string',
      targetNamespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponseBody extends $tea.Model {
  code?: number;
  data?: CloneNacosConfigResponseBodyData;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CloneNacosConfigResponseBodyData,
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CloneNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  acceptLanguage?: string;
  appName?: string;
  language?: string;
  namespace?: string;
  region?: string;
  sentinelEnable?: string;
  source?: string;
  switchEnable?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      language: 'Language',
      namespace: 'Namespace',
      region: 'Region',
      sentinelEnable: 'SentinelEnable',
      source: 'Source',
      switchEnable: 'SwitchEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      language: 'string',
      namespace: 'string',
      region: 'string',
      sentinelEnable: 'string',
      source: 'string',
      switchEnable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  code?: number;
  data?: CreateApplicationResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: CreateApplicationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterSpecification?: string;
  clusterType?: string;
  clusterVersion?: string;
  connectionType?: string;
  diskType?: string;
  instanceCount?: number;
  instanceName?: string;
  mseVersion?: string;
  netType?: string;
  privateSlbSpecification?: string;
  pubNetworkFlow?: string;
  pubSlbSpecification?: string;
  region?: string;
  requestPars?: string;
  resourceGroupId?: string;
  tag?: CreateClusterRequestTag[];
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterSpecification: 'ClusterSpecification',
      clusterType: 'ClusterType',
      clusterVersion: 'ClusterVersion',
      connectionType: 'ConnectionType',
      diskType: 'DiskType',
      instanceCount: 'InstanceCount',
      instanceName: 'InstanceName',
      mseVersion: 'MseVersion',
      netType: 'NetType',
      privateSlbSpecification: 'PrivateSlbSpecification',
      pubNetworkFlow: 'PubNetworkFlow',
      pubSlbSpecification: 'PubSlbSpecification',
      region: 'Region',
      requestPars: 'RequestPars',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterSpecification: 'string',
      clusterType: 'string',
      clusterVersion: 'string',
      connectionType: 'string',
      diskType: 'string',
      instanceCount: 'number',
      instanceName: 'string',
      mseVersion: 'string',
      netType: 'string',
      privateSlbSpecification: 'string',
      pubNetworkFlow: 'string',
      pubSlbSpecification: 'string',
      region: 'string',
      requestPars: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateClusterRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  errorCode?: string;
  instanceId?: string;
  message?: string;
  orderId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      instanceId: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineNamespaceRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  desc?: string;
  id?: string;
  instanceId?: string;
  name?: string;
  serviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      desc: 'Desc',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      serviceCount: 'ServiceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      desc: 'string',
      id: 'string',
      instanceId: 'string',
      name: 'string',
      serviceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineNamespaceResponseBody extends $tea.Model {
  clusterId?: string;
  data?: CreateEngineNamespaceResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      data: CreateEngineNamespaceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEngineNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEngineNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMseServiceApplicationRequest extends $tea.Model {
  acceptLanguage?: string;
  appName?: string;
  extraInfo?: string;
  language?: string;
  mseVersion?: string;
  region?: string;
  sentinelEnable?: string;
  source?: string;
  switchEnable?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      extraInfo: 'ExtraInfo',
      language: 'Language',
      mseVersion: 'MseVersion',
      region: 'Region',
      sentinelEnable: 'SentinelEnable',
      source: 'Source',
      switchEnable: 'SwitchEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      extraInfo: 'string',
      language: 'string',
      mseVersion: 'string',
      region: 'string',
      sentinelEnable: 'string',
      source: 'string',
      switchEnable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMseServiceApplicationResponseBody extends $tea.Model {
  code?: number;
  data?: CreateMseServiceApplicationResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: CreateMseServiceApplicationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMseServiceApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMseServiceApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMseServiceApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  appName?: string;
  betaIps?: string;
  content?: string;
  dataId?: string;
  desc?: string;
  group?: string;
  instanceId?: string;
  namespaceId?: string;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      betaIps: 'BetaIps',
      content: 'Content',
      dataId: 'DataId',
      desc: 'Desc',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      betaIps: 'string',
      content: 'string',
      dataId: 'string',
      desc: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosConfigResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosInstanceRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterName?: string;
  enabled?: boolean;
  ephemeral?: boolean;
  groupName?: string;
  instanceId?: string;
  ip?: string;
  metadata?: string;
  namespaceId?: string;
  port?: number;
  serviceName?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterName: 'ClusterName',
      enabled: 'Enabled',
      ephemeral: 'Ephemeral',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      metadata: 'Metadata',
      namespaceId: 'NamespaceId',
      port: 'Port',
      serviceName: 'ServiceName',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterName: 'string',
      enabled: 'boolean',
      ephemeral: 'boolean',
      groupName: 'string',
      instanceId: 'string',
      ip: 'string',
      metadata: 'string',
      namespaceId: 'string',
      port: 'number',
      serviceName: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosInstanceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNacosInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNacosInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosServiceRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  ephemeral?: boolean;
  groupName?: string;
  instanceId?: string;
  namespaceId?: string;
  protectThreshold?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      ephemeral: 'Ephemeral',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      protectThreshold: 'ProtectThreshold',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      ephemeral: 'boolean',
      groupName: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      protectThreshold: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosServiceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNacosServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNacosServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNacosServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneRequest extends $tea.Model {
  acceptLanguage?: string;
  enable?: boolean;
  enableRules?: boolean;
  entryRule?: string;
  entryRules?: CreateOrUpdateSwimmingLaneRequestEntryRules[];
  gatewaySwimmingLaneRouteJson?: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson;
  gmtCreate?: string;
  gmtModified?: string;
  groupId?: number;
  id?: number;
  licenseKey?: string;
  name?: string;
  namespace?: string;
  regionId?: string;
  source?: string;
  status?: number;
  tag?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      enable: 'Enable',
      enableRules: 'EnableRules',
      entryRule: 'EntryRule',
      entryRules: 'EntryRules',
      gatewaySwimmingLaneRouteJson: 'GatewaySwimmingLaneRouteJson',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupId: 'GroupId',
      id: 'Id',
      licenseKey: 'LicenseKey',
      name: 'Name',
      namespace: 'Namespace',
      regionId: 'RegionId',
      source: 'Source',
      status: 'Status',
      tag: 'Tag',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      enable: 'boolean',
      enableRules: 'boolean',
      entryRule: 'string',
      entryRules: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestEntryRules },
      gatewaySwimmingLaneRouteJson: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson,
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'number',
      id: 'number',
      licenseKey: 'string',
      name: 'string',
      namespace: 'string',
      regionId: 'string',
      source: 'string',
      status: 'number',
      tag: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  enable?: boolean;
  enableRules?: boolean;
  entryRule?: string;
  entryRules?: CreateOrUpdateSwimmingLaneShrinkRequestEntryRules[];
  gatewaySwimmingLaneRouteJsonShrink?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groupId?: number;
  id?: number;
  licenseKey?: string;
  name?: string;
  namespace?: string;
  regionId?: string;
  source?: string;
  status?: number;
  tag?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      enable: 'Enable',
      enableRules: 'EnableRules',
      entryRule: 'EntryRule',
      entryRules: 'EntryRules',
      gatewaySwimmingLaneRouteJsonShrink: 'GatewaySwimmingLaneRouteJson',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupId: 'GroupId',
      id: 'Id',
      licenseKey: 'LicenseKey',
      name: 'Name',
      namespace: 'Namespace',
      regionId: 'RegionId',
      source: 'Source',
      status: 'Status',
      tag: 'Tag',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      enable: 'boolean',
      enableRules: 'boolean',
      entryRule: 'string',
      entryRules: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneShrinkRequestEntryRules },
      gatewaySwimmingLaneRouteJsonShrink: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'number',
      id: 'number',
      licenseKey: 'string',
      name: 'string',
      namespace: 'string',
      regionId: 'string',
      source: 'string',
      status: 'number',
      tag: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateSwimmingLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOrUpdateSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneGroupRequest extends $tea.Model {
  acceptLanguage?: string;
  appIds?: string;
  dbGrayEnable?: boolean;
  enable?: boolean;
  entryApp?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  licenseKey?: string;
  messageQueueFilterSide?: string;
  messageQueueGrayEnable?: boolean;
  name?: string;
  namespace?: string;
  recordCanaryDetail?: boolean;
  region?: string;
  source?: string;
  status?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appIds: 'AppIds',
      dbGrayEnable: 'DbGrayEnable',
      enable: 'Enable',
      entryApp: 'EntryApp',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      licenseKey: 'LicenseKey',
      messageQueueFilterSide: 'MessageQueueFilterSide',
      messageQueueGrayEnable: 'MessageQueueGrayEnable',
      name: 'Name',
      namespace: 'Namespace',
      recordCanaryDetail: 'RecordCanaryDetail',
      region: 'Region',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appIds: 'string',
      dbGrayEnable: 'boolean',
      enable: 'boolean',
      entryApp: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      licenseKey: 'string',
      messageQueueFilterSide: 'string',
      messageQueueGrayEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      recordCanaryDetail: 'boolean',
      region: 'string',
      source: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneGroupResponseBody extends $tea.Model {
  code?: number;
  data?: CreateOrUpdateSwimmingLaneGroupResponseBodyData;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateOrUpdateSwimmingLaneGroupResponseBodyData,
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrUpdateSwimmingLaneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOrUpdateSwimmingLaneGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateZnodeRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  data?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      data: 'Data',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      data: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateZnodeResponseBody extends $tea.Model {
  data?: CreateZnodeResponseBodyData;
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateZnodeResponseBodyData,
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateZnodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateZnodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateZnodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthResourceRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthResourceResponseBody extends $tea.Model {
  code?: number;
  data?: DeleteAuthResourceResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: DeleteAuthResourceResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAuthResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAuthResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  acceptLanguage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEngineNamespaceRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  id?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      id: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEngineNamespaceResponseBody extends $tea.Model {
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEngineNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEngineNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEngineNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRequest extends $tea.Model {
  acceptLanguage?: string;
  deleteSlb?: boolean;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      deleteSlb: 'DeleteSlb',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      deleteSlb: 'boolean',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponseBody extends $tea.Model {
  code?: number;
  data?: DeleteGatewayResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: DeleteGatewayResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayAuthConsumerRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayAuthConsumerResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayAuthConsumerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewayAuthConsumerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayAuthConsumerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayAuthConsumerResourceRequest extends $tea.Model {
  acceptLanguage?: string;
  consumerId?: number;
  gatewayUniqueId?: string;
  idList?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      idList: 'IdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerId: 'number',
      gatewayUniqueId: 'string',
      idList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayAuthConsumerResourceResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayAuthConsumerResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewayAuthConsumerResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayAuthConsumerResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayDomainRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayDomainResponseBody extends $tea.Model {
  code?: number;
  data?: DeleteGatewayDomainResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: DeleteGatewayDomainResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewayDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRouteRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      routeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRouteResponseBody extends $tea.Model {
  code?: number;
  data?: DeleteGatewayRouteResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: DeleteGatewayRouteResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceResponseBody extends $tea.Model {
  code?: number;
  data?: DeleteGatewayServiceResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: DeleteGatewayServiceResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewayServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceVersionRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  serviceId?: number;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      serviceId: 'number',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceVersionResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewayServiceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayServiceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySlbRequest extends $tea.Model {
  acceptLanguage?: string;
  deleteSlb?: boolean;
  gatewayUniqueId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      deleteSlb: 'DeleteSlb',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      deleteSlb: 'boolean',
      gatewayUniqueId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySlbResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewaySlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewaySlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMigrationTaskRequest extends $tea.Model {
  acceptLanguage?: string;
  id?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      id: 'Id',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      id: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMigrationTaskResponseBody extends $tea.Model {
  data?: boolean;
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMigrationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMigrationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMigrationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  beta?: boolean;
  dataId?: string;
  group?: string;
  instanceId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      beta: 'Beta',
      dataId: 'DataId',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      beta: 'boolean',
      dataId: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigResponseBody extends $tea.Model {
  code?: string;
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigsRequest extends $tea.Model {
  acceptLanguage?: string;
  ids?: string;
  instanceId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ids: 'Ids',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ids: 'string',
      instanceId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigsResponseBody extends $tea.Model {
  code?: number;
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNacosConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNacosConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosInstanceRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterName?: string;
  ephemeral?: boolean;
  groupName?: string;
  instanceId?: string;
  ip?: string;
  namespaceId?: string;
  port?: number;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterName: 'ClusterName',
      ephemeral: 'Ephemeral',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      namespaceId: 'NamespaceId',
      port: 'Port',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterName: 'string',
      ephemeral: 'boolean',
      groupName: 'string',
      instanceId: 'string',
      ip: 'string',
      namespaceId: 'string',
      port: 'number',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosInstanceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNacosInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNacosInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosServiceRequest extends $tea.Model {
  acceptLanguage?: string;
  groupName?: string;
  instanceId?: string;
  namespaceId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      groupName: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosServiceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNacosServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNacosServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNacosServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $tea.Model {
  acceptLanguage?: string;
  name?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      name: 'Name',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      name: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupRuleRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupRuleResponseBody extends $tea.Model {
  code?: number;
  data?: DeleteSecurityGroupRuleResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: DeleteSecurityGroupRuleResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSecurityGroupRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSecurityGroupRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceSourceRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  sourceId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      sourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceSourceResponseBody extends $tea.Model {
  code?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneRequest extends $tea.Model {
  acceptLanguage?: string;
  laneId?: number;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      laneId: 'LaneId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      laneId: 'number',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSwimmingLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneGroupRequest extends $tea.Model {
  acceptLanguage?: string;
  groupId?: number;
  namespace?: string;
  region?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      groupId: 'GroupId',
      namespace: 'Namespace',
      region: 'Region',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      groupId: 'number',
      namespace: 'string',
      region: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneGroupResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSwimmingLaneGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSwimmingLaneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSwimmingLaneGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZnodeRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  path?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      path: 'Path',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      path: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZnodeResponseBody extends $tea.Model {
  data?: DeleteZnodeResponseBodyData;
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteZnodeResponseBodyData,
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZnodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteZnodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteZnodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportNacosConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  appName?: string;
  dataId?: string;
  group?: string;
  ids?: string;
  instanceId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      dataId: 'DataId',
      group: 'Group',
      ids: 'Ids',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      dataId: 'string',
      group: 'string',
      ids: 'string',
      instanceId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportNacosConfigResponseBody extends $tea.Model {
  code?: number;
  data?: ExportNacosConfigResponseBodyData;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ExportNacosConfigResponseBodyData,
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportZookeeperDataRequest extends $tea.Model {
  acceptLanguage?: string;
  exportType?: string;
  instanceId?: string;
  regionId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      exportType: 'ExportType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      exportType: 'string',
      instanceId: 'string',
      regionId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportZookeeperDataResponseBody extends $tea.Model {
  data?: ExportZookeeperDataResponseBodyData;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExportZookeeperDataResponseBodyData,
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportZookeeperDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportZookeeperDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportZookeeperDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLosslessRuleListRequest extends $tea.Model {
  acceptLanguage?: string;
  appId?: string;
  appName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLosslessRuleListResponseBody extends $tea.Model {
  code?: string;
  data?: FetchLosslessRuleListResponseBodyData;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: FetchLosslessRuleListResponseBodyData,
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLosslessRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FetchLosslessRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FetchLosslessRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppMessageQueueRouteRequest extends $tea.Model {
  acceptLanguage?: string;
  appId?: string;
  appName?: string;
  namespace?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      namespace: 'Namespace',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      namespace: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppMessageQueueRouteResponseBody extends $tea.Model {
  code?: number;
  data?: GetAppMessageQueueRouteResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GetAppMessageQueueRouteResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppMessageQueueRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppMessageQueueRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppMessageQueueRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListRequest extends $tea.Model {
  acceptLanguage?: string;
  appId?: string;
  appName?: string;
  language?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  sentinelEnable?: boolean;
  source?: string;
  switchEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      language: 'Language',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      sentinelEnable: 'SentinelEnable',
      source: 'Source',
      switchEnable: 'SwitchEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      language: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      sentinelEnable: 'boolean',
      source: 'string',
      switchEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListResponseBody extends $tea.Model {
  code?: number;
  data?: GetApplicationListResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GetApplicationListResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetApplicationListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApplicationListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListWithMetircsRequest extends $tea.Model {
  acceptLanguage?: string;
  appId?: string;
  appName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListWithMetircsResponseBody extends $tea.Model {
  code?: number;
  data?: GetApplicationListWithMetircsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GetApplicationListWithMetircsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListWithMetircsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetApplicationListWithMetircsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApplicationListWithMetircsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlackWhiteListRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  isWhite?: boolean;
  resourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      isWhite: 'IsWhite',
      resourceType: 'ResourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      isWhite: 'boolean',
      resourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlackWhiteListResponseBody extends $tea.Model {
  code?: number;
  data?: GetBlackWhiteListResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GetBlackWhiteListResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlackWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBlackWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBlackWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEngineNamepaceRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  id?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      id: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEngineNamepaceResponseBody extends $tea.Model {
  configCount?: string;
  errorCode?: string;
  httpCode?: string;
  message?: string;
  namespace?: string;
  namespaceDesc?: string;
  namespaceShowName?: string;
  quota?: string;
  requestId?: string;
  success?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configCount: 'ConfigCount',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      namespace: 'Namespace',
      namespaceDesc: 'NamespaceDesc',
      namespaceShowName: 'NamespaceShowName',
      quota: 'Quota',
      requestId: 'RequestId',
      success: 'Success',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCount: 'string',
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      namespace: 'string',
      namespaceDesc: 'string',
      namespaceShowName: 'string',
      quota: 'string',
      requestId: 'string',
      success: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEngineNamepaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEngineNamepaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEngineNamepaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBody extends $tea.Model {
  code?: number;
  data?: GetGatewayResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GetGatewayResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthConsumerDetailRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthConsumerDetailResponseBody extends $tea.Model {
  code?: number;
  data?: GetGatewayAuthConsumerDetailResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetGatewayAuthConsumerDetailResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthConsumerDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGatewayAuthConsumerDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGatewayAuthConsumerDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayDomainDetailRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayDomainDetailResponseBody extends $tea.Model {
  code?: number;
  data?: GetGatewayDomainDetailResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GetGatewayDomainDetailResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGatewayDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGatewayDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayOptionRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayOptionResponseBody extends $tea.Model {
  code?: number;
  data?: GatewayOption;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GatewayOption,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayOptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGatewayOptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGatewayOptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  routeId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      routeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBody extends $tea.Model {
  code?: number;
  data?: GetGatewayRouteDetailResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGatewayRouteDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGatewayRouteDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBody extends $tea.Model {
  code?: number;
  data?: GetGatewayServiceDetailResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GetGatewayServiceDetailResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGatewayServiceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGatewayServiceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceKubernetesClusterRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceKubernetesClusterResponseBody extends $tea.Model {
  code?: number;
  data?: GetGovernanceKubernetesClusterResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GetGovernanceKubernetesClusterResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceKubernetesClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGovernanceKubernetesClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGovernanceKubernetesClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageRequest extends $tea.Model {
  acceptLanguage?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $tea.Model {
  data?: GetImageResponseBodyData;
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetImageResponseBodyData,
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportFileUrlRequest extends $tea.Model {
  acceptLanguage?: string;
  contentType?: string;
  instanceId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      contentType: 'ContentType',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      contentType: 'string',
      instanceId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportFileUrlResponseBody extends $tea.Model {
  code?: number;
  data?: GetImportFileUrlResponseBodyData;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetImportFileUrlResponseBodyData,
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportFileUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetImportFileUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImportFileUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesSourceRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesSourceResponseBody extends $tea.Model {
  code?: number;
  data?: GetKubernetesSourceResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': GetKubernetesSourceResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetKubernetesSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetKubernetesSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMseFeatureSwitchRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMseFeatureSwitchResponseBody extends $tea.Model {
  errorCode?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMseFeatureSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMseFeatureSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMseFeatureSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMseSourceRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMseSourceResponseBody extends $tea.Model {
  code?: number;
  data?: GetMseSourceResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': GetMseSourceResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMseSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMseSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMseSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  beta?: boolean;
  dataId?: string;
  group?: string;
  instanceId?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      beta: 'Beta',
      dataId: 'DataId',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      beta: 'boolean',
      dataId: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosConfigResponseBody extends $tea.Model {
  configuration?: GetNacosConfigResponseBodyConfiguration;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: GetNacosConfigResponseBodyConfiguration,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosHistoryConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  dataId?: string;
  group?: string;
  instanceId?: string;
  namespaceId?: string;
  nid?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dataId: 'DataId',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      nid: 'Nid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dataId: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      nid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosHistoryConfigResponseBody extends $tea.Model {
  configuration?: GetNacosHistoryConfigResponseBodyConfiguration;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: GetNacosHistoryConfigResponseBodyConfiguration,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosHistoryConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNacosHistoryConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNacosHistoryConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewRequest extends $tea.Model {
  acceptLanguage?: string;
  period?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      period: 'Period',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      period: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  pluginId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      pluginId: 'PluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      pluginId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginConfigResponseBody extends $tea.Model {
  code?: number;
  data?: GetPluginConfigResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetPluginConfigResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPluginConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPluginConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginsRequest extends $tea.Model {
  acceptLanguage?: string;
  category?: number;
  enableOnly?: boolean;
  gatewayUniqueId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      category: 'Category',
      enableOnly: 'EnableOnly',
      gatewayUniqueId: 'GatewayUniqueId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      category: 'number',
      enableOnly: 'boolean',
      gatewayUniqueId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginsResponseBody extends $tea.Model {
  code?: number;
  data?: GetPluginsResponseBodyData[];
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetPluginsResponseBodyData },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPluginsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPluginsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListRequest extends $tea.Model {
  acceptLanguage?: string;
  appId?: string;
  ip?: string;
  region?: string;
  serviceName?: string;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      ip: 'Ip',
      region: 'Region',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      ip: 'string',
      region: 'string',
      serviceName: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListResponseBody extends $tea.Model {
  code?: number;
  data?: GetServiceListResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': GetServiceListResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListenersRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  clusterName?: string;
  groupName?: string;
  hasIpCount?: string;
  instanceId?: string;
  namespaceId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  requestPars?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      groupName: 'GroupName',
      hasIpCount: 'HasIpCount',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      clusterName: 'string',
      groupName: 'string',
      hasIpCount: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestPars: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListenersResponseBody extends $tea.Model {
  data?: GetServiceListenersResponseBodyData[];
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetServiceListenersResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListenersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceListenersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceListenersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagsBySwimmingLaneGroupIdRequest extends $tea.Model {
  acceptLanguage?: string;
  groupId?: number;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      groupId: 'GroupId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      groupId: 'number',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagsBySwimmingLaneGroupIdResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagsBySwimmingLaneGroupIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTagsBySwimmingLaneGroupIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTagsBySwimmingLaneGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZookeeperDataImportUrlRequest extends $tea.Model {
  acceptLanguage?: string;
  contentType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      contentType: 'ContentType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      contentType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZookeeperDataImportUrlResponseBody extends $tea.Model {
  code?: number;
  data?: GetZookeeperDataImportUrlResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetZookeeperDataImportUrlResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZookeeperDataImportUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetZookeeperDataImportUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetZookeeperDataImportUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  fileUrl?: string;
  instanceId?: string;
  namespaceId?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      fileUrl: 'FileUrl',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      fileUrl: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigResponseBody extends $tea.Model {
  code?: number;
  data?: ImportNacosConfigResponseBodyData;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ImportNacosConfigResponseBodyData,
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServicesRequest extends $tea.Model {
  acceptLanguage?: string;
  fcServiceName?: string;
  fcVersion?: string;
  gatewayUniqueId?: string;
  serviceList?: ImportServicesRequestServiceList[];
  sourceType?: string;
  tlsSetting?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      fcServiceName: 'FcServiceName',
      fcVersion: 'FcVersion',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceList: 'ServiceList',
      sourceType: 'SourceType',
      tlsSetting: 'TlsSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      fcServiceName: 'string',
      fcVersion: 'string',
      gatewayUniqueId: 'string',
      serviceList: { 'type': 'array', 'itemType': ImportServicesRequestServiceList },
      sourceType: 'string',
      tlsSetting: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServicesShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  fcServiceName?: string;
  fcVersion?: string;
  gatewayUniqueId?: string;
  serviceListShrink?: string;
  sourceType?: string;
  tlsSetting?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      fcServiceName: 'FcServiceName',
      fcVersion: 'FcVersion',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceListShrink: 'ServiceList',
      sourceType: 'SourceType',
      tlsSetting: 'TlsSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      fcServiceName: 'string',
      fcVersion: 'string',
      gatewayUniqueId: 'string',
      serviceListShrink: 'string',
      sourceType: 'string',
      tlsSetting: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServicesResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportZookeeperDataRequest extends $tea.Model {
  acceptLanguage?: string;
  fileName?: string;
  fileUrl?: string;
  instanceId?: string;
  regionId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      fileName: 'string',
      fileUrl: 'string',
      instanceId: 'string',
      regionId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportZookeeperDataResponseBody extends $tea.Model {
  data?: any;
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportZookeeperDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportZookeeperDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportZookeeperDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsInstancesRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  clusterName?: string;
  groupName?: string;
  instanceId?: string;
  namespaceId?: string;
  pageNum?: number;
  pageSize?: number;
  requestPars?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestPars: 'RequestPars',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      clusterName: 'string',
      groupName: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestPars: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsInstancesResponseBody extends $tea.Model {
  data?: ListAnsInstancesResponseBodyData[];
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAnsInstancesResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAnsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  clusterName?: string;
  groupName?: string;
  instanceId?: string;
  namespaceId?: string;
  pageNum?: number;
  pageSize?: number;
  requestPars?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestPars: 'RequestPars',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      clusterName: 'string',
      groupName: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestPars: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponseBody extends $tea.Model {
  data?: ListAnsServiceClustersResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAnsServiceClustersResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAnsServiceClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnsServiceClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServicesRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  groupName?: string;
  hasIpCount?: string;
  instanceId?: string;
  namespaceId?: string;
  pageNum?: number;
  pageSize?: number;
  requestPars?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      groupName: 'GroupName',
      hasIpCount: 'HasIpCount',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestPars: 'RequestPars',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      groupName: 'string',
      hasIpCount: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestPars: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServicesResponseBody extends $tea.Model {
  data?: ListAnsServicesResponseBodyData[];
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAnsServicesResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAnsServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAnsServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppBySwimmingLaneGroupTagRequest extends $tea.Model {
  acceptLanguage?: string;
  groupId?: number;
  namespace?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      groupId: 'GroupId',
      namespace: 'Namespace',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      groupId: 'number',
      namespace: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppBySwimmingLaneGroupTagResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppBySwimmingLaneGroupTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppBySwimmingLaneGroupTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppBySwimmingLaneGroupTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesRequest extends $tea.Model {
  acceptLanguage?: string;
  appId?: string;
  appName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesResponseBody extends $tea.Model {
  code?: number;
  data?: ListApplicationsWithTagRulesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: ListApplicationsWithTagRulesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListApplicationsWithTagRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsWithTagRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterConnectionTypesRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterConnectionTypesResponseBody extends $tea.Model {
  code?: number;
  data?: ListClusterConnectionTypesResponseBodyData[];
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListClusterConnectionTypesResponseBodyData },
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterConnectionTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClusterConnectionTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterConnectionTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHealthCheckTaskRequest extends $tea.Model {
  acceptLanguage?: string;
  instanceId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHealthCheckTaskResponseBody extends $tea.Model {
  code?: number;
  data?: ListClusterHealthCheckTaskResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListClusterHealthCheckTaskResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHealthCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClusterHealthCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterHealthCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypesRequest extends $tea.Model {
  acceptLanguage?: string;
  connectType?: string;
  mseVersion?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      connectType: 'ConnectType',
      mseVersion: 'MseVersion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      connectType: 'string',
      mseVersion: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypesResponseBody extends $tea.Model {
  code?: number;
  data?: ListClusterTypesResponseBodyData[];
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListClusterTypesResponseBodyData },
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClusterTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterVersionsRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterType?: string;
  mseVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterType: 'ClusterType',
      mseVersion: 'MseVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterType: 'string',
      mseVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterVersionsResponseBody extends $tea.Model {
  code?: number;
  data?: ListClusterVersionsResponseBodyData[];
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListClusterVersionsResponseBodyData },
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClusterVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClusterVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterAliasName?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  requestPars?: string;
  resourceGroupId?: string;
  tag?: ListClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterAliasName: 'ClusterAliasName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterAliasName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestPars: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListClustersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  data?: ListClustersResponseBodyData[];
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListClustersResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTrackRequest extends $tea.Model {
  acceptLanguage?: string;
  dataId?: string;
  endTs?: number;
  group?: string;
  instanceId?: string;
  ip?: string;
  namespaceId?: string;
  pageNum?: number;
  pageSize?: number;
  requestPars?: string;
  reverse?: boolean;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dataId: 'DataId',
      endTs: 'EndTs',
      group: 'Group',
      instanceId: 'InstanceId',
      ip: 'Ip',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestPars: 'RequestPars',
      reverse: 'Reverse',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dataId: 'string',
      endTs: 'number',
      group: 'string',
      instanceId: 'string',
      ip: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestPars: 'string',
      reverse: 'boolean',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTrackResponseBody extends $tea.Model {
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  traces?: ListConfigTrackResponseBodyTraces[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      traces: { 'type': 'array', 'itemType': ListConfigTrackResponseBodyTraces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListConfigTrackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConfigTrackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineNamespacesRequest extends $tea.Model {
  acceptLanguage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineNamespacesResponseBody extends $tea.Model {
  data?: ListEngineNamespacesResponseBodyData[];
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListEngineNamespacesResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEngineNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEngineNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaInstancesRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  pageNum?: number;
  pageSize?: number;
  requestPars?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestPars: 'RequestPars',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestPars: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaInstancesResponseBody extends $tea.Model {
  data?: ListEurekaInstancesResponseBodyData[];
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListEurekaInstancesResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEurekaInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEurekaInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaServicesRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaServicesResponseBody extends $tea.Model {
  data?: ListEurekaServicesResponseBodyData[];
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListEurekaServicesResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEurekaServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEurekaServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExportZookeeperDataRequest extends $tea.Model {
  acceptLanguage?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExportZookeeperDataResponseBody extends $tea.Model {
  data?: ListExportZookeeperDataResponseBodyData[];
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListExportZookeeperDataResponseBodyData },
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExportZookeeperDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListExportZookeeperDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExportZookeeperDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRequest extends $tea.Model {
  acceptLanguage?: string;
  descSort?: boolean;
  filterParams?: ListGatewayRequestFilterParams;
  orderItem?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      descSort: 'DescSort',
      filterParams: 'FilterParams',
      orderItem: 'OrderItem',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      descSort: 'boolean',
      filterParams: ListGatewayRequestFilterParams,
      orderItem: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  descSort?: boolean;
  filterParamsShrink?: string;
  orderItem?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      descSort: 'DescSort',
      filterParamsShrink: 'FilterParams',
      orderItem: 'OrderItem',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      descSort: 'boolean',
      filterParamsShrink: 'string',
      orderItem: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBody extends $tea.Model {
  code?: number;
  data?: ListGatewayResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: ListGatewayResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthConsumerRequest extends $tea.Model {
  acceptLanguage?: string;
  consumerStatus?: boolean;
  gatewayUniqueId?: string;
  name?: string;
  pageNum?: string;
  pageSize?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerStatus: 'ConsumerStatus',
      gatewayUniqueId: 'GatewayUniqueId',
      name: 'Name',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerStatus: 'boolean',
      gatewayUniqueId: 'string',
      name: 'string',
      pageNum: 'string',
      pageSize: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthConsumerResponseBody extends $tea.Model {
  code?: number;
  data?: ListGatewayAuthConsumerResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListGatewayAuthConsumerResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthConsumerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGatewayAuthConsumerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayAuthConsumerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthConsumerResourceRequest extends $tea.Model {
  acceptLanguage?: string;
  consumerId?: number;
  gatewayUniqueId?: string;
  pageNum?: string;
  pageSize?: string;
  resourceStatus?: boolean;
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceStatus: 'ResourceStatus',
      routeName: 'RouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerId: 'number',
      gatewayUniqueId: 'string',
      pageNum: 'string',
      pageSize: 'string',
      resourceStatus: 'boolean',
      routeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthConsumerResourceResponseBody extends $tea.Model {
  code?: number;
  data?: ListGatewayAuthConsumerResourceResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListGatewayAuthConsumerResourceResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthConsumerResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGatewayAuthConsumerResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayAuthConsumerResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayDomainRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayDomainResponseBody extends $tea.Model {
  code?: number;
  data?: ListGatewayDomainResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': ListGatewayDomainResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGatewayDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteRequest extends $tea.Model {
  acceptLanguage?: string;
  descSort?: boolean;
  filterParams?: ListGatewayRouteRequestFilterParams;
  orderItem?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      descSort: 'DescSort',
      filterParams: 'FilterParams',
      orderItem: 'OrderItem',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      descSort: 'boolean',
      filterParams: ListGatewayRouteRequestFilterParams,
      orderItem: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  descSort?: boolean;
  filterParamsShrink?: string;
  orderItem?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      descSort: 'DescSort',
      filterParamsShrink: 'FilterParams',
      orderItem: 'OrderItem',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      descSort: 'boolean',
      filterParamsShrink: 'string',
      orderItem: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBody extends $tea.Model {
  code?: number;
  data?: ListGatewayRouteResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteOnAuthRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteOnAuthResponseBody extends $tea.Model {
  code?: number;
  data?: ListGatewayRouteOnAuthResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': ListGatewayRouteOnAuthResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteOnAuthResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGatewayRouteOnAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayRouteOnAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceRequest extends $tea.Model {
  acceptLanguage?: string;
  descSort?: boolean;
  filterParams?: ListGatewayServiceRequestFilterParams;
  orderItem?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      descSort: 'DescSort',
      filterParams: 'FilterParams',
      orderItem: 'OrderItem',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      descSort: 'boolean',
      filterParams: ListGatewayServiceRequestFilterParams,
      orderItem: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  descSort?: boolean;
  filterParamsShrink?: string;
  orderItem?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      descSort: 'DescSort',
      filterParamsShrink: 'FilterParams',
      orderItem: 'OrderItem',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      descSort: 'boolean',
      filterParamsShrink: 'string',
      orderItem: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBody extends $tea.Model {
  code?: number;
  data?: ListGatewayServiceResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: ListGatewayServiceResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGatewayServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaySlbRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaySlbResponseBody extends $tea.Model {
  code?: number;
  data?: ListGatewaySlbResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': ListGatewaySlbResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaySlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGatewaySlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewaySlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceCountRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterType?: string;
  mseVersion?: string;
  regionId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterType: 'ClusterType',
      mseVersion: 'MseVersion',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterType: 'string',
      mseVersion: 'string',
      regionId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceCountResponseBody extends $tea.Model {
  code?: number;
  data?: number[];
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': 'number' },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstanceCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  dataId?: string;
  group?: string;
  instanceId?: string;
  namespaceId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dataId: 'DataId',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dataId: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByConfigResponseBody extends $tea.Model {
  errorCode?: string;
  httpCode?: string;
  listeners?: ListListenersByConfigResponseBodyListeners[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      listeners: 'Listeners',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      listeners: { 'type': 'array', 'itemType': ListListenersByConfigResponseBodyListeners },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListListenersByConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListListenersByConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByIpRequest extends $tea.Model {
  acceptLanguage?: string;
  instanceId?: string;
  ip?: string;
  namespaceId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      ip: 'Ip',
      namespaceId: 'NamespaceId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      ip: 'string',
      namespaceId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByIpResponseBody extends $tea.Model {
  errorCode?: string;
  httpCode?: string;
  listeners?: ListListenersByIpResponseBodyListeners[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      listeners: 'Listeners',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      listeners: { 'type': 'array', 'itemType': ListListenersByIpResponseBodyListeners },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListListenersByIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListListenersByIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationTaskRequest extends $tea.Model {
  acceptLanguage?: string;
  originInstanceName?: string;
  pageNum?: number;
  pageSize?: number;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      originInstanceName: 'OriginInstanceName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      originInstanceName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationTaskResponseBody extends $tea.Model {
  data?: ListMigrationTaskResponseBodyData[];
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListMigrationTaskResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMigrationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMigrationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosConfigsRequest extends $tea.Model {
  acceptLanguage?: string;
  appName?: string;
  dataId?: string;
  group?: string;
  instanceId?: string;
  namespaceId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  requestPars?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      dataId: 'DataId',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      dataId: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestPars: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosConfigsResponseBody extends $tea.Model {
  code?: number;
  configurations?: ListNacosConfigsResponseBodyConfigurations[];
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      configurations: 'Configurations',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      configurations: { 'type': 'array', 'itemType': ListNacosConfigsResponseBodyConfigurations },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNacosConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNacosConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosHistoryConfigsRequest extends $tea.Model {
  acceptLanguage?: string;
  dataId?: string;
  group?: string;
  instanceId?: string;
  namespaceId?: string;
  pageNum?: number;
  pageSize?: number;
  regionId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dataId: 'DataId',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dataId: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosHistoryConfigsResponseBody extends $tea.Model {
  errorCode?: string;
  historyItems?: ListNacosHistoryConfigsResponseBodyHistoryItems[];
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      historyItems: 'HistoryItems',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      historyItems: { 'type': 'array', 'itemType': ListNacosHistoryConfigsResponseBodyHistoryItems },
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosHistoryConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNacosHistoryConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNacosHistoryConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamingTrackRequest extends $tea.Model {
  acceptLanguage?: string;
  endTs?: number;
  group?: string;
  instanceId?: string;
  ip?: string;
  namespaceId?: string;
  pageNum?: number;
  pageSize?: number;
  requestPars?: string;
  reverse?: boolean;
  serviceName?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      endTs: 'EndTs',
      group: 'Group',
      instanceId: 'InstanceId',
      ip: 'Ip',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestPars: 'RequestPars',
      reverse: 'Reverse',
      serviceName: 'ServiceName',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      endTs: 'number',
      group: 'string',
      instanceId: 'string',
      ip: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestPars: 'string',
      reverse: 'boolean',
      serviceName: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamingTrackResponseBody extends $tea.Model {
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  traces?: ListNamingTrackResponseBodyTraces[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      traces: { 'type': 'array', 'itemType': ListNamingTrackResponseBodyTraces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamingTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNamingTrackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNamingTrackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSSLCertRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSSLCertResponseBody extends $tea.Model {
  code?: number;
  data?: ListSSLCertResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': ListSSLCertResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSSLCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSSLCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSSLCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupResponseBody extends $tea.Model {
  code?: number;
  data?: ListSecurityGroupResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': ListSecurityGroupResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupRuleRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupRuleResponseBody extends $tea.Model {
  code?: number;
  data?: ListSecurityGroupRuleResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': ListSecurityGroupRuleResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecurityGroupRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSecurityGroupRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSourceRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSourceResponseBody extends $tea.Model {
  code?: number;
  data?: ListServiceSourceResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': ListServiceSourceResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListServiceSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  acceptLanguage?: string;
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  errorCode?: string;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZkTrackRequest extends $tea.Model {
  acceptLanguage?: string;
  endTs?: number;
  instanceId?: string;
  pageNum?: number;
  pageSize?: number;
  path?: string;
  requestPars?: string;
  reverse?: boolean;
  sessionId?: string;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      endTs: 'EndTs',
      instanceId: 'InstanceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      path: 'Path',
      requestPars: 'RequestPars',
      reverse: 'Reverse',
      sessionId: 'SessionId',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      endTs: 'number',
      instanceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      path: 'string',
      requestPars: 'string',
      reverse: 'boolean',
      sessionId: 'string',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZkTrackResponseBody extends $tea.Model {
  errorCode?: string;
  httpCode?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  traces?: ListZkTrackResponseBodyTraces[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      traces: { 'type': 'array', 'itemType': ListZkTrackResponseBodyTraces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZkTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListZkTrackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListZkTrackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZnodeChildrenRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZnodeChildrenResponseBody extends $tea.Model {
  data?: ListZnodeChildrenResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListZnodeChildrenResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZnodeChildrenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListZnodeChildrenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListZnodeChildrenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGovernanceKubernetesClusterRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  namespaceInfos?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      namespaceInfos: 'NamespaceInfos',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      namespaceInfos: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGovernanceKubernetesClusterResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGovernanceKubernetesClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyGovernanceKubernetesClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyGovernanceKubernetesClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLosslessRuleRequest extends $tea.Model {
  acceptLanguage?: string;
  aligned?: boolean;
  appId?: string;
  appName?: string;
  delayTime?: number;
  enable?: boolean;
  funcType?: number;
  lossLessDetail?: boolean;
  namespace?: string;
  notice?: boolean;
  regionId?: string;
  related?: boolean;
  shutdownWaitSeconds?: number;
  source?: string;
  warmupTime?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      aligned: 'Aligned',
      appId: 'AppId',
      appName: 'AppName',
      delayTime: 'DelayTime',
      enable: 'Enable',
      funcType: 'FuncType',
      lossLessDetail: 'LossLessDetail',
      namespace: 'Namespace',
      notice: 'Notice',
      regionId: 'RegionId',
      related: 'Related',
      shutdownWaitSeconds: 'ShutdownWaitSeconds',
      source: 'Source',
      warmupTime: 'WarmupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      aligned: 'boolean',
      appId: 'string',
      appName: 'string',
      delayTime: 'number',
      enable: 'boolean',
      funcType: 'number',
      lossLessDetail: 'boolean',
      namespace: 'string',
      notice: 'boolean',
      regionId: 'string',
      related: 'boolean',
      shutdownWaitSeconds: 'number',
      source: 'string',
      warmupTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLosslessRuleResponseBody extends $tea.Model {
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLosslessRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyLosslessRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyLosslessRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineGatewayRouteRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      routeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineGatewayRouteResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineGatewayRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OfflineGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OfflineGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderClusterHealthCheckRiskNoticeRequest extends $tea.Model {
  acceptLanguage?: string;
  instanceId?: string;
  mute?: boolean;
  noticeType?: string;
  regionId?: string;
  requestPars?: string;
  riskCode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      mute: 'Mute',
      noticeType: 'NoticeType',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
      riskCode: 'RiskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      mute: 'boolean',
      noticeType: 'string',
      regionId: 'string',
      requestPars: 'string',
      riskCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderClusterHealthCheckRiskNoticeResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderClusterHealthCheckRiskNoticeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OrderClusterHealthCheckRiskNoticeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OrderClusterHealthCheckRiskNoticeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullServicesRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  namespace?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      namespace: 'Namespace',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      namespace: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullServicesResponseBody extends $tea.Model {
  code?: number;
  data?: PullServicesResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': PullServicesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PullServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PullServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutClusterHealthCheckTaskRequest extends $tea.Model {
  acceptLanguage?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutClusterHealthCheckTaskResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutClusterHealthCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutClusterHealthCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutClusterHealthCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllSwimmingLaneRequest extends $tea.Model {
  acceptLanguage?: string;
  groupId?: number;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      groupId: 'GroupId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      groupId: 'number',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllSwimmingLaneResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllSwimmingLaneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAllSwimmingLaneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAllSwimmingLaneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllSwimmingLaneGroupRequest extends $tea.Model {
  acceptLanguage?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllSwimmingLaneGroupResponseBody extends $tea.Model {
  code?: number;
  data?: QueryAllSwimmingLaneGroupResponseBodyData[];
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': QueryAllSwimmingLaneGroupResponseBodyData },
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllSwimmingLaneGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAllSwimmingLaneGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAllSwimmingLaneGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessLocationsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessLocationsResponseBody extends $tea.Model {
  data?: QueryBusinessLocationsResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryBusinessLocationsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessLocationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBusinessLocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryBusinessLocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailRequest extends $tea.Model {
  acceptLanguage?: string;
  aclSwitch?: boolean;
  instanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      aclSwitch: 'AclSwitch',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      aclSwitch: 'boolean',
      instanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBody extends $tea.Model {
  data?: QueryClusterDetailResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryClusterDetailResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryClusterDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryClusterDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDiskSpecificationRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterType: 'ClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDiskSpecificationResponseBody extends $tea.Model {
  code?: number;
  data?: QueryClusterDiskSpecificationResponseBodyData;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: QueryClusterDiskSpecificationResponseBodyData,
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDiskSpecificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryClusterDiskSpecificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryClusterDiskSpecificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterInfoRequest extends $tea.Model {
  acceptLanguage?: string;
  aclSwitch?: boolean;
  clusterId?: string;
  instanceId?: string;
  orderId?: string;
  regionId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      aclSwitch: 'AclSwitch',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      aclSwitch: 'boolean',
      clusterId: 'string',
      instanceId: 'string',
      orderId: 'string',
      regionId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterInfoResponseBody extends $tea.Model {
  data?: QueryClusterInfoResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryClusterInfoResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryClusterInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryClusterInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterSpecificationRequest extends $tea.Model {
  acceptLanguage?: string;
  connectType?: string;
  mseVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      connectType: 'ConnectType',
      mseVersion: 'MseVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      connectType: 'string',
      mseVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterSpecificationResponseBody extends $tea.Model {
  code?: number;
  data?: QueryClusterSpecificationResponseBodyData[];
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': QueryClusterSpecificationResponseBodyData },
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterSpecificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryClusterSpecificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryClusterSpecificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  configType?: string;
  instanceId?: string;
  needRunningConf?: boolean;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      configType: 'ConfigType',
      instanceId: 'InstanceId',
      needRunningConf: 'NeedRunningConf',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      configType: 'string',
      instanceId: 'string',
      needRunningConf: 'boolean',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigResponseBody extends $tea.Model {
  code?: number;
  data?: QueryConfigResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: QueryConfigResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGatewayRegionRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGatewayRegionResponseBody extends $tea.Model {
  code?: number;
  data?: string[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGatewayRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGatewayRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryGatewayRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGatewayTypeRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGatewayTypeResponseBody extends $tea.Model {
  code?: number;
  data?: string[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGatewayTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGatewayTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryGatewayTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGovernanceKubernetesClusterRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  clusterName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      clusterName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGovernanceKubernetesClusterResponseBody extends $tea.Model {
  code?: number;
  data?: QueryGovernanceKubernetesClusterResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: QueryGovernanceKubernetesClusterResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGovernanceKubernetesClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGovernanceKubernetesClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryGovernanceKubernetesClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancesInfoRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  instanceId?: string;
  orderId?: string;
  regionId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      instanceId: 'string',
      orderId: 'string',
      regionId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancesInfoResponseBody extends $tea.Model {
  data?: QueryInstancesInfoResponseBodyData[];
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryInstancesInfoResponseBodyData },
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancesInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryInstancesInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryInstancesInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorRequest extends $tea.Model {
  acceptLanguage?: string;
  endTime?: number;
  instanceId?: string;
  monitorType?: string;
  requestPars?: string;
  startTime?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      monitorType: 'MonitorType',
      requestPars: 'RequestPars',
      startTime: 'StartTime',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      endTime: 'number',
      instanceId: 'string',
      monitorType: 'string',
      requestPars: 'string',
      startTime: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorResponseBody extends $tea.Model {
  data?: QueryMonitorResponseBodyData[];
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryMonitorResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNamespaceRequest extends $tea.Model {
  acceptLanguage?: string;
  name?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      name: 'Name',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      name: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNamespaceResponseBody extends $tea.Model {
  data?: QueryNamespaceResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryNamespaceResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlbSpecRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlbSpecResponseBody extends $tea.Model {
  code?: number;
  data?: QuerySlbSpecResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': QuerySlbSpecResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlbSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySlbSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySlbSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySwimmingLaneByIdRequest extends $tea.Model {
  acceptLanguage?: string;
  laneId?: number;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      laneId: 'LaneId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      laneId: 'number',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySwimmingLaneByIdResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySwimmingLaneByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySwimmingLaneByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySwimmingLaneByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryZnodeDetailRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  instanceId?: string;
  path?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      path: 'Path',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      instanceId: 'string',
      path: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryZnodeDetailResponseBody extends $tea.Model {
  data?: QueryZnodeDetailResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryZnodeDetailResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryZnodeDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryZnodeDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryZnodeDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartClusterRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  instanceId?: string;
  podNameList?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      podNameList: 'PodNameList',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      instanceId: 'string',
      podNameList: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartClusterResponseBody extends $tea.Model {
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RestartClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryClusterRequest extends $tea.Model {
  acceptLanguage?: string;
  instanceId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryClusterResponseBody extends $tea.Model {
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RetryClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RetryClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectGatewaySlbRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectGatewaySlbResponseBody extends $tea.Model {
  code?: number;
  data?: SelectGatewaySlbResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: { 'type': 'array', 'itemType': SelectGatewaySlbResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectGatewaySlbResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SelectGatewaySlbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SelectGatewaySlbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  acceptLanguage?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  acceptLanguage?: string;
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclRequest extends $tea.Model {
  acceptLanguage?: string;
  aclEntryList?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      aclEntryList: 'AclEntryList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      aclEntryList: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclResponseBody extends $tea.Model {
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBlackWhiteListRequest extends $tea.Model {
  acceptLanguage?: string;
  content?: string;
  gatewayUniqueId?: string;
  id?: number;
  isWhite?: boolean;
  name?: string;
  note?: string;
  resourceIdJsonList?: string;
  resourceType?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      content: 'Content',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      isWhite: 'IsWhite',
      name: 'Name',
      note: 'Note',
      resourceIdJsonList: 'ResourceIdJsonList',
      resourceType: 'ResourceType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      content: 'string',
      gatewayUniqueId: 'string',
      id: 'number',
      isWhite: 'boolean',
      name: 'string',
      note: 'string',
      resourceIdJsonList: 'string',
      resourceType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBlackWhiteListResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBlackWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateBlackWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBlackWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterAliasName?: string;
  instanceId?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterAliasName: 'ClusterAliasName',
      instanceId: 'InstanceId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterAliasName: 'string',
      instanceId: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterResponseBody extends $tea.Model {
  errorCode?: string;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterSpecRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  clusterSpecification?: string;
  instanceCount?: number;
  instanceId?: string;
  mseVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      clusterSpecification: 'ClusterSpecification',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      mseVersion: 'MseVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      clusterSpecification: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      mseVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterSpecResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateClusterSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClusterSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  autopurgePurgeInterval?: string;
  autopurgeSnapRetainCount?: string;
  clusterId?: string;
  configAuthEnabled?: boolean;
  configSecretEnabled?: boolean;
  configType?: string;
  eurekaSupported?: boolean;
  extendedTypesEnable?: string;
  initLimit?: string;
  instanceId?: string;
  juteMaxbuffer?: string;
  MCPEnabled?: boolean;
  maxClientCnxns?: string;
  maxSessionTimeout?: string;
  minSessionTimeout?: string;
  namingAuthEnabled?: boolean;
  openSuperAcl?: string;
  passWord?: string;
  requestPars?: string;
  snapshotCount?: string;
  syncLimit?: string;
  tickTime?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      autopurgePurgeInterval: 'AutopurgePurgeInterval',
      autopurgeSnapRetainCount: 'AutopurgeSnapRetainCount',
      clusterId: 'ClusterId',
      configAuthEnabled: 'ConfigAuthEnabled',
      configSecretEnabled: 'ConfigSecretEnabled',
      configType: 'ConfigType',
      eurekaSupported: 'EurekaSupported',
      extendedTypesEnable: 'ExtendedTypesEnable',
      initLimit: 'InitLimit',
      instanceId: 'InstanceId',
      juteMaxbuffer: 'JuteMaxbuffer',
      MCPEnabled: 'MCPEnabled',
      maxClientCnxns: 'MaxClientCnxns',
      maxSessionTimeout: 'MaxSessionTimeout',
      minSessionTimeout: 'MinSessionTimeout',
      namingAuthEnabled: 'NamingAuthEnabled',
      openSuperAcl: 'OpenSuperAcl',
      passWord: 'PassWord',
      requestPars: 'RequestPars',
      snapshotCount: 'SnapshotCount',
      syncLimit: 'SyncLimit',
      tickTime: 'TickTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      autopurgePurgeInterval: 'string',
      autopurgeSnapRetainCount: 'string',
      clusterId: 'string',
      configAuthEnabled: 'boolean',
      configSecretEnabled: 'boolean',
      configType: 'string',
      eurekaSupported: 'boolean',
      extendedTypesEnable: 'string',
      initLimit: 'string',
      instanceId: 'string',
      juteMaxbuffer: 'string',
      MCPEnabled: 'boolean',
      maxClientCnxns: 'string',
      maxSessionTimeout: 'string',
      minSessionTimeout: 'string',
      namingAuthEnabled: 'boolean',
      openSuperAcl: 'string',
      passWord: 'string',
      requestPars: 'string',
      snapshotCount: 'string',
      syncLimit: 'string',
      tickTime: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigResponseBody extends $tea.Model {
  code?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineNamespaceRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  desc?: string;
  id?: string;
  instanceId?: string;
  name?: string;
  serviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      desc: 'Desc',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      serviceCount: 'ServiceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      desc: 'string',
      id: 'string',
      instanceId: 'string',
      name: 'string',
      serviceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineNamespaceResponseBody extends $tea.Model {
  data?: UpdateEngineNamespaceResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateEngineNamespaceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEngineNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEngineNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerRequest extends $tea.Model {
  acceptLanguage?: string;
  description?: string;
  encodeType?: string;
  gatewayUniqueId?: string;
  id?: number;
  jwks?: string;
  keyName?: string;
  keyValue?: string;
  tokenName?: string;
  tokenPass?: boolean;
  tokenPosition?: string;
  tokenPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      description: 'Description',
      encodeType: 'EncodeType',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      jwks: 'Jwks',
      keyName: 'KeyName',
      keyValue: 'KeyValue',
      tokenName: 'TokenName',
      tokenPass: 'TokenPass',
      tokenPosition: 'TokenPosition',
      tokenPrefix: 'TokenPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      description: 'string',
      encodeType: 'string',
      gatewayUniqueId: 'string',
      id: 'number',
      jwks: 'string',
      keyName: 'string',
      keyValue: 'string',
      tokenName: 'string',
      tokenPass: 'boolean',
      tokenPosition: 'string',
      tokenPrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayAuthConsumerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayAuthConsumerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerResourceRequest extends $tea.Model {
  acceptLanguage?: string;
  consumerId?: number;
  gatewayUniqueId?: string;
  resourceList?: UpdateGatewayAuthConsumerResourceRequestResourceList[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerId: 'number',
      gatewayUniqueId: 'string',
      resourceList: { 'type': 'array', 'itemType': UpdateGatewayAuthConsumerResourceRequestResourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerResourceShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  consumerId?: number;
  gatewayUniqueId?: string;
  resourceListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      resourceListShrink: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerId: 'number',
      gatewayUniqueId: 'string',
      resourceListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerResourceResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayAuthConsumerResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayAuthConsumerResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerResourceStatusRequest extends $tea.Model {
  acceptLanguage?: string;
  consumerId?: number;
  gatewayUniqueId?: string;
  idList?: string;
  resourceStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      idList: 'IdList',
      resourceStatus: 'ResourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerId: 'number',
      gatewayUniqueId: 'string',
      idList: 'string',
      resourceStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerResourceStatusResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerResourceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayAuthConsumerResourceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayAuthConsumerResourceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerStatusRequest extends $tea.Model {
  acceptLanguage?: string;
  consumerStatus?: boolean;
  gatewayUniqueId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      consumerStatus: 'ConsumerStatus',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      consumerStatus: 'boolean',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerStatusResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayAuthConsumerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayAuthConsumerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayDomainRequest extends $tea.Model {
  acceptLanguage?: string;
  certIdentifier?: string;
  gatewayUniqueId?: string;
  http2?: string;
  id?: number;
  mustHttps?: boolean;
  protocol?: string;
  tlsMax?: string;
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      certIdentifier: 'CertIdentifier',
      gatewayUniqueId: 'GatewayUniqueId',
      http2: 'Http2',
      id: 'Id',
      mustHttps: 'MustHttps',
      protocol: 'Protocol',
      tlsMax: 'TlsMax',
      tlsMin: 'TlsMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      certIdentifier: 'string',
      gatewayUniqueId: 'string',
      http2: 'string',
      id: 'number',
      mustHttps: 'boolean',
      protocol: 'string',
      tlsMax: 'string',
      tlsMin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayDomainResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayNameRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayNameResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayOptionRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayOption?: GatewayOption;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayOption: 'GatewayOption',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayOption: GatewayOption,
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayOptionShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayOptionShrink?: string;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayOptionShrink: 'GatewayOption',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayOptionShrink: 'string',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayOptionResponseBody extends $tea.Model {
  code?: number;
  data?: GatewayOption;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GatewayOption,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayOptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayOptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayOptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequest extends $tea.Model {
  acceptLanguage?: string;
  destinationType?: string;
  directResponseJSON?: UpdateGatewayRouteRequestDirectResponseJSON;
  domainIdListJSON?: string;
  enableWaf?: boolean;
  fallback?: boolean;
  fallbackServices?: UpdateGatewayRouteRequestFallbackServices[];
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  name?: string;
  predicates?: UpdateGatewayRouteRequestPredicates;
  redirectJSON?: UpdateGatewayRouteRequestRedirectJSON;
  routeOrder?: number;
  services?: UpdateGatewayRouteRequestServices[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  destinationType?: string;
  directResponseJSONShrink?: string;
  domainIdListJSON?: string;
  enableWaf?: boolean;
  fallback?: boolean;
  fallbackServicesShrink?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  name?: string;
  predicatesShrink?: string;
  redirectJSONShrink?: string;
  routeOrder?: number;
  servicesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      destinationType: 'DestinationType',
      directResponseJSONShrink: 'DirectResponseJSON',
      domainIdListJSON: 'DomainIdListJSON',
      enableWaf: 'EnableWaf',
      fallback: 'Fallback',
      fallbackServicesShrink: 'FallbackServices',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      name: 'Name',
      predicatesShrink: 'Predicates',
      redirectJSONShrink: 'RedirectJSON',
      routeOrder: 'RouteOrder',
      servicesShrink: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      destinationType: 'string',
      directResponseJSONShrink: 'string',
      domainIdListJSON: 'string',
      enableWaf: 'boolean',
      fallback: 'boolean',
      fallbackServicesShrink: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      name: 'string',
      predicatesShrink: 'string',
      redirectJSONShrink: 'string',
      routeOrder: 'number',
      servicesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteAuthRequest extends $tea.Model {
  acceptLanguage?: string;
  authJSON?: UpdateGatewayRouteAuthRequestAuthJSON;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authJSON: 'AuthJSON',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authJSON: UpdateGatewayRouteAuthRequestAuthJSON,
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteAuthShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  authJSONShrink?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authJSONShrink: 'AuthJSON',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authJSONShrink: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteAuthResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  dynamicCode?: string;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteAuthResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayRouteAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayRouteAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteCORSRequest extends $tea.Model {
  acceptLanguage?: string;
  corsJSON?: UpdateGatewayRouteCORSRequestCorsJSON;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      corsJSON: 'CorsJSON',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      corsJSON: UpdateGatewayRouteCORSRequestCorsJSON,
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteCORSShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  corsJSONShrink?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      corsJSONShrink: 'CorsJSON',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      corsJSONShrink: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteCORSResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteCORSResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayRouteCORSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayRouteCORSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteHTTPRewriteRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  httpRewriteJSON?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      httpRewriteJSON: 'HttpRewriteJSON',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      httpRewriteJSON: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteHTTPRewriteResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteHTTPRewriteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayRouteHTTPRewriteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayRouteHTTPRewriteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteHeaderOpRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  headerOpJSON?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      headerOpJSON: 'HeaderOpJSON',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      headerOpJSON: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteHeaderOpResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteHeaderOpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayRouteHeaderOpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayRouteHeaderOpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRetryRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  retryJSON?: UpdateGatewayRouteRetryRequestRetryJSON;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      retryJSON: 'RetryJSON',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      retryJSON: UpdateGatewayRouteRetryRequestRetryJSON,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRetryShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  retryJSONShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      retryJSONShrink: 'RetryJSON',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      retryJSONShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRetryResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRetryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayRouteRetryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayRouteRetryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteTimeoutRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  timeoutJSON?: UpdateGatewayRouteTimeoutRequestTimeoutJSON;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      timeoutJSON: 'TimeoutJSON',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      timeoutJSON: UpdateGatewayRouteTimeoutRequestTimeoutJSON,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteTimeoutShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  timeoutJSONShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      timeoutJSONShrink: 'TimeoutJSON',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      timeoutJSONShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteTimeoutResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteTimeoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayRouteTimeoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayRouteTimeoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusRequest extends $tea.Model {
  acceptLanguage?: string;
  enableWaf?: boolean;
  gatewayUniqueId?: string;
  routeId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      enableWaf: 'EnableWaf',
      gatewayUniqueId: 'GatewayUniqueId',
      routeId: 'RouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      enableWaf: 'boolean',
      gatewayUniqueId: 'string',
      routeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBody extends $tea.Model {
  code?: number;
  data?: UpdateGatewayRouteWafStatusResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayRouteWafStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayRouteWafStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceTrafficPolicyRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayTrafficPolicy?: TrafficPolicy;
  gatewayUniqueId?: string;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayTrafficPolicy: 'GatewayTrafficPolicy',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayTrafficPolicy: TrafficPolicy,
      gatewayUniqueId: 'string',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceTrafficPolicyShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayId?: number;
  gatewayTrafficPolicyShrink?: string;
  gatewayUniqueId?: string;
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayTrafficPolicyShrink: 'GatewayTrafficPolicy',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayTrafficPolicyShrink: 'string',
      gatewayUniqueId: 'string',
      serviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceTrafficPolicyResponseBody extends $tea.Model {
  code?: number;
  data?: GatewayService;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: GatewayService,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceTrafficPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayServiceTrafficPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayServiceTrafficPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceVersionRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  serviceId?: number;
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      serviceId: 'number',
      serviceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceVersionResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayServiceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewayServiceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayServiceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewaySpecRequest extends $tea.Model {
  acceptLanguage?: string;
  gatewayUniqueId?: string;
  replica?: number;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      replica: 'Replica',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      replica: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewaySpecResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewaySpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGatewaySpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewaySpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageResponseBody extends $tea.Model {
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageQueueRouteRequest extends $tea.Model {
  acceptLanguage?: string;
  appId?: string;
  appName?: string;
  enable?: boolean;
  filterSide?: string;
  namespace?: string;
  region?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      filterSide: 'FilterSide',
      namespace: 'Namespace',
      region: 'Region',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      filterSide: 'string',
      namespace: 'string',
      region: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageQueueRouteShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  appId?: string;
  appName?: string;
  enable?: boolean;
  filterSide?: string;
  namespace?: string;
  region?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      enable: 'Enable',
      filterSide: 'FilterSide',
      namespace: 'Namespace',
      region: 'Region',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      enable: 'boolean',
      filterSide: 'string',
      namespace: 'string',
      region: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageQueueRouteResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageQueueRouteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMessageQueueRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMessageQueueRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMigrationTaskRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterType?: string;
  id?: string;
  originInstanceAddress?: string;
  originInstanceName?: string;
  originInstanceNamespace?: string;
  projectDesc?: string;
  requestPars?: string;
  targetClusterName?: string;
  targetClusterUrl?: string;
  targetInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterType: 'ClusterType',
      id: 'Id',
      originInstanceAddress: 'OriginInstanceAddress',
      originInstanceName: 'OriginInstanceName',
      originInstanceNamespace: 'OriginInstanceNamespace',
      projectDesc: 'ProjectDesc',
      requestPars: 'RequestPars',
      targetClusterName: 'TargetClusterName',
      targetClusterUrl: 'TargetClusterUrl',
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterType: 'string',
      id: 'string',
      originInstanceAddress: 'string',
      originInstanceName: 'string',
      originInstanceNamespace: 'string',
      projectDesc: 'string',
      requestPars: 'string',
      targetClusterName: 'string',
      targetClusterUrl: 'string',
      targetInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMigrationTaskResponseBody extends $tea.Model {
  data?: UpdateMigrationTaskResponseBodyData;
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateMigrationTaskResponseBodyData,
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMigrationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMigrationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMigrationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosClusterRequest extends $tea.Model {
  acceptLanguage?: string;
  checkPort?: number;
  clusterName?: string;
  groupName?: string;
  healthChecker?: string;
  instanceId?: string;
  namespaceId?: string;
  serviceName?: string;
  useInstancePortForCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      checkPort: 'CheckPort',
      clusterName: 'ClusterName',
      groupName: 'GroupName',
      healthChecker: 'HealthChecker',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      serviceName: 'ServiceName',
      useInstancePortForCheck: 'UseInstancePortForCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      checkPort: 'number',
      clusterName: 'string',
      groupName: 'string',
      healthChecker: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      serviceName: 'string',
      useInstancePortForCheck: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosClusterResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateNacosClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNacosClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  appName?: string;
  betaIps?: string;
  content?: string;
  dataId?: string;
  desc?: string;
  encryptedDataKey?: string;
  group?: string;
  instanceId?: string;
  md5?: string;
  namespaceId?: string;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      betaIps: 'BetaIps',
      content: 'Content',
      dataId: 'DataId',
      desc: 'Desc',
      encryptedDataKey: 'EncryptedDataKey',
      group: 'Group',
      instanceId: 'InstanceId',
      md5: 'Md5',
      namespaceId: 'NamespaceId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      betaIps: 'string',
      content: 'string',
      dataId: 'string',
      desc: 'string',
      encryptedDataKey: 'string',
      group: 'string',
      instanceId: 'string',
      md5: 'string',
      namespaceId: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosConfigResponseBody extends $tea.Model {
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateNacosConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNacosConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosInstanceRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterName?: string;
  enabled?: boolean;
  ephemeral?: boolean;
  groupName?: string;
  instanceId?: string;
  ip?: string;
  metadata?: string;
  namespaceId?: string;
  port?: number;
  serviceName?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterName: 'ClusterName',
      enabled: 'Enabled',
      ephemeral: 'Ephemeral',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ip: 'Ip',
      metadata: 'Metadata',
      namespaceId: 'NamespaceId',
      port: 'Port',
      serviceName: 'ServiceName',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterName: 'string',
      enabled: 'boolean',
      ephemeral: 'boolean',
      groupName: 'string',
      instanceId: 'string',
      ip: 'string',
      metadata: 'string',
      namespaceId: 'string',
      port: 'number',
      serviceName: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosInstanceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateNacosInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNacosInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosServiceRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  groupName?: string;
  instanceId?: string;
  namespaceId?: string;
  protectThreshold?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      protectThreshold: 'ProtectThreshold',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      groupName: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      protectThreshold: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosServiceResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacosServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateNacosServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNacosServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePluginConfigRequest extends $tea.Model {
  acceptLanguage?: string;
  config?: string;
  configLevel?: number;
  enable?: boolean;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  pluginId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      config: 'Config',
      configLevel: 'ConfigLevel',
      enable: 'Enable',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      pluginId: 'PluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      config: 'string',
      configLevel: 'number',
      enable: 'boolean',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      pluginId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePluginConfigResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  dynamicMessage?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePluginConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePluginConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePluginConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSSLCertRequest extends $tea.Model {
  acceptLanguage?: string;
  certIdentifier?: string;
  domainId?: number;
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      certIdentifier: 'CertIdentifier',
      domainId: 'DomainId',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      certIdentifier: 'string',
      domainId: 'number',
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSSLCertResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSSLCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSSLCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSSLCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceRequest extends $tea.Model {
  acceptLanguage?: string;
  address?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  ingressOptionsRequest?: UpdateServiceSourceRequestIngressOptionsRequest;
  name?: string;
  pathList?: string[];
  source?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      ingressOptionsRequest: 'IngressOptionsRequest',
      name: 'Name',
      pathList: 'PathList',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      ingressOptionsRequest: UpdateServiceSourceRequestIngressOptionsRequest,
      name: 'string',
      pathList: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  address?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  id?: number;
  ingressOptionsRequestShrink?: string;
  name?: string;
  pathListShrink?: string;
  source?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      ingressOptionsRequestShrink: 'IngressOptionsRequest',
      name: 'Name',
      pathListShrink: 'PathList',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      ingressOptionsRequestShrink: 'string',
      name: 'string',
      pathListShrink: 'string',
      source: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateServiceSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZnodeRequest extends $tea.Model {
  acceptLanguage?: string;
  clusterId?: string;
  data?: string;
  path?: string;
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterId: 'ClusterId',
      data: 'Data',
      path: 'Path',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterId: 'string',
      data: 'string',
      path: 'string',
      requestPars: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZnodeResponseBody extends $tea.Model {
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZnodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateZnodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateZnodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterRequest extends $tea.Model {
  acceptLanguage?: string;
  instanceId?: string;
  requestPars?: string;
  upgradeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      requestPars: 'RequestPars',
      upgradeVersion: 'UpgradeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      requestPars: 'string',
      upgradeVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponseBody extends $tea.Model {
  errorCode?: string;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayOptionLogConfigDetails extends $tea.Model {
  logEnabled?: boolean;
  logStoreName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logEnabled: 'LogEnabled',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEnabled: 'boolean',
      logStoreName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayOptionTraceDetails extends $tea.Model {
  sample?: number;
  traceEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      sample: 'Sample',
      traceEnabled: 'TraceEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sample: 'number',
      traceEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie extends $tea.Model {
  name?: string;
  path?: string;
  TTL?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
      TTL: 'TTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
      TTL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig extends $tea.Model {
  consistentHashLBType?: string;
  httpCookie?: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBType: 'ConsistentHashLBType',
      httpCookie: 'HttpCookie',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBType: 'string',
      httpCookie: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie,
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicyLoadBalancerSettings extends $tea.Model {
  consistentHashLBConfig?: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig;
  loadbalancerType?: string;
  warmupDuration?: number;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBConfig: 'ConsistentHashLBConfig',
      loadbalancerType: 'LoadbalancerType',
      warmupDuration: 'WarmupDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBConfig: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig,
      loadbalancerType: 'string',
      warmupDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicyTlsSetting extends $tea.Model {
  caCertContent?: string;
  certId?: string;
  sni?: string;
  tlsMode?: string;
  static names(): { [key: string]: string } {
    return {
      caCertContent: 'CaCertContent',
      certId: 'CertId',
      sni: 'Sni',
      tlsMode: 'TlsMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertContent: 'string',
      certId: 'string',
      sni: 'string',
      tlsMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAuthResourceRequestAuthResourceHeaderList extends $tea.Model {
  headerKey?: string;
  headerMethod?: string;
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      headerMethod: 'HeaderMethod',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      headerMethod: 'string',
      headerValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayResponseBodyData extends $tea.Model {
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestDirectResponseJSON extends $tea.Model {
  body?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestFallbackServices extends $tea.Model {
  agreementType?: string;
  groupName?: string;
  name?: string;
  namespace?: string;
  percent?: number;
  serviceId?: number;
  servicePort?: number;
  sourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestPredicatesHeaderPredicates extends $tea.Model {
  key?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestPredicatesPathPredicates extends $tea.Model {
  ignoreCase?: boolean;
  path?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestPredicatesQueryPredicates extends $tea.Model {
  key?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestPredicates extends $tea.Model {
  headerPredicates?: AddGatewayRouteRequestPredicatesHeaderPredicates[];
  methodPredicates?: string[];
  pathPredicates?: AddGatewayRouteRequestPredicatesPathPredicates;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestRedirectJSON extends $tea.Model {
  code?: number;
  host?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapList extends $tea.Model {
  dubboMothedName?: string;
  httpMothed?: string;
  mothedpath?: string;
  paramMapsList?: AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList[];
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
      paramMapsList: { 'type': 'array', 'itemType': AddGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList },
      passThroughAllHeaders: 'string',
      passThroughList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestServicesHttpDubboTranscoder extends $tea.Model {
  dubboServiceGroup?: string;
  dubboServiceName?: string;
  dubboServiceVersion?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayRouteRequestServices extends $tea.Model {
  agreementType?: string;
  groupName?: string;
  httpDubboTranscoder?: AddGatewayRouteRequestServicesHttpDubboTranscoder;
  name?: string;
  namespace?: string;
  percent?: number;
  serviceId?: number;
  servicePort?: number;
  sourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMigrationTaskResponseBodyData extends $tea.Model {
  clusterType?: string;
  id?: string;
  originInstanceAddress?: string;
  originInstanceName?: string;
  originInstanceNamespace?: string;
  projectDesc?: string;
  targetClusterName?: string;
  targetClusterUrl?: string;
  targetInstanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      id: 'Id',
      originInstanceAddress: 'OriginInstanceAddress',
      originInstanceName: 'OriginInstanceName',
      originInstanceNamespace: 'OriginInstanceNamespace',
      projectDesc: 'ProjectDesc',
      targetClusterName: 'TargetClusterName',
      targetClusterUrl: 'TargetClusterUrl',
      targetInstanceId: 'TargetInstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      id: 'string',
      originInstanceAddress: 'string',
      originInstanceName: 'string',
      originInstanceNamespace: 'string',
      projectDesc: 'string',
      targetClusterName: 'string',
      targetClusterUrl: 'string',
      targetInstanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMockRuleResponseBodyData extends $tea.Model {
  accountId?: string;
  consumerAppId?: string;
  consumerAppName?: string;
  enable?: boolean;
  extraJson?: string;
  id?: number;
  mockType?: number;
  name?: string;
  namespaceId?: string;
  providerAppId?: string;
  providerAppName?: string;
  region?: string;
  scMockItemJson?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerAppId: 'ConsumerAppId',
      consumerAppName: 'ConsumerAppName',
      enable: 'Enable',
      extraJson: 'ExtraJson',
      id: 'Id',
      mockType: 'MockType',
      name: 'Name',
      namespaceId: 'NamespaceId',
      providerAppId: 'ProviderAppId',
      providerAppName: 'ProviderAppName',
      region: 'Region',
      scMockItemJson: 'ScMockItemJson',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerAppId: 'string',
      consumerAppName: 'string',
      enable: 'boolean',
      extraJson: 'string',
      id: 'number',
      mockType: 'number',
      name: 'string',
      namespaceId: 'string',
      providerAppId: 'string',
      providerAppName: 'string',
      region: 'string',
      scMockItemJson: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServiceSourceRequestIngressOptionsRequest extends $tea.Model {
  enableIngress?: boolean;
  enableStatus?: boolean;
  ingressClass?: string;
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      enableIngress: 'EnableIngress',
      enableStatus: 'EnableStatus',
      ingressClass: 'IngressClass',
      watchNamespace: 'WatchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIngress: 'boolean',
      enableStatus: 'boolean',
      ingressClass: 'string',
      watchNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyTagPoliciesResponseBodyData extends $tea.Model {
  carryData?: boolean;
  enable?: boolean;
  id?: number;
  instanceNum?: number;
  name?: string;
  rate?: number;
  remove?: boolean;
  rules?: string;
  status?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      carryData: 'CarryData',
      enable: 'Enable',
      id: 'Id',
      instanceNum: 'InstanceNum',
      name: 'Name',
      rate: 'Rate',
      remove: 'Remove',
      rules: 'Rules',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carryData: 'boolean',
      enable: 'boolean',
      id: 'number',
      instanceNum: 'number',
      name: 'string',
      rate: 'number',
      remove: 'boolean',
      rules: 'string',
      status: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponseBodyDataFailData extends $tea.Model {
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponseBodyDataSkipData extends $tea.Model {
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneNacosConfigResponseBodyData extends $tea.Model {
  failData?: CloneNacosConfigResponseBodyDataFailData[];
  skipCount?: number;
  skipData?: CloneNacosConfigResponseBodyDataSkipData[];
  succCount?: number;
  static names(): { [key: string]: string } {
    return {
      failData: 'FailData',
      skipCount: 'SkipCount',
      skipData: 'SkipData',
      succCount: 'SuccCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failData: { 'type': 'array', 'itemType': CloneNacosConfigResponseBodyDataFailData },
      skipCount: 'number',
      skipData: { 'type': 'array', 'itemType': CloneNacosConfigResponseBodyDataSkipData },
      succCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  createTime?: number;
  extraInfo?: string;
  language?: string;
  licenseKey?: string;
  namespace?: string;
  regionId?: string;
  source?: string;
  status?: number;
  updateTime?: number;
  userId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      extraInfo: 'ExtraInfo',
      language: 'Language',
      licenseKey: 'LicenseKey',
      namespace: 'Namespace',
      regionId: 'RegionId',
      source: 'Source',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      createTime: 'number',
      extraInfo: 'string',
      language: 'string',
      licenseKey: 'string',
      namespace: 'string',
      regionId: 'string',
      source: 'string',
      status: 'number',
      updateTime: 'number',
      userId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEngineNamespaceResponseBodyData extends $tea.Model {
  configCount?: number;
  namespace?: string;
  namespaceDesc?: string;
  namespaceShowName?: string;
  quota?: number;
  serviceCount?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      configCount: 'ConfigCount',
      namespace: 'Namespace',
      namespaceDesc: 'NamespaceDesc',
      namespaceShowName: 'NamespaceShowName',
      quota: 'Quota',
      serviceCount: 'ServiceCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCount: 'number',
      namespace: 'string',
      namespaceDesc: 'string',
      namespaceShowName: 'string',
      quota: 'number',
      serviceCount: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMseServiceApplicationResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  createTime?: number;
  extraInfo?: string;
  language?: string;
  licenseKey?: string;
  regionId?: string;
  source?: string;
  status?: number;
  updateTime?: number;
  userId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      extraInfo: 'ExtraInfo',
      language: 'Language',
      licenseKey: 'LicenseKey',
      regionId: 'RegionId',
      source: 'Source',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      createTime: 'number',
      extraInfo: 'string',
      language: 'string',
      licenseKey: 'string',
      regionId: 'string',
      source: 'string',
      status: 'number',
      updateTime: 'number',
      userId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems extends $tea.Model {
  cond?: string;
  datum?: string;
  divisor?: number;
  name?: string;
  nameList?: string[];
  operator?: string;
  rate?: number;
  remainder?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'Cond',
      datum: 'Datum',
      divisor: 'Divisor',
      name: 'Name',
      nameList: 'NameList',
      operator: 'Operator',
      rate: 'Rate',
      remainder: 'Remainder',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      datum: 'string',
      divisor: 'number',
      name: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
      rate: 'number',
      remainder: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneRequestEntryRules extends $tea.Model {
  condition?: string;
  enable?: boolean;
  path?: string;
  paths?: string[];
  priority?: number;
  restItems?: CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      enable: 'Enable',
      path: 'Path',
      paths: 'Paths',
      priority: 'Priority',
      restItems: 'RestItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      enable: 'boolean',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      restItems: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestEntryRulesRestItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions extends $tea.Model {
  cond?: string;
  name?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'Cond',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJson extends $tea.Model {
  conditions?: CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions[];
  gatewayId?: number;
  gatewayUniqueId?: string;
  routeIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      routeIdList: 'RouteIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions },
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      routeIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneShrinkRequestEntryRulesRestItems extends $tea.Model {
  cond?: string;
  datum?: string;
  divisor?: number;
  name?: string;
  nameList?: string[];
  operator?: string;
  rate?: number;
  remainder?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'Cond',
      datum: 'Datum',
      divisor: 'Divisor',
      name: 'Name',
      nameList: 'NameList',
      operator: 'Operator',
      rate: 'Rate',
      remainder: 'Remainder',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      datum: 'string',
      divisor: 'number',
      name: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
      rate: 'number',
      remainder: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneShrinkRequestEntryRules extends $tea.Model {
  condition?: string;
  enable?: boolean;
  path?: string;
  paths?: string[];
  priority?: number;
  restItems?: CreateOrUpdateSwimmingLaneShrinkRequestEntryRulesRestItems[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      enable: 'Enable',
      path: 'Path',
      paths: 'Paths',
      priority: 'Priority',
      restItems: 'RestItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      enable: 'boolean',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      restItems: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneShrinkRequestEntryRulesRestItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneGroupResponseBodyData extends $tea.Model {
  appIds?: string;
  dbGrayEnable?: string;
  enable?: string;
  entryApp?: string;
  id?: number;
  messageQueueFilterSide?: string;
  messageQueueGrayEnable?: boolean;
  name?: string;
  namespace?: string;
  recordCanaryDetail?: boolean;
  region?: string;
  source?: string;
  status?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      dbGrayEnable: 'DbGrayEnable',
      enable: 'Enable',
      entryApp: 'EntryApp',
      id: 'Id',
      messageQueueFilterSide: 'MessageQueueFilterSide',
      messageQueueGrayEnable: 'MessageQueueGrayEnable',
      name: 'Name',
      namespace: 'Namespace',
      recordCanaryDetail: 'RecordCanaryDetail',
      region: 'Region',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      dbGrayEnable: 'string',
      enable: 'string',
      entryApp: 'string',
      id: 'number',
      messageQueueFilterSide: 'string',
      messageQueueGrayEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      recordCanaryDetail: 'boolean',
      region: 'string',
      source: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateZnodeResponseBodyData extends $tea.Model {
  data?: string;
  dir?: boolean;
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dir: 'Dir',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dir: 'boolean',
      name: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthResourceResponseBodyData extends $tea.Model {
  authId?: number;
  domainId?: number;
  domainName?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  isWhite?: boolean;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      domainId: 'DomainId',
      domainName: 'DomainName',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isWhite: 'IsWhite',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'number',
      domainId: 'number',
      domainName: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isWhite: 'boolean',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponseBodyData extends $tea.Model {
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  primaryUser?: string;
  region?: string;
  replica?: number;
  securityGroup?: string;
  spec?: string;
  status?: number;
  vpc?: string;
  vswitch?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      primaryUser: 'PrimaryUser',
      region: 'Region',
      replica: 'Replica',
      securityGroup: 'SecurityGroup',
      spec: 'Spec',
      status: 'Status',
      vpc: 'Vpc',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      primaryUser: 'string',
      region: 'string',
      replica: 'number',
      securityGroup: 'string',
      spec: 'string',
      status: 'number',
      vpc: 'string',
      vswitch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayDomainResponseBodyData extends $tea.Model {
  certIdentifier?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  mustHttps?: boolean;
  name?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mustHttps: 'MustHttps',
      name: 'Name',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mustHttps: 'boolean',
      name: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRouteResponseBodyData extends $tea.Model {
  defaultServiceId?: number;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  predicates?: string;
  routeOrder?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      defaultServiceId: 'DefaultServiceId',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      predicates: 'Predicates',
      routeOrder: 'RouteOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultServiceId: 'number',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      predicates: 'string',
      routeOrder: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayServiceResponseBodyData extends $tea.Model {
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groupName?: string;
  id?: number;
  ips?: string[];
  metaInfo?: string;
  name?: string;
  namespace?: string;
  serviceNameInRegistry?: string;
  sourceId?: number;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      id: 'Id',
      ips: 'Ips',
      metaInfo: 'MetaInfo',
      name: 'Name',
      namespace: 'Namespace',
      serviceNameInRegistry: 'ServiceNameInRegistry',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupName: 'string',
      id: 'number',
      ips: { 'type': 'array', 'itemType': 'string' },
      metaInfo: 'string',
      name: 'string',
      namespace: 'string',
      serviceNameInRegistry: 'string',
      sourceId: 'number',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupRuleResponseBodyData extends $tea.Model {
  description?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  ipProtocol?: string;
  portRange?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteZnodeResponseBodyData extends $tea.Model {
  data?: string;
  dir?: boolean;
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dir: 'Dir',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dir: 'boolean',
      name: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportNacosConfigResponseBodyData extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportZookeeperDataResponseBodyData extends $tea.Model {
  contentMap?: { [key: string]: any };
  createTime?: number;
  exportType?: string;
  extend?: string;
  id?: number;
  instanceId?: string;
  kubeoneTaskIds?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      contentMap: 'ContentMap',
      createTime: 'CreateTime',
      exportType: 'ExportType',
      extend: 'Extend',
      id: 'Id',
      instanceId: 'InstanceId',
      kubeoneTaskIds: 'KubeoneTaskIds',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'number',
      exportType: 'string',
      extend: 'string',
      id: 'number',
      instanceId: 'string',
      kubeoneTaskIds: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLosslessRuleListResponseBodyDataResults extends $tea.Model {
  aligned?: boolean;
  appId?: string;
  appName?: string;
  count?: number;
  delayTime?: number;
  enable?: boolean;
  funcType?: number;
  lossLessDetail?: boolean;
  notice?: boolean;
  related?: boolean;
  shutdownWaitSeconds?: number;
  warmupTime?: number;
  static names(): { [key: string]: string } {
    return {
      aligned: 'Aligned',
      appId: 'AppId',
      appName: 'AppName',
      count: 'Count',
      delayTime: 'DelayTime',
      enable: 'Enable',
      funcType: 'FuncType',
      lossLessDetail: 'LossLessDetail',
      notice: 'Notice',
      related: 'Related',
      shutdownWaitSeconds: 'ShutdownWaitSeconds',
      warmupTime: 'WarmupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aligned: 'boolean',
      appId: 'string',
      appName: 'string',
      count: 'number',
      delayTime: 'number',
      enable: 'boolean',
      funcType: 'number',
      lossLessDetail: 'boolean',
      notice: 'boolean',
      related: 'boolean',
      shutdownWaitSeconds: 'number',
      warmupTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLosslessRuleListResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  results?: FetchLosslessRuleListResponseBodyDataResults[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      results: 'Results',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      results: { 'type': 'array', 'itemType': FetchLosslessRuleListResponseBodyDataResults },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppMessageQueueRouteResponseBodyData extends $tea.Model {
  appId?: string;
  enable?: boolean;
  filterSide?: string;
  region?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enable: 'Enable',
      filterSide: 'FilterSide',
      region: 'Region',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enable: 'boolean',
      filterSide: 'string',
      region: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListResponseBodyDataResult extends $tea.Model {
  appId?: string;
  appName?: string;
  extraInfo?: string;
  instancesNumber?: number;
  language?: string;
  licenseKey?: string;
  namespace?: string;
  regionId?: string;
  source?: string;
  status?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      extraInfo: 'ExtraInfo',
      instancesNumber: 'InstancesNumber',
      language: 'Language',
      licenseKey: 'LicenseKey',
      namespace: 'Namespace',
      regionId: 'RegionId',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      extraInfo: 'string',
      instancesNumber: 'number',
      language: 'string',
      licenseKey: 'string',
      namespace: 'string',
      regionId: 'string',
      source: 'string',
      status: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: GetApplicationListResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': GetApplicationListResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListWithMetircsResponseBodyDataResultCurMetrics extends $tea.Model {
  blockQps?: number;
  expQps?: number;
  passQps?: number;
  qps?: number;
  rt?: number;
  thread?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      blockQps: 'BlockQps',
      expQps: 'ExpQps',
      passQps: 'PassQps',
      qps: 'Qps',
      rt: 'Rt',
      thread: 'Thread',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockQps: 'number',
      expQps: 'number',
      passQps: 'number',
      qps: 'number',
      rt: 'number',
      thread: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListWithMetircsResponseBodyDataResultCurMetricsFm extends $tea.Model {
  blockQps?: number;
  expQps?: number;
  passQps?: number;
  qps?: number;
  rt?: number;
  thread?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      blockQps: 'BlockQps',
      expQps: 'ExpQps',
      passQps: 'PassQps',
      qps: 'Qps',
      rt: 'Rt',
      thread: 'Thread',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockQps: 'number',
      expQps: 'number',
      passQps: 'number',
      qps: 'number',
      rt: 'number',
      thread: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListWithMetircsResponseBodyDataResult extends $tea.Model {
  appId?: string;
  appName?: string;
  curMetrics?: GetApplicationListWithMetircsResponseBodyDataResultCurMetrics[];
  curMetricsFm?: GetApplicationListWithMetircsResponseBodyDataResultCurMetricsFm;
  extraInfo?: string;
  instancesNumber?: number;
  language?: string;
  licenseKey?: string;
  namespace?: string;
  regionId?: string;
  source?: string;
  status?: number;
  tags?: string[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      curMetrics: 'CurMetrics',
      curMetricsFm: 'CurMetricsFm',
      extraInfo: 'ExtraInfo',
      instancesNumber: 'InstancesNumber',
      language: 'Language',
      licenseKey: 'LicenseKey',
      namespace: 'Namespace',
      regionId: 'RegionId',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      curMetrics: { 'type': 'array', 'itemType': GetApplicationListWithMetircsResponseBodyDataResultCurMetrics },
      curMetricsFm: GetApplicationListWithMetircsResponseBodyDataResultCurMetricsFm,
      extraInfo: 'string',
      instancesNumber: 'number',
      language: 'string',
      licenseKey: 'string',
      namespace: 'string',
      regionId: 'string',
      source: 'string',
      status: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationListWithMetircsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: GetApplicationListWithMetircsResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': GetApplicationListWithMetircsResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBlackWhiteListResponseBodyData extends $tea.Model {
  content?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  isWhite?: boolean;
  resourceId?: number;
  resourceType?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isWhite: 'IsWhite',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isWhite: 'boolean',
      resourceId: 'number',
      resourceType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataLogConfigDetails extends $tea.Model {
  logEnabled?: boolean;
  logStoreName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logEnabled: 'LogEnabled',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEnabled: 'boolean',
      logStoreName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataXtraceDetails extends $tea.Model {
  sample?: number;
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      sample: 'Sample',
      traceOn: 'TraceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sample: 'number',
      traceOn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyData extends $tea.Model {
  chargeType?: string;
  endDate?: string;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: string;
  logConfigDetails?: GetGatewayResponseBodyDataLogConfigDetails;
  mseTag?: string;
  name?: string;
  primaryUser?: string;
  region?: string;
  replica?: number;
  resourceGroupId?: string;
  securityGroup?: string;
  spec?: string;
  status?: number;
  statusDesc?: string;
  vpc?: string;
  vswitch?: string;
  vswitch2?: string;
  xtraceDetails?: GetGatewayResponseBodyDataXtraceDetails;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      endDate: 'EndDate',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      logConfigDetails: 'LogConfigDetails',
      mseTag: 'MseTag',
      name: 'Name',
      primaryUser: 'PrimaryUser',
      region: 'Region',
      replica: 'Replica',
      resourceGroupId: 'ResourceGroupId',
      securityGroup: 'SecurityGroup',
      spec: 'Spec',
      status: 'Status',
      statusDesc: 'StatusDesc',
      vpc: 'Vpc',
      vswitch: 'Vswitch',
      vswitch2: 'Vswitch2',
      xtraceDetails: 'XtraceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      endDate: 'string',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      logConfigDetails: GetGatewayResponseBodyDataLogConfigDetails,
      mseTag: 'string',
      name: 'string',
      primaryUser: 'string',
      region: 'string',
      replica: 'number',
      resourceGroupId: 'string',
      securityGroup: 'string',
      spec: 'string',
      status: 'number',
      statusDesc: 'string',
      vpc: 'string',
      vswitch: 'string',
      vswitch2: 'string',
      xtraceDetails: GetGatewayResponseBodyDataXtraceDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthConsumerDetailResponseBodyDataResourceList extends $tea.Model {
  consumerId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  resourceStatus?: boolean;
  routeId?: number;
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      resourceStatus: 'ResourceStatus',
      routeId: 'RouteId',
      routeName: 'RouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      resourceStatus: 'boolean',
      routeId: 'number',
      routeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthConsumerDetailResponseBodyData extends $tea.Model {
  consumerStatus?: boolean;
  description?: string;
  encodeType?: string;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  jwks?: string;
  keyName?: string;
  keyValue?: string;
  name?: string;
  primaryUser?: string;
  resourceList?: GetGatewayAuthConsumerDetailResponseBodyDataResourceList[];
  tokenName?: string;
  tokenPass?: boolean;
  tokenPosition?: string;
  tokenPrefix?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consumerStatus: 'ConsumerStatus',
      description: 'Description',
      encodeType: 'EncodeType',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      jwks: 'Jwks',
      keyName: 'KeyName',
      keyValue: 'KeyValue',
      name: 'Name',
      primaryUser: 'PrimaryUser',
      resourceList: 'ResourceList',
      tokenName: 'TokenName',
      tokenPass: 'TokenPass',
      tokenPosition: 'TokenPosition',
      tokenPrefix: 'TokenPrefix',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerStatus: 'boolean',
      description: 'string',
      encodeType: 'string',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      jwks: 'string',
      keyName: 'string',
      keyValue: 'string',
      name: 'string',
      primaryUser: 'string',
      resourceList: { 'type': 'array', 'itemType': GetGatewayAuthConsumerDetailResponseBodyDataResourceList },
      tokenName: 'string',
      tokenPass: 'boolean',
      tokenPosition: 'string',
      tokenPrefix: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayDomainDetailResponseBodyData extends $tea.Model {
  afterDate?: number;
  algorithm?: string;
  beforeDate?: number;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtAfter?: string;
  gmtBefore?: string;
  gmtCreate?: string;
  gmtModified?: string;
  http2?: string;
  id?: number;
  issuer?: string;
  mustHttps?: boolean;
  name?: string;
  protocol?: string;
  sans?: string;
  tlsMax?: string;
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtAfter: 'GmtAfter',
      gmtBefore: 'GmtBefore',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      http2: 'Http2',
      id: 'Id',
      issuer: 'Issuer',
      mustHttps: 'MustHttps',
      name: 'Name',
      protocol: 'Protocol',
      sans: 'Sans',
      tlsMax: 'TlsMax',
      tlsMin: 'TlsMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtAfter: 'string',
      gmtBefore: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      http2: 'string',
      id: 'number',
      issuer: 'string',
      mustHttps: 'boolean',
      name: 'string',
      protocol: 'string',
      sans: 'string',
      tlsMax: 'string',
      tlsMin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataCors extends $tea.Model {
  allowCredentials?: boolean;
  allowHeaders?: string;
  allowMethods?: string;
  allowOrigins?: string;
  exposeHeaders?: string;
  status?: string;
  timeUnit?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataDirectResponse extends $tea.Model {
  body?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataFallbackServices extends $tea.Model {
  agreementType?: string;
  groupName?: string;
  name?: string;
  namespace?: string;
  percent?: number;
  serviceId?: number;
  serviceName?: string;
  servicePort?: number;
  sourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataHTTPRewrite extends $tea.Model {
  host?: string;
  path?: string;
  pathType?: string;
  pattern?: string;
  status?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems extends $tea.Model {
  directionType?: string;
  key?: string;
  opType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataHeaderOp extends $tea.Model {
  headerOpItems?: GetGatewayRouteDetailResponseBodyDataHeaderOpHeaderOpItems[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataRedirect extends $tea.Model {
  code?: number;
  host?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataRetry extends $tea.Model {
  attempts?: number;
  httpCodes?: string[];
  retryOn?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates extends $tea.Model {
  key?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates extends $tea.Model {
  ignoreCase?: boolean;
  path?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataRoutePredicatesQueryPredicates extends $tea.Model {
  key?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataRoutePredicates extends $tea.Model {
  headerPredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicatesHeaderPredicates[];
  methodPredicates?: string[];
  pathPredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicatesPathPredicates;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataRouteServices extends $tea.Model {
  agreementType?: string;
  groupName?: string;
  name?: string;
  namespace?: string;
  percent?: number;
  serviceId?: number;
  serviceName?: string;
  servicePort?: number;
  sourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyDataTimeout extends $tea.Model {
  status?: string;
  timeUnit?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayRouteDetailResponseBodyData extends $tea.Model {
  ahasStatus?: number;
  cors?: GetGatewayRouteDetailResponseBodyDataCors;
  defaultServiceId?: number;
  defaultServiceName?: string;
  destinationType?: string;
  directResponse?: GetGatewayRouteDetailResponseBodyDataDirectResponse;
  domainId?: number;
  domainIdList?: number[];
  domainName?: string;
  domainNameList?: string[];
  enableWaf?: boolean;
  fallback?: boolean;
  fallbackServices?: GetGatewayRouteDetailResponseBodyDataFallbackServices[];
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  HTTPRewrite?: GetGatewayRouteDetailResponseBodyDataHTTPRewrite;
  headerOp?: GetGatewayRouteDetailResponseBodyDataHeaderOp;
  id?: number;
  name?: string;
  policies?: string;
  predicates?: string;
  redirect?: GetGatewayRouteDetailResponseBodyDataRedirect;
  retry?: GetGatewayRouteDetailResponseBodyDataRetry;
  routeOrder?: number;
  routePredicates?: GetGatewayRouteDetailResponseBodyDataRoutePredicates;
  routeServices?: GetGatewayRouteDetailResponseBodyDataRouteServices[];
  services?: string;
  status?: number;
  timeout?: GetGatewayRouteDetailResponseBodyDataTimeout;
  static names(): { [key: string]: string } {
    return {
      ahasStatus: 'AhasStatus',
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
      fallback: 'Fallback',
      fallbackServices: 'FallbackServices',
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
      destinationType: 'string',
      directResponse: GetGatewayRouteDetailResponseBodyDataDirectResponse,
      domainId: 'number',
      domainIdList: { 'type': 'array', 'itemType': 'number' },
      domainName: 'string',
      domainNameList: { 'type': 'array', 'itemType': 'string' },
      enableWaf: 'boolean',
      fallback: 'boolean',
      fallbackServices: { 'type': 'array', 'itemType': GetGatewayRouteDetailResponseBodyDataFallbackServices },
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyDataLabelDetails extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyDataPortTrafficPolicyList extends $tea.Model {
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  serviceId?: number;
  servicePort?: number;
  trafficPolicy?: TrafficPolicy;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      serviceId: 'ServiceId',
      servicePort: 'ServicePort',
      trafficPolicy: 'TrafficPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      serviceId: 'number',
      servicePort: 'number',
      trafficPolicy: TrafficPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersionLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion extends $tea.Model {
  labels?: GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersionLabels[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersionLabels },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyDataVersionDetails extends $tea.Model {
  endpointNum?: number;
  endpointNumPercent?: string;
  serviceVersion?: GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion;
  static names(): { [key: string]: string } {
    return {
      endpointNum: 'EndpointNum',
      endpointNumPercent: 'EndpointNumPercent',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointNum: 'number',
      endpointNumPercent: 'string',
      serviceVersion: GetGatewayServiceDetailResponseBodyDataVersionDetailsServiceVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyDataVersions extends $tea.Model {
  label?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayServiceDetailResponseBodyData extends $tea.Model {
  gatewayId?: number;
  gatewayTrafficPolicy?: TrafficPolicy;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groupName?: string;
  healthCheck?: string;
  healthStatus?: string;
  id?: number;
  ips?: string[];
  labelDetails?: GetGatewayServiceDetailResponseBodyDataLabelDetails[];
  metaInfo?: string;
  name?: string;
  namespace?: string;
  portTrafficPolicyList?: GetGatewayServiceDetailResponseBodyDataPortTrafficPolicyList[];
  ports?: number[];
  serviceNameInRegistry?: string;
  serviceProtocol?: string;
  sourceId?: number;
  sourceType?: string;
  versionDetails?: GetGatewayServiceDetailResponseBodyDataVersionDetails[];
  versions?: GetGatewayServiceDetailResponseBodyDataVersions[];
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayTrafficPolicy: 'GatewayTrafficPolicy',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      healthCheck: 'HealthCheck',
      healthStatus: 'HealthStatus',
      id: 'Id',
      ips: 'Ips',
      labelDetails: 'LabelDetails',
      metaInfo: 'MetaInfo',
      name: 'Name',
      namespace: 'Namespace',
      portTrafficPolicyList: 'PortTrafficPolicyList',
      ports: 'Ports',
      serviceNameInRegistry: 'ServiceNameInRegistry',
      serviceProtocol: 'ServiceProtocol',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      versionDetails: 'VersionDetails',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'number',
      gatewayTrafficPolicy: TrafficPolicy,
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupName: 'string',
      healthCheck: 'string',
      healthStatus: 'string',
      id: 'number',
      ips: { 'type': 'array', 'itemType': 'string' },
      labelDetails: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataLabelDetails },
      metaInfo: 'string',
      name: 'string',
      namespace: 'string',
      portTrafficPolicyList: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataPortTrafficPolicyList },
      ports: { 'type': 'array', 'itemType': 'number' },
      serviceNameInRegistry: 'string',
      serviceProtocol: 'string',
      sourceId: 'number',
      sourceType: 'string',
      versionDetails: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataVersionDetails },
      versions: { 'type': 'array', 'itemType': GetGatewayServiceDetailResponseBodyDataVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceKubernetesClusterResponseBodyDataNamespaces extends $tea.Model {
  name?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceKubernetesClusterResponseBodyData extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  k8sVersion?: string;
  namespaceInfos?: string;
  namespaces?: GetGovernanceKubernetesClusterResponseBodyDataNamespaces[];
  pilotStartTime?: string;
  region?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      k8sVersion: 'K8sVersion',
      namespaceInfos: 'NamespaceInfos',
      namespaces: 'Namespaces',
      pilotStartTime: 'PilotStartTime',
      region: 'Region',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      k8sVersion: 'string',
      namespaceInfos: 'string',
      namespaces: { 'type': 'array', 'itemType': GetGovernanceKubernetesClusterResponseBodyDataNamespaces },
      pilotStartTime: 'string',
      region: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyData extends $tea.Model {
  currentVersionFullShowName?: string;
  maxVersionChangelogUrl?: string;
  maxVersionCode?: string;
  maxVersionFullShowName?: string;
  static names(): { [key: string]: string } {
    return {
      currentVersionFullShowName: 'CurrentVersionFullShowName',
      maxVersionChangelogUrl: 'MaxVersionChangelogUrl',
      maxVersionCode: 'MaxVersionCode',
      maxVersionFullShowName: 'MaxVersionFullShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersionFullShowName: 'string',
      maxVersionChangelogUrl: 'string',
      maxVersionCode: 'string',
      maxVersionFullShowName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImportFileUrlResponseBodyData extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKubernetesSourceResponseBodyData extends $tea.Model {
  cluster?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMseSourceResponseBodyData extends $tea.Model {
  address?: string;
  clusterId?: string;
  instanceId?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clusterId: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosConfigResponseBodyConfiguration extends $tea.Model {
  appName?: string;
  betaIps?: string;
  content?: string;
  dataId?: string;
  desc?: string;
  encryptedDataKey?: string;
  group?: string;
  md5?: string;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      betaIps: 'BetaIps',
      content: 'Content',
      dataId: 'DataId',
      desc: 'Desc',
      encryptedDataKey: 'EncryptedDataKey',
      group: 'Group',
      md5: 'Md5',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      betaIps: 'string',
      content: 'string',
      dataId: 'string',
      desc: 'string',
      encryptedDataKey: 'string',
      group: 'string',
      md5: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNacosHistoryConfigResponseBodyConfiguration extends $tea.Model {
  appName?: string;
  content?: string;
  dataId?: string;
  encryptedDataKey?: string;
  group?: string;
  md5?: string;
  opType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      content: 'Content',
      dataId: 'DataId',
      encryptedDataKey: 'EncryptedDataKey',
      group: 'Group',
      md5: 'Md5',
      opType: 'OpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      content: 'string',
      dataId: 'string',
      encryptedDataKey: 'string',
      group: 'string',
      md5: 'string',
      opType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginConfigResponseBodyDataGatewayConfigList extends $tea.Model {
  config?: string;
  configLevel?: number;
  enable?: boolean;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  pluginId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configLevel: 'ConfigLevel',
      enable: 'Enable',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      pluginId: 'PluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configLevel: 'number',
      enable: 'boolean',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      pluginId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginConfigResponseBodyData extends $tea.Model {
  category?: number;
  configCheck?: string;
  gatewayConfigList?: GetPluginConfigResponseBodyDataGatewayConfigList[];
  id?: number;
  imageName?: string;
  mode?: number;
  name?: string;
  phase?: number;
  primaryUser?: string;
  priority?: number;
  publishState?: number;
  readme?: string;
  readmeEn?: string;
  status?: string;
  summary?: string;
  type?: number;
  version?: string;
  versionJson?: string;
  wasmLang?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      configCheck: 'ConfigCheck',
      gatewayConfigList: 'GatewayConfigList',
      id: 'Id',
      imageName: 'ImageName',
      mode: 'Mode',
      name: 'Name',
      phase: 'Phase',
      primaryUser: 'PrimaryUser',
      priority: 'Priority',
      publishState: 'PublishState',
      readme: 'Readme',
      readmeEn: 'ReadmeEn',
      status: 'Status',
      summary: 'Summary',
      type: 'Type',
      version: 'Version',
      versionJson: 'VersionJson',
      wasmLang: 'WasmLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      configCheck: 'string',
      gatewayConfigList: { 'type': 'array', 'itemType': GetPluginConfigResponseBodyDataGatewayConfigList },
      id: 'number',
      imageName: 'string',
      mode: 'number',
      name: 'string',
      phase: 'number',
      primaryUser: 'string',
      priority: 'number',
      publishState: 'number',
      readme: 'string',
      readmeEn: 'string',
      status: 'string',
      summary: 'string',
      type: 'number',
      version: 'string',
      versionJson: 'string',
      wasmLang: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginsResponseBodyData extends $tea.Model {
  category?: number;
  configCheck?: string;
  id?: number;
  maxVersion?: string;
  mode?: number;
  name?: string;
  newVersionPublishingFlag?: boolean;
  phase?: number;
  primaryUser?: string;
  priority?: number;
  publishState?: number;
  status?: string;
  summary?: string;
  version?: string;
  wasmFile?: string;
  wasmLang?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      configCheck: 'ConfigCheck',
      id: 'Id',
      maxVersion: 'MaxVersion',
      mode: 'Mode',
      name: 'Name',
      newVersionPublishingFlag: 'NewVersionPublishingFlag',
      phase: 'Phase',
      primaryUser: 'PrimaryUser',
      priority: 'Priority',
      publishState: 'PublishState',
      status: 'Status',
      summary: 'Summary',
      version: 'Version',
      wasmFile: 'WasmFile',
      wasmLang: 'WasmLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      configCheck: 'string',
      id: 'number',
      maxVersion: 'string',
      mode: 'number',
      name: 'string',
      newVersionPublishingFlag: 'boolean',
      phase: 'number',
      primaryUser: 'string',
      priority: 'number',
      publishState: 'number',
      status: 'string',
      summary: 'string',
      version: 'string',
      wasmFile: 'string',
      wasmLang: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListResponseBodyDataMethods extends $tea.Model {
  methodController?: string;
  name?: string;
  parameterTypes?: string[];
  paths?: string[];
  requestMethods?: string[];
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      methodController: 'MethodController',
      name: 'Name',
      parameterTypes: 'ParameterTypes',
      paths: 'Paths',
      requestMethods: 'RequestMethods',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodController: 'string',
      name: 'string',
      parameterTypes: { 'type': 'array', 'itemType': 'string' },
      paths: { 'type': 'array', 'itemType': 'string' },
      requestMethods: { 'type': 'array', 'itemType': 'string' },
      returnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListResponseBodyData extends $tea.Model {
  dubboApplicationName?: string;
  edasAppName?: string;
  group?: string;
  metadata?: { [key: string]: any };
  methods?: GetServiceListResponseBodyDataMethods[];
  registryType?: string;
  serviceName?: string;
  serviceType?: string;
  springApplicationName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dubboApplicationName: 'DubboApplicationName',
      edasAppName: 'EdasAppName',
      group: 'Group',
      metadata: 'Metadata',
      methods: 'Methods',
      registryType: 'RegistryType',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      springApplicationName: 'SpringApplicationName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboApplicationName: 'string',
      edasAppName: 'string',
      group: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      methods: { 'type': 'array', 'itemType': GetServiceListResponseBodyDataMethods },
      registryType: 'string',
      serviceName: 'string',
      serviceType: 'string',
      springApplicationName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListenersResponseBodyData extends $tea.Model {
  addr?: string;
  agent?: string;
  app?: string;
  cluster?: string;
  IP?: string;
  namespaceId?: string;
  port?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      agent: 'Agent',
      app: 'App',
      cluster: 'Cluster',
      IP: 'IP',
      namespaceId: 'NamespaceId',
      port: 'Port',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      agent: 'string',
      app: 'string',
      cluster: 'string',
      IP: 'string',
      namespaceId: 'string',
      port: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetZookeeperDataImportUrlResponseBodyData extends $tea.Model {
  maxSize?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'MaxSize',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigResponseBodyDataFailData extends $tea.Model {
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigResponseBodyDataSkipData extends $tea.Model {
  dataId?: string;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNacosConfigResponseBodyData extends $tea.Model {
  failData?: ImportNacosConfigResponseBodyDataFailData[];
  skipCount?: number;
  skipData?: ImportNacosConfigResponseBodyDataSkipData[];
  succCount?: number;
  static names(): { [key: string]: string } {
    return {
      failData: 'FailData',
      skipCount: 'SkipCount',
      skipData: 'SkipData',
      succCount: 'SuccCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failData: { 'type': 'array', 'itemType': ImportNacosConfigResponseBodyDataFailData },
      skipCount: 'number',
      skipData: { 'type': 'array', 'itemType': ImportNacosConfigResponseBodyDataSkipData },
      succCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportServicesRequestServiceList extends $tea.Model {
  groupName?: string;
  ips?: string[];
  name?: string;
  namespace?: string;
  servicePort?: number;
  serviceProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      ips: 'Ips',
      name: 'Name',
      namespace: 'Namespace',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      namespace: 'string',
      servicePort: 'number',
      serviceProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsInstancesResponseBodyData extends $tea.Model {
  app?: string;
  clusterName?: string;
  datumKey?: string;
  defaultKey?: string;
  enabled?: boolean;
  ephemeral?: boolean;
  failCount?: number;
  healthy?: boolean;
  instanceHeartBeatInterval?: number;
  instanceHeartBeatTimeOut?: number;
  instanceId?: string;
  ip?: string;
  ipDeleteTimeout?: number;
  lastBeat?: number;
  marked?: boolean;
  metadata?: { [key: string]: any };
  okCount?: number;
  port?: number;
  serviceName?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      clusterName: 'ClusterName',
      datumKey: 'DatumKey',
      defaultKey: 'DefaultKey',
      enabled: 'Enabled',
      ephemeral: 'Ephemeral',
      failCount: 'FailCount',
      healthy: 'Healthy',
      instanceHeartBeatInterval: 'InstanceHeartBeatInterval',
      instanceHeartBeatTimeOut: 'InstanceHeartBeatTimeOut',
      instanceId: 'InstanceId',
      ip: 'Ip',
      ipDeleteTimeout: 'IpDeleteTimeout',
      lastBeat: 'LastBeat',
      marked: 'Marked',
      metadata: 'Metadata',
      okCount: 'OkCount',
      port: 'Port',
      serviceName: 'ServiceName',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      clusterName: 'string',
      datumKey: 'string',
      defaultKey: 'string',
      enabled: 'boolean',
      ephemeral: 'boolean',
      failCount: 'number',
      healthy: 'boolean',
      instanceHeartBeatInterval: 'number',
      instanceHeartBeatTimeOut: 'number',
      instanceId: 'string',
      ip: 'string',
      ipDeleteTimeout: 'number',
      lastBeat: 'number',
      marked: 'boolean',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      okCount: 'number',
      port: 'number',
      serviceName: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponseBodyDataClusters extends $tea.Model {
  defaultCheckPort?: number;
  defaultPort?: number;
  healthCheckerType?: string;
  metadata?: { [key: string]: any };
  name?: string;
  serviceName?: string;
  useIPPort4Check?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultCheckPort: 'DefaultCheckPort',
      defaultPort: 'DefaultPort',
      healthCheckerType: 'HealthCheckerType',
      metadata: 'Metadata',
      name: 'Name',
      serviceName: 'ServiceName',
      useIPPort4Check: 'UseIPPort4Check',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCheckPort: 'number',
      defaultPort: 'number',
      healthCheckerType: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      serviceName: 'string',
      useIPPort4Check: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServiceClustersResponseBodyData extends $tea.Model {
  clusters?: ListAnsServiceClustersResponseBodyDataClusters[];
  ephemeral?: boolean;
  groupName?: string;
  metadata?: { [key: string]: any };
  name?: string;
  protectThreshold?: number;
  selectorType?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      ephemeral: 'Ephemeral',
      groupName: 'GroupName',
      metadata: 'Metadata',
      name: 'Name',
      protectThreshold: 'ProtectThreshold',
      selectorType: 'SelectorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': ListAnsServiceClustersResponseBodyDataClusters },
      ephemeral: 'boolean',
      groupName: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      protectThreshold: 'number',
      selectorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnsServicesResponseBodyData extends $tea.Model {
  clusterCount?: number;
  groupName?: string;
  healthyInstanceCount?: number;
  ipCount?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCount: 'ClusterCount',
      groupName: 'GroupName',
      healthyInstanceCount: 'HealthyInstanceCount',
      ipCount: 'IpCount',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCount: 'number',
      groupName: 'string',
      healthyInstanceCount: 'number',
      ipCount: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRules extends $tea.Model {
  carryData?: boolean;
  enable?: boolean;
  gmtModified?: string;
  id?: number;
  instanceNum?: number;
  name?: string;
  rate?: number;
  remove?: boolean;
  rules?: string;
  status?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      carryData: 'CarryData',
      enable: 'Enable',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceNum: 'InstanceNum',
      name: 'Name',
      rate: 'Rate',
      remove: 'Remove',
      rules: 'Rules',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carryData: 'boolean',
      enable: 'boolean',
      gmtModified: 'string',
      id: 'number',
      instanceNum: 'number',
      name: 'string',
      rate: 'number',
      remove: 'boolean',
      rules: 'string',
      status: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesResponseBodyDataResult extends $tea.Model {
  appId?: string;
  appName?: string;
  namespace?: string;
  routeRules?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRules[];
  routeStatus?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      namespace: 'Namespace',
      routeRules: 'RouteRules',
      routeStatus: 'RouteStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      namespace: 'string',
      routeRules: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRules },
      routeStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsWithTagRulesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: ListApplicationsWithTagRulesResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterConnectionTypesResponseBodyData extends $tea.Model {
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHealthCheckTaskResponseBodyDataResultRiskList extends $tea.Model {
  description?: string;
  id?: number;
  module?: string;
  mute?: boolean;
  noticeFeature?: boolean;
  primaryUser?: string;
  riskCode?: string;
  riskLevel?: string;
  riskName?: string;
  riskType?: string;
  situation?: string;
  suggestion?: string;
  taskId?: number;
  type?: number;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      module: 'Module',
      mute: 'Mute',
      noticeFeature: 'NoticeFeature',
      primaryUser: 'PrimaryUser',
      riskCode: 'RiskCode',
      riskLevel: 'RiskLevel',
      riskName: 'RiskName',
      riskType: 'RiskType',
      situation: 'Situation',
      suggestion: 'Suggestion',
      taskId: 'TaskId',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      module: 'string',
      mute: 'boolean',
      noticeFeature: 'boolean',
      primaryUser: 'string',
      riskCode: 'string',
      riskLevel: 'string',
      riskName: 'string',
      riskType: 'string',
      situation: 'string',
      suggestion: 'string',
      taskId: 'number',
      type: 'number',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHealthCheckTaskResponseBodyDataResult extends $tea.Model {
  appVersion?: string;
  chargeType?: string;
  clusterType?: string;
  createTime?: string;
  id?: number;
  imageVersion?: string;
  instanceId?: string;
  primaryUser?: string;
  replica?: string;
  riskList?: ListClusterHealthCheckTaskResponseBodyDataResultRiskList[];
  score?: number;
  spec?: string;
  status?: string;
  totalItem?: number;
  totalRisk?: number;
  type?: string;
  updateTime?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      chargeType: 'ChargeType',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      id: 'Id',
      imageVersion: 'ImageVersion',
      instanceId: 'InstanceId',
      primaryUser: 'PrimaryUser',
      replica: 'Replica',
      riskList: 'RiskList',
      score: 'Score',
      spec: 'Spec',
      status: 'Status',
      totalItem: 'TotalItem',
      totalRisk: 'TotalRisk',
      type: 'Type',
      updateTime: 'UpdateTime',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      chargeType: 'string',
      clusterType: 'string',
      createTime: 'string',
      id: 'number',
      imageVersion: 'string',
      instanceId: 'string',
      primaryUser: 'string',
      replica: 'string',
      riskList: { 'type': 'array', 'itemType': ListClusterHealthCheckTaskResponseBodyDataResultRiskList },
      score: 'number',
      spec: 'string',
      status: 'string',
      totalItem: 'number',
      totalRisk: 'number',
      type: 'string',
      updateTime: 'string',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHealthCheckTaskResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: ListClusterHealthCheckTaskResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': ListClusterHealthCheckTaskResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypesResponseBodyData extends $tea.Model {
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterVersionsResponseBodyData extends $tea.Model {
  clusterType?: string;
  code?: string;
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      code: 'Code',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      code: 'string',
      showName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyData extends $tea.Model {
  appVersion?: string;
  canUpdate?: boolean;
  chargeType?: string;
  clusterAliasName?: string;
  clusterName?: string;
  clusterType?: string;
  createTime?: string;
  endDate?: string;
  initStatus?: string;
  instanceCount?: number;
  instanceId?: string;
  internetAddress?: string;
  internetDomain?: string;
  intranetAddress?: string;
  intranetDomain?: string;
  mseVersion?: string;
  resourceGroupId?: string;
  tags?: { [key: string]: any };
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      canUpdate: 'CanUpdate',
      chargeType: 'ChargeType',
      clusterAliasName: 'ClusterAliasName',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      endDate: 'EndDate',
      initStatus: 'InitStatus',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      internetAddress: 'InternetAddress',
      internetDomain: 'InternetDomain',
      intranetAddress: 'IntranetAddress',
      intranetDomain: 'IntranetDomain',
      mseVersion: 'MseVersion',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      canUpdate: 'boolean',
      chargeType: 'string',
      clusterAliasName: 'string',
      clusterName: 'string',
      clusterType: 'string',
      createTime: 'string',
      endDate: 'string',
      initStatus: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      internetAddress: 'string',
      internetDomain: 'string',
      intranetAddress: 'string',
      intranetDomain: 'string',
      mseVersion: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigTrackResponseBodyTraces extends $tea.Model {
  client?: boolean;
  dataId?: string;
  delay?: string;
  event?: string;
  group?: string;
  logDate?: string;
  md5?: string;
  push?: boolean;
  requestIp?: string;
  responseIp?: string;
  result?: string;
  ts?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
      dataId: 'DataId',
      delay: 'Delay',
      event: 'Event',
      group: 'Group',
      logDate: 'LogDate',
      md5: 'Md5',
      push: 'Push',
      requestIp: 'RequestIp',
      responseIp: 'ResponseIp',
      result: 'Result',
      ts: 'Ts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: 'boolean',
      dataId: 'string',
      delay: 'string',
      event: 'string',
      group: 'string',
      logDate: 'string',
      md5: 'string',
      push: 'boolean',
      requestIp: 'string',
      responseIp: 'string',
      result: 'string',
      ts: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineNamespacesResponseBodyData extends $tea.Model {
  configCount?: number;
  namespace?: string;
  namespaceDesc?: string;
  namespaceShowName?: string;
  quota?: number;
  serviceCount?: string;
  sourceType?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      configCount: 'ConfigCount',
      namespace: 'Namespace',
      namespaceDesc: 'NamespaceDesc',
      namespaceShowName: 'NamespaceShowName',
      quota: 'Quota',
      serviceCount: 'ServiceCount',
      sourceType: 'SourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCount: 'number',
      namespace: 'string',
      namespaceDesc: 'string',
      namespaceShowName: 'string',
      quota: 'number',
      serviceCount: 'string',
      sourceType: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaInstancesResponseBodyData extends $tea.Model {
  app?: string;
  durationInSecs?: number;
  homePageUrl?: string;
  hostName?: string;
  instanceId?: string;
  ipAddr?: string;
  lastDirtyTimestamp?: number;
  lastUpdatedTimestamp?: number;
  metadata?: { [key: string]: any };
  port?: number;
  renewalIntervalInSecs?: number;
  securePort?: number;
  status?: string;
  vipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      durationInSecs: 'DurationInSecs',
      homePageUrl: 'HomePageUrl',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      lastDirtyTimestamp: 'LastDirtyTimestamp',
      lastUpdatedTimestamp: 'LastUpdatedTimestamp',
      metadata: 'Metadata',
      port: 'Port',
      renewalIntervalInSecs: 'RenewalIntervalInSecs',
      securePort: 'SecurePort',
      status: 'Status',
      vipAddress: 'VipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      durationInSecs: 'number',
      homePageUrl: 'string',
      hostName: 'string',
      instanceId: 'string',
      ipAddr: 'string',
      lastDirtyTimestamp: 'number',
      lastUpdatedTimestamp: 'number',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      port: 'number',
      renewalIntervalInSecs: 'number',
      securePort: 'number',
      status: 'string',
      vipAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEurekaServicesResponseBodyData extends $tea.Model {
  instancesId?: string[];
  name?: string;
  upStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instancesId: 'InstancesId',
      name: 'Name',
      upStatus: 'UpStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancesId: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      upStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExportZookeeperDataResponseBodyData extends $tea.Model {
  contentMap?: string;
  createTime?: number;
  exportType?: string;
  extend?: string;
  id?: number;
  instanceId?: string;
  kubeoneTaskIds?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      contentMap: 'ContentMap',
      createTime: 'CreateTime',
      exportType: 'ExportType',
      extend: 'Extend',
      id: 'Id',
      instanceId: 'InstanceId',
      kubeoneTaskIds: 'KubeoneTaskIds',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMap: 'string',
      createTime: 'number',
      exportType: 'string',
      extend: 'string',
      id: 'number',
      instanceId: 'string',
      kubeoneTaskIds: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRequestFilterParams extends $tea.Model {
  gatewayType?: string;
  gatewayUniqueId?: string;
  instanceId?: string;
  mseTag?: string;
  name?: string;
  resourceGroupId?: string;
  vpc?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayType: 'GatewayType',
      gatewayUniqueId: 'GatewayUniqueId',
      instanceId: 'InstanceId',
      mseTag: 'MseTag',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayType: 'string',
      gatewayUniqueId: 'string',
      instanceId: 'string',
      mseTag: 'string',
      name: 'string',
      resourceGroupId: 'string',
      vpc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResultInitConfig extends $tea.Model {
  enableWaf?: boolean;
  supportWaf?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableWaf: 'EnableWaf',
      supportWaf: 'SupportWaf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWaf: 'boolean',
      supportWaf: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResultInternetSlb extends $tea.Model {
  gatewaySlbMode?: string;
  gatewaySlbStatus?: string;
  internetNetworkFlow?: string;
  slbId?: string;
  slbIp?: string;
  slbPort?: string;
  slbSpec?: string;
  statusDesc?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gatewaySlbMode: 'GatewaySlbMode',
      gatewaySlbStatus: 'GatewaySlbStatus',
      internetNetworkFlow: 'InternetNetworkFlow',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbPort: 'SlbPort',
      slbSpec: 'SlbSpec',
      statusDesc: 'StatusDesc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewaySlbMode: 'string',
      gatewaySlbStatus: 'string',
      internetNetworkFlow: 'string',
      slbId: 'string',
      slbIp: 'string',
      slbPort: 'string',
      slbSpec: 'string',
      statusDesc: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResultSlb extends $tea.Model {
  gatewaySlbMode?: string;
  gatewaySlbStatus?: string;
  slbId?: string;
  slbIp?: string;
  slbPort?: string;
  slbSpec?: string;
  statusDesc?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gatewaySlbMode: 'GatewaySlbMode',
      gatewaySlbStatus: 'GatewaySlbStatus',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbPort: 'SlbPort',
      slbSpec: 'SlbSpec',
      statusDesc: 'StatusDesc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewaySlbMode: 'string',
      gatewaySlbStatus: 'string',
      slbId: 'string',
      slbIp: 'string',
      slbPort: 'string',
      slbSpec: 'string',
      statusDesc: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyDataResult extends $tea.Model {
  ahasOn?: boolean;
  appVersion?: string;
  armsOn?: boolean;
  chargeType?: string;
  currentVersion?: string;
  endDate?: string;
  gatewayType?: string;
  gatewayUniqueId?: string;
  gatewayVersion?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  initConfig?: ListGatewayResponseBodyDataResultInitConfig;
  instanceId?: string;
  internetSlb?: ListGatewayResponseBodyDataResultInternetSlb[];
  latestVersion?: string;
  mseTag?: string;
  mustUpgrade?: boolean;
  name?: string;
  primaryUser?: string;
  region?: string;
  replica?: number;
  resourceGroupId?: string;
  rollBack?: boolean;
  slb?: ListGatewayResponseBodyDataResultSlb[];
  spec?: string;
  status?: number;
  statusDesc?: string;
  supportWasm?: boolean;
  tag?: string;
  upgrade?: boolean;
  vswitch2?: string;
  static names(): { [key: string]: string } {
    return {
      ahasOn: 'AhasOn',
      appVersion: 'AppVersion',
      armsOn: 'ArmsOn',
      chargeType: 'ChargeType',
      currentVersion: 'CurrentVersion',
      endDate: 'EndDate',
      gatewayType: 'GatewayType',
      gatewayUniqueId: 'GatewayUniqueId',
      gatewayVersion: 'GatewayVersion',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      initConfig: 'InitConfig',
      instanceId: 'InstanceId',
      internetSlb: 'InternetSlb',
      latestVersion: 'LatestVersion',
      mseTag: 'MseTag',
      mustUpgrade: 'MustUpgrade',
      name: 'Name',
      primaryUser: 'PrimaryUser',
      region: 'Region',
      replica: 'Replica',
      resourceGroupId: 'ResourceGroupId',
      rollBack: 'RollBack',
      slb: 'Slb',
      spec: 'Spec',
      status: 'Status',
      statusDesc: 'StatusDesc',
      supportWasm: 'SupportWasm',
      tag: 'Tag',
      upgrade: 'Upgrade',
      vswitch2: 'Vswitch2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ahasOn: 'boolean',
      appVersion: 'string',
      armsOn: 'boolean',
      chargeType: 'string',
      currentVersion: 'string',
      endDate: 'string',
      gatewayType: 'string',
      gatewayUniqueId: 'string',
      gatewayVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      initConfig: ListGatewayResponseBodyDataResultInitConfig,
      instanceId: 'string',
      internetSlb: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResultInternetSlb },
      latestVersion: 'string',
      mseTag: 'string',
      mustUpgrade: 'boolean',
      name: 'string',
      primaryUser: 'string',
      region: 'string',
      replica: 'number',
      resourceGroupId: 'string',
      rollBack: 'boolean',
      slb: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResultSlb },
      spec: 'string',
      status: 'number',
      statusDesc: 'string',
      supportWasm: 'boolean',
      tag: 'string',
      upgrade: 'boolean',
      vswitch2: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: ListGatewayResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': ListGatewayResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthConsumerResponseBodyDataResult extends $tea.Model {
  consumerStatus?: boolean;
  description?: string;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  primaryUser?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consumerStatus: 'ConsumerStatus',
      description: 'Description',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      primaryUser: 'PrimaryUser',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerStatus: 'boolean',
      description: 'string',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      primaryUser: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthConsumerResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: ListGatewayAuthConsumerResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': ListGatewayAuthConsumerResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthConsumerResourceResponseBodyDataResult extends $tea.Model {
  consumerId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  resourceStatus?: boolean;
  routeId?: number;
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      resourceStatus: 'ResourceStatus',
      routeId: 'RouteId',
      routeName: 'RouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      resourceStatus: 'boolean',
      routeId: 'number',
      routeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthConsumerResourceResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: ListGatewayAuthConsumerResourceResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': ListGatewayAuthConsumerResourceResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayDomainResponseBodyDataComment extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayDomainResponseBodyData extends $tea.Model {
  certBeforeDate?: string;
  certIdentifier?: string;
  comment?: ListGatewayDomainResponseBodyDataComment;
  gatewayId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  http2?: string;
  id?: number;
  mustHttps?: boolean;
  name?: string;
  protocol?: string;
  status?: number;
  tlsMax?: string;
  tlsMin?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      certBeforeDate: 'CertBeforeDate',
      certIdentifier: 'CertIdentifier',
      comment: 'Comment',
      gatewayId: 'GatewayId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      http2: 'Http2',
      id: 'Id',
      mustHttps: 'MustHttps',
      name: 'Name',
      protocol: 'Protocol',
      status: 'Status',
      tlsMax: 'TlsMax',
      tlsMin: 'TlsMin',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certBeforeDate: 'string',
      certIdentifier: 'string',
      comment: ListGatewayDomainResponseBodyDataComment,
      gatewayId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      http2: 'string',
      id: 'number',
      mustHttps: 'boolean',
      name: 'string',
      protocol: 'string',
      status: 'number',
      tlsMax: 'string',
      tlsMin: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteRequestFilterParams extends $tea.Model {
  defaultServiceId?: number;
  domainId?: number;
  domainName?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  name?: string;
  routeOrder?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      defaultServiceId: 'DefaultServiceId',
      domainId: 'DomainId',
      domainName: 'DomainName',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      name: 'Name',
      routeOrder: 'RouteOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultServiceId: 'number',
      domainId: 'number',
      domainName: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      name: 'string',
      routeOrder: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultComment extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultDirectResponse extends $tea.Model {
  body?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultFallbackServices extends $tea.Model {
  agreementType?: string;
  groupName?: string;
  name?: string;
  namespace?: string;
  percent?: number;
  serviceId?: number;
  serviceName?: string;
  servicePort?: number;
  sourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRedirect extends $tea.Model {
  code?: number;
  host?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRoutePredicatesHeaderPredicates extends $tea.Model {
  key?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRoutePredicatesPathPredicates extends $tea.Model {
  ignoreCase?: boolean;
  path?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRoutePredicatesQueryPredicates extends $tea.Model {
  key?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRoutePredicates extends $tea.Model {
  headerPredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicatesHeaderPredicates[];
  methodPredicates?: string[];
  pathPredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicatesPathPredicates;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapList extends $tea.Model {
  dubboMothedName?: string;
  httpMothed?: string;
  mothedpath?: string;
  paramMapsList?: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList[];
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
      paramMapsList: { 'type': 'array', 'itemType': ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoderMothedMapListParamMapsList },
      passThroughAllHeaders: 'string',
      passThroughList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder extends $tea.Model {
  dubboServiceGroup?: string;
  dubboServiceName?: string;
  dubboServiceVersion?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResultRouteServices extends $tea.Model {
  agreementType?: string;
  groupName?: string;
  httpDubboTranscoder?: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder;
  name?: string;
  namespace?: string;
  percent?: number;
  serviceId?: number;
  serviceName?: string;
  servicePort?: number;
  sourceType?: string;
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
      httpDubboTranscoder: ListGatewayRouteResponseBodyDataResultRouteServicesHttpDubboTranscoder,
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyDataResult extends $tea.Model {
  comment?: ListGatewayRouteResponseBodyDataResultComment;
  defaultServiceId?: number;
  defaultServiceName?: string;
  destinationType?: string;
  directResponse?: ListGatewayRouteResponseBodyDataResultDirectResponse;
  domainId?: number;
  domainIdList?: number[];
  domainName?: string;
  domainNameList?: string[];
  enableWaf?: string;
  fallback?: boolean;
  fallbackServices?: ListGatewayRouteResponseBodyDataResultFallbackServices[];
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  name?: string;
  predicates?: string;
  redirect?: ListGatewayRouteResponseBodyDataResultRedirect;
  routeOrder?: number;
  routePredicates?: ListGatewayRouteResponseBodyDataResultRoutePredicates;
  routeServices?: ListGatewayRouteResponseBodyDataResultRouteServices[];
  services?: string;
  status?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: ListGatewayRouteResponseBodyDataResult[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteOnAuthResponseBodyDataRoutePredicatesPathPredicates extends $tea.Model {
  path?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteOnAuthResponseBodyDataRoutePredicates extends $tea.Model {
  pathPredicates?: ListGatewayRouteOnAuthResponseBodyDataRoutePredicatesPathPredicates;
  static names(): { [key: string]: string } {
    return {
      pathPredicates: 'PathPredicates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathPredicates: ListGatewayRouteOnAuthResponseBodyDataRoutePredicatesPathPredicates,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteOnAuthResponseBodyData extends $tea.Model {
  domainId?: number;
  domainIdList?: number[];
  domainName?: string;
  domainNameList?: string[];
  gatewayId?: string;
  gatewayUniqueId?: string;
  id?: number;
  name?: string;
  routePredicates?: ListGatewayRouteOnAuthResponseBodyDataRoutePredicates;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      domainIdList: 'DomainIdList',
      domainName: 'DomainName',
      domainNameList: 'DomainNameList',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      name: 'Name',
      routePredicates: 'RoutePredicates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'number',
      domainIdList: { 'type': 'array', 'itemType': 'number' },
      domainName: 'string',
      domainNameList: { 'type': 'array', 'itemType': 'string' },
      gatewayId: 'string',
      gatewayUniqueId: 'string',
      id: 'number',
      name: 'string',
      routePredicates: ListGatewayRouteOnAuthResponseBodyDataRoutePredicates,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceRequestFilterParams extends $tea.Model {
  gatewayUniqueId?: string;
  groupName?: string;
  name?: string;
  namespace?: string;
  serviceProtocol?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      serviceProtocol: 'ServiceProtocol',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      serviceProtocol: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie extends $tea.Model {
  name?: string;
  path?: string;
  ttl?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
      ttl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfig extends $tea.Model {
  consistentHashLBType?: string;
  httpCookie?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie;
  minimumRingSize?: number;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBType: 'ConsistentHashLBType',
      httpCookie: 'HttpCookie',
      minimumRingSize: 'MinimumRingSize',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBType: 'string',
      httpCookie: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie,
      minimumRingSize: 'number',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings extends $tea.Model {
  consistentHashLBConfig?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfig;
  loadbalancerType?: string;
  warmupDuration?: number;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBConfig: 'ConsistentHashLBConfig',
      loadbalancerType: 'LoadbalancerType',
      warmupDuration: 'WarmupDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBConfig: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettingsConsistentHashLBConfig,
      loadbalancerType: 'string',
      warmupDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls extends $tea.Model {
  caCertContent?: string;
  caCertId?: string;
  certId?: string;
  mode?: string;
  sni?: string;
  subjectAltNames?: string[];
  static names(): { [key: string]: string } {
    return {
      caCertContent: 'CaCertContent',
      caCertId: 'CaCertId',
      certId: 'CertId',
      mode: 'Mode',
      sni: 'Sni',
      subjectAltNames: 'SubjectAltNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertContent: 'string',
      caCertId: 'string',
      certId: 'string',
      mode: 'string',
      sni: 'string',
      subjectAltNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicy extends $tea.Model {
  loadBalancerSettings?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings;
  tls?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSettings: 'LoadBalancerSettings',
      tls: 'Tls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSettings: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyLoadBalancerSettings,
      tls: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultHealthCheckInfo extends $tea.Model {
  check?: boolean;
  expectedStatuses?: number[];
  healthyThreshold?: number;
  httpHost?: string;
  httpPath?: string;
  interval?: number;
  protocol?: string;
  timeout?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      expectedStatuses: 'ExpectedStatuses',
      healthyThreshold: 'HealthyThreshold',
      httpHost: 'HttpHost',
      httpPath: 'HttpPath',
      interval: 'Interval',
      protocol: 'Protocol',
      timeout: 'Timeout',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      expectedStatuses: { 'type': 'array', 'itemType': 'number' },
      healthyThreshold: 'number',
      httpHost: 'string',
      httpPath: 'string',
      interval: 'number',
      protocol: 'string',
      timeout: 'number',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResultVersions extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyDataResult extends $tea.Model {
  gatewayId?: number;
  gatewayTrafficPolicy?: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicy;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groupName?: string;
  healehStatus?: string;
  healthCheck?: boolean;
  healthCheckInfo?: ListGatewayServiceResponseBodyDataResultHealthCheckInfo;
  healthStatus?: string;
  id?: number;
  ips?: string[];
  metaInfo?: string;
  name?: string;
  namespace?: string;
  ports?: number[];
  serviceNameInRegistry?: string;
  servicePort?: number;
  serviceProtocol?: string;
  sourceId?: number;
  sourceType?: string;
  unhealthyEndpoints?: string[];
  versions?: ListGatewayServiceResponseBodyDataResultVersions[];
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayTrafficPolicy: 'GatewayTrafficPolicy',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      healehStatus: 'HealehStatus',
      healthCheck: 'HealthCheck',
      healthCheckInfo: 'HealthCheckInfo',
      healthStatus: 'HealthStatus',
      id: 'Id',
      ips: 'Ips',
      metaInfo: 'MetaInfo',
      name: 'Name',
      namespace: 'Namespace',
      ports: 'Ports',
      serviceNameInRegistry: 'ServiceNameInRegistry',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      unhealthyEndpoints: 'UnhealthyEndpoints',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'number',
      gatewayTrafficPolicy: ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicy,
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupName: 'string',
      healehStatus: 'string',
      healthCheck: 'boolean',
      healthCheckInfo: ListGatewayServiceResponseBodyDataResultHealthCheckInfo,
      healthStatus: 'string',
      id: 'number',
      ips: { 'type': 'array', 'itemType': 'string' },
      metaInfo: 'string',
      name: 'string',
      namespace: 'string',
      ports: { 'type': 'array', 'itemType': 'number' },
      serviceNameInRegistry: 'string',
      servicePort: 'number',
      serviceProtocol: 'string',
      sourceId: 'number',
      sourceType: 'string',
      unhealthyEndpoints: { 'type': 'array', 'itemType': 'string' },
      versions: { 'type': 'array', 'itemType': ListGatewayServiceResponseBodyDataResultVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: ListGatewayServiceResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': ListGatewayServiceResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaySlbResponseBodyData extends $tea.Model {
  editEnable?: boolean;
  gatewayId?: string;
  gatewaySlbMode?: string;
  gatewaySlbStatus?: string;
  gmtCreate?: string;
  httpPort?: number;
  httpsPort?: number;
  httpsVServerGroupId?: string;
  id?: string;
  serviceWeight?: number;
  slbId?: string;
  slbIp?: string;
  slbPort?: string;
  statusDesc?: string;
  type?: string;
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      editEnable: 'EditEnable',
      gatewayId: 'GatewayId',
      gatewaySlbMode: 'GatewaySlbMode',
      gatewaySlbStatus: 'GatewaySlbStatus',
      gmtCreate: 'GmtCreate',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      httpsVServerGroupId: 'HttpsVServerGroupId',
      id: 'Id',
      serviceWeight: 'ServiceWeight',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbPort: 'SlbPort',
      statusDesc: 'StatusDesc',
      type: 'Type',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editEnable: 'boolean',
      gatewayId: 'string',
      gatewaySlbMode: 'string',
      gatewaySlbStatus: 'string',
      gmtCreate: 'string',
      httpPort: 'number',
      httpsPort: 'number',
      httpsVServerGroupId: 'string',
      id: 'string',
      serviceWeight: 'number',
      slbId: 'string',
      slbIp: 'string',
      slbPort: 'string',
      statusDesc: 'string',
      type: 'string',
      VServerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByConfigResponseBodyListeners extends $tea.Model {
  ip?: string;
  md5?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      md5: 'Md5',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      md5: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersByIpResponseBodyListeners extends $tea.Model {
  dataId?: string;
  group?: string;
  md5?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      group: 'Group',
      md5: 'Md5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      group: 'string',
      md5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationTaskResponseBodyData extends $tea.Model {
  clusterType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  originInstanceAddress?: string;
  originInstanceName?: string;
  originInstanceNamespace?: string;
  projectDesc?: string;
  targetClusterName?: string;
  targetClusterUrl?: string;
  targetInstanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      originInstanceAddress: 'OriginInstanceAddress',
      originInstanceName: 'OriginInstanceName',
      originInstanceNamespace: 'OriginInstanceNamespace',
      projectDesc: 'ProjectDesc',
      targetClusterName: 'TargetClusterName',
      targetClusterUrl: 'TargetClusterUrl',
      targetInstanceId: 'TargetInstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      originInstanceAddress: 'string',
      originInstanceName: 'string',
      originInstanceNamespace: 'string',
      projectDesc: 'string',
      targetClusterName: 'string',
      targetClusterUrl: 'string',
      targetInstanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosConfigsResponseBodyConfigurations extends $tea.Model {
  appName?: string;
  dataId?: string;
  group?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      dataId: 'DataId',
      group: 'Group',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      dataId: 'string',
      group: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosHistoryConfigsResponseBodyHistoryItems extends $tea.Model {
  appName?: string;
  dataId?: string;
  group?: string;
  id?: number;
  lastModifiedTime?: number;
  opType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      dataId: 'DataId',
      group: 'Group',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      opType: 'OpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      dataId: 'string',
      group: 'string',
      id: 'number',
      lastModifiedTime: 'number',
      opType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamingTrackResponseBodyTraces extends $tea.Model {
  clientIp?: string;
  group?: string;
  instanceSize?: string;
  nodeName?: string;
  pushTime?: string;
  pushTimeAll?: string;
  pushTimeNetwork?: string;
  serverName?: string;
  slaTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      group: 'Group',
      instanceSize: 'InstanceSize',
      nodeName: 'NodeName',
      pushTime: 'PushTime',
      pushTimeAll: 'PushTimeAll',
      pushTimeNetwork: 'PushTimeNetwork',
      serverName: 'ServerName',
      slaTime: 'SlaTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      group: 'string',
      instanceSize: 'string',
      nodeName: 'string',
      pushTime: 'string',
      pushTimeAll: 'string',
      pushTimeNetwork: 'string',
      serverName: 'string',
      slaTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSSLCertResponseBodyData extends $tea.Model {
  afterDate?: string;
  algorithm?: string;
  beforeDate?: string;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  gmtAfter?: string;
  gmtBefore?: string;
  issuer?: string;
  sans?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      gmtAfter: 'GmtAfter',
      gmtBefore: 'GmtBefore',
      issuer: 'Issuer',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'string',
      algorithm: 'string',
      beforeDate: 'string',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      gmtAfter: 'string',
      gmtBefore: 'string',
      issuer: 'string',
      sans: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupResponseBodyData extends $tea.Model {
  securityGroupId?: string;
  securityGroupName?: string;
  securityGroupType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      securityGroupType: 'SecurityGroupType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      securityGroupName: 'string',
      securityGroupType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupRuleResponseBodyData extends $tea.Model {
  description?: string;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  ipProtocol?: string;
  portRange?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSourceResponseBodyDataIngressOptions extends $tea.Model {
  enableIngress?: boolean;
  enableStatus?: boolean;
  ingressClass?: string;
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      enableIngress: 'EnableIngress',
      enableStatus: 'EnableStatus',
      ingressClass: 'IngressClass',
      watchNamespace: 'WatchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIngress: 'boolean',
      enableStatus: 'boolean',
      ingressClass: 'string',
      watchNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSourceResponseBodyData extends $tea.Model {
  address?: string;
  bindingWithGateway?: number;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groupList?: string[];
  id?: number;
  ingressOptions?: ListServiceSourceResponseBodyDataIngressOptions;
  name?: string;
  pathList?: string[];
  source?: string;
  sourceUniqueId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      bindingWithGateway: 'BindingWithGateway',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupList: 'GroupList',
      id: 'Id',
      ingressOptions: 'IngressOptions',
      name: 'Name',
      pathList: 'PathList',
      source: 'Source',
      sourceUniqueId: 'SourceUniqueId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      bindingWithGateway: 'number',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupList: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      ingressOptions: ListServiceSourceResponseBodyDataIngressOptions,
      name: 'string',
      pathList: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      sourceUniqueId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZkTrackResponseBodyTraces extends $tea.Model {
  acl?: string;
  dataType?: string;
  eventType?: string;
  finished?: boolean;
  logDate?: string;
  multiSize?: number;
  opType?: string;
  path?: string;
  result?: string;
  sessionId?: string;
  timestamp?: string;
  traceType?: string;
  ttl?: number;
  watch?: boolean;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      dataType: 'DataType',
      eventType: 'EventType',
      finished: 'Finished',
      logDate: 'LogDate',
      multiSize: 'MultiSize',
      opType: 'OpType',
      path: 'Path',
      result: 'Result',
      sessionId: 'SessionId',
      timestamp: 'Timestamp',
      traceType: 'TraceType',
      ttl: 'Ttl',
      watch: 'Watch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      dataType: 'string',
      eventType: 'string',
      finished: 'boolean',
      logDate: 'string',
      multiSize: 'number',
      opType: 'string',
      path: 'string',
      result: 'string',
      sessionId: 'string',
      timestamp: 'string',
      traceType: 'string',
      ttl: 'number',
      watch: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZnodeChildrenResponseBodyData extends $tea.Model {
  data?: string;
  dir?: boolean;
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dir: 'Dir',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dir: 'boolean',
      name: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullServicesResponseBodyDataServices extends $tea.Model {
  groupName?: string;
  name?: string;
  namespace?: string;
  sourceId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      sourceId: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullServicesResponseBodyData extends $tea.Model {
  groupName?: string;
  namespace?: string;
  namespaceShowName?: string;
  services?: PullServicesResponseBodyDataServices[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      namespace: 'Namespace',
      namespaceShowName: 'NamespaceShowName',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      namespace: 'string',
      namespaceShowName: 'string',
      services: { 'type': 'array', 'itemType': PullServicesResponseBodyDataServices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllSwimmingLaneGroupResponseBodyData extends $tea.Model {
  appIds?: string;
  entryApp?: string;
  id?: number;
  messageQueueFilterSide?: string;
  messageQueueGrayEnable?: boolean;
  name?: string;
  namespace?: string;
  recordCanaryDetail?: boolean;
  region?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      entryApp: 'EntryApp',
      id: 'Id',
      messageQueueFilterSide: 'MessageQueueFilterSide',
      messageQueueGrayEnable: 'MessageQueueGrayEnable',
      name: 'Name',
      namespace: 'Namespace',
      recordCanaryDetail: 'RecordCanaryDetail',
      region: 'Region',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      entryApp: 'string',
      id: 'number',
      messageQueueFilterSide: 'string',
      messageQueueGrayEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      recordCanaryDetail: 'boolean',
      region: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBusinessLocationsResponseBodyData extends $tea.Model {
  cnName?: string;
  description?: string;
  districtCnName?: string;
  districtEnName?: string;
  districtId?: string;
  districtOrdering?: number;
  districtShowName?: string;
  enDescription?: string;
  enName?: string;
  name?: string;
  ordering?: number;
  showName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      description: 'Description',
      districtCnName: 'DistrictCnName',
      districtEnName: 'DistrictEnName',
      districtId: 'DistrictId',
      districtOrdering: 'DistrictOrdering',
      districtShowName: 'DistrictShowName',
      enDescription: 'EnDescription',
      enName: 'EnName',
      name: 'Name',
      ordering: 'Ordering',
      showName: 'ShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      description: 'string',
      districtCnName: 'string',
      districtEnName: 'string',
      districtId: 'string',
      districtOrdering: 'number',
      districtShowName: 'string',
      enDescription: 'string',
      enName: 'string',
      name: 'string',
      ordering: 'number',
      showName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBodyDataInstanceModels extends $tea.Model {
  creationTimestamp?: string;
  healthStatus?: string;
  internetIp?: string;
  ip?: string;
  podName?: string;
  role?: string;
  singleTunnelVip?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      creationTimestamp: 'CreationTimestamp',
      healthStatus: 'HealthStatus',
      internetIp: 'InternetIp',
      ip: 'Ip',
      podName: 'PodName',
      role: 'Role',
      singleTunnelVip: 'SingleTunnelVip',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTimestamp: 'string',
      healthStatus: 'string',
      internetIp: 'string',
      ip: 'string',
      podName: 'string',
      role: 'string',
      singleTunnelVip: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDetailResponseBodyData extends $tea.Model {
  aclEntryList?: string;
  aclId?: string;
  appVersion?: string;
  chargeType?: string;
  clusterAliasName?: string;
  clusterName?: string;
  clusterSpecification?: string;
  clusterType?: string;
  clusterVersion?: string;
  connectionType?: string;
  cpu?: number;
  createTime?: string;
  diskCapacity?: number;
  diskType?: string;
  healthStatus?: string;
  initCostTime?: number;
  initStatus?: string;
  instanceCount?: number;
  instanceId?: string;
  instanceModels?: QueryClusterDetailResponseBodyDataInstanceModels[];
  internetAddress?: string;
  internetDomain?: string;
  internetPort?: string;
  intranetAddress?: string;
  intranetDomain?: string;
  intranetPort?: string;
  memoryCapacity?: number;
  mseVersion?: string;
  netType?: string;
  orderClusterVersion?: string;
  payInfo?: string;
  pubNetworkFlow?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: { [key: string]: any };
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryList: 'AclEntryList',
      aclId: 'AclId',
      appVersion: 'AppVersion',
      chargeType: 'ChargeType',
      clusterAliasName: 'ClusterAliasName',
      clusterName: 'ClusterName',
      clusterSpecification: 'ClusterSpecification',
      clusterType: 'ClusterType',
      clusterVersion: 'ClusterVersion',
      connectionType: 'ConnectionType',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      diskCapacity: 'DiskCapacity',
      diskType: 'DiskType',
      healthStatus: 'HealthStatus',
      initCostTime: 'InitCostTime',
      initStatus: 'InitStatus',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      instanceModels: 'InstanceModels',
      internetAddress: 'InternetAddress',
      internetDomain: 'InternetDomain',
      internetPort: 'InternetPort',
      intranetAddress: 'IntranetAddress',
      intranetDomain: 'IntranetDomain',
      intranetPort: 'IntranetPort',
      memoryCapacity: 'MemoryCapacity',
      mseVersion: 'MseVersion',
      netType: 'NetType',
      orderClusterVersion: 'OrderClusterVersion',
      payInfo: 'PayInfo',
      pubNetworkFlow: 'PubNetworkFlow',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryList: 'string',
      aclId: 'string',
      appVersion: 'string',
      chargeType: 'string',
      clusterAliasName: 'string',
      clusterName: 'string',
      clusterSpecification: 'string',
      clusterType: 'string',
      clusterVersion: 'string',
      connectionType: 'string',
      cpu: 'number',
      createTime: 'string',
      diskCapacity: 'number',
      diskType: 'string',
      healthStatus: 'string',
      initCostTime: 'number',
      initStatus: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      instanceModels: { 'type': 'array', 'itemType': QueryClusterDetailResponseBodyDataInstanceModels },
      internetAddress: 'string',
      internetDomain: 'string',
      internetPort: 'string',
      intranetAddress: 'string',
      intranetDomain: 'string',
      intranetPort: 'string',
      memoryCapacity: 'number',
      mseVersion: 'string',
      netType: 'string',
      orderClusterVersion: 'string',
      payInfo: 'string',
      pubNetworkFlow: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterDiskSpecificationResponseBodyData extends $tea.Model {
  max?: number;
  min?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterInfoResponseBodyDataInstanceModels extends $tea.Model {
  creationTimestamp?: string;
  healthStatus?: string;
  internetIp?: string;
  ip?: string;
  podName?: string;
  role?: string;
  singleTunnelVip?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      creationTimestamp: 'CreationTimestamp',
      healthStatus: 'HealthStatus',
      internetIp: 'InternetIp',
      ip: 'Ip',
      podName: 'PodName',
      role: 'Role',
      singleTunnelVip: 'SingleTunnelVip',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTimestamp: 'string',
      healthStatus: 'string',
      internetIp: 'string',
      ip: 'string',
      podName: 'string',
      role: 'string',
      singleTunnelVip: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterInfoResponseBodyData extends $tea.Model {
  aclEntryList?: string;
  aclId?: string;
  appVersion?: string;
  chargeType?: string;
  clusterAliasName?: string;
  clusterName?: string;
  clusterSpecification?: string;
  clusterType?: string;
  clusterVersion?: string;
  connectionType?: string;
  cpu?: number;
  createTime?: string;
  diskCapacity?: number;
  diskType?: string;
  healthStatus?: string;
  initCostTime?: number;
  initStatus?: string;
  instanceCount?: number;
  instanceId?: string;
  instanceModels?: QueryClusterInfoResponseBodyDataInstanceModels[];
  internetAddress?: string;
  internetDomain?: string;
  internetPort?: string;
  intranetAddress?: string;
  intranetDomain?: string;
  intranetPort?: string;
  memoryCapacity?: number;
  mseVersion?: string;
  netType?: string;
  payInfo?: string;
  pubNetworkFlow?: string;
  regionId?: string;
  tags?: { [key: string]: any };
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryList: 'AclEntryList',
      aclId: 'AclId',
      appVersion: 'AppVersion',
      chargeType: 'ChargeType',
      clusterAliasName: 'ClusterAliasName',
      clusterName: 'ClusterName',
      clusterSpecification: 'ClusterSpecification',
      clusterType: 'ClusterType',
      clusterVersion: 'ClusterVersion',
      connectionType: 'ConnectionType',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      diskCapacity: 'DiskCapacity',
      diskType: 'DiskType',
      healthStatus: 'HealthStatus',
      initCostTime: 'InitCostTime',
      initStatus: 'InitStatus',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      instanceModels: 'InstanceModels',
      internetAddress: 'InternetAddress',
      internetDomain: 'InternetDomain',
      internetPort: 'InternetPort',
      intranetAddress: 'IntranetAddress',
      intranetDomain: 'IntranetDomain',
      intranetPort: 'IntranetPort',
      memoryCapacity: 'MemoryCapacity',
      mseVersion: 'MseVersion',
      netType: 'NetType',
      payInfo: 'PayInfo',
      pubNetworkFlow: 'PubNetworkFlow',
      regionId: 'RegionId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryList: 'string',
      aclId: 'string',
      appVersion: 'string',
      chargeType: 'string',
      clusterAliasName: 'string',
      clusterName: 'string',
      clusterSpecification: 'string',
      clusterType: 'string',
      clusterVersion: 'string',
      connectionType: 'string',
      cpu: 'number',
      createTime: 'string',
      diskCapacity: 'number',
      diskType: 'string',
      healthStatus: 'string',
      initCostTime: 'number',
      initStatus: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      instanceModels: { 'type': 'array', 'itemType': QueryClusterInfoResponseBodyDataInstanceModels },
      internetAddress: 'string',
      internetDomain: 'string',
      internetPort: 'string',
      intranetAddress: 'string',
      intranetDomain: 'string',
      intranetPort: 'string',
      memoryCapacity: 'number',
      mseVersion: 'string',
      netType: 'string',
      payInfo: 'string',
      pubNetworkFlow: 'string',
      regionId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterSpecificationResponseBodyData extends $tea.Model {
  clusterSpecificationName?: string;
  cpuCapacity?: string;
  memoryCapacity?: string;
  static names(): { [key: string]: string } {
    return {
      clusterSpecificationName: 'ClusterSpecificationName',
      cpuCapacity: 'CpuCapacity',
      memoryCapacity: 'MemoryCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSpecificationName: 'string',
      cpuCapacity: 'string',
      memoryCapacity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigResponseBodyDataNacosRunningEnv extends $tea.Model {
  emptyProtect?: boolean;
  static names(): { [key: string]: string } {
    return {
      emptyProtect: 'emptyProtect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emptyProtect: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConfigResponseBodyData extends $tea.Model {
  autopurgePurgeInterval?: string;
  autopurgeSnapRetainCount?: string;
  clusterName?: string;
  configAuthEnabled?: boolean;
  configAuthSupported?: boolean;
  configContentLimit?: number;
  configSecretEnabled?: boolean;
  configSecretSupported?: boolean;
  eurekaSupported?: boolean;
  extendedTypesEnable?: boolean;
  initLimit?: string;
  juteMaxbuffer?: string;
  jvmFlagsCustom?: string;
  MCPEnabled?: boolean;
  MCPSupported?: boolean;
  maxClientCnxns?: string;
  maxSessionTimeout?: string;
  minSessionTimeout?: string;
  nacosRunningEnv?: QueryConfigResponseBodyDataNacosRunningEnv;
  namingAuthEnabled?: boolean;
  namingAuthSupported?: boolean;
  namingCreateServiceSupported?: boolean;
  openSuperAcl?: boolean;
  passWord?: string;
  restartFlag?: boolean;
  snapshotCount?: string;
  syncLimit?: string;
  tickTime?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      autopurgePurgeInterval: 'AutopurgePurgeInterval',
      autopurgeSnapRetainCount: 'AutopurgeSnapRetainCount',
      clusterName: 'ClusterName',
      configAuthEnabled: 'ConfigAuthEnabled',
      configAuthSupported: 'ConfigAuthSupported',
      configContentLimit: 'ConfigContentLimit',
      configSecretEnabled: 'ConfigSecretEnabled',
      configSecretSupported: 'ConfigSecretSupported',
      eurekaSupported: 'EurekaSupported',
      extendedTypesEnable: 'ExtendedTypesEnable',
      initLimit: 'InitLimit',
      juteMaxbuffer: 'JuteMaxbuffer',
      jvmFlagsCustom: 'JvmFlagsCustom',
      MCPEnabled: 'MCPEnabled',
      MCPSupported: 'MCPSupported',
      maxClientCnxns: 'MaxClientCnxns',
      maxSessionTimeout: 'MaxSessionTimeout',
      minSessionTimeout: 'MinSessionTimeout',
      nacosRunningEnv: 'NacosRunningEnv',
      namingAuthEnabled: 'NamingAuthEnabled',
      namingAuthSupported: 'NamingAuthSupported',
      namingCreateServiceSupported: 'NamingCreateServiceSupported',
      openSuperAcl: 'OpenSuperAcl',
      passWord: 'PassWord',
      restartFlag: 'RestartFlag',
      snapshotCount: 'SnapshotCount',
      syncLimit: 'SyncLimit',
      tickTime: 'TickTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autopurgePurgeInterval: 'string',
      autopurgeSnapRetainCount: 'string',
      clusterName: 'string',
      configAuthEnabled: 'boolean',
      configAuthSupported: 'boolean',
      configContentLimit: 'number',
      configSecretEnabled: 'boolean',
      configSecretSupported: 'boolean',
      eurekaSupported: 'boolean',
      extendedTypesEnable: 'boolean',
      initLimit: 'string',
      juteMaxbuffer: 'string',
      jvmFlagsCustom: 'string',
      MCPEnabled: 'boolean',
      MCPSupported: 'boolean',
      maxClientCnxns: 'string',
      maxSessionTimeout: 'string',
      minSessionTimeout: 'string',
      nacosRunningEnv: QueryConfigResponseBodyDataNacosRunningEnv,
      namingAuthEnabled: 'boolean',
      namingAuthSupported: 'boolean',
      namingCreateServiceSupported: 'boolean',
      openSuperAcl: 'boolean',
      passWord: 'string',
      restartFlag: 'boolean',
      snapshotCount: 'string',
      syncLimit: 'string',
      tickTime: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGovernanceKubernetesClusterResponseBodyDataResult extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  k8sVersion?: string;
  namespaceInfos?: string;
  pilotStartTime?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      k8sVersion: 'K8sVersion',
      namespaceInfos: 'NamespaceInfos',
      pilotStartTime: 'PilotStartTime',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      k8sVersion: 'string',
      namespaceInfos: 'string',
      pilotStartTime: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGovernanceKubernetesClusterResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  result?: QueryGovernanceKubernetesClusterResponseBodyDataResult[];
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
      result: { 'type': 'array', 'itemType': QueryGovernanceKubernetesClusterResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstancesInfoResponseBodyData extends $tea.Model {
  clientPort?: string;
  creationTimestamp?: string;
  healthStatus?: string;
  internetIp?: string;
  ip?: string;
  podName?: string;
  role?: string;
  singleTunnelVip?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      clientPort: 'ClientPort',
      creationTimestamp: 'CreationTimestamp',
      healthStatus: 'HealthStatus',
      internetIp: 'InternetIp',
      ip: 'Ip',
      podName: 'PodName',
      role: 'Role',
      singleTunnelVip: 'SingleTunnelVip',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientPort: 'string',
      creationTimestamp: 'string',
      healthStatus: 'string',
      internetIp: 'string',
      ip: 'string',
      podName: 'string',
      role: 'string',
      singleTunnelVip: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonitorResponseBodyData extends $tea.Model {
  clusterNamePrefix?: string;
  podName?: string;
  values?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      clusterNamePrefix: 'clusterNamePrefix',
      podName: 'podName',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNamePrefix: 'string',
      podName: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNamespaceResponseBodyData extends $tea.Model {
  namespace?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlbSpecResponseBodyData extends $tea.Model {
  id?: number;
  maxConnection?: string;
  name?: string;
  newConnectionPerSecond?: string;
  qps?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      maxConnection: 'MaxConnection',
      name: 'Name',
      newConnectionPerSecond: 'NewConnectionPerSecond',
      qps: 'Qps',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      maxConnection: 'string',
      name: 'string',
      newConnectionPerSecond: 'string',
      qps: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryZnodeDetailResponseBodyData extends $tea.Model {
  data?: string;
  dir?: boolean;
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dir: 'Dir',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      dir: 'boolean',
      name: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SelectGatewaySlbResponseBodyData extends $tea.Model {
  slbId?: string;
  slbName?: string;
  static names(): { [key: string]: string } {
    return {
      slbId: 'SlbId',
      slbName: 'SlbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbId: 'string',
      slbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEngineNamespaceResponseBodyData extends $tea.Model {
  configCount?: number;
  namespace?: string;
  namespaceDesc?: string;
  namespaceShowName?: string;
  quota?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      configCount: 'ConfigCount',
      namespace: 'Namespace',
      namespaceDesc: 'NamespaceDesc',
      namespaceShowName: 'NamespaceShowName',
      quota: 'Quota',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCount: 'number',
      namespace: 'string',
      namespaceDesc: 'string',
      namespaceShowName: 'string',
      quota: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayAuthConsumerResourceRequestResourceList extends $tea.Model {
  routeId?: number;
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      routeId: 'RouteId',
      routeName: 'RouteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeId: 'number',
      routeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestDirectResponseJSON extends $tea.Model {
  body?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestFallbackServices extends $tea.Model {
  agreementType?: string;
  groupName?: string;
  name?: string;
  namespace?: string;
  percent?: number;
  serviceId?: number;
  servicePort?: number;
  sourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestPredicatesHeaderPredicates extends $tea.Model {
  key?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestPredicatesPathPredicates extends $tea.Model {
  ignoreCase?: boolean;
  path?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestPredicatesQueryPredicates extends $tea.Model {
  key?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestPredicates extends $tea.Model {
  headerPredicates?: UpdateGatewayRouteRequestPredicatesHeaderPredicates[];
  methodPredicates?: string[];
  pathPredicates?: UpdateGatewayRouteRequestPredicatesPathPredicates;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestRedirectJSON extends $tea.Model {
  code?: number;
  host?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestServicesHttpDubboTranscoderMothedMapList extends $tea.Model {
  dubboMothedName?: string;
  httpMothed?: string;
  mothedpath?: string;
  paramMapsList?: UpdateGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList[];
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
      paramMapsList: { 'type': 'array', 'itemType': UpdateGatewayRouteRequestServicesHttpDubboTranscoderMothedMapListParamMapsList },
      passThroughAllHeaders: 'string',
      passThroughList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestServicesHttpDubboTranscoder extends $tea.Model {
  dubboServiceGroup?: string;
  dubboServiceName?: string;
  dubboServiceVersion?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRequestServices extends $tea.Model {
  agreementType?: string;
  groupName?: string;
  httpDubboTranscoder?: UpdateGatewayRouteRequestServicesHttpDubboTranscoder;
  name?: string;
  namespace?: string;
  percent?: number;
  serviceId?: number;
  servicePort?: number;
  sourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteAuthRequestAuthJSON extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteCORSRequestCorsJSON extends $tea.Model {
  allowCredentials?: boolean;
  allowHeaders?: string;
  allowMethods?: string;
  allowOrigins?: string;
  exposeHeaders?: string;
  status?: string;
  timeUnit?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteRetryRequestRetryJSON extends $tea.Model {
  attempts?: number;
  httpCodes?: string[];
  retryOn?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteTimeoutRequestTimeoutJSON extends $tea.Model {
  status?: string;
  timeUnit?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataCors extends $tea.Model {
  allowCredentials?: boolean;
  allowHeaders?: string;
  allowMethods?: string;
  allowOrigins?: string;
  exposeHeaders?: string;
  status?: string;
  timeUnit?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataDirectResponse extends $tea.Model {
  body?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataHTTPRewrite extends $tea.Model {
  host?: string;
  path?: string;
  pathType?: string;
  pattern?: string;
  status?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataHeaderOpHeaderOpItems extends $tea.Model {
  directionType?: string;
  key?: string;
  opType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataHeaderOp extends $tea.Model {
  headerOpItems?: UpdateGatewayRouteWafStatusResponseBodyDataHeaderOpHeaderOpItems[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRedirect extends $tea.Model {
  code?: number;
  host?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRetry extends $tea.Model {
  attempts?: number;
  httpCodes?: string[];
  retryOn?: string[];
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesHeaderPredicates extends $tea.Model {
  key?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesPathPredicates extends $tea.Model {
  ignoreCase?: boolean;
  path?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesQueryPredicates extends $tea.Model {
  key?: string;
  type?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicates extends $tea.Model {
  headerPredicates?: UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesHeaderPredicates[];
  methodPredicates?: string[];
  pathPredicates?: UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicatesPathPredicates;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataRouteServices extends $tea.Model {
  groupName?: string;
  name?: string;
  namespace?: string;
  percent?: number;
  serviceId?: number;
  serviceName?: string;
  sourceType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyDataTimeout extends $tea.Model {
  status?: string;
  timeUnit?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteWafStatusResponseBodyData extends $tea.Model {
  cors?: UpdateGatewayRouteWafStatusResponseBodyDataCors;
  defaultServiceId?: number;
  defaultServiceName?: string;
  destinationType?: string;
  directResponse?: UpdateGatewayRouteWafStatusResponseBodyDataDirectResponse;
  domainId?: number;
  domainIdList?: number[];
  domainName?: string;
  domainNameList?: string[];
  enableWaf?: boolean;
  gatewayId?: number;
  gatewayUniqueId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  HTTPRewrite?: UpdateGatewayRouteWafStatusResponseBodyDataHTTPRewrite;
  headerOp?: UpdateGatewayRouteWafStatusResponseBodyDataHeaderOp;
  id?: number;
  name?: string;
  predicates?: string;
  redirect?: UpdateGatewayRouteWafStatusResponseBodyDataRedirect;
  retry?: UpdateGatewayRouteWafStatusResponseBodyDataRetry;
  routeOrder?: number;
  routePredicates?: UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicates;
  routeServices?: UpdateGatewayRouteWafStatusResponseBodyDataRouteServices[];
  services?: string;
  status?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMigrationTaskResponseBodyData extends $tea.Model {
  clusterType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  originInstanceAddress?: string;
  originInstanceName?: string;
  originInstanceNamespace?: string;
  projectDesc?: string;
  targetClusterName?: string;
  targetClusterUrl?: string;
  targetInstanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      originInstanceAddress: 'OriginInstanceAddress',
      originInstanceName: 'OriginInstanceName',
      originInstanceNamespace: 'OriginInstanceNamespace',
      projectDesc: 'ProjectDesc',
      targetClusterName: 'TargetClusterName',
      targetClusterUrl: 'TargetClusterUrl',
      targetInstanceId: 'TargetInstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      originInstanceAddress: 'string',
      originInstanceName: 'string',
      originInstanceNamespace: 'string',
      projectDesc: 'string',
      targetClusterName: 'string',
      targetClusterUrl: 'string',
      targetInstanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSourceRequestIngressOptionsRequest extends $tea.Model {
  enableIngress?: boolean;
  enableStatus?: boolean;
  ingressClass?: string;
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      enableIngress: 'EnableIngress',
      enableStatus: 'EnableStatus',
      ingressClass: 'IngressClass',
      watchNamespace: 'WatchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIngress: 'boolean',
      enableStatus: 'boolean',
      ingressClass: 'string',
      watchNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mse", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async addAuthResourceWithOptions(tmpReq: AddAuthResourceRequest, runtime: $Util.RuntimeOptions): Promise<AddAuthResourceResponse> {
    Util.validateModel(tmpReq);
    let request = new AddAuthResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.authResourceHeaderList)) {
      request.authResourceHeaderListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authResourceHeaderList, "AuthResourceHeaderList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.authId)) {
      query["AuthId"] = request.authId;
    }

    if (!Util.isUnset(request.authResourceHeaderListShrink)) {
      query["AuthResourceHeaderList"] = request.authResourceHeaderListShrink;
    }

    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.ignoreCase)) {
      query["IgnoreCase"] = request.ignoreCase;
    }

    if (!Util.isUnset(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAuthResource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAuthResourceResponse>(await this.callApi(params, req, runtime), new AddAuthResourceResponse({}));
  }

  async addAuthResource(request: AddAuthResourceRequest): Promise<AddAuthResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAuthResourceWithOptions(request, runtime);
  }

  async addBlackWhiteListWithOptions(request: AddBlackWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<AddBlackWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.isWhite)) {
      query["IsWhite"] = request.isWhite;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.resourceIdJsonList)) {
      query["ResourceIdJsonList"] = request.resourceIdJsonList;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddBlackWhiteList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBlackWhiteListResponse>(await this.callApi(params, req, runtime), new AddBlackWhiteListResponse({}));
  }

  async addBlackWhiteList(request: AddBlackWhiteListRequest): Promise<AddBlackWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBlackWhiteListWithOptions(request, runtime);
  }

  async addGatewayWithOptions(request: AddGatewayRequest, runtime: $Util.RuntimeOptions): Promise<AddGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.enableHardwareAcceleration)) {
      query["EnableHardwareAcceleration"] = request.enableHardwareAcceleration;
    }

    if (!Util.isUnset(request.enableSls)) {
      query["EnableSls"] = request.enableSls;
    }

    if (!Util.isUnset(request.enableXtrace)) {
      query["EnableXtrace"] = request.enableXtrace;
    }

    if (!Util.isUnset(request.enterpriseSecurityGroup)) {
      query["EnterpriseSecurityGroup"] = request.enterpriseSecurityGroup;
    }

    if (!Util.isUnset(request.internetSlbSpec)) {
      query["InternetSlbSpec"] = request.internetSlbSpec;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.replica)) {
      query["Replica"] = request.replica;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.slbSpec)) {
      query["SlbSpec"] = request.slbSpec;
    }

    if (!Util.isUnset(request.spec)) {
      query["Spec"] = request.spec;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vSwitchId2)) {
      query["VSwitchId2"] = request.vSwitchId2;
    }

    if (!Util.isUnset(request.vpc)) {
      query["Vpc"] = request.vpc;
    }

    if (!Util.isUnset(request.xtraceRatio)) {
      query["XtraceRatio"] = request.xtraceRatio;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGateway",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGatewayResponse>(await this.callApi(params, req, runtime), new AddGatewayResponse({}));
  }

  async addGateway(request: AddGatewayRequest): Promise<AddGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGatewayWithOptions(request, runtime);
  }

  async addGatewayAuthConsumerWithOptions(request: AddGatewayAuthConsumerRequest, runtime: $Util.RuntimeOptions): Promise<AddGatewayAuthConsumerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.jwks)) {
      query["Jwks"] = request.jwks;
    }

    if (!Util.isUnset(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!Util.isUnset(request.keyValue)) {
      query["KeyValue"] = request.keyValue;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.tokenName)) {
      query["TokenName"] = request.tokenName;
    }

    if (!Util.isUnset(request.tokenPass)) {
      query["TokenPass"] = request.tokenPass;
    }

    if (!Util.isUnset(request.tokenPosition)) {
      query["TokenPosition"] = request.tokenPosition;
    }

    if (!Util.isUnset(request.tokenPrefix)) {
      query["TokenPrefix"] = request.tokenPrefix;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGatewayAuthConsumer",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGatewayAuthConsumerResponse>(await this.callApi(params, req, runtime), new AddGatewayAuthConsumerResponse({}));
  }

  async addGatewayAuthConsumer(request: AddGatewayAuthConsumerRequest): Promise<AddGatewayAuthConsumerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGatewayAuthConsumerWithOptions(request, runtime);
  }

  async addGatewayDomainWithOptions(request: AddGatewayDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddGatewayDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.http2)) {
      query["Http2"] = request.http2;
    }

    if (!Util.isUnset(request.mustHttps)) {
      query["MustHttps"] = request.mustHttps;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.tlsMax)) {
      query["TlsMax"] = request.tlsMax;
    }

    if (!Util.isUnset(request.tlsMin)) {
      query["TlsMin"] = request.tlsMin;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGatewayDomain",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGatewayDomainResponse>(await this.callApi(params, req, runtime), new AddGatewayDomainResponse({}));
  }

  async addGatewayDomain(request: AddGatewayDomainRequest): Promise<AddGatewayDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGatewayDomainWithOptions(request, runtime);
  }

  async addGatewayRouteWithOptions(tmpReq: AddGatewayRouteRequest, runtime: $Util.RuntimeOptions): Promise<AddGatewayRouteResponse> {
    Util.validateModel(tmpReq);
    let request = new AddGatewayRouteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.directResponseJSON)) {
      request.directResponseJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.directResponseJSON, "DirectResponseJSON", "json");
    }

    if (!Util.isUnset(tmpReq.fallbackServices)) {
      request.fallbackServicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fallbackServices, "FallbackServices", "json");
    }

    if (!Util.isUnset(tmpReq.predicates)) {
      request.predicatesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.predicates, "Predicates", "json");
    }

    if (!Util.isUnset(tmpReq.redirectJSON)) {
      request.redirectJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirectJSON, "RedirectJSON", "json");
    }

    if (!Util.isUnset(tmpReq.services)) {
      request.servicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.services, "Services", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.directResponseJSONShrink)) {
      query["DirectResponseJSON"] = request.directResponseJSONShrink;
    }

    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.domainIdListJSON)) {
      query["DomainIdListJSON"] = request.domainIdListJSON;
    }

    if (!Util.isUnset(request.enableWaf)) {
      query["EnableWaf"] = request.enableWaf;
    }

    if (!Util.isUnset(request.fallback)) {
      query["Fallback"] = request.fallback;
    }

    if (!Util.isUnset(request.fallbackServicesShrink)) {
      query["FallbackServices"] = request.fallbackServicesShrink;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policies)) {
      query["Policies"] = request.policies;
    }

    if (!Util.isUnset(request.predicatesShrink)) {
      query["Predicates"] = request.predicatesShrink;
    }

    if (!Util.isUnset(request.redirectJSONShrink)) {
      query["RedirectJSON"] = request.redirectJSONShrink;
    }

    if (!Util.isUnset(request.routeOrder)) {
      query["RouteOrder"] = request.routeOrder;
    }

    if (!Util.isUnset(request.routeType)) {
      query["RouteType"] = request.routeType;
    }

    if (!Util.isUnset(request.servicesShrink)) {
      query["Services"] = request.servicesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGatewayRouteResponse>(await this.callApi(params, req, runtime), new AddGatewayRouteResponse({}));
  }

  async addGatewayRoute(request: AddGatewayRouteRequest): Promise<AddGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGatewayRouteWithOptions(request, runtime);
  }

  async addGatewayServiceVersionWithOptions(request: AddGatewayServiceVersionRequest, runtime: $Util.RuntimeOptions): Promise<AddGatewayServiceVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGatewayServiceVersion",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGatewayServiceVersionResponse>(await this.callApi(params, req, runtime), new AddGatewayServiceVersionResponse({}));
  }

  async addGatewayServiceVersion(request: AddGatewayServiceVersionRequest): Promise<AddGatewayServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGatewayServiceVersionWithOptions(request, runtime);
  }

  async addGatewaySlbWithOptions(request: AddGatewaySlbRequest, runtime: $Util.RuntimeOptions): Promise<AddGatewaySlbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.httpPort)) {
      query["HttpPort"] = request.httpPort;
    }

    if (!Util.isUnset(request.httpsPort)) {
      query["HttpsPort"] = request.httpsPort;
    }

    if (!Util.isUnset(request.httpsVServerGroupId)) {
      query["HttpsVServerGroupId"] = request.httpsVServerGroupId;
    }

    if (!Util.isUnset(request.serviceWeight)) {
      query["ServiceWeight"] = request.serviceWeight;
    }

    if (!Util.isUnset(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGatewaySlb",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGatewaySlbResponse>(await this.callApi(params, req, runtime), new AddGatewaySlbResponse({}));
  }

  async addGatewaySlb(request: AddGatewaySlbRequest): Promise<AddGatewaySlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGatewaySlbWithOptions(request, runtime);
  }

  async addMigrationTaskWithOptions(request: AddMigrationTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddMigrationTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.originInstanceAddress)) {
      query["OriginInstanceAddress"] = request.originInstanceAddress;
    }

    if (!Util.isUnset(request.originInstanceName)) {
      query["OriginInstanceName"] = request.originInstanceName;
    }

    if (!Util.isUnset(request.originInstanceNamespace)) {
      query["OriginInstanceNamespace"] = request.originInstanceNamespace;
    }

    if (!Util.isUnset(request.projectDesc)) {
      query["ProjectDesc"] = request.projectDesc;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!Util.isUnset(request.targetClusterName)) {
      query["TargetClusterName"] = request.targetClusterName;
    }

    if (!Util.isUnset(request.targetClusterUrl)) {
      query["TargetClusterUrl"] = request.targetClusterUrl;
    }

    if (!Util.isUnset(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddMigrationTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMigrationTaskResponse>(await this.callApi(params, req, runtime), new AddMigrationTaskResponse({}));
  }

  async addMigrationTask(request: AddMigrationTaskRequest): Promise<AddMigrationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMigrationTaskWithOptions(request, runtime);
  }

  async addMockRuleWithOptions(request: AddMockRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddMockRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.consumerAppIds)) {
      query["ConsumerAppIds"] = request.consumerAppIds;
    }

    if (!Util.isUnset(request.dubboMockItems)) {
      query["DubboMockItems"] = request.dubboMockItems;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.extraJson)) {
      query["ExtraJson"] = request.extraJson;
    }

    if (!Util.isUnset(request.mockType)) {
      query["MockType"] = request.mockType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.providerAppId)) {
      query["ProviderAppId"] = request.providerAppId;
    }

    if (!Util.isUnset(request.providerAppName)) {
      query["ProviderAppName"] = request.providerAppName;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.scMockItems)) {
      query["ScMockItems"] = request.scMockItems;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddMockRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMockRuleResponse>(await this.callApi(params, req, runtime), new AddMockRuleResponse({}));
  }

  async addMockRule(request: AddMockRuleRequest): Promise<AddMockRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMockRuleWithOptions(request, runtime);
  }

  async addSSLCertWithOptions(request: AddSSLCertRequest, runtime: $Util.RuntimeOptions): Promise<AddSSLCertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSSLCert",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSSLCertResponse>(await this.callApi(params, req, runtime), new AddSSLCertResponse({}));
  }

  async addSSLCert(request: AddSSLCertRequest): Promise<AddSSLCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSSLCertWithOptions(request, runtime);
  }

  async addSecurityGroupRuleWithOptions(request: AddSecurityGroupRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddSecurityGroupRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSecurityGroupRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new AddSecurityGroupRuleResponse({}));
  }

  async addSecurityGroupRule(request: AddSecurityGroupRuleRequest): Promise<AddSecurityGroupRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSecurityGroupRuleWithOptions(request, runtime);
  }

  async addServiceSourceWithOptions(tmpReq: AddServiceSourceRequest, runtime: $Util.RuntimeOptions): Promise<AddServiceSourceResponse> {
    Util.validateModel(tmpReq);
    let request = new AddServiceSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.groupList)) {
      request.groupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupList, "GroupList", "json");
    }

    if (!Util.isUnset(tmpReq.ingressOptionsRequest)) {
      request.ingressOptionsRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ingressOptionsRequest, "IngressOptionsRequest", "json");
    }

    if (!Util.isUnset(tmpReq.pathList)) {
      request.pathListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pathList, "PathList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.groupListShrink)) {
      query["GroupList"] = request.groupListShrink;
    }

    if (!Util.isUnset(request.ingressOptionsRequestShrink)) {
      query["IngressOptionsRequest"] = request.ingressOptionsRequestShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pathListShrink)) {
      query["PathList"] = request.pathListShrink;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddServiceSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddServiceSourceResponse>(await this.callApi(params, req, runtime), new AddServiceSourceResponse({}));
  }

  async addServiceSource(request: AddServiceSourceRequest): Promise<AddServiceSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addServiceSourceWithOptions(request, runtime);
  }

  async applyGatewayRouteWithOptions(request: ApplyGatewayRouteRequest, runtime: $Util.RuntimeOptions): Promise<ApplyGatewayRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyGatewayRouteResponse>(await this.callApi(params, req, runtime), new ApplyGatewayRouteResponse({}));
  }

  async applyGatewayRoute(request: ApplyGatewayRouteRequest): Promise<ApplyGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyGatewayRouteWithOptions(request, runtime);
  }

  async applyTagPoliciesWithOptions(request: ApplyTagPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ApplyTagPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyTagPolicies",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyTagPoliciesResponse>(await this.callApi(params, req, runtime), new ApplyTagPoliciesResponse({}));
  }

  async applyTagPolicies(request: ApplyTagPoliciesRequest): Promise<ApplyTagPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyTagPoliciesWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request CloneNacosConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CloneNacosConfigResponse
   */
  async cloneNacosConfigWithOptions(request: CloneNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<CloneNacosConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.originNamespaceId)) {
      query["OriginNamespaceId"] = request.originNamespaceId;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.targetNamespaceId)) {
      query["TargetNamespaceId"] = request.targetNamespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloneNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloneNacosConfigResponse>(await this.callApi(params, req, runtime), new CloneNacosConfigResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request CloneNacosConfigRequest
    * @return CloneNacosConfigResponse
   */
  async cloneNacosConfig(request: CloneNacosConfigRequest): Promise<CloneNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneNacosConfigWithOptions(request, runtime);
  }

  async createApplicationWithOptions(request: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.sentinelEnable)) {
      query["SentinelEnable"] = request.sentinelEnable;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.switchEnable)) {
      query["SwitchEnable"] = request.switchEnable;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplication",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationResponse>(await this.callApi(params, req, runtime), new CreateApplicationResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
    * Before you call this API operation, you must make sure that you fully understand the billing methods and pricing of MSE.
    *
    * @param request CreateClusterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateClusterResponse
   */
  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterSpecification)) {
      query["ClusterSpecification"] = request.clusterSpecification;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.clusterVersion)) {
      query["ClusterVersion"] = request.clusterVersion;
    }

    if (!Util.isUnset(request.connectionType)) {
      query["ConnectionType"] = request.connectionType;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.instanceCount)) {
      query["InstanceCount"] = request.instanceCount;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    if (!Util.isUnset(request.netType)) {
      query["NetType"] = request.netType;
    }

    if (!Util.isUnset(request.privateSlbSpecification)) {
      query["PrivateSlbSpecification"] = request.privateSlbSpecification;
    }

    if (!Util.isUnset(request.pubNetworkFlow)) {
      query["PubNetworkFlow"] = request.pubNetworkFlow;
    }

    if (!Util.isUnset(request.pubSlbSpecification)) {
      query["PubSlbSpecification"] = request.pubSlbSpecification;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
    * Before you call this API operation, you must make sure that you fully understand the billing methods and pricing of MSE.
    *
    * @param request CreateClusterRequest
    * @return CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  async createEngineNamespaceWithOptions(request: CreateEngineNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEngineNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.serviceCount)) {
      query["ServiceCount"] = request.serviceCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEngineNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEngineNamespaceResponse>(await this.callApi(params, req, runtime), new CreateEngineNamespaceResponse({}));
  }

  async createEngineNamespace(request: CreateEngineNamespaceRequest): Promise<CreateEngineNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEngineNamespaceWithOptions(request, runtime);
  }

  /**
    * @deprecated : CreateMseServiceApplication is deprecated, please use mse::2019-05-31::CreateApplication instead.
    *
    * @param request CreateMseServiceApplicationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateMseServiceApplicationResponse
   */
  // Deprecated
  async createMseServiceApplicationWithOptions(request: CreateMseServiceApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateMseServiceApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.sentinelEnable)) {
      query["SentinelEnable"] = request.sentinelEnable;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.switchEnable)) {
      query["SwitchEnable"] = request.switchEnable;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMseServiceApplication",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMseServiceApplicationResponse>(await this.callApi(params, req, runtime), new CreateMseServiceApplicationResponse({}));
  }

  /**
    * @deprecated : CreateMseServiceApplication is deprecated, please use mse::2019-05-31::CreateApplication instead.
    *
    * @param request CreateMseServiceApplicationRequest
    * @return CreateMseServiceApplicationResponse
   */
  // Deprecated
  async createMseServiceApplication(request: CreateMseServiceApplicationRequest): Promise<CreateMseServiceApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMseServiceApplicationWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request CreateNacosConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateNacosConfigResponse
   */
  async createNacosConfigWithOptions(request: CreateNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateNacosConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.betaIps)) {
      query["BetaIps"] = request.betaIps;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNacosConfigResponse>(await this.callApi(params, req, runtime), new CreateNacosConfigResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request CreateNacosConfigRequest
    * @return CreateNacosConfigResponse
   */
  async createNacosConfig(request: CreateNacosConfigRequest): Promise<CreateNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNacosConfigWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request CreateNacosInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateNacosInstanceResponse
   */
  async createNacosInstanceWithOptions(request: CreateNacosInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNacosInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.ephemeral)) {
      query["Ephemeral"] = request.ephemeral;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.weight)) {
      query["Weight"] = request.weight;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.metadata)) {
      body["Metadata"] = request.metadata;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateNacosInstance",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNacosInstanceResponse>(await this.callApi(params, req, runtime), new CreateNacosInstanceResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request CreateNacosInstanceRequest
    * @return CreateNacosInstanceResponse
   */
  async createNacosInstance(request: CreateNacosInstanceRequest): Promise<CreateNacosInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNacosInstanceWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request CreateNacosServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateNacosServiceResponse
   */
  async createNacosServiceWithOptions(request: CreateNacosServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNacosServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.ephemeral)) {
      query["Ephemeral"] = request.ephemeral;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.protectThreshold)) {
      query["ProtectThreshold"] = request.protectThreshold;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNacosService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNacosServiceResponse>(await this.callApi(params, req, runtime), new CreateNacosServiceResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request CreateNacosServiceRequest
    * @return CreateNacosServiceResponse
   */
  async createNacosService(request: CreateNacosServiceRequest): Promise<CreateNacosServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNacosServiceWithOptions(request, runtime);
  }

  async createOrUpdateSwimmingLaneWithOptions(tmpReq: CreateOrUpdateSwimmingLaneRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateSwimmingLaneResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateOrUpdateSwimmingLaneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.gatewaySwimmingLaneRouteJson)) {
      request.gatewaySwimmingLaneRouteJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.gatewaySwimmingLaneRouteJson, "GatewaySwimmingLaneRouteJson", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.enableRules)) {
      query["EnableRules"] = request.enableRules;
    }

    if (!Util.isUnset(request.entryRule)) {
      query["EntryRule"] = request.entryRule;
    }

    if (!Util.isUnset(request.entryRules)) {
      query["EntryRules"] = request.entryRules;
    }

    if (!Util.isUnset(request.gatewaySwimmingLaneRouteJsonShrink)) {
      query["GatewaySwimmingLaneRouteJson"] = request.gatewaySwimmingLaneRouteJsonShrink;
    }

    if (!Util.isUnset(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!Util.isUnset(request.gmtModified)) {
      query["GmtModified"] = request.gmtModified;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.licenseKey)) {
      query["LicenseKey"] = request.licenseKey;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateSwimmingLane",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateSwimmingLaneResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateSwimmingLaneResponse({}));
  }

  async createOrUpdateSwimmingLane(request: CreateOrUpdateSwimmingLaneRequest): Promise<CreateOrUpdateSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateSwimmingLaneWithOptions(request, runtime);
  }

  async createOrUpdateSwimmingLaneGroupWithOptions(request: CreateOrUpdateSwimmingLaneGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateSwimmingLaneGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!Util.isUnset(request.dbGrayEnable)) {
      query["DbGrayEnable"] = request.dbGrayEnable;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.entryApp)) {
      query["EntryApp"] = request.entryApp;
    }

    if (!Util.isUnset(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!Util.isUnset(request.gmtModified)) {
      query["GmtModified"] = request.gmtModified;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.licenseKey)) {
      query["LicenseKey"] = request.licenseKey;
    }

    if (!Util.isUnset(request.messageQueueFilterSide)) {
      query["MessageQueueFilterSide"] = request.messageQueueFilterSide;
    }

    if (!Util.isUnset(request.messageQueueGrayEnable)) {
      query["MessageQueueGrayEnable"] = request.messageQueueGrayEnable;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.recordCanaryDetail)) {
      query["RecordCanaryDetail"] = request.recordCanaryDetail;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateSwimmingLaneGroup",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateSwimmingLaneGroupResponse({}));
  }

  async createOrUpdateSwimmingLaneGroup(request: CreateOrUpdateSwimmingLaneGroupRequest): Promise<CreateOrUpdateSwimmingLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateSwimmingLaneGroupWithOptions(request, runtime);
  }

  async createZnodeWithOptions(request: CreateZnodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateZnodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateZnode",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateZnodeResponse>(await this.callApi(params, req, runtime), new CreateZnodeResponse({}));
  }

  async createZnode(request: CreateZnodeRequest): Promise<CreateZnodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createZnodeWithOptions(request, runtime);
  }

  async deleteAuthResourceWithOptions(request: DeleteAuthResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAuthResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAuthResource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAuthResourceResponse>(await this.callApi(params, req, runtime), new DeleteAuthResourceResponse({}));
  }

  async deleteAuthResource(request: DeleteAuthResourceRequest): Promise<DeleteAuthResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAuthResourceWithOptions(request, runtime);
  }

  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  async deleteEngineNamespaceWithOptions(request: DeleteEngineNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEngineNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEngineNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEngineNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteEngineNamespaceResponse({}));
  }

  async deleteEngineNamespace(request: DeleteEngineNamespaceRequest): Promise<DeleteEngineNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEngineNamespaceWithOptions(request, runtime);
  }

  async deleteGatewayWithOptions(request: DeleteGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.deleteSlb)) {
      query["DeleteSlb"] = request.deleteSlb;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGateway",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayResponse>(await this.callApi(params, req, runtime), new DeleteGatewayResponse({}));
  }

  async deleteGateway(request: DeleteGatewayRequest): Promise<DeleteGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayWithOptions(request, runtime);
  }

  async deleteGatewayAuthConsumerWithOptions(request: DeleteGatewayAuthConsumerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayAuthConsumerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayAuthConsumer",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayAuthConsumerResponse>(await this.callApi(params, req, runtime), new DeleteGatewayAuthConsumerResponse({}));
  }

  async deleteGatewayAuthConsumer(request: DeleteGatewayAuthConsumerRequest): Promise<DeleteGatewayAuthConsumerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayAuthConsumerWithOptions(request, runtime);
  }

  async deleteGatewayAuthConsumerResourceWithOptions(request: DeleteGatewayAuthConsumerResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayAuthConsumerResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.idList)) {
      query["IdList"] = request.idList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayAuthConsumerResource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayAuthConsumerResourceResponse>(await this.callApi(params, req, runtime), new DeleteGatewayAuthConsumerResourceResponse({}));
  }

  async deleteGatewayAuthConsumerResource(request: DeleteGatewayAuthConsumerResourceRequest): Promise<DeleteGatewayAuthConsumerResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayAuthConsumerResourceWithOptions(request, runtime);
  }

  async deleteGatewayDomainWithOptions(request: DeleteGatewayDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayDomain",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayDomainResponse>(await this.callApi(params, req, runtime), new DeleteGatewayDomainResponse({}));
  }

  async deleteGatewayDomain(request: DeleteGatewayDomainRequest): Promise<DeleteGatewayDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayDomainWithOptions(request, runtime);
  }

  async deleteGatewayRouteWithOptions(request: DeleteGatewayRouteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayRouteResponse>(await this.callApi(params, req, runtime), new DeleteGatewayRouteResponse({}));
  }

  async deleteGatewayRoute(request: DeleteGatewayRouteRequest): Promise<DeleteGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayRouteWithOptions(request, runtime);
  }

  async deleteGatewayServiceWithOptions(request: DeleteGatewayServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayServiceResponse>(await this.callApi(params, req, runtime), new DeleteGatewayServiceResponse({}));
  }

  async deleteGatewayService(request: DeleteGatewayServiceRequest): Promise<DeleteGatewayServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayServiceWithOptions(request, runtime);
  }

  async deleteGatewayServiceVersionWithOptions(request: DeleteGatewayServiceVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayServiceVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayServiceVersion",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayServiceVersionResponse>(await this.callApi(params, req, runtime), new DeleteGatewayServiceVersionResponse({}));
  }

  async deleteGatewayServiceVersion(request: DeleteGatewayServiceVersionRequest): Promise<DeleteGatewayServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayServiceVersionWithOptions(request, runtime);
  }

  async deleteGatewaySlbWithOptions(request: DeleteGatewaySlbRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewaySlbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.deleteSlb)) {
      query["DeleteSlb"] = request.deleteSlb;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewaySlb",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewaySlbResponse>(await this.callApi(params, req, runtime), new DeleteGatewaySlbResponse({}));
  }

  async deleteGatewaySlb(request: DeleteGatewaySlbRequest): Promise<DeleteGatewaySlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewaySlbWithOptions(request, runtime);
  }

  async deleteMigrationTaskWithOptions(request: DeleteMigrationTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMigrationTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMigrationTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMigrationTaskResponse>(await this.callApi(params, req, runtime), new DeleteMigrationTaskResponse({}));
  }

  async deleteMigrationTask(request: DeleteMigrationTaskRequest): Promise<DeleteMigrationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMigrationTaskWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request DeleteNacosConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteNacosConfigResponse
   */
  async deleteNacosConfigWithOptions(request: DeleteNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNacosConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.beta)) {
      query["Beta"] = request.beta;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNacosConfigResponse>(await this.callApi(params, req, runtime), new DeleteNacosConfigResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request DeleteNacosConfigRequest
    * @return DeleteNacosConfigResponse
   */
  async deleteNacosConfig(request: DeleteNacosConfigRequest): Promise<DeleteNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNacosConfigWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request DeleteNacosConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteNacosConfigsResponse
   */
  async deleteNacosConfigsWithOptions(request: DeleteNacosConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNacosConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNacosConfigs",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNacosConfigsResponse>(await this.callApi(params, req, runtime), new DeleteNacosConfigsResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request DeleteNacosConfigsRequest
    * @return DeleteNacosConfigsResponse
   */
  async deleteNacosConfigs(request: DeleteNacosConfigsRequest): Promise<DeleteNacosConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNacosConfigsWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request DeleteNacosInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteNacosInstanceResponse
   */
  async deleteNacosInstanceWithOptions(request: DeleteNacosInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNacosInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.ephemeral)) {
      query["Ephemeral"] = request.ephemeral;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNacosInstance",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNacosInstanceResponse>(await this.callApi(params, req, runtime), new DeleteNacosInstanceResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request DeleteNacosInstanceRequest
    * @return DeleteNacosInstanceResponse
   */
  async deleteNacosInstance(request: DeleteNacosInstanceRequest): Promise<DeleteNacosInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNacosInstanceWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request DeleteNacosServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteNacosServiceResponse
   */
  async deleteNacosServiceWithOptions(request: DeleteNacosServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNacosServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNacosService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNacosServiceResponse>(await this.callApi(params, req, runtime), new DeleteNacosServiceResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request DeleteNacosServiceRequest
    * @return DeleteNacosServiceResponse
   */
  async deleteNacosService(request: DeleteNacosServiceRequest): Promise<DeleteNacosServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNacosServiceWithOptions(request, runtime);
  }

  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteNamespaceResponse({}));
  }

  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  async deleteSecurityGroupRuleWithOptions(request: DeleteSecurityGroupRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityGroupRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecurityGroupRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new DeleteSecurityGroupRuleResponse({}));
  }

  async deleteSecurityGroupRule(request: DeleteSecurityGroupRuleRequest): Promise<DeleteSecurityGroupRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityGroupRuleWithOptions(request, runtime);
  }

  async deleteServiceSourceWithOptions(request: DeleteServiceSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceSourceResponse>(await this.callApi(params, req, runtime), new DeleteServiceSourceResponse({}));
  }

  async deleteServiceSource(request: DeleteServiceSourceRequest): Promise<DeleteServiceSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceSourceWithOptions(request, runtime);
  }

  async deleteSwimmingLaneWithOptions(request: DeleteSwimmingLaneRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSwimmingLaneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSwimmingLane",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSwimmingLaneResponse>(await this.callApi(params, req, runtime), new DeleteSwimmingLaneResponse({}));
  }

  async deleteSwimmingLane(request: DeleteSwimmingLaneRequest): Promise<DeleteSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSwimmingLaneWithOptions(request, runtime);
  }

  async deleteSwimmingLaneGroupWithOptions(request: DeleteSwimmingLaneGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSwimmingLaneGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSwimmingLaneGroup",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new DeleteSwimmingLaneGroupResponse({}));
  }

  async deleteSwimmingLaneGroup(request: DeleteSwimmingLaneGroupRequest): Promise<DeleteSwimmingLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSwimmingLaneGroupWithOptions(request, runtime);
  }

  async deleteZnodeWithOptions(request: DeleteZnodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteZnodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteZnode",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteZnodeResponse>(await this.callApi(params, req, runtime), new DeleteZnodeResponse({}));
  }

  async deleteZnode(request: DeleteZnodeRequest): Promise<DeleteZnodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteZnodeWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ExportNacosConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ExportNacosConfigResponse
   */
  async exportNacosConfigWithOptions(request: ExportNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<ExportNacosConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportNacosConfigResponse>(await this.callApi(params, req, runtime), new ExportNacosConfigResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ExportNacosConfigRequest
    * @return ExportNacosConfigResponse
   */
  async exportNacosConfig(request: ExportNacosConfigRequest): Promise<ExportNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportNacosConfigWithOptions(request, runtime);
  }

  /**
    * Only one task can run at a time.
    *
    * @param request ExportZookeeperDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ExportZookeeperDataResponse
   */
  async exportZookeeperDataWithOptions(request: ExportZookeeperDataRequest, runtime: $Util.RuntimeOptions): Promise<ExportZookeeperDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.exportType)) {
      query["ExportType"] = request.exportType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportZookeeperData",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportZookeeperDataResponse>(await this.callApi(params, req, runtime), new ExportZookeeperDataResponse({}));
  }

  /**
    * Only one task can run at a time.
    *
    * @param request ExportZookeeperDataRequest
    * @return ExportZookeeperDataResponse
   */
  async exportZookeeperData(request: ExportZookeeperDataRequest): Promise<ExportZookeeperDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportZookeeperDataWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the rules for graceful start and shutdown.
    *
    * @param request FetchLosslessRuleListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return FetchLosslessRuleListResponse
   */
  async fetchLosslessRuleListWithOptions(request: FetchLosslessRuleListRequest, runtime: $Util.RuntimeOptions): Promise<FetchLosslessRuleListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FetchLosslessRuleList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FetchLosslessRuleListResponse>(await this.callApi(params, req, runtime), new FetchLosslessRuleListResponse({}));
  }

  /**
    * You can call this operation to query the rules for graceful start and shutdown.
    *
    * @param request FetchLosslessRuleListRequest
    * @return FetchLosslessRuleListResponse
   */
  async fetchLosslessRuleList(request: FetchLosslessRuleListRequest): Promise<FetchLosslessRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchLosslessRuleListWithOptions(request, runtime);
  }

  async getAppMessageQueueRouteWithOptions(request: GetAppMessageQueueRouteRequest, runtime: $Util.RuntimeOptions): Promise<GetAppMessageQueueRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppMessageQueueRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppMessageQueueRouteResponse>(await this.callApi(params, req, runtime), new GetAppMessageQueueRouteResponse({}));
  }

  async getAppMessageQueueRoute(request: GetAppMessageQueueRouteRequest): Promise<GetAppMessageQueueRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppMessageQueueRouteWithOptions(request, runtime);
  }

  async getApplicationListWithOptions(request: GetApplicationListRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.sentinelEnable)) {
      query["SentinelEnable"] = request.sentinelEnable;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.switchEnable)) {
      query["SwitchEnable"] = request.switchEnable;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationListResponse>(await this.callApi(params, req, runtime), new GetApplicationListResponse({}));
  }

  async getApplicationList(request: GetApplicationListRequest): Promise<GetApplicationListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationListWithOptions(request, runtime);
  }

  async getApplicationListWithMetircsWithOptions(request: GetApplicationListWithMetircsRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationListWithMetircsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationListWithMetircs",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationListWithMetircsResponse>(await this.callApi(params, req, runtime), new GetApplicationListWithMetircsResponse({}));
  }

  async getApplicationListWithMetircs(request: GetApplicationListWithMetircsRequest): Promise<GetApplicationListWithMetircsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationListWithMetircsWithOptions(request, runtime);
  }

  async getBlackWhiteListWithOptions(request: GetBlackWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<GetBlackWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.isWhite)) {
      query["IsWhite"] = request.isWhite;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBlackWhiteList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBlackWhiteListResponse>(await this.callApi(params, req, runtime), new GetBlackWhiteListResponse({}));
  }

  async getBlackWhiteList(request: GetBlackWhiteListRequest): Promise<GetBlackWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBlackWhiteListWithOptions(request, runtime);
  }

  async getEngineNamepaceWithOptions(request: GetEngineNamepaceRequest, runtime: $Util.RuntimeOptions): Promise<GetEngineNamepaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEngineNamepace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEngineNamepaceResponse>(await this.callApi(params, req, runtime), new GetEngineNamepaceResponse({}));
  }

  async getEngineNamepace(request: GetEngineNamepaceRequest): Promise<GetEngineNamepaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEngineNamepaceWithOptions(request, runtime);
  }

  async getGatewayWithOptions(request: GetGatewayRequest, runtime: $Util.RuntimeOptions): Promise<GetGatewayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGateway",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGatewayResponse>(await this.callApi(params, req, runtime), new GetGatewayResponse({}));
  }

  async getGateway(request: GetGatewayRequest): Promise<GetGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGatewayWithOptions(request, runtime);
  }

  async getGatewayAuthConsumerDetailWithOptions(request: GetGatewayAuthConsumerDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetGatewayAuthConsumerDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGatewayAuthConsumerDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGatewayAuthConsumerDetailResponse>(await this.callApi(params, req, runtime), new GetGatewayAuthConsumerDetailResponse({}));
  }

  async getGatewayAuthConsumerDetail(request: GetGatewayAuthConsumerDetailRequest): Promise<GetGatewayAuthConsumerDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGatewayAuthConsumerDetailWithOptions(request, runtime);
  }

  async getGatewayDomainDetailWithOptions(request: GetGatewayDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetGatewayDomainDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGatewayDomainDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGatewayDomainDetailResponse>(await this.callApi(params, req, runtime), new GetGatewayDomainDetailResponse({}));
  }

  async getGatewayDomainDetail(request: GetGatewayDomainDetailRequest): Promise<GetGatewayDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGatewayDomainDetailWithOptions(request, runtime);
  }

  async getGatewayOptionWithOptions(request: GetGatewayOptionRequest, runtime: $Util.RuntimeOptions): Promise<GetGatewayOptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGatewayOption",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGatewayOptionResponse>(await this.callApi(params, req, runtime), new GetGatewayOptionResponse({}));
  }

  async getGatewayOption(request: GetGatewayOptionRequest): Promise<GetGatewayOptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGatewayOptionWithOptions(request, runtime);
  }

  async getGatewayRouteDetailWithOptions(request: GetGatewayRouteDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetGatewayRouteDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGatewayRouteDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGatewayRouteDetailResponse>(await this.callApi(params, req, runtime), new GetGatewayRouteDetailResponse({}));
  }

  async getGatewayRouteDetail(request: GetGatewayRouteDetailRequest): Promise<GetGatewayRouteDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGatewayRouteDetailWithOptions(request, runtime);
  }

  async getGatewayServiceDetailWithOptions(request: GetGatewayServiceDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetGatewayServiceDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGatewayServiceDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGatewayServiceDetailResponse>(await this.callApi(params, req, runtime), new GetGatewayServiceDetailResponse({}));
  }

  async getGatewayServiceDetail(request: GetGatewayServiceDetailRequest): Promise<GetGatewayServiceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGatewayServiceDetailWithOptions(request, runtime);
  }

  async getGovernanceKubernetesClusterWithOptions(request: GetGovernanceKubernetesClusterRequest, runtime: $Util.RuntimeOptions): Promise<GetGovernanceKubernetesClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGovernanceKubernetesCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGovernanceKubernetesClusterResponse>(await this.callApi(params, req, runtime), new GetGovernanceKubernetesClusterResponse({}));
  }

  async getGovernanceKubernetesCluster(request: GetGovernanceKubernetesClusterRequest): Promise<GetGovernanceKubernetesClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGovernanceKubernetesClusterWithOptions(request, runtime);
  }

  async getImageWithOptions(request: GetImageRequest, runtime: $Util.RuntimeOptions): Promise<GetImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImage",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImageResponse>(await this.callApi(params, req, runtime), new GetImageResponse({}));
  }

  async getImage(request: GetImageRequest): Promise<GetImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request GetImportFileUrlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetImportFileUrlResponse
   */
  async getImportFileUrlWithOptions(request: GetImportFileUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetImportFileUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImportFileUrl",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImportFileUrlResponse>(await this.callApi(params, req, runtime), new GetImportFileUrlResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request GetImportFileUrlRequest
    * @return GetImportFileUrlResponse
   */
  async getImportFileUrl(request: GetImportFileUrlRequest): Promise<GetImportFileUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImportFileUrlWithOptions(request, runtime);
  }

  async getKubernetesSourceWithOptions(request: GetKubernetesSourceRequest, runtime: $Util.RuntimeOptions): Promise<GetKubernetesSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetKubernetesSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetKubernetesSourceResponse>(await this.callApi(params, req, runtime), new GetKubernetesSourceResponse({}));
  }

  async getKubernetesSource(request: GetKubernetesSourceRequest): Promise<GetKubernetesSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKubernetesSourceWithOptions(request, runtime);
  }

  async getMseFeatureSwitchWithOptions(request: GetMseFeatureSwitchRequest, runtime: $Util.RuntimeOptions): Promise<GetMseFeatureSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMseFeatureSwitch",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMseFeatureSwitchResponse>(await this.callApi(params, req, runtime), new GetMseFeatureSwitchResponse({}));
  }

  async getMseFeatureSwitch(request: GetMseFeatureSwitchRequest): Promise<GetMseFeatureSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMseFeatureSwitchWithOptions(request, runtime);
  }

  async getMseSourceWithOptions(request: GetMseSourceRequest, runtime: $Util.RuntimeOptions): Promise<GetMseSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMseSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMseSourceResponse>(await this.callApi(params, req, runtime), new GetMseSourceResponse({}));
  }

  async getMseSource(request: GetMseSourceRequest): Promise<GetMseSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMseSourceWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request GetNacosConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetNacosConfigResponse
   */
  async getNacosConfigWithOptions(request: GetNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetNacosConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.beta)) {
      query["Beta"] = request.beta;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNacosConfigResponse>(await this.callApi(params, req, runtime), new GetNacosConfigResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request GetNacosConfigRequest
    * @return GetNacosConfigResponse
   */
  async getNacosConfig(request: GetNacosConfigRequest): Promise<GetNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNacosConfigWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request GetNacosHistoryConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetNacosHistoryConfigResponse
   */
  async getNacosHistoryConfigWithOptions(request: GetNacosHistoryConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetNacosHistoryConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.nid)) {
      query["Nid"] = request.nid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNacosHistoryConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNacosHistoryConfigResponse>(await this.callApi(params, req, runtime), new GetNacosHistoryConfigResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request GetNacosHistoryConfigRequest
    * @return GetNacosHistoryConfigResponse
   */
  async getNacosHistoryConfig(request: GetNacosHistoryConfigRequest): Promise<GetNacosHistoryConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNacosHistoryConfigWithOptions(request, runtime);
  }

  /**
    * You can call the GetOverview operation to query overview information about service governance.
    *
    * @param request GetOverviewRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetOverviewResponse
   */
  async getOverviewWithOptions(request: GetOverviewRequest, runtime: $Util.RuntimeOptions): Promise<GetOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOverview",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOverviewResponse>(await this.callApi(params, req, runtime), new GetOverviewResponse({}));
  }

  /**
    * You can call the GetOverview operation to query overview information about service governance.
    *
    * @param request GetOverviewRequest
    * @return GetOverviewResponse
   */
  async getOverview(request: GetOverviewRequest): Promise<GetOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOverviewWithOptions(request, runtime);
  }

  async getPluginConfigWithOptions(request: GetPluginConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetPluginConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPluginConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPluginConfigResponse>(await this.callApi(params, req, runtime), new GetPluginConfigResponse({}));
  }

  async getPluginConfig(request: GetPluginConfigRequest): Promise<GetPluginConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPluginConfigWithOptions(request, runtime);
  }

  async getPluginsWithOptions(request: GetPluginsRequest, runtime: $Util.RuntimeOptions): Promise<GetPluginsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.enableOnly)) {
      query["EnableOnly"] = request.enableOnly;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPlugins",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPluginsResponse>(await this.callApi(params, req, runtime), new GetPluginsResponse({}));
  }

  async getPlugins(request: GetPluginsRequest): Promise<GetPluginsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPluginsWithOptions(request, runtime);
  }

  async getServiceListWithOptions(request: GetServiceListRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceListResponse>(await this.callApi(params, req, runtime), new GetServiceListResponse({}));
  }

  async getServiceList(request: GetServiceListRequest): Promise<GetServiceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceListWithOptions(request, runtime);
  }

  async getServiceListenersWithOptions(request: GetServiceListenersRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceListenersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.hasIpCount)) {
      query["HasIpCount"] = request.hasIpCount;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceListeners",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceListenersResponse>(await this.callApi(params, req, runtime), new GetServiceListenersResponse({}));
  }

  async getServiceListeners(request: GetServiceListenersRequest): Promise<GetServiceListenersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceListenersWithOptions(request, runtime);
  }

  async getTagsBySwimmingLaneGroupIdWithOptions(request: GetTagsBySwimmingLaneGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<GetTagsBySwimmingLaneGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTagsBySwimmingLaneGroupId",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTagsBySwimmingLaneGroupIdResponse>(await this.callApi(params, req, runtime), new GetTagsBySwimmingLaneGroupIdResponse({}));
  }

  async getTagsBySwimmingLaneGroupId(request: GetTagsBySwimmingLaneGroupIdRequest): Promise<GetTagsBySwimmingLaneGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagsBySwimmingLaneGroupIdWithOptions(request, runtime);
  }

  async getZookeeperDataImportUrlWithOptions(request: GetZookeeperDataImportUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetZookeeperDataImportUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetZookeeperDataImportUrl",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetZookeeperDataImportUrlResponse>(await this.callApi(params, req, runtime), new GetZookeeperDataImportUrlResponse({}));
  }

  async getZookeeperDataImportUrl(request: GetZookeeperDataImportUrlRequest): Promise<GetZookeeperDataImportUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getZookeeperDataImportUrlWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ImportNacosConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ImportNacosConfigResponse
   */
  async importNacosConfigWithOptions(request: ImportNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<ImportNacosConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportNacosConfigResponse>(await this.callApi(params, req, runtime), new ImportNacosConfigResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ImportNacosConfigRequest
    * @return ImportNacosConfigResponse
   */
  async importNacosConfig(request: ImportNacosConfigRequest): Promise<ImportNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importNacosConfigWithOptions(request, runtime);
  }

  async importServicesWithOptions(tmpReq: ImportServicesRequest, runtime: $Util.RuntimeOptions): Promise<ImportServicesResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportServicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.serviceList)) {
      request.serviceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serviceList, "ServiceList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.fcServiceName)) {
      query["FcServiceName"] = request.fcServiceName;
    }

    if (!Util.isUnset(request.fcVersion)) {
      query["FcVersion"] = request.fcVersion;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.serviceListShrink)) {
      query["ServiceList"] = request.serviceListShrink;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.tlsSetting)) {
      query["TlsSetting"] = request.tlsSetting;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportServices",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportServicesResponse>(await this.callApi(params, req, runtime), new ImportServicesResponse({}));
  }

  async importServices(request: ImportServicesRequest): Promise<ImportServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importServicesWithOptions(request, runtime);
  }

  /**
    * **
    * **Danger** This operation clears existing data. Exercise caution when you call this API operation.
    *
    * @param request ImportZookeeperDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ImportZookeeperDataResponse
   */
  async importZookeeperDataWithOptions(request: ImportZookeeperDataRequest, runtime: $Util.RuntimeOptions): Promise<ImportZookeeperDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportZookeeperData",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportZookeeperDataResponse>(await this.callApi(params, req, runtime), new ImportZookeeperDataResponse({}));
  }

  /**
    * **
    * **Danger** This operation clears existing data. Exercise caution when you call this API operation.
    *
    * @param request ImportZookeeperDataRequest
    * @return ImportZookeeperDataResponse
   */
  async importZookeeperData(request: ImportZookeeperDataRequest): Promise<ImportZookeeperDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importZookeeperDataWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListAnsInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAnsInstancesResponse
   */
  async listAnsInstancesWithOptions(request: ListAnsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListAnsInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAnsInstances",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAnsInstancesResponse>(await this.callApi(params, req, runtime), new ListAnsInstancesResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListAnsInstancesRequest
    * @return ListAnsInstancesResponse
   */
  async listAnsInstances(request: ListAnsInstancesRequest): Promise<ListAnsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAnsInstancesWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListAnsServiceClustersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAnsServiceClustersResponse
   */
  async listAnsServiceClustersWithOptions(request: ListAnsServiceClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListAnsServiceClustersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAnsServiceClusters",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAnsServiceClustersResponse>(await this.callApi(params, req, runtime), new ListAnsServiceClustersResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListAnsServiceClustersRequest
    * @return ListAnsServiceClustersResponse
   */
  async listAnsServiceClusters(request: ListAnsServiceClustersRequest): Promise<ListAnsServiceClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAnsServiceClustersWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListAnsServicesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAnsServicesResponse
   */
  async listAnsServicesWithOptions(request: ListAnsServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListAnsServicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAnsServices",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAnsServicesResponse>(await this.callApi(params, req, runtime), new ListAnsServicesResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListAnsServicesRequest
    * @return ListAnsServicesResponse
   */
  async listAnsServices(request: ListAnsServicesRequest): Promise<ListAnsServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAnsServicesWithOptions(request, runtime);
  }

  async listAppBySwimmingLaneGroupTagWithOptions(request: ListAppBySwimmingLaneGroupTagRequest, runtime: $Util.RuntimeOptions): Promise<ListAppBySwimmingLaneGroupTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppBySwimmingLaneGroupTag",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppBySwimmingLaneGroupTagResponse>(await this.callApi(params, req, runtime), new ListAppBySwimmingLaneGroupTagResponse({}));
  }

  async listAppBySwimmingLaneGroupTag(request: ListAppBySwimmingLaneGroupTagRequest): Promise<ListAppBySwimmingLaneGroupTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppBySwimmingLaneGroupTagWithOptions(request, runtime);
  }

  async listApplicationsWithTagRulesWithOptions(request: ListApplicationsWithTagRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsWithTagRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationsWithTagRules",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsWithTagRulesResponse>(await this.callApi(params, req, runtime), new ListApplicationsWithTagRulesResponse({}));
  }

  async listApplicationsWithTagRules(request: ListApplicationsWithTagRulesRequest): Promise<ListApplicationsWithTagRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithTagRulesWithOptions(request, runtime);
  }

  async listClusterConnectionTypesWithOptions(request: ListClusterConnectionTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterConnectionTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterConnectionTypes",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterConnectionTypesResponse>(await this.callApi(params, req, runtime), new ListClusterConnectionTypesResponse({}));
  }

  async listClusterConnectionTypes(request: ListClusterConnectionTypesRequest): Promise<ListClusterConnectionTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterConnectionTypesWithOptions(request, runtime);
  }

  async listClusterHealthCheckTaskWithOptions(request: ListClusterHealthCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterHealthCheckTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterHealthCheckTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterHealthCheckTaskResponse>(await this.callApi(params, req, runtime), new ListClusterHealthCheckTaskResponse({}));
  }

  async listClusterHealthCheckTask(request: ListClusterHealthCheckTaskRequest): Promise<ListClusterHealthCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterHealthCheckTaskWithOptions(request, runtime);
  }

  async listClusterTypesWithOptions(request: ListClusterTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.connectType)) {
      query["ConnectType"] = request.connectType;
    }

    if (!Util.isUnset(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterTypes",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterTypesResponse>(await this.callApi(params, req, runtime), new ListClusterTypesResponse({}));
  }

  async listClusterTypes(request: ListClusterTypesRequest): Promise<ListClusterTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterTypesWithOptions(request, runtime);
  }

  async listClusterVersionsWithOptions(request: ListClusterVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterVersions",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterVersionsResponse>(await this.callApi(params, req, runtime), new ListClusterVersionsResponse({}));
  }

  async listClusterVersions(request: ListClusterVersionsRequest): Promise<ListClusterVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterVersionsWithOptions(request, runtime);
  }

  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  async listConfigTrackWithOptions(request: ListConfigTrackRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigTrackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfigTrack",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConfigTrackResponse>(await this.callApi(params, req, runtime), new ListConfigTrackResponse({}));
  }

  async listConfigTrack(request: ListConfigTrackRequest): Promise<ListConfigTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigTrackWithOptions(request, runtime);
  }

  async listEngineNamespacesWithOptions(request: ListEngineNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<ListEngineNamespacesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEngineNamespaces",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEngineNamespacesResponse>(await this.callApi(params, req, runtime), new ListEngineNamespacesResponse({}));
  }

  async listEngineNamespaces(request: ListEngineNamespacesRequest): Promise<ListEngineNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEngineNamespacesWithOptions(request, runtime);
  }

  async listEurekaInstancesWithOptions(request: ListEurekaInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListEurekaInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEurekaInstances",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEurekaInstancesResponse>(await this.callApi(params, req, runtime), new ListEurekaInstancesResponse({}));
  }

  async listEurekaInstances(request: ListEurekaInstancesRequest): Promise<ListEurekaInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEurekaInstancesWithOptions(request, runtime);
  }

  async listEurekaServicesWithOptions(request: ListEurekaServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListEurekaServicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEurekaServices",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEurekaServicesResponse>(await this.callApi(params, req, runtime), new ListEurekaServicesResponse({}));
  }

  async listEurekaServices(request: ListEurekaServicesRequest): Promise<ListEurekaServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEurekaServicesWithOptions(request, runtime);
  }

  async listExportZookeeperDataWithOptions(request: ListExportZookeeperDataRequest, runtime: $Util.RuntimeOptions): Promise<ListExportZookeeperDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExportZookeeperData",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExportZookeeperDataResponse>(await this.callApi(params, req, runtime), new ListExportZookeeperDataResponse({}));
  }

  async listExportZookeeperData(request: ListExportZookeeperDataRequest): Promise<ListExportZookeeperDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExportZookeeperDataWithOptions(request, runtime);
  }

  async listGatewayWithOptions(tmpReq: ListGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ListGatewayResponse> {
    Util.validateModel(tmpReq);
    let request = new ListGatewayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filterParams)) {
      request.filterParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParams, "FilterParams", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.descSort)) {
      query["DescSort"] = request.descSort;
    }

    if (!Util.isUnset(request.filterParamsShrink)) {
      query["FilterParams"] = request.filterParamsShrink;
    }

    if (!Util.isUnset(request.orderItem)) {
      query["OrderItem"] = request.orderItem;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGateway",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayResponse>(await this.callApi(params, req, runtime), new ListGatewayResponse({}));
  }

  async listGateway(request: ListGatewayRequest): Promise<ListGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGatewayWithOptions(request, runtime);
  }

  async listGatewayAuthConsumerWithOptions(request: ListGatewayAuthConsumerRequest, runtime: $Util.RuntimeOptions): Promise<ListGatewayAuthConsumerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.consumerStatus)) {
      query["ConsumerStatus"] = request.consumerStatus;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGatewayAuthConsumer",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayAuthConsumerResponse>(await this.callApi(params, req, runtime), new ListGatewayAuthConsumerResponse({}));
  }

  async listGatewayAuthConsumer(request: ListGatewayAuthConsumerRequest): Promise<ListGatewayAuthConsumerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGatewayAuthConsumerWithOptions(request, runtime);
  }

  async listGatewayAuthConsumerResourceWithOptions(request: ListGatewayAuthConsumerResourceRequest, runtime: $Util.RuntimeOptions): Promise<ListGatewayAuthConsumerResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceStatus)) {
      query["ResourceStatus"] = request.resourceStatus;
    }

    if (!Util.isUnset(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGatewayAuthConsumerResource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayAuthConsumerResourceResponse>(await this.callApi(params, req, runtime), new ListGatewayAuthConsumerResourceResponse({}));
  }

  async listGatewayAuthConsumerResource(request: ListGatewayAuthConsumerResourceRequest): Promise<ListGatewayAuthConsumerResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGatewayAuthConsumerResourceWithOptions(request, runtime);
  }

  async listGatewayDomainWithOptions(request: ListGatewayDomainRequest, runtime: $Util.RuntimeOptions): Promise<ListGatewayDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGatewayDomain",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayDomainResponse>(await this.callApi(params, req, runtime), new ListGatewayDomainResponse({}));
  }

  async listGatewayDomain(request: ListGatewayDomainRequest): Promise<ListGatewayDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGatewayDomainWithOptions(request, runtime);
  }

  async listGatewayRouteWithOptions(tmpReq: ListGatewayRouteRequest, runtime: $Util.RuntimeOptions): Promise<ListGatewayRouteResponse> {
    Util.validateModel(tmpReq);
    let request = new ListGatewayRouteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filterParams)) {
      request.filterParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParams, "FilterParams", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.descSort)) {
      query["DescSort"] = request.descSort;
    }

    if (!Util.isUnset(request.filterParamsShrink)) {
      query["FilterParams"] = request.filterParamsShrink;
    }

    if (!Util.isUnset(request.orderItem)) {
      query["OrderItem"] = request.orderItem;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayRouteResponse>(await this.callApi(params, req, runtime), new ListGatewayRouteResponse({}));
  }

  async listGatewayRoute(request: ListGatewayRouteRequest): Promise<ListGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGatewayRouteWithOptions(request, runtime);
  }

  async listGatewayRouteOnAuthWithOptions(request: ListGatewayRouteOnAuthRequest, runtime: $Util.RuntimeOptions): Promise<ListGatewayRouteOnAuthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGatewayRouteOnAuth",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayRouteOnAuthResponse>(await this.callApi(params, req, runtime), new ListGatewayRouteOnAuthResponse({}));
  }

  async listGatewayRouteOnAuth(request: ListGatewayRouteOnAuthRequest): Promise<ListGatewayRouteOnAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGatewayRouteOnAuthWithOptions(request, runtime);
  }

  async listGatewayServiceWithOptions(tmpReq: ListGatewayServiceRequest, runtime: $Util.RuntimeOptions): Promise<ListGatewayServiceResponse> {
    Util.validateModel(tmpReq);
    let request = new ListGatewayServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filterParams)) {
      request.filterParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterParams, "FilterParams", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.descSort)) {
      query["DescSort"] = request.descSort;
    }

    if (!Util.isUnset(request.filterParamsShrink)) {
      query["FilterParams"] = request.filterParamsShrink;
    }

    if (!Util.isUnset(request.orderItem)) {
      query["OrderItem"] = request.orderItem;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGatewayService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayServiceResponse>(await this.callApi(params, req, runtime), new ListGatewayServiceResponse({}));
  }

  async listGatewayService(request: ListGatewayServiceRequest): Promise<ListGatewayServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGatewayServiceWithOptions(request, runtime);
  }

  async listGatewaySlbWithOptions(request: ListGatewaySlbRequest, runtime: $Util.RuntimeOptions): Promise<ListGatewaySlbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGatewaySlb",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGatewaySlbResponse>(await this.callApi(params, req, runtime), new ListGatewaySlbResponse({}));
  }

  async listGatewaySlb(request: ListGatewaySlbRequest): Promise<ListGatewaySlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGatewaySlbWithOptions(request, runtime);
  }

  async listInstanceCountWithOptions(request: ListInstanceCountRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceCount",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceCountResponse>(await this.callApi(params, req, runtime), new ListInstanceCountResponse({}));
  }

  async listInstanceCount(request: ListInstanceCountRequest): Promise<ListInstanceCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceCountWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListListenersByConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListListenersByConfigResponse
   */
  async listListenersByConfigWithOptions(request: ListListenersByConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListListenersByConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListListenersByConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListListenersByConfigResponse>(await this.callApi(params, req, runtime), new ListListenersByConfigResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListListenersByConfigRequest
    * @return ListListenersByConfigResponse
   */
  async listListenersByConfig(request: ListListenersByConfigRequest): Promise<ListListenersByConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenersByConfigWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListListenersByIpRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListListenersByIpResponse
   */
  async listListenersByIpWithOptions(request: ListListenersByIpRequest, runtime: $Util.RuntimeOptions): Promise<ListListenersByIpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListListenersByIp",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListListenersByIpResponse>(await this.callApi(params, req, runtime), new ListListenersByIpResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListListenersByIpRequest
    * @return ListListenersByIpResponse
   */
  async listListenersByIp(request: ListListenersByIpRequest): Promise<ListListenersByIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenersByIpWithOptions(request, runtime);
  }

  async listMigrationTaskWithOptions(request: ListMigrationTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListMigrationTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMigrationTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMigrationTaskResponse>(await this.callApi(params, req, runtime), new ListMigrationTaskResponse({}));
  }

  async listMigrationTask(request: ListMigrationTaskRequest): Promise<ListMigrationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMigrationTaskWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListNacosConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListNacosConfigsResponse
   */
  async listNacosConfigsWithOptions(request: ListNacosConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListNacosConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNacosConfigs",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNacosConfigsResponse>(await this.callApi(params, req, runtime), new ListNacosConfigsResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListNacosConfigsRequest
    * @return ListNacosConfigsResponse
   */
  async listNacosConfigs(request: ListNacosConfigsRequest): Promise<ListNacosConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNacosConfigsWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListNacosHistoryConfigsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListNacosHistoryConfigsResponse
   */
  async listNacosHistoryConfigsWithOptions(request: ListNacosHistoryConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListNacosHistoryConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNacosHistoryConfigs",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNacosHistoryConfigsResponse>(await this.callApi(params, req, runtime), new ListNacosHistoryConfigsResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request ListNacosHistoryConfigsRequest
    * @return ListNacosHistoryConfigsResponse
   */
  async listNacosHistoryConfigs(request: ListNacosHistoryConfigsRequest): Promise<ListNacosHistoryConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNacosHistoryConfigsWithOptions(request, runtime);
  }

  async listNamingTrackWithOptions(request: ListNamingTrackRequest, runtime: $Util.RuntimeOptions): Promise<ListNamingTrackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNamingTrack",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNamingTrackResponse>(await this.callApi(params, req, runtime), new ListNamingTrackResponse({}));
  }

  async listNamingTrack(request: ListNamingTrackRequest): Promise<ListNamingTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNamingTrackWithOptions(request, runtime);
  }

  async listSSLCertWithOptions(request: ListSSLCertRequest, runtime: $Util.RuntimeOptions): Promise<ListSSLCertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSSLCert",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSSLCertResponse>(await this.callApi(params, req, runtime), new ListSSLCertResponse({}));
  }

  async listSSLCert(request: ListSSLCertRequest): Promise<ListSSLCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSSLCertWithOptions(request, runtime);
  }

  async listSecurityGroupWithOptions(request: ListSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecurityGroup",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecurityGroupResponse>(await this.callApi(params, req, runtime), new ListSecurityGroupResponse({}));
  }

  async listSecurityGroup(request: ListSecurityGroupRequest): Promise<ListSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityGroupWithOptions(request, runtime);
  }

  async listSecurityGroupRuleWithOptions(request: ListSecurityGroupRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityGroupRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecurityGroupRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new ListSecurityGroupRuleResponse({}));
  }

  async listSecurityGroupRule(request: ListSecurityGroupRuleRequest): Promise<ListSecurityGroupRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityGroupRuleWithOptions(request, runtime);
  }

  async listServiceSourceWithOptions(request: ListServiceSourceRequest, runtime: $Util.RuntimeOptions): Promise<ListServiceSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServiceSourceResponse>(await this.callApi(params, req, runtime), new ListServiceSourceResponse({}));
  }

  async listServiceSource(request: ListServiceSourceRequest): Promise<ListServiceSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServiceSourceWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listZkTrackWithOptions(request: ListZkTrackRequest, runtime: $Util.RuntimeOptions): Promise<ListZkTrackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListZkTrack",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListZkTrackResponse>(await this.callApi(params, req, runtime), new ListZkTrackResponse({}));
  }

  async listZkTrack(request: ListZkTrackRequest): Promise<ListZkTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listZkTrackWithOptions(request, runtime);
  }

  async listZnodeChildrenWithOptions(request: ListZnodeChildrenRequest, runtime: $Util.RuntimeOptions): Promise<ListZnodeChildrenResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListZnodeChildren",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListZnodeChildrenResponse>(await this.callApi(params, req, runtime), new ListZnodeChildrenResponse({}));
  }

  async listZnodeChildren(request: ListZnodeChildrenRequest): Promise<ListZnodeChildrenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listZnodeChildrenWithOptions(request, runtime);
  }

  async modifyGovernanceKubernetesClusterWithOptions(request: ModifyGovernanceKubernetesClusterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGovernanceKubernetesClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.namespaceInfos)) {
      query["NamespaceInfos"] = request.namespaceInfos;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGovernanceKubernetesCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGovernanceKubernetesClusterResponse>(await this.callApi(params, req, runtime), new ModifyGovernanceKubernetesClusterResponse({}));
  }

  async modifyGovernanceKubernetesCluster(request: ModifyGovernanceKubernetesClusterRequest): Promise<ModifyGovernanceKubernetesClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGovernanceKubernetesClusterWithOptions(request, runtime);
  }

  async modifyLosslessRuleWithOptions(request: ModifyLosslessRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLosslessRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.aligned)) {
      query["Aligned"] = request.aligned;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.delayTime)) {
      query["DelayTime"] = request.delayTime;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.funcType)) {
      query["FuncType"] = request.funcType;
    }

    if (!Util.isUnset(request.lossLessDetail)) {
      query["LossLessDetail"] = request.lossLessDetail;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.notice)) {
      query["Notice"] = request.notice;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.related)) {
      query["Related"] = request.related;
    }

    if (!Util.isUnset(request.shutdownWaitSeconds)) {
      query["ShutdownWaitSeconds"] = request.shutdownWaitSeconds;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.warmupTime)) {
      query["WarmupTime"] = request.warmupTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLosslessRule",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLosslessRuleResponse>(await this.callApi(params, req, runtime), new ModifyLosslessRuleResponse({}));
  }

  async modifyLosslessRule(request: ModifyLosslessRuleRequest): Promise<ModifyLosslessRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLosslessRuleWithOptions(request, runtime);
  }

  async offlineGatewayRouteWithOptions(request: OfflineGatewayRouteRequest, runtime: $Util.RuntimeOptions): Promise<OfflineGatewayRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OfflineGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OfflineGatewayRouteResponse>(await this.callApi(params, req, runtime), new OfflineGatewayRouteResponse({}));
  }

  async offlineGatewayRoute(request: OfflineGatewayRouteRequest): Promise<OfflineGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.offlineGatewayRouteWithOptions(request, runtime);
  }

  async orderClusterHealthCheckRiskNoticeWithOptions(request: OrderClusterHealthCheckRiskNoticeRequest, runtime: $Util.RuntimeOptions): Promise<OrderClusterHealthCheckRiskNoticeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mute)) {
      query["Mute"] = request.mute;
    }

    if (!Util.isUnset(request.noticeType)) {
      query["NoticeType"] = request.noticeType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!Util.isUnset(request.riskCode)) {
      query["RiskCode"] = request.riskCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OrderClusterHealthCheckRiskNotice",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OrderClusterHealthCheckRiskNoticeResponse>(await this.callApi(params, req, runtime), new OrderClusterHealthCheckRiskNoticeResponse({}));
  }

  async orderClusterHealthCheckRiskNotice(request: OrderClusterHealthCheckRiskNoticeRequest): Promise<OrderClusterHealthCheckRiskNoticeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.orderClusterHealthCheckRiskNoticeWithOptions(request, runtime);
  }

  async pullServicesWithOptions(request: PullServicesRequest, runtime: $Util.RuntimeOptions): Promise<PullServicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PullServices",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PullServicesResponse>(await this.callApi(params, req, runtime), new PullServicesResponse({}));
  }

  async pullServices(request: PullServicesRequest): Promise<PullServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pullServicesWithOptions(request, runtime);
  }

  async putClusterHealthCheckTaskWithOptions(request: PutClusterHealthCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<PutClusterHealthCheckTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutClusterHealthCheckTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutClusterHealthCheckTaskResponse>(await this.callApi(params, req, runtime), new PutClusterHealthCheckTaskResponse({}));
  }

  async putClusterHealthCheckTask(request: PutClusterHealthCheckTaskRequest): Promise<PutClusterHealthCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putClusterHealthCheckTaskWithOptions(request, runtime);
  }

  async queryAllSwimmingLaneWithOptions(request: QueryAllSwimmingLaneRequest, runtime: $Util.RuntimeOptions): Promise<QueryAllSwimmingLaneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAllSwimmingLane",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAllSwimmingLaneResponse>(await this.callApi(params, req, runtime), new QueryAllSwimmingLaneResponse({}));
  }

  async queryAllSwimmingLane(request: QueryAllSwimmingLaneRequest): Promise<QueryAllSwimmingLaneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAllSwimmingLaneWithOptions(request, runtime);
  }

  async queryAllSwimmingLaneGroupWithOptions(request: QueryAllSwimmingLaneGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryAllSwimmingLaneGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAllSwimmingLaneGroup",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAllSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new QueryAllSwimmingLaneGroupResponse({}));
  }

  async queryAllSwimmingLaneGroup(request: QueryAllSwimmingLaneGroupRequest): Promise<QueryAllSwimmingLaneGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAllSwimmingLaneGroupWithOptions(request, runtime);
  }

  async queryBusinessLocationsWithOptions(request: QueryBusinessLocationsRequest, runtime: $Util.RuntimeOptions): Promise<QueryBusinessLocationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBusinessLocations",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBusinessLocationsResponse>(await this.callApi(params, req, runtime), new QueryBusinessLocationsResponse({}));
  }

  async queryBusinessLocations(request: QueryBusinessLocationsRequest): Promise<QueryBusinessLocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBusinessLocationsWithOptions(request, runtime);
  }

  async queryClusterDetailWithOptions(request: QueryClusterDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryClusterDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.aclSwitch)) {
      query["AclSwitch"] = request.aclSwitch;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryClusterDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryClusterDetailResponse>(await this.callApi(params, req, runtime), new QueryClusterDetailResponse({}));
  }

  async queryClusterDetail(request: QueryClusterDetailRequest): Promise<QueryClusterDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryClusterDetailWithOptions(request, runtime);
  }

  async queryClusterDiskSpecificationWithOptions(request: QueryClusterDiskSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryClusterDiskSpecificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryClusterDiskSpecification",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryClusterDiskSpecificationResponse>(await this.callApi(params, req, runtime), new QueryClusterDiskSpecificationResponse({}));
  }

  async queryClusterDiskSpecification(request: QueryClusterDiskSpecificationRequest): Promise<QueryClusterDiskSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryClusterDiskSpecificationWithOptions(request, runtime);
  }

  async queryClusterInfoWithOptions(request: QueryClusterInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryClusterInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.aclSwitch)) {
      query["AclSwitch"] = request.aclSwitch;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryClusterInfo",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryClusterInfoResponse>(await this.callApi(params, req, runtime), new QueryClusterInfoResponse({}));
  }

  async queryClusterInfo(request: QueryClusterInfoRequest): Promise<QueryClusterInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryClusterInfoWithOptions(request, runtime);
  }

  async queryClusterSpecificationWithOptions(request: QueryClusterSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<QueryClusterSpecificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.connectType)) {
      query["ConnectType"] = request.connectType;
    }

    if (!Util.isUnset(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryClusterSpecification",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryClusterSpecificationResponse>(await this.callApi(params, req, runtime), new QueryClusterSpecificationResponse({}));
  }

  async queryClusterSpecification(request: QueryClusterSpecificationRequest): Promise<QueryClusterSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryClusterSpecificationWithOptions(request, runtime);
  }

  async queryConfigWithOptions(request: QueryConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryConfigResponse>(await this.callApi(params, req, runtime), new QueryConfigResponse({}));
  }

  async queryConfig(request: QueryConfigRequest): Promise<QueryConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConfigWithOptions(request, runtime);
  }

  async queryGatewayRegionWithOptions(request: QueryGatewayRegionRequest, runtime: $Util.RuntimeOptions): Promise<QueryGatewayRegionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGatewayRegion",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGatewayRegionResponse>(await this.callApi(params, req, runtime), new QueryGatewayRegionResponse({}));
  }

  async queryGatewayRegion(request: QueryGatewayRegionRequest): Promise<QueryGatewayRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGatewayRegionWithOptions(request, runtime);
  }

  async queryGatewayTypeWithOptions(request: QueryGatewayTypeRequest, runtime: $Util.RuntimeOptions): Promise<QueryGatewayTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGatewayType",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGatewayTypeResponse>(await this.callApi(params, req, runtime), new QueryGatewayTypeResponse({}));
  }

  async queryGatewayType(request: QueryGatewayTypeRequest): Promise<QueryGatewayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGatewayTypeWithOptions(request, runtime);
  }

  async queryGovernanceKubernetesClusterWithOptions(request: QueryGovernanceKubernetesClusterRequest, runtime: $Util.RuntimeOptions): Promise<QueryGovernanceKubernetesClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGovernanceKubernetesCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGovernanceKubernetesClusterResponse>(await this.callApi(params, req, runtime), new QueryGovernanceKubernetesClusterResponse({}));
  }

  async queryGovernanceKubernetesCluster(request: QueryGovernanceKubernetesClusterRequest): Promise<QueryGovernanceKubernetesClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGovernanceKubernetesClusterWithOptions(request, runtime);
  }

  async queryInstancesInfoWithOptions(request: QueryInstancesInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstancesInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstancesInfo",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstancesInfoResponse>(await this.callApi(params, req, runtime), new QueryInstancesInfoResponse({}));
  }

  async queryInstancesInfo(request: QueryInstancesInfoRequest): Promise<QueryInstancesInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstancesInfoWithOptions(request, runtime);
  }

  async queryMonitorWithOptions(request: QueryMonitorRequest, runtime: $Util.RuntimeOptions): Promise<QueryMonitorResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMonitor",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMonitorResponse>(await this.callApi(params, req, runtime), new QueryMonitorResponse({}));
  }

  async queryMonitor(request: QueryMonitorRequest): Promise<QueryMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMonitorWithOptions(request, runtime);
  }

  async queryNamespaceWithOptions(request: QueryNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<QueryNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryNamespaceResponse>(await this.callApi(params, req, runtime), new QueryNamespaceResponse({}));
  }

  async queryNamespace(request: QueryNamespaceRequest): Promise<QueryNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryNamespaceWithOptions(request, runtime);
  }

  async querySlbSpecWithOptions(request: QuerySlbSpecRequest, runtime: $Util.RuntimeOptions): Promise<QuerySlbSpecResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySlbSpec",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySlbSpecResponse>(await this.callApi(params, req, runtime), new QuerySlbSpecResponse({}));
  }

  async querySlbSpec(request: QuerySlbSpecRequest): Promise<QuerySlbSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySlbSpecWithOptions(request, runtime);
  }

  async querySwimmingLaneByIdWithOptions(request: QuerySwimmingLaneByIdRequest, runtime: $Util.RuntimeOptions): Promise<QuerySwimmingLaneByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySwimmingLaneById",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySwimmingLaneByIdResponse>(await this.callApi(params, req, runtime), new QuerySwimmingLaneByIdResponse({}));
  }

  async querySwimmingLaneById(request: QuerySwimmingLaneByIdRequest): Promise<QuerySwimmingLaneByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySwimmingLaneByIdWithOptions(request, runtime);
  }

  async queryZnodeDetailWithOptions(request: QueryZnodeDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryZnodeDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryZnodeDetail",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryZnodeDetailResponse>(await this.callApi(params, req, runtime), new QueryZnodeDetailResponse({}));
  }

  async queryZnodeDetail(request: QueryZnodeDetailRequest): Promise<QueryZnodeDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryZnodeDetailWithOptions(request, runtime);
  }

  async restartClusterWithOptions(request: RestartClusterRequest, runtime: $Util.RuntimeOptions): Promise<RestartClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.podNameList)) {
      query["PodNameList"] = request.podNameList;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartClusterResponse>(await this.callApi(params, req, runtime), new RestartClusterResponse({}));
  }

  async restartCluster(request: RestartClusterRequest): Promise<RestartClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartClusterWithOptions(request, runtime);
  }

  async retryClusterWithOptions(request: RetryClusterRequest, runtime: $Util.RuntimeOptions): Promise<RetryClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetryCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryClusterResponse>(await this.callApi(params, req, runtime), new RetryClusterResponse({}));
  }

  async retryCluster(request: RetryClusterRequest): Promise<RetryClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryClusterWithOptions(request, runtime);
  }

  async selectGatewaySlbWithOptions(request: SelectGatewaySlbRequest, runtime: $Util.RuntimeOptions): Promise<SelectGatewaySlbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SelectGatewaySlb",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SelectGatewaySlbResponse>(await this.callApi(params, req, runtime), new SelectGatewaySlbResponse({}));
  }

  async selectGatewaySlb(request: SelectGatewaySlbRequest): Promise<SelectGatewaySlbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.selectGatewaySlbWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateAclWithOptions(request: UpdateAclRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAclResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.aclEntryList)) {
      query["AclEntryList"] = request.aclEntryList;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAcl",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAclResponse>(await this.callApi(params, req, runtime), new UpdateAclResponse({}));
  }

  async updateAcl(request: UpdateAclRequest): Promise<UpdateAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAclWithOptions(request, runtime);
  }

  async updateBlackWhiteListWithOptions(request: UpdateBlackWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBlackWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.isWhite)) {
      query["IsWhite"] = request.isWhite;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.note)) {
      query["Note"] = request.note;
    }

    if (!Util.isUnset(request.resourceIdJsonList)) {
      query["ResourceIdJsonList"] = request.resourceIdJsonList;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBlackWhiteList",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBlackWhiteListResponse>(await this.callApi(params, req, runtime), new UpdateBlackWhiteListResponse({}));
  }

  async updateBlackWhiteList(request: UpdateBlackWhiteListRequest): Promise<UpdateBlackWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBlackWhiteListWithOptions(request, runtime);
  }

  async updateClusterWithOptions(request: UpdateClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterAliasName)) {
      query["ClusterAliasName"] = request.clusterAliasName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClusterResponse>(await this.callApi(params, req, runtime), new UpdateClusterResponse({}));
  }

  async updateCluster(request: UpdateClusterRequest): Promise<UpdateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  /**
    * You can call this operation to update the number or specifications of nodes in a pay-as-you-go MSE instance. You are charged when you add nodes or upgrade node specifications. For more information, see \\[Pricing] (`~~1806469~~`).
    *
    * @param request UpdateClusterSpecRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateClusterSpecResponse
   */
  async updateClusterSpecWithOptions(request: UpdateClusterSpecRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClusterSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterSpecification)) {
      query["ClusterSpecification"] = request.clusterSpecification;
    }

    if (!Util.isUnset(request.instanceCount)) {
      query["InstanceCount"] = request.instanceCount;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mseVersion)) {
      query["MseVersion"] = request.mseVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateClusterSpec",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClusterSpecResponse>(await this.callApi(params, req, runtime), new UpdateClusterSpecResponse({}));
  }

  /**
    * You can call this operation to update the number or specifications of nodes in a pay-as-you-go MSE instance. You are charged when you add nodes or upgrade node specifications. For more information, see \\[Pricing] (`~~1806469~~`).
    *
    * @param request UpdateClusterSpecRequest
    * @return UpdateClusterSpecResponse
   */
  async updateClusterSpec(request: UpdateClusterSpecRequest): Promise<UpdateClusterSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClusterSpecWithOptions(request, runtime);
  }

  async updateConfigWithOptions(request: UpdateConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.autopurgePurgeInterval)) {
      query["AutopurgePurgeInterval"] = request.autopurgePurgeInterval;
    }

    if (!Util.isUnset(request.autopurgeSnapRetainCount)) {
      query["AutopurgeSnapRetainCount"] = request.autopurgeSnapRetainCount;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.configAuthEnabled)) {
      query["ConfigAuthEnabled"] = request.configAuthEnabled;
    }

    if (!Util.isUnset(request.configSecretEnabled)) {
      query["ConfigSecretEnabled"] = request.configSecretEnabled;
    }

    if (!Util.isUnset(request.configType)) {
      query["ConfigType"] = request.configType;
    }

    if (!Util.isUnset(request.eurekaSupported)) {
      query["EurekaSupported"] = request.eurekaSupported;
    }

    if (!Util.isUnset(request.extendedTypesEnable)) {
      query["ExtendedTypesEnable"] = request.extendedTypesEnable;
    }

    if (!Util.isUnset(request.initLimit)) {
      query["InitLimit"] = request.initLimit;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.juteMaxbuffer)) {
      query["JuteMaxbuffer"] = request.juteMaxbuffer;
    }

    if (!Util.isUnset(request.MCPEnabled)) {
      query["MCPEnabled"] = request.MCPEnabled;
    }

    if (!Util.isUnset(request.maxClientCnxns)) {
      query["MaxClientCnxns"] = request.maxClientCnxns;
    }

    if (!Util.isUnset(request.maxSessionTimeout)) {
      query["MaxSessionTimeout"] = request.maxSessionTimeout;
    }

    if (!Util.isUnset(request.minSessionTimeout)) {
      query["MinSessionTimeout"] = request.minSessionTimeout;
    }

    if (!Util.isUnset(request.namingAuthEnabled)) {
      query["NamingAuthEnabled"] = request.namingAuthEnabled;
    }

    if (!Util.isUnset(request.passWord)) {
      query["PassWord"] = request.passWord;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!Util.isUnset(request.snapshotCount)) {
      query["SnapshotCount"] = request.snapshotCount;
    }

    if (!Util.isUnset(request.syncLimit)) {
      query["SyncLimit"] = request.syncLimit;
    }

    if (!Util.isUnset(request.tickTime)) {
      query["TickTime"] = request.tickTime;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.openSuperAcl)) {
      body["OpenSuperAcl"] = request.openSuperAcl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConfigResponse>(await this.callApi(params, req, runtime), new UpdateConfigResponse({}));
  }

  async updateConfig(request: UpdateConfigRequest): Promise<UpdateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigWithOptions(request, runtime);
  }

  async updateEngineNamespaceWithOptions(request: UpdateEngineNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEngineNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.serviceCount)) {
      query["ServiceCount"] = request.serviceCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEngineNamespace",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEngineNamespaceResponse>(await this.callApi(params, req, runtime), new UpdateEngineNamespaceResponse({}));
  }

  async updateEngineNamespace(request: UpdateEngineNamespaceRequest): Promise<UpdateEngineNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEngineNamespaceWithOptions(request, runtime);
  }

  async updateGatewayAuthConsumerWithOptions(request: UpdateGatewayAuthConsumerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayAuthConsumerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.jwks)) {
      query["Jwks"] = request.jwks;
    }

    if (!Util.isUnset(request.keyName)) {
      query["KeyName"] = request.keyName;
    }

    if (!Util.isUnset(request.keyValue)) {
      query["KeyValue"] = request.keyValue;
    }

    if (!Util.isUnset(request.tokenName)) {
      query["TokenName"] = request.tokenName;
    }

    if (!Util.isUnset(request.tokenPass)) {
      query["TokenPass"] = request.tokenPass;
    }

    if (!Util.isUnset(request.tokenPosition)) {
      query["TokenPosition"] = request.tokenPosition;
    }

    if (!Util.isUnset(request.tokenPrefix)) {
      query["TokenPrefix"] = request.tokenPrefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayAuthConsumer",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayAuthConsumerResponse>(await this.callApi(params, req, runtime), new UpdateGatewayAuthConsumerResponse({}));
  }

  async updateGatewayAuthConsumer(request: UpdateGatewayAuthConsumerRequest): Promise<UpdateGatewayAuthConsumerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayAuthConsumerWithOptions(request, runtime);
  }

  async updateGatewayAuthConsumerResourceWithOptions(tmpReq: UpdateGatewayAuthConsumerResourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayAuthConsumerResourceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGatewayAuthConsumerResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceList)) {
      request.resourceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceList, "ResourceList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.resourceListShrink)) {
      query["ResourceList"] = request.resourceListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayAuthConsumerResource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayAuthConsumerResourceResponse>(await this.callApi(params, req, runtime), new UpdateGatewayAuthConsumerResourceResponse({}));
  }

  async updateGatewayAuthConsumerResource(request: UpdateGatewayAuthConsumerResourceRequest): Promise<UpdateGatewayAuthConsumerResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayAuthConsumerResourceWithOptions(request, runtime);
  }

  async updateGatewayAuthConsumerResourceStatusWithOptions(request: UpdateGatewayAuthConsumerResourceStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayAuthConsumerResourceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.idList)) {
      query["IdList"] = request.idList;
    }

    if (!Util.isUnset(request.resourceStatus)) {
      query["ResourceStatus"] = request.resourceStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayAuthConsumerResourceStatus",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayAuthConsumerResourceStatusResponse>(await this.callApi(params, req, runtime), new UpdateGatewayAuthConsumerResourceStatusResponse({}));
  }

  async updateGatewayAuthConsumerResourceStatus(request: UpdateGatewayAuthConsumerResourceStatusRequest): Promise<UpdateGatewayAuthConsumerResourceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayAuthConsumerResourceStatusWithOptions(request, runtime);
  }

  async updateGatewayAuthConsumerStatusWithOptions(request: UpdateGatewayAuthConsumerStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayAuthConsumerStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.consumerStatus)) {
      query["ConsumerStatus"] = request.consumerStatus;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayAuthConsumerStatus",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayAuthConsumerStatusResponse>(await this.callApi(params, req, runtime), new UpdateGatewayAuthConsumerStatusResponse({}));
  }

  async updateGatewayAuthConsumerStatus(request: UpdateGatewayAuthConsumerStatusRequest): Promise<UpdateGatewayAuthConsumerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayAuthConsumerStatusWithOptions(request, runtime);
  }

  async updateGatewayDomainWithOptions(request: UpdateGatewayDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.http2)) {
      query["Http2"] = request.http2;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.mustHttps)) {
      query["MustHttps"] = request.mustHttps;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.tlsMax)) {
      query["TlsMax"] = request.tlsMax;
    }

    if (!Util.isUnset(request.tlsMin)) {
      query["TlsMin"] = request.tlsMin;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayDomain",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayDomainResponse>(await this.callApi(params, req, runtime), new UpdateGatewayDomainResponse({}));
  }

  async updateGatewayDomain(request: UpdateGatewayDomainRequest): Promise<UpdateGatewayDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayDomainWithOptions(request, runtime);
  }

  async updateGatewayNameWithOptions(request: UpdateGatewayNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayName",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayNameResponse>(await this.callApi(params, req, runtime), new UpdateGatewayNameResponse({}));
  }

  async updateGatewayName(request: UpdateGatewayNameRequest): Promise<UpdateGatewayNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayNameWithOptions(request, runtime);
  }

  async updateGatewayOptionWithOptions(tmpReq: UpdateGatewayOptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayOptionResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGatewayOptionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.gatewayOption)) {
      request.gatewayOptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.gatewayOption, "GatewayOption", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayOptionShrink)) {
      query["GatewayOption"] = request.gatewayOptionShrink;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayOption",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayOptionResponse>(await this.callApi(params, req, runtime), new UpdateGatewayOptionResponse({}));
  }

  async updateGatewayOption(request: UpdateGatewayOptionRequest): Promise<UpdateGatewayOptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayOptionWithOptions(request, runtime);
  }

  async updateGatewayRouteWithOptions(tmpReq: UpdateGatewayRouteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayRouteResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGatewayRouteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.directResponseJSON)) {
      request.directResponseJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.directResponseJSON, "DirectResponseJSON", "json");
    }

    if (!Util.isUnset(tmpReq.fallbackServices)) {
      request.fallbackServicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fallbackServices, "FallbackServices", "json");
    }

    if (!Util.isUnset(tmpReq.predicates)) {
      request.predicatesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.predicates, "Predicates", "json");
    }

    if (!Util.isUnset(tmpReq.redirectJSON)) {
      request.redirectJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.redirectJSON, "RedirectJSON", "json");
    }

    if (!Util.isUnset(tmpReq.services)) {
      request.servicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.services, "Services", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!Util.isUnset(request.directResponseJSONShrink)) {
      query["DirectResponseJSON"] = request.directResponseJSONShrink;
    }

    if (!Util.isUnset(request.domainIdListJSON)) {
      query["DomainIdListJSON"] = request.domainIdListJSON;
    }

    if (!Util.isUnset(request.enableWaf)) {
      query["EnableWaf"] = request.enableWaf;
    }

    if (!Util.isUnset(request.fallback)) {
      query["Fallback"] = request.fallback;
    }

    if (!Util.isUnset(request.fallbackServicesShrink)) {
      query["FallbackServices"] = request.fallbackServicesShrink;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.predicatesShrink)) {
      query["Predicates"] = request.predicatesShrink;
    }

    if (!Util.isUnset(request.redirectJSONShrink)) {
      query["RedirectJSON"] = request.redirectJSONShrink;
    }

    if (!Util.isUnset(request.routeOrder)) {
      query["RouteOrder"] = request.routeOrder;
    }

    if (!Util.isUnset(request.servicesShrink)) {
      query["Services"] = request.servicesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayRouteResponse>(await this.callApi(params, req, runtime), new UpdateGatewayRouteResponse({}));
  }

  async updateGatewayRoute(request: UpdateGatewayRouteRequest): Promise<UpdateGatewayRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayRouteWithOptions(request, runtime);
  }

  async updateGatewayRouteAuthWithOptions(tmpReq: UpdateGatewayRouteAuthRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayRouteAuthResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGatewayRouteAuthShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.authJSON)) {
      request.authJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authJSON, "AuthJSON", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.authJSONShrink)) {
      query["AuthJSON"] = request.authJSONShrink;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayRouteAuth",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayRouteAuthResponse>(await this.callApi(params, req, runtime), new UpdateGatewayRouteAuthResponse({}));
  }

  async updateGatewayRouteAuth(request: UpdateGatewayRouteAuthRequest): Promise<UpdateGatewayRouteAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayRouteAuthWithOptions(request, runtime);
  }

  async updateGatewayRouteCORSWithOptions(tmpReq: UpdateGatewayRouteCORSRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayRouteCORSResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGatewayRouteCORSShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.corsJSON)) {
      request.corsJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.corsJSON, "CorsJSON", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.corsJSONShrink)) {
      query["CorsJSON"] = request.corsJSONShrink;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayRouteCORS",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayRouteCORSResponse>(await this.callApi(params, req, runtime), new UpdateGatewayRouteCORSResponse({}));
  }

  async updateGatewayRouteCORS(request: UpdateGatewayRouteCORSRequest): Promise<UpdateGatewayRouteCORSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayRouteCORSWithOptions(request, runtime);
  }

  async updateGatewayRouteHTTPRewriteWithOptions(request: UpdateGatewayRouteHTTPRewriteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayRouteHTTPRewriteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.httpRewriteJSON)) {
      query["HttpRewriteJSON"] = request.httpRewriteJSON;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayRouteHTTPRewrite",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayRouteHTTPRewriteResponse>(await this.callApi(params, req, runtime), new UpdateGatewayRouteHTTPRewriteResponse({}));
  }

  async updateGatewayRouteHTTPRewrite(request: UpdateGatewayRouteHTTPRewriteRequest): Promise<UpdateGatewayRouteHTTPRewriteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayRouteHTTPRewriteWithOptions(request, runtime);
  }

  async updateGatewayRouteHeaderOpWithOptions(request: UpdateGatewayRouteHeaderOpRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayRouteHeaderOpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.headerOpJSON)) {
      query["HeaderOpJSON"] = request.headerOpJSON;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayRouteHeaderOp",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayRouteHeaderOpResponse>(await this.callApi(params, req, runtime), new UpdateGatewayRouteHeaderOpResponse({}));
  }

  async updateGatewayRouteHeaderOp(request: UpdateGatewayRouteHeaderOpRequest): Promise<UpdateGatewayRouteHeaderOpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayRouteHeaderOpWithOptions(request, runtime);
  }

  async updateGatewayRouteRetryWithOptions(tmpReq: UpdateGatewayRouteRetryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayRouteRetryResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGatewayRouteRetryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.retryJSON)) {
      request.retryJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retryJSON, "RetryJSON", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.retryJSONShrink)) {
      query["RetryJSON"] = request.retryJSONShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayRouteRetry",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayRouteRetryResponse>(await this.callApi(params, req, runtime), new UpdateGatewayRouteRetryResponse({}));
  }

  async updateGatewayRouteRetry(request: UpdateGatewayRouteRetryRequest): Promise<UpdateGatewayRouteRetryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayRouteRetryWithOptions(request, runtime);
  }

  async updateGatewayRouteTimeoutWithOptions(tmpReq: UpdateGatewayRouteTimeoutRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayRouteTimeoutResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGatewayRouteTimeoutShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.timeoutJSON)) {
      request.timeoutJSONShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.timeoutJSON, "TimeoutJSON", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.timeoutJSONShrink)) {
      query["TimeoutJSON"] = request.timeoutJSONShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayRouteTimeout",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayRouteTimeoutResponse>(await this.callApi(params, req, runtime), new UpdateGatewayRouteTimeoutResponse({}));
  }

  async updateGatewayRouteTimeout(request: UpdateGatewayRouteTimeoutRequest): Promise<UpdateGatewayRouteTimeoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayRouteTimeoutWithOptions(request, runtime);
  }

  async updateGatewayRouteWafStatusWithOptions(request: UpdateGatewayRouteWafStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayRouteWafStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.enableWaf)) {
      query["EnableWaf"] = request.enableWaf;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayRouteWafStatus",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayRouteWafStatusResponse>(await this.callApi(params, req, runtime), new UpdateGatewayRouteWafStatusResponse({}));
  }

  async updateGatewayRouteWafStatus(request: UpdateGatewayRouteWafStatusRequest): Promise<UpdateGatewayRouteWafStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayRouteWafStatusWithOptions(request, runtime);
  }

  async updateGatewayServiceTrafficPolicyWithOptions(tmpReq: UpdateGatewayServiceTrafficPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayServiceTrafficPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGatewayServiceTrafficPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.gatewayTrafficPolicy)) {
      request.gatewayTrafficPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.gatewayTrafficPolicy, "GatewayTrafficPolicy", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayTrafficPolicyShrink)) {
      query["GatewayTrafficPolicy"] = request.gatewayTrafficPolicyShrink;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayServiceTrafficPolicy",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayServiceTrafficPolicyResponse>(await this.callApi(params, req, runtime), new UpdateGatewayServiceTrafficPolicyResponse({}));
  }

  async updateGatewayServiceTrafficPolicy(request: UpdateGatewayServiceTrafficPolicyRequest): Promise<UpdateGatewayServiceTrafficPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayServiceTrafficPolicyWithOptions(request, runtime);
  }

  async updateGatewayServiceVersionWithOptions(request: UpdateGatewayServiceVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayServiceVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewayServiceVersion",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayServiceVersionResponse>(await this.callApi(params, req, runtime), new UpdateGatewayServiceVersionResponse({}));
  }

  async updateGatewayServiceVersion(request: UpdateGatewayServiceVersionRequest): Promise<UpdateGatewayServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewayServiceVersionWithOptions(request, runtime);
  }

  /**
    * You can call this operation to update the number or specifications of nodes in a pay-as-you-go cloud-native gateway. You are charged when you add nodes or upgrade node specifications. For more information, see [Pricing](~~250950~~).
    *
    * @param request UpdateGatewaySpecRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateGatewaySpecResponse
   */
  async updateGatewaySpecWithOptions(request: UpdateGatewaySpecRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGatewaySpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.replica)) {
      query["Replica"] = request.replica;
    }

    if (!Util.isUnset(request.spec)) {
      query["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGatewaySpec",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewaySpecResponse>(await this.callApi(params, req, runtime), new UpdateGatewaySpecResponse({}));
  }

  /**
    * You can call this operation to update the number or specifications of nodes in a pay-as-you-go cloud-native gateway. You are charged when you add nodes or upgrade node specifications. For more information, see [Pricing](~~250950~~).
    *
    * @param request UpdateGatewaySpecRequest
    * @return UpdateGatewaySpecResponse
   */
  async updateGatewaySpec(request: UpdateGatewaySpecRequest): Promise<UpdateGatewaySpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGatewaySpecWithOptions(request, runtime);
  }

  async updateImageWithOptions(request: UpdateImageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateImage",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateImageResponse>(await this.callApi(params, req, runtime), new UpdateImageResponse({}));
  }

  async updateImage(request: UpdateImageRequest): Promise<UpdateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateImageWithOptions(request, runtime);
  }

  async updateMessageQueueRouteWithOptions(tmpReq: UpdateMessageQueueRouteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMessageQueueRouteResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateMessageQueueRouteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.filterSide)) {
      query["FilterSide"] = request.filterSide;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMessageQueueRoute",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMessageQueueRouteResponse>(await this.callApi(params, req, runtime), new UpdateMessageQueueRouteResponse({}));
  }

  async updateMessageQueueRoute(request: UpdateMessageQueueRouteRequest): Promise<UpdateMessageQueueRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMessageQueueRouteWithOptions(request, runtime);
  }

  async updateMigrationTaskWithOptions(request: UpdateMigrationTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMigrationTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.originInstanceAddress)) {
      query["OriginInstanceAddress"] = request.originInstanceAddress;
    }

    if (!Util.isUnset(request.originInstanceName)) {
      query["OriginInstanceName"] = request.originInstanceName;
    }

    if (!Util.isUnset(request.originInstanceNamespace)) {
      query["OriginInstanceNamespace"] = request.originInstanceNamespace;
    }

    if (!Util.isUnset(request.projectDesc)) {
      query["ProjectDesc"] = request.projectDesc;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!Util.isUnset(request.targetClusterName)) {
      query["TargetClusterName"] = request.targetClusterName;
    }

    if (!Util.isUnset(request.targetClusterUrl)) {
      query["TargetClusterUrl"] = request.targetClusterUrl;
    }

    if (!Util.isUnset(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMigrationTask",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMigrationTaskResponse>(await this.callApi(params, req, runtime), new UpdateMigrationTaskResponse({}));
  }

  async updateMigrationTask(request: UpdateMigrationTaskRequest): Promise<UpdateMigrationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMigrationTaskWithOptions(request, runtime);
  }

  async updateNacosClusterWithOptions(request: UpdateNacosClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNacosClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.checkPort)) {
      query["CheckPort"] = request.checkPort;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.healthChecker)) {
      query["HealthChecker"] = request.healthChecker;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.useInstancePortForCheck)) {
      query["UseInstancePortForCheck"] = request.useInstancePortForCheck;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNacosCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNacosClusterResponse>(await this.callApi(params, req, runtime), new UpdateNacosClusterResponse({}));
  }

  async updateNacosCluster(request: UpdateNacosClusterRequest): Promise<UpdateNacosClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNacosClusterWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request UpdateNacosConfigRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateNacosConfigResponse
   */
  async updateNacosConfigWithOptions(request: UpdateNacosConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNacosConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.betaIps)) {
      query["BetaIps"] = request.betaIps;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.encryptedDataKey)) {
      query["EncryptedDataKey"] = request.encryptedDataKey;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNacosConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNacosConfigResponse>(await this.callApi(params, req, runtime), new UpdateNacosConfigResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request UpdateNacosConfigRequest
    * @return UpdateNacosConfigResponse
   */
  async updateNacosConfig(request: UpdateNacosConfigRequest): Promise<UpdateNacosConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNacosConfigWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request UpdateNacosInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateNacosInstanceResponse
   */
  async updateNacosInstanceWithOptions(request: UpdateNacosInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNacosInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.ephemeral)) {
      query["Ephemeral"] = request.ephemeral;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.weight)) {
      query["Weight"] = request.weight;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.metadata)) {
      body["Metadata"] = request.metadata;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNacosInstance",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNacosInstanceResponse>(await this.callApi(params, req, runtime), new UpdateNacosInstanceResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request UpdateNacosInstanceRequest
    * @return UpdateNacosInstanceResponse
   */
  async updateNacosInstance(request: UpdateNacosInstanceRequest): Promise<UpdateNacosInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNacosInstanceWithOptions(request, runtime);
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request UpdateNacosServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateNacosServiceResponse
   */
  async updateNacosServiceWithOptions(request: UpdateNacosServiceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNacosServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!Util.isUnset(request.protectThreshold)) {
      query["ProtectThreshold"] = request.protectThreshold;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNacosService",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNacosServiceResponse>(await this.callApi(params, req, runtime), new UpdateNacosServiceResponse({}));
  }

  /**
    * > The operation is not provided in Nacos SDKs. For information about Nacos SDKs, see the [official documentation](https://nacos.io/zh-cn/docs/sdk.html).
    *
    * @param request UpdateNacosServiceRequest
    * @return UpdateNacosServiceResponse
   */
  async updateNacosService(request: UpdateNacosServiceRequest): Promise<UpdateNacosServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNacosServiceWithOptions(request, runtime);
  }

  async updatePluginConfigWithOptions(request: UpdatePluginConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePluginConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.configLevel)) {
      query["ConfigLevel"] = request.configLevel;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!Util.isUnset(request.gmtModified)) {
      query["GmtModified"] = request.gmtModified;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.pluginId)) {
      query["PluginId"] = request.pluginId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePluginConfig",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePluginConfigResponse>(await this.callApi(params, req, runtime), new UpdatePluginConfigResponse({}));
  }

  async updatePluginConfig(request: UpdatePluginConfigRequest): Promise<UpdatePluginConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePluginConfigWithOptions(request, runtime);
  }

  async updateSSLCertWithOptions(request: UpdateSSLCertRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSSLCertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSSLCert",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSSLCertResponse>(await this.callApi(params, req, runtime), new UpdateSSLCertResponse({}));
  }

  async updateSSLCert(request: UpdateSSLCertRequest): Promise<UpdateSSLCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSSLCertWithOptions(request, runtime);
  }

  async updateServiceSourceWithOptions(tmpReq: UpdateServiceSourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServiceSourceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateServiceSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ingressOptionsRequest)) {
      request.ingressOptionsRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ingressOptionsRequest, "IngressOptionsRequest", "json");
    }

    if (!Util.isUnset(tmpReq.pathList)) {
      request.pathListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pathList, "PathList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ingressOptionsRequestShrink)) {
      query["IngressOptionsRequest"] = request.ingressOptionsRequestShrink;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pathListShrink)) {
      query["PathList"] = request.pathListShrink;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceSource",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceSourceResponse>(await this.callApi(params, req, runtime), new UpdateServiceSourceResponse({}));
  }

  async updateServiceSource(request: UpdateServiceSourceRequest): Promise<UpdateServiceSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServiceSourceWithOptions(request, runtime);
  }

  async updateZnodeWithOptions(request: UpdateZnodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateZnodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateZnode",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateZnodeResponse>(await this.callApi(params, req, runtime), new UpdateZnodeResponse({}));
  }

  async updateZnode(request: UpdateZnodeRequest): Promise<UpdateZnodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateZnodeWithOptions(request, runtime);
  }

  async upgradeClusterWithOptions(request: UpgradeClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.requestPars)) {
      query["RequestPars"] = request.requestPars;
    }

    if (!Util.isUnset(request.upgradeVersion)) {
      query["UpgradeVersion"] = request.upgradeVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeCluster",
      version: "2019-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeClusterResponse>(await this.callApi(params, req, runtime), new UpgradeClusterResponse({}));
  }

  async upgradeCluster(request: UpgradeClusterRequest): Promise<UpgradeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeClusterWithOptions(request, runtime);
  }

}
