// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the target instance.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-bp1u0639js2h7****
   */
  clusterId?: string;
  /**
   * @remarks
   * The renewal epoch for the target instance.
   * 
   * - If PricingCycle is set to **year**, valid values are 1 to 3.
   * - If PricingCycle is set to **month**, valid values are 1 to 9.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  duration?: number;
  /**
   * @remarks
   * The unit of the renewal epoch for the target instance.
   * 
   * - **year**: year.
   * - **month**: month.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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

