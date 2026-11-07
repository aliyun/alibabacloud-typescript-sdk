// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayRouteShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The route description.
   * 
   * @example
   * a route for xxx
   */
  description?: string;
  /**
   * @remarks
   * The destination service type. Valid values:
   * - Single: single service
   * - Multiple: multiple services
   * - VersionOriented: tag-based routing
   * - Mock: mock
   * - Redirect: redirect
   * 
   * @example
   * Multiple
   */
  destinationType?: string;
  /**
   * @remarks
   * The mock response configuration.
   */
  directResponseJSONShrink?: string;
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * 20
   */
  domainId?: number;
  /**
   * @remarks
   * The domain name list.
   * 
   * @example
   * [0,94]
   */
  domainIdListJSON?: string;
  /**
   * @remarks
   * **[Deprecated]** Use UpdateGatewayRouteWafStatus to update the WAF status of the route.
   * 
   * @example
   * true
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
   * The fallback service.
   */
  fallbackServicesShrink?: string;
  /**
   * @remarks
   * The gateway ID.
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
   * The route name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The JSON string of the route policy.
   * 
   * @example
   * {"CORS":"{\\"allowMethods\\":\\"GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH\\",\\"allowHeaders\\":\\"*\\",\\"exposeHeaders\\":\\"*\\",\\"unitNum\\":12,\\"allowCredentials\\":true,\\"status\\":\\"off\\",\\"allowOrigins\\":\\"*\\",\\"timeUnit\\":\\"h\\"}","Timeout":"{\\"unitNum\\":10,\\"timeUnit\\":\\"s\\",\\"status\\":\\"off\\"}","Retry":"{\\"attempts\\":2,\\"retryOn\\":[\\"5xx\\"],\\"status\\":\\"off\\"}","HTTPRewrite":"{\\"pathType\\":\\"EQUAL\\",\\"path\\":\\"/o\\",\\"status\\":\\"off\\"}","Waf":"{\\"enabled\\":false}","HeaderOp":"{\\"status\\":\\"off\\",\\"headerOpItems\\":[{\\"directionType\\":\\"Request\\",\\"opType\\":\\"Add\\",\\"key\\":\\"kkk\\",\\"value\\":\\"ll\\"}]}"}
   */
  policies?: string;
  /**
   * @remarks
   * The matching rules.
   */
  predicatesShrink?: string;
  /**
   * @remarks
   * The redirect configuration.
   */
  redirectJSONShrink?: string;
  /**
   * @remarks
   * The route order. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * The route type. Valid values:
   * - Op: management and control route
   * 
   * @example
   * Op
   */
  routeType?: string;
  /**
   * @remarks
   * The service list. This parameter is required when the route points to a single service, multiple services, or tag-based routing.
   */
  servicesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      description: 'Description',
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
      description: 'string',
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

