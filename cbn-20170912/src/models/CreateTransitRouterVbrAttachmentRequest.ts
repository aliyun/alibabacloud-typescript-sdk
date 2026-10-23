// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterVbrAttachmentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * The tag key cannot be an empty string. It can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
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
   * The tag value cannot be empty. It can be up to 128 characters in length, and cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * Each tag key corresponds to a tag value. You can specify up to 20 tag values at a time.
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

export class CreateTransitRouterVbrAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Enterprise Edition transit router instance that can forward traffic to automatically publish route entry and routing information to the VBR instance.
   * 
   * Valid values:
   * - **false** (default): no.
   * - **true**: yes.
   * 
   * @example
   * false
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID. This parameter is required when TransitRouterId is not specified. The system performs automatic creation of an Enterprise Edition transit router instance that can forward and perform routing in the region specified by RegionId.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request, including permission and instance status checks. Valid values:
   * 
   * - **false** (default): sends a normal request and creates the VBR connection after the check passes.
   * - **true**: sends a check request and only performs the check without creating the VBR connection. The check items include whether required parameters are specified and the request format. If the check fails, an error is returned. If the check passes, the request ID is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VBR. This parameter is required and must be used in combination with VbrId and CenId or TransitRouterId.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: CreateTransitRouterVbrAttachmentRequestTag[];
  /**
   * @remarks
   * The description of the VBR connection.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testdesc
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The name of the VBR connection.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testname
   */
  transitRouterAttachmentName?: string;
  /**
   * @remarks
   * The Enterprise Edition transit router instance ID. This parameter is required when CenId is not specified. It is used to create a VBR connection on an existing Enterprise Edition transit router instance that can forward and perform routing.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The VBR instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp1svadp4lq38janc****
   */
  vbrId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the VBR instance belongs. The default value is the Alibaba Cloud account ID of the current logon.
   * 
   * > This parameter is required if you want to load a cross-account network instance.
   * 
   * @example
   * 1250123456123456
   */
  vbrOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
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
      vbrId: 'VbrId',
      vbrOwnerId: 'VbrOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterVbrAttachmentRequestTag },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      vbrId: 'string',
      vbrOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

