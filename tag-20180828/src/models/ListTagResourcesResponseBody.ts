// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResourcesTags extends $dara.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   Custom
   * *   System
   * 
   * @example
   * Custom
   */
  category?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The ARN of the resource.
   * 
   * @example
   * arn:acs:ecs:cn-hangzhou:123456789****:instance/i-bp15hr53jws84akg****
   */
  resourceARN?: string;
  /**
   * @remarks
   * The information of the tags.
   */
  tags?: ListTagResourcesResponseBodyTagResourcesTags[];
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      tags: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the `next query` is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the `next query` is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the `token` used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 014738E0-3C7F-47D8-8FB9-469500C6F387
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the tags that are added to the resources.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

