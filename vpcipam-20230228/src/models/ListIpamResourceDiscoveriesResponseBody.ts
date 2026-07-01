// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries extends $dara.Model {
  /**
   * @remarks
   * The time when the resource discovery was created.
   * 
   * @example
   * 2022-07-01T02:05:23Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the resource discovery.
   * 
   * @example
   * test description
   */
  ipamResourceDiscoveryDescription?: string;
  /**
   * @remarks
   * The ID of the resource discovery instance.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
  /**
   * @remarks
   * The name of the resource discovery.
   * 
   * @example
   * test
   */
  ipamResourceDiscoveryName?: string;
  /**
   * @remarks
   * The status of the resource discovery instance. Valid values:
   * 
   * - **Creating**: The instance is being created.
   * 
   * - **Created**: The instance is created.
   * 
   * - **Modifying**: The instance is being modified.
   * 
   * - **Deleting**: The instance is being deleted.
   * 
   * - **Deleted**: The instance is deleted.
   * 
   * @example
   * Created
   */
  ipamResourceDiscoveryStatus?: string;
  /**
   * @remarks
   * The list of operating regions of the resource discovery.
   */
  operatingRegionList?: string[];
  /**
   * @remarks
   * The Alibaba Cloud account of the owner of the resource discovery instance.
   * 
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the resource discovery instance is located.
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
  /**
   * @remarks
   * The sharing status of the resource.
   * 
   * - If this parameter is empty, the resource discovery is a regular instance.
   * 
   * - If this parameter is set to Shared, the resource discovery is a shared resource.
   * 
   * - If this parameter is set to Sharing, the resource discovery is being shared.
   * 
   * @example
   * Shared
   */
  shareType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags[];
  /**
   * @remarks
   * The type of the resource discovery.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ipamResourceDiscoveryDescription: 'IpamResourceDiscoveryDescription',
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      ipamResourceDiscoveryName: 'IpamResourceDiscoveryName',
      ipamResourceDiscoveryStatus: 'IpamResourceDiscoveryStatus',
      operatingRegionList: 'OperatingRegionList',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ipamResourceDiscoveryDescription: 'string',
      ipamResourceDiscoveryId: 'string',
      ipamResourceDiscoveryName: 'string',
      ipamResourceDiscoveryStatus: 'string',
      operatingRegionList: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'array', 'itemType': ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operatingRegionList)) {
      $dara.Model.validateArray(this.operatingRegionList);
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

export class ListIpamResourceDiscoveriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of resource discovery instances.
   */
  ipamResourceDiscoveries?: ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries[];
  /**
   * @remarks
   * The maximum number of entries returned on each page. Valid values: 1 to 100. Default value: 10.
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86137597-443F-5B66-B9B6-8514E0C50B8F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamResourceDiscoveries: 'IpamResourceDiscoveries',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamResourceDiscoveries: { 'type': 'array', 'itemType': ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamResourceDiscoveries)) {
      $dara.Model.validateArray(this.ipamResourceDiscoveries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

