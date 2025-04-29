// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketList } from "./IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketList";


export class IntlFlightOrderDetailResponseBodyModulePassengerItemDetailList extends $dara.Model {
  /**
   * @example
   * 8432002
   */
  passengerId?: number;
  ticketList?: IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketList[];
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      ticketList: 'ticket_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'number',
      ticketList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerItemDetailListTicketList },
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

