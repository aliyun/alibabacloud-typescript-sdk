// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpamPoolAllocationsResponseBodyIpamPoolAllocations } from "./ListIpamPoolAllocationsResponseBodyIpamPoolAllocations";


export class ListIpamPoolAllocationsResponseBody extends $dara.Model {
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
   * The IDs of the instances to which CIDR blocks are allocated from the IPAM pool.
   */
  ipamPoolAllocations?: ListIpamPoolAllocationsResponseBodyIpamPoolAllocations[];
  /**
   * @remarks
   * The number of entries per page.
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
   * 3748DEFF-68BE-5EED-9937-7C1D0C21BAB4
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

