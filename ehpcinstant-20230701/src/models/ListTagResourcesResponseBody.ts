// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @example
   * job-xxxxxxxx
   */
  resourceId?: string;
  /**
   * @example
   * Job
   */
  resourceType?: string;
  /**
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @example
   * TestValue
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 1d2db86scXXXXXXXXXX
   */
  nextToken?: string;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
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
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

