// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderCancelResponseBodyModule extends $dara.Model {
  changeOrderId?: string;
  orderId?: string;
  outChangeOrderId?: string;
  outOrderId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'change_order_id',
      orderId: 'order_id',
      outChangeOrderId: 'out_change_order_id',
      outOrderId: 'out_order_id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      orderId: 'string',
      outChangeOrderId: 'string',
      outOrderId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainOrderCancelResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TrainOrderCancelResponseBodyModule;
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
      module: TrainOrderCancelResponseBodyModule,
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

