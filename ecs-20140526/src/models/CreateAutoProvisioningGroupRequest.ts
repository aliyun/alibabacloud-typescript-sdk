// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAutoProvisioningGroupRequestLaunchConfiguration } from "./CreateAutoProvisioningGroupRequestLaunchConfiguration";
import { CreateAutoProvisioningGroupRequestDataDiskConfig } from "./CreateAutoProvisioningGroupRequestDataDiskConfig";
import { CreateAutoProvisioningGroupRequestLaunchTemplateConfig } from "./CreateAutoProvisioningGroupRequestLaunchTemplateConfig";
import { CreateAutoProvisioningGroupRequestPrePaidOptions } from "./CreateAutoProvisioningGroupRequestPrePaidOptions";
import { CreateAutoProvisioningGroupRequestResourcePoolOptions } from "./CreateAutoProvisioningGroupRequestResourcePoolOptions";
import { CreateAutoProvisioningGroupRequestSystemDiskConfig } from "./CreateAutoProvisioningGroupRequestSystemDiskConfig";
import { CreateAutoProvisioningGroupRequestTag } from "./CreateAutoProvisioningGroupRequestTag";


export class CreateAutoProvisioningGroupRequest extends $dara.Model {
  launchConfiguration?: CreateAutoProvisioningGroupRequestLaunchConfiguration;
  /**
   * @remarks
   * The name of the auto provisioning group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * apg-test
   */
  autoProvisioningGroupName?: string;
  /**
   * @remarks
   * The delivery type of the auto provisioning group. Valid values:
   * 
   * *   request: one-time asynchronous delivery. When the auto provisioning group is started, it attempts to asynchronously deliver an instance cluster that meets the target capacity only once. The group does not retry the operation regardless of whether all the instances are delivered.
   * *   instant: one-time synchronous delivery. When the auto provisioning group is started, it attempts to synchronously deliver an instance cluster that meets the target capacity only once. The list of delivered instances and the causes of delivery failures are returned in the response.
   * *   maintain: continuous delivery. When the auto provisioning group is started, it attempts to deliver an instance cluster that meets the target capacity, and monitors the real-time capacity. If the target capacity of the auto provisioning group is not reached, the auto provisioning group continues to create instances until the target capacity is reached.
   * 
   * Default value: maintain.
   * 
   * @example
   * maintain
   */
  autoProvisioningGroupType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The information of data disks on the instance.
   */
  dataDiskConfig?: CreateAutoProvisioningGroupRequestDataDiskConfig[];
  /**
   * @remarks
   * The type of supplemental instances. When the sum of the `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` values is smaller than the `TotalTargetCapacity` value, the auto provisioning group creates instances of the specified type to meet the total target capacity. Valid values:
   * 
   * *   PayAsYouGo: pay-as-you-go
   * *   Spot: preemptible instance
   * 
   * Default value: Spot.
   * 
   * @example
   * Spot
   */
  defaultTargetCapacityType?: string;
  /**
   * @remarks
   * The description of the auto provisioning group.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to release scaled-in instances when the real-time capacity of the auto provisioning group exceeds the target capacity and the group is triggered to scale in. Valid values:
   * 
   * *   termination: releases the scaled-in instances in the auto provisioning group.
   * *   no-termination: removes the scaled-in instances from the auto provisioning group but does not release the instances.
   * 
   * Default value: no-termination.
   * 
   * @example
   * termination
   */
  excessCapacityTerminationPolicy?: string;
  /**
   * @remarks
   * >This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
  hibernationOptionsConfigured?: boolean;
  /**
   * @remarks
   * The extended configurations of the launch template.
   */
  launchTemplateConfig?: CreateAutoProvisioningGroupRequestLaunchTemplateConfig[];
  /**
   * @remarks
   * The ID of the launch template associated with the auto provisioning group. You can call the [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html) operation to query available launch templates. When both LaunchTemplateId and `LaunchConfiguration.*` parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * lt-bp1fgzds4bdogu03****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The version of the launch template associated with the auto provisioning group. You can call the [DescribeLaunchTemplateVersions](https://help.aliyun.com/document_detail/73761.html) operation to query the versions of available launch templates.
   * 
   * Default value: the default version of the launch template.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The maximum price of preemptible instances in the auto provisioning group.
   * 
   * >  When both `MaxSpotPrice` and `LaunchTemplateConfig.N.MaxPrice` are specified, the smaller one of the two parameter values is used.
   * 
   * @example
   * 2
   */
  maxSpotPrice?: number;
  /**
   * @remarks
   * The minimum target capacity of the auto provisioning group. The value must be a positive integer. When you specify this parameter, take note of the following items:
   * 
   * - This parameter takes effect only when `AutoProvisioningGroupType` is set to instant. 
   * - If the number of instances that can be created in the current region is smaller than the value of this parameter, the operation cannot be called and no instances are created. 
   * - If the number of instances that can be created in the current region is greater than the value of this parameter, instances can be created based on the specified parameters.
   * 
   * @example
   * 20
   */
  minTargetCapacity?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The policy for creating pay-as-you-go instances. Valid values:
   * 
   * *   lowest-price: cost optimization policy. The auto provisioning group selects the lowest-priced instance type to create instances.
   * *   prioritized: priority-based policy. The auto provisioning group creates instances based on the priority specified by `LaunchTemplateConfig.N.Priority`.
   * 
   * Default value: lowest-price.
   * 
   * @example
   * prioritized
   */
  payAsYouGoAllocationStrategy?: string;
  /**
   * @remarks
   * The target capacity of pay-as-you-go instances in the auto provisioning group. The value must be less than or equal to the `TotalTargetCapacity` value.
   * 
   * @example
   * 30
   */
  payAsYouGoTargetCapacity?: string;
  /**
   * @remarks
   * The capacity details of the subscription instance.
   */
  prePaidOptions?: CreateAutoProvisioningGroupRequestPrePaidOptions;
  /**
   * @remarks
   * The ID of the region in which to create the auto provisioning group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the auto provisioning group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource pool options to use to create instances. When you specify this parameter, take note of the following items:
   * 
   * *   This parameter takes effect only when the auto provisioning group creates pay-as-you-go instances.
   * *   This parameter takes effect only if you set `AutoProvisioningGroupType` to instant.
   */
  resourcePoolOptions?: CreateAutoProvisioningGroupRequestResourcePoolOptions;
  /**
   * @remarks
   * The policy for creating preemptible instances. Valid values:
   * 
   * *   lowest-price: cost optimization policy. The auto provisioning group selects the lowest-priced instance type to create instances.
   * *   diversified: balanced distribution policy. The auto provisioning group creates instances in zones that are specified in extended configurations and then evenly distributes the instances across the zones.
   * *   capacity-optimized: capacity-optimized distribution policy. The auto provisioning group creates instances of the optimal instance types across the optimal zones based on resource availability.
   * 
   * Default value: lowest-price.
   * 
   * @example
   * diversified
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The operation to be performed on the preemptible instance when it is interrupted. Valid values:
   * 
   * *   stop: stops the preemptible instance.
   * *   terminate: releases the preemptible instance.
   * 
   * Default value: terminate.
   * 
   * @example
   * terminate
   */
  spotInstanceInterruptionBehavior?: string;
  /**
   * @remarks
   * The number of preemptible instances of the lowest-priced instance type to be created by the auto provisioning group. This parameter takes effect when `SpotAllocationStrategy` is set to `lowest-price`.
   * 
   * The value must be smaller than the N value specified in `LaunchTemplateConfig.N`.
   * 
   * @example
   * 2
   */
  spotInstancePoolsToUseCount?: number;
  /**
   * @remarks
   * The target capacity of preemptible instances in the auto provisioning group. The value must be less than or equal to the `TotalTargetCapacity` value.
   * 
   * @example
   * 20
   */
  spotTargetCapacity?: string;
  /**
   * @remarks
   * The information of system disks on the instance.
   */
  systemDiskConfig?: CreateAutoProvisioningGroupRequestSystemDiskConfig[];
  /**
   * @remarks
   * The tags to add to the auto provisioning group.
   */
  tag?: CreateAutoProvisioningGroupRequestTag[];
  /**
   * @remarks
   * Specifies whether to release instances in the auto provisioning group when the auto provisioning group is deleted. Valid values:
   * 
   * *   true: releases the instances.
   * *   false: retains the instances.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  terminateInstances?: boolean;
  /**
   * @remarks
   * Specifies whether to release instances in the auto provisioning group when the group expires. Valid values:
   * 
   * *   true: releases the instances.
   * *   false: only removes the instances from the auto provisioning group but does not release them.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  terminateInstancesWithExpiration?: boolean;
  /**
   * @remarks
   * The total target capacity of the auto provisioning group. The value must be a positive integer.
   * 
   * The total target capacity of the auto provisioning group must be greater than or equal to the sum of the target capacity of pay-as-you-go instances specified by `PayAsYouGoTargetCapacity` and the target capacity of preemptible instances specified by `SpotTargetCapacity`.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  totalTargetCapacity?: string;
  /**
   * @remarks
   * The time at which to start the auto provisioning group. The period of time between this point in time and the point in time specified by `ValidUntil` is the validity period of the auto provisioning group.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * By default, an auto provisioning group is started immediately after it is created.
   * 
   * @example
   * 2019-04-01T15:10:20Z
   */
  validFrom?: string;
  /**
   * @remarks
   * The time at which the auto provisioning group expires. The period of time between this point in time and the point in time specified by `ValidFrom` is the validity period of the auto provisioning group.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * Default value: 2099-12-31T23:59:59Z.
   * 
   * @example
   * 2019-06-01T15:10:20Z
   */
  validUntil?: string;
  static names(): { [key: string]: string } {
    return {
      launchConfiguration: 'LaunchConfiguration',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      autoProvisioningGroupType: 'AutoProvisioningGroupType',
      clientToken: 'ClientToken',
      dataDiskConfig: 'DataDiskConfig',
      defaultTargetCapacityType: 'DefaultTargetCapacityType',
      description: 'Description',
      excessCapacityTerminationPolicy: 'ExcessCapacityTerminationPolicy',
      hibernationOptionsConfigured: 'HibernationOptionsConfigured',
      launchTemplateConfig: 'LaunchTemplateConfig',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      maxSpotPrice: 'MaxSpotPrice',
      minTargetCapacity: 'MinTargetCapacity',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payAsYouGoAllocationStrategy: 'PayAsYouGoAllocationStrategy',
      payAsYouGoTargetCapacity: 'PayAsYouGoTargetCapacity',
      prePaidOptions: 'PrePaidOptions',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePoolOptions: 'ResourcePoolOptions',
      spotAllocationStrategy: 'SpotAllocationStrategy',
      spotInstanceInterruptionBehavior: 'SpotInstanceInterruptionBehavior',
      spotInstancePoolsToUseCount: 'SpotInstancePoolsToUseCount',
      spotTargetCapacity: 'SpotTargetCapacity',
      systemDiskConfig: 'SystemDiskConfig',
      tag: 'Tag',
      terminateInstances: 'TerminateInstances',
      terminateInstancesWithExpiration: 'TerminateInstancesWithExpiration',
      totalTargetCapacity: 'TotalTargetCapacity',
      validFrom: 'ValidFrom',
      validUntil: 'ValidUntil',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchConfiguration: CreateAutoProvisioningGroupRequestLaunchConfiguration,
      autoProvisioningGroupName: 'string',
      autoProvisioningGroupType: 'string',
      clientToken: 'string',
      dataDiskConfig: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestDataDiskConfig },
      defaultTargetCapacityType: 'string',
      description: 'string',
      excessCapacityTerminationPolicy: 'string',
      hibernationOptionsConfigured: 'boolean',
      launchTemplateConfig: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestLaunchTemplateConfig },
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      maxSpotPrice: 'number',
      minTargetCapacity: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payAsYouGoAllocationStrategy: 'string',
      payAsYouGoTargetCapacity: 'string',
      prePaidOptions: CreateAutoProvisioningGroupRequestPrePaidOptions,
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePoolOptions: CreateAutoProvisioningGroupRequestResourcePoolOptions,
      spotAllocationStrategy: 'string',
      spotInstanceInterruptionBehavior: 'string',
      spotInstancePoolsToUseCount: 'number',
      spotTargetCapacity: 'string',
      systemDiskConfig: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestSystemDiskConfig },
      tag: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestTag },
      terminateInstances: 'boolean',
      terminateInstancesWithExpiration: 'boolean',
      totalTargetCapacity: 'string',
      validFrom: 'string',
      validUntil: 'string',
    };
  }

  validate() {
    if(this.launchConfiguration && typeof (this.launchConfiguration as any).validate === 'function') {
      (this.launchConfiguration as any).validate();
    }
    if(Array.isArray(this.dataDiskConfig)) {
      $dara.Model.validateArray(this.dataDiskConfig);
    }
    if(Array.isArray(this.launchTemplateConfig)) {
      $dara.Model.validateArray(this.launchTemplateConfig);
    }
    if(this.prePaidOptions && typeof (this.prePaidOptions as any).validate === 'function') {
      (this.prePaidOptions as any).validate();
    }
    if(this.resourcePoolOptions && typeof (this.resourcePoolOptions as any).validate === 'function') {
      (this.resourcePoolOptions as any).validate();
    }
    if(Array.isArray(this.systemDiskConfig)) {
      $dara.Model.validateArray(this.systemDiskConfig);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

