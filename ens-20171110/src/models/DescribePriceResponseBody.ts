// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @remarks
   * The type of currency.
   * 
   * *   USD: US dollar
   * *   JPY: Japanese Yen
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 1
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 16125.00
   */
  originalPrice?: number;
  /**
   * @remarks
   * The final price.
   * 
   * @example
   * 126.75
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
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

export class DescribePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price information.
   */
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 694EB8FF-446C-5B1E-8146-9629E492551F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribePriceResponseBodyPriceInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

