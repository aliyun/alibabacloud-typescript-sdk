// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * testValue
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * QpgBAAAAAABsb2dzL2RzLw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Set the value to **DOMAIN**.
   * 
   * This parameter is required.
   * 
   * @example
   * DOMAIN
   */
  resourceType?: string;
  /**
   * @remarks
   * The key-value pair of a tag.
   */
  tag?: ListTagResourcesRequestTag[];
  /**
   * @remarks
   * The business ID of the tag owner.
   * 
   * @example
   * 26842
   */
  tagOwnerBid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the tag belongs.
   * 
   * @example
   * 123xxxx
   */
  tagOwnerUid?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
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
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
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

