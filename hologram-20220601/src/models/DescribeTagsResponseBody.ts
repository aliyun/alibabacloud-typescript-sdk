// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgprecn-cn-0ju2uaanj001
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * acs:rm:rgId
   */
  tagKey?: string;
  /**
   * @remarks
   * The collection of all tag values under the same tag key.
   */
  tagValue?: string[];
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
      tagValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValue)) {
      $dara.Model.validateArray(this.tagValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 14E2358E-0499-509E-8E22-CA30EC474A9A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful, regardless of the business result.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The resource collection.
   */
  tagResources?: DescribeTagsResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResources: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTagResources },
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

