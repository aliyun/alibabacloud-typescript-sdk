// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RescaleApplicationVerticallyResponseBodyData } from "./RescaleApplicationVerticallyResponseBodyData";


export class RescaleApplicationVerticallyResponseBody extends $dara.Model {
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
   * Data returned.
   */
  data?: RescaleApplicationVerticallyResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * Null
   */
  errorCode?: string;
  /**
   * @remarks
   * Messages returned for additional information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AB521DBB-FA78-42E6-803F-A862EA4F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the update of instance specifications was successful. Valid values:
   * 
   * *   **true**: Updated.
   * *   **false**: Failed to update.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Trace ID for request information.
   * 
   * @example
   * 0bc3b6f315637273629117900d****
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
      data: RescaleApplicationVerticallyResponseBodyData,
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

