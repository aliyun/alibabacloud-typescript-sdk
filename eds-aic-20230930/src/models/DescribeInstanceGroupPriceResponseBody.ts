// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceGroupPriceResponseBodyPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * code
   */
  optionCode?: string;
  /**
   * @remarks
   * The coupon description.
   * 
   * @example
   * Regular promotion
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 86744342****
   */
  promotionId?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * Regular promotion
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

export class DescribeInstanceGroupPriceResponseBodyPrice extends $dara.Model {
  /**
   * @remarks
   * The currency unit.
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
   * 12618.0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 18134.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The promotion information.
   */
  promotions?: DescribeInstanceGroupPriceResponseBodyPricePromotions[];
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 70.0
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
      promotions: { 'type': 'array', 'itemType': DescribeInstanceGroupPriceResponseBodyPricePromotions },
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

export class DescribeInstanceGroupPriceResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * Regular promotion
   */
  description?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * yhpcxb4qhgp2k4****
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

export class DescribeInstanceGroupPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribeInstanceGroupPriceResponseBodyPrice;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E4F2B7-BBDA-534D-B872-CCC798996F69
   */
  requestId?: string;
  /**
   * @remarks
   * The rule information.
   */
  rules?: DescribeInstanceGroupPriceResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeInstanceGroupPriceResponseBodyPrice,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeInstanceGroupPriceResponseBodyRules },
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

