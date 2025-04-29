// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelAskingPriceRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  adultNum?: string;
  /**
   * @example
   * 1000
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-02-22 00:00:00
   */
  checkInDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-02-22 00:00:00
   */
  checkOutDate?: string;
  /**
   * @example
   * 330100
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 1
   */
  dir?: number;
  /**
   * @example
   * 1
   */
  hotelStar?: string;
  /**
   * @example
   * true
   */
  isProtocol?: boolean;
  /**
   * @example
   * 0
   */
  paymentType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  shids?: number[];
  /**
   * @example
   * 0
   */
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
      shids: 'shids',
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
      shids: { 'type': 'array', 'itemType': 'number' },
      sortCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.shids)) {
      $dara.Model.validateArray(this.shids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

