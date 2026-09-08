// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterPeerAttachmentAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the Enterprise Edition transit router to automatically advertise routes of the inter-region connection to the peer region.
   * 
   * - **false** (default): no.
   * - **true**: yes.
   * 
   * @example
   * false
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The bandwidth value of the inter-region connection. Unit: Mbit/s.
   * 
   * - If **BandwidthType** is set to **BandwidthPackage**, this parameter specifies the bandwidth that the inter-region connection can use.
   * - If **BandwidthType** is set to **DataTransfer**, this parameter specifies the bandwidth limit of the inter-region connection.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The bandwidth allocation method. Valid values:
   * 
   * - **BandwidthPackage**: allocates bandwidth from a bandwidth package.
   * - **DataTransfer**: does not allocate bandwidth to the inter-region connection. Billing is based on the traffic volume.
   * 
   * @example
   * BandwidthPackage
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The ID of the bandwidth package to be associated with the inter-region connection.
   * 
   * <props="china">If you do not specify a bandwidth package ID, the test bandwidth is used. The default test bandwidth is 1 Kbit/s and is intended only for testing (IPv4) network connectivity.
   * >If **BandwidthType** is set to **DataTransfer**, you do not need to configure this parameter.
   * 
   * @example
   * cenbwp-3xrxupouolw5ou****
   */
  cenBandwidthPackageId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The default link type.
   * 
   * Valid values: Platinum and Gold. Default value: Gold.
   * 
   * The value can be set to Platinum only when the bandwidth allocation method is pay-by-data-transfer.
   * 
   * @example
   * Gold
   */
  defaultLinkType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, including permission and instance status verification. Valid values:
   * 
   * - **false** (default): sends a normal request and directly modifies the configuration of the inter-region connection after the request passes the check.
   * - **true**: sends a check request. Only the check is performed and the configuration of the inter-region connection is not modified. The check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check succeeds, the corresponding request ID is returned.
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
   * The new description of the inter-region connection.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testdesc
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The ID of the inter-region connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-ft94dcrbc3e5taun3x
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The new name of the inter-region connection.
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
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      clientToken: 'ClientToken',
      defaultLinkType: 'DefaultLinkType',
      dryRun: 'DryRun',
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
      bandwidth: 'number',
      bandwidthType: 'string',
      cenBandwidthPackageId: 'string',
      clientToken: 'string',
      defaultLinkType: 'string',
      dryRun: 'boolean',
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

