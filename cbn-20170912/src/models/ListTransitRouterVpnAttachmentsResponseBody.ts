// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsZones extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * For more information, see [DescribeZones](https://help.aliyun.com/document_detail/36064.html).
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachments extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the transit router automatically advertises routes to the IPsec-VPN connection. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  autoPublishRouteEnabled?: boolean;
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
   * The billing method of the VPN connection.
   * 
   * The value is set to POSTPAY, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the VPN connection was created.
   * 
   * The time is displayed in the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-08T08:45Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The party that pays for the network instance. Valid values:
   * 
   * - **PayByCenOwner**: The fees for the network instance are paid by the account that owns the CEN instance.
   * 
   * - **PayByResourceOwner**: The fees for the network instance are paid by the account that owns the network instance.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  /**
   * @remarks
   * The resource type of the VPN connection.
   * 
   * The value is set to **VPN**, which indicates that the transit router is connected to an IPsec-VPN connection.
   * 
   * @example
   * VPN
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the VPN connection.
   * 
   * - **Attached**: The VPN connection is attached.
   * 
   * - **Attaching**: The VPN connection is being attached.
   * 
   * - **Detaching**: The VPN connection is being detached.
   * 
   * @example
   * Attached
   */
  status?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsTags[];
  /**
   * @remarks
   * The description of the VPN connection.
   * 
   * @example
   * desctest
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The ID of the VPN connection.
   * 
   * @example
   * tr-attach-a6p8voaodog5c0****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The name of the VPN connection.
   * 
   * @example
   * nametest
   */
  transitRouterAttachmentName?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-p0wm740vjnbaprv0m****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-p0wtu1xgd0l7fjo7k****
   */
  vpnId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the IPsec-VPN connection belongs.
   * 
   * @example
   * 1210123456123456
   */
  vpnOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where the IPsec-VPN connection is deployed.
   * 
   * For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/36063.html).
   * 
   * @example
   * cn-hangzhou
   */
  vpnRegionId?: string;
  /**
   * @remarks
   * A list of zones where the VPN connection is deployed.
   */
  zones?: ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsZones[];
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      orderType: 'OrderType',
      resourceType: 'ResourceType',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      vpnId: 'VpnId',
      vpnOwnerId: 'VpnOwnerId',
      vpnRegionId: 'VpnRegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      chargeType: 'string',
      creationTime: 'string',
      orderType: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsTags },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      vpnId: 'string',
      vpnOwnerId: 'number',
      vpnRegionId: 'string',
      zones: { 'type': 'array', 'itemType': ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsZones },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpnAttachmentsResponseBody extends $dara.Model {
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
   * - If **NextToken** is empty, it indicates that no next query is to be sent.
   * 
   * - If a value is returned for **NextToken**, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D5530D2-3BBB-524E-8E98-59AB06A250E4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of VPN connections.
   */
  transitRouterAttachments?: ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachments[];
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
      transitRouterAttachments: { 'type': 'array', 'itemType': ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachments },
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

