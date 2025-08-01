// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayFlowRuleResponseBodyDataResult extends $dara.Model {
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
   * 14407
   */
  gatewayId?: number;
  /**
   * @example
   * gw-e2d226bba4b2445c9e29fa7f8216****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 549
   */
  id?: number;
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
   * @example
   * 48811
   */
  routeId?: number;
  /**
   * @example
   * routeA
   */
  routeName?: string;
  /**
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
   * 14407
   */
  gatewayId?: number;
  /**
   * @example
   * gw-e2d226bba4b2445c9e29fa7f8216****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 549
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
   * 429
   */
  responseStatusCode?: number;
  /**
   * @example
   * 48811
   */
  routeId?: number;
  /**
   * @example
   * routeA
   */
  routeName?: string;
  /**
   * @example
   * 10
   */
  statDurationMs?: number;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  result?: ListGatewayFlowRuleResponseBodyDataResult[];
  results?: ListGatewayFlowRuleResponseBodyDataResults[];
  /**
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
  data?: ListGatewayFlowRuleResponseBodyData;
  /**
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

