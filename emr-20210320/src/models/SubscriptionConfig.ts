// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscriptionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether auto-renewal is enabled. Valid values:
   * 
   * - true: Auto-renewal is enabled.
   * 
   * - false: Auto-renewal is disabled (default).
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. This parameter takes effect only when AutoRenew is set to true. When AutoRenewDurationUnit is Month, valid values are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 12
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * The auto-renewal duration unit. Valid value:
   * 
   * - Month
   * 
   * @example
   * Month
   */
  autoRenewDurationUnit?: string;
  /**
   * @remarks
   * The payment duration. When PaymentDurationUnit is Month, valid values are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  paymentDuration?: number;
  /**
   * @remarks
   * The payment duration unit. Valid value:
   * 
   * - Month
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

