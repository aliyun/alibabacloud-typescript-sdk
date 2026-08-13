// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEnableMultiAzPriceResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * multi-zone
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
   * The original price of the order.
   * 
   * @example
   * 7641
   */
  originalAmount?: number;
  /**
   * @remarks
   * The final price, which is the original price minus the discount.
   * 
   * @example
   * 7641
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

export class QueryEnableMultiAzPriceResponseBodyDataDepreciateInfo extends $dara.Model {
  /**
   * @remarks
   * The price reduction percentage.
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
   * 7641
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * Indicates whether to show the price reduction.
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
   * 7641
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

export class QueryEnableMultiAzPriceResponseBodyDataModuleInstance extends $dara.Model {
  /**
   * @remarks
   * The identifier of the billing module.
   * 
   * @example
   * multi-zone
   */
  moduleCode?: string;
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * zone
   */
  moduleName?: string;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 7641
   */
  standPrice?: string;
  /**
   * @remarks
   * The original price of the product.
   * 
   * @example
   * 7641
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

export class QueryEnableMultiAzPriceResponseBodyDataOptionalPromotions extends $dara.Model {
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

export class QueryEnableMultiAzPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_28sdhsu2320t
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 2ju2sd9dss
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

export class QueryEnableMultiAzPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The component prices.
   */
  componentPrices?: QueryEnableMultiAzPriceResponseBodyDataComponentPrices[];
  /**
   * @remarks
   * The currency. Valid values:
   * 
   * - CNY: Chinese Yuan.
   * 
   * - USD: U.S. dollar.
   * 
   * - JPY: Japanese Yen.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The total official price after the price reduction.
   * 
   * @example
   * 7641
   */
  depreciateInfo?: QueryEnableMultiAzPriceResponseBodyDataDepreciateInfo;
  /**
   * @remarks
   * The discount amount. This is the original amount minus the bill\\"s payable amount, which includes coupon deductions.
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * The module ID.
   */
  moduleInstance?: QueryEnableMultiAzPriceResponseBodyDataModuleInstance[];
  /**
   * @remarks
   * The coupon information.
   */
  optionalPromotions?: QueryEnableMultiAzPriceResponseBodyDataOptionalPromotions[];
  /**
   * @remarks
   * The original price. This is the list price multiplied by the usage.
   * 
   * @example
   * 7641
   */
  originalAmount?: number;
  /**
   * @remarks
   * The returned data structure.
   */
  rules?: QueryEnableMultiAzPriceResponseBodyDataRules[];
  /**
   * @remarks
   * The discounted price based on the official discount.
   * 
   * @example
   * 7641
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The official discounted price.
   * 
   * @example
   * 7641
   */
  standPrice?: number;
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 7641
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
      componentPrices: { 'type': 'array', 'itemType': QueryEnableMultiAzPriceResponseBodyDataComponentPrices },
      currency: 'string',
      depreciateInfo: QueryEnableMultiAzPriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      moduleInstance: { 'type': 'array', 'itemType': QueryEnableMultiAzPriceResponseBodyDataModuleInstance },
      optionalPromotions: { 'type': 'array', 'itemType': QueryEnableMultiAzPriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryEnableMultiAzPriceResponseBodyDataRules },
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

export class QueryEnableMultiAzPriceResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: QueryEnableMultiAzPriceResponseBodyData;
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
      data: QueryEnableMultiAzPriceResponseBodyData,
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

