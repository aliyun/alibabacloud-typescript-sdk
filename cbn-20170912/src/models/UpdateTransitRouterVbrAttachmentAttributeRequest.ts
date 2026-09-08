// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterVbrAttachmentAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the Enterprise Edition transit router to automatically forward routing entries to the VBR instance. Valid values:
   * 
   * - **true**: allowed.
   * - **false**: not allowed.
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
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, including permission and instance status verification. Valid values:
   * 
   * - **false** (default): sends a normal request. If the request passes the check, the name and description of the VBR connection are modified.
   * - **true**: sends a check request. Only the check is performed. If the check passes, the error code `DryRunOperation` is returned. If the check fails, the corresponding error is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The payer of the network instance. Valid values:
   * 
   * - **PayByCenOwner**: the connection fee and data transfer fee of the VBR instance are paid by the account to which the transit router instance belongs.
   * - **PayByResourceOwner**: the connection fee and data transfer fee of the VBR instance are paid by the account to which the VBR instance belongs.
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
   * The new description of the VBR connection.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testdesc
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The ID of the VBR connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-oyf70wfuorwx87****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The new name of the VBR connection.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testname
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

