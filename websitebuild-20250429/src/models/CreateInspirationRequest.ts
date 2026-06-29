// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInspirationRequest extends $dara.Model {
  /**
   * @remarks
   * The resource plan specification.
   * 
   * @example
   * 1000
   */
  amountspec?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * 111
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The extended information in JSON format.
   * 
   * @example
   * {}
   */
  extend?: string;
  /**
   * @remarks
   * The payment type.
   * 
   * @example
   * AUTO_PAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * - Year: year.
   * - Month: month.
   * - Day: day.
   * - Hour: hour.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The number of instances to purchase.
   * 
   * @example
   * 1
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      amountspec: 'Amountspec',
      clientToken: 'ClientToken',
      duration: 'Duration',
      extend: 'Extend',
      paymentType: 'PaymentType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountspec: 'string',
      clientToken: 'string',
      duration: 'number',
      extend: 'string',
      paymentType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

