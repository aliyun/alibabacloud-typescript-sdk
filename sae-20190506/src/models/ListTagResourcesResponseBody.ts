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
   * The type of the resource. Valid value: `application`.
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
   * A maximum of 50 entries can be returned for a query. If a query generates more than 50 entries, the NextToken parameter is returned with the first 50 entries. You can use the NextToken parameter value to retrieve the subsequent entries that are not returned in the current query result.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The mapping relationships between applications and tags.
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
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
   * The error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   An error code: If the call fails, an error code is returned.
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
   * Indicates whether the mapping relationships between applications and tags were queried. Valid values:
   * 
   * *   **true**: The mapping relationships were queried.
   * *   **false**: The mapping relationships failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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

