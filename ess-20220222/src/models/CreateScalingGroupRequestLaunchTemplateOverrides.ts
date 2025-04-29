// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingGroupRequestLaunchTemplateOverrides extends $dara.Model {
  /**
   * @remarks
   * The instance type that you want to use to override the instance type that is specified in the launch template.
   * 
   * If you want to scale instances based on the weighted capacities of the instances, you must specify both the InstanceType and WeightedCapacity parameters.
   * 
   * > This parameter is available only if you specify the LaunchTemplateId parameter.
   * 
   * You can use the InstanceType parameter to specify only instance types that are available for purchase.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum bid price of the instance type that is specified by the `InstanceType` parameter. You can specify 1 to 10 instance types by using the Extended Configurations feature of the launch template.
   * 
   * > This parameter is available only if you specify the `LaunchTemplateId` parameter.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The weight of the instance type. The weight specifies the capacity of an instance of the specified instance type in the scaling group. If you want to scale instances based on the weighted capacities of the instances, you must specify the WeightedCapacity parameter after you specify the InstanceType parameter.
   * 
   * A higher weight specifies that a smaller number of instances of the specified instance type are required to meet the expected capacity requirement.
   * 
   * Performance metrics, such as the number of vCPUs and the memory size of each instance type, may vary. You can specify different weights for different instance types based on your business requirements.
   * 
   * Example:
   * 
   * *   Current capacity: 0
   * *   Expected capacity: 6
   * *   Capacity of ecs.c5.xlarge: 4
   * 
   * To meet the expected capacity requirement, Auto Scaling must create and add two ecs.c5.xlarge instances.
   * 
   * > The capacity of the scaling group cannot exceed the sum of the maximum number of instances that is specified by the MaxSize parameter and the maximum weight of the instance types.
   * 
   * Valid values of the WeightedCapacity parameter: 1 to 500.
   * 
   * @example
   * 4
   */
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
      weightedCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

