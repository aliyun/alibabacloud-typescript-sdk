// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoProvisioningGroupRequestLaunchTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The instance type in extended configuration N. Valid values of N: 1 to 20. For more information about the valid values of this parameter, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum price of spot instances in extended configuration N.
   * 
   * @example
   * 3
   */
  maxPrice?: number;
  /**
   * @remarks
   * The priority of extended configuration N. A value of 0 indicates the highest priority. The value must be greater than 0.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the vSwitch in extended configuration N. The zone of the instances created from the extended configuration is determined by the vSwitch.
   * 
   * @example
   * vsw-sn5bsitu4lfzgc5o7****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The weight of the instance type specified in the extended configuration. A greater weight indicates that a single instance has more computing power and fewer instances are required. The value must be greater than 0.
   * 
   * The weight is calculated based on the computing power of the instance type and the minimum computing power of a single instance in the cluster that can created by the auto-provisioning group. For example, assume that the minimum computing power of a single instance is 8 vCPUs and 60 GiB of memory.
   * 
   * *   For an instance type with 8 vCPUs and 60 GiB of memory, you can set the weight to 1.
   * *   For an instance type with 16 vCPUs and 120 GiB of memory, you can set the weight to 2.
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

export class ModifyAutoProvisioningGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The auto-provisioning group ID.
   * 
   * @example
   * apg-bp67acfmxazb4ph****
   */
  autoProvisioningGroupId?: string;
  /**
   * @remarks
   * The name of the auto-provisioning group. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://.[ It can contain letters, digits, colons (:), underscores (_), and hyphens (-).](http://https://。、（:）、（_）（-）。)
   * 
   * @example
   * apg-test
   */
  autoProvisioningGroupName?: string;
  /**
   * @remarks
   * The type of supplemental instances. When the sum of the PayAsYouGoTargetCapacity and SpotTargetCapacity values is smaller than the TotalTargetCapacity value, the auto-provisioning group creates instances of the specified type to meet the target capacity. Valid values:
   * 
   * *   PayAsYouGo: pay-as-you-go instances
   * *   Spot: spot instances
   * 
   * @example
   * Spot
   */
  defaultTargetCapacityType?: string;
  /**
   * @remarks
   * Specifies whether to release the removed instances when the real-time capacity of the auto-provisioning group exceeds the target capacity and a scale-in event is triggered. Valid values:
   * 
   * *   termination: releases the removed instances.
   * *   no-termination: removes the instances from the auto-provisioning group but does not release them.
   * 
   * @example
   * no-termination
   */
  excessCapacityTerminationPolicy?: string;
  /**
   * @remarks
   * The extended configurations of the launch template.
   */
  launchTemplateConfig?: ModifyAutoProvisioningGroupRequestLaunchTemplateConfig[];
  /**
   * @remarks
   * The maximum price of spot instances in the auto-provisioning group.
   * 
   * > When both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the smaller one of the two parameter values is used. The LaunchTemplateConfig.N.MaxPrice parameter is specified when the auto-provisioning group is created, and cannot be modified.
   * 
   * @example
   * 0.5
   */
  maxSpotPrice?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The target capacity of pay-as-you-go instances in the auto-provisioning group. Valid values: Set this parameter to a value smaller than the TotalTargetCapacity value.
   * 
   * @example
   * 30
   */
  payAsYouGoTargetCapacity?: string;
  /**
   * @remarks
   * The region ID of the auto-provisioning group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The target capacity of spot instances in the auto-provisioning group. Valid values: Set this parameter to a value smaller than the TotalTargetCapacity value.
   * 
   * @example
   * 30
   */
  spotTargetCapacity?: string;
  /**
   * @remarks
   * Specifies whether to release instances that are located in the auto-provisioning group after the group expires. Valid values:
   * 
   * *   true: releases instances that are located in the auto-provisioning group.
   * *   false: removes instances from the auto-provisioning group but does not release them.
   * 
   * @example
   * false
   */
  terminateInstancesWithExpiration?: boolean;
  /**
   * @remarks
   * The total target capacity of the auto-provisioning group. The value must be a positive integer.
   * 
   * The total target capacity of the auto-provisioning group must be greater than or equal to the sum of the target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter as well as the target capacity of spot instances specified by the SpotTargetCapacity parameter.
   * 
   * @example
   * 70
   */
  totalTargetCapacity?: string;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      defaultTargetCapacityType: 'DefaultTargetCapacityType',
      excessCapacityTerminationPolicy: 'ExcessCapacityTerminationPolicy',
      launchTemplateConfig: 'LaunchTemplateConfig',
      maxSpotPrice: 'MaxSpotPrice',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payAsYouGoTargetCapacity: 'PayAsYouGoTargetCapacity',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotTargetCapacity: 'SpotTargetCapacity',
      terminateInstancesWithExpiration: 'TerminateInstancesWithExpiration',
      totalTargetCapacity: 'TotalTargetCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupId: 'string',
      autoProvisioningGroupName: 'string',
      defaultTargetCapacityType: 'string',
      excessCapacityTerminationPolicy: 'string',
      launchTemplateConfig: { 'type': 'array', 'itemType': ModifyAutoProvisioningGroupRequestLaunchTemplateConfig },
      maxSpotPrice: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      payAsYouGoTargetCapacity: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotTargetCapacity: 'string',
      terminateInstancesWithExpiration: 'boolean',
      totalTargetCapacity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateConfig)) {
      $dara.Model.validateArray(this.launchTemplateConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

