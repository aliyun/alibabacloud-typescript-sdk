// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketListCabinClass } from "./IflightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketListCabinClass";


export class IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList extends $dara.Model {
  cabinClass?: IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketListCabinClass[];
  /**
   * @example
   * MU5236
   */
  flightNo?: string;
  /**
   * @example
   * 781-6605714721
   */
  ticketNo?: string;
  /**
   * @example
   * 01332
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cabinClass: 'cabin_class',
      flightNo: 'flight_no',
      ticketNo: 'ticket_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClass: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketListCabinClass },
      flightNo: 'string',
      ticketNo: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cabinClass)) {
      $dara.Model.validateArray(this.cabinClass);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

