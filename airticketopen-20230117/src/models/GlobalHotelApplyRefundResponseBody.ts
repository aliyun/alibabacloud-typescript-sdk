// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelApplyRefundResponseBodyDataTotalPenaltyAmount extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 10000
   */
  amount?: string;
  /**
   * @remarks
   * The currency code in ISO 4217 format.
   * 
   * @example
   * USD
   */
  currency?: string;
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
      amount: 'Amount',
      currency: 'Currency',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
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

export class GlobalHotelApplyRefundResponseBodyDataTotalRefundAmount extends $dara.Model {
  /**
   * @remarks
   * The amount in the smallest currency unit.
   * 
   * @example
   * 10000
   */
  amount?: string;
  /**
   * @remarks
   * The currency code in ISO 4217 format.
   * 
   * @example
   * USD
   */
  currency?: string;
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
      amount: 'Amount',
      currency: 'Currency',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
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

export class GlobalHotelApplyRefundResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The after-sales refund order number.
   * 
   * @example
   * RF202606290001
   */
  refundOrderNo?: string;
  /**
   * @remarks
   * The total penalty amount.
   */
  totalPenaltyAmount?: GlobalHotelApplyRefundResponseBodyDataTotalPenaltyAmount;
  /**
   * @remarks
   * The total refund amount.
   */
  totalRefundAmount?: GlobalHotelApplyRefundResponseBodyDataTotalRefundAmount;
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
      refundOrderNo: 'RefundOrderNo',
      totalPenaltyAmount: 'TotalPenaltyAmount',
      totalRefundAmount: 'TotalRefundAmount',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundOrderNo: 'string',
      totalPenaltyAmount: GlobalHotelApplyRefundResponseBodyDataTotalPenaltyAmount,
      totalRefundAmount: GlobalHotelApplyRefundResponseBodyDataTotalRefundAmount,
      tracerId: 'string',
    };
  }

  validate() {
    if(this.totalPenaltyAmount && typeof (this.totalPenaltyAmount as any).validate === 'function') {
      (this.totalPenaltyAmount as any).validate();
    }
    if(this.totalRefundAmount && typeof (this.totalRefundAmount as any).validate === 'function') {
      (this.totalRefundAmount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelApplyRefundResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GlobalHotelApplyRefundResponseBodyData;
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
      data: GlobalHotelApplyRefundResponseBodyData,
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

