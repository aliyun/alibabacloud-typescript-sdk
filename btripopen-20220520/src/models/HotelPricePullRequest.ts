// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelPricePullRequest extends $dara.Model {
  /**
   * @example
   * 1000
   */
  btripUserId?: string;
  /**
   * @example
   * 2022-05-15
   */
  checkIn?: string;
  /**
   * @example
   * 2022-05-15
   */
  checkOut?: string;
  /**
   * @example
   * 330100
   */
  cityCode?: number;
  hotelIds?: string[];
  /**
   * @example
   * 0
   */
  paymentType?: number;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      checkIn: 'check_in',
      checkOut: 'check_out',
      cityCode: 'city_code',
      hotelIds: 'hotel_ids',
      paymentType: 'payment_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      checkIn: 'string',
      checkOut: 'string',
      cityCode: 'number',
      hotelIds: { 'type': 'array', 'itemType': 'string' },
      paymentType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hotelIds)) {
      $dara.Model.validateArray(this.hotelIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

