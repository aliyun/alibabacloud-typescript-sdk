// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelSuggestV2ResponseBodyModuleGuessSuggestInfos extends $dara.Model {
  /**
   * @example
   * 杭州湖墅南路XX号
   */
  address?: string;
  /**
   * @example
   * 300100
   */
  cityCode?: number;
  /**
   * @example
   * 杭州
   */
  cityName?: string;
  /**
   * @example
   * 杭州JW万豪酒店
   */
  displayName?: string;
  /**
   * @example
   * 53853318
   */
  hotelId?: string;
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/O1CN01qKg25r1rKLOKxT3vB_!!6000000005612-2-tps-32-32.png
   */
  icon?: string;
  /**
   * @example
   * 4.8分
   */
  point?: string;
  /**
   * @example
   * 524
   */
  price?: string;
  /**
   * @example
   * 0
   */
  region?: number;
  /**
   * @example
   * 10
   */
  type?: number;
  /**
   * @example
   * 酒店
   */
  typeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'city_code',
      cityName: 'city_name',
      displayName: 'display_name',
      hotelId: 'hotel_id',
      icon: 'icon',
      point: 'point',
      price: 'price',
      region: 'region',
      type: 'type',
      typeDesc: 'type_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'number',
      cityName: 'string',
      displayName: 'string',
      hotelId: 'string',
      icon: 'string',
      point: 'string',
      price: 'string',
      region: 'number',
      type: 'number',
      typeDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelSuggestV2ResponseBodyModuleKeywordSuggestInfosBusinessAreaWithCity extends $dara.Model {
  /**
   * @example
   * 成都市高新区天府大道北段1700号1栋2单元18层1801号
   */
  address?: string;
  /**
   * @example
   * 300100
   */
  cityCode?: number;
  /**
   * @example
   * 杭州
   */
  cityName?: string;
  /**
   * @example
   * 阿里巴巴/未来科技城
   */
  displayName?: string;
  /**
   * @example
   * 57140953
   */
  hotelId?: string;
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/O1CN01qKg25r1rKLOKxT3vB_!!6000000005612-2-tps-32-32.png
   */
  icon?: string;
  /**
   * @example
   * 4.8分
   */
  point?: string;
  /**
   * @example
   * 524
   */
  price?: string;
  /**
   * @example
   * 0
   */
  region?: number;
  /**
   * @example
   * 5
   */
  type?: number;
  /**
   * @example
   * 商圈
   */
  typeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'city_code',
      cityName: 'city_name',
      displayName: 'display_name',
      hotelId: 'hotel_id',
      icon: 'icon',
      point: 'point',
      price: 'price',
      region: 'region',
      type: 'type',
      typeDesc: 'type_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'number',
      cityName: 'string',
      displayName: 'string',
      hotelId: 'string',
      icon: 'string',
      point: 'string',
      price: 'string',
      region: 'number',
      type: 'number',
      typeDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelSuggestV2ResponseBodyModuleKeywordSuggestInfos extends $dara.Model {
  /**
   * @example
   * 杭州湖墅南路XX号
   */
  address?: string;
  businessAreaWithCity?: HotelSuggestV2ResponseBodyModuleKeywordSuggestInfosBusinessAreaWithCity[];
  /**
   * @example
   * 300100
   */
  cityCode?: number;
  /**
   * @example
   * 杭州
   */
  cityName?: string;
  /**
   * @example
   * 杭州JW万豪酒店
   */
  displayName?: string;
  /**
   * @example
   * 53853318
   */
  hotelId?: string;
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/O1CN01qKg25r1rKLOKxT3vB_!!6000000005612-2-tps-32-32.png
   */
  icon?: string;
  /**
   * @example
   * 4.8分
   */
  point?: string;
  /**
   * @example
   * 524
   */
  price?: string;
  /**
   * @example
   * 0
   */
  region?: number;
  /**
   * @example
   * 10
   */
  type?: number;
  /**
   * @example
   * 酒店
   */
  typeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      businessAreaWithCity: 'business_area_with_city',
      cityCode: 'city_code',
      cityName: 'city_name',
      displayName: 'display_name',
      hotelId: 'hotel_id',
      icon: 'icon',
      point: 'point',
      price: 'price',
      region: 'region',
      type: 'type',
      typeDesc: 'type_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      businessAreaWithCity: { 'type': 'array', 'itemType': HotelSuggestV2ResponseBodyModuleKeywordSuggestInfosBusinessAreaWithCity },
      cityCode: 'number',
      cityName: 'string',
      displayName: 'string',
      hotelId: 'string',
      icon: 'string',
      point: 'string',
      price: 'string',
      region: 'number',
      type: 'number',
      typeDesc: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessAreaWithCity)) {
      $dara.Model.validateArray(this.businessAreaWithCity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelSuggestV2ResponseBodyModulePopularSuggestInfosPopularInfos extends $dara.Model {
  /**
   * @example
   * 杭州东站
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'display_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelSuggestV2ResponseBodyModulePopularSuggestInfos extends $dara.Model {
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i1/O1CN01x0q19E1QZSqLHVVNh_!!6000000001990-2-tps-54-54.png
   */
  icon?: string;
  popularInfos?: HotelSuggestV2ResponseBodyModulePopularSuggestInfosPopularInfos[];
  /**
   * @example
   * 热门搜索
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'icon',
      popularInfos: 'popular_infos',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      popularInfos: { 'type': 'array', 'itemType': HotelSuggestV2ResponseBodyModulePopularSuggestInfosPopularInfos },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.popularInfos)) {
      $dara.Model.validateArray(this.popularInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelSuggestV2ResponseBodyModule extends $dara.Model {
  guessSuggestInfos?: HotelSuggestV2ResponseBodyModuleGuessSuggestInfos[];
  keywordSuggestInfos?: HotelSuggestV2ResponseBodyModuleKeywordSuggestInfos[];
  popularSuggestInfos?: HotelSuggestV2ResponseBodyModulePopularSuggestInfos[];
  /**
   * @example
   * 以下是当前城市和周边的查询结果 (酒店起价为参考)
   */
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      guessSuggestInfos: 'guess_suggest_infos',
      keywordSuggestInfos: 'keyword_suggest_infos',
      popularSuggestInfos: 'popular_suggest_infos',
      tips: 'tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guessSuggestInfos: { 'type': 'array', 'itemType': HotelSuggestV2ResponseBodyModuleGuessSuggestInfos },
      keywordSuggestInfos: { 'type': 'array', 'itemType': HotelSuggestV2ResponseBodyModuleKeywordSuggestInfos },
      popularSuggestInfos: { 'type': 'array', 'itemType': HotelSuggestV2ResponseBodyModulePopularSuggestInfos },
      tips: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.guessSuggestInfos)) {
      $dara.Model.validateArray(this.guessSuggestInfos);
    }
    if(Array.isArray(this.keywordSuggestInfos)) {
      $dara.Model.validateArray(this.keywordSuggestInfos);
    }
    if(Array.isArray(this.popularSuggestInfos)) {
      $dara.Model.validateArray(this.popularSuggestInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelSuggestV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * None
   */
  message?: string;
  module?: HotelSuggestV2ResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
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
      module: HotelSuggestV2ResponseBodyModule,
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

