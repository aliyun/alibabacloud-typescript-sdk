// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfo } from "./DescribePriceResponseBodyPriceInfo";


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

