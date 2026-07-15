// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerQuotaRulesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway to which the rule belongs.
   * 
   * @example
   * gw-123456
   */
  gatewayId?: string;
  /**
   * @remarks
   * The name of the gateway to which the rule belongs.
   * 
   * @example
   * prod-gateway
   */
  gatewayName?: string;
  /**
   * @remarks
   * The period multiplier, which specifies the number of periods after which the quota is reset. This parameter is returned only when the rule uses a custom cycle. Minimum value: 1. Maximum value: 60.
   * 
   * @example
   * 30
   */
  periodMultiplier?: string;
  /**
   * @remarks
   * The period type.
   * 
   * @example
   * week
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
   * qr-d8j7fpmm1hksxxxxxx
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
   * The time zone corresponding to the calendar cycle, in UTC+x format.
   * 
   * @example
   * UTC+8
   */
  timezone?: string;
  /**
   * @remarks
   * The cycle type. Valid values:
   * - calendar: calendar cycle.
   * - epoch: custom cycle.
   * 
   * @example
   * calendar
   */
  windowAlignment?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      gatewayName: 'gatewayName',
      periodMultiplier: 'periodMultiplier',
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
      gatewayId: 'string',
      gatewayName: 'string',
      periodMultiplier: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerQuotaRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of rules.
   * 
   * @example
   * [{"ruleId":"rule-001"}]
   */
  items?: ListConsumerQuotaRulesResponseBodyDataItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The current page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of configured quota rules.
   * 
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListConsumerQuotaRulesResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerQuotaRulesResponseBody extends $dara.Model {
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
   * {"totalSize":100}
   */
  data?: ListConsumerQuotaRulesResponseBodyData;
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
      data: ListConsumerQuotaRulesResponseBodyData,
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

