// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSwimmingLaneEnableAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The interface status or POP error code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: Redirection.
   * *   **4xx**: Request error.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Error code. Valid values:
   * 
   * *   If the request is successful, no **ErrorCode** fields are returned.
   * *   Request failed: **ErrorCode** fields are returned. For more information, see **Error codes**.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information. Valid values:
   * 
   * *   The error message returned because the request is normal and **success** is returned.
   * *   If the request is abnormal, the specific exception error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the data is successful. Valid values:
   * 
   * *   **true**: The policy was deleted.
   * *   **false**: The policy failed to be deleted.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. This parameter is used to query the exact call information.
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

