// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModuleOrderItemListPassengerPriceList extends $dara.Model {
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 21300
   */
  sellPrice?: number;
  /**
   * @example
   * 19300
   */
  tax?: number;
  /**
   * @example
   * 2000
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerType: 'passenger_type',
      sellPrice: 'sell_price',
      tax: 'tax',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerType: 'number',
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

