// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfaceAttributeResponseBodyIpv6SetsIpv6Set } from "./DescribeNetworkInterfaceAttributeResponseBodyIpv6setsIpv6set";


export class DescribeNetworkInterfaceAttributeResponseBodyIpv6Sets extends $dara.Model {
  ipv6Set?: DescribeNetworkInterfaceAttributeResponseBodyIpv6SetsIpv6Set[];
  static names(): { [key: string]: string } {
    return {
      ipv6Set: 'Ipv6Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Set: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseBodyIpv6SetsIpv6Set },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Set)) {
      $dara.Model.validateArray(this.ipv6Set);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

