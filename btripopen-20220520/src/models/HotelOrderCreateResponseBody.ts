// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderCreateResponseBodyModule extends $dara.Model {
  btripOrderId?: number;
  paymentNo?: string;
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      btripOrderId: 'btrip_order_id',
      paymentNo: 'payment_no',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripOrderId: 'number',
      paymentNo: 'string',
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

export class HotelOrderCreateResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: HotelOrderCreateResponseBodyModule;
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
      module: HotelOrderCreateResponseBodyModule,
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

