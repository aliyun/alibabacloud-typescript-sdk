// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterRouteTableAssociationsResponseBodyTransitRouterAssociations } from "./ListTransitRouterRouteTableAssociationsResponseBodyTransitRouterAssociations";


export class ListTransitRouterRouteTableAssociationsResponseBody extends $dara.Model {
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
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If **NextToken** was not returned, it indicates that no additional results exist.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * 
   * @example
   * a415****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6B1D9AB-176D-4399-801D-8BC576F4EB0D
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
   * A list of associated forwarding correlations.
   */
  transitRouterAssociations?: ListTransitRouterRouteTableAssociationsResponseBodyTransitRouterAssociations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterAssociations: 'TransitRouterAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterAssociations: { 'type': 'array', 'itemType': ListTransitRouterRouteTableAssociationsResponseBodyTransitRouterAssociations },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterAssociations)) {
      $dara.Model.validateArray(this.transitRouterAssociations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

