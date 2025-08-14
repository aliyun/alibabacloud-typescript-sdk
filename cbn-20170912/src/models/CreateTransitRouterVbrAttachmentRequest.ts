// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterVbrAttachmentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys.
   * 
   * @example
   * TagKey
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
   * Specifies whether to enable the Enterprise Edition transit router to automatically advertise routes to the VBR. Valid values:
   * 
   * *   **false** (default): no
   * *   **true**: yes
   * 
   * @example
   * false
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Default values:
   * 
   * *   **false** (default): performs a dry run and sends the request.
   * *   **true**: performs a dry run. The system checks the required parameters and request syntax. If the request fails the dry run, an error message is returned. If the request passes the dry run, the system returns the ID of the request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VBR.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
  tag?: CreateTransitRouterVbrAttachmentRequestTag[];
  /**
   * @remarks
   * The description of the VBR connection.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.
   * 
   * @example
   * testdesc
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The name of the VBR connection.
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
   * The ID of the VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp1svadp4lq38janc****
   */
  vbrId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VBR belongs. The default value is the ID of the current Alibaba Cloud account.
   * 
   * > If the network instance and CEN instance belong to different Alibaba Cloud accounts, this parameter is required.
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

