// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSetsIpv4PrefixSet } from "./DescribeNetworkInterfaceAttributeResponseBodyIpv4prefixSetsIpv4prefixSet";


export class DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSets extends $dara.Model {
  ipv4PrefixSet?: DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSetsIpv4PrefixSet[];
  static names(): { [key: string]: string } {
    return {
      ipv4PrefixSet: 'Ipv4PrefixSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4PrefixSet: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseBodyIpv4PrefixSetsIpv4PrefixSet },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4PrefixSet)) {
      $dara.Model.validateArray(this.ipv4PrefixSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

