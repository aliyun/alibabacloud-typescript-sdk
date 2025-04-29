// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSetsIpv4PrefixSet } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4prefixSetsIpv4prefixSet";


export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSets extends $dara.Model {
  ipv4PrefixSet?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSetsIpv4PrefixSet[];
  static names(): { [key: string]: string } {
    return {
      ipv4PrefixSet: 'Ipv4PrefixSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4PrefixSet: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaceIpv4PrefixSetsIpv4PrefixSet },
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

