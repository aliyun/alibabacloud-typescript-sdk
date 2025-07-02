// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources } from "./ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources";


export class ListIpamDiscoveredResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries on each page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of resources.
   */
  ipamDiscoveredResources?: ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources[];
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
      ipamDiscoveredResources: 'IpamDiscoveredResources',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamDiscoveredResources: { 'type': 'array', 'itemType': ListIpamDiscoveredResourceResponseBodyIpamDiscoveredResources },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamDiscoveredResources)) {
      $dara.Model.validateArray(this.ipamDiscoveredResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

