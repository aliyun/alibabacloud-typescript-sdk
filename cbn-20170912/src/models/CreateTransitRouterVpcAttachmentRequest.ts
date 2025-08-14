// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterVpcAttachmentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.
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
   * A vSwitch that is deployed in the zone that supports Enterprise Edition transit routers.
   * 
   * You can specify vSwitches for at most 10 zones in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1a214sbus8z3b54****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone that supports Enterprise Edition transit routers.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query the most recent zone list.
   * 
   * You can specify at most 10 zones in each call.
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
   * Specifies whether to enable the Enterprise Edition transit router to automatically advertise routes to VPCs. Valid values:
   * 
   * *   **false:** (default)
   * *   **true**
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
   * The billing method. The default value is **POSTPAY**, which specifies the pay-as-you-go billing method.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **false** (default): performs a dry run and sends the request.
   * *   **true**: performs a dry run. The system checks the required parameters and request syntax. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the VPC is deployed.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The information about the tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: CreateTransitRouterVpcAttachmentRequestTag[];
  /**
   * @remarks
   * The description of the VPC connection.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
   * 
   * @example
   * testname
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The name of the VPC connection.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
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
   * Feature configurations of the VPC connection.
   */
  transitRouterVPCAttachmentOptions?: { [key: string]: string };
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1kbjcre9vtsebo1****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs. The default value is the ID of the current Alibaba Cloud account.
   * 
   * > If the network instance and CEN instance belong to different Alibaba Cloud accounts, this parameter is required.
   * 
   * @example
   * 1250123456123456
   */
  vpcOwnerId?: number;
  /**
   * @remarks
   * A zone that supports Enterprise Edition transit routers.
   * 
   * You can specify at most 10 zones.
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

