// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateGatewayRouteWafStatusResponseBodyDataCors } from "./UpdateGatewayRouteWafStatusResponseBodyDataCors";
import { UpdateGatewayRouteWafStatusResponseBodyDataDirectResponse } from "./UpdateGatewayRouteWafStatusResponseBodyDataDirectResponse";
import { UpdateGatewayRouteWafStatusResponseBodyDataHTTPRewrite } from "./UpdateGatewayRouteWafStatusResponseBodyDataHttprewrite";
import { UpdateGatewayRouteWafStatusResponseBodyDataHeaderOp } from "./UpdateGatewayRouteWafStatusResponseBodyDataHeaderOp";
import { UpdateGatewayRouteWafStatusResponseBodyDataRedirect } from "./UpdateGatewayRouteWafStatusResponseBodyDataRedirect";
import { UpdateGatewayRouteWafStatusResponseBodyDataRetry } from "./UpdateGatewayRouteWafStatusResponseBodyDataRetry";
import { UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicates } from "./UpdateGatewayRouteWafStatusResponseBodyDataRoutePredicates";
import { UpdateGatewayRouteWafStatusResponseBodyDataRouteServices } from "./UpdateGatewayRouteWafStatusResponseBodyDataRouteServices";
import { UpdateGatewayRouteWafStatusResponseBodyDataTimeout } from "./UpdateGatewayRouteWafStatusResponseBodyDataTimeout";


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

