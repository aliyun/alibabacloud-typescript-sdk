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
   * The description of the allocation.
   * 
   * @example
   * test description
   */
  ipamPoolAllocationDescription?: string;
  /**
   * @remarks
   * The ID of the instance to which CIDR blocks are allocated from the IPAM pool.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @remarks
   * The name of the allocation.
   * 
   * @example
   * test name
   */
  ipamPoolAllocationName?: string;
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
   * The region ID of the resource.
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
   * The effective region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The type of the resource to which the CIDR block is allocated. Valid values:
   * 
   * *   **VPC**
   * *   **IpamPool**
   * *   **Custom**
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
   * *   **Created**
   * *   **Deleted**
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

