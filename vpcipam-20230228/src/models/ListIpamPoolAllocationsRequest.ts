// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamPoolAllocationsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query allocations by specifying allocated CIDR blocks.
   * 
   * **
   * 
   * **Usage notes** Only IPv4 CIDR blocks are supported.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The IDs of the instances to which CIDR blocks are allocated from the IPAM pool.
   */
  ipamPoolAllocationIds?: string[];
  /**
   * @remarks
   * The name of  allocations.
   * 
   * @example
   * test name
   */
  ipamPoolAllocationName?: string;
  /**
   * @remarks
   * The ID of the IPAM pool.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **10**.
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
   * The ID of the region where you want to perform the operation.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipamPoolAllocationIds: 'IpamPoolAllocationIds',
      ipamPoolAllocationName: 'IpamPoolAllocationName',
      ipamPoolId: 'IpamPoolId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipamPoolAllocationIds: { 'type': 'array', 'itemType': 'string' },
      ipamPoolAllocationName: 'string',
      ipamPoolId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipamPoolAllocationIds)) {
      $dara.Model.validateArray(this.ipamPoolAllocationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

