// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelStaticInfoResponseBodyModuleHotelStaticInfosExpandInfo } from "./HotelStaticInfoResponseBodyModuleHotelStaticInfosExpandInfo";
import { HotelStaticInfoResponseBodyModuleHotelStaticInfosImageinfos } from "./HotelStaticInfoResponseBodyModuleHotelStaticInfosImageinfos";
import { HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfos } from "./HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfos";


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

