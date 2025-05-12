// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfo } from "./DescribePriceResponseBodyPriceInfo";


export class DescribePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1175630-3C44-4389-A3C1-15639FFC8EBC
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

