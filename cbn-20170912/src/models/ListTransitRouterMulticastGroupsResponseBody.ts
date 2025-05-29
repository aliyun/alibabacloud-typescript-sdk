// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups } from "./ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups";


export class ListTransitRouterMulticastGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If **NextToken** was not returned, it indicates that no additional results exist.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FB3C4A16-0933-5850-9D43-0C3EA37BCBFB
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
  /**
   * @remarks
   * A list of multicast groups.
   */
  transitRouterMulticastGroups?: ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterMulticastGroups: 'TransitRouterMulticastGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterMulticastGroups: { 'type': 'array', 'itemType': ListTransitRouterMulticastGroupsResponseBodyTransitRouterMulticastGroups },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterMulticastGroups)) {
      $dara.Model.validateArray(this.transitRouterMulticastGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

