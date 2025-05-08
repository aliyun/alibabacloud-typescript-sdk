// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateGatewayRouteRequestDirectResponseJSON } from "./UpdateGatewayRouteRequestDirectResponseJson";
import { UpdateGatewayRouteRequestFallbackServices } from "./UpdateGatewayRouteRequestFallbackServices";
import { UpdateGatewayRouteRequestPredicates } from "./UpdateGatewayRouteRequestPredicates";
import { UpdateGatewayRouteRequestRedirectJSON } from "./UpdateGatewayRouteRequestRedirectJson";
import { UpdateGatewayRouteRequestServices } from "./UpdateGatewayRouteRequestServices";


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

