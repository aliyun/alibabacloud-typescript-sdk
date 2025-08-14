// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterVpcAttachmentsRequestTag extends $dara.Model {
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

export class ListTransitRouterVpcAttachmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the CEN instances.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If this is your first query and no subsequent queries are to be sent, ignore this parameter.
   * *   If a subsequent query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Enterprise Edition transit router.
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
   * Specifies whether the network instance is attached to the CEN instance. Valid values:
   * 
   * *   **Attaching**: being attached to the CEN instance.
   * *   **Attached**: attached to the CEN instance.
   * *   **Detaching**: being detached from the CEN instance.
   * 
   * @example
   * Attached
   */
  status?: string;
  /**
   * @remarks
   * The information about the tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: ListTransitRouterVpcAttachmentsRequestTag[];
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
   * The ID of the Enterprise Edition transit router.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1kbjcre9vtsebo1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListTransitRouterVpcAttachmentsRequestTag },
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
      vpcId: 'string',
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

