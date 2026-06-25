// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendTrafficResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A detailed description of the result.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Indicates whether the traffic was successfully removed. Valid values:
   * 
   * - **true**: The traffic was removed.
   * 
   * - **false**: The traffic was not removed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendTrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A client-side error occurred.
   * 
   * - **5xx**: A server-side error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: SuspendTrafficResponseBodyData;
  /**
   * @remarks
   * The error code. This parameter is returned only if the request fails. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, a specific error code is returned.
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
   * B4D805CA-926D-41B1-8E63-7AD0C1ED****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 0a98a02315955564772843261e****
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
      data: SuspendTrafficResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

