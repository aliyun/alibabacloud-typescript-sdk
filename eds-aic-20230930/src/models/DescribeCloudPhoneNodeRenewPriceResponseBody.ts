// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudPhoneNodeRenewPriceResponseBodyPricePriceDetailModulePrice extends $dara.Model {
  /**
   * @example
   * 878.15
   */
  discountPrice?: string;
  /**
   * @example
   * PhoneData
   */
  moduleName?: string;
  /**
   * @example
   * 1090
   */
  originalPrice?: string;
  /**
   * @example
   * 73.87
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

export class DescribeCloudPhoneNodeRenewPriceResponseBodyPricePriceDetail extends $dara.Model {
  /**
   * @example
   * 274.75
   */
  discountPrice?: number;
  /**
   * @example
   * cpn-9rz9ou1l0wq30****
   */
  instanceId?: string;
  modulePrice?: DescribeCloudPhoneNodeRenewPriceResponseBodyPricePriceDetailModulePrice[];
  /**
   * @example
   * 2087.0
   */
  originalPrice?: number;
  /**
   * @example
   * CloudPhoneMatrix
   */
  resourceType?: string;
  /**
   * @example
   * 1099.0
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
      modulePrice: { 'type': 'array', 'itemType': DescribeCloudPhoneNodeRenewPriceResponseBodyPricePriceDetailModulePrice },
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

export class DescribeCloudPhoneNodeRenewPriceResponseBodyPricePromotions extends $dara.Model {
  /**
   * @example
   * youhui_quan
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

export class DescribeCloudPhoneNodeRenewPriceResponseBodyPrice extends $dara.Model {
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
   * 1860
   */
  originalPrice?: number;
  priceDetail?: DescribeCloudPhoneNodeRenewPriceResponseBodyPricePriceDetail[];
  promotions?: DescribeCloudPhoneNodeRenewPriceResponseBodyPricePromotions[];
  /**
   * @example
   * 769.3
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
      priceDetail: { 'type': 'array', 'itemType': DescribeCloudPhoneNodeRenewPriceResponseBodyPricePriceDetail },
      promotions: { 'type': 'array', 'itemType': DescribeCloudPhoneNodeRenewPriceResponseBodyPricePromotions },
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

export class DescribeCloudPhoneNodeRenewPriceResponseBodyRules extends $dara.Model {
  /**
   * @example
   * 满40减20
   */
  description?: string;
  /**
   * @example
   * 2023110611****
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

export class DescribeCloudPhoneNodeRenewPriceResponseBody extends $dara.Model {
  price?: DescribeCloudPhoneNodeRenewPriceResponseBodyPrice;
  /**
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
  rules?: DescribeCloudPhoneNodeRenewPriceResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeCloudPhoneNodeRenewPriceResponseBodyPrice,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeCloudPhoneNodeRenewPriceResponseBodyRules },
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

