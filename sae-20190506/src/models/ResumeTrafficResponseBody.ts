// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeTrafficResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Details about the operation\\"s result.
   * 
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @remarks
   * Indicates whether the traffic was resumed.
   * 
   * - **True**: The traffic was resumed.
   * 
   * - **False**: The traffic was not resumed.
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

export class ResumeTrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: Redirection.
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
   * The returned results.
   */
  data?: ResumeTrafficResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is empty if the request is successful.
   * 
   * - If the request fails, this parameter contains an error code. For more information, see the "**Error codes**" section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the traffic was resumed. **True** indicates that the traffic was resumed, and **False** indicates that the traffic was not resumed.
   * 
   * @example
   * True
   */
  success?: string;
  /**
   * @remarks
   * The trace ID of the request. You can use this ID to troubleshoot the request.
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

