// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileAgentPackagePriceResponseBodyPricePriceDetailModulePrice extends $dara.Model {
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
   * The name of the module.
   * 
   * @example
   * Advanced Edition
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

export class DescribeMobileAgentPackagePriceResponseBodyPricePriceDetail extends $dara.Model {
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
  modulePrice?: DescribeMobileAgentPackagePriceResponseBodyPricePriceDetailModulePrice[];
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
   * CloudPhoneMobileAgent
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
      modulePrice: { 'type': 'array', 'itemType': DescribeMobileAgentPackagePriceResponseBodyPricePriceDetailModulePrice },
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

export class DescribeMobileAgentPackagePriceResponseBodyPricePromotions extends $dara.Model {
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
   * 90712091****
   */
  promotionId?: string;
  /**
   * @remarks
   * The name of the promotion.
   * 
   * @example
   * Regular discount
   */
  promotionName?: string;
  /**
   * @remarks
   * Indicates whether the promotion is selected.
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

export class DescribeMobileAgentPackagePriceResponseBodyPrice extends $dara.Model {
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
   * The discounted price.
   * 
   * @example
   * 200
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
  priceDetail?: DescribeMobileAgentPackagePriceResponseBodyPricePriceDetail[];
  /**
   * @remarks
   * The promotion information.
   */
  promotions?: DescribeMobileAgentPackagePriceResponseBodyPricePromotions[];
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 800
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
      priceDetail: { 'type': 'array', 'itemType': DescribeMobileAgentPackagePriceResponseBodyPricePriceDetail },
      promotions: { 'type': 'array', 'itemType': DescribeMobileAgentPackagePriceResponseBodyPricePromotions },
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

export class DescribeMobileAgentPackagePriceResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The rule description.
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
   * f07tkae80jbiy****
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

export class DescribeMobileAgentPackagePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribeMobileAgentPackagePriceResponseBodyPrice;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC******
   */
  requestId?: string;
  /**
   * @remarks
   * The promotion rules.
   */
  rules?: DescribeMobileAgentPackagePriceResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeMobileAgentPackagePriceResponseBodyPrice,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeMobileAgentPackagePriceResponseBodyRules },
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

