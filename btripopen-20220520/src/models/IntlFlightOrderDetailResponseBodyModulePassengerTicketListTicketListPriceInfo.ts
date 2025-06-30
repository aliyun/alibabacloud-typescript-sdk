// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModulePassengerTicketListTicketListPriceInfo extends $dara.Model {
  sellPrice?: number;
  tax?: number;
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      sellPrice: 'sell_price',
      tax: 'tax',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sellPrice: 'number',
      tax: 'number',
      ticketPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

