// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderDetailResponseBodyDataFlightItemDetailListFlightPrice extends $dara.Model {
  /**
   * @remarks
   * selling price
   * 
   * @example
   * 300
   */
  sellPrice?: number;
  /**
   * @remarks
   * tax
   * 
   * @example
   * 10
   */
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      sellPrice: 'sell_price',
      tax: 'tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

