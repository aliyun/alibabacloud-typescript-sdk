// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingApplyResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1000
   */
  bookingChangedTotalFee?: number;
  /**
   * @example
   * 1000
   */
  bookingOriginTotalFee?: number;
  /**
   * @example
   * true
   */
  bookingPriceChanged?: boolean;
  /**
   * @example
   * 1234
   */
  btripOrderId?: number;
  /**
   * @example
   * 1234
   */
  btripSubOrderId?: number;
  /**
   * @example
   * true
   */
  canPay?: boolean;
  /**
   * @example
   * 1000
   */
  changeFee?: number;
  /**
   * @example
   * 0000-00-00 00:00:00
   */
  deadlineTime?: string;
  /**
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @example
   * mid112
   */
  disSubOrderId?: string;
  /**
   * @example
   * 1
   */
  maxRetryTimes?: number;
  /**
   * @example
   * 1000
   */
  nextRetryInterval?: number;
  /**
   * @example
   * true
   */
  retry?: boolean;
  retryClientTips?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1000
   */
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

