// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyNodeNumberPriceResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * RangerUserSync
   */
  componentName?: string;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 26710
   */
  originalAmount?: number;
  /**
   * @remarks
   * The actual transaction price of the order.
   * 
   * @example
   * 26710
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

export class QueryModifyNodeNumberPriceResponseBodyDataDepreciateInfo extends $dara.Model {
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
   * The total price on the official website after the price reduction.
   * 
   * @example
   * 26710
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * Indicates whether to display the price reduction range.
   * 
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @remarks
   * The original total price on the official website.
   * 
   * @example
   * 26710
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

export class QueryModifyNodeNumberPriceResponseBodyDataOptionalPromotions extends $dara.Model {
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

export class QueryModifyNodeNumberPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The price for purchasing a batch of Elastic Compute Service (ECS) instances with a specific configuration. Valid values: 1 to 1000.
   * 
   * Default value: 1.
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
   * rule_923su2sf
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 8uy3sh12sa
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

export class QueryModifyNodeNumberPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The component prices.
   */
  componentPrices?: QueryModifyNodeNumberPriceResponseBodyDataComponentPrices[];
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
   * The price reduction ratio.
   * 
   * @example
   * 0
   */
  depreciateInfo?: QueryModifyNodeNumberPriceResponseBodyDataDepreciateInfo;
  /**
   * @remarks
   * The discount amount is the difference between the original amount and the amount payable. The amount payable is the final cost after any coupon deductions.
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * The coupon information.
   */
  optionalPromotions?: QueryModifyNodeNumberPriceResponseBodyDataOptionalPromotions[];
  /**
   * @remarks
   * The original price. This is calculated as: List Price × Billable Usage.
   * 
   * @example
   * 26710
   */
  originalAmount?: number;
  /**
   * @remarks
   * The returned data structure.
   */
  rules?: QueryModifyNodeNumberPriceResponseBodyDataRules[];
  /**
   * @remarks
   * The discounted price based on the official website discount.
   * 
   * @example
   * 26710
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The official website discount price.
   * 
   * @example
   * 26710
   */
  standPrice?: number;
  /**
   * @remarks
   * The payable amount.
   * 
   * @example
   * 26710
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
      componentPrices: { 'type': 'array', 'itemType': QueryModifyNodeNumberPriceResponseBodyDataComponentPrices },
      currency: 'string',
      depreciateInfo: QueryModifyNodeNumberPriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      optionalPromotions: { 'type': 'array', 'itemType': QueryModifyNodeNumberPriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryModifyNodeNumberPriceResponseBodyDataRules },
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

export class QueryModifyNodeNumberPriceResponseBody extends $dara.Model {
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
  data?: QueryModifyNodeNumberPriceResponseBodyData;
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
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
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
      data: QueryModifyNodeNumberPriceResponseBodyData,
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

