// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceByTagResponseBodyTagResourceTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 10
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

export class QueryInstanceByTagResponseBodyTagResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * spn-xxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. The returned resource type indicates a savings plan instance.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: QueryInstanceByTagResponseBodyTagResourceTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': QueryInstanceByTagResponseBodyTagResourceTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * param is null
   */
  message?: string;
  /**
   * @remarks
   * The token that determines the start point of the query. The return value is the value of the NextToken response parameter that was returned last time the QueryInstanceByTag operation was called.
   * 
   * @example
   * CAESEgoQCg4KCm
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9EC6C0B7-3397-5FAE-9915-8972CDDB1211
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The instances returned.
   */
  tagResource?: QueryInstanceByTagResponseBodyTagResource[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResource: { 'type': 'array', 'itemType': QueryInstanceByTagResponseBodyTagResource },
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

