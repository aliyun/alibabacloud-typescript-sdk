// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether appliance mode is enabled.
   * 
   * - **disable** (default): Appliance mode is disabled.
   * 
   * - **enable**: Appliance mode is enabled.
   * 
   * @example
   * enable
   */
  applianceModeSupport?: string;
  /**
   * @remarks
   * Specifies whether IPv6 is enabled.
   * 
   * - **disable** (default): IPv6 is disabled.
   * 
   * - **enable**: IPv6 is enabled.
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
   * The ID of the ENI that the Enterprise Edition transit router creates in the vSwitch.
   * 
   * @example
   * eni-bp149hmyaqegerml****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1a214sbus8z3b54****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone.
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
   * Specifies whether the Enterprise Edition transit router automatically advertises routes to the VPC.
   * 
   * - **false**: Routes are not automatically advertised.
   * 
   * - **true**: Routes are automatically advertised.
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
   * The value is always **POSTPAY**, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the VPC connection was created.
   * 
   * The time is in the `YYYY-MM-DDThh:mmZ` format and in UTC.
   * 
   * @example
   * 2021-06-15T02:14Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cloud service to which the resource belongs.
   * 
   * @example
   * SAS
   */
  managedService?: string;
  /**
   * @remarks
   * A collection of feature attributes.
   */
  options?: ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsOptions;
  /**
   * @remarks
   * Specifies who pays for the network instance. Valid values:
   * 
   * - **PayByCenOwner**: The account that owns the CEN instance pays the fees.
   * 
   * - **PayByResourceOwner**: The account that owns the network instance pays the fees.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  /**
   * @remarks
   * The type of resource to which the connection is attached.
   * 
   * The value is always **VPC**, which indicates a VPC.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the VPC connection.
   * 
   * - **Attached**: The connection is established.
   * 
   * - **Attaching**: The connection is being created.
   * 
   * - **Detaching**: The connection is being deleted.
   * 
   * @example
   * Attached
   */
  status?: string;
  /**
   * @remarks
   * A list of tags.
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
   * The ID of the VPC connection.
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
   * The ID of the Enterprise Edition transit router.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The feature attributes of the VPC connection. This parameter is deprecated. We recommend that you use the Options parameter instead.
   */
  transitRouterVPCAttachmentOptions?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the account that owns the VPC.
   * 
   * @example
   * 1250123456123456
   */
  vpcOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where the VPC is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  /**
   * @remarks
   * The zone mappings of the VPC connection. This includes the vSwitches and elastic network interfaces (ENIs) in the associated VPC.
   */
  zoneMappings?: ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      managedService: 'ManagedService',
      options: 'Options',
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
      options: ListTransitRouterVpcAttachmentsResponseBodyTransitRouterAttachmentsOptions,
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
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
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
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * - If this parameter is empty, all results have been returned.
   * 
   * - If a value is returned for **NextToken**, it is the token to start the next query.
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
   * C97FF53F-3EF8-4883-B459-60E171924B23
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
   * A list of VPC connections.
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

