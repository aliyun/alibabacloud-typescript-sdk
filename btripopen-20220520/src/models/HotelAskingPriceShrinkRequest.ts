// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelAskingPriceShrinkRequest extends $dara.Model {
  adultNum?: string;
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  checkInDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  checkOutDate?: string;
  cityCode?: string;
  cityName?: string;
  dir?: number;
  hotelStar?: string;
  isProtocol?: boolean;
  paymentType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  shidsShrink?: string;
  sortCode?: number;
  static names(): { [key: string]: string } {
    return {
      adultNum: 'adult_num',
      btripUserId: 'btrip_user_id',
      checkInDate: 'check_in_date',
      checkOutDate: 'check_out_date',
      cityCode: 'city_code',
      cityName: 'city_name',
      dir: 'dir',
      hotelStar: 'hotel_star',
      isProtocol: 'is_protocol',
      paymentType: 'payment_type',
      shidsShrink: 'shids',
      sortCode: 'sort_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultNum: 'string',
      btripUserId: 'string',
      checkInDate: 'string',
      checkOutDate: 'string',
      cityCode: 'string',
      cityName: 'string',
      dir: 'number',
      hotelStar: 'string',
      isProtocol: 'boolean',
      paymentType: 'number',
      shidsShrink: 'string',
      sortCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

