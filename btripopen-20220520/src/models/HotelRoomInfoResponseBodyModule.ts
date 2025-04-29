// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelRoomInfoResponseBodyModuleBedInfoGroupList } from "./HotelRoomInfoResponseBodyModuleBedInfoGroupList";
import { HotelRoomInfoResponseBodyModuleBedInfos } from "./HotelRoomInfoResponseBodyModuleBedInfos";
import { HotelRoomInfoResponseBodyModuleRoomImages } from "./HotelRoomInfoResponseBodyModuleRoomImages";


export class HotelRoomInfoResponseBodyModule extends $dara.Model {
  bedInfoGroupList?: HotelRoomInfoResponseBodyModuleBedInfoGroupList[];
  bedInfos?: HotelRoomInfoResponseBodyModuleBedInfos[];
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
   * 2
   */
  floor?: string;
  /**
   * @example
   * 0
   */
  internetWay?: string;
  /**
   * @example
   * 3
   */
  maxOccupancy?: number;
  roomDesc?: string;
  roomFacilities?: string;
  roomFacilityList?: string[];
  /**
   * @example
   * 84536009
   */
  roomId?: string;
  /**
   * @example
   * //img.alicdn.com/imgextra/i2/6000000007493/O1CN010Vmxaz25DqUblX82A_!!6000000007493-2-hotel.png
   */
  roomImage?: string;
  roomImages?: HotelRoomInfoResponseBodyModuleRoomImages[];
  roomName?: string;
  roomType?: number;
  roomarea?: string;
  /**
   * @example
   * 3
   */
  rooms?: number;
  smoke?: string;
  /**
   * @example
   * 2
   */
  window?: string;
  /**
   * @example
   * 0
   */
  windowBad?: string;
  /**
   * @example
   * demo
   */
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
      roomDesc: 'room_desc',
      roomFacilities: 'room_facilities',
      roomFacilityList: 'room_facility_list',
      roomId: 'room_id',
      roomImage: 'room_image',
      roomImages: 'room_images',
      roomName: 'room_name',
      roomType: 'room_type',
      roomarea: 'roomarea',
      rooms: 'rooms',
      smoke: 'smoke',
      window: 'window',
      windowBad: 'window_bad',
      windowView: 'window_view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedInfoGroupList: { 'type': 'array', 'itemType': HotelRoomInfoResponseBodyModuleBedInfoGroupList },
      bedInfos: { 'type': 'array', 'itemType': HotelRoomInfoResponseBodyModuleBedInfos },
      extraBed: 'number',
      extraBedDesc: 'string',
      floor: 'string',
      internetWay: 'string',
      maxOccupancy: 'number',
      roomDesc: 'string',
      roomFacilities: 'string',
      roomFacilityList: { 'type': 'array', 'itemType': 'string' },
      roomId: 'string',
      roomImage: 'string',
      roomImages: { 'type': 'array', 'itemType': HotelRoomInfoResponseBodyModuleRoomImages },
      roomName: 'string',
      roomType: 'number',
      roomarea: 'string',
      rooms: 'number',
      smoke: 'string',
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

