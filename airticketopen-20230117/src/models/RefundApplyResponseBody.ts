// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundApplyResponseBodyDataRefundResultsRefundPassengers extends $dara.Model {
  /**
   * @remarks
   * credential number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyResponseBodyDataRefundResults extends $dara.Model {
  /**
   * @remarks
   * reason for refund application failure
   * 
   * @example
   * desc reason
   */
  failReason?: string;
  /**
   * @remarks
   * refund order number
   * 
   * @example
   * 4966***617202
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * passengers of current refund order
   */
  refundPassengers?: RefundApplyResponseBodyDataRefundResultsRefundPassengers[];
  /**
   * @remarks
   * refund order status 
   * 
   * 0: refund order created successfully
   * 
   * 1: refund order creation failed
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      failReason: 'fail_reason',
      refundOrderNum: 'refund_order_num',
      refundPassengers: 'refund_passengers',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      refundOrderNum: 'number',
      refundPassengers: { 'type': 'array', 'itemType': RefundApplyResponseBodyDataRefundResultsRefundPassengers },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.refundPassengers)) {
      $dara.Model.validateArray(this.refundPassengers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * order number
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * refund results
   */
  refundResults?: RefundApplyResponseBodyDataRefundResults[];
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      refundResults: 'refund_results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      refundResults: { 'type': 'array', 'itemType': RefundApplyResponseBodyDataRefundResults },
    };
  }

  validate() {
    if(Array.isArray(this.refundResults)) {
      $dara.Model.validateArray(this.refundResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundApplyResponseBody extends $dara.Model {
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: RefundApplyResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
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
      data: RefundApplyResponseBodyData,
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

