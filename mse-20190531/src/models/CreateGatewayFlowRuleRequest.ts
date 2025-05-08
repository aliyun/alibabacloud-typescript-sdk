// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayFlowRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh and en. zh indicates Chinese, which is the default value. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The type of the web fallback behavior.
   * 
   * 0: returns the specified content.
   * 
   * 1: redirects to the specified page.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  behaviorType?: number;
  /**
   * @remarks
   * The encoding format.
   * 
   * 0: normal text
   * 
   * 1: JSON
   * 
   * @example
   * 0
   */
  bodyEncoding?: number;
  /**
   * @remarks
   * Specifies whether to enable the throttling rule.
   * 
   * 0: disables the throttling rule.
   * 
   * 1: enables the throttling rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  enable?: number;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 14407
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-e2d226bba4b2445c9e29fa7f8216****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The HTTP text to be returned.
   * 
   * @example
   * text
   */
  responseContentBody?: string;
  /**
   * @remarks
   * The address to be redirected to.
   * 
   * @example
   * www.******.com
   */
  responseRedirectUrl?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 429
   */
  responseStatusCode?: number;
  /**
   * @remarks
   * The ID of the route.
   * 
   * This parameter is required.
   * 
   * @example
   * 52853
   */
  routeId?: number;
  /**
   * @remarks
   * The name of the routing rule.
   * 
   * This parameter is required.
   * 
   * @example
   * routeName
   */
  routeName?: string;
  /**
   * @remarks
   * The overall queries per second (QPS) threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      behaviorType: 'BehaviorType',
      bodyEncoding: 'BodyEncoding',
      enable: 'Enable',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      responseContentBody: 'ResponseContentBody',
      responseRedirectUrl: 'ResponseRedirectUrl',
      responseStatusCode: 'ResponseStatusCode',
      routeId: 'RouteId',
      routeName: 'RouteName',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      behaviorType: 'number',
      bodyEncoding: 'number',
      enable: 'number',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      responseContentBody: 'string',
      responseRedirectUrl: 'string',
      responseStatusCode: 'number',
      routeId: 'number',
      routeName: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

