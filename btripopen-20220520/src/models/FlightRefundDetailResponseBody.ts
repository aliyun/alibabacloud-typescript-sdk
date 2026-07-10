// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundDetailResponseBodyModuleRefundFeeList extends $dara.Model {
  alipayTradeNo?: string;
  refundFee?: number;
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
  btripOrderId?: number;
  btripSubOrderId?: number;
  disOrderId?: string;
  disSubOrderId?: string;
  isVoluntary?: number;
  reason?: string;
  refundFee?: number;
  refundFeeList?: FlightRefundDetailResponseBodyModuleRefundFeeList[];
  refundPrice?: number;
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
  code?: string;
  message?: string;
  module?: FlightRefundDetailResponseBodyModule;
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

