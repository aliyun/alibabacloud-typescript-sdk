// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCreateBEClusterInquiryResponseBodyDataOptionalPromotions extends $dara.Model {
  /**
   * @example
   * 100
   */
  canPromFee?: string;
  /**
   * @example
   * 7afs9d
   */
  optionCode?: string;
  /**
   * @example
   * 通用优惠券可抵扣100
   */
  promotionDesc?: string;
  /**
   * @example
   * 通用优惠券
   */
  promotionName?: string;
  /**
   * @example
   * 775735400028
   */
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      optionCode: 'OptionCode',
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'string',
      optionCode: 'string',
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

export class GetCreateBEClusterInquiryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  optionalPromotions?: GetCreateBEClusterInquiryResponseBodyDataOptionalPromotions[];
  pricingRules?: { [key: string]: string };
  /**
   * @remarks
   * The amount of money.
   * 
   * @example
   * 1.76
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      optionalPromotions: 'OptionalPromotions',
      pricingRules: 'PricingRules',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': GetCreateBEClusterInquiryResponseBodyDataOptionalPromotions },
      pricingRules: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tradeAmount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.optionalPromotions)) {
      $dara.Model.validateArray(this.optionalPromotions);
    }
    if(this.pricingRules) {
      $dara.Model.validateMap(this.pricingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateBEClusterInquiryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   */
  data?: GetCreateBEClusterInquiryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06758CAB-1204-5852-A471-29C87D5C1D0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCreateBEClusterInquiryResponseBodyData,
      requestId: 'string',
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

