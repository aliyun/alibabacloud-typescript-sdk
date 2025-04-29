// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingEnquiryResponseBodyModuleFlightInfoList } from "./TicketChangingEnquiryResponseBodyModuleFlightInfoList";


export class TicketChangingEnquiryResponseBodyModule extends $dara.Model {
  flightInfoList?: TicketChangingEnquiryResponseBodyModuleFlightInfoList[];
  static names(): { [key: string]: string } {
    return {
      flightInfoList: 'flight_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightInfoList: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoList },
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

