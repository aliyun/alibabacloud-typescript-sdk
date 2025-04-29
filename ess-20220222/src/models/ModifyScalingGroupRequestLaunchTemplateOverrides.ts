// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingGroupRequestLaunchTemplateOverrides extends $dara.Model {
  /**
   * @remarks
   * The instance type. The instance type that you specify by using the InstanceType parameter overwrites the instance type that is specified in the launch template.
   * 
   * If you want Auto Scaling to scale instances in the scaling group based on the instance type weight, you must specify both the InstanceType and WeightedCapacity parameters.
   * 
   * > This parameter takes effect only after you specify the LaunchTemplateId parameter.
   * 
   * You can use the InstanceType parameter to specify only instance types that are available for purchase.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The weight of the instance type. The weight specifies the capacity of a single instance of the specified instance type in the scaling group. If you want Auto Scaling to scale instances in the scaling group based on the weighted capacity of instances, you must specify the WeightedCapacity parameter after you specify the InstanceType parameter.
   * 
   * A higher weight specifies that a smaller number of instances of the specified instance type are required to meet the expected capacity.
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
   * > The capacity of the scaling group cannot exceed the sum of the maximum number of instances that is specified by the MaxSize parameter and the maximum weight of the instance type.
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

