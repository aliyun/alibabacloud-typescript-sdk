// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupsResponseBodyScalingGroupsCapacityOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether pay-as-you-go ECS instances can be automatically created to reach the required number of ECS instances when preemptible ECS instances cannot be created due to high prices or insufficient inventory of resources. This parameter takes effect when you set `MultiAZPolicy` to `COST_OPTIMIZED`. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. When the actual number of pay-as-you-go instances drops below the minimum threshold, Auto Scaling preferentially creates pay-as-you-go instances. Valid values: 0 to 1000.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances in the excess instances when the minimum number of pay-as-you-go instances is reached. `OnDemandBaseCapacity` specifies the minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 100.
   * 
   * @example
   * 0
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * Indicates how prices are compared. Valid values:
   * 
   * *   PricePerUnit: Prices are compared based on the price per instance capacity.
   * 
   *     Capacity is determined by the weights assigned to instance types in the scaling group. If no weight is specified, a default weight of 1 is used, meaning each instance is assigned a capacity of 1.
   * 
   * *   PricePerVCpu: Prices are compared based on the price per vCPU.
   * 
   * @example
   * PricePerUnit
   */
  priceComparisonMode?: string;
  /**
   * @remarks
   * Specifies whether to replace pay-as-you-go ECS instances with preemptible ECS instances. If you specify `CompensateWithOnDemand`, it may result in a higher percentage of pay-as-you-go instances compared to the value of `OnDemandPercentageAboveBaseCapacity`. In this scenario, Auto Scaling will try to deploy preemptible ECS instances to replace the surplus pay-as-you-go ECS instances. When `CompensateWithOnDemand` is specified, Auto Scaling creates pay-as-you-go ECS instances if there are not enough preemptible instance types available. To avoid keeping these pay-as-you-go ECS instances for long periods, Auto Scaling tries to replace them with preemptible instances as soon as enough of preemptible instance types become available. Valid values:
   * 
   * *   true
   * *   false
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

