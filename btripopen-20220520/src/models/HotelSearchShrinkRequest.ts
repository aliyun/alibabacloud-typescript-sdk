// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelSearchShrinkRequest extends $dara.Model {
  adultNum?: string;
  brandCodeShrink?: string;
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
  dir?: number;
  distance?: number;
  districtCode?: string;
  hotelStar?: string;
  isProtocol?: boolean;
  keyWords?: string;
  location?: string;
  maxPrice?: number;
  minPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  payOverType?: number;
  paymentType?: number;
  poi?: string;
  shidsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sortCode?: number;
  superMan?: number;
  static names(): { [key: string]: string } {
    return {
      adultNum: 'adult_num',
      brandCodeShrink: 'brand_code',
      btripUserId: 'btrip_user_id',
      checkInDate: 'check_in_date',
      checkOutDate: 'check_out_date',
      cityCode: 'city_code',
      dir: 'dir',
      distance: 'distance',
      districtCode: 'district_code',
      hotelStar: 'hotel_star',
      isProtocol: 'is_protocol',
      keyWords: 'key_words',
      location: 'location',
      maxPrice: 'max_price',
      minPrice: 'min_price',
      pageNo: 'page_no',
      pageSize: 'page_size',
      payOverType: 'pay_over_type',
      paymentType: 'payment_type',
      poi: 'poi',
      shidsShrink: 'shids',
      sortCode: 'sort_code',
      superMan: 'super_man',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultNum: 'string',
      brandCodeShrink: 'string',
      btripUserId: 'string',
      checkInDate: 'string',
      checkOutDate: 'string',
      cityCode: 'string',
      dir: 'number',
      distance: 'number',
      districtCode: 'string',
      hotelStar: 'string',
      isProtocol: 'boolean',
      keyWords: 'string',
      location: 'string',
      maxPrice: 'number',
      minPrice: 'number',
      pageNo: 'number',
      pageSize: 'number',
      payOverType: 'number',
      paymentType: 'number',
      poi: 'string',
      shidsShrink: 'string',
      sortCode: 'number',
      superMan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

