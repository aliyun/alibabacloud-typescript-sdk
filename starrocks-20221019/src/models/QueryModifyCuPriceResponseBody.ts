// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyCuPriceResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * cu_num
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
   * 7986
   */
  originalAmount?: number;
  /**
   * @remarks
   * The final price, which is the original price minus the discount.
   * 
   * @example
   * 7986
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

export class QueryModifyCuPriceResponseBodyDataDepreciateInfo extends $dara.Model {
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
   * The total list price after the price reduction.
   * 
   * @example
   * 7986
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * Indicates whether to show the price reduction information.
   * 
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @remarks
   * The original total list price.
   * 
   * @example
   * 7986
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

export class QueryModifyCuPriceResponseBodyDataOptionalPromotions extends $dara.Model {
  /**
   * @remarks
   * The description of the coupon.
   * 
   * @example
   * youhuiquan_desc
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The name of the coupon.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionName?: string;
  /**
   * @remarks
   * The ID of the coupon.
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

export class QueryModifyCuPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The number of instances to purchase in a batch. You can use this parameter to query the price of purchasing multiple Elastic Compute Service (ECS) instances with a specific configuration. Valid values: 1 to 1000.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * rule_123123
   */
  name?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * ak72hajsd
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

export class QueryModifyCuPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The prices of the components.
   */
  componentPrices?: QueryModifyCuPriceResponseBodyDataComponentPrices[];
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
   * The depreciation rate.
   * 
   * @example
   * 0
   */
  depreciateInfo?: QueryModifyCuPriceResponseBodyDataDepreciateInfo;
  /**
   * @remarks
   * The discount amount. Discount amount = Original amount - Billable amount. The billable amount includes coupon deductions.
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * The coupon information.
   */
  optionalPromotions?: QueryModifyCuPriceResponseBodyDataOptionalPromotions[];
  /**
   * @remarks
   * The original price. Original price = List price × Billing usage.
   * 
   * @example
   * 7986
   */
  originalAmount?: number;
  /**
   * @remarks
   * The data structure returned in the response.
   */
  rules?: QueryModifyCuPriceResponseBodyDataRules[];
  /**
   * @remarks
   * The price after the standard discount is applied.
   * 
   * @example
   * 7986
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The discounted price on the official website.
   * 
   * @example
   * 7986
   */
  standPrice?: number;
  /**
   * @remarks
   * The transaction amount.
   * 
   * @example
   * 7986
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
      componentPrices: { 'type': 'array', 'itemType': QueryModifyCuPriceResponseBodyDataComponentPrices },
      currency: 'string',
      depreciateInfo: QueryModifyCuPriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      optionalPromotions: { 'type': 'array', 'itemType': QueryModifyCuPriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryModifyCuPriceResponseBodyDataRules },
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

export class QueryModifyCuPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryModifyCuPriceResponseBodyData;
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B67D142D-D54E-184F-A306-22BDC01B2XXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
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
      data: QueryModifyCuPriceResponseBodyData,
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

