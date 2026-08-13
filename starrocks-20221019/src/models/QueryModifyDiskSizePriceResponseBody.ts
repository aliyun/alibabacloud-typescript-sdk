// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyDiskSizePriceResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @remarks
   * The component name. Defaults to the component ID.
   * 
   * @example
   * disk_size
   */
  componentName?: string;
  /**
   * @remarks
   * The order discount amount.
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 9872
   */
  originalAmount?: number;
  /**
   * @remarks
   * The final price, which is the original price minus the discount.
   * 
   * @example
   * 9872
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      discountAmount: 'number',
      originalAmount: 'number',
      tradeAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyDiskSizePriceResponseBodyDataDepreciateInfo extends $dara.Model {
  /**
   * @remarks
   * The price reduction ratio.
   * 
   * @example
   * 0
   */
  cheapRate?: number;
  /**
   * @remarks
   * The total official website price after the price reduction.
   * 
   * @example
   * 9872
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * Indicates whether to display the price reduction.
   * 
   * @example
   * 0
   */
  isShow?: boolean;
  /**
   * @remarks
   * The original total official website price.
   * 
   * @example
   * 9872
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

export class QueryModifyDiskSizePriceResponseBodyDataOptionalPromotions extends $dara.Model {
  /**
   * @remarks
   * The coupon description.
   * 
   * @example
   * youhuiquan_desc
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionName?: string;
  /**
   * @remarks
   * The coupon ID.
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

export class QueryModifyDiskSizePriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 10
   */
  amount?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule-083ja12
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 7ysj12ksaa
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

export class QueryModifyDiskSizePriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The component prices.
   */
  componentPrices?: QueryModifyDiskSizePriceResponseBodyDataComponentPrices[];
  /**
   * @remarks
   * The currency. Valid values:
   * 
   * - CNY: Chinese Yuan.
   * 
   * - USD: US Dollar.
   * 
   * - JPY: Japanese Yen.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * Indicates whether to display the price reduction.
   * 
   * @example
   * true
   */
  depreciateInfo?: QueryModifyDiskSizePriceResponseBodyDataDepreciateInfo;
  /**
   * @remarks
   * The discount amount. Discount amount = original amount - billable amount (including coupon deductions).
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * The coupon information.
   */
  optionalPromotions?: QueryModifyDiskSizePriceResponseBodyDataOptionalPromotions[];
  /**
   * @remarks
   * The original price. Original amount = catalog price × billing usage.
   * 
   * @example
   * 9872
   */
  originalAmount?: number;
  /**
   * @remarks
   * The price calculation rules.
   */
  rules?: QueryModifyDiskSizePriceResponseBodyDataRules[];
  /**
   * @remarks
   * The discounted price based on the official website discount.
   * 
   * @example
   * 9872
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The official website discount price.
   * 
   * @example
   * 9872
   */
  standPrice?: number;
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 9872
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      componentPrices: 'ComponentPrices',
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
      componentPrices: { 'type': 'array', 'itemType': QueryModifyDiskSizePriceResponseBodyDataComponentPrices },
      currency: 'string',
      depreciateInfo: QueryModifyDiskSizePriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      optionalPromotions: { 'type': 'array', 'itemType': QueryModifyDiskSizePriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryModifyDiskSizePriceResponseBodyDataRules },
      standDiscountPrice: 'number',
      standPrice: 'number',
      tradeAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.componentPrices)) {
      $dara.Model.validateArray(this.componentPrices);
    }
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

export class QueryModifyDiskSizePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessDeniedDetail
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The order information.
   */
  data?: QueryModifyDiskSizePriceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP request status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
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
      accessDeniedDetail: 'string',
      data: QueryModifyDiskSizePriceResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

