// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightListingSearchResponseBodyModuleFlightList } from "./FlightListingSearchResponseBodyModuleFlightList";


export class FlightListingSearchResponseBodyModule extends $dara.Model {
  flightList?: FlightListingSearchResponseBodyModuleFlightList[];
  static names(): { [key: string]: string } {
    return {
      flightList: 'flight_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightList: { 'type': 'array', 'itemType': FlightListingSearchResponseBodyModuleFlightList },
    };
  }

  validate() {
    if(Array.isArray(this.flightList)) {
      $dara.Model.validateArray(this.flightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

