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

export class ListGatewayCircuitBreakerRuleResponseBodyDataResults extends $dara.Model {
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
   * gw-1ee34548c68f4778a25c05abd657****
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
   * 10
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
   * 3450
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

export class ListGatewayCircuitBreakerRuleResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  result?: ListGatewayCircuitBreakerRuleResponseBodyDataResult[];
  results?: ListGatewayCircuitBreakerRuleResponseBodyDataResults[];
  /**
   * @example
   * 11
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      results: 'Results',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListGatewayCircuitBreakerRuleResponseBodyDataResult },
      results: { 'type': 'array', 'itemType': ListGatewayCircuitBreakerRuleResponseBodyDataResults },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayCircuitBreakerRuleResponseBody extends $dara.Model {
  data?: ListGatewayCircuitBreakerRuleResponseBodyData;
  /**
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
      data: ListGatewayCircuitBreakerRuleResponseBodyData,
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

