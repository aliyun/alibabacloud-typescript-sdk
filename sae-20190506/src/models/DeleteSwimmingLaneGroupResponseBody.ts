// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSwimmingLaneGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A request error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error code. This parameter is returned only if the request fails. For more information, see the **Error codes** section of this topic.
   * 
   * - If the request is successful, the **ErrorCode** field is not returned.
   * 
   * - A failed request returns the **ErrorCode** field. For more information, see the **error code** list in this article.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * - **success** is returned for a successful request.
   * 
   * - An error code is returned for a failed request.
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The swimming lane group was successfully deleted.
   * 
   * - **false**: The swimming lane group was not deleted.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. Use this ID to query the details of a call.
   * 
   * @example
   * ac1a0b2215622920113732501e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
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
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

