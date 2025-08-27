// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCancelOrderResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  cancelTime?: string;
  failCode?: string;
  failReason?: string;
  /**
   * @example
   * 0
   */
  orderStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cancelTime: 'cancel_time',
      failCode: 'fail_code',
      failReason: 'fail_reason',
      orderStatus: 'order_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelTime: 'string',
      failCode: 'string',
      failReason: 'string',
      orderStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCancelOrderResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: FlightCancelOrderResponseBodyModule;
  /**
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
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
      module: FlightCancelOrderResponseBodyModule,
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

