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
   * The default subnet mask for the IPAM pool.
   * 
   * @example
   * 28
   */
  allocationDefaultCidrMask?: number;
  /**
   * @remarks
   * The maximum subnet mask for the IPAM pool.
   * 
   * @example
   * 32
   */
  allocationMaxCidrMask?: number;
  /**
   * @remarks
   * The minimum subnet mask for the IPAM pool.
   * 
   * @example
   * 8
   */
  allocationMinCidrMask?: number;
  /**
   * @remarks
   * Indicates whether auto import is enabled for the address pool.
   * 
   * @example
   * true
   */
  autoImport?: boolean;
  /**
   * @remarks
   * The CIDR blocks that are provisioned for the address pool.
   */
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
   * Indicates whether the IPAM pool has sub-pools. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  hasSubPool?: boolean;
  /**
   * @remarks
   * The IP version.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the IPAM instance.
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
   * The managed region of the IPAM instance to which the IPAM pool belongs.
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
   * - **public**: the public network.
   * 
   * - **private**: the private network.
   * 
   * @example
   * private
   */
  ipamScopeType?: string;
  /**
   * @remarks
   * The line type of the IPv6 CIDR block.
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  /**
   * @remarks
   * Indicates whether the address pool is a shared pool.
   * 
   * @example
   * true
   */
  isShared?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the owner of the IPAM pool.
   * 
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @remarks
   * The depth of the IPAM pool. Valid values: 0 to **10**.
   * 
   * @example
   * 2
   */
  poolDepth?: number;
  /**
   * @remarks
   * The ID of the region where the IPAM pool is available.
   * 
   * @example
   * cn-hangzhou
   */
  poolRegionId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPAM pool belongs.
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
   * - **Creating**
   * 
   * - **Created**
   * 
   * - **Modifying**
   * 
   * - **Deleting**
   * 
   * - **Deleted**
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The tags.
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * A list of IPAM pools.
   */
  ipamPools?: ListIpamPoolsResponseBodyIpamPools[];
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
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * - If **NextToken** is empty, no next page exists.
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

