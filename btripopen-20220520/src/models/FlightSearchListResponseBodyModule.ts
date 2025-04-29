// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightSearchListResponseBodyModuleFlightList } from "./FlightSearchListResponseBodyModuleFlightList";


export class FlightSearchListResponseBodyModule extends $dara.Model {
  flightList?: FlightSearchListResponseBodyModuleFlightList[];
  /**
   * @example
   * false
   */
  isReplacePnr?: boolean;
  static names(): { [key: string]: string } {
    return {
      flightList: 'flight_list',
      isReplacePnr: 'is_replace_pnr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightList: { 'type': 'array', 'itemType': FlightSearchListResponseBodyModuleFlightList },
      isReplacePnr: 'boolean',
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

