// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogstashRequestPaymentInfo extends $dara.Model {
  /**
   * @example
   * 3
   */
  autoRenewDuration?: number;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * false
   */
  isAutoRenew?: boolean;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewDuration: 'autoRenewDuration',
      duration: 'duration',
      isAutoRenew: 'isAutoRenew',
      pricingCycle: 'pricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewDuration: 'number',
      duration: 'number',
      isAutoRenew: 'boolean',
      pricingCycle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

