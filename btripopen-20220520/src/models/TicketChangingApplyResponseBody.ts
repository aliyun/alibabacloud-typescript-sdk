// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingApplyResponseBodyModule extends $dara.Model {
  bookingChangedTotalFee?: number;
  bookingOriginTotalFee?: number;
  bookingPriceChanged?: boolean;
  btripOrderId?: number;
  btripSubOrderId?: number;
  canPay?: boolean;
  changeFee?: number;
  deadlineTime?: string;
  disOrderId?: string;
  disSubOrderId?: string;
  maxRetryTimes?: number;
  nextRetryInterval?: number;
  retry?: boolean;
  retryClientTips?: string;
  status?: number;
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      bookingChangedTotalFee: 'booking_changed_total_fee',
      bookingOriginTotalFee: 'booking_origin_total_fee',
      bookingPriceChanged: 'booking_price_changed',
      btripOrderId: 'btrip_order_id',
      btripSubOrderId: 'btrip_sub_order_id',
      canPay: 'can_pay',
      changeFee: 'change_fee',
      deadlineTime: 'deadline_time',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      maxRetryTimes: 'max_retry_times',
      nextRetryInterval: 'next_retry_interval',
      retry: 'retry',
      retryClientTips: 'retry_client_tips',
      status: 'status',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookingChangedTotalFee: 'number',
      bookingOriginTotalFee: 'number',
      bookingPriceChanged: 'boolean',
      btripOrderId: 'number',
      btripSubOrderId: 'number',
      canPay: 'boolean',
      changeFee: 'number',
      deadlineTime: 'string',
      disOrderId: 'string',
      disSubOrderId: 'string',
      maxRetryTimes: 'number',
      nextRetryInterval: 'number',
      retry: 'boolean',
      retryClientTips: 'string',
      status: 'number',
      upgradeFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketChangingApplyResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TicketChangingApplyResponseBodyModule;
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
      module: TicketChangingApplyResponseBodyModule,
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

