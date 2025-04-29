// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderChangeDetailResponseBodyModuleRoomInfoListRoomDailyRefundInfos extends $dara.Model {
  /**
   * @example
   * 2024-02-10
   */
  checkInDate?: string;
  /**
   * @example
   * 71000
   */
  penaltyPrice?: number;
  /**
   * @example
   * 71000
   */
  price?: number;
  /**
   * @example
   * 71000
   */
  refundPrice?: number;
  static names(): { [key: string]: string } {
    return {
      checkInDate: 'check_in_date',
      penaltyPrice: 'penalty_price',
      price: 'price',
      refundPrice: 'refund_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInDate: 'string',
      penaltyPrice: 'number',
      price: 'number',
      refundPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

