// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRatePlanPriceGapResponseBodyPriceModelRuleRuleList extends $dara.Model {
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

export class DescribeRatePlanPriceGapResponseBodyPriceModelRule extends $dara.Model {
  ruleList?: DescribeRatePlanPriceGapResponseBodyPriceModelRuleRuleList[];
  static names(): { [key: string]: string } {
    return {
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleList: { 'type': 'array', 'itemType': DescribeRatePlanPriceGapResponseBodyPriceModelRuleRuleList },
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

export class DescribeRatePlanPriceGapResponseBodyPriceModel extends $dara.Model {
  /**
   * @remarks
   * The currency. Valid values:
   * - JPY: Japanese Yen.
   * - USD: US Dollar.
   * - CNY: Chinese Yuan.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The order discount amount.
   * 
   * @example
   * 1
   */
  discountPrice?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * xcdn-91fknmb80f0g
   */
  instanceId?: string;
  /**
   * @remarks
   * The final order price, which is the actual transaction price.
   * 
   * @example
   * 1
   */
  price?: number;
  rule?: DescribeRatePlanPriceGapResponseBodyPriceModelRule;
  /**
   * @remarks
   * The target plan code.
   * 
   * @example
   * entranceplan
   */
  targetPlanCode?: string;
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
      instanceId: 'InstanceId',
      price: 'Price',
      rule: 'Rule',
      targetPlanCode: 'TargetPlanCode',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      instanceId: 'string',
      price: 'number',
      rule: DescribeRatePlanPriceGapResponseBodyPriceModelRule,
      targetPlanCode: 'string',
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

export class DescribeRatePlanPriceGapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price information.
   */
  priceModel?: DescribeRatePlanPriceGapResponseBodyPriceModel;
  /**
   * @remarks
   * The request ID.
   * 
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
      priceModel: DescribeRatePlanPriceGapResponseBodyPriceModel,
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

