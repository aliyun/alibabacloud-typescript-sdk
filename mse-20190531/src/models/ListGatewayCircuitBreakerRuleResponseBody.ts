// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayCircuitBreakerRuleResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The Web fallback behavior type.
   * 
   * 0: Return specified content.
   * 
   * 1: Redirect to a specified page.
   * 
   * @example
   * 0
   */
  behaviorType?: number;
  /**
   * @remarks
   * The encoding type.
   * 
   * 0: Plain text
   * 
   * 1: JSON
   * 
   * @example
   * 0
   */
  bodyEncoding?: number;
  /**
   * @remarks
   * Whether to enable.
   * 
   * 0: Not enabled.
   * 
   * 1: Enabled.
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
   * 11919
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The circuit breaker rule ID.
   * 
   * @example
   * 467
   */
  id?: number;
  /**
   * @remarks
   * The filter rule id
   */
  idList?: number[];
  /**
   * @remarks
   * The threshold conversion mode.
   * 
   * 0: Single machine.
   * 
   * 1: Cluster.
   * 
   * 2: Cluster to single machine.
   * 
   * @example
   * 0
   */
  limitMode?: number;
  /**
   * @remarks
   * The slow call threshold in slow call pattern.
   * 
   * @example
   * 14
   */
  maxAllowedMs?: number;
  /**
   * @remarks
   * The minimum number of requests to trigger circuit breaking.
   * 
   * @example
   * 10
   */
  minRequestAmount?: number;
  /**
   * @remarks
   * The circuit breaking recovery duration.
   * 
   * @example
   * 12
   */
  recoveryTimeoutSec?: number;
  /**
   * @remarks
   * The custom header, input as key-value pairs.
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
   * 204
   */
  responseStatusCode?: number;
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * 3091
   */
  routeId?: number;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * routeName
   */
  routeName?: string;
  /**
   * @remarks
   * The circuit breaking statistics duration.
   * 
   * @example
   * 11
   */
  statDurationSec?: number;
  /**
   * @remarks
   * The threshold pattern.
   * 
   * 0: Slow call pattern.
   * 
   * 1: Exception pattern.
   * 
   * @example
   * 0
   */
  strategy?: number;
  /**
   * @remarks
   * The percentage to trigger circuit breaking.
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

export class ListGatewayCircuitBreakerRuleResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The Web fallback behavior type.
   * 
   * 0: Return specified content
   * 
   * 1: Redirect to a specified page
   * 
   * @example
   * 0
   */
  behaviorType?: number;
  /**
   * @remarks
   * The encoding type.
   * 
   * 0: Plain text
   * 
   * 1: JSON
   * 
   * @example
   * 0
   */
  bodyEncoding?: number;
  /**
   * @remarks
   * Whether to enable.
   * 
   * 0: Not enabled.
   * 
   * 1: Enabled.
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
   * 11919
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-1ee34548c68f4778a25c05abd657****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The circuit breaker rule ID.
   * 
   * @example
   * 467
   */
  id?: number;
  /**
   * @remarks
   * The filter rule id
   */
  idList?: number[];
  /**
   * @remarks
   * The threshold conversion mode.
   * 
   * 0: Single machine.
   * 
   * 1: Cluster.
   * 
   * 2: Cluster to single machine.
   * 
   * @example
   * 0
   */
  limitMode?: number;
  /**
   * @remarks
   * The slow call threshold in slow call pattern.
   * 
   * @example
   * 10
   */
  maxAllowedMs?: number;
  /**
   * @remarks
   * The minimum number of requests to trigger circuit breaking.
   * 
   * @example
   * 10
   */
  minRequestAmount?: number;
  /**
   * @remarks
   * The circuit breaking recovery duration.
   * 
   * @example
   * 12
   */
  recoveryTimeoutSec?: number;
  /**
   * @remarks
   * The custom header, input as key-value pairs.
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
   * 204
   */
  responseStatusCode?: number;
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * 3450
   */
  routeId?: number;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * routeName
   */
  routeName?: string;
  /**
   * @remarks
   * The circuit breaking statistics duration.
   * 
   * @example
   * 11
   */
  statDurationSec?: number;
  /**
   * @remarks
   * The threshold pattern.
   * 
   * 0: Slow call pattern.
   * 
   * 1: Exception pattern.
   * 
   * @example
   * 0
   */
  strategy?: number;
  /**
   * @remarks
   * The percentage to trigger circuit breaking.
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

export class ListGatewayCircuitBreakerRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the instance list
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page set during input
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListGatewayCircuitBreakerRuleResponseBodyDataResult[];
  /**
   * @remarks
   * The returned result collection.
   */
  results?: ListGatewayCircuitBreakerRuleResponseBodyDataResults[];
  /**
   * @remarks
   * The total number of instances queried
   * 
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
  /**
   * @remarks
   * The returned data.
   */
  data?: ListGatewayCircuitBreakerRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
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

