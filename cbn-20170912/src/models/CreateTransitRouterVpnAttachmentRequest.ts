// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterVpnAttachmentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * Once specified, the tag key cannot be an empty string. The tag key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * Once specified, the tag value cannot be empty. The tag value can be up to 128 characters in length, and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
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
   * You can call the [ListTransitRouterAvailableResource](https://help.aliyun.com/document_detail/261356.html) operation to query zone IDs.
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
   * Specifies whether to allow the transit router instance to automatically publish route entries to the IPsec connection. Valid values:
   * 
   * - **true** (default): allowed.
   * - **false**: not allowed.
   * 
   * @example
   * true
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * @example
   * cen-rsgxs8ng2awen2****
   */
  cenId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Set the value to **POSTPAY** (default), which specifies the pay-as-you-go billable method based on usage.
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
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the VPN connection is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the transit router instance.
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
   * The tag information list.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: CreateTransitRouterVpnAttachmentRequestTag[];
  /**
   * @remarks
   * The description of the VPN connection.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The name of the VPN connection.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  transitRouterAttachmentName?: string;
  /**
   * @remarks
   * The transit router instance ID.
   * 
   * @example
   * tr-p0wm740vjnbaprv0m****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the IPsec connection.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-p0w042cqwvlhl4zyw****
   */
  vpnId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the Alibaba Cloud account to which the IPsec connection belongs.
   * 
   * - If you do not specify this parameter, the Alibaba Cloud account ID of the current logon account is used by default.
   * - This parameter is required if you want to connect to an IPsec connection that belongs to a different account.
   * 
   * @example
   * 1210123456123456
   */
  vpnOwnerId?: number;
  /**
   * @remarks
   * The zone ID in the current region.
   * 
   * The system creates resources in the zone that you specify.
   * 
   * > If the bindeded IPsec connection uses the dual-tunnel mode, leave this parameter empty.
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

