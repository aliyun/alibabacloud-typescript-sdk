// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyDiskTypePriceResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * disk_type
   */
  componentName?: string;
  /**
   * @remarks
   * Discount.
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * Original price.
   * 
   * @example
   * 10923
   */
  originalAmount?: number;
  /**
   * @remarks
   * Final price, which is the original price minus the discount amount.
   * 
   * @example
   * 10923
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

export class QueryModifyDiskTypePriceResponseBodyDataDepreciateInfo extends $dara.Model {
  /**
   * @remarks
   * Price reduction ratio.
   * 
   * @example
   * 0
   */
  cheapRate?: number;
  /**
   * @remarks
   * Total official website price after reduction.
   * 
   * @example
   * 10923
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * Display price reduction range.
   * 
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @remarks
   * Original total official website price.
   * 
   * @example
   * 10923
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

export class QueryModifyDiskTypePriceResponseBodyDataOptionalPromotions extends $dara.Model {
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

export class QueryModifyDiskTypePriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * Quantity.
   * 
   * @example
   * 10
   */
  amount?: number;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * rule-928shy23sa
   */
  name?: string;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 7dsu230ks23
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

export class QueryModifyDiskTypePriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Component prices.
   */
  componentPrices?: QueryModifyDiskTypePriceResponseBodyDataComponentPrices[];
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
   * Price reduction ratio.
   */
  depreciateInfo?: QueryModifyDiskTypePriceResponseBodyDataDepreciateInfo;
  /**
   * @remarks
   * Discount amount = original amount - bill payable amount (including coupon deduction amount).
   * 
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @remarks
   * Coupon information.
   */
  optionalPromotions?: QueryModifyDiskTypePriceResponseBodyDataOptionalPromotions[];
  /**
   * @remarks
   * Original price (original amount) = catalog price × usage.
   * 
   * @example
   * 10923
   */
  originalAmount?: number;
  /**
   * @remarks
   * Returned data structure.
   */
  rules?: QueryModifyDiskTypePriceResponseBodyDataRules[];
  /**
   * @remarks
   * Discounted price based on the official website discount.
   * 
   * @example
   * 10923
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * Official website discount price.
   * 
   * @example
   * 10923
   */
  standPrice?: number;
  /**
   * @remarks
   * Amount.
   * 
   * @example
   * 10923
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
      componentPrices: { 'type': 'array', 'itemType': QueryModifyDiskTypePriceResponseBodyDataComponentPrices },
      currency: 'string',
      depreciateInfo: QueryModifyDiskTypePriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      optionalPromotions: { 'type': 'array', 'itemType': QueryModifyDiskTypePriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryModifyDiskTypePriceResponseBodyDataRules },
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

export class QueryModifyDiskTypePriceResponseBody extends $dara.Model {
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
   * Returned data.
   */
  data?: QueryModifyDiskTypePriceResponseBodyData;
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
   * Invalid params: [Region id should be select from set [cn-beijing, cn-hangzhou]]
   */
  errMessage?: string;
  /**
   * @remarks
   * HTTP request status code.
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
   * Is the request successful.
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
      data: QueryModifyDiskTypePriceResponseBodyData,
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

