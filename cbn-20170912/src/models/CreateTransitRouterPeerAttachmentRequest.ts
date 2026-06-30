// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterPeerAttachmentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that you want to attach.
   * 
   * You cannot specify an empty string as a tag key. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https:// `.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * tag_A1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that you want to attach to the specified resource.
   * 
   * The tag value can be an empty string or a string of up to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https:// `.
   * 
   * Each key-value pair must be unique. You can specify at most 20 tag values in each call.
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
   * Specifies whether to enable the local Enterprise Edition transit router to automatically advertise the routes of the inter-region connection to the peer transit router. Valid values:
   * 
   * - **false** (default): no.
   * 
   * - **true**: yes.
   * 
   * @example
   * false
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The bandwidth value of the inter-region connection. Unit: Mbps.
   * 
   * - When **BandwidthType** is set to **BandwidthPackage**, this parameter specifies the bandwidth value that the inter-region connection can use.
   * 
   * - When **BandwidthType** is set to **DataTransfer**, this parameter specifies the maximum bandwidth value of the inter-region connection.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The method that is used to allocate bandwidth to the inter-region connection. Valid values:
   * 
   * - **BandwidthPackage**: allocates bandwidth from a bandwidth plan.
   * 
   * - **DataTransfer**: does not allocate bandwidth to the inter-region connection and charges based on pay-by-traffic.
   * 
   * @example
   * BandwidthPackage
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The ID of the bandwidth plan that you want to associate with the inter-region connection.
   * 
   * > You do not need to configure this parameter when **BandwidthType** is set to **DataTransfer**.
   * 
   * @example
   * cenbwp-3xrxupouolw5ou****
   */
  cenBandwidthPackageId?: string;
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** is different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The default line type.
   * 
   * Valid values: Platinum and Gold. Default value: Gold.
   * 
   * You can set this parameter to Platinum only when the bandwidth allocation method is pay-by-traffic.
   * 
   * @example
   * Gold
   */
  defaultLinkType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run to check information such as the permissions and instance status. Valid values:
   * 
   * - **false** (default): sends a normal request. After the request passes the check, the system creates an inter-region connection.
   * 
   * - **true**: sends a check request. The system checks the required parameters and request syntax. If the request fails the dry run, an error message is returned. If the request passes the dry run, a request ID is returned.
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
   * The ID of the region where the peer transit router instance is deployed.
   * 
   * @example
   * cn-qingdao
   */
  peerTransitRouterRegionId?: string;
  /**
   * @remarks
   * The ID of the region where the local Enterprise Edition transit router instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
   * You can specify at most 20 tags in each call.
   */
  tag?: CreateTransitRouterPeerAttachmentRequestTag[];
  /**
   * @remarks
   * The description of the inter-region connection.
   * 
   * The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http\\:// or https\\://.
   * 
   * @example
   * testdesc
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The name of the inter-region connection.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http\\:// or https\\://.
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

