// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterface } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterface";


export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces extends $dara.Model {
  networkInterface?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterface[];
  static names(): { [key: string]: string } {
    return {
      networkInterface: 'NetworkInterface',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterface: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterface },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterface)) {
      $dara.Model.validateArray(this.networkInterface);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

