// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayFlowRuleResponseBodyData extends $dara.Model {
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
   * Text
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

