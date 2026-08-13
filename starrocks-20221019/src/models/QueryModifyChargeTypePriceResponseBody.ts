// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyChargeTypePriceResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * cu_num
   */
  componentName?: string;
  /**
   * @remarks
   * The discount amount for the order.
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
   * The final price. This is the original price minus the discount amount.
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

export class QueryModifyChargeTypePriceResponseBodyDataDepreciateInfo extends $dara.Model {
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
   * The total official price after the price reduction.
   * 
   * @example
   * 7986
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * Indicates whether to display the price reduction amount.
   * 
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @remarks
   * The original total official price.
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

export class QueryModifyChargeTypePriceResponseBodyDataModuleInstance extends $dara.Model {
  /**
   * @remarks
   * The code of the pricing module.
   * 
   * @example
   * instance_type
   */
  moduleCode?: string;
  /**
   * @remarks
   * The name of the pricing module.
   * 
   * @example
   * cu_num
   */
  moduleName?: string;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 7986
   */
  standPrice?: string;
  /**
   * @remarks
   * The original price of the product.
   * 
   * @example
   * 7986
   */
  totalProductFee?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      standPrice: 'StandPrice',
      totalProductFee: 'TotalProductFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      moduleName: 'string',
      standPrice: 'string',
      totalProductFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyChargeTypePriceResponseBodyDataOptionalPromotions extends $dara.Model {
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
   * youhuiquan_1238293
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

export class QueryModifyChargeTypePriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 0
   */
  amount?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule1
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * rule-12iudfj
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

export class QueryModifyChargeTypePriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The component prices.
   */
  componentPrices?: QueryModifyChargeTypePriceResponseBodyDataComponentPrices[];
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
   * The cost after discounts.
   */
  depreciateInfo?: QueryModifyChargeTypePriceResponseBodyDataDepreciateInfo;
  /**
   * @remarks
   * The discount amount. This is the original amount minus the payable amount, which includes coupon deductions.
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * The module ID.
   */
  moduleInstance?: QueryModifyChargeTypePriceResponseBodyDataModuleInstance[];
  /**
   * @remarks
   * The coupon information.
   */
  optionalPromotions?: QueryModifyChargeTypePriceResponseBodyDataOptionalPromotions[];
  /**
   * @remarks
   * The original price (list price × usage).
   * 
   * @example
   * 7986
   */
  originalAmount?: number;
  /**
   * @remarks
   * The price calculation rules.
   */
  rules?: QueryModifyChargeTypePriceResponseBodyDataRules[];
  /**
   * @remarks
   * The discount price.
   * 
   * @example
   * 7986
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The official discounted price.
   * 
   * @example
   * 7986
   */
  standPrice?: number;
  /**
   * @remarks
   * The amount.
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
      moduleInstance: 'ModuleInstance',
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
      componentPrices: { 'type': 'array', 'itemType': QueryModifyChargeTypePriceResponseBodyDataComponentPrices },
      currency: 'string',
      depreciateInfo: QueryModifyChargeTypePriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      moduleInstance: { 'type': 'array', 'itemType': QueryModifyChargeTypePriceResponseBodyDataModuleInstance },
      optionalPromotions: { 'type': 'array', 'itemType': QueryModifyChargeTypePriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryModifyChargeTypePriceResponseBodyDataRules },
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
    if(Array.isArray(this.moduleInstance)) {
      $dara.Model.validateArray(this.moduleInstance);
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

export class QueryModifyChargeTypePriceResponseBody extends $dara.Model {
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
   * The order amount.
   */
  data?: QueryModifyChargeTypePriceResponseBodyData;
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
      data: QueryModifyChargeTypePriceResponseBodyData,
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

