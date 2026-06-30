// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterVpcAttachmentShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * The tag key cannot be an empty string. The key can be up to 64 characters long and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * The tag value can be an empty string or a string up to 128 characters long. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class CreateTransitRouterVpcAttachmentShrinkRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1a214sbus8z3b54****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone. The zone must be supported by the Enterprise Edition transit router.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query available zones.
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

export class CreateTransitRouterVpcAttachmentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Enterprise Edition transit router to automatically advertise routes to the VPC.
   * 
   * - **false** (default): Do not automatically advertise routes.
   * 
   * - **true**: Automatically advertise routes.
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
   * The billing method. The default value is **POSTPAY** (pay-as-you-go).
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token used to ensure request idempotency.
   * 
   * You must generate a value on your client that is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token, which is unique for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run to check the validity of the request without creating the resource. The check includes permissions and instance status. Valid values:
   * 
   * - **false** (default): Sends a normal request. The system creates the VPC connection if the request is valid.
   * 
   * - **true**: Sends only a check request. The system checks required parameters, request format, and permissions. The VPC connection is not created. If the check fails, an error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  optionsShrink?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the VPC is located.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags to add to the VPC connection.
   * 
   * You can add up to 20 tags.
   */
  tag?: CreateTransitRouterVpcAttachmentShrinkRequestTag[];
  /**
   * @remarks
   * The description of the VPC connection.
   * 
   * The description can be empty or 1 to 256 characters long, and cannot start with `http://` or `https://`.
   * 
   * @example
   * testname
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The name of the VPC connection.
   * 
   * The name can be empty or 1 to 128 characters long, and cannot start with `http://` or `https://`.
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
   * The properties of the VPC connection. This parameter is deprecated. We recommend that you use the `Options` parameter instead.
   */
  transitRouterVPCAttachmentOptionsShrink?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1kbjcre9vtsebo1****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VPC. By default, this is the ID of the current Alibaba Cloud account.
   * 
   * > This parameter is required if you want to attach a cross-account network instance.
   * 
   * @example
   * 1250123456123456
   */
  vpcOwnerId?: number;
  /**
   * @remarks
   * The zone mappings for the VPC connection. For each mapping, you must specify a vSwitch in a zone that is supported by the Enterprise Edition transit router.
   * 
   * You can specify up to 10 zone mappings.
   * 
   * This parameter is required.
   */
  zoneMappings?: CreateTransitRouterVpcAttachmentShrinkRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      optionsShrink: 'Options',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      transitRouterVPCAttachmentOptionsShrink: 'TransitRouterVPCAttachmentOptions',
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
      optionsShrink: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterVpcAttachmentShrinkRequestTag },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      transitRouterVPCAttachmentOptionsShrink: 'string',
      vpcId: 'string',
      vpcOwnerId: 'number',
      zoneMappings: { 'type': 'array', 'itemType': CreateTransitRouterVpcAttachmentShrinkRequestZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
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

