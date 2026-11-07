// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayCircuitBreakerRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned results. Valid values: zh (default): Chinese, en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The web fallback behavior type. Valid values:
   * - 0: Return specified text.
   * - 1: Redirect to a specified page.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  behaviorType?: number;
  /**
   * @remarks
   * The encoding type. Valid values:
   * - 0: Plain text.
   * - 1: JSON.
   * 
   * @example
   * 0
   */
  bodyEncoding?: number;
  /**
   * @remarks
   * Specifies whether to enable the rule. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
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
   * gw-c9bc5afd61014165bd58f621b491****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the circuit breaker rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 369
   */
  id?: number;
  /**
   * @remarks
   * The slow call threshold in slow call mode.
   * 
   * @example
   * 10
   */
  maxAllowedMs?: number;
  /**
   * @remarks
   * The minimum number of requests that triggers circuit breaking.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  minRequestAmount?: number;
  /**
   * @remarks
   * The recovery duration for circuit breaking.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  recoveryTimeoutSec?: number;
  /**
   * @remarks
   * The HTTP response text.
   * 
   * @example
   * text
   */
  responseContentBody?: string;
  /**
   * @remarks
   * The redirect URL.
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
   * 645
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
  /**
   * @remarks
   * The statistical duration for circuit breaking.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  statDurationSec?: number;
  /**
   * @remarks
   * The threshold type. Valid values:
   * - 0: Slow call.
   * - 1: Exception.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  strategy?: number;
  /**
   * @remarks
   * The percentage that triggers circuit breaking.
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
      id: 'Id',
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
      id: 'number',
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

