// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCreateInstancePriceResponseBodyPriceInfoDepreciateInfo extends $dara.Model {
  /**
   * @remarks
   * The price reduction rate.
   */
  cheapRate?: string;
  /**
   * @remarks
   * The standard total price after the price reduction.
   */
  cheapStandAmount?: string;
  /**
   * @remarks
   * Indicates whether to display the price reduction percentage.
   */
  isShow?: boolean;
  /**
   * @remarks
   * The monthly equivalent price.
   */
  monthPrice?: string;
  /**
   * @remarks
   * The original standard total price.
   */
  originalStandAmount?: string;
  /**
   * @remarks
   * The start time of the price reduction.
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      isShow: 'IsShow',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'string',
      cheapStandAmount: 'string',
      isShow: 'boolean',
      monthPrice: 'string',
      originalStandAmount: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceResponseBodyPriceInfoOptionalPromotions extends $dara.Model {
  /**
   * @remarks
   * The coupon description.
   * 
   * @example
   * ¥1,391.5 coupon (valid until 03/23/2022)
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * ¥1,391.5 coupon
   */
  promotionName?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 500011220010099
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * Indicates whether the coupon is selected. Valid values:
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceResponseBodyPriceInfoRules extends $dara.Model {
  /**
   * @remarks
   * The promotion rule description.
   * 
   * @example
   * Get a 15% discount for a 1-year subscription
   */
  description?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 587
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCreateInstancePriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ORDER.INST_HAS_UNPAID_ORDER
   */
  code?: string;
  /**
   * @remarks
   * The currency unit.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The price reduction information.
   */
  depreciateInfo?: QueryCreateInstancePriceResponseBodyPriceInfoDepreciateInfo;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 655.2
   */
  discountAmount?: number;
  /**
   * @remarks
   * Indicates whether the enterprise customer discount is applied.
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * The Lingxiao request ID of the call.
   * 
   * @example
   * 67F33190-946B-1105-B6A1-E2DF0426DD51
   */
  lxRequestId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * An unpaid order exists. Pay for or cancel the existing order first
   */
  message?: string;
  /**
   * @remarks
   * The coupon group information.
   */
  optionalPromotions?: QueryCreateInstancePriceResponseBodyPriceInfoOptionalPromotions[];
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 4368
   */
  originalAmount?: number;
  /**
   * @remarks
   * The promotion rules.
   */
  rules?: QueryCreateInstancePriceResponseBodyPriceInfoRules[];
  /**
   * @remarks
   * The promotional price based on the official website discount.
   */
  standDiscountPrice?: string;
  /**
   * @remarks
   * The official website discounted price or direct sales contract discounted price.
   */
  standPrice?: string;
  /**
   * @remarks
   * The final price, which is the original price minus the discount.
   * 
   * @example
   * 3712.8
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currency: 'Currency',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      isContractActivity: 'IsContractActivity',
      lxRequestId: 'LxRequestId',
      message: 'Message',
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
      code: 'string',
      currency: 'string',
      depreciateInfo: QueryCreateInstancePriceResponseBodyPriceInfoDepreciateInfo,
      discountAmount: 'number',
      isContractActivity: 'boolean',
      lxRequestId: 'string',
      message: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': QueryCreateInstancePriceResponseBodyPriceInfoOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryCreateInstancePriceResponseBodyPriceInfoRules },
      standDiscountPrice: 'string',
      standPrice: 'string',
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

export class QueryCreateInstancePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price information, including the price and promotion rules.
   */
  priceInfo?: QueryCreateInstancePriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67F33190-946B-1105-B6A1-E2DF0426DD51
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: QueryCreateInstancePriceResponseBodyPriceInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

