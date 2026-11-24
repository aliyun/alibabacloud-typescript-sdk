// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassignIpv6AddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The IPv6 addresses to be revoked. Valid values of N: 1 to 10.
   * 
   * @example
   * 2001:db8:1234:1a00::***
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The IPv6 prefixes to be revoked. Valid values of N: 1 to 10.
   */
  ipv6Prefix?: string[];
  /**
   * @remarks
   * The ID of the elastic network interface controller (NIC).
   * 
   * This parameter is required.
   * 
   * @example
   * eni-bp14v2sdd3v8ht****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the elastic network interface controller (NIC). You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
      ipv6Address: 'Ipv6Address',
      ipv6Prefix: 'Ipv6Prefix',
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      ipv6Prefix: { 'type': 'array', 'itemType': 'string' },
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    if(Array.isArray(this.ipv6Prefix)) {
      $dara.Model.validateArray(this.ipv6Prefix);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

