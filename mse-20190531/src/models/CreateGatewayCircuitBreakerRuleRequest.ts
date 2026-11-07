// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayCircuitBreakerRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want the results to be displayed. Valid values: zh (default): Chinese. en: English.
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
   * 0: disables the rule.
   * 
   * 1: enables the rule.
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
   * gw-c9bc5afd61014165bd58f621b491*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The threshold in slow call proportion mode.
   * 
   * @example
   * 10
   */
  maxAllowedMs?: number;
  /**
   * @remarks
   * The minimum number of requests to trigger circuit breaking.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  minRequestAmount?: number;
  /**
   * @remarks
   * The circuit breaking timeout period.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  recoveryTimeoutSec?: number;
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
   * The redirection URL.
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
   * 645
   */
  routeId?: number;
  /**
   * @remarks
   * The route name.
   * 
   * This parameter is required.
   * 
   * @example
   * routeName
   */
  routeName?: string;
  /**
   * @remarks
   * The statistical duration for triggering circuit breaking.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  statDurationSec?: number;
  /**
   * @remarks
   * The type of the threshold.
   * 
   * 0: slow call proportion
   * 
   * 1: failure proportion
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  strategy?: number;
  /**
   * @remarks
   * The request percentage that triggers circuit breaking.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  triggerRatio?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      behaviorType: 'BehaviorType',
      bodyEncoding: 'BodyEncoding',
      enable: 'Enable',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      maxAllowedMs: 'MaxAllowedMs',
      minRequestAmount: 'MinRequestAmount',
      recoveryTimeoutSec: 'RecoveryTimeoutSec',
      responseContentBody: 'ResponseContentBody',
      responseRedirectUrl: 'ResponseRedirectUrl',
      responseStatusCode: 'ResponseStatusCode',
      routeId: 'RouteId',
      routeName: 'RouteName',
      statDurationSec: 'StatDurationSec',
      strategy: 'Strategy',
      triggerRatio: 'TriggerRatio',
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
      maxAllowedMs: 'number',
      minRequestAmount: 'number',
      recoveryTimeoutSec: 'number',
      responseContentBody: 'string',
      responseRedirectUrl: 'string',
      responseStatusCode: 'number',
      routeId: 'number',
      routeName: 'string',
      statDurationSec: 'number',
      strategy: 'number',
      triggerRatio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

