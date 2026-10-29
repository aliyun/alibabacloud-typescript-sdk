// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditPackagePriceResponseBodyPricePriceDetailModulePrice extends $dara.Model {
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 800
   */
  discountPrice?: string;
  /**
   * @remarks
   * The name of the billing module.
   * 
   * @example
   * 1000 credits
   */
  moduleName?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 1000
   */
  originalPrice?: string;
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 200
   */
  tradePrice?: string;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      moduleName: 'ModuleName',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'string',
      moduleName: 'string',
      originalPrice: 'string',
      tradePrice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditPackagePriceResponseBodyPricePriceDetail extends $dara.Model {
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 800
   */
  discountPrice?: number;
  /**
   * @remarks
   * The prices of the modules.
   */
  modulePrice?: DescribeCreditPackagePriceResponseBodyPricePriceDetailModulePrice[];
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 1000
   */
  originalPrice?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * CloudPhoneAIPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 200
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      modulePrice: 'ModulePrice',
      originalPrice: 'OriginalPrice',
      resourceType: 'ResourceType',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      modulePrice: { 'type': 'array', 'itemType': DescribeCreditPackagePriceResponseBodyPricePriceDetailModulePrice },
      originalPrice: 'number',
      resourceType: 'string',
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modulePrice)) {
      $dara.Model.validateArray(this.modulePrice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditPackagePriceResponseBodyPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * daily
   */
  optionCode?: string;
  /**
   * @remarks
   * The coupon description.
   * 
   * @example
   * Regular discount
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * Regular discount
   */
  promotionName?: string;
  /**
   * @remarks
   * Indicates whether the coupon is selected.
   * 
   * @example
   * true
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

export class DescribeCreditPackagePriceResponseBodyPrice extends $dara.Model {
  /**
   * @remarks
   * The currency. Valid values:
   * - CNY: Chinese yuan
   * - USD: US dollar
   * - JPY: Japanese yen
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
   * 800
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 1000
   */
  originalPrice?: number;
  /**
   * @remarks
   * The price details.
   */
  priceDetail?: DescribeCreditPackagePriceResponseBodyPricePriceDetail[];
  /**
   * @remarks
   * The promotion information.
   */
  promotions?: DescribeCreditPackagePriceResponseBodyPricePromotions[];
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 200
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      priceDetail: 'PriceDetail',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      priceDetail: { 'type': 'array', 'itemType': DescribeCreditPackagePriceResponseBodyPricePriceDetail },
      promotions: { 'type': 'array', 'itemType': DescribeCreditPackagePriceResponseBodyPricePromotions },
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.priceDetail)) {
      $dara.Model.validateArray(this.priceDetail);
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

export class DescribeCreditPackagePriceResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The promotion description.
   * 
   * @example
   * Regular discount
   */
  description?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 3s2f42fis7pmb9****
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

export class DescribeCreditPackagePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribeCreditPackagePriceResponseBodyPrice;
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
  rules?: DescribeCreditPackagePriceResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeCreditPackagePriceResponseBodyPrice,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeCreditPackagePriceResponseBodyRules },
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

