// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostOptimizedConfig extends $dara.Model {
  /**
   * @remarks
   * 按量实例个数的最小值。节点组所需要按量实例个数的最小值，取值范围：0~1000。当按量实例个数少于该值时，将优先创建按量实例。
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * 节点组满足最小按量实例OnDemandBaseCapacity要求后，超出的实例中按量实例应占的比例，取值范围：0～100。
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：0~10。
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  spotInstancePools?: number;
  static names(): { [key: string]: string } {
    return {
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      spotInstancePools: 'SpotInstancePools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      spotInstancePools: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

