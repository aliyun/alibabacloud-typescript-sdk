// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlStockResponseBodySaleControl } from "./DescribeEnsSaleControlStockResponseBodySaleControl";


export class DescribeEnsSaleControlStockResponseBody extends $dara.Model {
  requestId?: string;
  saleControl?: DescribeEnsSaleControlStockResponseBodySaleControl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      saleControl: 'SaleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      saleControl: { 'type': 'array', 'itemType': DescribeEnsSaleControlStockResponseBodySaleControl },
    };
  }

  validate() {
    if(Array.isArray(this.saleControl)) {
      $dara.Model.validateArray(this.saleControl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

