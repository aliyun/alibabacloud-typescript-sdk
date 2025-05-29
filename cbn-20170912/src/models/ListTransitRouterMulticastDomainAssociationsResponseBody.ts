// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterMulticastDomainAssociationsResponseBodyTransitRouterMulticastAssociations } from "./ListTransitRouterMulticastDomainAssociationsResponseBodyTransitRouterMulticastAssociations";


export class ListTransitRouterMulticastDomainAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If **NextToken** is empty, it indicates that no subsequent query is to be sent.
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
   * 1CD0969B-A605-5D2D-BFF0-699FD182FB7F
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
   * The information about the resource associated with the multicast domain.
   */
  transitRouterMulticastAssociations?: ListTransitRouterMulticastDomainAssociationsResponseBodyTransitRouterMulticastAssociations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterMulticastAssociations: 'TransitRouterMulticastAssociations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterMulticastAssociations: { 'type': 'array', 'itemType': ListTransitRouterMulticastDomainAssociationsResponseBodyTransitRouterMulticastAssociations },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterMulticastAssociations)) {
      $dara.Model.validateArray(this.transitRouterMulticastAssociations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

