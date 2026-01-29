// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeTrafficResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the returned code.
   * 
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @remarks
   * Indicates whether the traffic was removed. Valid values:
   * *   **true**: The traffic was removed.
   * *   **false**: The traffic failed to be removed.
   * 
   * @example
   * true
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

export class ResumeTrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
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
   * The returned results.
   */
  data?: ResumeTrafficResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   If the request is successful, **success** is returned.
   * *   If the request fails, a specific error code is returned.
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
   * *   **True**: The traffic was resumed.
   * *   **False**: The traffic failed to be resumed.
   * 
   * @example
   * True
   */
  success?: string;
  /**
   * @remarks
   * The trace ID.
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
      data: ResumeTrafficResponseBodyData,
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

