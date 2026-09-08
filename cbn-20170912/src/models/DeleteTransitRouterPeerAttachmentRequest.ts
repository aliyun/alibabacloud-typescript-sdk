// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransitRouterPeerAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this deletion request, including permission and instance status checks. Valid values:
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, the inter-region connection is deleted.
   * - **true**: Sends a check request. Only the check is performed without actually deleting the inter-region connection. The check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check passes, the corresponding request ID is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to force delete the inter-region connection. Valid values:
   * - **false** (default): Before deleting the inter-region connection, the system checks whether related resource dependencies exist, such as associated forwarding and route learning. If related dependencies exist, the deletion is not allowed and the corresponding error is returned.
   * - **true**: When deleting the inter-region connection, all related dependencies are deleted by default.
   * 
   * @example
   * false
   */
  force?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the inter-region connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-gyjhtx9sjsxhm6****
   */
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      force: 'Force',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      force: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

