// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayCircuitBreakerRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The web fallback behavior type. Valid values:
   * - 0: Return specified text.
   * - 1: Redirect to a specified page.
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
   * @example
   * gw-c9bc5afd61014165bd58f621b491****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the circuit breaker rule.
   * 
   * @example
   * 369
   */
  id?: number;
  /**
   * @remarks
   * The IDs of the filter rules.
   */
  idList?: number[];
  /**
   * @remarks
   * The threshold conversion mode. Valid values:
   * - 0: Standalone.
   * - 1: Cluster.
   * - 2: Cluster to standalone.
   * 
   * @example
   * 0
   */
  limitMode?: number;
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
   * @example
   * 10
   */
  minRequestAmount?: number;
  /**
   * @remarks
   * The recovery duration for circuit breaking.
   * 
   * @example
   * 12
   */
  recoveryTimeoutSec?: number;
  /**
   * @remarks
   * The custom headers, which are entered as key-value pairs.
   * 
   * @example
   * key=value
   */
  responseAdditionalHeaders?: string;
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
   * 201
   */
  responseStatusCode?: number;
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * 645
   */
  routeId?: number;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * routeName
   */
  routeName?: string;
  /**
   * @remarks
   * The statistical duration for circuit breaking.
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
   * @example
   * 0
   */
  strategy?: number;
  /**
   * @remarks
   * The percentage that triggers circuit breaking.
   * 
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

export class UpdateGatewayCircuitBreakerRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateGatewayCircuitBreakerRuleResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC34E4A3-5F1C-4E40-86EA-02EDF967****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateGatewayCircuitBreakerRuleResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

