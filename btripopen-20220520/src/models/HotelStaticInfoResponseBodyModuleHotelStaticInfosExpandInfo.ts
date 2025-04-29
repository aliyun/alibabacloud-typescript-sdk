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

