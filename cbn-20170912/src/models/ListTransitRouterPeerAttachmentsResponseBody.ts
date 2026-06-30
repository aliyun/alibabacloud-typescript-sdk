// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachmentsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag_A1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
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

export class ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachments extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Enterprise Edition transit router automatically advertises routes to the peer region.
   * 
   * - **false** (default): No.
   * 
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The bandwidth of the inter-region connection. Unit: Mbit/s.
   * 
   * - If **BandwidthType** is set to **BandwidthPackage**, this parameter indicates the bandwidth that is allocated to the inter-region connection.
   * 
   * - If **BandwidthType** is set to **DataTransfer**, this parameter indicates the maximum bandwidth of the inter-region connection.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The bandwidth allocation method. Valid values:
   * 
   * - **BandwidthPackage**: Bandwidth is allocated from a bandwidth plan.
   * 
   * - **DataTransfer**: The inter-region connection is not allocated a specific bandwidth and is billed on a pay-by-traffic basis.
   * 
   * @example
   * BandwidthPackage
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The ID of the bandwidth plan that is associated with the inter-region connection.
   * 
   * @example
   * cenbwp-3xrxupouolw5ou****
   */
  cenBandwidthPackageId?: string;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the inter-region connection was created.
   * 
   * The time is displayed in the ISO 8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-16T02:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The default link type.
   * 
   * - **Gold** (default): Gold.
   * 
   * - **Platinum**: Platinum.
   * 
   * @example
   * Gold
   */
  defaultLinkType?: string;
  /**
   * @remarks
   * The connected areas of the bandwidth plan.
   * 
   * @example
   * china_china
   */
  geographicSpanId?: string;
  /**
   * @remarks
   * The ID of the peer transit router.
   * 
   * @example
   * tr-m5eq27g6bndum7e88****
   */
  peerTransitRouterId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the peer transit router belongs.
   * 
   * @example
   * 253460731706911258
   */
  peerTransitRouterOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where the peer transit router is deployed.
   * 
   * @example
   * cn-qingdao
   */
  peerTransitRouterRegionId?: string;
  /**
   * @remarks
   * The ID of the region where the Enterprise Edition transit router is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of resource that is associated with the connection.
   * 
   * - **VPC**: virtual private cloud (VPC).
   * 
   * - **CCN**: Cloud Connect Network (CCN) instance.
   * 
   * - **VBR**: virtual border router (VBR).
   * 
   * - **TR**: transit router.
   * 
   * @example
   * TR
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the inter-region connection.
   * 
   * - **Attached**: The connection is attached.
   * 
   * - **Attaching**: The connection is being attached.
   * 
   * - **Detaching**: The connection is being detached.
   * 
   * - **Detached**: The connection is detached.
   * 
   * @example
   * Attached
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachmentsTags[];
  /**
   * @remarks
   * The description of the inter-region connection.
   * 
   * @example
   * testdesc
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The ID of the inter-region connection.
   * 
   * @example
   * tr-attach-5u4qbayfv2io5v****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The name of the inter-region connection.
   * 
   * @example
   * test
   */
  transitRouterAttachmentName?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router.
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
      creationTime: 'CreationTime',
      defaultLinkType: 'DefaultLinkType',
      geographicSpanId: 'GeographicSpanId',
      peerTransitRouterId: 'PeerTransitRouterId',
      peerTransitRouterOwnerId: 'PeerTransitRouterOwnerId',
      peerTransitRouterRegionId: 'PeerTransitRouterRegionId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
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
      creationTime: 'string',
      defaultLinkType: 'string',
      geographicSpanId: 'string',
      peerTransitRouterId: 'string',
      peerTransitRouterOwnerId: 'number',
      peerTransitRouterRegionId: 'string',
      regionId: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachmentsTags },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterPeerAttachmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * - If this parameter is empty, no more data is returned.
   * 
   * - If a value is returned for this parameter, the value is the token that is used for the next query.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AA97AFA3-8E48-4BD7-9F3E-A9F6176018A0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of inter-region connections.
   */
  transitRouterAttachments?: ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachments[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterAttachments: 'TransitRouterAttachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterAttachments: { 'type': 'array', 'itemType': ListTransitRouterPeerAttachmentsResponseBodyTransitRouterAttachments },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterAttachments)) {
      $dara.Model.validateArray(this.transitRouterAttachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

