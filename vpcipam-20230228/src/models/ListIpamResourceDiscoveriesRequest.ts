// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamResourceDiscoveriesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify at most 20 tag keys. It cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The tag key must start with a letter but cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify at most 20 tag values. The tag value cannot be an empty string.
   * 
   * A tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
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

export class ListIpamResourceDiscoveriesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of resource discovery instances. Valid values of N: 1 to 100. A maximum of 100 resource discoveries can be queried at a time.
   */
  ipamResourceDiscoveryIds?: string[];
  /**
   * @remarks
   * The name of the resource discovery.
   * 
   * The name must be 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  ipamResourceDiscoveryName?: string;
  /**
   * @remarks
   * Whether it is a shared resource discovery.
   * 
   * @example
   * true
   */
  isShared?: boolean;
  /**
   * @remarks
   * The maximum number of entries on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, there is no next page.
   * *   If a value of **NextToken** is returned, it indicates the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where you want to query resource discovery. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group that resource discovery belongs.
   * 
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag.
   */
  tags?: ListIpamResourceDiscoveriesRequestTags[];
  /**
   * @remarks
   * The type of resource discovery.
   * 
   * > Supported types:
   * > - system: default resource discovery created by the system.
   * > - custom: custom resource discovery created by users.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ipamResourceDiscoveryIds: 'IpamResourceDiscoveryIds',
      ipamResourceDiscoveryName: 'IpamResourceDiscoveryName',
      isShared: 'IsShared',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamResourceDiscoveryIds: { 'type': 'array', 'itemType': 'string' },
      ipamResourceDiscoveryName: 'string',
      isShared: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': ListIpamResourceDiscoveriesRequestTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipamResourceDiscoveryIds)) {
      $dara.Model.validateArray(this.ipamResourceDiscoveryIds);
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

