// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderQueryResponseBodyModuleHotelInfo extends $dara.Model {
  brandCode?: string;
  brandGroup?: string;
  brandName?: string;
  /**
   * @example
   * 1669344020
   */
  checkIn?: number;
  /**
   * @example
   * 1669344020
   */
  checkOut?: number;
  city?: string;
  cityAdCode?: string;
  countryCode?: string;
  countryName?: string;
  hotelAddress?: string;
  hotelName?: string;
  hotelPhone?: string;
  /**
   * @example
   * 11
   */
  hotelSupportVatInvoiceType?: number;
  /**
   * @example
   * 1
   */
  night?: number;
  /**
   * @example
   * 1
   */
  roomNum?: number;
  roomType?: string;
  static names(): { [key: string]: string } {
    return {
      brandCode: 'brand_code',
      brandGroup: 'brand_group',
      brandName: 'brand_name',
      checkIn: 'check_in',
      checkOut: 'check_out',
      city: 'city',
      cityAdCode: 'city_ad_code',
      countryCode: 'country_code',
      countryName: 'country_name',
      hotelAddress: 'hotel_address',
      hotelName: 'hotel_name',
      hotelPhone: 'hotel_phone',
      hotelSupportVatInvoiceType: 'hotel_support_vat_invoice_type',
      night: 'night',
      roomNum: 'room_num',
      roomType: 'room_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandCode: 'string',
      brandGroup: 'string',
      brandName: 'string',
      checkIn: 'number',
      checkOut: 'number',
      city: 'string',
      cityAdCode: 'string',
      countryCode: 'string',
      countryName: 'string',
      hotelAddress: 'string',
      hotelName: 'string',
      hotelPhone: 'string',
      hotelSupportVatInvoiceType: 'number',
      night: 'number',
      roomNum: 'number',
      roomType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

