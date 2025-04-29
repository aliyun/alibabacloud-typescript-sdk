// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchResponseBodyModuleFlightList } from "./FlightOtaSearchResponseBodyModuleFlightList";


export class FlightOtaSearchResponseBodyModule extends $dara.Model {
  flightList?: FlightOtaSearchResponseBodyModuleFlightList[];
  static names(): { [key: string]: string } {
    return {
      flightList: 'flight_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightList: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightList },
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

