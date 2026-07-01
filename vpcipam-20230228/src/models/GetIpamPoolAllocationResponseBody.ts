// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpamPoolAllocationResponseBody extends $dara.Model {
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
   * The time when the allocation was created.
   * 
   * @example
   * 2024-10-15T10:24:19+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the IPAM pool allocation.
   * 
   * The description must be 1 to 256 characters long. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. If you do not specify this parameter, the description is empty.
   * 
   * @example
   * ipam pool allocation description
   */
  ipamPoolAllocationDescription?: string;
  /**
   * @remarks
   * The ID of the IPAM pool allocation.
   * 
   * @example
   * ipam-pool-alloc-112za33e4****
   */
  ipamPoolAllocationId?: string;
  /**
   * @remarks
   * The name of the IPAM pool allocation.
   * 
   * The name must be 1 to 128 characters long and cannot start with `http://` or `https://`.
   * 
   * @example
   * ipam pool allocation name
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
   * The region of the IPAM pool to which the CIDR block allocation belongs.
   * 
   * > If the IPAM pool has a region attribute, this parameter specifies the region of the IPAM pool. If the IPAM pool does not have a region attribute, this parameter specifies the managed region of IPAM.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * 1616080591216318
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
   * - **IpamPool**: The resource is a sub-pool.
   * 
   * - **Custom**: The resource is a custom reserved CIDR block.
   * 
   * @example
   * VPC
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
   * The status of the allocation. Valid values:
   * 
   * - **Created**
   * 
   * - **Deleted**
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

