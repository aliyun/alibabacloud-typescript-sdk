// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamPoolCidrsResponseBodyIpamPoolCidrs extends $dara.Model {
  /**
   * @remarks
   * The provisioned CIDR block.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
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
   * The instance status of the provisioned CIDR block of the IPAM pool. Valid values:
   * 
   * - **Created**: The CIDR block is created.
   * 
   * - **Deleted**: The CIDR block is deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipamPoolId: 'IpamPoolId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipamPoolId: 'string',
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

export class ListIpamPoolCidrsResponseBody extends $dara.Model {
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
   * A list of provisioned CIDR blocks of the IPAM pool.
   */
  ipamPoolCidrs?: ListIpamPoolCidrsResponseBodyIpamPoolCidrs[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * - If this parameter is empty, no more results are to be returned.
   * 
   * - If a value is returned, the value is the token that is used for the next query.
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
   * 9E7CCB95-62E0-534D-9B9A-71F27E8B71B1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamPoolCidrs: 'IpamPoolCidrs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamPoolCidrs: { 'type': 'array', 'itemType': ListIpamPoolCidrsResponseBodyIpamPoolCidrs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamPoolCidrs)) {
      $dara.Model.validateArray(this.ipamPoolCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

