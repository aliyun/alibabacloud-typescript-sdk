// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPreValidateResponseBodyModuleRatePlanDaily extends $dara.Model {
  board?: string;
  discountPrice?: string;
  maxBookingNum?: number;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 2023-01-19
   */
  rateStartTime?: string;
  /**
   * @example
   * 1
   */
  roomCount?: number;
  roundingDiscountPrice?: string;
  roundingPrice?: string;
  /**
   * @example
   * 100
   */
  serviceFee?: number;
  static names(): { [key: string]: string } {
    return {
      board: 'board',
      discountPrice: 'discount_price',
      maxBookingNum: 'max_booking_num',
      price: 'price',
      rateStartTime: 'rate_start_time',
      roomCount: 'room_count',
      roundingDiscountPrice: 'rounding_discount_price',
      roundingPrice: 'rounding_price',
      serviceFee: 'service_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      board: 'string',
      discountPrice: 'string',
      maxBookingNum: 'number',
      price: 'number',
      rateStartTime: 'string',
      roomCount: 'number',
      roundingDiscountPrice: 'string',
      roundingPrice: 'string',
      serviceFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

