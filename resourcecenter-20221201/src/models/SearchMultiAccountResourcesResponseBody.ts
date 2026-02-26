// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMultiAccountResourcesResponseBodyFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The matching method.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesResponseBodyResourcesIpAddressAttributes extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.1.2
   */
  ipAddress?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - **Public**: Internet.
   * 
   * - **Private**: Private network.
   * 
   * @example
   * Public
   */
  networkType?: string;
  /**
   * @remarks
   * The IP address version.
   * 
   * @example
   * Ipv4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      networkType: 'NetworkType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      networkType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMultiAccountResourcesResponseBodyResourcesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test_value
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

export class SearchMultiAccountResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account or a member account of the resource directory.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * > Whether this parameter is returned depends on the Alibaba Cloud service that manages the resource.
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
   * The attributes of the IP addresses.
   */
  ipAddressAttributes?: SearchMultiAccountResourcesResponseBodyResourcesIpAddressAttributes[];
  /**
   * @remarks
   * The IP addresses.
   * 
   * > Whether this parameter is returned depends on the Alibaba Cloud service that manages the resource.
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
   * > Whether this parameter is returned depends on the Alibaba Cloud service that manages the resource.
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

export class SearchMultiAccountResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: SearchMultiAccountResourcesResponseBodyFilters[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * 查询返回结果下一页的令牌。
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFA806B9-7F36-55AB-8B7A-D680C2C5EE57
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resources.
   */
  resources?: SearchMultiAccountResourcesResponseBodyResources[];
  /**
   * @remarks
   * The scope of accounts in which the resources were searched. Valid values:
   * 
   * - The ID of the resource directory. This indicates that resources were searched in the management account and all member accounts of the resource directory.
   * 
   * - The ID of the Root folder. This indicates that resources were searched in all member accounts under the Root folder and its subfolders.
   * 
   * - The ID of a folder. This indicates that resources were searched in all member accounts under the folder.
   * 
   * - The ID of a member account. This indicates that resources were searched in the member account.
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': SearchMultiAccountResourcesResponseBodyFilters },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': SearchMultiAccountResourcesResponseBodyResources },
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

