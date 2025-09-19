// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamPoolsResponseBodyIpamPoolsTags extends $dara.Model {
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

export class ListIpamPoolsResponseBodyIpamPools extends $dara.Model {
  /**
   * @remarks
   * The default network mask assigned to the IPAM pool.
   * 
   * An IPv4 mask must be **0 to 32** bits in length.
   * 
   * @example
   * 28
   */
  allocationDefaultCidrMask?: number;
  /**
   * @remarks
   * The maximum network mask assigned to the IPAM pool.
   * 
   * An IPv4 mask must be **0 to 32** bits in length.
   * 
   * @example
   * 32
   */
  allocationMaxCidrMask?: number;
  /**
   * @remarks
   * The minimum network mask assigned to the IPAM pool.
   * 
   * An IPv4 mask must be **0 to 32** bits in length.
   * 
   * @example
   * 8
   */
  allocationMinCidrMask?: number;
  /**
   * @remarks
   * Whether the pool has the auto-import feature enabled.
   * 
   * @example
   * true
   */
  autoImport?: boolean;
  cidrs?: string[];
  /**
   * @remarks
   * The time when the IPAM pool was created.
   * 
   * @example
   * 2023-04-19T16:49:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the pool is a subpool. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasSubPool?: boolean;
  /**
   * @remarks
   * The IP version. Only **IPv4** may be returned.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the IPAM.
   * 
   * @example
   * ipam-b5mtlx3q7xcnyr****
   */
  ipamId?: string;
  /**
   * @remarks
   * The description of the IPAM pool.
   * 
   * @example
   * test description
   */
  ipamPoolDescription?: string;
  /**
   * @remarks
   * The ID of the IPAM pool.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The name of the IPAM pool.
   * 
   * @example
   * test
   */
  ipamPoolName?: string;
  /**
   * @remarks
   * The ID of the region where the IPAM to which the IPAM pool belongs is hosted.
   * 
   * @example
   * cn-hangzhou
   */
  ipamRegionId?: string;
  /**
   * @remarks
   * The ID of the IPAM scope.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @remarks
   * The type of the IPAM scope. Valid values:
   * 
   * *   **public**
   * *   **private**
   * 
   * @example
   * private
   */
  ipamScopeType?: string;
  ipv6Isp?: string;
  /**
   * @remarks
   * Whether it is a shared pool.
   * 
   * @example
   * true
   */
  isShared?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud account of the owner for the IPAM pool.
   * 
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @remarks
   * The depth of the IPAM pool. Valid values: **0 to 10**.
   * 
   * @example
   * 2
   */
  poolDepth?: number;
  /**
   * @remarks
   * The effective region of the IPAM pool. The ID of the effective region for the IPAM pool.
   * 
   * @example
   * cn-hangzhou
   */
  poolRegionId?: string;
  /**
   * @remarks
   * The ID of the region where the operation is called.
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
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the source IPAM pool.
   * 
   * @example
   * ipam-pool-lfnwi4jok1ss0g****
   */
  sourceIpamPoolId?: string;
  /**
   * @remarks
   * The status of the IPAM pool. Valid values:
   * 
   * *   **Creating**
   * *   **Created**: indicates that the creation is complete.
   * *   **Modifying**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListIpamPoolsResponseBodyIpamPoolsTags[];
  static names(): { [key: string]: string } {
    return {
      allocationDefaultCidrMask: 'AllocationDefaultCidrMask',
      allocationMaxCidrMask: 'AllocationMaxCidrMask',
      allocationMinCidrMask: 'AllocationMinCidrMask',
      autoImport: 'AutoImport',
      cidrs: 'Cidrs',
      createTime: 'CreateTime',
      hasSubPool: 'HasSubPool',
      ipVersion: 'IpVersion',
      ipamId: 'IpamId',
      ipamPoolDescription: 'IpamPoolDescription',
      ipamPoolId: 'IpamPoolId',
      ipamPoolName: 'IpamPoolName',
      ipamRegionId: 'IpamRegionId',
      ipamScopeId: 'IpamScopeId',
      ipamScopeType: 'IpamScopeType',
      ipv6Isp: 'Ipv6Isp',
      isShared: 'IsShared',
      ownerId: 'OwnerId',
      poolDepth: 'PoolDepth',
      poolRegionId: 'PoolRegionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceIpamPoolId: 'SourceIpamPoolId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationDefaultCidrMask: 'number',
      allocationMaxCidrMask: 'number',
      allocationMinCidrMask: 'number',
      autoImport: 'boolean',
      cidrs: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      hasSubPool: 'boolean',
      ipVersion: 'string',
      ipamId: 'string',
      ipamPoolDescription: 'string',
      ipamPoolId: 'string',
      ipamPoolName: 'string',
      ipamRegionId: 'string',
      ipamScopeId: 'string',
      ipamScopeType: 'string',
      ipv6Isp: 'string',
      isShared: 'boolean',
      ownerId: 'number',
      poolDepth: 'number',
      poolRegionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceIpamPoolId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListIpamPoolsResponseBodyIpamPoolsTags },
    };
  }

  validate() {
    if(Array.isArray(this.cidrs)) {
      $dara.Model.validateArray(this.cidrs);
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

export class ListIpamPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The IPAM pools.
   */
  ipamPools?: ListIpamPoolsResponseBodyIpamPools[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
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
   * B54867DE-83DC-56B4-A57E-69A03119D0B1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamPools: 'IpamPools',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamPools: { 'type': 'array', 'itemType': ListIpamPoolsResponseBodyIpamPools },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamPools)) {
      $dara.Model.validateArray(this.ipamPools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

