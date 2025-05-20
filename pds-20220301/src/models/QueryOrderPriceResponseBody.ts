// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrderPriceResponseBody extends $dara.Model {
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'discount_price',
      originalPrice: 'original_price',
      tradePrice: 'trade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

