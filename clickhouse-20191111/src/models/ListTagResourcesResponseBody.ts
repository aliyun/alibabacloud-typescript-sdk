// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of the Community-Compatible Edition cluster.
   * 
   * <props="intl">The cluster ID.
   * 
   * @example
   * cc-bp1t9lbb7a4z7****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid value: **DBCLUSTER**.
   * 
   * @example
   * DBCLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testkey1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value corresponding to the tag key.
   * 
   * @example
   * testvalue1
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
   * The token used to return more results. If not all results are returned in the current query, you can pass the NextToken value returned in the previous response to continue the query.
   * 
   * @example
   * 212db86sca4384811e0b5e8707ec21345
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 184DE106-CB2C-4DD2-B57F-396652E6C8F8
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the queried clusters and tags.
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

