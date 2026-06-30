// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenChildInstanceRouteEntryToAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
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
   * You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. The dry run checks permissions and the status of the instance. Valid values:
   * 
   * - **false** (default): sends a normal request and creates a route for the network instance after the request passes the check.
   * 
   * - **true**: sends a dry run request to check the request parameters. If the request passes the check, the system does not create a route for the network instance. The system checks the required parameters and the request format. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * > This parameter is not in use.
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

