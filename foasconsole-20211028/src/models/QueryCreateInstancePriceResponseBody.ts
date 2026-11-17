// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCreateInstancePriceResponseBodyPriceInfoDepreciateInfo extends $dara.Model {
  /**
   * @remarks
   * The price reduction rate.
   * 
   * @example
   * 34%
   */
  cheapRate?: string;
  /**
   * @remarks
   * The total price on the official website after the price reduction.
   * 
   * @example
   * 8000
   */
  cheapStandAmount?: string;
  /**
   * @remarks
   * Indicates whether to display the price reduction rate.
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
   * The original total price on the official website.
   * 
   * @example
   * 12000
   */
  originalStandAmount?: string;
  /**
   * @remarks
   * The start time of the price reduction, in ISO 8601 format.
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

export class QueryCreateInstancePriceResponseBodyPriceInfoModulePrices extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 648.0
   */
  discountAmount?: number;
  /**
   * @remarks
   * The unit price of the module.
   * 
   * @example
   * 183600.0000
   */
  finalUnitFee?: string;
  /**
   * @remarks
   * The module code.
   * 
   * @example
   * overhead_cu
   */
  moduleCode?: string;
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * Control and Management Services
   */
  moduleName?: string;
  /**
   * @remarks
   * The original amount.
   * 
   * @example
   * 4320.0
   */
  originalAmount?: number;
  /**
   * @remarks
   * The payment amount.
   * 
   * @example
   * 3672.0
   */
  payAmount?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * yearPrice
   */
  priceType?: string;
  /**
   * @remarks
   * The pricing unit.
   * 
   * @example
   * Yuan/CU
   */
  priceUnit?: string;
  /**
   * @remarks
   * The order quantity.
   * 
   * @example
   * 1
   */
  quantity?: string;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      finalUnitFee: 'FinalUnitFee',
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      originalAmount: 'OriginalAmount',
      payAmount: 'PayAmount',
      priceType: 'PriceType',
      priceUnit: 'PriceUnit',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      finalUnitFee: 'string',
      moduleCode: 'string',
      moduleName: 'string',
      originalAmount: 'number',
      payAmount: 'number',
      priceType: 'string',
      priceUnit: 'string',
      quantity: 'string',
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
   * The description of the coupon.
   * 
   * @example
   * ¥1,391.5 coupon (valid until 03/23/2022)
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The name of the coupon.
   * 
   * @example
   * ¥1,391.5 coupon
   */
  promotionName?: string;
  /**
   * @remarks
   * The ID of the coupon.
   * 
   * @example
   * 500011220010099
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * Specifies whether the coupon is selected. Valid values:
   * - true: Selected.
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

export class QueryCreateInstancePriceResponseBodyPriceInfoRules extends $dara.Model {
  /**
   * @remarks
   * The description of the promotion rule.
   * 
   * @example
   * Enjoy a 15% discount on the official website price for a 1-year subscription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the promotion rule.
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
   * Indicates whether the key account promotion is applied.
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * The Lingxiao request ID.
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
   * Unpaid orders exist. Pay for or cancel the existing orders first
   */
  message?: string;
  /**
   * @remarks
   * The module prices.
   */
  modulePrices?: QueryCreateInstancePriceResponseBodyPriceInfoModulePrices[];
  /**
   * @remarks
   * The coupon group information.
   */
  optionalPromotions?: QueryCreateInstancePriceResponseBodyPriceInfoOptionalPromotions[];
  /**
   * @remarks
   * The original amount.
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
   * The discounted price based on the official website discount.
   * 
   * @example
   * 21321
   */
  standDiscountPrice?: string;
  /**
   * @remarks
   * The discounted price on the official website or the discounted price in the direct sales contract.
   * 
   * @example
   * 32432
   */
  standPrice?: string;
  /**
   * @remarks
   * The final amount, which is the original amount minus the discount.
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
      modulePrices: 'ModulePrices',
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
      modulePrices: { 'type': 'array', 'itemType': QueryCreateInstancePriceResponseBodyPriceInfoModulePrices },
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
    if(Array.isArray(this.modulePrices)) {
      $dara.Model.validateArray(this.modulePrices);
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
   * The price information, including the price and discount rules.
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
   * Indicates whether the request is successful.
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

