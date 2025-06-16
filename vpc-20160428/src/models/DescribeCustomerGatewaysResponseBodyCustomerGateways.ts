// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGateway } from "./DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGateway";


export class DescribeCustomerGatewaysResponseBodyCustomerGateways extends $dara.Model {
  customerGateway?: DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGateway[];
  static names(): { [key: string]: string } {
    return {
      customerGateway: 'CustomerGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGateway: { 'type': 'array', 'itemType': DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGateway },
    };
  }

  validate() {
    if(Array.isArray(this.customerGateway)) {
      $dara.Model.validateArray(this.customerGateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

