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
   * The exact value of cached consumption. Supports decimals in credit scenarios.
   * 
   * @example
   * 10.5
   */
  cachedAmountDecimal?: number;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * consumer-a
   */
  consumer?: string;
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
   * The exact value of input consumption. Supports decimals in credit scenarios.
   * 
   * @example
   * 120.5
   */
  inputAmountDecimal?: number;
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
   * The exact value of output consumption. Supports decimals in credit scenarios.
   * 
   * @example
   * 80.5
   */
  outputAmountDecimal?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-123456
   */
  requestId?: string;
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
  /**
   * @remarks
   * The exact value of total consumption. Supports decimals in credit scenarios.
   * 
   * @example
   * 210.5
   */
  usedAmountDecimal?: number;
  static names(): { [key: string]: string } {
    return {
      cachedAmount: 'cachedAmount',
      cachedAmountDecimal: 'cachedAmountDecimal',
      consumer: 'consumer',
      inputAmount: 'inputAmount',
      inputAmountDecimal: 'inputAmountDecimal',
      model: 'model',
      outputAmount: 'outputAmount',
      outputAmountDecimal: 'outputAmountDecimal',
      requestId: 'requestId',
      startTime: 'startTime',
      usedAmount: 'usedAmount',
      usedAmountDecimal: 'usedAmountDecimal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cachedAmount: 'number',
      cachedAmountDecimal: 'number',
      consumer: 'string',
      inputAmount: 'number',
      inputAmountDecimal: 'number',
      model: 'string',
      outputAmount: 'number',
      outputAmountDecimal: 'number',
      requestId: 'string',
      startTime: 'string',
      usedAmount: 'number',
      usedAmountDecimal: 'number',
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
   * The exact value of total cached consumption. Supports decimals in credit scenarios.
   * 
   * @example
   * 20.5
   */
  cachedAmountDecimal?: number;
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
   * The exact value of total input consumption. Supports decimals in credit scenarios.
   * 
   * @example
   * 300.5
   */
  inputAmountDecimal?: number;
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
   * The exact value of total output consumption. Supports decimals in credit scenarios.
   * 
   * @example
   * 180.5
   */
  outputAmountDecimal?: number;
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
   * The quota dimension. Valid values: token and credit.
   * 
   * @example
   * token
   */
  quotaDimension?: string;
  /**
   * @remarks
   * The subject type. Valid values: consumer and consumer_group.
   * 
   * @example
   * consumer_group
   */
  subjectType?: string;
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
  /**
   * @remarks
   * The exact value of the total used amount of the subject. Supports decimals in credit scenarios.
   * 
   * @example
   * 500.5
   */
  usedAmountDecimal?: number;
  static names(): { [key: string]: string } {
    return {
      cachedAmount: 'cachedAmount',
      cachedAmountDecimal: 'cachedAmountDecimal',
      details: 'details',
      inputAmount: 'inputAmount',
      inputAmountDecimal: 'inputAmountDecimal',
      outputAmount: 'outputAmount',
      outputAmountDecimal: 'outputAmountDecimal',
      overLimit: 'overLimit',
      quotaDimension: 'quotaDimension',
      subjectType: 'subjectType',
      totalQuota: 'totalQuota',
      usedAmount: 'usedAmount',
      usedAmountDecimal: 'usedAmountDecimal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cachedAmount: 'number',
      cachedAmountDecimal: 'number',
      details: GetGatewayQuotaRuleSubjectUsageResponseBodyDataDetails,
      inputAmount: 'number',
      inputAmountDecimal: 'number',
      outputAmount: 'number',
      outputAmountDecimal: 'number',
      overLimit: 'boolean',
      quotaDimension: 'string',
      subjectType: 'string',
      totalQuota: 'number',
      usedAmount: 'number',
      usedAmountDecimal: 'number',
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

