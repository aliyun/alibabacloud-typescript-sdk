// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelCreateAndPayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The sales order number.
   * 
   * @example
   * SO202606290001
   */
  orderNo?: string;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      orderNo: 'OrderNo',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNo: 'string',
      tracerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelCreateAndPayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GlobalHotelCreateAndPayResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * CreateOrderFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to create order
   */
  errorMsg?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 260E4F99-983D-1919-834C-5C42E98E5B2B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GlobalHotelCreateAndPayResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      tracerId: 'string',
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

