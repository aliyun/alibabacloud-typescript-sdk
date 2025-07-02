// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingGroupConfigInstanceTypeList extends $dara.Model {
  /**
   * @remarks
   * Ecs类型。
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * 抢占价格上限,可空。
   * 
   * @example
   * 0.79
   */
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

