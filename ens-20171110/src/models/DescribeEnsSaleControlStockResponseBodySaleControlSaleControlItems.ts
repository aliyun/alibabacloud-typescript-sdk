// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItem } from "./DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItem";


export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItems extends $dara.Model {
  moduleCode?: string;
  saleControlItem?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItem;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      saleControlItem: 'SaleControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      saleControlItem: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItem,
    };
  }

  validate() {
    if(this.saleControlItem && typeof (this.saleControlItem as any).validate === 'function') {
      (this.saleControlItem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

