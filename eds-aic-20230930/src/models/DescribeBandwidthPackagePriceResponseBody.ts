// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthPackagePriceResponseBodyPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The promotion code.
   * 
   * @example
   * youhui_quan
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion description.
   * 
   * @example
   * youhui
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * 91381816****
   */
  promotionId?: string;
  /**
   * @remarks
   * The name of the promotion.
   * 
   * @example
   * youhui
   */
  promotionName?: string;
  /**
   * @remarks
   * Indicates whether the promotion is selected.
   * 
   * @example
   * ture
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      optionCode: 'OptionCode',
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionCode: 'string',
      promotionDesc: 'string',
      promotionId: 'string',
      promotionName: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackagePriceResponseBodyPrice extends $dara.Model {
  /**
   * @remarks
   * <props="china">The currency unit (CNY).
   * <props="intl">The currency unit (USD).
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 274.75
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * <props="china">Unit: CNY.
   * 
   * <props="intl">Unit: USD.
   * 
   * @example
   * 8800
   */
  originalPrice?: number;
  /**
   * @remarks
   * The promotion information.
   */
  promotions?: DescribeBandwidthPackagePriceResponseBodyPricePromotions[];
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 213.52
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribeBandwidthPackagePriceResponseBodyPricePromotions },
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

export class DescribeBandwidthPackagePriceResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * a7gesyly7o34qy****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthPackagePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribeBandwidthPackagePriceResponseBodyPrice;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  requestId?: string;
  /**
   * @remarks
   * The promotion rules.
   */
  rules?: DescribeBandwidthPackagePriceResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeBandwidthPackagePriceResponseBodyPrice,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeBandwidthPackagePriceResponseBodyRules },
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

