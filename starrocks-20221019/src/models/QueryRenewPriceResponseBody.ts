// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRenewPriceResponseBodyDataDepreciateInfo extends $dara.Model {
  /**
   * @remarks
   * Discount rate.
   * 
   * @example
   * 0
   */
  cheapRate?: number;
  /**
   * @remarks
   * Total official price after discount.
   * 
   * @example
   * 9812
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * Indicates whether the discount amount is displayed.
   * 
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @remarks
   * Original total official price.
   * 
   * @example
   * 9812
   */
  originalStandAmount?: number;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      isShow: 'IsShow',
      originalStandAmount: 'OriginalStandAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'number',
      cheapStandAmount: 'number',
      isShow: 'boolean',
      originalStandAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewPriceResponseBodyDataOptionalPromotions extends $dara.Model {
  /**
   * @remarks
   * Coupon description.
   * 
   * @example
   * youhuiquan_desc
   */
  promotionDesc?: string;
  /**
   * @remarks
   * Coupon name.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionName?: string;
  /**
   * @remarks
   * Coupon ID.
   * 
   * @example
   * youhuiquan_12378dfj6
   */
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * Resource count.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * rule_8syh2j121ns
   */
  name?: string;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 8su2i3hsdf128
   */
  ruleDescId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      name: 'string',
      ruleDescId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Billing instance ID. For the default compute group (FE compute group and default BE compute group), this value is the instance ID. Otherwise, it is the compute group ID.
   * 
   * @example
   * c-96f3bc7f04b2****
   */
  billingInstanceId?: string;
  /**
   * @remarks
   * Currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * Total official price after discount.
   * 
   * @example
   * 9812
   */
  depreciateInfo?: QueryRenewPriceResponseBodyDataDepreciateInfo;
  /**
   * @remarks
   * Discount amount = original amount − billable amount (including coupon discounts).
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * Coupon ID.
   */
  optionalPromotions?: QueryRenewPriceResponseBodyDataOptionalPromotions[];
  /**
   * @remarks
   * Original amount = catalog price × usage.
   * 
   * @example
   * 9812
   */
  originalAmount?: number;
  /**
   * @remarks
   * Data structure of the response.
   */
  rules?: QueryRenewPriceResponseBodyDataRules[];
  /**
   * @remarks
   * Discounted price based on the official discount.
   * 
   * @example
   * 9812
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * Official discounted price.
   * 
   * @example
   * 9812
   */
  standPrice?: number;
  /**
   * @remarks
   * Amount.
   * 
   * @example
   * 9812
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      billingInstanceId: 'BillingInstanceId',
      currency: 'Currency',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      rules: 'Rules',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingInstanceId: 'string',
      currency: 'string',
      depreciateInfo: QueryRenewPriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      optionalPromotions: { 'type': 'array', 'itemType': QueryRenewPriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryRenewPriceResponseBodyDataRules },
      standDiscountPrice: 'number',
      standPrice: 'number',
      tradeAmount: 'number',
    };
  }

  validate() {
    if(this.depreciateInfo && typeof (this.depreciateInfo as any).validate === 'function') {
      (this.depreciateInfo as any).validate();
    }
    if(Array.isArray(this.optionalPromotions)) {
      $dara.Model.validateArray(this.optionalPromotions);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response data.
   */
  data?: QueryRenewPriceResponseBodyData[];
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * null
   */
  errMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryRenewPriceResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

