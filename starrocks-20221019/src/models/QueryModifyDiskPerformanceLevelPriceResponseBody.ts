// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyDiskPerformanceLevelPriceResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @example
   * disk_type
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

export class QueryModifyDiskPerformanceLevelPriceResponseBodyDataDepreciateInfo extends $dara.Model {
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

export class QueryModifyDiskPerformanceLevelPriceResponseBodyDataOptionalPromotions extends $dara.Model {
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

export class QueryModifyDiskPerformanceLevelPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * rule_128nsg182
   */
  name?: string;
  /**
   * @example
   * 78hujis12jd
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

export class QueryModifyDiskPerformanceLevelPriceResponseBodyData extends $dara.Model {
  componentPrices?: QueryModifyDiskPerformanceLevelPriceResponseBodyDataComponentPrices[];
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 17629
   */
  depreciateInfo?: QueryModifyDiskPerformanceLevelPriceResponseBodyDataDepreciateInfo;
  /**
   * @example
   * 0
   */
  discountAmount?: number;
  optionalPromotions?: QueryModifyDiskPerformanceLevelPriceResponseBodyDataOptionalPromotions[];
  /**
   * @example
   * 17629
   */
  originalAmount?: number;
  rules?: QueryModifyDiskPerformanceLevelPriceResponseBodyDataRules[];
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
      componentPrices: { 'type': 'array', 'itemType': QueryModifyDiskPerformanceLevelPriceResponseBodyDataComponentPrices },
      currency: 'string',
      depreciateInfo: QueryModifyDiskPerformanceLevelPriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      optionalPromotions: { 'type': 'array', 'itemType': QueryModifyDiskPerformanceLevelPriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryModifyDiskPerformanceLevelPriceResponseBodyDataRules },
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

export class QueryModifyDiskPerformanceLevelPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessDeniedDetail
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: QueryModifyDiskPerformanceLevelPriceResponseBodyData;
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 86865DD4-7733-5446-B52B-C9DA71961B76
   */
  requestId?: string;
  /**
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
      data: QueryModifyDiskPerformanceLevelPriceResponseBodyData,
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

