// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID, which is the instance ID.
   * 
   * @example
   * ld-bp17j28j2y7pm****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. The value is fixed as **ALIYUN::HITSDB::INSTANCE**.
   * 
   * @example
   * ALIYUN::HITSDB::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
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
   * The token that is used to start the next query.
   * 
   * > This parameter is returned if a query does not return all results. You can pass the value of this parameter in a subsequent query to continue the query.
   * 
   * @example
   * 212db86****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
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

