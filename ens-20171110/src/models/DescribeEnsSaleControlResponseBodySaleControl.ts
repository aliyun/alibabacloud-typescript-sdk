// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlResponseBodySaleControlSaleControlItems } from "./DescribeEnsSaleControlResponseBodySaleControlSaleControlItems";


export class DescribeEnsSaleControlResponseBodySaleControl extends $dara.Model {
  commodityCode?: string;
  orderType?: string;
  saleControlItems?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItems[];
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      orderType: 'OrderType',
      saleControlItems: 'SaleControlItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      orderType: 'string',
      saleControlItems: { 'type': 'array', 'itemType': DescribeEnsSaleControlResponseBodySaleControlSaleControlItems },
    };
  }

  validate() {
    if(Array.isArray(this.saleControlItems)) {
      $dara.Model.validateArray(this.saleControlItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

