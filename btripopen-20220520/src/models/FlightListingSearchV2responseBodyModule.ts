// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightListingSearchV2ResponseBodyModuleFlightItemList } from "./FlightListingSearchV2responseBodyModuleFlightItemList";


export class FlightListingSearchV2ResponseBodyModule extends $dara.Model {
  flightItemList?: FlightListingSearchV2ResponseBodyModuleFlightItemList[];
  /**
   * @example
   * 0
   */
  searchMode?: number;
  /**
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      flightItemList: 'flight_item_list',
      searchMode: 'search_mode',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightItemList: { 'type': 'array', 'itemType': FlightListingSearchV2ResponseBodyModuleFlightItemList },
      searchMode: 'number',
      tripType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightItemList)) {
      $dara.Model.validateArray(this.flightItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

