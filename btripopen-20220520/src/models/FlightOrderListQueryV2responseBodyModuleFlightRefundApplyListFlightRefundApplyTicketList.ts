// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketListFlightList } from "./FlightOrderListQueryV2responseBodyModuleFlightRefundApplyListFlightRefundApplyTicketListFlightList";


export class FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketList extends $dara.Model {
  flightList?: FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketListFlightList[];
  ticketNoList?: string[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      flightList: 'flight_list',
      ticketNoList: 'ticket_no_list',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketListFlightList },
      ticketNoList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flightList)) {
      $dara.Model.validateArray(this.flightList);
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

