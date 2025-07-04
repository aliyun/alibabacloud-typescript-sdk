// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestOrder extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values: true and false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing duration. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, and 12.
   * 
   * @example
   * 29
   */
  duration?: number;
  /**
   * @remarks
   * The unit of the billing duration. Valid values: Month and Year.
   * 
   * @example
   * ""
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

