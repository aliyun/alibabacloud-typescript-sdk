// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleItemListShoppingItemMapValueSegmentPriceListSearchPrice extends $dara.Model {
  /**
   * @example
   * 120000
   */
  sellPrice?: number;
  /**
   * @example
   * 120000
   */
  ticketPrice?: number;
  /**
   * @example
   * 6000
   */
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      sellPrice: 'sell_price',
      ticketPrice: 'ticket_price',
      tax: 'tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sellPrice: 'number',
      ticketPrice: 'number',
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

