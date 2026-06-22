// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostOptimizedConfig extends $dara.Model {
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances that are required for the node group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, pay-as-you-go instances are preferentially created.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the instances that exceed the number specified by the OnDemandBaseCapacity parameter for the node group. Valid values: 0 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The number of instance types that are specified. Preemptible instances of multiple instance types that are provided at the lowest price are evenly created in the scaling group. Valid values: 0 to 10.
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

