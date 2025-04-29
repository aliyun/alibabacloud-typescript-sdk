// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupList } from "./HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupList";
import { HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfos } from "./HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfos";


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

