// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketListCabinClass } from "./IflightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketListCabinClass";


export class IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketList extends $dara.Model {
  cabinClass?: IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketListCabinClass[];
  tax?: number;
  /**
   * @example
   * 018-6605785754
   */
  ticketNo?: string;
  ticketPrice?: number;
  /**
   * @example
   * 01323
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cabinClass: 'cabin_class',
      tax: 'tax',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClass: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightSaleOrderFlightOrderTicketListCabinClass },
      tax: 'number',
      ticketNo: 'string',
      ticketPrice: 'number',
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

