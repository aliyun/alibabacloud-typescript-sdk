// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSetsPrivateIpSet } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSetsPrivateIpSet";


export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSets extends $dara.Model {
  privateIpSet?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfacesPrivateIpSetsPrivateIpSet },
    };
  }

  validate() {
    if(Array.isArray(this.privateIpSet)) {
      $dara.Model.validateArray(this.privateIpSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

