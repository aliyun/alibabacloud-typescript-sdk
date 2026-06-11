// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayQuotaRuleSubjectUsageResponseBodyDataDetailsItems extends $dara.Model {
  /**
   * @example
   * 10
   */
  cachedAmount?: number;
  /**
   * @example
   * 120
   */
  inputAmount?: number;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @example
   * 80
   */
  outputAmount?: number;
  /**
   * @example
   * 2026-06-05 13:16:31
   */
  startTime?: string;
  /**
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
   * @example
   * [{"model":"qwen-plus",\\"usedAmount\\":210}]
   */
  items?: GetGatewayQuotaRuleSubjectUsageResponseBodyDataDetailsItems[];
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
   * @example
   * 20
   */
  cachedAmount?: number;
  /**
   * @example
   * {"totalSize":100}
   */
  details?: GetGatewayQuotaRuleSubjectUsageResponseBodyDataDetails;
  /**
   * @example
   * 300
   */
  inputAmount?: number;
  /**
   * @example
   * 180
   */
  outputAmount?: number;
  /**
   * @example
   * false
   */
  overLimit?: boolean;
  /**
   * @example
   * 1000
   */
  totalQuota?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"usedAmount":500}
   */
  data?: GetGatewayQuotaRuleSubjectUsageResponseBodyData;
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

