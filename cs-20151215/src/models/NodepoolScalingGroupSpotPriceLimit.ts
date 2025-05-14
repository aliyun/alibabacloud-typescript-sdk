// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodepoolScalingGroupSpotPriceLimit extends $dara.Model {
  /**
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @example
   * 0.39
   */
  priceLimit?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'instance_type',
      priceLimit: 'price_limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priceLimit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

