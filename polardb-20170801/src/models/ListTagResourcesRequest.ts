// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of a tag. You can specify multiple tags to query for resources that have all of the specified tags.
   * 
   * > - You must specify either the `ResourceId.N` parameter or the `Tag.N.Key` parameter.
   * >
   * > - If you specify the `Tag.N.Key` parameter, you can add up to 20 tag pairs.
   * 
   * @example
   * type
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key. An empty string is allowed.
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * A token to retrieve the next page of results. You do not need to specify this parameter for the first request. If the first request does not return all results, the response returns a token. You can use this token in the next request to continue the query.
   * 
   * @example
   * 212db86sca4384811e0b5e8707*******
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view the available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of a cluster. You can specify multiple cluster IDs to query the tags of multiple clusters.
   * 
   * > - You must specify either the `ResourceId.N` parameter or the `Tag.N.Key` parameter.
   * >
   * > - If you specify the `ResourceId.N` parameter, you can add up to 50 cluster IDs.
   * 
   * @example
   * pc-****************
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Set the value to **cluster**.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

