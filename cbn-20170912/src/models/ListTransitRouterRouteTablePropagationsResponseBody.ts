// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTablePropagationsResponseBodyTransitRouterPropagations extends $dara.Model {
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **VBR**: VBR
   * *   **TR**: transit router
   * *   **VPN**: VPN connection
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the route learning correlation. Valid values:
   * 
   * *   **Enabling**: being enabled
   * *   **Disabling**: being disabled
   * *   **Active**: available
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-vx6iwhjr1x1j78****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the route table of the Enterprise Edition transit router.
   * 
   * @example
   * vtb-bp1dudbh2d5na6b50****
   */
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

