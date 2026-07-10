// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightPayOrderResponseBodyModule extends $dara.Model {
  actualPayPrice?: number;
  alipayTradeNo?: string;
  lastPayTime?: string;
  payStatus?: number;
  static names(): { [key: string]: string } {
    return {
      actualPayPrice: 'actual_pay_price',
      alipayTradeNo: 'alipay_trade_no',
      lastPayTime: 'last_pay_time',
      payStatus: 'pay_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualPayPrice: 'number',
      alipayTradeNo: 'string',
      lastPayTime: 'string',
      payStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightPayOrderResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: FlightPayOrderResponseBodyModule;
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
      module: FlightPayOrderResponseBodyModule,
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

