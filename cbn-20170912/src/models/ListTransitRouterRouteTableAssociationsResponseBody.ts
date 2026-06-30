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
   * The type of the next hop resource.
   * 
   * - **VPC**: virtual private cloud (VPC).
   * 
   * - **VBR**: virtual border router (VBR).
   * 
   * - **TR**: transit router.
   * 
   * - **VPN**: VPN connection.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the association.
   * 
   * - **Active**: The association is active.
   * 
   * - **Associating**: The association is being created.
   * 
   * - **Dissociating**: The association is being deleted.
   * 
   * - **Deleted**: The association is deleted.
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
   * The token for the next query.
   * 
   * - If this parameter is not returned, it indicates that no more results are to be returned.
   * 
   * - If a value is returned for this parameter, the value is the token that is used for the next query.
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
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of forwarding associations.
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

