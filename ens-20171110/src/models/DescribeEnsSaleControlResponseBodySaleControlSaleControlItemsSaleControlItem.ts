// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl } from "./DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl";
import { DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl } from "./DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl";


export class DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItem extends $dara.Model {
  basicSaleControl?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl;
  conditionSaleControl?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl[];
  static names(): { [key: string]: string } {
    return {
      basicSaleControl: 'BasicSaleControl',
      conditionSaleControl: 'ConditionSaleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicSaleControl: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl,
      conditionSaleControl: { 'type': 'array', 'itemType': DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl },
    };
  }

  validate() {
    if(this.basicSaleControl && typeof (this.basicSaleControl as any).validate === 'function') {
      (this.basicSaleControl as any).validate();
    }
    if(Array.isArray(this.conditionSaleControl)) {
      $dara.Model.validateArray(this.conditionSaleControl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

