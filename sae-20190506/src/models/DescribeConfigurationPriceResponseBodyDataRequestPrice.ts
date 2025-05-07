// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeConfigurationPriceResponseBodyDataRequestPriceOrder } from "./DescribeConfigurationPriceResponseBodyDataRequestPriceOrder";
import { DescribeConfigurationPriceResponseBodyDataRequestPriceRules } from "./DescribeConfigurationPriceResponseBodyDataRequestPriceRules";


export class DescribeConfigurationPriceResponseBodyDataRequestPrice extends $dara.Model {
  /**
   * @remarks
   * The information about pricing.
   */
  order?: DescribeConfigurationPriceResponseBodyDataRequestPriceOrder;
  /**
   * @remarks
   * The discount rule.
   */
  rules?: DescribeConfigurationPriceResponseBodyDataRequestPriceRules[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeConfigurationPriceResponseBodyDataRequestPriceOrder,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataRequestPriceRules },
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

