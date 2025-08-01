// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayIsolationRuleResponseBodyData extends $dara.Model {
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
   * 358
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
   * 100
   */
  maxConcurrency?: number;
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
   * 52853
   */
  routeId?: number;
  /**
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
  data?: UpdateGatewayIsolationRuleResponseBodyData;
  /**
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

