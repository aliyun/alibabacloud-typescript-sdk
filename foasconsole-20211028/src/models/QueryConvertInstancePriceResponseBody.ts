// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConvertInstancePriceResponseBodyPriceInfoDepreciateInfo extends $dara.Model {
  /**
   * @remarks
   * The price reduction ratio.
   * 
   * @example
   * 34%
   */
  cheapRate?: string;
  /**
   * @remarks
   * The standard total price after the price reduction.
   * 
   * @example
   * 8000
   */
  cheapStandAmount?: string;
  /**
   * @remarks
   * Indicates whether to display the price reduction percentage.
   * 
   * @example
   * false
   */
  isShow?: boolean;
  /**
   * @remarks
   * The equivalent monthly price.
   * 
   * @example
   * 1000
   */
  monthPrice?: string;
  /**
   * @remarks
   * The original standard total price.
   * 
   * @example
   * 12000
   */
  originalStandAmount?: string;
  /**
   * @remarks
   * The start time of the price reduction.
   * 
   * @example
   * 2024-08-21T02:06:00Z
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

export class QueryConvertInstancePriceResponseBodyPriceInfoOptionalPromotions extends $dara.Model {
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
   * The coupon number.
   * 
   * @example
   * 500011220010099
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * Indicates whether the coupon is selected. Valid values:
   * 
   * - true: Selected.
   * 
   * - false: Not selected.
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

export class QueryConvertInstancePriceResponseBodyPriceInfoRules extends $dara.Model {
  /**
   * @remarks
   * The description of the promotion rule.
   * 
   * @example
   * Purchase for 1 year or more and enjoy a 15% discount off the official price
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

export class QueryConvertInstancePriceResponseBodyPriceInfo extends $dara.Model {
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
  depreciateInfo?: QueryConvertInstancePriceResponseBodyPriceInfoDepreciateInfo;
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
   * Indicates whether the enterprise discount is applied.
   * 
   * @example
   * true
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
   * An unpaid order exists. Pay or cancel the existing order first
   */
  message?: string;
  /**
   * @remarks
   * The coupon information.
   */
  optionalPromotions?: QueryConvertInstancePriceResponseBodyPriceInfoOptionalPromotions[];
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
  rules?: QueryConvertInstancePriceResponseBodyPriceInfoRules[];
  /**
   * @remarks
   * The discounted price based on the official website discount.
   * 
   * @example
   * 21321
   */
  standDiscountPrice?: string;
  /**
   * @remarks
   * The official website discounted price or direct sales contract discounted price.
   * 
   * @example
   * 32432
   */
  standPrice?: string;
  /**
   * @remarks
   * The final price, which is the original price minus the discount amount.
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
      depreciateInfo: QueryConvertInstancePriceResponseBodyPriceInfoDepreciateInfo,
      discountAmount: 'number',
      isContractActivity: 'boolean',
      lxRequestId: 'string',
      message: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': QueryConvertInstancePriceResponseBodyPriceInfoOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryConvertInstancePriceResponseBodyPriceInfoRules },
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

export class QueryConvertInstancePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price information, including the price and discount rules.
   */
  priceInfo?: QueryConvertInstancePriceResponseBodyPriceInfo;
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
   * 
   * @example
   * true
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
      priceInfo: QueryConvertInstancePriceResponseBodyPriceInfo,
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

