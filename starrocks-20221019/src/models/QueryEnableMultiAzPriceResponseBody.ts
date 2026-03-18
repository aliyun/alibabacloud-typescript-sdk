// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEnableMultiAzPriceResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @example
   * multi-zone
   */
  componentName?: string;
  /**
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @example
   * 7641
   */
  originalAmount?: number;
  /**
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
   * @example
   * 0
   */
  cheapRate?: number;
  /**
   * @example
   * 7641
   */
  cheapStandAmount?: number;
  /**
   * @example
   * true
   */
  isShow?: boolean;
  /**
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
   * @example
   * multi-zone
   */
  moduleCode?: string;
  /**
   * @example
   * zone
   */
  moduleName?: string;
  /**
   * @example
   * 7641
   */
  standPrice?: string;
  /**
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

export class QueryEnableMultiAzPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @example
   * 2
   */
  amount?: number;
  /**
   * @example
   * rule_28sdhsu2320t
   */
  name?: string;
  /**
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
  componentPrices?: QueryEnableMultiAzPriceResponseBodyDataComponentPrices[];
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 7641
   */
  depreciateInfo?: QueryEnableMultiAzPriceResponseBodyDataDepreciateInfo;
  /**
   * @example
   * 0
   */
  discountAmount?: number;
  moduleInstance?: QueryEnableMultiAzPriceResponseBodyDataModuleInstance[];
  optionalPromotions?: QueryEnableMultiAzPriceResponseBodyDataOptionalPromotions[];
  /**
   * @example
   * 7641
   */
  originalAmount?: number;
  rules?: QueryEnableMultiAzPriceResponseBodyDataRules[];
  /**
   * @example
   * 7641
   */
  standDiscountPrice?: number;
  /**
   * @example
   * 7641
   */
  standPrice?: number;
  /**
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
  data?: QueryEnableMultiAzPriceResponseBodyData;
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
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
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

