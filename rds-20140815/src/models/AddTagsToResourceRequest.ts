// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddTagsToResourceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the first tag that you want to add. Each tag consists of a tag key and a tag value. You can specify up to five tags in a single request. You cannot specify an empty string as the tag key. You can specify an empty string as the tag value.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the first tag that you want to add. Each tag consists of a tag key and a tag value. You can specify up to five tags in a single request. You cannot specify an empty string as the tag key. You can specify an empty string as the tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class AddTagsToResourceRequest extends $dara.Model {
  tag?: AddTagsToResourceRequestTag[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can enter up to 30 instance IDs in a single request. If you enter more than one instance ID, you must separate the instance IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hagnzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that you want to add. Each tag consists of a tag key and a tag value. You can specify a maximum of five tags in the following format for each request: {"key1":"value1","key2":"value2"...}.
   * 
   * >  The tag key is required and the tag value is optional.
   * 
   * @example
   * {“key1”:”value1”,“key2”:””}
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the proxy mode.
   * 
   * @example
   * API
   */
  proxyId?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      proxyId: 'proxyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': AddTagsToResourceRequestTag },
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
      proxyId: 'string',
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

