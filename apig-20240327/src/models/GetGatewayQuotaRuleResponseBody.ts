// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayQuotaRuleResponseBodyDataConsumers extends $dara.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayQuotaRuleResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1745846400000
   */
  baseTimestamp?: number;
  /**
   * @example
   * 20
   */
  consumerCount?: number;
  consumers?: GetGatewayQuotaRuleResponseBodyDataConsumers[];
  /**
   * @example
   * day
   */
  periodType?: string;
  /**
   * @example
   * token
   */
  quotaDimension?: string;
  /**
   * @example
   * 1000
   */
  quotaLimit?: number;
  /**
   * @example
   * qr-d8j7fpmm1hks65xxxxxx
   */
  ruleId?: string;
  /**
   * @example
   * daily-token-limit
   */
  ruleName?: string;
  /**
   * @example
   * enabled
   */
  ruleStatus?: string;
  /**
   * @example
   * GMT+8
   */
  timezone?: string;
  /**
   * @example
   * calendar
   */
  windowAlignment?: string;
  static names(): { [key: string]: string } {
    return {
      baseTimestamp: 'baseTimestamp',
      consumerCount: 'consumerCount',
      consumers: 'consumers',
      periodType: 'periodType',
      quotaDimension: 'quotaDimension',
      quotaLimit: 'quotaLimit',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
      timezone: 'timezone',
      windowAlignment: 'windowAlignment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseTimestamp: 'number',
      consumerCount: 'number',
      consumers: { 'type': 'array', 'itemType': GetGatewayQuotaRuleResponseBodyDataConsumers },
      periodType: 'string',
      quotaDimension: 'string',
      quotaLimit: 'number',
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      timezone: 'string',
      windowAlignment: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumers)) {
      $dara.Model.validateArray(this.consumers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayQuotaRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"ruleId":1001}
   */
  data?: GetGatewayQuotaRuleResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1234567890
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGatewayQuotaRuleResponseBodyData,
      message: 'string',
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

