// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterVpnAttachmentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key cannot be an empty string. It can be up to 64 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be an empty string or a string of up to 128 characters. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag values.
   * 
   * @example
   * TagValue
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

export class CreateTransitRouterVpnAttachmentRequestZone extends $dara.Model {
  /**
   * @remarks
   * The zone ID.
   * 
   * You can call the [ListTransitRouterAvailableResource](https://help.aliyun.com/document_detail/261356.html) operation to query available zones.
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

export class CreateTransitRouterVpnAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the transit router to automatically publish routes to the IPsec-VPN connection. Valid values:
   * 
   * - **true** (default): enabled.
   * 
   * - **false**: disabled.
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
   * cen-rsgxs8ng2awen2****
   */
  cenId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * The value is set to **POSTPAY** (default), which specifies the pay-as-you-go billing method.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request.
   * 
   * Generate a unique token on your client. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run but does not create the VPN connection. The system checks the request for required parameters, format, and service limits. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and creates the VPN connection if the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the transit router instance is deployed.
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
   * The tags.
   * 
   * You can specify up to 20 tags.
   */
  tag?: CreateTransitRouterVpnAttachmentRequestTag[];
  /**
   * @remarks
   * The description of the VPN connection.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with \\`http\\://\\` or \\`https\\://\\`.
   * 
   * @example
   * desctest
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The name of the VPN connection.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with \\`http\\://\\` or \\`https\\://\\`.
   * 
   * @example
   * nametest
   */
  transitRouterAttachmentName?: string;
  /**
   * @remarks
   * The ID of the transit router instance.
   * 
   * @example
   * tr-p0wm740vjnbaprv0m****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-p0w042cqwvlhl4zyw****
   */
  vpnId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the IPsec-VPN connection belongs.
   * 
   * - If you do not specify this parameter, the ID of the current Alibaba Cloud account is used.
   * 
   * - This parameter is required if you want to connect to a cross-account IPsec-VPN connection.
   * 
   * @example
   * 1210123456123456
   */
  vpnOwnerId?: number;
  /**
   * @remarks
   * The ID of the zone in the current region.
   * 
   * The system creates resources in the specified zone.
   * 
   * > Do not specify this parameter if the attached IPsec-VPN connection is in dual-tunnel mode.
   */
  zone?: CreateTransitRouterVpnAttachmentRequestZone[];
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
      vpnId: 'VpnId',
      vpnOwnerId: 'VpnOwnerId',
      zone: 'Zone',
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
      tag: { 'type': 'array', 'itemType': CreateTransitRouterVpnAttachmentRequestTag },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      vpnId: 'string',
      vpnOwnerId: 'number',
      zone: { 'type': 'array', 'itemType': CreateTransitRouterVpnAttachmentRequestZone },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

