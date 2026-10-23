// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceGroupPriceForRenewResponseBodyPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The option code.
   * 
   * @example
   * youhui_quan
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion description.
   * 
   * @example
   * 20 off on orders over 40
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 87996380****
   */
  promotionId?: string;
  /**
   * @remarks
   * The promotion name.
   * 
   * @example
   * 20 off on orders over 40
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

export class DescribeInstanceGroupPriceForRenewResponseBodyPrice extends $dara.Model {
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
   * 1098.99
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 5007.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The promotion information.
   */
  promotions?: DescribeInstanceGroupPriceForRenewResponseBodyPricePromotions[];
  /**
   * @remarks
   * The transaction amount.
   * 
   * @example
   * 34.02
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
      promotions: { 'type': 'array', 'itemType': DescribeInstanceGroupPriceForRenewResponseBodyPricePromotions },
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

export class DescribeInstanceGroupPriceForRenewResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The activity description.
   * 
   * @example
   * 20 off on orders over 40
   */
  description?: string;
  /**
   * @remarks
   * The rule ID.
   * 
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

export class DescribeInstanceGroupPriceForRenewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribeInstanceGroupPriceForRenewResponseBodyPrice;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8451630-77B9-5259-A9BC-950E9BC586B2
   */
  requestId?: string;
  /**
   * @remarks
   * The promotion rules.
   */
  rules?: DescribeInstanceGroupPriceForRenewResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeInstanceGroupPriceForRenewResponseBodyPrice,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeInstanceGroupPriceForRenewResponseBodyRules },
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

