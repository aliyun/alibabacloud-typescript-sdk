// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterVpcAttachmentRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the appliance mode.
   * 
   * - **disable** (default): No.
   * - **enable**: Yes.
   * 
   * @example
   * enable
   */
  applianceModeSupport?: string;
  /**
   * @remarks
   * Specifies whether IPv6 is supported.
   * 
   * - **disable** (default): No.
   * - **enable**: Yes.
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

export class CreateTransitRouterVpcAttachmentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * Once specified, the tag key cannot be an empty string. The tag key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * Once specified, the tag value cannot be empty. The tag value can be up to 128 characters in length, and cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * tagtest
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

export class CreateTransitRouterVpcAttachmentRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch instance in a zone supported by the Enterprise Edition transit router.
   * 
   * You can select vSwitch instances for up to 10 zones at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1a214sbus8z3b54****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of a zone supported by the Enterprise Edition transit router.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query zone IDs.
   * 
   * You can select up to 10 zones at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateTransitRouterVpcAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the Enterprise Edition transit router to automatically publish routing entries to the VPC instance.
   * 
   * - **false** (default): No.
   * - **true**: Yes.
   * 
   * @example
   * true
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN).
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The billing method. Default value: **POSTPAY**, which indicates pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to execute a dry run, including permission and instance status verification. Valid values:
   * 
   * - **false** (default): Sends a normal request and creates the VPC connection after the request passes the check.
   * - **true**: Sends a check request. Only the check is performed, and the VPC connection is not created. The check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The collection of feature attributes.
   */
  options?: CreateTransitRouterVpcAttachmentRequestOptions;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPC-connected instance.
   * 
   * You can invoke the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: CreateTransitRouterVpcAttachmentRequestTag[];
  /**
   * @remarks
   * The description of the VPC connection.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testname
   */
  transitRouterAttachmentDescription?: string;
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
   * The instance ID of the Enterprise Edition transit router.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The list of feature attributes for the VPC connection (to be deprecated, use the new parameter Options instead).
   */
  transitRouterVPCAttachmentOptions?: { [key: string]: string };
  /**
   * @remarks
   * The instance ID of the VPC-connected instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1kbjcre9vtsebo1****
   */
  vpcId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the VPC-connected instance belongs. The default value is the Alibaba Cloud account ID of the current logon user.
   * 
   * > This parameter is required if you want to load a cross-account network instance.
   * 
   * @example
   * 1250123456123456
   */
  vpcOwnerId?: number;
  /**
   * @remarks
   * Select a vSwitch instance in a zone supported by the Enterprise Edition transit router.
   * 
   * You can add up to 10 entries at a time.
   * 
   * This parameter is required.
   */
  zoneMappings?: CreateTransitRouterVpcAttachmentRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      options: 'Options',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      transitRouterVPCAttachmentOptions: 'TransitRouterVPCAttachmentOptions',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      chargeType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      options: CreateTransitRouterVpcAttachmentRequestOptions,
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterVpcAttachmentRequestTag },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      transitRouterVPCAttachmentOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      vpcId: 'string',
      vpcOwnerId: 'number',
      zoneMappings: { 'type': 'array', 'itemType': CreateTransitRouterVpcAttachmentRequestZoneMappings },
    };
  }

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
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

