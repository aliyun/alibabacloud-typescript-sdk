// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceModifyPriceResponseBodyDataPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The option code of the coupon, which identifies the coupon returned in the quote together with PromotionId.
   * 
   * @example
   * coupon****
   */
  optionCode?: string;
  /**
   * @remarks
   * The description of the coupon, which is used to display the information about the discount.
   * 
   * @example
   * **Discount during the promotion
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The ID of the coupon, which is used to identify the coupon returned in the quote.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The name of the coupon, which is used to display the optional discount in the current quote.
   * 
   * @example
   * **Discount
   */
  promotionName?: string;
  /**
   * @remarks
   * Specifies whether the coupon is selected in the quote. Valid values:
   * 
   * - true: Selected. The coupon is applied in the quote.
   * - false: Not selected. The coupon is not applied in the quote.
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

export class GetResourceModifyPriceResponseBodyDataPrice extends $dara.Model {
  /**
   * @remarks
   * The currency code of the price amount. CNY indicates Chinese Yuan. Refer to this field to understand the amounts of OriginalPrice, DiscountPrice, and TradePrice.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discount amount that can be deducted from the scale-out price, not the discount percentage.
   * 
   * The discounted price TradePrice is obtained by subtracting this field from the original price OriginalPrice. For the currency of the amount, see Currency.
   * 
   * @example
   * 1.00
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price of the scale-out, which is the amount before discounts. For the currency of the amount, see Currency.
   * 
   * @example
   * 11.00
   */
  originalPrice?: number;
  /**
   * @remarks
   * The list of optional coupons returned in the quote. Each item includes the coupon ID, name, description, and selection status.
   */
  promotions?: GetResourceModifyPriceResponseBodyDataPricePromotions[];
  /**
   * @remarks
   * The discounted price of the scale-out.
   * 
   * Calculation relationship: TradePrice = OriginalPrice - DiscountPrice. For the currency of the amount, see Currency. This operation returns only a quote and does not execute payment.
   * 
   * @example
   * 10.00
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
      promotions: { 'type': 'array', 'itemType': GetResourceModifyPriceResponseBodyDataPricePromotions },
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

export class GetResourceModifyPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The description of the pricing calculation rule, such as the user discount applicable to the current quote.
   * 
   * @example
   * User discount
   */
  description?: string;
  /**
   * @remarks
   * The ID of the pricing calculation rule, which is used to identify the rule applied in the quote.
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

export class GetResourceModifyPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pricing details of the scale-out. For the currency of the amounts, see Currency. For the coupon selection status, see Promotions.
   */
  price?: GetResourceModifyPriceResponseBodyDataPrice;
  /**
   * @remarks
   * The list of pricing calculation rules for the quote, which is used to describe the applicable pricing or discount rules.
   */
  rules?: GetResourceModifyPriceResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetResourceModifyPriceResponseBodyDataPrice,
      rules: { 'type': 'array', 'itemType': GetResourceModifyPriceResponseBodyDataRules },
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

export class GetResourceModifyPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quote for the resource scale-out of the delivery group, which includes the pricing details and pricing calculation rules.
   */
  data?: GetResourceModifyPriceResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request, which is used to locate and troubleshoot request issues.
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
      data: GetResourceModifyPriceResponseBodyData,
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

