// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIngressResponseBodyData } from "./DescribeIngressResponseBodyData";


export class DescribeIngressResponseBody extends $dara.Model {
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
   * The result returned.
   */
  data?: DescribeIngressResponseBodyData;
  /**
   * @remarks
   * The error codes. Valid values:
   * 
   * *   **ErrorCode** is not returned if a request is successful.
   * *   **ErrorCode** is returned if a request failed. For more information, see **Error code** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned. Valid values:
   * 
   * *   **success** is returned when a request is successful.
   * *   An error code is returned when the request failed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of a request.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the configurations of Ingresses were queried successfully. Valid values:
   * 
   * *   **true**: The information was queried.
   * *   **false**: The information failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of a trace. The ID is used to query the details of a request.
   * 
   * @example
   * 0a981dd515966966104121683d****
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
      data: DescribeIngressResponseBodyData,
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

