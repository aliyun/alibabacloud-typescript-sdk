// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyDiskTypePriceResponseBodyDataComponentPrices extends $dara.Model {
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
   * 10923
   */
  originalAmount?: number;
  /**
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
   * @example
   * 0
   */
  cheapRate?: number;
  /**
   * @example
   * 10923
   */
  cheapStandAmount?: number;
  /**
   * @example
   * true
   */
  isShow?: boolean;
  /**
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

export class QueryModifyDiskTypePriceResponseBodyDataRules extends $dara.Model {
  /**
   * @example
   * 10
   */
  amount?: number;
  /**
   * @example
   * rule-928shy23sa
   */
  name?: string;
  /**
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
  componentPrices?: QueryModifyDiskTypePriceResponseBodyDataComponentPrices[];
  /**
   * @example
   * CNY
   */
  currency?: string;
  depreciateInfo?: QueryModifyDiskTypePriceResponseBodyDataDepreciateInfo;
  /**
   * @example
   * 0
   */
  discountAmount?: number;
  optionalPromotions?: QueryModifyDiskTypePriceResponseBodyDataOptionalPromotions[];
  /**
   * @example
   * 10923
   */
  originalAmount?: number;
  rules?: QueryModifyDiskTypePriceResponseBodyDataRules[];
  /**
   * @example
   * 10923
   */
  standDiscountPrice?: number;
  /**
   * @example
   * 10923
   */
  standPrice?: number;
  /**
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
  data?: QueryModifyDiskTypePriceResponseBodyData;
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [Region id should be select from set [cn-beijing, cn-hangzhou]]
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

