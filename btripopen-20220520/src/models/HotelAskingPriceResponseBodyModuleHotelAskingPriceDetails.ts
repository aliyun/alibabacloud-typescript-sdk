// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelAskingPriceResponseBodyModuleHotelAskingPriceDetails extends $dara.Model {
  /**
   * @example
   * 652302
   */
  cityCode?: string;
  hotelAddress?: string;
  /**
   * @example
   * 55335212
   */
  hotelCode?: string;
  hotelName?: string;
  /**
   * @example
   * true
   */
  isProtocol?: boolean;
  /**
   * @example
   * 100
   */
  minPrice?: number;
  /**
   * @example
   * 100
   */
  originalMinPrice?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      hotelAddress: 'hotel_address',
      hotelCode: 'hotel_code',
      hotelName: 'hotel_name',
      isProtocol: 'is_protocol',
      minPrice: 'min_price',
      originalMinPrice: 'original_min_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      hotelAddress: 'string',
      hotelCode: 'string',
      hotelName: 'string',
      isProtocol: 'boolean',
      minPrice: 'number',
      originalMinPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

