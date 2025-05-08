// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstancePrivateIpAddressesPrivateIpAddress } from "./DescribeInstancesResponseBodyInstancesInstancePrivateIpAddressesPrivateIpAddress";


export class DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses extends $dara.Model {
  privateIpAddress?: DescribeInstancesResponseBodyInstancesInstancePrivateIpAddressesPrivateIpAddress[];
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddress: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstancePrivateIpAddressesPrivateIpAddress },
    };
  }

  validate() {
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

