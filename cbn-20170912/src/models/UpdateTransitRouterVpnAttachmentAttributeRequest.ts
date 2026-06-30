// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterVpnAttachmentAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the Enterprise Edition transit router to automatically publish routes to the IPsec-VPN connection. Valid values:
   * 
   * - **true**: The Enterprise Edition transit router automatically publishes routes to the IPsec-VPN connection.
   * 
   * - **false**: The Enterprise Edition transit router does not automatically publish routes to the IPsec-VPN connection.
   * 
   * @example
   * true
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run to check the request without modifying the attributes of the VPN connection. The system checks the required parameters, request format, and service limits. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * - **false** (Default): Sends a normal request. If the request passes the check, the system modifies the attributes of the VPN connection.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
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
   * The description can be empty or 1 to 256 characters in length, and cannot start with http\\:// or https\\://.
   * 
   * @example
   * desctest
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The ID of the VPN connection.
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
   * The name can be empty or 1 to 128 characters in length, and cannot start with http\\:// or https\\://.
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

