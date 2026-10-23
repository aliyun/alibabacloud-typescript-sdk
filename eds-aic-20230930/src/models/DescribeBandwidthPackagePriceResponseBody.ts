// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthPackagePriceResponseBodyPricePromotions extends $dara.Model {
  /**
   * @example
   * youhui_quan
   */
  optionCode?: string;
  /**
   * @example
   * youhui
   */
  promotionDesc?: string;
  /**
   * @example
   * 91381816****
   */
  promotionId?: string;
  /**
   * @example
   * youhui
   */
  promotionName?: string;
  /**
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
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 274.75
   */
  discountPrice?: number;
  /**
   * @example
   * 8800
   */
  originalPrice?: number;
  promotions?: DescribeBandwidthPackagePriceResponseBodyPricePromotions[];
  /**
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
   * @example
   * description
   */
  description?: string;
  /**
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
  price?: DescribeBandwidthPackagePriceResponseBodyPrice;
  /**
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  requestId?: string;
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

