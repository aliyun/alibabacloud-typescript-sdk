// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotSpec extends $dara.Model {
  /**
   * @remarks
   * The maximum discount. Specify only one of SpotDiscountLimit and SpotPriceLimit.
   * 
   * @example
   * 0.8
   */
  spotDiscountLimit?: number;
  /**
   * @remarks
   * The maximum price. Unit: CNY/minute. Specify only one of SpotDiscountLimit and SpotPriceLimit.
   * 
   * @example
   * 0.4744
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The spot policy. Valid values:
   * 
   * *   SpotWithPriceLimit
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      spotDiscountLimit: 'SpotDiscountLimit',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotDiscountLimit: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

