// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress } from "./DescribeInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress";


export class DescribeInstanceAttributeResponseBodyVpcAttributes extends $dara.Model {
  /**
   * @remarks
   * The NAT IP address of the instance. It is used by ECS instances in different VPCs for communication.
   * 
   * @example
   * ``172.17.**.**``
   */
  natIpAddress?: string;
  /**
   * @remarks
   * The private IP address of the instance.
   */
  privateIpAddress?: DescribeInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
   * 
   * @example
   * vsw-uf6ixacqz8osrwnqb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-wz9e4e9pmbcnj6ki6****
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
      privateIpAddress: DescribeInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress,
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

