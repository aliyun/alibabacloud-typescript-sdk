// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderInfoQueryResponseBodyModuleHotelOrderFeeInfo extends $dara.Model {
  /**
   * @example
   * 35000
   */
  orderAmount?: number;
  /**
   * @example
   * 0
   */
  otherFee?: number;
  /**
   * @example
   * 35000
   */
  payAmount?: number;
  /**
   * @example
   * 5000
   */
  promotionAmount?: number;
  /**
   * @example
   * 35000
   */
  totalRoomAmount?: number;
  static names(): { [key: string]: string } {
    return {
      orderAmount: 'order_amount',
      otherFee: 'other_fee',
      payAmount: 'pay_amount',
      promotionAmount: 'promotion_amount',
      totalRoomAmount: 'total_room_amount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderAmount: 'number',
      otherFee: 'number',
      payAmount: 'number',
      promotionAmount: 'number',
      totalRoomAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

