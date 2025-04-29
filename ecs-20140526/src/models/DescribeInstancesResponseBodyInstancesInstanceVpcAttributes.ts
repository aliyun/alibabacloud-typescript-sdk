// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceVpcAttributesPrivateIpAddress } from "./DescribeInstancesResponseBodyInstancesInstanceVpcAttributesPrivateIpAddress";


export class DescribeInstancesResponseBodyInstancesInstanceVpcAttributes extends $dara.Model {
  /**
   * @remarks
   * The NAT IP address of the instance. The NAT IP address is used by ECS instances in different VPCs for communication.
   * 
   * @example
   * ``172.17.**.**``
   */
  natIpAddress?: string;
  /**
   * @remarks
   * The private IP addresses of the instance.
   */
  privateIpAddress?: DescribeInstancesResponseBodyInstancesInstanceVpcAttributesPrivateIpAddress;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
   * 
   * @example
   * vsw-2zeh0r1pabwtg6wcs****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-2zeuphj08tt7q3brd****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      natIpAddress: 'NatIpAddress',
      privateIpAddress: 'PrivateIpAddress',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIpAddress: 'string',
      privateIpAddress: DescribeInstancesResponseBodyInstancesInstanceVpcAttributesPrivateIpAddress,
      vSwitchId: 'string',
      vpcId: 'string',
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

