// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or a POP error code.
   * 
   * - **2xx**: Success.
   * 
   * - **3xx**: Redirection.
   * 
   * - **4xx**: Request error.
   * 
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * manual-3db7a8fa-5d40-4edc-92e4-49d50eab****
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, an error code is returned.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Whether the job was successfully executed.
   * 
   * - **true**: The execution was successful.
   * 
   * - **false**: The execution failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      msg: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or a POP error code.
   * 
   * - **2xx**: Success.
   * 
   * - **3xx**: Redirection.
   * 
   * - **4xx**: Request error.
   * 
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
  data?: ExecJobResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is omitted for successful requests.
   * 
   * - This parameter is included for failed requests. For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, an error code is returned.
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
   * 67DD9A98-9CCC-5BE8-8C9E-B45E72F4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID for retrieving detailed information about the call.
   * 
   * @example
   * 0b87b7e716575071334387401e****
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
      data: ExecJobResponseBodyData,
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

