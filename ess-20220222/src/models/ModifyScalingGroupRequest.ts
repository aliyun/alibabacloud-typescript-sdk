// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingGroupRequestCapacityOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically attempt to create pay-as-you-go instances to meet the required number of ECS instances if sufficient spot instances cannot be created due to price or inventory reasons when the MultiAZPolicy parameter of the CreateScalingGroup operation is set to COST_OPTIMIZED. Valid values:
   * 
   * - true: allows the creation of pay-as-you-go instances.
   * - false: does not allow the creation of pay-as-you-go instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. If the number of pay-as-you-go instances in the scaling group is less than this value, the system preferentially creates pay-as-you-go instances. Valid values: 0 to 1000.
   * 
   * Default value: 0 when the MultiAZPolicy parameter is set to COMPOSABLE.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the extra instances that exceed the minimum number of pay-as-you-go instances specified by OnDemandBaseCapacity. Valid values: 0 to 100.
   * 
   * Default value: 100 when the MultiAZPolicy parameter is set to COMPOSABLE.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The price comparison mode for the cost optimization policy of the scaling group. Valid values:
   * - PricePerUnit: compares prices based on the price per unit of capacity.
   * 
   *   The capacity of an instance in the scaling group equals the weight configured for the instance type. The default weight is 1, which means one ECS instance occupies a capacity of 1.
   * 
   * - PricePerVCpu: compares prices based on the price per vCPU.
   * 
   * Default value: PricePerUnit.
   * 
   * @example
   * PricePerUnit
   */
  priceComparisonMode?: string;
  /**
   * @remarks
   * Specifies whether to attempt to use spot instances to replace pay-as-you-go capacity when the percentage of pay-as-you-go instances exceeds the OnDemandPercentageAboveBaseCapacity value after CompensateWithOnDemand is enabled. In common scenarios where CompensateWithOnDemand downgrades spot instances to pay-as-you-go instances due to spot inventory or price reasons, this feature attempts to use spot instances to replace the excess pay-as-you-go capacity to avoid long-term retention of pay-as-you-go instances. Valid values:
   * 
   * - true: allows the replacement.
   * - false: does not allow the replacement.
   * 
   * Default value: false.
   * 
   * @example
   * true
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

export class ModifyScalingGroupRequestLaunchTemplateOverrides extends $dara.Model {
  /**
   * @remarks
   * When you need the scaling group to scale based on the instance type capacity, specify both this parameter and LaunchTemplateOverrides.WeightedCapacity.
   * 
   * This parameter is used to specify the instance type and overrides the instance type in the launch template.
   * 
   * > This parameter takes effect only when the LaunchTemplateId parameter is specified.
   * 
   * Valid values of InstanceType: available ECS instance types.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is used to specify the maximum hourly price for the instance type that overrides the launch template (that is, LaunchTemplateOverride.N.InstanceType). You can specify N values for this parameter to extend the launch template to support N instance types. Valid values of N: 1 to 20.
   * > This parameter takes effect only when the LaunchTemplateId parameter is specified.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * When you need the scaling group to scale based on the instance type capacity, specify this parameter after you specify LaunchTemplateOverrides.InstanceType. The two parameters correspond to each other.
   * 
   * This parameter is used to specify the weight of the instance type, which indicates the capacity that a single instance of the instance type represents in the scaling group.
   * 
   * A greater weight indicates that fewer instances of this instance type are required to meet the expected capacity.
   * 
   * Because performance metrics such as the number of vCPUs and memory size vary with instance types, you can configure different weights for different instance types based on your needs.
   * 
   * Example:
   * 
   * - Current capacity: 0.
   * 
   * - Expected capacity: 6.
   * 
   * - Capacity of the ecs.c5.xlarge instance type: 4.
   * 
   * To meet the expected capacity, the scaling group scales out two ecs.c5.xlarge instances.
   * 
   * > During scale-out, the capacity of the scaling group cannot exceed the sum of the maximum capacity (MaxSize) and the maximum weight of the instance type.
   * 
   * Valid values of WeightedCapacity: 1 to 500.
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

export class ModifyScalingGroupRequestZoneShiftPolicy extends $dara.Model {
  /**
   * @remarks
   * The health check behavior in impaired zones. Valid values: 
   * 
   * - ReplaceUnhealthy: normally replaces unhealthy instances in all zones. 
   * - IgnoreUnhealthy: does not replace unhealthy instances in impaired zones. Healthy zones are not affected.
   * 
   * @example
   * ReplaceUnhealthy
   */
  impairedZoneHealthCheckBehavior?: string;
  /**
   * @remarks
   * Blocks scale-in activities triggered by specified types of scaling rules. The blocking scope covers all zones under the scaling group, not just the impaired zones. This prevents false scale-in activities caused by fake improvements in monitoring metrics due to unreachable instances in impaired zones. Valid values: 
   * 
   * - StepScalingRule: blocks scale-in activities triggered by step scaling rules. 
   * - TargetTrackingScalingRule: blocks scale-in activities triggered by target tracking scaling rules. 
   * - None: does not block any scale-in activities.
   * 
   * @example
   * StepScalingRule
   */
  scaleInBlockedRuleTypes?: string[];
  /**
   * @remarks
   * Specifies whether scale-out creates instances only in healthy zones during zone shift. Valid values: 
   * 
   * - true: creates instances only in healthy zones during scale-out and skips impaired zones. 
   * - false: does not restrict zones, and scale-out can create instances in any zone under the scaling group.
   * 
   * @example
   * true
   */
  scaleOutInHealthyZonesOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      impairedZoneHealthCheckBehavior: 'ImpairedZoneHealthCheckBehavior',
      scaleInBlockedRuleTypes: 'ScaleInBlockedRuleTypes',
      scaleOutInHealthyZonesOnly: 'ScaleOutInHealthyZonesOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      impairedZoneHealthCheckBehavior: 'string',
      scaleInBlockedRuleTypes: { 'type': 'array', 'itemType': 'string' },
      scaleOutInHealthyZonesOnly: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.scaleInBlockedRuleTypes)) {
      $dara.Model.validateArray(this.scaleInBlockedRuleTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the active scaling configuration in the scaling group.
   * 
   * @example
   * asc-bp17pelvl720x5ub****
   */
  activeScalingConfigurationId?: string;
  /**
   * @remarks
   * The capacity allocation policy, which determines how the scaling group selects available instance types to meet the capacity requirements. The capacity distribution policy applies to both pay-as-you-go and spot capacities. This parameter takes effect only when the MultiAZPolicy parameter is set to COMPOSABLE. Valid values:                              
   * 
   * - priority: creates instances in the order of the configured instance types.
   * 
   * - lowestPrice: creates instances in ascending order of the vCPU unit price of the instance types.
   * 
   * Default value: priority.
   * 
   * @example
   * priority
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic balancing for the scaling group. This parameter takes effect only when BalancedOnly is enabled for a zone-balanced scaling group. Valid values:
   * - false: disables automatic balancing for the scaling group.
   * - true: enables automatic balancing for the scaling group. The scaling group automatically detects the capacity across zones. If the capacity is unbalanced across zones, the scaling group proactively scales across zones to rebalance the capacity.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRebalance?: boolean;
  /**
   * @remarks
   * Specifies whether the capacity of the scaling group is evenly distributed across multiple zones. This parameter takes effect only when the MultiAZPolicy parameter is set to COMPOSABLE. Valid values:
   * - true: The capacity of the scaling group is evenly distributed across multiple zones.
   * - false: The capacity of the scaling group is not evenly distributed across multiple zones.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  azBalance?: boolean;
  /**
   * @remarks
   * The zone balancing mode. This parameter takes effect only when the zone balancing mode is enabled. Valid values:
   *  
   * - BalancedBestEffort: If resource creation fails in a zone, the system degrades to other zones to ensure best-effort delivery of resources.
   * 
   * - BalancedOnly: If resource creation fails in a zone, the system does not degrade to other zones. The scale-out activity partially succeeds to avoid excessive imbalance of resources across different zones.
   * 
   * Default value: BalancedBestEffort.
   * 
   * @example
   * BalancedBestEffort
   */
  balanceMode?: string;
  /**
   * @remarks
   * The capacity options.
   */
  capacityOptions?: ModifyScalingGroupRequestCapacityOptions;
  /**
   * @remarks
   * Specifies whether to automatically attempt to create pay-as-you-go instances to meet the required number of ECS instances if sufficient spot instances cannot be created due to price or inventory reasons when the MultiAZPolicy parameter of the CreateScalingGroup operation is set to COST_OPTIMIZED. Valid values:
   * 
   * - true: allows the creation of pay-as-you-go instances.
   * 
   * - false: does not allow the creation of pay-as-you-go instances.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Function Compute function for the custom scale-in policy. This parameter takes effect only when the first removal policy configured in RemovalPolicies is CustomPolicy.
   * 
   * @example
   * acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name
   */
  customPolicyARN?: string;
  /**
   * @remarks
   * The default cooldown time of the scaling group. This parameter applies only to simple scaling rules. Valid values: 0 to 86400. Unit: seconds.
   * 
   * During the cooldown time, the scaling group does not execute any other scaling activities. This applies only to scaling activities triggered by CloudMonitor event-triggered tasks.
   * 
   * @example
   * 600
   */
  defaultCooldown?: number;
  /**
   * @remarks
   * The expected number of ECS instances or elastic container instances in the scaling group. The scaling group automatically maintains the number of ECS instances or elastic container instances at the expected number. Valid values: MinSize to MaxSize.
   * 
   * > If the expected number of instances feature is disabled and then re-enabled, you must reset the DesiredCapacity value.
   * 
   * @example
   * 5
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * Specifies whether to disable the expected number of instances feature for the scaling group. Valid values:
   * 
   * - false: enables the expected number of instances feature.
   * - true: disables the expected number of instances feature.
   * 
   * > You can change the Settings of this parameter to true (that is, shutdown the expected number of instances feature) only when no scaling activity is in progress in the scaling group. When you shutdown the expected number of instances feature, the current DesiredCapacity property of the scaling group is cleared, but the current number of instances in the scaling group remains unchanged.
   * 
   * @example
   * false
   */
  disableDesiredCapacity?: boolean;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the scaling group. Valid values:
   * 
   * - true: enables deletion protection for the scaling group. In this case, the scaling group cannot be deleted.
   * - false: disables deletion protection for the scaling group.
   * 
   * @example
   * true
   */
  groupDeletionProtection?: boolean;
  /**
   * @remarks
   * The health check mode of the scaling group. Valid values:
   * 
   * - NONE: disables health checks.
   * - ECS: performs health checks on instances in the scaling group. This value applies to both ECS and elastic container instance scaling groups.
   * - LOAD_BALANCER: determines the health status of instances based on the health check results of load balancing. Classic Load Balancer (CLB) is not supported.
   * Default value: ECS.
   * 
   * > To enable both instance health checks and load balancer health checks, use the HealthCheckTypes parameter.
   * 
   * @example
   * ECS
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The health check modes of the scaling group.
   * 
   * > You can use this parameter to specify multiple values to enable multiple health check options. If the HealthCheckType parameter is configured, this parameter is ignored.
   */
  healthCheckTypes?: string[];
  /**
   * @remarks
   * The ID of the instance launch template, which is used to specify that the scaling group obtains launch configuration information from the instance launch template.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The extended instance type information of the launch template.
   */
  launchTemplateOverrides?: ModifyScalingGroupRequestLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version of the instance launch template. Valid values:
   *          
   * - A specific template version number.
   * - Default: always uses the default version of the template.
   * - Latest: always uses the latest version of the template.
   * 
   * @example
   * Default
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The maximum lifetime of an instance in the scaling group. Unit: seconds.
   * 
   * Valid values: 0 or [86400, Integer.maxValue]. A value of 0 indicates that the configured value of MaxInstanceLifetime is cleared (that is, MaxInstanceLifetime is not configured).
   * 
   * Default value: null.
   * 
   * > This parameter cannot be configured for scaling groups of the elastic container instance type or scaling groups that have the no fees for stopped instances feature enabled.
   * 
   * @example
   * 86400
   */
  maxInstanceLifetime?: number;
  /**
   * @remarks
   * The maximum number of ECS instances or elastic container instances in the scaling group. If the number of ECS instances or elastic container instances in the scaling group exceeds the value of MaxSize, Auto Scaling automatically removes ECS instances or elastic container instances.
   * 
   * <props="china">The value range of MaxSize varies based on the usage of Auto Scaling. Go to the [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to view the quota value for the **maximum number of instances in a single scaling group**.
   * 
   * <props="intl">The value range of MaxSize varies based on the usage of Auto Scaling. Go to the [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to view the quota value for the **maximum number of instances in a single scaling group**.
   * 
   * <props="partner">The value range of MaxSize varies based on the usage of Auto Scaling. Go to the Quota Center to view the quota value for the **maximum number of instances in a single scaling group**.
   * 
   * For example, if the quota value for the **maximum number of instances in a single scaling group** is 2000, the value range of MaxSize is 0 to 2000.
   * 
   * @example
   * 99
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum number of ECS instances or elastic container instances in the scaling group. If the number of ECS instances or elastic container instances in the scaling group is less than the value of MinSize, Auto Scaling initiates the automatic creation of ECS instances or elastic container instances.
   * 
   * > The value of MinSize must be less than or equal to the value of MaxSize.
   * 
   * @example
   * 1
   */
  minSize?: number;
  /**
   * @remarks
   * The scaling policy for ECS instances in a multi-zone scaling group. Valid values:
   * 
   * - PRIORITY: scales the scaling group based on the priorities of vSwitches (VSwitchIds.N). Auto Scaling preferentially attempts to scale the scaling group in the zone where the vSwitch with the highest priority resides. If the scaling fails, Auto Scaling automatically attempts to scale the scaling group in the zone where the vSwitch with the next highest priority resides.
   * 
   * - COST_OPTIMIZED: during scale-out, Auto Scaling attempts to create ECS instances in ascending order of vCPU unit price. During scale-in, Auto Scaling attempts to remove ECS instances in descending order of vCPU unit price. If the scaling configuration specifies multiple instance types that use the spot billing method, spot instances are preferentially created. You can use the CompensateWithOnDemand parameter to specify whether Auto Scaling automatically attempts to create pay-as-you-go instances when spot instances cannot be created.
   * 
   * > COST_OPTIMIZED takes effect only when the scaling configuration specifies multiple instance types or uses spot instances.
   * 
   * - BALANCE: evenly allocate ECS instances across the active zones specified for the scaling group. If the instances are unevenly distributed across zones due to insufficient inventory, you can call the RebalanceInstance operation to balance the resources.
   * 
   * - COMPOSABLE: a composite policy that allows you to combine the preceding scaling policies for ECS instances in a multi-zone scaling group based on your needs.
   * 
   * @example
   * PRIORITY
   */
  multiAZPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than this value, pay-as-you-go instances are preferentially created.
   * 
   * Default value: 0 when the MultiAZPolicy parameter is set to COMPOSABLE.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the extra instances that exceed the minimum number of pay-as-you-go instances specified by OnDemandBaseCapacity. Valid values: 0 to 100.
   * 
   * Default value: 100 when the MultiAZPolicy parameter is set to COMPOSABLE.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The scale-in policy of the scaling group, which specifies the ECS instances to be removed. Valid values:
   * 
   * - OldestInstance: removes the ECS instances that were added to the scaling group at the earliest point in time.
   * 
   * - NewestInstance: removes the ECS instances that were added to the scaling group at the latest point in time.
   * 
   * - OldestScalingConfiguration: removes the ECS instances that were created by using the earliest scaling configuration.
   */
  removalPolicies?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the scaling group to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1ffogfdauy0jw0****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The name of the scaling group. The name must be unique within a region. The name must be 2 to 64 characters in length and start with a letter, digit, or Chinese character. It can contain digits, underscores (_), hyphens (-), and periods (.).
   * 
   * @example
   * scalinggroup****
   */
  scalingGroupName?: string;
  /**
   * @remarks
   * The revoke pattern of the scaling group. Valid values: 
   * 
   * - recycle: The revoke pattern of the scaling group is shutdown and revoke pattern.  
   * - release: The revoke pattern of the scaling group is release pattern.
   * - forcerelease: The revoke pattern of the scaling group is forcible release pattern.
   * 
   *     > If you select forcerelease, the system forcibly releases instances in the Running state during scale-down activities. Forcibly releasing an instance is equivalent to a power-off operation, which erases temporary data in the memory and storage of the instance. The data cannot be recovered. Proceed with caution.
   * 
   * - forcerecycle: The revoke pattern of the scaling group is forcible shutdown and revoke pattern.
   * 
   *     > If you select forcerecycle, the system forcibly shuts down instances in the Running state during scale-down activities. Forcible shutdown is equivalent to a power-off operation, which erases temporary data in the memory and storage of the instance. The data cannot be recovered. Proceed with caution.
   * 
   * The ScalingPolicy parameter specifies the revoke pattern of the scaling group. However, the specific action when an instance is removed from the scaling group is determined by the RemovePolicy parameter of the RemoveInstances operation. For more information, see [RemoveInstances](https://help.aliyun.com/document_detail/25955.html).
   * 
   * @example
   * recycle
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The spot capacity distribution policy. You can use this parameter to separately specify the distribution policy for spot capacity. This parameter takes effect only when the MultiAZPolicy parameter is set to COMPOSABLE. Valid values:
   * 
   * - priority: creates instances in the order of the configured instance types.
   * - lowestPrice: creates instances in ascending order of the vCPU unit price of the instance types.
   * 
   * Default value: priority.
   * 
   * @example
   * lowestPrice
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The number of available instance types. The scaling group evenly creates spot instances across multiple instance types with the lowest cost. Valid values: 0 to 10.
   * 
   * Default value: 2 when the MultiAZPolicy parameter is set to COMPOSABLE.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable the spot instance replenishment feature. After this feature is enabled, when the scaling group receives a system message indicating that a spot instance will be reclaimed, the scaling group attempts to create a new instance to replace the spot instance to be reclaimed.
   * 
   * @example
   * true
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The timeout period for waiting for an ECS instance to be successfully stopped during the scale-in flow. Unit: seconds.
   * Valid values: 30 to 240.
   * 
   * > - This parameter takes effect only in the scale-in flow when ScalingPolicy is set to the release pattern.  
   * > - If the Settings of this parameter are configured, the system waits for a maximum of the StopInstanceTimeout period for the instance to be successfully stopped. After the timeout period elapses, the scale-in flow continues regardless of whether the instance is successfully stopped.  
   * > - If the Settings of this parameter are not configured, the system waits for a long time for the instance to be successfully stopped. The scale-in flow continues only after the instance is successfully stopped. If the instance stop has failed, the scale-in flow will rollback and the scale-in has failed.
   * > - A value of 0 indicates that the parameter settings of this parameter are canceled.
   * 
   * @example
   * 60
   */
  stopInstanceTimeout?: number;
  /**
   * @remarks
   * The IDs of one or more vSwitches.
   * 
   * This parameter takes effect only when the network type of the scaling group is VPC. The VPC to which the specified vSwitches belong must be the same as the VPC to which the scaling group belongs.
   * 
   * The vSwitches can reside in different zones. The priorities of vSwitches are sorted in ascending order of numbers. 1 indicates the highest priority. If ECS instances cannot be created in the zone where the vSwitch with a higher priority resides, the vSwitch with the next highest priority is automatically selected to create ECS instances.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The behavior policy of the scaling group during zone shift.
   */
  zoneShiftPolicy?: ModifyScalingGroupRequestZoneShiftPolicy;
  static names(): { [key: string]: string } {
    return {
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      allocationStrategy: 'AllocationStrategy',
      autoRebalance: 'AutoRebalance',
      azBalance: 'AzBalance',
      balanceMode: 'BalanceMode',
      capacityOptions: 'CapacityOptions',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      customPolicyARN: 'CustomPolicyARN',
      defaultCooldown: 'DefaultCooldown',
      desiredCapacity: 'DesiredCapacity',
      disableDesiredCapacity: 'DisableDesiredCapacity',
      groupDeletionProtection: 'GroupDeletionProtection',
      healthCheckType: 'HealthCheckType',
      healthCheckTypes: 'HealthCheckTypes',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateOverrides: 'LaunchTemplateOverrides',
      launchTemplateVersion: 'LaunchTemplateVersion',
      maxInstanceLifetime: 'MaxInstanceLifetime',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      multiAZPolicy: 'MultiAZPolicy',
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      removalPolicies: 'RemovalPolicies',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
      scalingGroupName: 'ScalingGroupName',
      scalingPolicy: 'ScalingPolicy',
      spotAllocationStrategy: 'SpotAllocationStrategy',
      spotInstancePools: 'SpotInstancePools',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      stopInstanceTimeout: 'StopInstanceTimeout',
      vSwitchIds: 'VSwitchIds',
      zoneShiftPolicy: 'ZoneShiftPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeScalingConfigurationId: 'string',
      allocationStrategy: 'string',
      autoRebalance: 'boolean',
      azBalance: 'boolean',
      balanceMode: 'string',
      capacityOptions: ModifyScalingGroupRequestCapacityOptions,
      compensateWithOnDemand: 'boolean',
      customPolicyARN: 'string',
      defaultCooldown: 'number',
      desiredCapacity: 'number',
      disableDesiredCapacity: 'boolean',
      groupDeletionProtection: 'boolean',
      healthCheckType: 'string',
      healthCheckTypes: { 'type': 'array', 'itemType': 'string' },
      launchTemplateId: 'string',
      launchTemplateOverrides: { 'type': 'array', 'itemType': ModifyScalingGroupRequestLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      maxInstanceLifetime: 'number',
      maxSize: 'number',
      minSize: 'number',
      multiAZPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      removalPolicies: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
      scalingGroupName: 'string',
      scalingPolicy: 'string',
      spotAllocationStrategy: 'string',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      stopInstanceTimeout: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneShiftPolicy: ModifyScalingGroupRequestZoneShiftPolicy,
    };
  }

  validate() {
    if(this.capacityOptions && typeof (this.capacityOptions as any).validate === 'function') {
      (this.capacityOptions as any).validate();
    }
    if(Array.isArray(this.healthCheckTypes)) {
      $dara.Model.validateArray(this.healthCheckTypes);
    }
    if(Array.isArray(this.launchTemplateOverrides)) {
      $dara.Model.validateArray(this.launchTemplateOverrides);
    }
    if(Array.isArray(this.removalPolicies)) {
      $dara.Model.validateArray(this.removalPolicies);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    if(this.zoneShiftPolicy && typeof (this.zoneShiftPolicy as any).validate === 'function') {
      (this.zoneShiftPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

