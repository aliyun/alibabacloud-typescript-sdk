// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmAddressPoolResponseBodyAddressesAddress } from "./DescribeCloudGtmAddressPoolResponseBodyAddressesAddress";


export class DescribeCloudGtmAddressPoolResponseBodyAddresses extends $dara.Model {
  address?: DescribeCloudGtmAddressPoolResponseBodyAddressesAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': DescribeCloudGtmAddressPoolResponseBodyAddressesAddress },
    };
  }

  validate() {
    if(Array.isArray(this.address)) {
      $dara.Model.validateArray(this.address);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

