// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassignPrivateIpAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * One or more IPv4 prefixes to remove.
   */
  ipv4Prefix?: string[];
  /**
   * @remarks
   * The ID of the Elastic Network Interface (ENI).
   * 
   * This parameter is required.
   * 
   * @example
   * eni-bp67acfmxazb4ph****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * One or more secondary private IP addresses to remove.
   * 
   * @example
   * ``192.168.**.**``
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The region ID of the resource. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ipv4Prefix: 'Ipv4Prefix',
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Prefix: { 'type': 'array', 'itemType': 'string' },
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Prefix)) {
      $dara.Model.validateArray(this.ipv4Prefix);
    }
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

