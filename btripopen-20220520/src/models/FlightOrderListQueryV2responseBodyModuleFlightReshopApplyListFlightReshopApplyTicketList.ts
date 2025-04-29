// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketListFlightList } from "./FlightOrderListQueryV2responseBodyModuleFlightReshopApplyListFlightReshopApplyTicketListFlightList";


export class FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketList extends $dara.Model {
  flightList?: FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketListFlightList[];
  relateTicketNoList?: string[];
  ticketNoList?: string[];
  /**
   * @example
   * alitrip123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      flightList: 'flight_list',
      relateTicketNoList: 'relate_ticket_no_list',
      ticketNoList: 'ticket_no_list',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketListFlightList },
      relateTicketNoList: { 'type': 'array', 'itemType': 'string' },
      ticketNoList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flightList)) {
      $dara.Model.validateArray(this.flightList);
    }
    if(Array.isArray(this.relateTicketNoList)) {
      $dara.Model.validateArray(this.relateTicketNoList);
    }
    if(Array.isArray(this.ticketNoList)) {
      $dara.Model.validateArray(this.ticketNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

