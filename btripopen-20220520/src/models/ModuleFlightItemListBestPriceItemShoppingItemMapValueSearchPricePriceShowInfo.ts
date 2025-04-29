// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleFlightItemListBestPriceItemShoppingItemMapValueSearchPricePriceShowInfo extends $dara.Model {
  discountInfo?: string;
  /**
   * @example
   * 0.8
   */
  discountNum?: number;
  /**
   * @example
   * false
   */
  showTicketPrice?: boolean;
  static names(): { [key: string]: string } {
    return {
      discountInfo: 'discount_info',
      discountNum: 'discount_num',
      showTicketPrice: 'show_ticket_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountInfo: 'string',
      discountNum: 'number',
      showTicketPrice: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

