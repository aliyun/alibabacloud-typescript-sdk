// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass } from "./IflightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass";


export class IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList extends $dara.Model {
  cabinClass?: IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass[];
  /**
   * @example
   * BK3162
   */
  flightNo?: string;
  /**
   * @example
   * 999-6605133193
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
      cabinClass: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass },
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

