// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRates } from "./HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRates";


export class HotelPricePullResponseBodyModuleHotelPriceInfosRooms extends $dara.Model {
  /**
   * @example
   * 32
   */
  area?: string;
  bed?: string;
  bedTypeString?: string;
  /**
   * @example
   * {\\"bathtub\\":true}
   */
  facility?: string;
  /**
   * @example
   * 1,2,3,4,5,6
   */
  floor?: string;
  /**
   * @example
   * 2
   */
  maxOccupancy?: number;
  /**
   * @example
   * 0
   */
  networkService?: string;
  pics?: string[];
  rates?: HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRates[];
  /**
   * @example
   * 64681618
   */
  roomId?: string;
  roomName?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1
   */
  windowType?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'area',
      bed: 'bed',
      bedTypeString: 'bed_type_string',
      facility: 'facility',
      floor: 'floor',
      maxOccupancy: 'max_occupancy',
      networkService: 'network_service',
      pics: 'pics',
      rates: 'rates',
      roomId: 'room_id',
      roomName: 'room_name',
      status: 'status',
      windowType: 'window_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bed: 'string',
      bedTypeString: 'string',
      facility: 'string',
      floor: 'string',
      maxOccupancy: 'number',
      networkService: 'string',
      pics: { 'type': 'array', 'itemType': 'string' },
      rates: { 'type': 'array', 'itemType': HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRates },
      roomId: 'string',
      roomName: 'string',
      status: 'number',
      windowType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pics)) {
      $dara.Model.validateArray(this.pics);
    }
    if(Array.isArray(this.rates)) {
      $dara.Model.validateArray(this.rates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

