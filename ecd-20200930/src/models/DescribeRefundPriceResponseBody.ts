// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRefundPriceResponseBodyPriceInfo } from "./DescribeRefundPriceResponseBodyPriceInfo";


export class DescribeRefundPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  priceInfo?: DescribeRefundPriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
      priceInfo: DescribeRefundPriceResponseBodyPriceInfo,
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

