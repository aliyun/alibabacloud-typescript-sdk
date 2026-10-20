// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**.
   * 
   * - The tag key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * - The tag key can be up to 64 characters in length.
   * - The tag key cannot be an empty string.
   * 
   * @example
   * team
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the topic. You must specify both **Key** and **Value** or neither. If both are specified, the system filters topics based on the tag. If neither is specified, all topics are queried.
   * 
   * - Valid values of N: 1 to 20.
   * - The tag value can be an empty string.
   * - The tag value can be up to 128 characters in length, and cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * @example
   * tagValue
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
   * The token for the next query.
   * 
   * @example
   * 153ba0bbb2be03f84eb48b699f0a4123
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource ID. Valid values of N: 1 to 50.
   * 
   * You must specify at least one of ResourceId and Tag. Otherwise, the MissingParameter.ResourceIdsOrTags error is returned.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values: instance (instance).
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag list.
   * 
   * You must specify at least one of ResourceId and Tag. Otherwise, the MissingParameter.ResourceIdsOrTags error is returned.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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

