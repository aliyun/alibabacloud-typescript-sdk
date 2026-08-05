// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key.
   * 
   * @example
   * dev
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

export class ListLiveTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * q2j8bLtBdhONLRkgaPBa6A==
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs. ResourceId and Tag cannot both be empty.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * DOMAIN
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags. ResourceId and Tag cannot both be empty.
   */
  tag?: ListLiveTagResourcesRequestTag[];
  /**
   * @remarks
   * The Bid of the tag owner.
   * 
   * @example
   * 26842
   */
  tagOwnerBid?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the tag belongs.
   * 
   * @example
   * xxx1234xxx
   */
  tagOwnerUid?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
      tagOwnerBid: 'TagOwnerBid',
      tagOwnerUid: 'TagOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListLiveTagResourcesRequestTag },
      tagOwnerBid: 'string',
      tagOwnerUid: 'string',
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

