// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketQueryOrderResponseBodyDataOrder extends $dara.Model {
  /**
   * @example
   * 1
   */
  fundStatus?: number;
  /**
   * @example
   * 123456
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  static names(): { [key: string]: string } {
    return {
      fundStatus: 'FundStatus',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundStatus: 'number',
      orderId: 'string',
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

export class TicketQueryOrderResponseBodyDataVouchers extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  code?: string;
  /**
   * @example
   * 10
   */
  totalTimes?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * https://www.alitrip.com/1234567890.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      totalTimes: 'TotalTimes',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      totalTimes: 'number',
      type: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryOrderResponseBodyData extends $dara.Model {
  order?: TicketQueryOrderResponseBodyDataOrder;
  vouchers?: TicketQueryOrderResponseBodyDataVouchers[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      vouchers: 'Vouchers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: TicketQueryOrderResponseBodyDataOrder,
      vouchers: { 'type': 'array', 'itemType': TicketQueryOrderResponseBodyDataVouchers },
    };
  }

  validate() {
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
    }
    if(Array.isArray(this.vouchers)) {
      $dara.Model.validateArray(this.vouchers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryOrderResponseBody extends $dara.Model {
  data?: TicketQueryOrderResponseBodyData;
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
      data: TicketQueryOrderResponseBodyData,
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

