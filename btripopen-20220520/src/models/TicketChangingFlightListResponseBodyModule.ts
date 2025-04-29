// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingFlightListResponseBodyModuleFlightInfoList } from "./TicketChangingFlightListResponseBodyModuleFlightInfoList";


export class TicketChangingFlightListResponseBodyModule extends $dara.Model {
  flightInfoList?: TicketChangingFlightListResponseBodyModuleFlightInfoList[];
  static names(): { [key: string]: string } {
    return {
      flightInfoList: 'flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightInfoList: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.flightInfoList)) {
      $dara.Model.validateArray(this.flightInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

