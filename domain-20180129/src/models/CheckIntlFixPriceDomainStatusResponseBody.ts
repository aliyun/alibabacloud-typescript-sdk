// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckIntlFixPriceDomainStatusResponseBodyModule extends $dara.Model {
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
   * @example
   * 1567353497
   */
  deadDate?: number;
  /**
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * 1567353497
   */
  endTime?: number;
  /**
   * @example
   * true
   */
  premium?: boolean;
  /**
   * @example
   * 20.00
   */
  price?: number;
  /**
   * @example
   * 1566353497
   */
  regDate?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      deadDate: 'DeadDate',
      domain: 'Domain',
      endTime: 'EndTime',
      premium: 'Premium',
      price: 'Price',
      regDate: 'RegDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      deadDate: 'number',
      domain: 'string',
      endTime: 'number',
      premium: 'boolean',
      price: 'number',
      regDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckIntlFixPriceDomainStatusResponseBody extends $dara.Model {
  module?: CheckIntlFixPriceDomainStatusResponseBodyModule;
  /**
   * @example
   * 40F46D3D-F4F3-4CCB-AC30-2DD20E32E528
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
      module: CheckIntlFixPriceDomainStatusResponseBodyModule,
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

