// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamResourceDiscoveriesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The key cannot be an empty string.
   * 
   * A tag key can be up to 64 characters in length. It must start with a letter or a Chinese character and can contain digits, periods (.), underscores (_), and hyphens (-). The key cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The value can be an empty string.
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
   * The IDs of the resource discovery instances. You can query up to 100 instances at a time.
   */
  ipamResourceDiscoveryIds?: string[];
  /**
   * @remarks
   * The name of the resource discovery.
   * 
   * The name must be 1 to 128 characters in length and cannot start with http\\:// or https\\://.
   * 
   * @example
   * test
   */
  ipamResourceDiscoveryName?: string;
  /**
   * @remarks
   * Specifies whether the resource discovery is shared.
   * 
   * @example
   * true
   */
  isShared?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. Valid values:
   * 
   * - If **NextToken** is empty, no more results are available.
   * 
   * - If a value is returned for **NextToken**, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to get the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resource discovery belongs.
   * 
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListIpamResourceDiscoveriesRequestTags[];
  /**
   * @remarks
   * The type of the resource discovery.
   * 
   * > The following types are supported:
   * >
   * > - system: a default resource discovery created by the system.
   * >
   * > - custom: a custom resource discovery created by a user.
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

