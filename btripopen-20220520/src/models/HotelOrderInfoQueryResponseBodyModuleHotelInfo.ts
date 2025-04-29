// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderInfoQueryResponseBodyModuleHotelInfo extends $dara.Model {
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
  countryCode?: string;
  countryName?: string;
  /**
   * @example
   * 330183
   */
  districtCode?: string;
  districtName?: string;
  hotelAddress?: string;
  /**
   * @example
   * 3
   */
  hotelBrandCode?: string;
  hotelBrandName?: string;
  /**
   * @example
   * huazhu
   */
  hotelGroup?: string;
  /**
   * @example
   * 55335212
   */
  hotelId?: string;
  hotelName?: string;
  /**
   * @example
   * Test Hotel Name
   */
  hotelNameEn?: string;
  /**
   * @example
   * 5
   */
  star?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      countryCode: 'country_code',
      countryName: 'country_name',
      districtCode: 'district_code',
      districtName: 'district_name',
      hotelAddress: 'hotel_address',
      hotelBrandCode: 'hotel_brand_code',
      hotelBrandName: 'hotel_brand_name',
      hotelGroup: 'hotel_group',
      hotelId: 'hotel_id',
      hotelName: 'hotel_name',
      hotelNameEn: 'hotel_name_en',
      star: 'star',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      countryCode: 'string',
      countryName: 'string',
      districtCode: 'string',
      districtName: 'string',
      hotelAddress: 'string',
      hotelBrandCode: 'string',
      hotelBrandName: 'string',
      hotelGroup: 'string',
      hotelId: 'string',
      hotelName: 'string',
      hotelNameEn: 'string',
      star: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

