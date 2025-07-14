// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchStartApplicationsResponseBodyData extends $dara.Model {
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
   * 01db03d3-3ee9-48b3-b3d0-dfce2d88****
   */
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Take note of the following rules:
   * 
   * - **2xx**: The call was successful.
   * - **3xx**: The call was redirected.
   * - **4xx**: The call failed.
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error code.
   * 
   * *   If the request is successful, this parameter is not returned.****
   * *   This parameter is returned only if the request failed.**** For more information, see **Error codes** in this topic.
   */
  data?: BatchStartApplicationsResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed. Take note of the following rules:
   * 
   * - The ErrorCode parameter is not returned if the request succeeds.
   * - If the call fails, the ErrorCode parameter is returned. For more information, see the "Error codes" section of this topic.
   * 
   * @example
   * NULL
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the trace. It is used to query the details of a request.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application deployment is successful. Take note of the following rules:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the change order.
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
      data: BatchStartApplicationsResponseBodyData,
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

