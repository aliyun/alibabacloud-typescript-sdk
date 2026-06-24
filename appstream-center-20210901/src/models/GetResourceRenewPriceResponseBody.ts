// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceRenewPriceResponseBodyDataPricePromotions extends $dara.Model {
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
   * The coupon descriptions.
   * 
   * @example
   * **活动
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 139965*****
   */
  promotionId?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * **活动
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

export class GetResourceRenewPriceResponseBodyDataPrice extends $dara.Model {
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
   * The discount amount. The actual price is calculated by subtracting the discount amount from the original price.
   * 
   * @example
   * 1
   */
  discountPrice?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 11
   */
  originalPrice?: string;
  /**
   * @remarks
   * The coupon descriptions.
   */
  promotions?: GetResourceRenewPriceResponseBodyDataPricePromotions[];
  /**
   * @remarks
   * The actual price. The actual price is calculated by subtracting the discount amount from the original price.
   * 
   * @example
   * 10
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
      promotions: { 'type': 'array', 'itemType': GetResourceRenewPriceResponseBodyDataPricePromotions },
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

export class GetResourceRenewPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The pricing rule description.
   * 
   * @example
   * **活动
   */
  description?: string;
  /**
   * @remarks
   * The pricing rule ID.
   * 
   * @example
   * 20002****
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

export class GetResourceRenewPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  price?: GetResourceRenewPriceResponseBodyDataPrice;
  /**
   * @remarks
   * The pricing rules.
   */
  rules?: GetResourceRenewPriceResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetResourceRenewPriceResponseBodyDataPrice,
      rules: { 'type': 'array', 'itemType': GetResourceRenewPriceResponseBodyDataRules },
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

export class GetResourceRenewPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price object.
   */
  data?: GetResourceRenewPriceResponseBodyData;
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
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetResourceRenewPriceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

