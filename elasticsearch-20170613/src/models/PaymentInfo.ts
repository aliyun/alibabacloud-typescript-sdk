// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PaymentInfo extends $dara.Model {
  /**
   * @remarks
   * The auto-renewal cycle. Unit: month. This parameter is required when **isAutoRenew** is set to **true**. The valid values are the same as those on the buy page.
   * 
   * @example
   * 3
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * The subscription duration. This parameter is required. You can specify the duration in months or years.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - true: enabled.
   * - false (default): disabled.
   * 
   * @example
   * true
   */
  isAutoRenew?: boolean;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is required. Valid values:
   * 
   * - Year: year
   * - Month: month.
   * 
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

