// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTableAssociationsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - You do not need to specify this parameter for the first request or if no subsequent query exists.
   * - If a subsequent query exists, set the value to the **NextToken** value returned by the previous API call.
   * 
   * @example
   * a415****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the route association. Valid values:
   * - **Active**: active.
   * - **Associating**: being associated.
   * - **Dissociating**: being dissociated.
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
   * tr-attach-nls9fzkfat8934****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the next hop resource.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  transitRouterAttachmentResourceId?: string;
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
  transitRouterAttachmentResourceType?: string;
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentResourceId: 'TransitRouterAttachmentResourceId',
      transitRouterAttachmentResourceType: 'TransitRouterAttachmentResourceType',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentResourceId: 'string',
      transitRouterAttachmentResourceType: 'string',
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

