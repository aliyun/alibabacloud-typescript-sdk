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
  btandCode?: string;
  cityCode?: string;
  discountDesc?: HotelSearchResponseBodyModuleItemsDiscountDesc;
  distance?: number;
  districtCode?: string;
  hotelAddress?: string;
  hotelCode?: string;
  hotelEnName?: string;
  hotelName?: string;
  hotelStar?: string;
  imageUrl?: string;
  isProtocol?: boolean;
  location?: string;
  minPrice?: number;
  originalMinPrice?: number;
  score?: string;
  status?: number;
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
  code?: string;
  message?: string;
  module?: HotelSearchResponseBodyModule;
  requestId?: string;
  success?: boolean;
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

