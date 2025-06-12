// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs } from "./DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs";
import { DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions } from "./DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions";
import { DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSpotOptions } from "./DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSpotOptions";
import { DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTags } from "./DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTags";
import { DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification } from "./DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification";


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

