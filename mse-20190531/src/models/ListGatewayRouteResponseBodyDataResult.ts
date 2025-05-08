// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayRouteResponseBodyDataResultComment } from "./ListGatewayRouteResponseBodyDataResultComment";
import { ListGatewayRouteResponseBodyDataResultDirectResponse } from "./ListGatewayRouteResponseBodyDataResultDirectResponse";
import { ListGatewayRouteResponseBodyDataResultFallbackServices } from "./ListGatewayRouteResponseBodyDataResultFallbackServices";
import { ListGatewayRouteResponseBodyDataResultRedirect } from "./ListGatewayRouteResponseBodyDataResultRedirect";
import { ListGatewayRouteResponseBodyDataResultRoutePredicates } from "./ListGatewayRouteResponseBodyDataResultRoutePredicates";
import { ListGatewayRouteResponseBodyDataResultRouteServices } from "./ListGatewayRouteResponseBodyDataResultRouteServices";


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

