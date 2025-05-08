// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl } from "./DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl";
import { DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue } from "./DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue";


export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl extends $dara.Model {
  conditionControl?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl;
  moduleValue?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue;
  stockValue?: string;
  static names(): { [key: string]: string } {
    return {
      conditionControl: 'ConditionControl',
      moduleValue: 'ModuleValue',
      stockValue: 'StockValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionControl: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl,
      moduleValue: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue,
      stockValue: 'string',
    };
  }

  validate() {
    if(this.conditionControl && typeof (this.conditionControl as any).validate === 'function') {
      (this.conditionControl as any).validate();
    }
    if(this.moduleValue && typeof (this.moduleValue as any).validate === 'function') {
      (this.moduleValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

