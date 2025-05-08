// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlResponseBodySaleControl } from "./DescribeEnsSaleControlResponseBodySaleControl";


export class DescribeEnsSaleControlResponseBody extends $dara.Model {
  requestId?: string;
  saleControl?: DescribeEnsSaleControlResponseBodySaleControl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      saleControl: 'SaleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      saleControl: { 'type': 'array', 'itemType': DescribeEnsSaleControlResponseBodySaleControl },
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

