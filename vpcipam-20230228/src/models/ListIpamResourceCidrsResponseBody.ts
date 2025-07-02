// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpamResourceCidrsResponseBodyIpamResourceCidrs } from "./ListIpamResourceCidrsResponseBodyIpamResourceCidrs";


export class ListIpamResourceCidrsResponseBody extends $dara.Model {
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
   * The list of resources in the IPAM pool.
   */
  ipamResourceCidrs?: ListIpamResourceCidrsResponseBodyIpamResourceCidrs[];
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
   * 49A9DE56-B68C-5FFC-BC06-509D086F287C
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
      ipamResourceCidrs: 'IpamResourceCidrs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamResourceCidrs: { 'type': 'array', 'itemType': ListIpamResourceCidrsResponseBodyIpamResourceCidrs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamResourceCidrs)) {
      $dara.Model.validateArray(this.ipamResourceCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

