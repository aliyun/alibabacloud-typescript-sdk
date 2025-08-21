// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 10
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @example
   * es-cn-oew1q8bev0002****
   */
  resourceId?: string;
  /**
   * @example
   * ALIYUN::ELASTICSEARCH::INSTANCE
   */
  resourceType?: string;
  /**
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * dev
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
  /**
   * @remarks
   * Indicates the ID of a resource.
   */
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
   * @remarks
   * The labels of the resource.
   */
  headers?: ListTagResourcesResponseBodyHeaders;
  /**
   * @remarks
   * The number of resources to query.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of resources that have tags.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6D******
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the resource. Fixed to `ALIYUN::ELASTICSEARCH::INSTANCE`.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListTagResourcesResponseBodyHeaders,
      pageSize: 'number',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

