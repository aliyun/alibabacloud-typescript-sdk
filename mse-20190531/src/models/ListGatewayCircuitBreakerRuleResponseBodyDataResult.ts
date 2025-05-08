// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayCircuitBreakerRuleResponseBodyDataResult extends $dara.Model {
  /**
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
   * @example
   * 0
   */
  enable?: number;
  /**
   * @example
   * 11919
   */
  gatewayId?: number;
  /**
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 467
   */
  id?: number;
  idList?: number[];
  /**
   * @example
   * 0
   */
  limitMode?: number;
  /**
   * @example
   * 14
   */
  maxAllowedMs?: number;
  /**
   * @example
   * 10
   */
  minRequestAmount?: number;
  /**
   * @example
   * 12
   */
  recoveryTimeoutSec?: number;
  /**
   * @example
   * key=value
   */
  responseAdditionalHeaders?: string;
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
   * 204
   */
  responseStatusCode?: number;
  /**
   * @example
   * 3091
   */
  routeId?: number;
  /**
   * @example
   * routeName
   */
  routeName?: string;
  /**
   * @example
   * 11
   */
  statDurationSec?: number;
  /**
   * @example
   * 0
   */
  strategy?: number;
  /**
   * @example
   * 10
   */
  triggerRatio?: number;
  static names(): { [key: string]: string } {
    return {
      behaviorType: 'BehaviorType',
      bodyEncoding: 'BodyEncoding',
      enable: 'Enable',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      idList: 'IdList',
      limitMode: 'LimitMode',
      maxAllowedMs: 'MaxAllowedMs',
      minRequestAmount: 'MinRequestAmount',
      recoveryTimeoutSec: 'RecoveryTimeoutSec',
      responseAdditionalHeaders: 'ResponseAdditionalHeaders',
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
      behaviorType: 'number',
      bodyEncoding: 'number',
      enable: 'number',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      idList: { 'type': 'array', 'itemType': 'number' },
      limitMode: 'number',
      maxAllowedMs: 'number',
      minRequestAmount: 'number',
      recoveryTimeoutSec: 'number',
      responseAdditionalHeaders: 'string',
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
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

