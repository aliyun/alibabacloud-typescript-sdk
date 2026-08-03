// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModifyBEClusterInquiryResponseBodyDataOptionalPromotions extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * > This parameter is not applicable to the China site.
   * 
   * @example
   * 100
   */
  canPromFee?: string;
  /**
   * @remarks
   * The promotion rule description.
   * 
   * @example
   * 789asdf
   */
  optionCode?: string;
  /**
   * @remarks
   * The coupon description.
   * 
   * @example
   * General coupon can deduct 100
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * General coupon
   */
  promotionName?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 732211480132
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

export class GetModifyBEClusterInquiryResponseBodyData extends $dara.Model {
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
   * The coupon codes.
   */
  optionalPromotions?: GetModifyBEClusterInquiryResponseBodyDataOptionalPromotions[];
  /**
   * @remarks
   * The unit price results of billing items.
   */
  pricingRules?: { [key: string]: string };
  /**
   * @remarks
   * The estimated refund amount when converting a subscription cluster to a pay-as-you-go cluster under a subscription instance.
   * 
   * @example
   * -100
   */
  refundAmount?: string;
  /**
   * @remarks
   * The trade amount.
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
      refundAmount: 'RefundAmount',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': GetModifyBEClusterInquiryResponseBodyDataOptionalPromotions },
      pricingRules: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      refundAmount: 'string',
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

export class GetModifyBEClusterInquiryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetModifyBEClusterInquiryResponseBodyData;
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
      data: GetModifyBEClusterInquiryResponseBodyData,
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

