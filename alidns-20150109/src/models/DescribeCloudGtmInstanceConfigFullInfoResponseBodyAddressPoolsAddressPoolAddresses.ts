// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddressesAddress } from "./DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddressesAddress";


export class DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddresses extends $dara.Model {
  address?: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddressesAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddressesAddress },
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

