// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue extends $dara.Model {
  moduleMaxValue?: string;
  moduleMinValue?: string;
  static names(): { [key: string]: string } {
    return {
      moduleMaxValue: 'ModuleMaxValue',
      moduleMinValue: 'ModuleMinValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleMaxValue: 'string',
      moduleMinValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

