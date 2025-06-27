// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPool } from "./DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPool";


export class DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPools extends $dara.Model {
  addressPool?: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPool[];
  static names(): { [key: string]: string } {
    return {
      addressPool: 'AddressPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPool: { 'type': 'array', 'itemType': DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPool },
    };
  }

  validate() {
    if(Array.isArray(this.addressPool)) {
      $dara.Model.validateArray(this.addressPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

