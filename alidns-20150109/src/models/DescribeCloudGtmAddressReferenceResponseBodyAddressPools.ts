// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPool } from "./DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPool";


export class DescribeCloudGtmAddressReferenceResponseBodyAddressPools extends $dara.Model {
  addressPool?: DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPool[];
  static names(): { [key: string]: string } {
    return {
      addressPool: 'AddressPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPool: { 'type': 'array', 'itemType': DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPool },
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

