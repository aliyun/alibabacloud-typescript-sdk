// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelPricePullResponseBodyModuleHotelPriceInfosRooms } from "./HotelPricePullResponseBodyModuleHotelPriceInfosRooms";


export class HotelPricePullResponseBodyModuleHotelPriceInfos extends $dara.Model {
  address?: string;
  /**
   * @example
   * 64389015
   */
  hotelId?: string;
  hotelName?: string;
  rooms?: HotelPricePullResponseBodyModuleHotelPriceInfosRooms[];
  /**
   * @example
   * 9BCDD5DE-E6CB-5C25-93B9-9BE178A0AA56
   */
  searchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      hotelId: 'hotel_id',
      hotelName: 'hotel_name',
      rooms: 'rooms',
      searchId: 'search_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      hotelId: 'string',
      hotelName: 'string',
      rooms: { 'type': 'array', 'itemType': HotelPricePullResponseBodyModuleHotelPriceInfosRooms },
      searchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rooms)) {
      $dara.Model.validateArray(this.rooms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

