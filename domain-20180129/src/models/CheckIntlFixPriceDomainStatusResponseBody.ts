// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckIntlFixPriceDomainStatusResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The currency. Valid values:
   * 
   * - RMB: Chinese Yuan.
   * 
   * - USD: US Dollar.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The expiration date of the domain name. After this date, the domain name requires renewal.
   * 
   * @example
   * 1567353497
   */
  deadDate?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The sale deadline of the domain name. After this time, the domain name is no longer available for sale.
   * 
   * @example
   * 1567353497
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the domain name is a premium domain name. Valid values:
   * 
   * - true: The domain name is a premium domain name.
   * 
   * - false: The domain name is not a premium domain name.
   * 
   * @example
   * true
   */
  premium?: boolean;
  /**
   * @remarks
   * The price.
   * 
   * @example
   * 20.00
   */
  price?: number;
  /**
   * @remarks
   * The registration date of the domain name.
   * 
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
  /**
   * @remarks
   * The returned object.
   */
  module?: CheckIntlFixPriceDomainStatusResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
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

