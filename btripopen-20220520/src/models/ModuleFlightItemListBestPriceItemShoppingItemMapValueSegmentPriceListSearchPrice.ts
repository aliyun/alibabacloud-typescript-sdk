// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleFlightItemListBestPriceItemShoppingItemMapValueSegmentPriceListSearchPrice extends $dara.Model {
  /**
   * @example
   * 120000
   */
  ticketPrice?: number;
  /**
   * @example
   * 120000
   */
  sellPrice?: number;
  /**
   * @example
   * 6000
   */
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      ticketPrice: 'ticket_price',
      sellPrice: 'sell_price',
      tax: 'tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketPrice: 'number',
      sellPrice: 'number',
      tax: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

