// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayFlowRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the web fallback behavior.
   * 
   * 0: The specified content is returned.
   * 
   * 1: The specified page is displayed.
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
   * 0: The rule is not enabled.
   * 
   * 1: The rule is enabled.
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
   * @example
   * gw-e2d226bba4b2445c9e29fa7f8216****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the throttling rule.
   * 
   * @example
   * 549
   */
  id?: number;
  /**
   * @remarks
   * The IDs of the circuit breaking rules that are used to filter data.
   */
  idList?: number[];
  /**
   * @remarks
   * The threshold conversion mode.
   * 
   * 0: standalone.
   * 
   * 1: cluster.
   * 
   * 2: cluster-to-standalone.
   * 
   * @example
   * 0
   */
  limitMode?: number;
  /**
   * @remarks
   * The custom header. The input is a key-value pair.
   * 
   * @example
   * key=value
   */
  responseAdditionalHeaders?: string;
  /**
   * @remarks
   * The HTTP return text.
   * 
   * @example
   * Text
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
   * @example
   * 48811
   */
  routeId?: number;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * routeA
   */
  routeName?: string;
  /**
   * @remarks
   * The duration of the statistics.
   * 
   * @example
   * 10
   */
  statDurationMs?: number;
  /**
   * @remarks
   * The overall queries per second (QPS) threshold.
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

export class UpdateGatewayFlowRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: UpdateGatewayFlowRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2B74E7F7-DF54-5AB1-B8F2-67391B83****
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
      data: UpdateGatewayFlowRuleResponseBodyData,
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

