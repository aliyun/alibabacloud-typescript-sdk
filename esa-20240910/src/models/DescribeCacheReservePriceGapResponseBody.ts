// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheReservePriceGapResponseBodyPriceModelRuleRuleList extends $dara.Model {
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

export class DescribeCacheReservePriceGapResponseBodyPriceModelRule extends $dara.Model {
  ruleList?: DescribeCacheReservePriceGapResponseBodyPriceModelRuleRuleList[];
  static names(): { [key: string]: string } {
    return {
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleList: { 'type': 'array', 'itemType': DescribeCacheReservePriceGapResponseBodyPriceModelRuleRuleList },
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

export class DescribeCacheReservePriceGapResponseBodyPriceModel extends $dara.Model {
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 1
   */
  discountPrice?: number;
  /**
   * @example
   * esa-cr-9tuv*********
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  price?: number;
  rule?: DescribeCacheReservePriceGapResponseBodyPriceModelRule;
  /**
   * @example
   * 2
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      instanceId: 'InstanceId',
      price: 'Price',
      rule: 'Rule',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      instanceId: 'string',
      price: 'number',
      rule: DescribeCacheReservePriceGapResponseBodyPriceModelRule,
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

export class DescribeCacheReservePriceGapResponseBody extends $dara.Model {
  priceModel?: DescribeCacheReservePriceGapResponseBodyPriceModel;
  /**
   * @example
   * 40423A7F-A83D-1E24-B80E-86DD25790759
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
      priceModel: DescribeCacheReservePriceGapResponseBodyPriceModel,
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

