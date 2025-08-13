// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesByTagResponseBodyResourcesTags extends $dara.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   custom
   * *   system
   * 
   * @example
   * custom
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

export class ListResourcesByTagResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * vpc-wz9pifyuw26esxd05****
   */
  resourceId?: string;
  /**
   * @remarks
   * The information of the tags.
   * 
   * This parameter is returned only if the `IncludeAllTags` parameter is set to `True`.
   */
  tags?: ListResourcesByTagResponseBodyResourcesTags[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tags: { 'type': 'array', 'itemType': ListResourcesByTagResponseBodyResourcesTags },
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

export class ListResourcesByTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the `next query` is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the `next query` is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the `token` used to start the next query.
   * 
   * This parameter is required.
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
   * 7D61FF74-61C2-5768-B01F-05FC97F24F35
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resources.
   */
  resources?: ListResourcesByTagResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListResourcesByTagResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

