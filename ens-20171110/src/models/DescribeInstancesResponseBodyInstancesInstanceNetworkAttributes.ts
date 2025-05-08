// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress";


export class DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes extends $dara.Model {
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-2zeuphj08tt7q3brd****
   */
  networkId?: string;
  /**
   * @remarks
   * Details of the private IP addresses.
   */
  privateIpAddress?: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zeh0r1pabwtg6wcs****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
      privateIpAddress: 'PrivateIpAddress',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'string',
      privateIpAddress: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributesPrivateIpAddress,
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.privateIpAddress && typeof (this.privateIpAddress as any).validate === 'function') {
      (this.privateIpAddress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

