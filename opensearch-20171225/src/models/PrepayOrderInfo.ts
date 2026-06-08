// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepayOrderInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
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
   * The billing cycle. Valid values:
   * 
   * *   Year
   * *   Month
   * 
   * @example
   * Year
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      duration: 'duration',
      pricingCycle: 'pricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      duration: 'number',
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

