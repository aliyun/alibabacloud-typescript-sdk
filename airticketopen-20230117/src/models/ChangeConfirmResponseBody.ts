// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeConfirmResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The payment amount for the flight change.
   * 
   * @example
   * 30
   */
  payAmount?: number;
  /**
   * @example
   * 1756797933000
   */
  payTime?: number;
  /**
   * @remarks
   * The payment transaction number for the flight change.
   * 
   * @example
   * hkduendkd-2023-dj0
   */
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      payAmount: 'pay_amount',
      payTime: 'pay_time',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payAmount: 'number',
      payTime: 'number',
      transactionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeConfirmResponseBody extends $dara.Model {
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned for a successful request.
   */
  data?: ChangeConfirmResponseBodyData;
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The data returned for a failed request.
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code. The value is always 200 for successful requests.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeConfirmResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
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

