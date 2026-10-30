// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsTags extends $dara.Model {
  key?: string;
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
  autoPublishRouteEnabled?: boolean;
  cenId?: string;
  chargeType?: string;
  creationTime?: string;
  orderType?: string;
  resourceType?: string;
  status?: string;
  tags?: ListTransitRouterVpnAttachmentsResponseBodyTransitRouterAttachmentsTags[];
  transitRouterAttachmentDescription?: string;
  transitRouterAttachmentId?: string;
  transitRouterAttachmentName?: string;
  transitRouterId?: string;
  vpnId?: string;
  vpnOwnerId?: number;
  vpnRegionId?: string;
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
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
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

