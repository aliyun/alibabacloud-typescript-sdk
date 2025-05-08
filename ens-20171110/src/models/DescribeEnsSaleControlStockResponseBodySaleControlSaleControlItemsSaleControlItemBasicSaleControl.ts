// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue } from "./DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue";


export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl extends $dara.Model {
  moduleValue?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue;
  stockValue?: string;
  static names(): { [key: string]: string } {
    return {
      moduleValue: 'ModuleValue',
      stockValue: 'StockValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleValue: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue,
      stockValue: 'string',
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

