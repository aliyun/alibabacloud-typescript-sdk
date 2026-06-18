// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBotPriceResponseBodyPriceModelRuleRuleList extends $dara.Model {
  name?: string;
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBotPriceResponseBodyPriceModelRule extends $dara.Model {
  ruleList?: DescribeBotPriceResponseBodyPriceModelRuleRuleList[];
  static names(): { [key: string]: string } {
    return {
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleList: { 'type': 'array', 'itemType': DescribeBotPriceResponseBodyPriceModelRuleRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBotPriceResponseBodyPriceModel extends $dara.Model {
  /**
   * @remarks
   * The currency. Valid values:
   * 
   * - JPY: Japanese Yen.
   * 
   * - USD: US Dollar.
   * 
   * - CNY: Chinese Yuan.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discount amount of the order.
   * 
   * @example
   * 50
   */
  discountPrice?: number;
  /**
   * @remarks
   * The final price of the order, which is the actual transaction price.
   * 
   * @example
   * 100
   */
  price?: number;
  rule?: DescribeBotPriceResponseBodyPriceModelRule;
  /**
   * @remarks
   * The original price of the order. Original price = actual transaction price + discount amount.
   * 
   * @example
   * 150
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      price: 'Price',
      rule: 'Rule',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      price: 'number',
      rule: DescribeBotPriceResponseBodyPriceModelRule,
      totalPrice: 'number',
    };
  }

  validate() {
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBotPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price information.
   */
  priceModel?: DescribeBotPriceResponseBodyPriceModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FCF50EDF-1C2B-51E9-A372-E194D16ED350
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceModel: 'PriceModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceModel: DescribeBotPriceResponseBodyPriceModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.priceModel && typeof (this.priceModel as any).validate === 'function') {
      (this.priceModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

