// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTablePropagationsResponseBodyTransitRouterPropagations extends $dara.Model {
  /**
   * @remarks
   * The network instance ID.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  resourceId?: string;
  /**
   * @remarks
   * The network instance type. Valid values:
   * 
   * - **VPC**: virtual private cloud (VPC) instance.
   * - **VBR**: virtual border router (VBR) instance.
   * - **TR**: transit router instance.
   * - **VPN**: VPN connection.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the route learning relationship. Valid values:
   * 
   * - **Enabling**: being enabled.
   * - **Disabling**: being disabled.
   * - **Active**: active.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The network instance connection ID.
   * 
   * @example
   * tr-attach-vx6iwhjr1x1j78****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router route table.
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
   * The number of entries per page for a paged query.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query in a paged query.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04C81E0D-945E-4D61-A561-3DEA322F243B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of route learning relationships.
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

