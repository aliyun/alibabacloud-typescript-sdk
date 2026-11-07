// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayIsolationRuleResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The web fallback behavior type. Valid values:
   * - 0: return specified content.
   * - 1: redirect to a specified page.
   * 
   * @example
   * 0
   */
  behaviorType?: number;
  /**
   * @remarks
   * The encoding type. Valid values:
   * - 0: plain text.
   * - 1: JSON.
   * 
   * @example
   * 0
   */
  bodyEncoding?: number;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * - 0: disabled.
   * - 1: enabled.
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
   * gw-e2d226bba4b2445c9e29fa7f8216****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the concurrency rule.
   * 
   * @example
   * 358
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
   * - 0: standalone.
   * - 1: cluster.
   * - 2: cluster to standalone.
   * 
   * @example
   * 0
   */
  limitMode?: number;
  /**
   * @remarks
   * The overall concurrency threshold.
   * 
   * @example
   * 100
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The custom headers, specified as key-value pairs.
   * 
   * @example
   * key:value
   */
  responseAdditionalHeaders?: string;
  /**
   * @remarks
   * The HTTP response body.
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
   * @example
   * 52853
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
      maxConcurrency: 'MaxConcurrency',
      responseAdditionalHeaders: 'ResponseAdditionalHeaders',
      responseContentBody: 'ResponseContentBody',
      responseRedirectUrl: 'ResponseRedirectUrl',
      responseStatusCode: 'ResponseStatusCode',
      routeId: 'RouteId',
      routeName: 'RouteName',
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
      maxConcurrency: 'number',
      responseAdditionalHeaders: 'string',
      responseContentBody: 'string',
      responseRedirectUrl: 'string',
      responseStatusCode: 'number',
      routeId: 'number',
      routeName: 'string',
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

export class ListGatewayIsolationRuleResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The web fallback behavior type. Valid values:
   * - 0: return specified content.
   * - 1: redirect to a specified page.
   * 
   * @example
   * 0
   */
  behaviorType?: number;
  /**
   * @remarks
   * The encoding type. Valid values:
   * - 0: plain text.
   * - 1: JSON.
   * 
   * @example
   * 0
   */
  bodyEncoding?: number;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * - 0: disabled.
   * - 1: enabled.
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
   * gw-e2d226bba4b2445c9e29fa7f8216****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the concurrency rule.
   * 
   * @example
   * 358
   */
  id?: number;
  /**
   * @remarks
   * The IDs of the filter rules.
   */
  idList?: number[];
  /**
   * @remarks
   * The threshold conversion type. Valid values:
   * - 0: standalone.
   * - 1: cluster.
   * - 2: standalone to cluster.
   * 
   * @example
   * 1
   */
  limitMode?: number;
  /**
   * @remarks
   * The overall concurrency threshold.
   * 
   * @example
   * 100
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The custom headers, specified as key-value pairs.
   * 
   * @example
   * key=value
   */
  responseAdditionalHeaders?: string;
  /**
   * @remarks
   * The HTTP response body.
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
   * @example
   * 52853
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
      maxConcurrency: 'MaxConcurrency',
      responseAdditionalHeaders: 'ResponseAdditionalHeaders',
      responseContentBody: 'ResponseContentBody',
      responseRedirectUrl: 'ResponseRedirectUrl',
      responseStatusCode: 'ResponseStatusCode',
      routeId: 'RouteId',
      routeName: 'RouteName',
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
      maxConcurrency: 'number',
      responseAdditionalHeaders: 'string',
      responseContentBody: 'string',
      responseRedirectUrl: 'string',
      responseStatusCode: 'number',
      routeId: 'number',
      routeName: 'string',
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

export class ListGatewayIsolationRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the instance list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListGatewayIsolationRuleResponseBodyDataResult[];
  /**
   * @remarks
   * The returned result collection.
   */
  results?: ListGatewayIsolationRuleResponseBodyDataResults[];
  /**
   * @remarks
   * The total number of queried instances.
   * 
   * @example
   * 1
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
      result: { 'type': 'array', 'itemType': ListGatewayIsolationRuleResponseBodyDataResult },
      results: { 'type': 'array', 'itemType': ListGatewayIsolationRuleResponseBodyDataResults },
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

export class ListGatewayIsolationRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListGatewayIsolationRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6F025D43-8632-5716-AE9B-7EDDF16C****
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
      data: ListGatewayIsolationRuleResponseBodyData,
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

