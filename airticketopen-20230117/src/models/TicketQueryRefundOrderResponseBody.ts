// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketQueryRefundOrderResponseBodyDataRefundOrders extends $dara.Model {
  /**
   * @example
   * 1
   */
  fundStatus?: number;
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  static names(): { [key: string]: string } {
    return {
      fundStatus: 'FundStatus',
      orderStatus: 'OrderStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundStatus: 'number',
      orderStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryRefundOrderResponseBodyData extends $dara.Model {
  refundOrders?: TicketQueryRefundOrderResponseBodyDataRefundOrders[];
  static names(): { [key: string]: string } {
    return {
      refundOrders: 'RefundOrders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundOrders: { 'type': 'array', 'itemType': TicketQueryRefundOrderResponseBodyDataRefundOrders },
    };
  }

  validate() {
    if(Array.isArray(this.refundOrders)) {
      $dara.Model.validateArray(this.refundOrders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryRefundOrderResponseBody extends $dara.Model {
  data?: TicketQueryRefundOrderResponseBodyData;
  /**
   * @example
   * DistributorOrderIdInvalid
   */
  errorCode?: string;
  /**
   * @example
   * 分销商订单号不合法
   */
  errorMsg?: string;
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TicketQueryRefundOrderResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
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

