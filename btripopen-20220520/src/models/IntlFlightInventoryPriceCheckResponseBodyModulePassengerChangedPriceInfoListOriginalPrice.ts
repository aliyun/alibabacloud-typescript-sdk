// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightInventoryPriceCheckResponseBodyModulePassengerChangedPriceInfoListOriginalPrice extends $dara.Model {
  /**
   * @example
   * 9000
   */
  buildPrice?: number;
  /**
   * @example
   * 5000
   */
  oilPrice?: number;
  /**
   * @example
   * 12000
   */
  taxPrice?: number;
  /**
   * @example
   * 80000
   */
  ticketPrice?: number;
  static names(): { [key: string]: string } {
    return {
      buildPrice: 'build_price',
      oilPrice: 'oil_price',
      taxPrice: 'tax_price',
      ticketPrice: 'ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildPrice: 'number',
      oilPrice: 'number',
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

