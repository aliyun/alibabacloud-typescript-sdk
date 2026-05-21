// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsResponseBodyTagResources extends $dara.Model {
  /**
   * @example
   * hgprecn-cn-0ju2uaanj001
   */
  resourceId?: string;
  /**
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @example
   * acs:rm:rgId
   */
  tagKey?: string;
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
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
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
   * @example
   * true
   */
  success?: boolean;
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

