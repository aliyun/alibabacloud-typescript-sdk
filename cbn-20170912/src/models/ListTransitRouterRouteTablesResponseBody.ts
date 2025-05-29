// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables } from "./ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables";


export class ListTransitRouterRouteTablesResponseBody extends $dara.Model {
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
   * The token that determines the start point of the next query. Valid values:
   * 
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * *   If a value of **NextToken** is not returned, it indicates that no additional results exist.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 82678F4A-C9F7-4CC1-8BF0-D619A63BFC57
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
   * A list of route tables.
   */
  transitRouterRouteTables?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterRouteTables: 'TransitRouterRouteTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterRouteTables: { 'type': 'array', 'itemType': ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterRouteTables)) {
      $dara.Model.validateArray(this.transitRouterRouteTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

