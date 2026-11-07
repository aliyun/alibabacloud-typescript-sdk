// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayIsolationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh and en. zh is the default value, which indicates Chinese. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The type of a web fallback behavior.
   * 
   * 0: The specified content is returned.
   * 
   * 1: The specified page is displayed.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  behaviorType?: number;
  /**
   * @remarks
   * The encoding type.
   * 
   * 0: plain text
   * 
   * 1: JSON
   * 
   * @example
   * 0
   */
  bodyEncoding?: number;
  /**
   * @remarks
   * Specifies whether to enable the rule.
   * 
   * 0: disabled.
   * 
   * 1: enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  enable?: number;
  /**
   * @remarks
   * The gateway ID.
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
   * The maximum number of concurrent requests.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  maxConcurrency?: number;
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
   * The route ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 52853
   */
  routeId?: number;
  /**
   * @remarks
   * The name of the route.
   * 
   * This parameter is required.
   * 
   * @example
   * routeName
   */
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      behaviorType: 'BehaviorType',
      bodyEncoding: 'BodyEncoding',
      enable: 'Enable',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      maxConcurrency: 'MaxConcurrency',
      responseContentBody: 'ResponseContentBody',
      responseRedirectUrl: 'ResponseRedirectUrl',
      responseStatusCode: 'ResponseStatusCode',
      routeId: 'RouteId',
      routeName: 'RouteName',
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
      maxConcurrency: 'number',
      responseContentBody: 'string',
      responseRedirectUrl: 'string',
      responseStatusCode: 'number',
      routeId: 'number',
      routeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

