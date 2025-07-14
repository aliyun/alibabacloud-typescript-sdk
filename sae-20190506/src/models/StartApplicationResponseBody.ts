// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the change order.
   * 
   * @example
   * 4a815998-b468-4bea-b7d8-59f52a44****
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

export class StartApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: StartApplicationResponseBodyData;
  /**
   * @remarks
   * The error code returned. Take note of the following rules:
   * 
   * *   If the call is successful, **ErrorCode** is not returned.
   * *   If the call fails, **ErrorCode** is returned. For more information, see the "**Error codes**" section in this topic.
   * 
   * @example
   * Null
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Take note of the following rules:
   * 
   * *   If the call is successful, **success** is returned.
   * *   If the call fails, an error code is returned.
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
   * 7BD8F4C7-D84C-4D46-9885-8212997E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application is started. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
   * 
   * @example
   * 0bc3b6e215637275918588187d****
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
      data: StartApplicationResponseBodyData,
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

