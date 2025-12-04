// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource, which is the ID of the instance.
   * 
   * @example
   * ld-bp17j28j2y7pm****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resources. The returned value is fixed to **ALIYUN::HITSDB::INSTANCE**.
   * 
   * @example
   * ALIYUN::HITSDB::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag associated with the instance.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag associated with the instance.
   * 
   * @example
   * 2.2.8
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * > If not all results are returned in the first query, this parameter is returned. You can pass in the returned value of this parameter for the next query.
   * 
   * @example
   * 212db86****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 05CB115C-91CB-529F-9098-50C1F6CB3BD3
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
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

