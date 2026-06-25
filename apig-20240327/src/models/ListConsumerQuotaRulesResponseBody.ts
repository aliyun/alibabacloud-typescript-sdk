// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerQuotaRulesResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * gw-123456
   */
  gatewayId?: string;
  /**
   * @example
   * prod-gateway
   */
  gatewayName?: string;
  /**
   * @example
   * 30
   */
  periodMultiplier?: string;
  /**
   * @example
   * week
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
   * qr-d8j7fpmm1hksxxxxxx
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
   * UTC+8
   */
  timezone?: string;
  /**
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
   * @example
   * [{"ruleId":"rule-001"}]
   */
  items?: ListConsumerQuotaRulesResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"totalSize":100}
   */
  data?: ListConsumerQuotaRulesResponseBodyData;
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

