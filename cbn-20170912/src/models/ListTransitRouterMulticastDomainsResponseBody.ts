// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains } from "./ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains";


export class ListTransitRouterMulticastDomainsResponseBody extends $dara.Model {
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
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
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
   * 8A0F93D1-FD6C-56FC-B6D2-668FC92D12D2
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
   * The list of multicast domains.
   */
  transitRouterMulticastDomains?: ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterMulticastDomains: 'TransitRouterMulticastDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterMulticastDomains: { 'type': 'array', 'itemType': ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterMulticastDomains)) {
      $dara.Model.validateArray(this.transitRouterMulticastDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

