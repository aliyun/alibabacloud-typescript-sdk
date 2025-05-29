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
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If this is your first query or no subsequent query is to be sent, ignore this parameter.
   * *   If a next query is to be sent, set the value to the value of **NextToken** that is returned from the last call.
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
   * The status of the associated forwarding correlation. Valid values:
   * 
   * *   **Active**: The associated forwarding correlation is available.
   * *   **Associating**: The associated forwarding correlation is being created.
   * *   **Dissociating**: The associated forwarding correlation is being deleted.
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
   * The ID of the next hop.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  transitRouterAttachmentResourceId?: string;
  /**
   * @remarks
   * The type of next hop. Valid values:
   * 
   * *   **VPC**: virtual private cloud (VPC)
   * *   **VBR**: virtual border router (VBR)
   * *   **TR**: transit router
   * *   **VPN**: VPN attachment
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

