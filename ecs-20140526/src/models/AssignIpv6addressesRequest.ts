// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignIpv6AddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * One or more IPv6 addresses to assign to the network interface controller (NIC). You can set up to 10 IPv6 addresses. Valid values of N: 1 to 10.
   * 
   * Example: Ipv6Address.1=2001:db8:1234:1a00::\\*\\*\\*\\*
   * 
   * > When you invoke this operation, you must set either the `Ipv6Addresses.N` parameter or the `Ipv6AddressCount` parameter, but not both.
   * 
   * @example
   * 2001:db8:1234:1a00::****
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses to randomly generate for the network interface controller (NIC). Valid values: 1 to 10.
   * 
   * > When you invoke this operation, you must set either the `Ipv6Addresses.N` parameter or the `Ipv6AddressCount` parameter, but not both.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * One or more IPv6 prefixes to assign to the network interface controller (NIC). Valid values of N: 1 to 10.
   * > To set IPv6 prefixes for the ENI, you must set either the Ipv6Prefix.N parameter or the Ipv6PrefixCount parameter, but not both.
   */
  ipv6Prefix?: string[];
  /**
   * @remarks
   * The number of IPv6 prefixes to assign to the network interface controller (NIC). Valid values: 1 to 10.
   * > To set IPv6 prefixes for the ENI, you must set either the Ipv6Prefix.N parameter or the Ipv6PrefixCount parameter, but not both.
   * 
   * @example
   * 1
   */
  ipv6PrefixCount?: number;
  /**
   * @remarks
   * The ID of the network interface controller (NIC).
   * 
   * This parameter is required.
   * 
   * @example
   * eni-bp1iqejowblx6h8j****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the network interface controller (NIC). You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      clientToken: 'ClientToken',
      ipv6Address: 'Ipv6Address',
      ipv6AddressCount: 'Ipv6AddressCount',
      ipv6Prefix: 'Ipv6Prefix',
      ipv6PrefixCount: 'Ipv6PrefixCount',
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
      clientToken: 'string',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      ipv6Prefix: { 'type': 'array', 'itemType': 'string' },
      ipv6PrefixCount: 'number',
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

