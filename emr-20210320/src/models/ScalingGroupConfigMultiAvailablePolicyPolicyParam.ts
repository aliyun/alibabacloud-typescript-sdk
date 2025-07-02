// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingGroupConfigMultiAvailablePolicyPolicyParam extends $dara.Model {
  /**
   * @remarks
   * 按需实例最小个数。
   * 
   * @example
   * 1
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * 按需实例百分比。
   * 
   * @example
   * 10
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * 抢占实例类型池规模。
   * 
   * @example
   * 10
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * 是否使用按量补偿。
   * 
   * @example
   * false
   */
  spotInstanceRemedy?: boolean;
  static names(): { [key: string]: string } {
    return {
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      spotInstancePools: 'SpotInstancePools',
      spotInstanceRemedy: 'SpotInstanceRemedy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

