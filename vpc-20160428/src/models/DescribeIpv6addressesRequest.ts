// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6AddressesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. If you specify this parameter, you cannot enter an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, you can enter an empty string.
   * 
   * A tag value can be up to 128 characters in length. It must start with a letter or a Chinese character, and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * The type of the IPv6 address. Valid values:
   * 
   * * IPv6Address (default): queries an IPv6 instance that has a single IPv6 address.
   * * IPv6Prefix: queries an IPv6 instance that has an IPv6 prefix.
   * 
   * @example
   * IPv6Address
   */
  addressType?: string;
  /**
   * @remarks
   * The instance ID associated with the IPv6 address to query.
   * 
   * @example
   * eni-2ze72wuqj4y3jl4f****
   */
  associatedInstanceId?: string;
  /**
   * @remarks
   * The type of the instance associated with the IPv6 address to query. Valid values:
   * 
   * - **EcsInstance**: an ECS instance in a VPC.
   * - **NetworkInterface**: elastic network interface controller (NIC).
   * 
   * This parameter must be used together with AssociatedInstanceId.
   * 
   * @example
   * NetworkInterface
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * Specifies whether to include inactive order data. Valid values:
   * 
   * - **false** (default): does not include inactive order data.
   * 
   * - **true**: includes inactive order data.
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The IPv6 address to query.
   * 
   * @example
   * 2408:XXXX:153:3921:851c:c435:7b12:1c5f
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The ID of the IPv6 address to query. You can enter up to 20 IPv6 address IDs in each call. Separate multiple IDs with commas (,).
   * 
   * @example
   * ipv6-2zen5j4axcp5l5qyy****
   */
  ipv6AddressId?: string;
  /**
   * @remarks
   * The Internet bandwidth instance ID corresponding to the IPv6 address to query after Internet bandwidth is enabled.
   * 
   * @example
   * ipv6bw-uf6hcyzu65v98v3du****
   */
  ipv6InternetBandwidthId?: string;
  /**
   * @remarks
   * The name of the IPv6 address to query.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The network type of the IPv6 address to query. Valid values:
   * 
   * - **Private**: internal network.
   * 
   * - **Public**: Internet.
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
   * The number of entries per page in a paging query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the IPv6 addresses to query. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
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
   * Specifies whether the instance is a managed instance. Valid values:
   * - **true**: The instance is a managed instance.
   * - **false**: The instance is not a managed instance.
   * 
   * If you do not specify this parameter, all instances are queried by default.
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The list of tags. Maximum number of elements: 20.
   */
  tag?: DescribeIpv6AddressesRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the IPv6 address to query belongs.
   * 
   * @example
   * vsw-25navfgbue4g****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the IPv6 address to query belongs.
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

