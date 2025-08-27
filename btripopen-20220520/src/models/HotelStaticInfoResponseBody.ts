// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelStaticInfoResponseBodyModuleHotelStaticInfosExpandInfo extends $dara.Model {
  /**
   * @example
   * 17:00
   */
  checkIn?: string;
  /**
   * @example
   * 12:00
   */
  checkOut?: string;
  /**
   * @example
   * 2020
   */
  decorateTime?: string;
  floors?: string;
  hotelFacilities?: string[];
  /**
   * @example
   * 0
   */
  hotelType?: number;
  /**
   * @example
   * 2020
   */
  openingTime?: string;
  roomFacilities?: string[];
  /**
   * @example
   * 1
   */
  rooms?: number;
  service?: string[];
  /**
   * @example
   * 1
   */
  themeTag?: string;
  static names(): { [key: string]: string } {
    return {
      checkIn: 'check_in',
      checkOut: 'check_out',
      decorateTime: 'decorate_time',
      floors: 'floors',
      hotelFacilities: 'hotel_facilities',
      hotelType: 'hotel_type',
      openingTime: 'opening_time',
      roomFacilities: 'room_facilities',
      rooms: 'rooms',
      service: 'service',
      themeTag: 'theme_tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIn: 'string',
      checkOut: 'string',
      decorateTime: 'string',
      floors: 'string',
      hotelFacilities: { 'type': 'array', 'itemType': 'string' },
      hotelType: 'number',
      openingTime: 'string',
      roomFacilities: { 'type': 'array', 'itemType': 'string' },
      rooms: 'number',
      service: { 'type': 'array', 'itemType': 'string' },
      themeTag: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hotelFacilities)) {
      $dara.Model.validateArray(this.hotelFacilities);
    }
    if(Array.isArray(this.roomFacilities)) {
      $dara.Model.validateArray(this.roomFacilities);
    }
    if(Array.isArray(this.service)) {
      $dara.Model.validateArray(this.service);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelStaticInfoResponseBodyModuleHotelStaticInfosImageinfos extends $dara.Model {
  desc?: string;
  tag?: number;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i3/6000000000003/O1CN01xkZQR41BtPxK1PQCb_!!6000000000003-0-hotel.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      tag: 'tag',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      tag: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupListBedInfos extends $dara.Model {
  bedDesc?: string;
  bedNum?: number;
  bedSize?: string;
  bedType?: string;
  length?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bedDesc: 'bed_desc',
      bedNum: 'bed_num',
      bedSize: 'bed_size',
      bedType: 'bed_type',
      length: 'length',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedDesc: 'string',
      bedNum: 'number',
      bedSize: 'string',
      bedType: 'string',
      length: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupList extends $dara.Model {
  bedInfos?: HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupListBedInfos[];
  static names(): { [key: string]: string } {
    return {
      bedInfos: 'bed_Infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedInfos: { 'type': 'array', 'itemType': HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupListBedInfos },
    };
  }

  validate() {
    if(Array.isArray(this.bedInfos)) {
      $dara.Model.validateArray(this.bedInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfos extends $dara.Model {
  bedDesc?: string;
  /**
   * @example
   * 1
   */
  bedNum?: number;
  /**
   * @example
   * 1.8m
   */
  bedSize?: string;
  /**
   * @example
   * 0
   */
  bedType?: string;
  length?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bedDesc: 'bed_desc',
      bedNum: 'bed_num',
      bedSize: 'bed_size',
      bedType: 'bed_type',
      length: 'length',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedDesc: 'string',
      bedNum: 'number',
      bedSize: 'string',
      bedType: 'string',
      length: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfos extends $dara.Model {
  bedInfoGroupList?: HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupList[];
  bedInfos?: HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfos[];
  /**
   * @example
   * 1
   */
  extraBed?: number;
  /**
   * @example
   * demo
   */
  extraBedDesc?: string;
  /**
   * @example
   * 1,2,3,4,5,6
   */
  floor?: string;
  /**
   * @example
   * 0
   */
  internetWay?: string;
  /**
   * @example
   * 1
   */
  maxOccupancy?: number;
  roomFacilities?: string;
  roomFacilityList?: string[];
  /**
   * @example
   * 71652158
   */
  roomId?: string;
  /**
   * @example
   * //img.alicdn.com/imgextra/i3/6000000000003/O1CN01xkZQR41BtPxK1PQCb_!!6000000000003-0-hotel.jpg
   */
  roomImage?: string;
  roomImages?: string[];
  roomName?: string;
  roomType?: number;
  roomarea?: string;
  /**
   * @example
   * 1
   */
  rooms?: number;
  /**
   * @example
   * 0
   */
  window?: string;
  windowBad?: string;
  windowView?: string;
  static names(): { [key: string]: string } {
    return {
      bedInfoGroupList: 'bed_info_group_list',
      bedInfos: 'bed_infos',
      extraBed: 'extra_bed',
      extraBedDesc: 'extra_bed_desc',
      floor: 'floor',
      internetWay: 'internet_way',
      maxOccupancy: 'max_occupancy',
      roomFacilities: 'room_facilities',
      roomFacilityList: 'room_facility_list',
      roomId: 'room_id',
      roomImage: 'room_image',
      roomImages: 'room_images',
      roomName: 'room_name',
      roomType: 'room_type',
      roomarea: 'roomarea',
      rooms: 'rooms',
      window: 'window',
      windowBad: 'window_bad',
      windowView: 'window_view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedInfoGroupList: { 'type': 'array', 'itemType': HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupList },
      bedInfos: { 'type': 'array', 'itemType': HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfos },
      extraBed: 'number',
      extraBedDesc: 'string',
      floor: 'string',
      internetWay: 'string',
      maxOccupancy: 'number',
      roomFacilities: 'string',
      roomFacilityList: { 'type': 'array', 'itemType': 'string' },
      roomId: 'string',
      roomImage: 'string',
      roomImages: { 'type': 'array', 'itemType': 'string' },
      roomName: 'string',
      roomType: 'number',
      roomarea: 'string',
      rooms: 'number',
      window: 'string',
      windowBad: 'string',
      windowView: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bedInfoGroupList)) {
      $dara.Model.validateArray(this.bedInfoGroupList);
    }
    if(Array.isArray(this.bedInfos)) {
      $dara.Model.validateArray(this.bedInfos);
    }
    if(Array.isArray(this.roomFacilityList)) {
      $dara.Model.validateArray(this.roomFacilityList);
    }
    if(Array.isArray(this.roomImages)) {
      $dara.Model.validateArray(this.roomImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelStaticInfoResponseBodyModuleHotelStaticInfos extends $dara.Model {
  blockRoomTypeInformation?: { [key: string]: string };
  /**
   * @example
   * 19039
   */
  brand?: string;
  brandName?: string;
  /**
   * @example
   * 330100
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * CN
   */
  countryCode?: string;
  description?: string;
  /**
   * @example
   * 330183
   */
  district?: string;
  districtName?: string;
  expandInfo?: HotelStaticInfoResponseBodyModuleHotelStaticInfosExpandInfo;
  hotelAddress?: string;
  /**
   * @example
   * Building 5, Haichuang Building, 998 Wenyi West Road
   */
  hotelEnAddress?: string;
  /**
   * @example
   * Business travel hotel
   */
  hotelEnName?: string;
  /**
   * @example
   * 55335212
   */
  hotelId?: string;
  hotelName?: string;
  /**
   * @example
   * 2020
   */
  hotelOpenTime?: string;
  /**
   * @example
   * 0086#0571#28350117
   */
  hotelPhones?: string;
  /**
   * @example
   * demo
   */
  hotelPolicies?: string;
  /**
   * @example
   * 0086#0571#28350117
   */
  hotelfax?: string;
  hotelpics?: string;
  imageinfos?: HotelStaticInfoResponseBodyModuleHotelStaticInfosImageinfos[];
  /**
   * @example
   * 1
   */
  invoiceProviderMethod?: string;
  invoiceTypes?: number[];
  /**
   * @example
   * 119.844005,30.054384
   */
  location?: string;
  /**
   * @example
   * 330000
   */
  province?: string;
  provinceName?: string;
  /**
   * @example
   * 2
   */
  ratingAverage?: string;
  roomInfos?: HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfos[];
  /**
   * @example
   * 0
   */
  star?: string;
  /**
   * @example
   * 2
   */
  starRate?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * demo
   */
  themes?: string;
  /**
   * @example
   * demo
   */
  visaReminding?: boolean;
  static names(): { [key: string]: string } {
    return {
      blockRoomTypeInformation: 'block_room_type_information',
      brand: 'brand',
      brandName: 'brand_name',
      cityCode: 'city_code',
      cityName: 'city_name',
      country: 'country',
      countryCode: 'country_code',
      description: 'description',
      district: 'district',
      districtName: 'district_name',
      expandInfo: 'expand_info',
      hotelAddress: 'hotel_address',
      hotelEnAddress: 'hotel_en_address',
      hotelEnName: 'hotel_en_name',
      hotelId: 'hotel_id',
      hotelName: 'hotel_name',
      hotelOpenTime: 'hotel_open_time',
      hotelPhones: 'hotel_phones',
      hotelPolicies: 'hotel_policies',
      hotelfax: 'hotelfax',
      hotelpics: 'hotelpics',
      imageinfos: 'imageinfos',
      invoiceProviderMethod: 'invoice_provider_method',
      invoiceTypes: 'invoice_types',
      location: 'location',
      province: 'province',
      provinceName: 'province_name',
      ratingAverage: 'rating_average',
      roomInfos: 'room_infos',
      star: 'star',
      starRate: 'star_rate',
      status: 'status',
      themes: 'themes',
      visaReminding: 'visa_reminding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockRoomTypeInformation: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      brand: 'string',
      brandName: 'string',
      cityCode: 'string',
      cityName: 'string',
      country: 'string',
      countryCode: 'string',
      description: 'string',
      district: 'string',
      districtName: 'string',
      expandInfo: HotelStaticInfoResponseBodyModuleHotelStaticInfosExpandInfo,
      hotelAddress: 'string',
      hotelEnAddress: 'string',
      hotelEnName: 'string',
      hotelId: 'string',
      hotelName: 'string',
      hotelOpenTime: 'string',
      hotelPhones: 'string',
      hotelPolicies: 'string',
      hotelfax: 'string',
      hotelpics: 'string',
      imageinfos: { 'type': 'array', 'itemType': HotelStaticInfoResponseBodyModuleHotelStaticInfosImageinfos },
      invoiceProviderMethod: 'string',
      invoiceTypes: { 'type': 'array', 'itemType': 'number' },
      location: 'string',
      province: 'string',
      provinceName: 'string',
      ratingAverage: 'string',
      roomInfos: { 'type': 'array', 'itemType': HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfos },
      star: 'string',
      starRate: 'string',
      status: 'string',
      themes: 'string',
      visaReminding: 'boolean',
    };
  }

  validate() {
    if(this.blockRoomTypeInformation) {
      $dara.Model.validateMap(this.blockRoomTypeInformation);
    }
    if(this.expandInfo && typeof (this.expandInfo as any).validate === 'function') {
      (this.expandInfo as any).validate();
    }
    if(Array.isArray(this.imageinfos)) {
      $dara.Model.validateArray(this.imageinfos);
    }
    if(Array.isArray(this.invoiceTypes)) {
      $dara.Model.validateArray(this.invoiceTypes);
    }
    if(Array.isArray(this.roomInfos)) {
      $dara.Model.validateArray(this.roomInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelStaticInfoResponseBodyModule extends $dara.Model {
  hotelStaticInfos?: HotelStaticInfoResponseBodyModuleHotelStaticInfos[];
  static names(): { [key: string]: string } {
    return {
      hotelStaticInfos: 'hotel_static_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelStaticInfos: { 'type': 'array', 'itemType': HotelStaticInfoResponseBodyModuleHotelStaticInfos },
    };
  }

  validate() {
    if(Array.isArray(this.hotelStaticInfos)) {
      $dara.Model.validateArray(this.hotelStaticInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelStaticInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: HotelStaticInfoResponseBodyModule;
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
      module: HotelStaticInfoResponseBodyModule,
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

