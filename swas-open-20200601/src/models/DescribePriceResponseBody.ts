// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyPriceInfoPriceCoupons extends $dara.Model {
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The custom parameter description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 20.0
   */
  discountOff?: number;
  /**
   * @remarks
   * Specifies whether the coupon is selected.
   */
  isSelected?: boolean;
  /**
   * @remarks
   * The command name.
   * 
   * @example
   * ACS-SWAS-GenerateRsaKeypair-windows.ps1
   */
  name?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * *****
   */
  optionCode?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      description: 'Description',
      discountOff: 'DiscountOff',
      isSelected: 'IsSelected',
      name: 'Name',
      optionCode: 'OptionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      description: 'string',
      discountOff: 'number',
      isSelected: 'boolean',
      name: 'string',
      optionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPriceDetailInfosPromotions extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  discountOff?: number;
  /**
   * @remarks
   * The promotion name.
   * 
   * @example
   * Discounted price on the official website for compute-optimized instances
   */
  name?: string;
  /**
   * @remarks
   * The promotion rule ID.
   * 
   * @example
   * 0
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      discountOff: 'DiscountOff',
      name: 'Name',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountOff: 'number',
      name: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPriceDetailInfos extends $dara.Model {
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * Server
   */
  commodityType?: string;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 0.0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 1850
   */
  originalPrice?: number;
  /**
   * @remarks
   * The promotion information matched by the configuration details.
   */
  promotions?: DescribePriceResponseBodyPriceInfoPriceDetailInfosPromotions[];
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 267.4
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      commodityType: 'CommodityType',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityType: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoPriceDetailInfosPromotions },
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The coupon discount amount.
   * 
   * @example
   * 20.0
   */
  discountOff?: number;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * ACS-SWAS-ResetPassword-for-linux.sh
   */
  name?: string;
  /**
   * @remarks
   * The promotion ID.
   */
  ruleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      discountOff: 'DiscountOff',
      name: 'Name',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountOff: 'number',
      name: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPriceSubPricesPromotions extends $dara.Model {
  /**
   * @remarks
   * The coupon discount amount.
   * 
   * @example
   * 20.0
   */
  discountOff?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Discount
   */
  name?: string;
  /**
   * @remarks
   * The promotion rule ID.
   */
  ruleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      discountOff: 'DiscountOff',
      name: 'Name',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountOff: 'number',
      name: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPriceSubPrices extends $dara.Model {
  /**
   * @remarks
   * The order discount amount.
   * 
   * @example
   * 0.0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The instance ID of the Simple Application Server.
   * 
   * @example
   * d63a1c00ce14419194ae5bef5e*****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether a promotion is matched.
   * 
   * @example
   * false
   */
  isContractPromotion?: boolean;
  /**
   * @remarks
   * The original price of the order (CNY).
   * 
   * @example
   * 165.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The promotion name.
   */
  promotions?: DescribePriceResponseBodyPriceInfoPriceSubPricesPromotions[];
  /**
   * @remarks
   * The collection of activity rule IDs.
   */
  ruleIds?: number[];
  /**
   * @remarks
   * The discounted price based on the official website discount.
   * 
   * @example
   * 85.0
   */
  standardDiscountPrice?: number;
  /**
   * @remarks
   * The discounted price on the official website or the discounted price in the direct sales contract.
   * 
   * @example
   * 899.0
   */
  standardPrice?: number;
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 899.0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      instanceId: 'InstanceId',
      isContractPromotion: 'IsContractPromotion',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      ruleIds: 'RuleIds',
      standardDiscountPrice: 'StandardDiscountPrice',
      standardPrice: 'StandardPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      instanceId: 'string',
      isContractPromotion: 'boolean',
      originalPrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoPriceSubPricesPromotions },
      ruleIds: { 'type': 'array', 'itemType': 'number' },
      standardDiscountPrice: 'number',
      standardPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
    }
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the coupon is selected.
   */
  coupons?: DescribePriceResponseBodyPriceInfoPriceCoupons[];
  /**
   * @remarks
   * The currency. Valid values:
   * 
   * - CNY: Chinese yuan.
   * - USD: US dollar.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The detailed pricing information of the configuration.
   */
  detailInfos?: DescribePriceResponseBodyPriceInfoPriceDetailInfos[];
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 0.0
   */
  discountPrice?: number;
  /**
   * @remarks
   * Specifies whether a promotion is matched.
   */
  isContractPromotion?: boolean;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 1580
   */
  originalPrice?: number;
  /**
   * @remarks
   * The promotion information.
   */
  promotions?: DescribePriceResponseBodyPriceInfoPricePromotions[];
  /**
   * @remarks
   * The discounted price based on the official website discount.
   * 
   * @example
   * 85
   */
  standardDiscountPrice?: number;
  /**
   * @remarks
   * The discounted price on the official website or the discounted price in the direct sales contract.
   * 
   * @example
   * 899
   */
  standardPrice?: number;
  /**
   * @remarks
   * The list of price details.
   */
  subPrices?: DescribePriceResponseBodyPriceInfoPriceSubPrices[];
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 267.4
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      currency: 'Currency',
      detailInfos: 'DetailInfos',
      discountPrice: 'DiscountPrice',
      isContractPromotion: 'IsContractPromotion',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      standardDiscountPrice: 'StandardDiscountPrice',
      standardPrice: 'StandardPrice',
      subPrices: 'SubPrices',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoPriceCoupons },
      currency: 'string',
      detailInfos: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoPriceDetailInfos },
      discountPrice: 'number',
      isContractPromotion: 'boolean',
      originalPrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoPricePromotions },
      standardDiscountPrice: 'number',
      standardPrice: 'number',
      subPrices: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoPriceSubPrices },
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.coupons)) {
      $dara.Model.validateArray(this.coupons);
    }
    if(Array.isArray(this.detailInfos)) {
      $dara.Model.validateArray(this.detailInfos);
    }
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
    }
    if(Array.isArray(this.subPrices)) {
      $dara.Model.validateArray(this.subPrices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoRules extends $dara.Model {
  /**
   * @remarks
   * The custom parameter description.
   * 
   * @example
   * Purchase a one-year subscription to enjoy an xxx discount on the official website price
   */
  description?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 142
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The pricing information.
   */
  price?: DescribePriceResponseBodyPriceInfoPrice;
  /**
   * @remarks
   * The activity rule information.
   */
  rules?: DescribePriceResponseBodyPriceInfoRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribePriceResponseBodyPriceInfoPrice,
      rules: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoRules },
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
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

export class DescribePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed pricing information.
   */
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribePriceResponseBodyPriceInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

