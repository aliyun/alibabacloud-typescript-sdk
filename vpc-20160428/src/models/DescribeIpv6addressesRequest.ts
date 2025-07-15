// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6AddressesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * The tag value can be up to 128 characters in length. It can be an empty string. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * Each tag key corresponds to one tag value. You can specify at most 20 tag values at a time.
   * 
   * @example
   * yunke
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6AddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of IP address. Valid values:
   * 
   * - IPv6Address (default): indicates an IPv6 instance used to query a single IPv6 address.
   * 
   * - IPv6Prefix: indicates an IPv6 instance used to query prefix CIDR blocks.
   * 
   * @example
   * IPv6Address
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the instance that is assigned the IPv6 address.
   * 
   * @example
   * i-2ze72wuqj4y3jl4f****
   */
  associatedInstanceId?: string;
  /**
   * @remarks
   * The type of instance associated with the IPv6 address. Valid values:
   * 
   * *   **EcsInstance**: Elastic Compute Service (ECS) instance in a virtual private cloud (VPC)
   * *   **NetworkInterface**: secondary elastic network interface (ENI)
   * 
   * @example
   * EcsInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * Specifies whether to return information about pending orders. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The IPv6 address that you want to query.
   * 
   * @example
   * 2408:XXXX:153:3921:851c:c435:7b12:1c5f
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The ID of the IPv6 address that you want to query. You can enter at most 20 IPv6 address IDs in each API request. Separate IPv6 address IDs with commas (,).
   * 
   * @example
   * ipv6-2zen5j4axcp5l5qyy****
   */
  ipv6AddressId?: string;
  /**
   * @remarks
   * The ID of the Internet bandwidth that you purchased for the IPv6 address.
   * 
   * @example
   * ipv6bw-uf6hcyzu65v98v3du****
   */
  ipv6InternetBandwidthId?: string;
  /**
   * @remarks
   * The name of the IPv6 address that you want to query.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of communication supported by the IPv6 address. Valid values:
   * 
   * *   **Private**
   * *   **Public**
   * 
   * @example
   * Private
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which you want to query IPv6 addresses. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPv6 gateway belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Indicates whether the instance is managed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * If you do not specify this parameter, all instances are queried.
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The tag list.
   */
  tag?: DescribeIpv6AddressesRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the IPv6 address belongs.
   * 
   * @example
   * vsw-25navfgbue4g****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the IPv6 address belongs.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      associatedInstanceId: 'AssociatedInstanceId',
      associatedInstanceType: 'AssociatedInstanceType',
      includeReservationData: 'IncludeReservationData',
      ipv6Address: 'Ipv6Address',
      ipv6AddressId: 'Ipv6AddressId',
      ipv6InternetBandwidthId: 'Ipv6InternetBandwidthId',
      name: 'Name',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serviceManaged: 'ServiceManaged',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      associatedInstanceId: 'string',
      associatedInstanceType: 'string',
      includeReservationData: 'boolean',
      ipv6Address: 'string',
      ipv6AddressId: 'string',
      ipv6InternetBandwidthId: 'string',
      name: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serviceManaged: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeIpv6AddressesRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

