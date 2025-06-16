// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6Address } from "./DescribeIpv6addressesResponseBodyIpv6addressesIpv6address";


export class DescribeIpv6AddressesResponseBodyIpv6Addresses extends $dara.Model {
  ipv6Address?: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6Address[];
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: { 'type': 'array', 'itemType': DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6Address },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

