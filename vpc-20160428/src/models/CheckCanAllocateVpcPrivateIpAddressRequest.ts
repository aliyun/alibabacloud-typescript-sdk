// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCanAllocateVpcPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the private IP address to check. Valid values:
   * 
   * - **ipv4**: IPv4. This parameter is optional when the private IP address is of the IPv4 type.
   * - **ipv6**: IPv6. This parameter is required when the private IP address is of the IPv6 type.
   * 
   * @example
   * ipv4
   */
  ipVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The private IP address to check. The private IP address must belong to the vSwitch specified by the **VSwitchId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.7
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID of the vSwitch to which the private IP address belongs.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the private IP address belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-m5ew3t46z2drmifnt****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateIpAddress: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

