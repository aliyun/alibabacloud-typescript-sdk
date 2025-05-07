// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryResourceStaticsResponseBodyData } from "./QueryResourceStaticsResponseBodyData";


export class QueryResourceStaticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: indicates that the request was successful.
   * *   **3xx**: indicates that the request was redirected.
   * *   **4xx**: indicates that the request was invalid.
   * *   **5xx**: indicates that a server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The resource usage.
   */
  data?: QueryResourceStaticsResponseBodyData;
  /**
   * @remarks
   * The error code. 
   * 
   * - The **ErrorCode** parameter is not returned when the request succeeds.
   * - The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * *   **success** is returned when the request succeeds.
   * *   An error code is returned when the request fails.
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
   * 7CCF7092-72CA-4431-90D6-C7D98752****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the resource usage of an application was obtained. Valid values:
   * 
   * *   **true**: indicates that the resource usage was obtained.
   * *   **false**: indicates that the resource usage could not be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. It can be used to query the details of a request.
   * 
   * @example
   * ac1a08a015623098794277264e****
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
      data: QueryResourceStaticsResponseBodyData,
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

