// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenewalPriceResponseBodyPriceInfo } from "./DescribeRenewalPriceResponseBodyPriceInfo";


export class DescribeRenewalPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  priceInfo?: DescribeRenewalPriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72E47B1E-6B11-5A11-A27C-7A80F866****
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
      priceInfo: DescribeRenewalPriceResponseBodyPriceInfo,
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

