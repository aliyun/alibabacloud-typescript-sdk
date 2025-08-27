// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingPayResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  canRetry?: boolean;
  /**
   * @example
   * 1000
   */
  payPrice?: number;
  payStatus?: number;
  /**
   * @example
   * 0000-00-00 00:00:00
   */
  payTime?: string;
  /**
   * @example
   * 23098276578908765
   */
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
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: TicketChangingPayResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
   */
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

