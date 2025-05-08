// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl } from "./DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl";
import { DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl } from "./DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl";


export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItem extends $dara.Model {
  basicSaleControl?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl;
  conditionSaleControl?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl[];
  static names(): { [key: string]: string } {
    return {
      basicSaleControl: 'BasicSaleControl',
      conditionSaleControl: 'ConditionSaleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicSaleControl: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl,
      conditionSaleControl: { 'type': 'array', 'itemType': DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl },
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

