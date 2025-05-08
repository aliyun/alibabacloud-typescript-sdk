// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteShrinkRequest extends $dara.Model {
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
  directResponseJSONShrink?: string;
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
  fallbackServicesShrink?: string;
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
  predicatesShrink?: string;
  /**
   * @remarks
   * The information about redirection.
   */
  redirectJSONShrink?: string;
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
  servicesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      description: 'Description',
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
      description: 'string',
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

