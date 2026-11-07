// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayIsolationRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the web fallback behavior.
   * 
   * 0: The specified content is returned.
   * 
   * 1: Redirect the specified page.
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
   * 1: JSON text
   * 
   * @example
   * 0
   */
  bodyEncoding?: number;
  /**
   * @remarks
   * Specifies whether to enable the rule.
   * 
   * 0: disable
   * 
   * 1: enable
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
   * The ID of the concurrency rule.
   * 
   * @example
   * 358
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
   * 0: standalone
   * 
   * 1: cluster
   * 
   * 2: cluster-to-standalone
   * 
   * @example
   * 0
   */
  limitMode?: number;
  /**
   * @remarks
   * The maximum number of concurrent requests.
   * 
   * @example
   * 100
   */
  maxConcurrency?: number;
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
   * The HTTP text to be returned.
   * 
   * @example
   * text
   */
  responseContentBody?: string;
  /**
   * @remarks
   * The URL that is redirected to.
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
   * 52853
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

export class UpdateGatewayIsolationRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: UpdateGatewayIsolationRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94B12406-E44D-57C9-BF93-A8B35BFF****
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
      data: UpdateGatewayIsolationRuleResponseBodyData,
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

