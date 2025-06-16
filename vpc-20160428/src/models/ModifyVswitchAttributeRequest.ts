// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVSwitchAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new description for the vSwitch.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my vswitch.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the IPv6 feature for the vSwitch. Valid values:
   * 
   * *   **true**: enables the IPv6 feature.
   * *   **false**: disables the IPv6 feature. This is the default value.
   * 
   * @example
   * false
   */
  enableIPv6?: boolean;
  /**
   * @remarks
   * The last eight bits of the IPv6 CIDR block of the vSwitch. Valid values: **0** to **255**.
   * 
   * You can set this parameter only when the IPv6 feature is enabled for the virtual private cloud (VPC) to which the vSwitch belongs.
   * 
   * @example
   * 10
   */
  ipv6CidrBlock?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the vSwitch is deployed. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The new name for the vSwitch.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * VSwitch-1
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The IPv6 CIDR block of the VPC to which the vSwitch belongs.
   * 
   * You can set this parameter only when the IPv6 feature is enabled for the VPC.
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

