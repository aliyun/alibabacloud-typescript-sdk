// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterRouteTablePropagationsResponseBodyTransitRouterPropagations } from "./ListTransitRouterRouteTablePropagationsResponseBodyTransitRouterPropagations";


export class ListTransitRouterRouteTablePropagationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query.
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
   * 04C81E0D-945E-4D61-A561-3DEA322F243B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of route learning correlations.
   */
  transitRouterPropagations?: ListTransitRouterRouteTablePropagationsResponseBodyTransitRouterPropagations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterPropagations: 'TransitRouterPropagations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterPropagations: { 'type': 'array', 'itemType': ListTransitRouterRouteTablePropagationsResponseBodyTransitRouterPropagations },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterPropagations)) {
      $dara.Model.validateArray(this.transitRouterPropagations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

