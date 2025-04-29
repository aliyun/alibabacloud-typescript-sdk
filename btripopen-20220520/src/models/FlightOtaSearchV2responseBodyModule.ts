// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfos } from "./FlightOtaSearchV2responseBodyModuleFlightJourneyInfos";
import { FlightOtaSearchV2ResponseBodyModuleItemList } from "./FlightOtaSearchV2responseBodyModuleItemList";


export class FlightOtaSearchV2ResponseBodyModule extends $dara.Model {
  flightJourneyInfos?: FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfos[];
  itemList?: FlightOtaSearchV2ResponseBodyModuleItemList[];
  /**
   * @example
   * 2
   */
  searchMode?: number;
  /**
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      flightJourneyInfos: 'flight_journey_infos',
      itemList: 'item_list',
      searchMode: 'search_mode',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightJourneyInfos: { 'type': 'array', 'itemType': FlightOtaSearchV2ResponseBodyModuleFlightJourneyInfos },
      itemList: { 'type': 'array', 'itemType': FlightOtaSearchV2ResponseBodyModuleItemList },
      searchMode: 'number',
      tripType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightJourneyInfos)) {
      $dara.Model.validateArray(this.flightJourneyInfos);
    }
    if(Array.isArray(this.itemList)) {
      $dara.Model.validateArray(this.itemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

