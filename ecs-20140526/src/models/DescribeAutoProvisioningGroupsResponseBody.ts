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

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs extends $dara.Model {
  launchTemplateConfig?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigsLaunchTemplateConfig[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateConfig: 'LaunchTemplateConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateConfig: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigsLaunchTemplateConfig },
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

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions extends $dara.Model {
  /**
   * @remarks
   * The policy for creating pay-as-you-go instances. Valid values:
   * 
   * *   lowest-price: cost optimization policy. This policy indicates that lowest-cost instance types are used to create instances.
   * *   prioritized: priority-based policy. This policy indicates that instances are created based on the priority specified by the LaunchTemplateConfig.N.Priority parameter.
   * 
   * >  The LaunchTemplateConfig.N.Priority parameter is set when the auto provisioning group is created, and cannot be modified.
   * 
   * @example
   * prioritized
   */
  allocationStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSpotOptions extends $dara.Model {
  /**
   * @remarks
   * The policy for creating spot instances. Valid values:
   * 
   * *   lowest-price: cost optimization policy. This policy indicates that the lowest-priced instance type is used to create instances.
   * *   diversified: balanced distribution policy. This policy indicates that instances are created evenly across multiple zones specified in the extended configuration.
   * 
   * @example
   * diversified
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * The action to be performed after the excess spot instances are stopped. Valid values:
   * 
   * *   stop: retains the excess spot instances in the stopped state.
   * *   terminate: releases the excess spot instances.
   * 
   * @example
   * stop
   */
  instanceInterruptionBehavior?: string;
  /**
   * @remarks
   * The number of instances that the auto provisioning group creates by selecting the instance type of the lowest price.
   * 
   * >  This parameter is set when the auto provisioning group is created, and cannot be modified.
   * 
   * @example
   * 2
   */
  instancePoolsToUseCount?: number;
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      instanceInterruptionBehavior: 'InstanceInterruptionBehavior',
      instancePoolsToUseCount: 'InstancePoolsToUseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      instanceInterruptionBehavior: 'string',
      instancePoolsToUseCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that is added to the auto provisioning group.
   * 
   * Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N that is added to the auto provisioning group.
   * 
   * Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTags extends $dara.Model {
  tag?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification extends $dara.Model {
  /**
   * @remarks
   * The type of supplemental instances. When the sum of the `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` values is less than the `TotalTargetCapacity` value, the auto provisioning group creates instances of the specified billing method to meet the target capacity. Valid values:
   * 
   * *   PayAsYouGo: pay-as-you-go instances.
   * *   Spot: spot instances.
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
   * The target capacity of spot instances that the auto provisioning group provisions.
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

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the auto provisioning group.
   * 
   * @example
   * apg-sn54avj8htgvtyh8****
   */
  autoProvisioningGroupId?: string;
  /**
   * @remarks
   * The name of the auto provisioning group.
   * 
   * @example
   * EcsDocTest
   */
  autoProvisioningGroupName?: string;
  /**
   * @remarks
   * The delivery type of the auto provisioning group. Valid values:
   * 
   * *   request: one-time delivery. When the auto provisioning group is started, it delivers instances only once. If the instances fail to be delivered, the auto provisioning group does not retry the delivery.
   * *   maintain: continuous delivery. When the auto provisioning group is started, it attempts to deliver instances that meet the target capacity and monitors the real-time capacity. If the target capacity of the auto provisioning group is not reached, the auto provisioning group continues to create instances until the target capacity is reached.
   * 
   * @example
   * maintain
   */
  autoProvisioningGroupType?: string;
  /**
   * @remarks
   * The time when the auto provisioning group was created.
   * 
   * @example
   * 2019-04-01T15:10:20Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether to release the scaled-in instances when the real-time capacity of the auto provisioning group exceeds the target capacity and the group is triggered to scale in. Valid values:
   * 
   * *   termination: releases the scaled-in instances.
   * *   no-termination: only removes the scaled-in instances from the auto provisioning group but does not release the instances.
   * 
   * @example
   * termination
   */
  excessCapacityTerminationPolicy?: string;
  /**
   * @remarks
   * Details about the extended configurations.
   */
  launchTemplateConfigs?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs;
  /**
   * @remarks
   * The ID of the launch template associated with the auto provisioning group.
   * 
   * @example
   * lt-bp1fgzds4bdogu03****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The version of the launch template associated with the auto provisioning group.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The maximum price of spot  instances in the auto provisioning group.
   * 
   * >  When both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the smaller one of the two parameter values is used.
   * 
   * The LaunchTemplateConfig.N.Priority parameter is set when the auto provisioning group is created, and cannot be modified.
   * 
   * @example
   * 2
   */
  maxSpotPrice?: number;
  /**
   * @remarks
   * The policies related to pay-as-you-go instances.
   */
  payAsYouGoOptions?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions;
  /**
   * @remarks
   * The region ID of the auto provisioning group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the auto provisioning group belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The policy related to spot instances.
   */
  spotOptions?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSpotOptions;
  /**
   * @remarks
   * The overall status of instance scheduling in the auto provisioning group. Valid values:
   * 
   * *   fulfilled: Scheduling was complete and the instances were delivered.
   * *   pending-fulfillment: The instances were being created.
   * *   pending-termination: The instances were being removed.
   * *   error: An exception occurred during scheduling and the instances were not delivered.
   * 
   * @example
   * fulfilled
   */
  state?: string;
  /**
   * @remarks
   * The status of the auto provisioning group. Valid values:
   * 
   * *   submitted: The auto provisioning group was created but did not execute scheduling tasks.
   * *   active: The auto provisioning group was executing scheduling tasks.
   * *   deleted: The auto provisioning group was deleted.
   * *   delete-running: The auto provisioning group was being deleted.
   * *   modifying: The auto provisioning group was being modified.
   * 
   * @example
   * submitted
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the auto provisioning group.
   */
  tags?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTags;
  /**
   * @remarks
   * The settings of the target capacity of the auto provisioning group.
   */
  targetCapacitySpecification?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification;
  /**
   * @remarks
   * Indicates whether to release instances in the auto provisioning group when the auto provisioning group is deleted. Valid values:
   * 
   * *   true: releases the instances.
   * *   false: only removes the instances from the auto provisioning group but does not release the instances.
   * 
   * @example
   * false
   */
  terminateInstances?: boolean;
  /**
   * @remarks
   * Indicates whether to release instances in the auto provisioning group when the group expires. Valid values:
   * 
   * *   true: releases the instances.
   * *   false: only removes the instances from the auto provisioning group but does not release the instances.
   * 
   * @example
   * true
   */
  terminateInstancesWithExpiration?: boolean;
  /**
   * @remarks
   * The time at which the auto provisioning group is started. The provisioning group is effective until the point in time specified by `ValidUntil`.
   * 
   * @example
   * 2019-04-01T15:10:20Z
   */
  validFrom?: string;
  /**
   * @remarks
   * The time at which the auto provisioning group expires. The period of time between this point in time and the point in time specified by the `ValidFrom` parameter is the validity period of the auto provisioning group.
   * 
   * @example
   * 2019-06-01T15:10:20Z
   */
  validUntil?: string;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      autoProvisioningGroupType: 'AutoProvisioningGroupType',
      creationTime: 'CreationTime',
      excessCapacityTerminationPolicy: 'ExcessCapacityTerminationPolicy',
      launchTemplateConfigs: 'LaunchTemplateConfigs',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      maxSpotPrice: 'MaxSpotPrice',
      payAsYouGoOptions: 'PayAsYouGoOptions',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      spotOptions: 'SpotOptions',
      state: 'State',
      status: 'Status',
      tags: 'Tags',
      targetCapacitySpecification: 'TargetCapacitySpecification',
      terminateInstances: 'TerminateInstances',
      terminateInstancesWithExpiration: 'TerminateInstancesWithExpiration',
      validFrom: 'ValidFrom',
      validUntil: 'ValidUntil',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupId: 'string',
      autoProvisioningGroupName: 'string',
      autoProvisioningGroupType: 'string',
      creationTime: 'string',
      excessCapacityTerminationPolicy: 'string',
      launchTemplateConfigs: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs,
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      maxSpotPrice: 'number',
      payAsYouGoOptions: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions,
      regionId: 'string',
      resourceGroupId: 'string',
      spotOptions: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSpotOptions,
      state: 'string',
      status: 'string',
      tags: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTags,
      targetCapacitySpecification: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification,
      terminateInstances: 'boolean',
      terminateInstancesWithExpiration: 'boolean',
      validFrom: 'string',
      validUntil: 'string',
    };
  }

  validate() {
    if(this.launchTemplateConfigs && typeof (this.launchTemplateConfigs as any).validate === 'function') {
      (this.launchTemplateConfigs as any).validate();
    }
    if(this.payAsYouGoOptions && typeof (this.payAsYouGoOptions as any).validate === 'function') {
      (this.payAsYouGoOptions as any).validate();
    }
    if(this.spotOptions && typeof (this.spotOptions as any).validate === 'function') {
      (this.spotOptions as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.targetCapacitySpecification && typeof (this.targetCapacitySpecification as any).validate === 'function') {
      (this.targetCapacitySpecification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups extends $dara.Model {
  autoProvisioningGroup?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroup[];
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroup: 'AutoProvisioningGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroup: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroup },
    };
  }

  validate() {
    if(Array.isArray(this.autoProvisioningGroup)) {
      $dara.Model.validateArray(this.autoProvisioningGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the auto provisioning groups.
   */
  autoProvisioningGroups?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups;
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 745CEC9F-0DD7-4451-9FE7-8B752F39****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of queried auto provisioning groups.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroups: 'AutoProvisioningGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroups: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoProvisioningGroups && typeof (this.autoProvisioningGroups as any).validate === 'function') {
      (this.autoProvisioningGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

