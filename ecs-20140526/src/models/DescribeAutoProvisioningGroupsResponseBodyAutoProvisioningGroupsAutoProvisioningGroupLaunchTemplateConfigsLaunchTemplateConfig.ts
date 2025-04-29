// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigsLaunchTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The instance type that is specified in the extended configuration.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum price of the instance type specified in the extended configuration.
   * 
   * @example
   * 3
   */
  maxPrice?: number;
  /**
   * @remarks
   * The priority of the instance type specified in the extended configuration. A value of 0 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the vSwitch specified in the extended configuration.
   * 
   * @example
   * vsw-sn5bsitu4lfzgc5o7****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The weight of the instance type specified in the extended configuration.
   * 
   * @example
   * 2
   */
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      maxPrice: 'MaxPrice',
      priority: 'Priority',
      vSwitchId: 'VSwitchId',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      maxPrice: 'number',
      priority: 'number',
      vSwitchId: 'string',
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

