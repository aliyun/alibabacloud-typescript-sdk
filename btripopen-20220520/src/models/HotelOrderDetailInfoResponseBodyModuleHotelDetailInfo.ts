// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderDetailInfoResponseBodyModuleHotelDetailInfo extends $dara.Model {
  address?: string;
  cityName?: string;
  hotelName?: string;
  /**
   * @example
   * 0571-87217
   */
  hotelTel?: string;
  /**
   * @example
   * 2198781
   */
  shid?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityName: 'city_name',
      hotelName: 'hotel_name',
      hotelTel: 'hotel_tel',
      shid: 'shid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityName: 'string',
      hotelName: 'string',
      hotelTel: 'string',
      shid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

