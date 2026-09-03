// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceResponseBodyPriceInfoPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The promotion rule description.
   * 
   * @example
   * test
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion description.
   * 
   * @example
   * New product launch, enjoy discounts now
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * promo_option
   */
  promotionId?: string;
  /**
   * @remarks
   * The promotion name.
   * 
   * @example
   * Selected deals
   */
  promotionName?: string;
  /**
   * @remarks
   * Indicates whether the promotion is selected.
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

export class DescribeRenewalPriceResponseBodyPriceInfoPrice extends $dara.Model {
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
   * The discount amount.
   * 
   * @example
   * 15.8
   */
  discountPrice?: number;
  /**
   * @remarks
   * The order information.
   */
  orderLines?: { [key: string]: string };
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 79.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The promotion information.
   */
  promotions?: DescribeRenewalPriceResponseBodyPriceInfoPricePromotions[];
  /**
   * @remarks
   * The actual payment price. The value is the original price minus the discount amount.
   * 
   * @example
   * 63.2
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      orderLines: 'OrderLines',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      orderLines: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      originalPrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyPriceInfoPricePromotions },
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

export class DescribeRenewalPriceResponseBodyPriceInfoRules extends $dara.Model {
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * Get 15% off the list price when you purchase a 1-year subscription
   */
  description?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 29644
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

export class DescribeRenewalPriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribeRenewalPriceResponseBodyPriceInfoPrice;
  /**
   * @remarks
   * The promotion rule information.
   */
  rules?: DescribeRenewalPriceResponseBodyPriceInfoRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeRenewalPriceResponseBodyPriceInfoPrice,
      rules: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyPriceInfoRules },
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

export class DescribeRenewalPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  priceInfo?: DescribeRenewalPriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72E47B1E-6B11-5A11-A27C-7A80F866****
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
      priceInfo: DescribeRenewalPriceResponseBodyPriceInfo,
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

