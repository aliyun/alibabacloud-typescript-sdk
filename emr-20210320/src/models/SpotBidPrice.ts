// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotBidPrice extends $dara.Model {
  /**
   * @remarks
   * The maximum hourly bid price for the instance, with up to three decimal places. This parameter applies only when `SpotStrategy` is set to `SpotWithPriceLimit`.
   * 
   * @example
   * 1000.0
   */
  bidPrice?: number;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.g7.2xlarge
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      bidPrice: 'BidPrice',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bidPrice: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

