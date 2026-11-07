// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayFlowRuleResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The Web fallback behavior type.
   * 
   * 0: Return specified content
   * 
   * 1: Redirect to specified page
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
   * Indicates whether the rule is enabled.
   * 
   * 0: Disabled.
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
   * 14407
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique gateway identity ID.
   * 
   * @example
   * gw-e2d226bba4b2445c9e29fa7f8216****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The routing throttle rule ID.
   * 
   * @example
   * 549
   */
  id?: number;
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
   * The routing ID.
   * 
   * @example
   * 48811
   */
  routeId?: number;
  /**
   * @remarks
   * The routing name.
   * 
   * @example
   * routeA
   */
  routeName?: string;
  /**
   * @remarks
   * The overall QPS threshold.
   * 
   * @example
   * 10
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      behaviorType: 'BehaviorType',
      bodyEncoding: 'BodyEncoding',
      enable: 'Enable',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
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
      behaviorType: 'number',
      bodyEncoding: 'number',
      enable: 'number',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
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

export class ListGatewayFlowRuleResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * The Web fallback behavior type.
   * 
   * 0: Return specified content
   * 
   * 1: Redirect to specified page
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
   * Indicates whether the rule is enabled.
   * 
   * 0: Disabled.
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
   * 14407
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique gateway identity ID.
   * 
   * @example
   * gw-e2d226bba4b2445c9e29fa7f8216****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The routing throttle rule ID.
   * 
   * @example
   * 549
   */
  id?: number;
  /**
   * @remarks
   * The filtered rule IDs.
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
   * The custom headers, entered as key-value pairs.
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
   * 429
   */
  responseStatusCode?: number;
  /**
   * @remarks
   * The routing ID.
   * 
   * @example
   * 48811
   */
  routeId?: number;
  /**
   * @remarks
   * The routing name.
   * 
   * @example
   * routeA
   */
  routeName?: string;
  /**
   * @remarks
   * The statistics duration.
   * 
   * @example
   * 10
   */
  statDurationMs?: number;
  /**
   * @remarks
   * The overall QPS threshold.
   * 
   * @example
   * 10
   */
  threshold?: number;
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
      responseAdditionalHeaders: 'ResponseAdditionalHeaders',
      responseContentBody: 'ResponseContentBody',
      responseRedirectUrl: 'ResponseRedirectUrl',
      responseStatusCode: 'ResponseStatusCode',
      routeId: 'RouteId',
      routeName: 'RouteName',
      statDurationMs: 'StatDurationMs',
      threshold: 'Threshold',
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
      responseAdditionalHeaders: 'string',
      responseContentBody: 'string',
      responseRedirectUrl: 'string',
      responseStatusCode: 'number',
      routeId: 'number',
      routeName: 'string',
      statDurationMs: 'number',
      threshold: 'number',
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

export class ListGatewayFlowRuleResponseBodyData extends $dara.Model {
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
   * The number of rows per page set during input.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned data.
   */
  result?: ListGatewayFlowRuleResponseBodyDataResult[];
  /**
   * @remarks
   * The paged data collection.
   */
  results?: ListGatewayFlowRuleResponseBodyDataResults[];
  /**
   * @remarks
   * The total number of instances queried.
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
      result: { 'type': 'array', 'itemType': ListGatewayFlowRuleResponseBodyDataResult },
      results: { 'type': 'array', 'itemType': ListGatewayFlowRuleResponseBodyDataResults },
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

export class ListGatewayFlowRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Meta return information.
   */
  data?: ListGatewayFlowRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0951EBF0-798E-5E0B-8D38-460A14AD****
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
      data: ListGatewayFlowRuleResponseBodyData,
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

