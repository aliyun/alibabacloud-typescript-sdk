// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyDataTagResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * d42921c4-5433-4abd-8075-0e536f8b****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. The value is fixed as `application`.
   * 
   * @example
   * ALIYUN::SAE::APPLICATION
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The token that is used to retrieve the next page of results. A query returns a maximum of 50 results. If the results are truncated, you can use this token in a subsequent request to retrieve the next page of results.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of tags and their associated resources.
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
   * The HTTP status code.
   * 
   * - **2xx** indicates that the request was successful.
   * 
   * - **3xx** indicates that the request was redirected.
   * 
   * - **4xx** indicates that a client-side error occurred.
   * 
   * - **5xx** indicates that a server-side error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListTagResourcesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is returned only if the request fails.
   * 
   * - For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, an error message is returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of a request.
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

