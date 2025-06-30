// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketList } from "./IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketList";


export class IntlFlightOrderDetailResponseBodyModulePassengerTicketList extends $dara.Model {
  passengerId?: number;
  ticketList?: IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketList[];
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      ticketList: 'ticket_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'number',
      ticketList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketList },
    };
  }

  validate() {
    if(Array.isArray(this.ticketList)) {
      $dara.Model.validateArray(this.ticketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

