// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayQuotaRulesResponseBodyDataItems extends $dara.Model {
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
   * qr-xxxxx
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
   * The time zone for the natural period, in UTC+x format.
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

export class ListGatewayQuotaRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of rules.
   * 
   * @example
   * [{"ruleId":"rule-001"}]
   */
  items?: ListGatewayQuotaRulesResponseBodyDataItems[];
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
   * The total number of entries.
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
      items: { 'type': 'array', 'itemType': ListGatewayQuotaRulesResponseBodyDataItems },
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

export class ListGatewayQuotaRulesResponseBody extends $dara.Model {
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
  data?: ListGatewayQuotaRulesResponseBodyData;
  /**
   * @remarks
   * The maximum number of records to retrieve at a time. This parameter is not supported.
   * 
   * @example
   * 100
   */
  maxResults?: number;
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
   * The pagination token. This parameter is not supported.
   * 
   * @example
   * 762b1fa4e2434fd3959b1f66481979cf
   */
  nextToken?: string;
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
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGatewayQuotaRulesResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
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

