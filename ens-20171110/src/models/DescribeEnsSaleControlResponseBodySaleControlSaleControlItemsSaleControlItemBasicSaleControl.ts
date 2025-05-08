// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue } from "./DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue";


export class DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl extends $dara.Model {
  description?: string;
  moduleValue?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      moduleValue: 'ModuleValue',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      moduleValue: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue,
      operator: 'string',
    };
  }

  validate() {
    if(this.moduleValue && typeof (this.moduleValue as any).validate === 'function') {
      (this.moduleValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

