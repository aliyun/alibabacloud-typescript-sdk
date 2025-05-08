// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResource } from "./DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResource";


export class DescribeEnsSaleControlAvailableResourceResponseBody extends $dara.Model {
  requestId?: string;
  saleControlAvailableResource?: DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      saleControlAvailableResource: 'SaleControlAvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      saleControlAvailableResource: { 'type': 'array', 'itemType': DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResource },
    };
  }

  validate() {
    if(Array.isArray(this.saleControlAvailableResource)) {
      $dara.Model.validateArray(this.saleControlAvailableResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

