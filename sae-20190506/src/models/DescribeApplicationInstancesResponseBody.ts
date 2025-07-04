// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationInstancesResponseBodyData } from "./DescribeApplicationInstancesResponseBodyData";


export class DescribeApplicationInstancesResponseBody extends $dara.Model {
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
   * The details of the application instance.
   */
  data?: DescribeApplicationInstancesResponseBodyData;
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
   * Indicates whether the list of application instances was obtained. Valid values:
   * 
   * *   **true**: indicates that the list was obtained.
   * *   **false**: indicates that the list could not be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. It is used to query the details of a request.
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
      data: DescribeApplicationInstancesResponseBodyData,
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

