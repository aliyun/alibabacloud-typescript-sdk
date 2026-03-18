// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPriceV1ResponseBodyDataComponentPrices extends $dara.Model {
  /**
   * @example
   * FE
   */
  componentName?: string;
  /**
   * @example
   * 0
   */
  discountAmount?: number;
  /**
   * @example
   * 3192
   */
  originalAmount?: number;
  /**
   * @example
   * 3192
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

export class QueryPriceV1ResponseBodyDataDepreciateInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  cheapRate?: number;
  /**
   * @example
   * 8094
   */
  cheapStandAmount?: number;
  /**
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @example
   * 8094
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

export class QueryPriceV1ResponseBodyDataModuleInstance extends $dara.Model {
  /**
   * @example
   * cu_num
   */
  moduleCode?: string;
  /**
   * @example
   * CU
   */
  moduleName?: string;
  /**
   * @example
   * 1622
   */
  standPrice?: string;
  /**
   * @example
   * 1622
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

export class QueryPriceV1ResponseBodyDataOptionalPromotions extends $dara.Model {
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

export class QueryPriceV1ResponseBodyDataRules extends $dara.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * rule_8usi12321sa
   */
  name?: string;
  /**
   * @example
   * 7u22yshaasds
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

export class QueryPriceV1ResponseBodyData extends $dara.Model {
  componentPrices?: QueryPriceV1ResponseBodyDataComponentPrices[];
  /**
   * @example
   * CNY
   */
  currency?: string;
  depreciateInfo?: QueryPriceV1ResponseBodyDataDepreciateInfo;
  /**
   * @example
   * 0
   */
  discountAmount?: number;
  moduleInstance?: QueryPriceV1ResponseBodyDataModuleInstance[];
  optionalPromotions?: QueryPriceV1ResponseBodyDataOptionalPromotions[];
  /**
   * @example
   * 8094
   */
  originalAmount?: number;
  rules?: QueryPriceV1ResponseBodyDataRules[];
  /**
   * @example
   * 8094
   */
  standDiscountPrice?: number;
  /**
   * @example
   * 8094
   */
  standPrice?: number;
  /**
   * @example
   * 8094
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
      componentPrices: { 'type': 'array', 'itemType': QueryPriceV1ResponseBodyDataComponentPrices },
      currency: 'string',
      depreciateInfo: QueryPriceV1ResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      moduleInstance: { 'type': 'array', 'itemType': QueryPriceV1ResponseBodyDataModuleInstance },
      optionalPromotions: { 'type': 'array', 'itemType': QueryPriceV1ResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryPriceV1ResponseBodyDataRules },
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

export class QueryPriceV1ResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessDeniedDetail
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: QueryPriceV1ResponseBodyData;
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
      data: QueryPriceV1ResponseBodyData,
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

