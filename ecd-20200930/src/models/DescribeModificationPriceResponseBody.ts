// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModificationPriceResponseBodyPriceInfo } from "./DescribeModificationPriceResponseBodyPriceInfo";


export class DescribeModificationPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  priceInfo?: DescribeModificationPriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48174475-5EB2-5F99-A9E9-6F892D645****
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
      priceInfo: DescribeModificationPriceResponseBodyPriceInfo,
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

