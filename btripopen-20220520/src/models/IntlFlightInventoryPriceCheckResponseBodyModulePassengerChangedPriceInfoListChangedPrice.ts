// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListChangedPrice extends $dara.Model {
  /**
   * @example
   * 12000
   */
  taxPrice?: number;
  /**
   * @example
   * 90000
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      taxPrice: 'tax_price',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taxPrice: 'number',
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

