// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsResponseBodyDedicatedHosts } from "./DescribeDedicatedHostsResponseBodyDedicatedHosts";


export class DescribeDedicatedHostsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the dedicated hosts.
   */
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHosts;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists. If the return value of this parameter is empty when you specify MaxResults and NextToken for a paged query, no more results are to be returned.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7654525A-9964-4ABB-8BCD-98F8835E809A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of dedicated hosts.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedHosts: 'DedicatedHosts',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHosts: DescribeDedicatedHostsResponseBodyDedicatedHosts,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.dedicatedHosts && typeof (this.dedicatedHosts as any).validate === 'function') {
      (this.dedicatedHosts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

