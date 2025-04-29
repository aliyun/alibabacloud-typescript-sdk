// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelGoodsQueryResponseBodyModuleRooms } from "./HotelGoodsQueryResponseBodyModuleRooms";


export class HotelGoodsQueryResponseBodyModule extends $dara.Model {
  address?: string;
  bookingInstructions?: { [key: string]: string };
  /**
   * @example
   * true
   */
  canForeigner?: boolean;
  /**
   * @example
   * 2022-05-15
   */
  checkIn?: string;
  /**
   * @example
   * 2022-05-15
   */
  checkOut?: string;
  descriptions?: string[];
  dinamicBannerPicUrls?: string[];
  /**
   * @example
   * 17:00
   */
  earlyArrivalTime?: string;
  /**
   * @example
   * 29382
   */
  hotelId?: number;
  hotelName?: string;
  /**
   * @example
   * 12:00
   */
  lateArrivalTime?: string;
  rooms?: HotelGoodsQueryResponseBodyModuleRooms[];
  /**
   * @example
   * demo
   */
  searchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      bookingInstructions: 'booking_instructions',
      canForeigner: 'can_foreigner',
      checkIn: 'check_in',
      checkOut: 'check_out',
      descriptions: 'descriptions',
      dinamicBannerPicUrls: 'dinamic_banner_pic_urls',
      earlyArrivalTime: 'early_arrival_time',
      hotelId: 'hotel_id',
      hotelName: 'hotel_name',
      lateArrivalTime: 'late_arrival_time',
      rooms: 'rooms',
      searchId: 'search_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      bookingInstructions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      canForeigner: 'boolean',
      checkIn: 'string',
      checkOut: 'string',
      descriptions: { 'type': 'array', 'itemType': 'string' },
      dinamicBannerPicUrls: { 'type': 'array', 'itemType': 'string' },
      earlyArrivalTime: 'string',
      hotelId: 'number',
      hotelName: 'string',
      lateArrivalTime: 'string',
      rooms: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRooms },
      searchId: 'string',
    };
  }

  validate() {
    if(this.bookingInstructions) {
      $dara.Model.validateMap(this.bookingInstructions);
    }
    if(Array.isArray(this.descriptions)) {
      $dara.Model.validateArray(this.descriptions);
    }
    if(Array.isArray(this.dinamicBannerPicUrls)) {
      $dara.Model.validateArray(this.dinamicBannerPicUrls);
    }
    if(Array.isArray(this.rooms)) {
      $dara.Model.validateArray(this.rooms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

