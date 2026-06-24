// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The resource count of TagResource resources found.
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
   * @remarks
   * The resource ID.
   * 
   * @example
   * es-cn-oew1q8bev0002****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. The value is fixed as `ALIYUN::ELASTICSEARCH::INSTANCE`.
   * 
   * @example
   * ALIYUN::ELASTICSEARCH::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
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
   * The tag resource.
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
   * The response header information. This parameter is empty and is for reference only. Do not create a dependency on this parameter in your program.
   * > This parameter is not included in the response example.
   */
  headers?: ListTagResourcesResponseBodyHeaders;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6D******
   */
  requestId?: string;
  /**
   * @remarks
   * The tag resource group.
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

