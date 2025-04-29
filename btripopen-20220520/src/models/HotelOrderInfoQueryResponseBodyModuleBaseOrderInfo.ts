// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderInfoQueryResponseBodyModuleBaseOrderInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  bookMode?: string;
  /**
   * @example
   * 1430378
   */
  bookerId?: string;
  bookerName?: string;
  /**
   * @example
   * btripkvxtn1321g49wtul
   */
  btripCorpId?: string;
  /**
   * @example
   * 2
   */
  category?: number;
  /**
   * @example
   * 1721145600000
   */
  checkInTime?: number;
  /**
   * @example
   * 1721145600000
   */
  checkOutTime?: number;
  /**
   * @example
   * true
   */
  isAgreementPrice?: boolean;
  /**
   * @example
   * 4
   */
  nights?: number;
  /**
   * @example
   * 1721145600000
   */
  orderCreateTime?: number;
  /**
   * @example
   * 1012053198307958626
   */
  orderId?: number;
  /**
   * @example
   * 2
   */
  orderStatus?: number;
  orderStatusDesc?: string;
  /**
   * @example
   * 1
   */
  payStatus?: number;
  /**
   * @example
   * 1721145600000
   */
  payTime?: number;
  /**
   * @example
   * 2
   */
  roomNum?: number;
  /**
   * @example
   * 4
   */
  settleType?: number;
  /**
   * @example
   * 1
   */
  tripMode?: number;
  static names(): { [key: string]: string } {
    return {
      bookMode: 'book_mode',
      bookerId: 'booker_id',
      bookerName: 'booker_name',
      btripCorpId: 'btrip_corp_id',
      category: 'category',
      checkInTime: 'check_in_time',
      checkOutTime: 'check_out_time',
      isAgreementPrice: 'is_agreement_price',
      nights: 'nights',
      orderCreateTime: 'order_create_time',
      orderId: 'order_id',
      orderStatus: 'order_status',
      orderStatusDesc: 'order_status_desc',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      roomNum: 'room_num',
      settleType: 'settle_type',
      tripMode: 'trip_mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookMode: 'string',
      bookerId: 'string',
      bookerName: 'string',
      btripCorpId: 'string',
      category: 'number',
      checkInTime: 'number',
      checkOutTime: 'number',
      isAgreementPrice: 'boolean',
      nights: 'number',
      orderCreateTime: 'number',
      orderId: 'number',
      orderStatus: 'number',
      orderStatusDesc: 'string',
      payStatus: 'number',
      payTime: 'number',
      roomNum: 'number',
      settleType: 'number',
      tripMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

