// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransitRouterVbrAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Use the client to generate the token, but you must make sure that the token is unique among requests. The token can contain only ASCII characters.
   * 
   * > When left empty, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** is different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run to check permissions and instance status. Valid values:
   * 
   * - **false** (default): sends a request and deletes the VBR connection.
   * 
   * - **true**: sends a check request without deleting the VBR connection. The system checks the required parameters and request syntax. If the request fails the dry run, an error code is returned. If the request passes the dry run, a request ID is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly delete the VBR connection. Valid values:
   * 
   * - **false** (default): The system checks resources, such as forwarding associations or route learning. If there are such resources, the VBR connection is not deleted and an error code is returned.
   * 
   * - **true**: When the VBR connection is deleted, all associated resources are also deleted.
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
   * The ID of the VBR connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-9nlnjv7by7n7a****
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

