// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCanAllocateVpcPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the private IP address. Valid values:
   * 
   * *   **ipv4** If you want to query an IPv4 address, this parameter is optional.
   * *   **ipv6** If you want to query an IPv6 address, this parameter is required.
   * 
   * @example
   * ipv4
   */
  ipVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * To query whether a private IP address is available, the private IP address must belong to the vSwitch specified by the **VSwitchId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.7
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID of the vSwitch to which the private IP address that you want to query belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The ID of the vSwitch to which the private IP address to be queried belongs.
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

