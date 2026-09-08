// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterVpnAttachmentAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the forward routing instance to automatically publish route entries to the IPsec connection. Valid values:
   * 
   * - **true**: Allowed.
   * - **false**: Not allowed.
   * 
   * @example
   * true
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without modifying the VPN connection configurations. The system checks the required parameters, request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and then modifies the VPN connection configurations after the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The payer of the network instance. Valid values:
   * 
   * - **PayByCenOwner**: The connection fee and data transfer fee of the VPN connection are paid by the account that owns the transit router instance.
   * - **PayByResourceOwner**: The connection fee and data transfer fee of the VPN connection are paid by the account that owns the VPN gateway instance.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The new description of the VPN connection.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The VPN connection ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-a6p8voaodog5c0****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The new name of the VPN connection.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  transitRouterAttachmentName?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

