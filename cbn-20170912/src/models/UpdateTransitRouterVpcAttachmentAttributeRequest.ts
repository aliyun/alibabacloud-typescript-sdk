// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterVpcAttachmentAttributeRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the appliance mode for traffic redirection.
   * 
   * - **disable** (default): no.
   * - **enable**: yes.
   * 
   * @example
   * enable
   */
  applianceModeSupport?: string;
  /**
   * @remarks
   * Specifies whether IPv6 is supported.
   * 
   * - **disable** (default): no.
   * - **enable**: yes.
   * 
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
   * Specifies whether to allow the Enterprise Edition forward router to automatically publish route entry to the VPC-connected instance.
   * 
   * - **false**: no.
   * - **true**: yes.
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
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, including permission and instance status verification. Valid values:
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, the name and description of the VPC connection are modified.
   * - **true**: Sends a check request. Only the verification is performed, and the name and description of the VPC connection are not modified. The system checks whether the required parameters are specified and whether the request format is valid. If the check fails, the corresponding error is returned. If the check passes, the corresponding request ID is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The collection of feature attributes.
   */
  options?: UpdateTransitRouterVpcAttachmentAttributeRequestOptions;
  /**
   * @remarks
   * The payer of the network instance.
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
   * The description of the VPC connection.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
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
   * The name of the VPC connection.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testname
   */
  transitRouterAttachmentName?: string;
  /**
   * @remarks
   * The list of feature attributes of the VPC connection (to be deprecated. Use the new parameter Options instead).
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

