// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogConfigsResponseBodyData } from "./ListLogConfigsResponseBodyData";


export class ListLogConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the logging configurations of an application were obtained. Valid values:
   * 
   * *   **true**: indicates that the configurations were obtained.
   * *   **false**: indicates that the configurations could not be obtained.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The logging configurations.
   */
  data?: ListLogConfigsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: indicates that the request was successful.
   * *   **3xx**: indicates that the request was redirected.
   * *   **4xx**: indicates that the request was invalid.
   * *   **5xx**: indicates that a server error occurred.
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the trace. It can be used to query the details of a request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * *   **success** is returned when the request succeeds.
   * *   An error code is returned when the request fails.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The logging configurations.
   * 
   * @example
   * ac1d5e2c15671581252413581d****
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
      data: ListLogConfigsResponseBodyData,
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

