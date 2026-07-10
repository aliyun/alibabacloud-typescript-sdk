// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderResponseBodyModule extends $dara.Model {
  alipayTradeNo?: string;
  btripOrderId?: number;
  disOrderId?: string;
  lastPayTime?: string;
  orderStatus?: number;
  payStatus?: number;
  paymentPrice?: number;
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      btripOrderId: 'btrip_order_id',
      disOrderId: 'dis_order_id',
      lastPayTime: 'last_pay_time',
      orderStatus: 'order_status',
      payStatus: 'pay_status',
      paymentPrice: 'payment_price',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      btripOrderId: 'number',
      disOrderId: 'string',
      lastPayTime: 'string',
      orderStatus: 'number',
      payStatus: 'number',
      paymentPrice: 'number',
      totalPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: FlightCreateOrderResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: FlightCreateOrderResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

