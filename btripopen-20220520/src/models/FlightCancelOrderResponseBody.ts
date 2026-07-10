// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCancelOrderResponseBodyModule extends $dara.Model {
  cancelTime?: string;
  failCode?: string;
  failReason?: string;
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
  code?: string;
  message?: string;
  module?: FlightCancelOrderResponseBodyModule;
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

