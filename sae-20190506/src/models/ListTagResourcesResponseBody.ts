// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyDataTagResources extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * d42921c4-5433-4abd-8075-0e536f8b****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Only `application` is supported.
   * 
   * @example
   * ALIYUN::SAE::APPLICATION
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
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

export class ListTagResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination token. A single query returns up to 50 results. If the total number of results exceeds 50, a NextToken is returned. You can use this token in the next query to retrieve the remaining results.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The mapping between applications and tags.
   */
  tagResources?: ListTagResourcesResponseBodyDataTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyDataTagResources },
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

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * - **2xx**: Success.
   * - **3xx**: Redirect.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListTagResourcesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.Obviously
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information.
   * - If the request is successful, **success** is returned.
   * - If an exception occurs, a specific error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7414187F-4F59-4585-9BCF-5F0804E4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the mapping between applications and tags was successfully queried. Valid values:
   * - **true**: The query was successful.
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. You can use this ID to precisely query the call information.
   * 
   * @example
   * 0bc5f84e15916043198032146d****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTagResourcesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

