// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterCidrAllocationResponseBodyTransitRouterCidrAllocations extends $dara.Model {
  /**
   * @remarks
   * The allocated CIDR block.
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
   * The CIDR block of the transit router.
   * 
   * @example
   * 192.168.10.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The ID of the CIDR block of the transit router.
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
   * The number of entries returned on each page.
   * 
   * - If you did not set the **MaxResults** parameter in the request, this parameter indicates the total number of entries.
   * 
   * - If you set the **MaxResults** parameter in the request, this parameter indicates the number of entries on the current page.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * - If **NextToken** is empty, no next page exists.
   * 
   * - If **NextToken** is not empty, the value of this parameter indicates the token that is used for the next query.
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
   * A list of CIDR block allocations.
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

