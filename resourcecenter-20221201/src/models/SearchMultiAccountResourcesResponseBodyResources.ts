// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMultiAccountResourcesResponseBodyResourcesIpAddressAttributes } from "./SearchMultiAccountResourcesResponseBodyResourcesIpAddressAttributes";
import { SearchMultiAccountResourcesResponseBodyResourcesTags } from "./SearchMultiAccountResourcesResponseBodyResourcesTags";


export class SearchMultiAccountResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account or member of the resource directory.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * >  Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the resource expires.
   * 
   * @example
   * 2023-06-14T14:35:45Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The attributes of the IP address.
   */
  ipAddressAttributes?: SearchMultiAccountResourcesResponseBodyResourcesIpAddressAttributes[];
  /**
   * @remarks
   * The IP addresses.
   * 
   * >  Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   */
  ipAddresses?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vtb-bp11lbh452fr8940s****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * group1
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::VPC::RouteTable
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: SearchMultiAccountResourcesResponseBodyResourcesTags[];
  /**
   * @remarks
   * The zone ID.
   * 
   * >  Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      ipAddressAttributes: 'IpAddressAttributes',
      ipAddresses: 'IpAddresses',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      expireTime: 'string',
      ipAddressAttributes: { 'type': 'array', 'itemType': SearchMultiAccountResourcesResponseBodyResourcesIpAddressAttributes },
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': SearchMultiAccountResourcesResponseBodyResourcesTags },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddressAttributes)) {
      $dara.Model.validateArray(this.ipAddressAttributes);
    }
    if(Array.isArray(this.ipAddresses)) {
      $dara.Model.validateArray(this.ipAddresses);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

