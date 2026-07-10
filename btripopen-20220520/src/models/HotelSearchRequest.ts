// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelSearchRequest extends $dara.Model {
  adultNum?: string;
  brandCode?: string[];
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
  shids?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  sortCode?: number;
  superMan?: number;
  static names(): { [key: string]: string } {
    return {
      adultNum: 'adult_num',
      brandCode: 'brand_code',
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
      shids: 'shids',
      sortCode: 'sort_code',
      superMan: 'super_man',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultNum: 'string',
      brandCode: { 'type': 'array', 'itemType': 'string' },
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
      shids: { 'type': 'array', 'itemType': 'number' },
      sortCode: 'number',
      superMan: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.brandCode)) {
      $dara.Model.validateArray(this.brandCode);
    }
    if(Array.isArray(this.shids)) {
      $dara.Model.validateArray(this.shids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

