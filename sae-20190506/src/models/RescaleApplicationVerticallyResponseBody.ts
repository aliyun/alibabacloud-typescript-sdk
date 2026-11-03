// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RescaleApplicationVerticallyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the change order.
   * 
   * @example
   * ffd8cd45-2b5f-415d-b4d0-1003e80b****
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

export class RescaleApplicationVerticallyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirect.
   * - **4xx**: Client error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: RescaleApplicationVerticallyResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * None
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information about the call result.
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
   * AB521DBB-FA78-42E6-803F-A862EA4F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the instance specifications were modified. Valid values:
   * 
   * - **true**: The modification was successful.
   * - **false**: The modification failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to accurately query call information.
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

