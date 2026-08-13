// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifySpecTypePriceResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * node_type
   */
  componentName?: string;
  /**
   * @remarks
   * The discount amount.
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
   * 5612
   */
  originalAmount?: number;
  /**
   * @remarks
   * The final price. The final price is the original price minus the discount.
   * 
   * @example
   * 5612
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

export class QueryModifySpecTypePriceResponseBodyDataDepreciateInfo extends $dara.Model {
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
   * 5612
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * Indicates whether to display the price reduction.
   * 
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @remarks
   * The original total official website price.
   * 
   * @example
   * 5612
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

export class QueryModifySpecTypePriceResponseBodyDataOptionalPromotions extends $dara.Model {
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

export class QueryModifySpecTypePriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The resource count.
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
   * rule_827231sg1
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 7usy32gs01
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

export class QueryModifySpecTypePriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The component prices.
   */
  componentPrices?: QueryModifySpecTypePriceResponseBodyDataComponentPrices[];
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The name of the campaign.
   */
  depreciateInfo?: QueryModifySpecTypePriceResponseBodyDataDepreciateInfo;
  /**
   * @remarks
   * The discount amount. Formula: Original amount - Payable amount on the bill. The payable amount includes the amount deducted by coupons.
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * The coupon information.
   */
  optionalPromotions?: QueryModifySpecTypePriceResponseBodyDataOptionalPromotions[];
  /**
   * @remarks
   * The original price. Formula: List price × Billed usage.
   * 
   * @example
   * 5612
   */
  originalAmount?: number;
  /**
   * @remarks
   * The price calculation rules.
   */
  rules?: QueryModifySpecTypePriceResponseBodyDataRules[];
  /**
   * @remarks
   * The discounted price that is based on the official website discount.
   * 
   * @example
   * 5612
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The official website discount price.
   * 
   * @example
   * 5612
   */
  standPrice?: number;
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 5612
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
      componentPrices: { 'type': 'array', 'itemType': QueryModifySpecTypePriceResponseBodyDataComponentPrices },
      currency: 'string',
      depreciateInfo: QueryModifySpecTypePriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      optionalPromotions: { 'type': 'array', 'itemType': QueryModifySpecTypePriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryModifySpecTypePriceResponseBodyDataRules },
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

export class QueryModifySpecTypePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about access denial.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryModifySpecTypePriceResponseBodyData;
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
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
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
   * true
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
      data: QueryModifySpecTypePriceResponseBodyData,
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

