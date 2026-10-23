// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileAgentPackagePriceForRenewResponseBodyPricePriceDetailModulePrice extends $dara.Model {
  /**
   * @example
   * 629.7
   */
  discountPrice?: string;
  /**
   * @example
   * 高级版
   */
  moduleName?: string;
  /**
   * @example
   * 1680
   */
  originalPrice?: string;
  /**
   * @example
   * 94.85
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

export class DescribeMobileAgentPackagePriceForRenewResponseBodyPricePriceDetail extends $dara.Model {
  /**
   * @example
   * 200
   */
  discountPrice?: number;
  /**
   * @example
   * cmag-shdbcudbaib****
   */
  instanceId?: string;
  modulePrice?: DescribeMobileAgentPackagePriceForRenewResponseBodyPricePriceDetailModulePrice[];
  /**
   * @example
   * 1000
   */
  originalPrice?: number;
  /**
   * @example
   * CloudPhoneMobileAgent
   */
  resourceType?: string;
  /**
   * @example
   * 800
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      instanceId: 'InstanceId',
      modulePrice: 'ModulePrice',
      originalPrice: 'OriginalPrice',
      resourceType: 'ResourceType',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      instanceId: 'string',
      modulePrice: { 'type': 'array', 'itemType': DescribeMobileAgentPackagePriceForRenewResponseBodyPricePriceDetailModulePrice },
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

export class DescribeMobileAgentPackagePriceForRenewResponseBodyPricePromotions extends $dara.Model {
  /**
   * @example
   * daily
   */
  optionCode?: string;
  /**
   * @example
   * 日常优惠
   */
  promotionDesc?: string;
  /**
   * @example
   * 91381816****
   */
  promotionId?: string;
  /**
   * @example
   * 日常优惠
   */
  promotionName?: string;
  /**
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

export class DescribeMobileAgentPackagePriceForRenewResponseBodyPrice extends $dara.Model {
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 200
   */
  discountPrice?: number;
  /**
   * @example
   * 1000
   */
  originalPrice?: number;
  priceDetail?: DescribeMobileAgentPackagePriceForRenewResponseBodyPricePriceDetail[];
  promotions?: DescribeMobileAgentPackagePriceForRenewResponseBodyPricePromotions[];
  /**
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
      priceDetail: { 'type': 'array', 'itemType': DescribeMobileAgentPackagePriceForRenewResponseBodyPricePriceDetail },
      promotions: { 'type': 'array', 'itemType': DescribeMobileAgentPackagePriceForRenewResponseBodyPricePromotions },
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

export class DescribeMobileAgentPackagePriceForRenewResponseBodyRules extends $dara.Model {
  /**
   * @example
   * 日常优惠
   */
  description?: string;
  /**
   * @example
   * 20230629****
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

export class DescribeMobileAgentPackagePriceForRenewResponseBody extends $dara.Model {
  price?: DescribeMobileAgentPackagePriceForRenewResponseBodyPrice;
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  rules?: DescribeMobileAgentPackagePriceForRenewResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeMobileAgentPackagePriceForRenewResponseBodyPrice,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeMobileAgentPackagePriceForRenewResponseBodyRules },
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

