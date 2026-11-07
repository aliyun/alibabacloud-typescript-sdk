// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The description of the route.
   * 
   * @example
   * a route for xxx
   */
  description?: string;
  /**
   * @remarks
   * The type of the destination service.
   * 
   * @example
   * Mock
   */
  destinationType?: string;
  /**
   * @remarks
   * The mock content.
   */
  directResponseJSONShrink?: string;
  /**
   * @remarks
   * The associated domain names.
   * 
   * @example
   * [90]
   */
  domainIdListJSON?: string;
  /**
   * @remarks
   * **[Deprecated]** Use UpdateGatewayRouteWafStatus to update the WAF status of the route.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  enableWaf?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the fallback service.
   * 
   * @example
   * true
   */
  fallback?: boolean;
  /**
   * @remarks
   * The fallback services.
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
   * The matching conditions of the route.
   */
  predicatesShrink?: string;
  /**
   * @remarks
   * The redirect configuration.
   */
  redirectJSONShrink?: string;
  /**
   * @remarks
   * The order of the route.
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * The destination services. Specify this parameter when the route points to a single service, multiple services, or tag-based routing.
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

