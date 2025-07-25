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
   * The time when the resource was discovered.
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
   * The ID of resource discovery instance.
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
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  ipamResourceDiscoveryStatus?: string;
  /**
   * @remarks
   * The list of resource discovery regions.
   */
  operatingRegionList?: string[];
  /**
   * @remarks
   * The Alibaba Cloud account that owns the resource discovery.
   * 
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the queried resource discovery instance.
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
  /**
   * @remarks
   * The sharing status of the resource.
   * 
   * *   If the value is empty, the resource is as an average instance.
   * *   If the value is Shared, the resource discovery comes from a shared source.
   * *   If the value is Sharing, the resource discovery is being shared.
   * 
   * @example
   * Shared
   */
  shareType?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveriesTags[];
  /**
   * @remarks
   * The type of resource discovery.
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
   * The maximum number of entries on each page.
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
   * The total number of entries returned.
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

