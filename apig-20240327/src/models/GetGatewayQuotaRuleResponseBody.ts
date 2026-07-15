// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayQuotaRuleResponseBodyDataConsumers extends $dara.Model {
  /**
   * @remarks
   * The ID of the principal (consumer).
   * 
   * @example
   * c-aaa
   */
  id?: string;
  /**
   * @remarks
   * The name of the principal (consumer).
   * 
   * @example
   * consumer-a
   */
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
   * @remarks
   * The base timestamp of the period.
   * 
   * @example
   * 1745846400000
   */
  baseTimestamp?: number;
  /**
   * @remarks
   * The number of consumers associated with the rule.
   * 
   * @example
   * 20
   */
  consumerCount?: number;
  /**
   * @remarks
   * The list of principals (consumers) bound to this rule.
   */
  consumers?: GetGatewayQuotaRuleResponseBodyDataConsumers[];
  /**
   * @remarks
   * The quota period type.
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The quota dimension.
   * 
   * @example
   * token
   */
  quotaDimension?: string;
  /**
   * @remarks
   * The quota limit.
   * 
   * @example
   * 1000
   */
  quotaLimit?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * qr-d8j7fpmm1hks65xxxxxx
   */
  ruleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * daily-token-limit
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule status.
   * 
   * @example
   * enabled
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The time zone for the calendar period, in UTC+x format.
   * 
   * @example
   * GMT+8
   */
  timezone?: string;
  /**
   * @remarks
   * The reset period type.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * {"ruleId":1001}
   */
  data?: GetGatewayQuotaRuleResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
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

