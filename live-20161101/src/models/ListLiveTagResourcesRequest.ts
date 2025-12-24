// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveTagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * env
   */
  key?: string;
  /**
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
   * @example
   * q2j8bLtBdhONLRkgaPBa6A==
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DOMAIN
   */
  resourceType?: string;
  tag?: ListLiveTagResourcesRequestTag[];
  /**
   * @example
   * 26842
   */
  tagOwnerBid?: string;
  /**
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

