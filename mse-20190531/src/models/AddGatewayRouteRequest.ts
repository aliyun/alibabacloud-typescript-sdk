// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddGatewayRouteRequestDirectResponseJSON } from "./AddGatewayRouteRequestDirectResponseJson";
import { AddGatewayRouteRequestFallbackServices } from "./AddGatewayRouteRequestFallbackServices";
import { AddGatewayRouteRequestPredicates } from "./AddGatewayRouteRequestPredicates";
import { AddGatewayRouteRequestRedirectJSON } from "./AddGatewayRouteRequestRedirectJson";
import { AddGatewayRouteRequestServices } from "./AddGatewayRouteRequestServices";


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

