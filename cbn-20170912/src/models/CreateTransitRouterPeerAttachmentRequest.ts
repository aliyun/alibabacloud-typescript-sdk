// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterPeerAttachmentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * Once specified, the tag key cannot be an empty string. The tag key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * tag_A1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * Once specified, the tag value cannot be empty. The tag value can be up to 128 characters in length, and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * value_A1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterPeerAttachmentRequest extends $dara.Model {
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
   * - If **BandwidthType** is set to **BandwidthPackage**, this parameter specifies the bandwidth that can be used by the inter-region connection.
   * 
   * - If **BandwidthType** is set to **DataTransfer**, this parameter specifies the bandwidth limit of the inter-region connection.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The bandwidth allocation method of the inter-region connection. Valid values:
   * 
   * - **BandwidthPackage**: allocates bandwidth from a bandwidth package.
   * 
   * - **DataTransfer**: does not allocate bandwidth to the inter-region connection. The system charges you based on the actual traffic.
   * 
   * @example
   * BandwidthPackage
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The ID of the bandwidth package to be associated with the inter-region connection.
   * 
   * > If **BandwidthType** is set to **DataTransfer**, you do not need to configure this parameter.
   * 
   * @example
   * cenbwp-3xrxupouolw5ou****
   */
  cenBandwidthPackageId?: string;
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
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
   * The default link type.
   * 
   * Valid values: Platinum and Gold. Default value: Gold.
   * 
   * The link type can be set to Platinum only when the bandwidth allocation method is pay-by-data-transfer.
   * 
   * @example
   * Gold
   */
  defaultLinkType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, including permission and instance status verification. Valid values:
   * 
   * - **false** (default): sends a normal request. If the request passes the verification, the inter-region connection is created.
   * - **true**: sends a check request. Only the verification is performed. No inter-region connection is created. The system checks whether the required parameters are specified, and validates the request format. If the check fails, the corresponding error is returned. If the check succeeds, the corresponding request ID is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the peer transit router instance.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-m5eq27g6bndum7e88****
   */
  peerTransitRouterId?: string;
  /**
   * @remarks
   * The region ID of the peer transit router instance.
   * 
   * @example
   * cn-qingdao
   */
  peerTransitRouterRegionId?: string;
  /**
   * @remarks
   * The region ID of the local Enterprise Edition transit router instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: CreateTransitRouterPeerAttachmentRequestTag[];
  /**
   * @remarks
   * The description of the inter-region connection.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testdesc
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The name of the inter-region connection.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testname
   */
  transitRouterAttachmentName?: string;
  /**
   * @remarks
   * The ID of the local Enterprise Edition transit router instance.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      bandwidth: 'Bandwidth',
      bandwidthType: 'BandwidthType',
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      cenId: 'CenId',
      clientToken: 'ClientToken',
      defaultLinkType: 'DefaultLinkType',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerTransitRouterId: 'PeerTransitRouterId',
      peerTransitRouterRegionId: 'PeerTransitRouterRegionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      bandwidth: 'number',
      bandwidthType: 'string',
      cenBandwidthPackageId: 'string',
      cenId: 'string',
      clientToken: 'string',
      defaultLinkType: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      peerTransitRouterId: 'string',
      peerTransitRouterRegionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterPeerAttachmentRequestTag },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

