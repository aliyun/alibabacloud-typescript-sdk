// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntries } from "./ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntries";


export class ListTransitRouterRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * @example
   * fce19****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3835E5E-1504-4344-B1BB-98A4110F1079
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of route entries.
   */
  transitRouterRouteEntries?: ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntries[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterRouteEntries: 'TransitRouterRouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterRouteEntries: { 'type': 'array', 'itemType': ListTransitRouterRouteEntriesResponseBodyTransitRouterRouteEntries },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterRouteEntries)) {
      $dara.Model.validateArray(this.transitRouterRouteEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

