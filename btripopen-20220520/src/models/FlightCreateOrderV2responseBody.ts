// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderV2ResponseBodyModule extends $dara.Model {
  asyncCreateOrderKey?: string;
  latestPayTime?: string;
  orderId?: number;
  outOrderId?: string;
  status?: number;
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      asyncCreateOrderKey: 'async_create_order_key',
      latestPayTime: 'latest_pay_time',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      status: 'status',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncCreateOrderKey: 'string',
      latestPayTime: 'string',
      orderId: 'number',
      outOrderId: 'string',
      status: 'number',
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

export class FlightCreateOrderV2ResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: FlightCreateOrderV2ResponseBodyModule;
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
      module: FlightCreateOrderV2ResponseBodyModule,
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

