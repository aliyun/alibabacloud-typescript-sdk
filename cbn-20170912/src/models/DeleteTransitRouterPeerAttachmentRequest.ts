// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransitRouterPeerAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request.
   * 
   * Generate a token from your client to ensure that the token is unique among different requests. The ClientToken parameter can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the request as the **ClientToken**. The **RequestId** of each request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. A dry run checks permissions and the status of the instance. Valid values:
   * 
   * - **false** (default): sends the request. If the request passes the check, the inter-region connection is deleted.
   * 
   * - **true**: sends a check request. The system checks the required parameters and the request format. If the request fails the check, an error is returned. If the request passes the check, the corresponding request ID is returned. The inter-region connection is not deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully delete the inter-region connection. Valid values:
   * 
   * - **false** (default): checks for resource dependencies, such as associated forwarding and route learning, before deleting the inter-region connection. If dependencies exist, the deletion is not allowed and an error is returned.
   * 
   * - **true**: deletes all related dependencies when deleting the inter-region connection.
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

