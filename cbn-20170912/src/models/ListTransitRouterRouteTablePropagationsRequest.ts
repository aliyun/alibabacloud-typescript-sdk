// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTablePropagationsRequest extends $dara.Model {
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
   * The token for the next query in a paged query.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the route learning relationship. Valid values:
   * - **Active**: active.
   * - **Enabling**: being enabled.
   * - **Disabling**: being disabled.
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
   * The network instance ID.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  transitRouterAttachmentResourceId?: string;
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
  transitRouterAttachmentResourceType?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router route table.
   * 
   * This parameter is required.
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

