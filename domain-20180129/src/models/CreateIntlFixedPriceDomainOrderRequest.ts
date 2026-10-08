// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntlFixedPriceDomainOrderRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - false (default): manual payment.
   * 
   *  - true: automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * 13350500
   */
  contactId?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * appp16.com
   */
  domain?: string;
  /**
   * @remarks
   * The expected price.
   * 
   * @example
   * 58.00
   */
  expectedPrice?: number;
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      contactId: 'ContactId',
      domain: 'Domain',
      expectedPrice: 'ExpectedPrice',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      contactId: 'number',
      domain: 'string',
      expectedPrice: 'number',
      productType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

