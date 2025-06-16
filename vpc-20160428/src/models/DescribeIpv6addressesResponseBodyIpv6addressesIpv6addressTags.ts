// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTagsTag } from "./DescribeIpv6addressesResponseBodyIpv6addressesIpv6addressTagsTag";


export class DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTags extends $dara.Model {
  tag?: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

