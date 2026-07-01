// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamPoolAllocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The allocated CIDR block that you want to query.
   * 
   * > Only IPv4 CIDR blocks are supported.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * A list of instance IDs of the IPAM pool CIDR block allocations.
   */
  ipamPoolAllocationIds?: string[];
  /**
   * @remarks
   * The name of the IPAM pool CIDR block allocation.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test name
   */
  ipamPoolAllocationName?: string;
  /**
   * @remarks
   * The instance ID of the IPAM pool.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
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
   * The region of the IPAM pool that contains the CIDR block allocation.
   * 
   * > If the IPAM pool has a specific region, this parameter specifies that region. If the IPAM pool does not have a specific region, this parameter specifies the managed region of IPAM.
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

