// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder } from "./DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder";
import { DescribeConfigurationPriceResponseBodyDataTrafficPriceRules } from "./DescribeConfigurationPriceResponseBodyDataTrafficPriceRules";


export class DescribeConfigurationPriceResponseBodyDataTrafficPrice extends $dara.Model {
  /**
   * @remarks
   * The information about pricing.
   */
  order?: DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder;
  /**
   * @remarks
   * The discount rule.
   */
  rules?: DescribeConfigurationPriceResponseBodyDataTrafficPriceRules[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataTrafficPriceRules },
    };
  }

  validate() {
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
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

