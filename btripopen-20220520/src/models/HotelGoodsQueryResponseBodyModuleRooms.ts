// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelGoodsQueryResponseBodyModuleRoomsRates } from "./HotelGoodsQueryResponseBodyModuleRoomsRates";
import { HotelGoodsQueryResponseBodyModuleRoomsRoomService } from "./HotelGoodsQueryResponseBodyModuleRoomsRoomService";


export class HotelGoodsQueryResponseBodyModuleRooms extends $dara.Model {
  /**
   * @example
   * 27
   */
  area?: string;
  bedTypeString?: string;
  /**
   * @example
   * true
   */
  extraBed?: boolean;
  facility?: string;
  /**
   * @example
   * 1,2,3,4,5,6
   */
  floor?: string;
  /**
   * @example
   * 1
   */
  maxOccupancy?: number;
  name?: string;
  /**
   * @example
   * 0
   */
  networkService?: string;
  pics?: string;
  rates?: HotelGoodsQueryResponseBodyModuleRoomsRates[];
  /**
   * @example
   * demo
   */
  roomDasc?: string;
  roomFacility?: string[];
  roomService?: HotelGoodsQueryResponseBodyModuleRoomsRoomService[];
  /**
   * @example
   * 100929
   */
  srid?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  windowType?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'area',
      bedTypeString: 'bed_type_string',
      extraBed: 'extra_bed',
      facility: 'facility',
      floor: 'floor',
      maxOccupancy: 'max_occupancy',
      name: 'name',
      networkService: 'network_service',
      pics: 'pics',
      rates: 'rates',
      roomDasc: 'room_dasc',
      roomFacility: 'room_facility',
      roomService: 'room_service',
      srid: 'srid',
      status: 'status',
      windowType: 'window_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bedTypeString: 'string',
      extraBed: 'boolean',
      facility: 'string',
      floor: 'string',
      maxOccupancy: 'number',
      name: 'string',
      networkService: 'string',
      pics: 'string',
      rates: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRoomsRates },
      roomDasc: 'string',
      roomFacility: { 'type': 'array', 'itemType': 'string' },
      roomService: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRoomsRoomService },
      srid: 'number',
      status: 'number',
      windowType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rates)) {
      $dara.Model.validateArray(this.rates);
    }
    if(Array.isArray(this.roomFacility)) {
      $dara.Model.validateArray(this.roomFacility);
    }
    if(Array.isArray(this.roomService)) {
      $dara.Model.validateArray(this.roomService);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

