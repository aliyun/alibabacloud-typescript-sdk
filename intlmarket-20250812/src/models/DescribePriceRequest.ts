// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequest extends $dara.Model {
  /**
   * @example
   * {\\"duration\\": 1, \\"productCode\\": \\"cmjz000325\\", \\"quantity\\": 1, \\"pricingCycle\\": \\"Year\\", \\"skuCode\\": \\"jichuban\\"}
   */
  commodity?: string;
  /**
   * @example
   * DOWNGRADE
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

