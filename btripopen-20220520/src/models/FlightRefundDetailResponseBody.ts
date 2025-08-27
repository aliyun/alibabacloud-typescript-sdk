// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundDetailResponseBodyModuleRefundFeeList extends $dara.Model {
  /**
   * @example
   * 293982882881999
   */
  alipayTradeNo?: string;
  /**
   * @example
   * 100
   */
  refundFee?: number;
  /**
   * @example
   * 100
   */
  refundPrice?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      refundFee: 'refund_fee',
      refundPrice: 'refund_price',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      refundFee: 'number',
      refundPrice: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundDetailResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 123
   */
  btripOrderId?: number;
  /**
   * @example
   * 123
   */
  btripSubOrderId?: number;
  /**
   * @example
   * dis1234
   */
  disOrderId?: string;
  /**
   * @example
   * refun123
   */
  disSubOrderId?: string;
  /**
   * @example
   * 1
   */
  isVoluntary?: number;
  reason?: string;
  /**
   * @example
   * 100
   */
  refundFee?: number;
  refundFeeList?: FlightRefundDetailResponseBodyModuleRefundFeeList[];
  /**
   * @example
   * 100
   */
  refundPrice?: number;
  /**
   * @example
   * 0
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      btripOrderId: 'btrip_order_id',
      btripSubOrderId: 'btrip_sub_order_id',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      isVoluntary: 'is_voluntary',
      reason: 'reason',
      refundFee: 'refund_fee',
      refundFeeList: 'refund_fee_list',
      refundPrice: 'refund_price',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripOrderId: 'number',
      btripSubOrderId: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      isVoluntary: 'number',
      reason: 'string',
      refundFee: 'number',
      refundFeeList: { 'type': 'array', 'itemType': FlightRefundDetailResponseBodyModuleRefundFeeList },
      refundPrice: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundFeeList)) {
      $dara.Model.validateArray(this.refundFeeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightRefundDetailResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: FlightRefundDetailResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
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
      module: FlightRefundDetailResponseBodyModule,
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

