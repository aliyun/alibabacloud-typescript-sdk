// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRenewPriceResponseBodyDataDepreciateInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  cheapRate?: number;
  /**
   * @example
   * 9812
   */
  cheapStandAmount?: number;
  /**
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @example
   * 9812
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

export class QueryRenewPriceResponseBodyDataOptionalPromotions extends $dara.Model {
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

export class QueryRenewPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * rule_8syh2j121ns
   */
  name?: string;
  /**
   * @example
   * 8su2i3hsdf128
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

export class QueryRenewPriceResponseBodyData extends $dara.Model {
  /**
   * @example
   * c-96f3bc7f04b2****
   */
  billingInstanceId?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 9812
   */
  depreciateInfo?: QueryRenewPriceResponseBodyDataDepreciateInfo;
  /**
   * @example
   * 0
   */
  discountAmount?: number;
  optionalPromotions?: QueryRenewPriceResponseBodyDataOptionalPromotions[];
  /**
   * @example
   * 9812
   */
  originalAmount?: number;
  rules?: QueryRenewPriceResponseBodyDataRules[];
  /**
   * @example
   * 9812
   */
  standDiscountPrice?: number;
  /**
   * @example
   * 9812
   */
  standPrice?: number;
  /**
   * @example
   * 9812
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      billingInstanceId: 'BillingInstanceId',
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
      billingInstanceId: 'string',
      currency: 'string',
      depreciateInfo: QueryRenewPriceResponseBodyDataDepreciateInfo,
      discountAmount: 'number',
      optionalPromotions: { 'type': 'array', 'itemType': QueryRenewPriceResponseBodyDataOptionalPromotions },
      originalAmount: 'number',
      rules: { 'type': 'array', 'itemType': QueryRenewPriceResponseBodyDataRules },
      standDiscountPrice: 'number',
      standPrice: 'number',
      tradeAmount: 'number',
    };
  }

  validate() {
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

export class QueryRenewPriceResponseBody extends $dara.Model {
  data?: QueryRenewPriceResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QueryRenewPriceResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

