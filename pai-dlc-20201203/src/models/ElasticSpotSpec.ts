// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElasticSpotSpec extends $dara.Model {
  /**
   * @remarks
   * The spot instance type.
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum discount percentage for the spot instance. The system does not select an instance if its discount exceeds this limit. For example, if you set this parameter to `90`, the system considers only instances with a discount of 90% or less.
   */
  spotDiscountLimit?: number;
  /**
   * @remarks
   * The maximum hourly price you are willing to pay for a spot instance. If omitted, the on-demand price is the default.
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The strategy for allocating spot instances. Valid values:
   * 
   * - `LowestPrice`: Launches instances from the spot capacity pool offering the lowest price. This is the default strategy.
   * 
   * - `CapacityOptimized`: Launches instances from the spot capacity pool offering optimal capacity.
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

