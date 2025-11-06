// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntlFixedPriceDomainOrderRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * 13350500
   */
  contactId?: number;
  /**
   * @example
   * appp16.com
   */
  domain?: string;
  /**
   * @example
   * 58.00
   */
  expectedPrice?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      contactId: 'ContactId',
      domain: 'Domain',
      expectedPrice: 'ExpectedPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      contactId: 'number',
      domain: 'string',
      expectedPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

