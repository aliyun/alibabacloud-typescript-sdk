// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingGroupRequestCapacityOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go ECS instances to reach the required number of ECS instances when preemptible ECS instances cannot be created due to high prices or insufficient inventory of resources. This parameter takes effect when you set `MultiAZPolicy` to `COST_OPTIMIZED`. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. When the number of pay-as-you-go instances drops below the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances. Valid values: 0 to 1000.
   * 
   * If you set `MultiAZPolicy` to `COMPOSABLE`, the default value is 0.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances in the excess instances when the minimum number of pay-as-you-go instances is reached. `OnDemandBaseCapacity` specifies the minimum number of pay-as-you-go instances that must be contained in the scaling group. Valid values: 0 to 100.
   * 
   * If you set `MultiAZPolicy` to `COMPOSABLE`, the default value is 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The cost comparison method. Valid values:
   * 
   * *   PricePerUnit: compares costs based on unit price divided by instance capacities (weights). The capacity of an instance in a scaling group is determined by the weight of the instance type used. If no weight is set, the capacity defaults to 1.
   * *   PricePerVCpu: compares costs based on unit price divided by the number of vCPUs.
   * 
   * Default value: PricePerUnit.
   * 
   * @example
   * PricePerUnit
   */
  priceComparisonMode?: string;
  /**
   * @remarks
   * Specifies whether to replace pay-as-you-go instances with preemptible instances. If you specify `CompensateWithOnDemand`, it may result in a higher percentage of pay-as-you-go instances compared to the value of `OnDemandPercentageAboveBaseCapacity`. In this scenario, Auto Scaling will try to deploy preemptible instances to replace the surplus pay-as-you-go instances. When `CompensateWithOnDemand` is specified, Auto Scaling creates pay-as-you-go instances if there are not enough preemptible instance types. To avoid keeping these pay-as-you-go ECS instances for long periods, Auto Scaling tries to replace them with preemptible instances as soon as enough of preemptible instance types become available. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  spotAutoReplaceOnDemand?: boolean;
  static names(): { [key: string]: string } {
    return {
      compensateWithOnDemand: 'CompensateWithOnDemand',
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      priceComparisonMode: 'PriceComparisonMode',
      spotAutoReplaceOnDemand: 'SpotAutoReplaceOnDemand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compensateWithOnDemand: 'boolean',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      priceComparisonMode: 'string',
      spotAutoReplaceOnDemand: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

