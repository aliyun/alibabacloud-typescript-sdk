// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSetsIpv6PrefixSet } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6prefixSetsIpv6prefixSet";


export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSets extends $dara.Model {
  ipv6PrefixSet?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSetsIpv6PrefixSet[];
  static names(): { [key: string]: string } {
    return {
      ipv6PrefixSet: 'Ipv6PrefixSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6PrefixSet: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv6PrefixSetsIpv6PrefixSet },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6PrefixSet)) {
      $dara.Model.validateArray(this.ipv6PrefixSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

