// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTableAssociationsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * - You do not need to specify this parameter for the first query.
   * 
   * - For a subsequent query, set this parameter to the **NextToken** value returned from the previous query.
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
   * The status of the association.
   * 
   * - **Active**: The association is active.
   * 
   * - **Associating**: The association is being created.
   * 
   * - **Dissociating**: The association is being deleted.
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
  transitRouterAttachmentResourceType?: string;
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

