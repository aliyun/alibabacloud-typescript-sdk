// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSwimmingLaneGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or the error code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status code. Value values:
   * 
   * *   If the request was successful, **ErrorCode** is not returned.
   * *   If the request failed, **ErrorCode** is returned. For more information, see **Error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * null null
   * 
   * *   null****
   * *   null
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * null
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: Valid values:
   * 
   * *   **true**: The policy was deleted.
   * *   **false**: Delete failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * null
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

