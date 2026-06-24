// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcePriceResponseBodyPriceListPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * coupon****
   */
  optionCode?: string;
  /**
   * @remarks
   * The coupon description.
   * 
   * @example
   * **活动期间的优惠
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 1847709****
   */
  promotionId?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * **优惠
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

export class GetResourcePriceResponseBodyPriceListPrice extends $dara.Model {
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
   * The discount amount. The actual price equals the original price minus the discount amount.
   * 
   * @example
   * 999.0
   */
  discountPrice?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 6700
   */
  originalPrice?: string;
  /**
   * @remarks
   * The coupon metadata.
   */
  promotions?: GetResourcePriceResponseBodyPriceListPricePromotions[];
  /**
   * @remarks
   * The actual price. The actual price equals the original price minus the discount amount.
   * 
   * @example
   * 5278.0
   */
  tradePrice?: string;
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
      discountPrice: 'string',
      originalPrice: 'string',
      promotions: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceListPricePromotions },
      tradePrice: 'string',
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

export class GetResourcePriceResponseBodyPriceListRules extends $dara.Model {
  /**
   * @remarks
   * The pricing rule description.
   * 
   * @example
   * 用户优惠。
   */
  description?: string;
  /**
   * @remarks
   * The pricing rule ID.
   * 
   * @example
   * 260904273633****
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

export class GetResourcePriceResponseBodyPriceList extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  price?: GetResourcePriceResponseBodyPriceListPrice;
  /**
   * @remarks
   * The price type.
   * 
   * @example
   * Standby
   */
  priceType?: string;
  /**
   * @remarks
   * The pricing rules.
   */
  rules?: GetResourcePriceResponseBodyPriceListRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      priceType: 'PriceType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetResourcePriceResponseBodyPriceListPrice,
      priceType: 'string',
      rules: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceListRules },
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

export class GetResourcePriceResponseBodyPriceModelPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * coupon****
   */
  optionCode?: string;
  /**
   * @remarks
   * The coupon description.
   * 
   * @example
   * **活动期间的优惠
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * **优惠
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

export class GetResourcePriceResponseBodyPriceModelPrice extends $dara.Model {
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
   * The discount amount. The actual price equals the original price minus the discount amount.
   * 
   * @example
   * 1.00
   */
  discountPrice?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 11.00
   */
  originalPrice?: string;
  /**
   * @remarks
   * The coupon metadata.
   */
  promotions?: GetResourcePriceResponseBodyPriceModelPricePromotions[];
  /**
   * @remarks
   * The actual price. The actual price equals the original price minus the discount amount.
   * 
   * @example
   * 10.00
   */
  tradePrice?: string;
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
      discountPrice: 'string',
      originalPrice: 'string',
      promotions: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceModelPricePromotions },
      tradePrice: 'string',
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

export class GetResourcePriceResponseBodyPriceModelRules extends $dara.Model {
  /**
   * @remarks
   * The pricing rule description.
   * 
   * @example
   * 用户优惠
   */
  description?: string;
  /**
   * @remarks
   * The pricing rule ID.
   * 
   * @example
   * 102002100393****
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

export class GetResourcePriceResponseBodyPriceModel extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  price?: GetResourcePriceResponseBodyPriceModelPrice;
  /**
   * @remarks
   * The pricing rules.
   */
  rules?: GetResourcePriceResponseBodyPriceModelRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetResourcePriceResponseBodyPriceModelPrice,
      rules: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceModelRules },
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

export class GetResourcePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when an error occurs.
   * 
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @remarks
   * The error message returned when an error occurs.
   * 
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The list of price objects.
   * 
   * This parameter is returned when the request parameter AppInstanceType has a value.
   */
  priceList?: GetResourcePriceResponseBodyPriceList[];
  /**
   * @remarks
   * The price object.
   * 
   * This parameter is returned when the request parameter NodeInstanceType has a value.
   */
  priceModel?: GetResourcePriceResponseBodyPriceModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      priceList: 'PriceList',
      priceModel: 'PriceModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      priceList: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceList },
      priceModel: GetResourcePriceResponseBodyPriceModel,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.priceList)) {
      $dara.Model.validateArray(this.priceList);
    }
    if(this.priceModel && typeof (this.priceModel as any).validate === 'function') {
      (this.priceModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

