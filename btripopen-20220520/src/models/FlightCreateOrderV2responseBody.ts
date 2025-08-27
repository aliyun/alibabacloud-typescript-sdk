// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderV2ResponseBodyModule extends $dara.Model {
  asyncCreateOrderKey?: string;
  /**
   * @example
   * 2023-08-10 17:42:32
   */
  latestPayTime?: string;
  /**
   * @example
   * 1017002195798359369
   */
  orderId?: number;
  /**
   * @example
   * cheshiapi002kwl
   */
  outOrderId?: string;
  /**
   * @example
   * 32
   */
  status?: number;
  /**
   * @example
   * 51000
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: FlightCreateOrderV2ResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 210bc60a16916593445203790d2a16
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 2103ad0716827336456723986d4bda
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

