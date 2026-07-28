// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVSwitchAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the vSwitch.  
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my vswitch.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable IPv6 for the vSwitch. Valid values:
   * 
   * - **true**: enables IPv6. The VPC to which the vSwitch belongs must have IPv6 enabled. You must also specify Ipv6CidrBlock to assign an IPv6 CIDR block to the vSwitch.
   * - **false** (default): disables IPv6. When you disable IPv6 for the vSwitch, make sure that no IPv6 addresses are in use. You cannot specify Ipv6CidrBlock at the same time.
   * 
   * @example
   * false
   */
  enableIPv6?: boolean;
  /**
   * @remarks
   * The last 8 bits of the IPv6 CIDR block of the vSwitch. Valid values: **0** to **255**.
   * 
   * You can specify this parameter only when the VPC to which the vSwitch belongs has IPv6 enabled. This parameter is used to assign an IPv6 CIDR block to the vSwitch. After the IPv6 CIDR block is allocated, it cannot be changed to another CIDR block. Make sure that the CIDR block does not overlap with those of other vSwitches in the same VPC.
   * 
   * @example
   * 10
   */
  ipv6CidrBlock?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the vSwitch. You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-25nacdfvue4****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The new name of the vSwitch.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * VSwitch-1
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC to which the vSwitch belongs.
   * If the VPC has multiple IPv6 CIDR blocks, you can specify this parameter to indicate the IPv6 CIDR block range for the vSwitch. If you do not specify this parameter, the IPv6 CIDR block assigned when IPv6 was enabled for the VPC is used.
   * 
   * @example
   * 2408:XXXX:312:3e00::/56
   */
  vpcIpv6CidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableIPv6: 'EnableIPv6',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcIpv6CidrBlock: 'VpcIpv6CidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableIPv6: 'boolean',
      ipv6CidrBlock: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcIpv6CidrBlock: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

