// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"components":{"package_version":"yuncode12928000016"},"duration":1,"pricingCycle":"YEAR","productCode":"cmgj01**28","quantity":1,"skuCode":"prepay"}
   */
  commodity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE_BUY
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

