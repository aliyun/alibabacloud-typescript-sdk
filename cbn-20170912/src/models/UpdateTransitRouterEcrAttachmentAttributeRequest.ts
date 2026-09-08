// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterEcrAttachmentAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this modification request, including permission and instance status checks. Valid values:
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, the transit router instance information is directly modified.
   * - **true**: Sends a check request. Only the validation is performed, and the transit router instance information is not modified. The check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check passes, the corresponding request ID is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The payer of the network instance. The payer of the ECR connection cannot be modified.
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
   * The new description of the ECR connection.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The ID of the ECR connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-r6g0m3epjehw57****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The new name of the ECR connection.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  transitRouterAttachmentName?: string;
  static names(): { [key: string]: string } {
    return {
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

