// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the API call or a POP error code. Valid values:
   * 
   * - **2xx**: success.
   * 
   * - **3xx**: redirection.
   * 
   * - **4xx**: request error.
   * 
   * - **5xx**: server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error code. The following rules apply:
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the list of **error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information. The following values may be returned:
   * 
   * - **success** is returned if the request is normal.
   * 
   * - A specific error code is returned if the request is abnormal.
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
   * Indicates whether the Auto Scaling policy was successfully deleted. Valid values:
   * 
   * - **true**: The deletion was successful.
   * 
   * - **false**: The deletion failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. You can use this ID to query the details of a call.
   * 
   * @example
   * 0a98a02315955564772843261e****
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

