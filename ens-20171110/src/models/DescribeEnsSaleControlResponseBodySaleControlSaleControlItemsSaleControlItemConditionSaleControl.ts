// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl } from "./DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl";
import { DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue } from "./DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue";


export class DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl extends $dara.Model {
  conditionControl?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl;
  description?: string;
  moduleValue?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      conditionControl: 'ConditionControl',
      description: 'Description',
      moduleValue: 'ModuleValue',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionControl: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl,
      description: 'string',
      moduleValue: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue,
      operator: 'string',
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

