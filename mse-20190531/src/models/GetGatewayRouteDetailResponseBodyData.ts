// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayRouteDetailResponseBodyDataCors } from "./GetGatewayRouteDetailResponseBodyDataCors";
import { GetGatewayRouteDetailResponseBodyDataDirectResponse } from "./GetGatewayRouteDetailResponseBodyDataDirectResponse";
import { GetGatewayRouteDetailResponseBodyDataFallbackServices } from "./GetGatewayRouteDetailResponseBodyDataFallbackServices";
import { GetGatewayRouteDetailResponseBodyDataFlowMirror } from "./GetGatewayRouteDetailResponseBodyDataFlowMirror";
import { GetGatewayRouteDetailResponseBodyDataHTTPRewrite } from "./GetGatewayRouteDetailResponseBodyDataHttprewrite";
import { GetGatewayRouteDetailResponseBodyDataHeaderOp } from "./GetGatewayRouteDetailResponseBodyDataHeaderOp";
import { GetGatewayRouteDetailResponseBodyDataRedirect } from "./GetGatewayRouteDetailResponseBodyDataRedirect";
import { GetGatewayRouteDetailResponseBodyDataRetry } from "./GetGatewayRouteDetailResponseBodyDataRetry";
import { GetGatewayRouteDetailResponseBodyDataRoutePredicates } from "./GetGatewayRouteDetailResponseBodyDataRoutePredicates";
import { GetGatewayRouteDetailResponseBodyDataRouteServices } from "./GetGatewayRouteDetailResponseBodyDataRouteServices";
import { GetGatewayRouteDetailResponseBodyDataTimeout } from "./GetGatewayRouteDetailResponseBodyDataTimeout";


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

