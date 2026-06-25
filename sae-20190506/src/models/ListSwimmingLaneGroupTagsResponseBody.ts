// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSwimmingLaneGroupTagsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {\\"tag\\":\\"g1\\",\\"priority\\":100,\\"type\\":\\"tag\\",\\"desc\\":\\"sys-label\\"}
   */
  metadata?: string;
  /**
   * @remarks
   * The swimming lane tag.
   * 
   * @example
   * g1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGroupTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A client error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListSwimmingLaneGroupTagsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request succeeds.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
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
   * 30375C38-F4ED-4135-A0AE-5C75DC7F****
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
   * ac1a0b2215622920113732501e****
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
      data: { 'type': 'array', 'itemType': ListSwimmingLaneGroupTagsResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

