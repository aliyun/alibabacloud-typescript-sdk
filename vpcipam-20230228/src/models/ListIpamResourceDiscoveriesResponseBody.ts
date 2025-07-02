// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries } from "./ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries";


export class ListIpamResourceDiscoveriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries on each page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of resource discovery instances.
   */
  ipamResourceDiscoveries?: ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries[];
  /**
   * @remarks
   * The maximum number of entries on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, there is no next page.
   * *   If a value of **NextToken** is returned, it indicates the token that is used for the next query.
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
   * 86137597-443F-5B66-B9B6-8514E0C50B8F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamResourceDiscoveries: 'IpamResourceDiscoveries',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamResourceDiscoveries: { 'type': 'array', 'itemType': ListIpamResourceDiscoveriesResponseBodyIpamResourceDiscoveries },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamResourceDiscoveries)) {
      $dara.Model.validateArray(this.ipamResourceDiscoveries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

