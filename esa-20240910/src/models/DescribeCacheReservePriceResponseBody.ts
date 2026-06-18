// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheReservePriceResponseBodyPriceModelRuleRuleList extends $dara.Model {
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

export class DescribeCacheReservePriceResponseBodyPriceModelRule extends $dara.Model {
  ruleList?: DescribeCacheReservePriceResponseBodyPriceModelRuleRuleList[];
  static names(): { [key: string]: string } {
    return {
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleList: { 'type': 'array', 'itemType': DescribeCacheReservePriceResponseBodyPriceModelRuleRuleList },
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

export class DescribeCacheReservePriceResponseBodyPriceModel extends $dara.Model {
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
   * 1
   */
  discountPrice?: number;
  /**
   * @remarks
   * The final order price, which is the actual transaction price.
   * 
   * @example
   * 1
   */
  price?: number;
  rule?: DescribeCacheReservePriceResponseBodyPriceModelRule;
  /**
   * @remarks
   * The original order price. Original order price = actual transaction price + discount amount.
   * 
   * @example
   * 2
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
      rule: DescribeCacheReservePriceResponseBodyPriceModelRule,
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

export class DescribeCacheReservePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price information.
   */
  priceModel?: DescribeCacheReservePriceResponseBodyPriceModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2430E05E-1340-5773-B5E1-B743929F46F2
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
      priceModel: DescribeCacheReservePriceResponseBodyPriceModel,
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

