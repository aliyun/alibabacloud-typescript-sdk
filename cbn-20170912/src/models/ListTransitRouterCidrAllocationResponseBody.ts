// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterCidrAllocationResponseBodyTransitRouterCidrAllocations extends $dara.Model {
  /**
   * @remarks
   * The allocated CIDR block under the transit router CIDR block.
   * 
   * @example
   * 192.168.10.0/28
   */
  allocatedCidrBlock?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-2nalp6yksc805w****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The name of the network instance connection.
   * 
   * @example
   * nametest
   */
  attachmentName?: string;
  /**
   * @remarks
   * The transit router CIDR block.
   * 
   * @example
   * 192.168.10.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The ID of the transit router CIDR block.
   * 
   * @example
   * cidr-0zv0q9crqpntzz****
   */
  transitRouterCidrId?: string;
  static names(): { [key: string]: string } {
    return {
      allocatedCidrBlock: 'AllocatedCidrBlock',
      attachmentId: 'AttachmentId',
      attachmentName: 'AttachmentName',
      cidr: 'Cidr',
      transitRouterCidrId: 'TransitRouterCidrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedCidrBlock: 'string',
      attachmentId: 'string',
      attachmentName: 'string',
      cidr: 'string',
      transitRouterCidrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterCidrAllocationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * - If you did not specify the **MaxResults** request parameter, it indicates that you did not need to query results by page. The value of **MaxResults** in the response indicates the total number of entries.
   * - If you specified the **MaxResults** request parameter, it indicates that you needed to query results by page. The value of **MaxResults** in the response indicates the number of entries on the current page.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If **NextToken** is empty, no subsequent request exists.
   * - If **NextToken** is returned, the value indicates the token that is used for the next query.
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
   * 0876E54E-3E36-5C31-89F0-9EE8A9266F9A
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
   * The allocation details of the transit router CIDR block.
   */
  transitRouterCidrAllocations?: ListTransitRouterCidrAllocationResponseBodyTransitRouterCidrAllocations[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterCidrAllocations: 'TransitRouterCidrAllocations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterCidrAllocations: { 'type': 'array', 'itemType': ListTransitRouterCidrAllocationResponseBodyTransitRouterCidrAllocations },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterCidrAllocations)) {
      $dara.Model.validateArray(this.transitRouterCidrAllocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

