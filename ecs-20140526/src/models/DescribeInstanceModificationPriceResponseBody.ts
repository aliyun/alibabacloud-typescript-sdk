// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceModificationPriceResponseBodyPriceInfo } from "./DescribeInstanceModificationPriceResponseBodyPriceInfo";


export class DescribeInstanceModificationPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the prices and promotion rules.
   */
  priceInfo?: DescribeInstanceModificationPriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3DC3196-379B-4F32-A2C5-B937134FAD8A
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
      priceInfo: DescribeInstanceModificationPriceResponseBodyPriceInfo,
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

