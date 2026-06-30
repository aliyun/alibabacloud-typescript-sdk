// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterVpcAttachmentAttributeRequestOptions extends $dara.Model {
  /**
   * @example
   * enable
   */
  applianceModeSupport?: string;
  /**
   * @example
   * enable
   */
  ipv6Support?: string;
  static names(): { [key: string]: string } {
    return {
      applianceModeSupport: 'ApplianceModeSupport',
      ipv6Support: 'Ipv6Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applianceModeSupport: 'string',
      ipv6Support: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTransitRouterVpcAttachmentAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the Enterprise Edition transit router to automatically advertise routes to the VPC.
   * 
   * - **false**: The transit router does not automatically advertise routes.
   * 
   * - **true**: The transit router automatically advertises routes.
   * 
   * @example
   * true
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the token from your client, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, which checks for issues such as permissions and instance status. Valid values:
   * 
   * - **false** (default): sends a normal request. After the request passes the check, the system modifies the name and description of the VPC connection.
   * 
   * - **true**: sends a check request. The system validates the request without modifying the VPC connection. If the check passes, the system returns the ID of the request. Otherwise, the system returns an error.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The billing method.
   */
  options?: UpdateTransitRouterVpcAttachmentAttributeRequestOptions;
  /**
   * @remarks
   * The billing method.
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
   * The new description of the VPC connection.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http\\:// or https\\://.
   * 
   * @example
   * testdesc
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The ID of the VPC connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-nls9fzkfat8934****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The new name of the VPC connection.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http\\:// or https\\://.
   * 
   * @example
   * testname
   */
  transitRouterAttachmentName?: string;
  /**
   * @remarks
   * The feature properties of the VPC connection. This parameter is deprecated. We recommend that you use the `Options` parameter.
   */
  transitRouterVPCAttachmentOptions?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      options: 'Options',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterVPCAttachmentOptions: 'TransitRouterVPCAttachmentOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      options: UpdateTransitRouterVpcAttachmentAttributeRequestOptions,
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterVPCAttachmentOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    if(this.transitRouterVPCAttachmentOptions) {
      $dara.Model.validateMap(this.transitRouterVPCAttachmentOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

