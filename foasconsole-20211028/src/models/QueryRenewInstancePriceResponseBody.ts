// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryRenewInstancePriceResponseBodyPriceInfo } from "./QueryRenewInstancePriceResponseBodyPriceInfo";


export class QueryRenewInstancePriceResponseBody extends $dara.Model {
  priceInfo?: QueryRenewInstancePriceResponseBodyPriceInfo;
  /**
   * @example
   * 67F33190-946B-1105-B6A1-E2DF0426DD51
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: QueryRenewInstancePriceResponseBodyPriceInfo,
      requestId: 'string',
      success: 'boolean',
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

