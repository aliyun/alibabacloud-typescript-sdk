// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3y****
   */
  clusterId?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * - If PricingCycle is set to year, the value ranges from 1 to 3.
   * - If PricingCycle is set to month, the value ranges from 1 to 9.
   * 
   * @example
   * 7
   */
  duration?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Prepaid**: subscription.
   * - **Postpaid**: pay-as-you-go.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * - year: year.
   * - month: month.
   * 
   * @example
   * month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      duration: 'Duration',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      duration: 'number',
      payType: 'string',
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

