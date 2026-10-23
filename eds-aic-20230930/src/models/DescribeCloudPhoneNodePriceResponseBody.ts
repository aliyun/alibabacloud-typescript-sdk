// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudPhoneNodePriceResponseBodyPricePriceDetailModulePrice extends $dara.Model {
  /**
   * @example
   * 1978.2
   */
  discountPrice?: string;
  /**
   * @example
   * PhoneData
   */
  moduleName?: string;
  /**
   * @example
   * 8990
   */
  originalPrice?: string;
  /**
   * @example
   * 1666.0
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

export class DescribeCloudPhoneNodePriceResponseBodyPricePriceDetail extends $dara.Model {
  /**
   * @example
   * 1978.2
   */
  discountPrice?: number;
  modulePrice?: DescribeCloudPhoneNodePriceResponseBodyPricePriceDetailModulePrice[];
  /**
   * @example
   * 4199
   */
  originalPrice?: number;
  /**
   * @example
   * CloudPhoneMatrix
   */
  resourceType?: string;
  /**
   * @example
   * 892.0
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
      modulePrice: { 'type': 'array', 'itemType': DescribeCloudPhoneNodePriceResponseBodyPricePriceDetailModulePrice },
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

export class DescribeCloudPhoneNodePriceResponseBodyPricePromotions extends $dara.Model {
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
   * 82842468****
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
      selected: 'selected',
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

export class DescribeCloudPhoneNodePriceResponseBodyPrice extends $dara.Model {
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 878.15
   */
  discountPrice?: number;
  /**
   * @example
   * 2710
   */
  originalPrice?: number;
  priceDetail?: DescribeCloudPhoneNodePriceResponseBodyPricePriceDetail[];
  promotions?: DescribeCloudPhoneNodePriceResponseBodyPricePromotions[];
  /**
   * @example
   * 99.0
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
      priceDetail: { 'type': 'array', 'itemType': DescribeCloudPhoneNodePriceResponseBodyPricePriceDetail },
      promotions: { 'type': 'array', 'itemType': DescribeCloudPhoneNodePriceResponseBodyPricePromotions },
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

export class DescribeCloudPhoneNodePriceResponseBodyRules extends $dara.Model {
  /**
   * @example
   * 日常优惠
   */
  description?: string;
  /**
   * @example
   * t1uf7xt141ut5i****
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

export class DescribeCloudPhoneNodePriceResponseBody extends $dara.Model {
  price?: DescribeCloudPhoneNodePriceResponseBodyPrice;
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  rules?: DescribeCloudPhoneNodePriceResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeCloudPhoneNodePriceResponseBodyPrice,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeCloudPhoneNodePriceResponseBodyRules },
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

