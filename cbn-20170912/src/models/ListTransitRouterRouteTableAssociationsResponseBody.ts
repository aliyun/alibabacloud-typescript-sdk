// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTableAssociationsResponseBodyTransitRouterAssociations extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop resource.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the next hop resource. Valid values:
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
   * The status of the route association. Valid values:
   * 
   * - **Active**: active.
   * - **Associating**: being associated.
   * - **Dissociating**: being dissociated.
   * - **Deleted**: deleted.
   * 
   * @example
   * Associating
   */
  status?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-nls9fzkfat8934****
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

export class ListTransitRouterRouteTableAssociationsResponseBody extends $dara.Model {
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
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If **NextToken** is empty, no subsequent query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * a415****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
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
   * The list of route association relationships.
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

