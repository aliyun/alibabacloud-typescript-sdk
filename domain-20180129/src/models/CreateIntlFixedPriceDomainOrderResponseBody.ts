// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntlFixedPriceDomainOrderResponseBodyModule extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * 31199295f2074ce895645d386cb2****
   */
  orderNo?: string;
  /**
   * @example
   * 100.00
   */
  payPrice?: number;
  /**
   * @example
   * https://
   */
  payUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      orderNo: 'OrderNo',
      payPrice: 'PayPrice',
      payUrl: 'PayUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      orderNo: 'string',
      payPrice: 'number',
      payUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntlFixedPriceDomainOrderResponseBody extends $dara.Model {
  module?: CreateIntlFixedPriceDomainOrderResponseBodyModule;
  /**
   * @example
   * E879DC07-38EE-4408-9F33-73B30CD965CD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: CreateIntlFixedPriceDomainOrderResponseBodyModule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

