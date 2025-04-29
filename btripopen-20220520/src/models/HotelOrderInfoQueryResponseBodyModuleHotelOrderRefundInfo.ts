// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderInfoQueryResponseBodyModuleHotelOrderRefundInfo extends $dara.Model {
  /**
   * @example
   * 1000
   */
  cancelFine?: number;
  /**
   * @example
   * 1000000002578096
   */
  refundApplyId?: number;
  /**
   * @example
   * 1721702353700
   */
  refundEndTime?: number;
  /**
   * @example
   * 34000
   */
  refundPrice?: number;
  refundReason?: string;
  /**
   * @example
   * 1721702353700
   */
  refundStartTime?: number;
  /**
   * @example
   * 5
   */
  refundType?: number;
  static names(): { [key: string]: string } {
    return {
      cancelFine: 'cancel_fine',
      refundApplyId: 'refund_apply_id',
      refundEndTime: 'refund_end_time',
      refundPrice: 'refund_price',
      refundReason: 'refund_reason',
      refundStartTime: 'refund_start_time',
      refundType: 'refund_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelFine: 'number',
      refundApplyId: 'number',
      refundEndTime: 'number',
      refundPrice: 'number',
      refundReason: 'string',
      refundStartTime: 'number',
      refundType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

