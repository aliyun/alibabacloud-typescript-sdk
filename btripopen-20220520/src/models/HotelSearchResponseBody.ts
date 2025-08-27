// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelSearchResponseBodyModuleItemsDiscountDescDiscountDetail extends $dara.Model {
  labelName?: string[];
  moneyDesc?: string;
  static names(): { [key: string]: string } {
    return {
      labelName: 'label_name',
      moneyDesc: 'money_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelName: { 'type': 'array', 'itemType': 'string' },
      moneyDesc: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelName)) {
      $dara.Model.validateArray(this.labelName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelSearchResponseBodyModuleItemsDiscountDesc extends $dara.Model {
  cashReduceTotal?: string;
  dinamicLabel?: string;
  discountDetail?: HotelSearchResponseBodyModuleItemsDiscountDescDiscountDetail[];
  subTitle?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cashReduceTotal: 'cash_reduce_total',
      dinamicLabel: 'dinamic_label',
      discountDetail: 'discount_detail',
      subTitle: 'sub_title',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cashReduceTotal: 'string',
      dinamicLabel: 'string',
      discountDetail: { 'type': 'array', 'itemType': HotelSearchResponseBodyModuleItemsDiscountDescDiscountDetail },
      subTitle: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.discountDetail)) {
      $dara.Model.validateArray(this.discountDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelSearchResponseBodyModuleItems extends $dara.Model {
  brandName?: string;
  /**
   * @example
   * 1902
   */
  btandCode?: string;
  /**
   * @example
   * 330100
   */
  cityCode?: string;
  discountDesc?: HotelSearchResponseBodyModuleItemsDiscountDesc;
  /**
   * @example
   * 100
   */
  distance?: number;
  /**
   * @example
   * 330100
   */
  districtCode?: string;
  hotelAddress?: string;
  /**
   * @example
   * 55335212
   */
  hotelCode?: string;
  /**
   * @example
   * Business travel hotel
   */
  hotelEnName?: string;
  hotelName?: string;
  /**
   * @example
   * 3
   */
  hotelStar?: string;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i3/6000000000003/O1CN01xkZQR41BtPxK1PQCb_!!6000000000003-0-hotel.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * true
   */
  isProtocol?: boolean;
  /**
   * @example
   * 119.844005,30.054384
   */
  location?: string;
  /**
   * @example
   * 100
   */
  minPrice?: number;
  originalMinPrice?: number;
  /**
   * @example
   * 3.2
   */
  score?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 0571-88886784-8888
   */
  tel?: string;
  static names(): { [key: string]: string } {
    return {
      brandName: 'brand_name',
      btandCode: 'btand_code',
      cityCode: 'city_code',
      discountDesc: 'discount_desc',
      distance: 'distance',
      districtCode: 'district_code',
      hotelAddress: 'hotel_address',
      hotelCode: 'hotel_code',
      hotelEnName: 'hotel_en_name',
      hotelName: 'hotel_name',
      hotelStar: 'hotel_star',
      imageUrl: 'image_url',
      isProtocol: 'is_protocol',
      location: 'location',
      minPrice: 'min_price',
      originalMinPrice: 'original_min_price',
      score: 'score',
      status: 'status',
      tel: 'tel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandName: 'string',
      btandCode: 'string',
      cityCode: 'string',
      discountDesc: HotelSearchResponseBodyModuleItemsDiscountDesc,
      distance: 'number',
      districtCode: 'string',
      hotelAddress: 'string',
      hotelCode: 'string',
      hotelEnName: 'string',
      hotelName: 'string',
      hotelStar: 'string',
      imageUrl: 'string',
      isProtocol: 'boolean',
      location: 'string',
      minPrice: 'number',
      originalMinPrice: 'number',
      score: 'string',
      status: 'number',
      tel: 'string',
    };
  }

  validate() {
    if(this.discountDesc && typeof (this.discountDesc as any).validate === 'function') {
      (this.discountDesc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelSearchResponseBodyModule extends $dara.Model {
  count?: number;
  items?: HotelSearchResponseBodyModuleItems[];
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      items: { 'type': 'array', 'itemType': HotelSearchResponseBodyModuleItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelSearchResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * None
   */
  message?: string;
  module?: HotelSearchResponseBodyModule;
  /**
   * @example
   * B72B39C8-32DE-558D-AD1C-D53F11F6ADFE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: HotelSearchResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

