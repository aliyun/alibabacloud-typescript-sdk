// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification extends $dara.Model {
  /**
   * @remarks
   * The type of supplemental instances. When the sum of the `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` values is less than the `TotalTargetCapacity` value, the auto provisioning group creates instances of the specified billing method to meet the target capacity. Valid values:
   * 
   * *   PayAsYouGo: pay-as-you-go instances.
   * *   Spot: preemptible instances.
   * 
   * @example
   * Spot
   */
  defaultTargetCapacityType?: string;
  /**
   * @remarks
   * The target capacity of pay-as-you-go instances that the auto provisioning group provisions.
   * 
   * @example
   * 30
   */
  payAsYouGoTargetCapacity?: number;
  /**
   * @remarks
   * The target capacity of preemptible instances that the auto provisioning group provisions.
   * 
   * @example
   * 20
   */
  spotTargetCapacity?: number;
  /**
   * @remarks
   * The target capacity of the auto provisioning group. The capacity consists of the following parts:
   * 
   * *   PayAsYouGoTargetCapacity
   * *   SpotTargetCapacity
   * *   The supplemental capacity besides instance capacities specified by PayAsYouGoTargetCapacity and SpotTargetCapacity.
   * 
   * @example
   * 60
   */
  totalTargetCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      defaultTargetCapacityType: 'DefaultTargetCapacityType',
      payAsYouGoTargetCapacity: 'PayAsYouGoTargetCapacity',
      spotTargetCapacity: 'SpotTargetCapacity',
      totalTargetCapacity: 'TotalTargetCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultTargetCapacityType: 'string',
      payAsYouGoTargetCapacity: 'number',
      spotTargetCapacity: 'number',
      totalTargetCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

