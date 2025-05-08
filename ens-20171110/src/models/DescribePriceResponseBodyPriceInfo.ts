// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfoPrice } from "./DescribePriceResponseBodyPriceInfoPrice";


export class DescribePriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribePriceResponseBodyPriceInfoPrice;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribePriceResponseBodyPriceInfoPrice,
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

