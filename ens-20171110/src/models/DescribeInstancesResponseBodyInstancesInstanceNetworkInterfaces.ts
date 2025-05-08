// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaces } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaces";


export class DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces extends $dara.Model {
  networkInterfaces?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaces[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaces: 'NetworkInterfaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaces: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceNetworkInterfacesNetworkInterfaces },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaces)) {
      $dara.Model.validateArray(this.networkInterfaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

