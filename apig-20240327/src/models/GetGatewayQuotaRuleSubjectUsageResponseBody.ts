// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayQuotaRuleSubjectUsageResponseBodyDataDetailsItems extends $dara.Model {
  /**
   * @remarks
   * The cached token consumption.
   * 
   * @example
   * 10
   */
  cachedAmount?: number;
  /**
   * @remarks
   * The input token consumption.
   * 
   * @example
   * 120
   */
  inputAmount?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The output token consumption.
   * 
   * @example
   * 80
   */
  outputAmount?: number;
  /**
   * @remarks
   * The consumption (request) time in the format of YYYY-MM-DD.
   * 
   * @example
   * 2026-06-05
   */
  startTime?: string;
  /**
   * @remarks
   * The total consumption.
   * 
   * @example
   * 210
   */
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      cachedAmount: 'cachedAmount',
      inputAmount: 'inputAmount',
      model: 'model',
      outputAmount: 'outputAmount',
      startTime: 'startTime',
      usedAmount: 'usedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cachedAmount: 'number',
      inputAmount: 'number',
      model: 'string',
      outputAmount: 'number',
      startTime: 'string',
      usedAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayQuotaRuleSubjectUsageResponseBodyDataDetails extends $dara.Model {
  /**
   * @remarks
   * The list of usage details.
   * 
   * @example
   * [{"model":"qwen-plus",\\"usedAmount\\":210}]
   */
  items?: GetGatewayQuotaRuleSubjectUsageResponseBodyDataDetailsItems[];
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
   * The total number of records.
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
      items: { 'type': 'array', 'itemType': GetGatewayQuotaRuleSubjectUsageResponseBodyDataDetailsItems },
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

export class GetGatewayQuotaRuleSubjectUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total cached token consumption.
   * 
   * @example
   * 20
   */
  cachedAmount?: number;
  /**
   * @remarks
   * The paginated consumption details.
   * 
   * @example
   * {"totalSize":100}
   */
  details?: GetGatewayQuotaRuleSubjectUsageResponseBodyDataDetails;
  /**
   * @remarks
   * The total input token consumption.
   * 
   * @example
   * 300
   */
  inputAmount?: number;
  /**
   * @remarks
   * The total output token consumption.
   * 
   * @example
   * 180
   */
  outputAmount?: number;
  /**
   * @remarks
   * Indicates whether the quota limit is exceeded.
   * 
   * @example
   * false
   */
  overLimit?: boolean;
  /**
   * @remarks
   * The total quota of the subject.
   * 
   * @example
   * 1000
   */
  totalQuota?: number;
  /**
   * @remarks
   * The total used amount of the subject.
   * 
   * @example
   * 500
   */
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      cachedAmount: 'cachedAmount',
      details: 'details',
      inputAmount: 'inputAmount',
      outputAmount: 'outputAmount',
      overLimit: 'overLimit',
      totalQuota: 'totalQuota',
      usedAmount: 'usedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cachedAmount: 'number',
      details: GetGatewayQuotaRuleSubjectUsageResponseBodyDataDetails,
      inputAmount: 'number',
      outputAmount: 'number',
      overLimit: 'boolean',
      totalQuota: 'number',
      usedAmount: 'number',
    };
  }

  validate() {
    if(this.details && typeof (this.details as any).validate === 'function') {
      (this.details as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayQuotaRuleSubjectUsageResponseBody extends $dara.Model {
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
   * {"usedAmount":500}
   */
  data?: GetGatewayQuotaRuleSubjectUsageResponseBodyData;
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
      data: GetGatewayQuotaRuleSubjectUsageResponseBodyData,
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

