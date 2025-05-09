// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeliveryAddressResponseBodyAddresses } from "./DescribeDeliveryAddressResponseBodyAddresses";


export class DescribeDeliveryAddressResponseBody extends $dara.Model {
  addresses?: DescribeDeliveryAddressResponseBodyAddresses[];
  /**
   * @example
   * 72481C12-69AB-5CE1-8A35-A8EFA921****
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': DescribeDeliveryAddressResponseBodyAddresses },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

