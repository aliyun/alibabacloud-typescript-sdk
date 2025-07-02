// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotBidPrice extends $dara.Model {
  /**
   * @remarks
   * 实例的每小时最高出价。支持最大3位小数，参数SpotStrategy=SpotWithPriceLimit时，该参数生效。
   * 
   * @example
   * 1000.0
   */
  bidPrice?: number;
  /**
   * @remarks
   * 实例类型。
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

