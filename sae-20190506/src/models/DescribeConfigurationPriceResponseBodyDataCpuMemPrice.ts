// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder } from "./DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder";
import { DescribeConfigurationPriceResponseBodyDataCpuMemPriceRules } from "./DescribeConfigurationPriceResponseBodyDataCpuMemPriceRules";


export class DescribeConfigurationPriceResponseBodyDataCpuMemPrice extends $dara.Model {
  /**
   * @remarks
   * The information about pricing.
   */
  order?: DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder;
  /**
   * @remarks
   * The discount rules.
   */
  rules?: DescribeConfigurationPriceResponseBodyDataCpuMemPriceRules[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataCpuMemPriceRules },
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

