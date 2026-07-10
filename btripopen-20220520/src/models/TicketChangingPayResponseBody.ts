// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingPayResponseBodyModule extends $dara.Model {
  canRetry?: boolean;
  payPrice?: number;
  payStatus?: number;
  payTime?: string;
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      canRetry: 'can_retry',
      payPrice: 'pay_price',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      tradeNo: 'trade_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canRetry: 'boolean',
      payPrice: 'number',
      payStatus: 'number',
      payTime: 'string',
      tradeNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingPayResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TicketChangingPayResponseBodyModule;
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
      module: TicketChangingPayResponseBodyModule,
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

