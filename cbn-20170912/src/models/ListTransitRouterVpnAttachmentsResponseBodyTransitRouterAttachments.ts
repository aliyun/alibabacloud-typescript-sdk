// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsTags } from "./ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsTags";
import { ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsZones } from "./ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsZones";


export class ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachments extends $dara.Model {
  /**
   * @remarks
   * Indicates the transit router can automatically advertise routes to the IPsec connection. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  autoPublishRouteEnabled?: boolean;
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
   * The billing method of the VPN attachment.
   * 
   * Only POSTPAY may be returned, which is the default pay-as-you-go billing method.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the VPN connection was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-08T08:45Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The entity that pays the fees of the network instance. Valid values:
   * 
   * *   **PayByCenOwner**: the Alibaba Cloud account that owns the CEN instance.
   * *   **PayByResourceOwner**: the Alibaba Cloud account that owns the network instance.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  /**
   * @remarks
   * The type of resource attached to the transit router.
   * 
   * Only **VPN** may be returned, which indicates that an IPsec-VPN connection is attached to the transit router.
   * 
   * @example
   * VPN
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the VPN connection. Valid values:
   * 
   * *   **Attached**
   * *   **Attaching**
   * *   **Detaching**
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
   * The description of the IPsec-VPN connection.
   * 
   * @example
   * desctest
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The ID of the VPN attachment.
   * 
   * @example
   * tr-attach-a6p8voaodog5c0****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The name of the VPN attachment.
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
   * The ID of the region to which the IPsec-VPN connection belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  vpnRegionId?: string;
  /**
   * @remarks
   * The zones in which the VPN attachment is deployed.
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

