// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress } from "./DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress";


export class DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses extends $dara.Model {
  publicIpAddress?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress[];
  static names(): { [key: string]: string } {
    return {
      publicIpAddress: 'PublicIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpAddress: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstancePublicIpAddressesPublicIpAddress },
    };
  }

  validate() {
    if(Array.isArray(this.publicIpAddress)) {
      $dara.Model.validateArray(this.publicIpAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

