// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyPriceInfoPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The description of the promotion rule.
   * 
   * @example
   * test
   */
  optionCode?: string;
  /**
   * @remarks
   * The description of the promotion.
   * 
   * @example
   * Get started with new services with a discount.
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 123456
   */
  promotionId?: string;
  /**
   * @remarks
   * The promotion name.
   * 
   * @example
   * Special Offer
   */
  promotionName?: string;
  /**
   * @remarks
   * Indicates whether an item is selected.
   * 
   * @example
   * false
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

export class DescribePriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @remarks
   * The unit of currency (USD).
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discounted amount.
   * 
   * @example
   * 0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The orders.
   */
  orderLines?: { [key: string]: string };
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 2.796
   */
  originalPrice?: number;
  /**
   * @remarks
   * The promotions.
   */
  promotions?: DescribePriceResponseBodyPriceInfoPricePromotions[];
  /**
   * @remarks
   * The price under an effective savings plan.
   * 
   * @example
   * 50.00
   */
  spPrice?: number;
  /**
   * @remarks
   * The actual price. The original price minus the discounted amount equals the actual price.
   * 
   * @example
   * 2.796
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      orderLines: 'OrderLines',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      spPrice: 'SpPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      orderLines: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      originalPrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoPricePromotions },
      spPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.orderLines) {
      $dara.Model.validateMap(this.orderLines);
    }
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
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
   * The description of the rule.
   * 
   * @example
   * Receive a 15% discount on a one-year subscription.
   */
  description?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 587
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
   * Indicates whether a free enterprise drive is available.
   * 
   * @example
   * true
   */
  freeCdsQuota?: boolean;
  /**
   * @remarks
   * The free capacity provided by the enterprise drive. Unit: GiB.
   * 
   * @example
   * 100
   */
  freeCdsSize?: number;
  /**
   * @remarks
   * The price.
   */
  price?: DescribePriceResponseBodyPriceInfoPrice;
  /**
   * @remarks
   * The details of the promotion rules.
   */
  rules?: DescribePriceResponseBodyPriceInfoRules[];
  static names(): { [key: string]: string } {
    return {
      freeCdsQuota: 'FreeCdsQuota',
      freeCdsSize: 'FreeCdsSize',
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeCdsQuota: 'boolean',
      freeCdsSize: 'number',
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
   * The price details.
   */
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1175630-3C44-4389-A3C1-15639FFC8EBC
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

