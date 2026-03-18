// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyDiskNumberPriceResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @example
   * disk
   */
  componentName?: string;
  /**
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @example
   * 17629
   */
  originalAmount?: number;
  /**
   * @example
   * 17629
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

export class QueryModifyDiskNumberPriceResponseBodyDataDepreciateInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  cheapRate?: number;
  /**
   * @example
   * 17629
   */
  cheapStandAmount?: number;
  /**
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @example
   * 17629
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

export class QueryModifyDiskNumberPriceResponseBodyDataOptionalPromotions extends $dara.Model {
  /**
   * @example
   * youhuiquan_desc
   */
  promotionDesc?: string;
  /**
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionName?: string;
  /**
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

export class QueryModifyDiskNumberPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @example
   * 3
   */
  amount?: number;
  /**
   * @example
   * rule_12hus92
   */
  name?: string;
  /**
   * @example
   * 6yhsi10223
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

export class QueryModifyDiskNumberPriceResponseBodyData extends $dara.Model {
  componentPrices?: QueryModifyDiskNumberPriceResponseBodyDataComponentPrices[];
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 17629
   */
  depreciateInfo?: QueryModifyDiskNumberPriceResponseBodyDataDepreciateInfo;
  /**
   * @example
   * 0
   */
  discountAmount?: number;
  optionalPromotions?: QueryModifyDiskNumberPriceResponseBodyDataOptionalPromotions[];
  /**
   * @example
   * 17629
   */
  originalAmount?: number;
  rules?: QueryModifyDiskNumberPriceResponseBodyDataRules[];
  /**
   * @example
   * 17629
   */
  standDiscountPrice?: number;
  /**
   * @example
   * 17629
   */
  standPrice?: number;
  /**
   * @example
   * 17629
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
      componentPrices: { 'type': 'array', 'itemType': QueryModifyDiskNumberPriceResponseBodyDataComponentPrices },
      currency: 'string',
      depreciateInfo: QueryModifyDiskNumberPriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      optionalPromotions: { 'type': 'array', 'itemType': QueryModifyDiskNumberPriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryModifyDiskNumberPriceResponseBodyDataRules },
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

export class QueryModifyDiskNumberPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessDeniedDetail
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: QueryModifyDiskNumberPriceResponseBodyData;
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * null
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE74XXX
   */
  requestId?: string;
  /**
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
      data: QueryModifyDiskNumberPriceResponseBodyData,
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

