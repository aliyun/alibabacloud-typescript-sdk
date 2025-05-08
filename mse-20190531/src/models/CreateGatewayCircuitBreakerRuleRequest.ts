// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayCircuitBreakerRuleRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  behaviorType?: number;
  /**
   * @example
   * 0
   */
  bodyEncoding?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  enable?: number;
  /**
   * @example
   * 14407
   */
  gatewayId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gw-c9bc5afd61014165bd58f621b491*****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 10
   */
  maxAllowedMs?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  minRequestAmount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  recoveryTimeoutSec?: number;
  /**
   * @example
   * text
   */
  responseContentBody?: string;
  /**
   * @example
   * www.******.com
   */
  responseRedirectUrl?: string;
  /**
   * @example
   * 429
   */
  responseStatusCode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 645
   */
  routeId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * routeName
   */
  routeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11
   */
  statDurationSec?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  strategy?: number;
  /**
   * @remarks
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

