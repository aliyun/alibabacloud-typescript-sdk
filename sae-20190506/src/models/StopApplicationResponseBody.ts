// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopApplicationResponseBodyData extends $dara.Model {
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

export class StopApplicationResponseBody extends $dara.Model {
  /**
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
  data?: StopApplicationResponseBodyData;
  /**
   * @remarks
   * Indicates whether the specified application is stopped. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The ID of the trace. It can be used to query the details of a request.
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
   * The ID of the change order.
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
      data: StopApplicationResponseBodyData,
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

