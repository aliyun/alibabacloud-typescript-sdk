// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsTags extends $dara.Model {
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

export class ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENI created by the Enterprise Edition transit router in the vSwitch.
   * 
   * @example
   * eni-bp149hmyaqegerml****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1a214sbus8z3b54****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      vSwitchId: 'string',
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

export class ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachments extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Enterprise Edition transit router can automatically advertise routes to the VPC. Valid values:
   * 
   * *   **false**
   * *   **true**
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
   * The billing method of the VPC connection.
   * 
   * Only **POSTPAY** may be returned, which indicates the default pay-as-you-go billing method.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the VPC connection was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-15T02:14Z
   */
  creationTime?: string;
  managedService?: string;
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
   * The type of resource to which the transit router is connected.
   * 
   * Only **VPC** may be returned, which indicates VPCs.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the VPC connection. Valid values:
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
   * The tags.
   */
  tags?: ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsTags[];
  /**
   * @remarks
   * The description of the VPC connection.
   * 
   * @example
   * testdesc
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The VPC connection ID.
   * 
   * @example
   * tr-attach-nls9fzkfat8934****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The name of the VPC connection.
   * 
   * @example
   * testname
   */
  transitRouterAttachmentName?: string;
  /**
   * @remarks
   * The description of the Enterprise Edition transit router.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The features of the VPC connection.
   */
  transitRouterVPCAttachmentOptions?: { [key: string]: string };
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 1250123456123456
   */
  vpcOwnerId?: number;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  /**
   * @remarks
   * The primary and secondary zones, vSwitches, and ENIs of the VPC.
   */
  zoneMappings?: ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      managedService: 'ManagedService',
      orderType: 'OrderType',
      resourceType: 'ResourceType',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      transitRouterVPCAttachmentOptions: 'TransitRouterVPCAttachmentOptions',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
      vpcRegionId: 'VpcRegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      chargeType: 'string',
      creationTime: 'string',
      managedService: 'string',
      orderType: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsTags },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      transitRouterVPCAttachmentOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      vpcId: 'string',
      vpcOwnerId: 'number',
      vpcRegionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.transitRouterVPCAttachmentOptions) {
      $dara.Model.validateMap(this.transitRouterVPCAttachmentOptions);
    }
    if(Array.isArray(this.zoneMappings)) {
      $dara.Model.validateArray(this.zoneMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterVpcAttachmentsResponseBody extends $dara.Model {
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
   * The token that determines the start point of the next query. Valid values:
   * 
   * *   If **NextToken** is returned, it indicates that no additional results exist.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * C97FF53F-3EF8-4883-B459-60E171924B23
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
   * The information about the VPC connection.
   */
  transitRouterAttachments?: ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachments[];
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
      transitRouterAttachments: { 'type': 'array', 'itemType': ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachments },
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

