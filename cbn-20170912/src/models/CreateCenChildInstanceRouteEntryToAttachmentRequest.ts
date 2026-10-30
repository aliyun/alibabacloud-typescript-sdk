// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenChildInstanceRouteEntryToAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-bp1n6cbxcszp55vxo****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client. Make sure that the token is unique among different requests. The client token only supports ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request, including permission and instance status checks. Valid values:
   * 
   * - **false** (default): sends a normal request. If the request passes the check, a route entry is added for the network instance.
   * - **true**: sends a dry run request. Only the check is performed, and no route entry is added for the network instance. Check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check is passed, the error code `DryRunOperation` is returned.
   * 
   * > This parameter does not take effect.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route table of the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vrt-bp1msipdczo9lejup****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-r1qhupkc19iadz****
   */
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

