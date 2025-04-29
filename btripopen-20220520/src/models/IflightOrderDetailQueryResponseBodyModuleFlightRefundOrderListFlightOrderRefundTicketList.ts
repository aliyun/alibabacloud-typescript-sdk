// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass } from "./IflightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass";


export class IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList extends $dara.Model {
  cabinClass?: IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass[];
  /**
   * @example
   * MU5236
   */
  flightNo?: string;
  /**
   * @example
   * 018-6605785754
   */
  ticketNo?: string;
  /**
   * @example
   * 0132
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
      cabinClass: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketListCabinClass },
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

