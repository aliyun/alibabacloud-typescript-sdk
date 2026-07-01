// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamPoolAllocationsResponseBodyIpamPoolAllocations extends $dara.Model {
  /**
   * @remarks
   * The allocated CIDR block.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2023-05-19T08:59:18Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the IPAM pool CIDR block allocation.
   * 
   * @example
   * test description
   */
  ipamPoolAllocationDescription?: string;
  /**
   * @remarks
   * The instance ID of the IPAM pool CIDR block allocation.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @remarks
   * The name of the IPAM pool CIDR block allocation.
   * 
   * @example
   * test name
   */
  ipamPoolAllocationName?: string;
  /**
   * @remarks
   * The instance ID of the IPAM pool.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The region of the IPAM pool that contains the CIDR block allocation.
   * 
   * > If the IPAM pool has a specific region, this parameter specifies that region. If the IPAM pool does not have a specific region, this parameter specifies the managed region of IPAM.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource to which the CIDR block is allocated.
   * 
   * @example
   * vpc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 132193271328****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where the resource is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The type of the resource to which the CIDR block is allocated. Valid values:
   * 
   * - **VPC**: The resource is a VPC.
   * 
   * - **IpamPool**: The resource is a child IPAM pool.
   * 
   * - **Custom**: The resource is a custom reserved CIDR block.
   * 
   * @example
   * Custom
   */
  resourceType?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 192.168.0.0/16
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - **Created**: The instance is created.
   * 
   * - **Deleted**: The instance is deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      creationTime: 'CreationTime',
      ipamPoolAllocationDescription: 'IpamPoolAllocationDescription',
      ipamPoolAllocationId: 'IpamPoolAllocationId',
      ipamPoolAllocationName: 'IpamPoolAllocationName',
      ipamPoolId: 'IpamPoolId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
      sourceCidr: 'SourceCidr',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      creationTime: 'string',
      ipamPoolAllocationDescription: 'string',
      ipamPoolAllocationId: 'string',
      ipamPoolAllocationName: 'string',
      ipamPoolId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceRegionId: 'string',
      resourceType: 'string',
      sourceCidr: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamPoolAllocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned for the current query.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * A list of IPAM pool CIDR block allocations.
   */
  ipamPoolAllocations?: ListIpamPoolAllocationsResponseBodyIpamPoolAllocations[];
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
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * - If **NextToken** is empty, no next page exists.
   * 
   * - If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
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
   * 3748DEFF-68BE-5EED-9937-7C1D0C21BAB4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the query conditions.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamPoolAllocations: 'IpamPoolAllocations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamPoolAllocations: { 'type': 'array', 'itemType': ListIpamPoolAllocationsResponseBodyIpamPoolAllocations },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamPoolAllocations)) {
      $dara.Model.validateArray(this.ipamPoolAllocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

