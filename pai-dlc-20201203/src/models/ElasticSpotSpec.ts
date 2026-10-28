// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElasticSpotSpec extends $dara.Model {
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.gn6e-c12g1.3xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum discount.
   * 
   * @example
   * 0.8
   */
  spotDiscountLimit?: number;
  /**
   * @remarks
   * The maximum bid price.
   * 
   * @example
   * 0.4744
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The spot strategy.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotDiscountLimit: 'SpotDiscountLimit',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
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

