// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelApplyRefundResponseBodyDataTotalPenaltyAmount extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: string;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
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
   * @example
   * 10000
   */
  amount?: string;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
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
   * @example
   * 100001
   */
  sellRefundOrderId?: number;
  totalPenaltyAmount?: GlobalHotelApplyRefundResponseBodyDataTotalPenaltyAmount;
  totalRefundAmount?: GlobalHotelApplyRefundResponseBodyDataTotalRefundAmount;
  /**
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      sellRefundOrderId: 'SellRefundOrderId',
      totalPenaltyAmount: 'TotalPenaltyAmount',
      totalRefundAmount: 'TotalRefundAmount',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sellRefundOrderId: 'number',
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
  data?: GlobalHotelApplyRefundResponseBodyData;
  /**
   * @example
   * CreateOrderFailed
   */
  errorCode?: string;
  /**
   * @example
   * 创建订单失败
   */
  errorMsg?: string;
  /**
   * @example
   * 260E4F99-983D-1919-834C-5C42E98E5B2B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

