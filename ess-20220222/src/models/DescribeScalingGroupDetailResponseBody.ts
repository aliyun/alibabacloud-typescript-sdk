// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupDetailResponseBodyScalingGroupAlbServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the ALB server group.
   * 
   * @example
   * sgp-ddwb0y0g6y9bjm****
   */
  albServerGroupId?: string;
  /**
   * @remarks
   * The port number used by the instance after Auto Scaling adds the instance to the ALB server group.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The weight of the instance as a backend server after Auto Scaling adds the instance to the ALB server group.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      albServerGroupId: 'AlbServerGroupId',
      port: 'Port',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroupId: 'string',
      port: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupDetailResponseBodyScalingGroupLaunchTemplateOverrides extends $dara.Model {
  /**
   * @remarks
   * The specified instance type, which overrides the instance type in the launch template.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum price for the spot instance type specified by LaunchTemplateOverride.InstanceType.
   * > This parameter takes effect only when the LaunchTemplateId parameter is specified.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The weight of the instance type, which indicates the capacity of a single instance of this instance type in the scaling group. A greater weight indicates that fewer instances of this instance type are required to meet the expected capacity.
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupLoadBalancerConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the load balancing CLB (formerly SLB) instance.
   * 
   * @example
   * lb-2zein3ytoeq49cmkbyxr0
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupDetailResponseBodyScalingGroupServerGroups extends $dara.Model {
  /**
   * @remarks
   * The port number used by the instance after Auto Scaling adds the instance to the server group.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-i9ouakeaerr*****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The type of the load balancing server group. Valid values:
   * 
   * - ALB: Application Load Balancer (ALB).
   * - NLB: Network Load Balancer (NLB).
   * - GWLB: Gateway Load Balancer (GWLB).
   * 
   * @example
   * ALB
   */
  type?: string;
  /**
   * @remarks
   * The weight of the instance as a backend server after Auto Scaling adds the instance to the server group.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverGroupId: 'ServerGroupId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverGroupId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupDetailResponseBodyScalingGroupTags extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tag is propagated. Valid values:
   * - true: Tags on the scaling group are propagated only to newly created instances, and not to instances that are already running in the scaling group.
   * - false: Tags on the scaling group are not propagated to instances.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  propagate?: boolean;
  /**
   * @remarks
   * The tag key of the scaling group.
   * 
   * @example
   * Department
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the scaling group.
   * 
   * @example
   * Finance
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      propagate: 'Propagate',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propagate: 'boolean',
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroupsVServerGroupAttributes extends $dara.Model {
  /**
   * @remarks
   * The Server Port of the backend server.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server group.
   * 
   * @example
   * rsp-bp12bjrny****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The weight of the backend server group.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      VServerGroupId: 'VServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      VServerGroupId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the traditional load balancing CLB (formerly SLB) instance to which the virtual server group (virtual service) belongs.
   * 
   * @example
   * 147b46d767c-cn-qingdao-cm5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The attributes of the backend server group.
   */
  VServerGroupAttributes?: DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroupsVServerGroupAttributes },
    };
  }

  validate() {
    if(Array.isArray(this.VServerGroupAttributes)) {
      $dara.Model.validateArray(this.VServerGroupAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupDetailResponseBodyScalingGroupZoneShiftOptionsZoneShiftPolicy extends $dara.Model {
  /**
   * @remarks
   * The health check behavior in impaired zones. Valid values: 
   * 
   * - ReplaceUnhealthy: Unhealthy instances in all zones are replaced as usual. 
   * - IgnoreUnhealthy: Unhealthy instances in impaired zones are not replaced, while healthy zones are not affected.
   * 
   * @example
   * ReplaceUnhealthy
   */
  impairedZoneHealthCheckBehavior?: string;
  /**
   * @remarks
   * Blocks scale-in activities triggered by specified types of scaling rules to prevent false scale-in caused by fake improvement of monitoring metrics due to unreachable instances in impaired zones. The blocking scope applies to all zones in the scaling group, not just impaired zones. Valid values: 
   * 
   * - StepScalingRule: Blocks scale-in triggered by step scaling rules. 
   * - TargetTrackingScalingRule: Blocks scale-in triggered by target tracking scaling rules. 
   * - None: Does not block scale-in.
   * 
   * @example
   * StepScalingRule
   */
  scaleInBlockedRuleTypes?: string[];
  /**
   * @remarks
   * Specifies whether scale-out creates instances only in healthy zones during the zone shift. Valid values: 
   * 
   * - true: Scale-out creates instances only in healthy zones and skips impaired zones. 
   * - false: Scale-out can create instances in any zone under the scaling group without zone restrictions.
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupZoneShiftOptions extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the zone shift. After the expiration time, the system automatically ends the shift and restores the related zones. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format.
   * 
   * @example
   * 2026-01-01T12:05Z
   */
  expiryTime?: string;
  /**
   * @remarks
   * The list of impaired zone IDs.
   * 
   * @example
   * cn-hangzhou-g
   */
  impairedZoneIds?: string[];
  /**
   * @remarks
   * The behavior policy of the scaling group during the zone shift.
   */
  zoneShiftPolicy?: DescribeScalingGroupDetailResponseBodyScalingGroupZoneShiftOptionsZoneShiftPolicy;
  static names(): { [key: string]: string } {
    return {
      expiryTime: 'ExpiryTime',
      impairedZoneIds: 'ImpairedZoneIds',
      zoneShiftPolicy: 'ZoneShiftPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTime: 'string',
      impairedZoneIds: { 'type': 'array', 'itemType': 'string' },
      zoneShiftPolicy: DescribeScalingGroupDetailResponseBodyScalingGroupZoneShiftOptionsZoneShiftPolicy,
    };
  }

  validate() {
    if(Array.isArray(this.impairedZoneIds)) {
      $dara.Model.validateArray(this.impairedZoneIds);
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

export class DescribeScalingGroupDetailResponseBodyScalingGroup extends $dara.Model {
  /**
   * @remarks
   * The number of ECS instances that have been added to the scaling group and are running properly.
   * 
   * @example
   * 1
   */
  activeCapacity?: number;
  /**
   * @remarks
   * The ID of the active scaling configuration in the scaling group.
   * 
   * @example
   * asc-bp1et2qekq3ojr33****
   */
  activeScalingConfigurationId?: string;
  /**
   * @remarks
   * The information about the Application Load Balancer (ALB) server groups.
   */
  albServerGroups?: DescribeScalingGroupDetailResponseBodyScalingGroupAlbServerGroups[];
  /**
   * @remarks
   * The allocation strategy that determines how the scaling group selects available instance types to meet the capacity requirements. The capacity distribution strategy applies to both pay-as-you-go and spot capacities. This parameter takes effect only when MultiAZPolicy is set to COMPOSABLE. Valid values:
   * - priority: Creates instances based on the order of the configured instance types.
   * - lowestPrice: Creates instances based on the unit price of vCPUs from low to high.
   * 
   * @example
   * priority
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * Specifies whether the capacity of the scaling group is evenly distributed across multiple zones. This parameter takes effect only when MultiAZPolicy is set to COMPOSABLE. Valid values:
   * - true: The capacity of the scaling group is evenly distributed across multiple zones.
   * - false: The capacity of the scaling group is not evenly distributed across multiple zones.
   * 
   * @example
   * false
   */
  azBalance?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances when the number of spot instances cannot be met due to insufficient inventory or price limits. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The time when the scaling group was created. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2014-08-14T10:58Z
   */
  creationTime?: string;
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * hostname
   */
  currentHostName?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Function Compute function for the custom scale-in policy. This parameter takes effect only when the first removal policy in RemovalPolicies is set to CustomPolicy.
   * 
   * @example
   * null
   */
  customPolicyARN?: string;
  /**
   * @remarks
   * The IDs of the ApsaraDB RDS instances associated with the scaling group.
   */
  DBInstanceIds?: string[];
  /**
   * @remarks
   * The cooldown time. Unit: seconds.
   * 
   * @example
   * 60
   */
  defaultCooldown?: number;
  /**
   * @remarks
   * The expected number of instances in the scaling group. The scaling group automatically maintains the number of ECS instances at this expected value.
   * 
   * @example
   * 5
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * Indicates whether the expected number of instances feature is enabled. Valid values:
   * - true: The expected number of instances feature is enabled.
   * - false: The expected number of instances feature is disabled.
   * 
   * @example
   * true
   */
  enableDesiredCapacity?: boolean;
  /**
   * @remarks
   * Specifies whether deletion protection is enabled for the scaling group. Valid values:
   * - true: Deletion protection is enabled. The scaling group cannot be deleted.
   * - false: Deletion protection is disabled.
   * 
   * @example
   * true
   */
  groupDeletionProtection?: boolean;
  /**
   * @remarks
   * The type of instances managed by the scaling group. Valid values:
   * - ECS: The scaling group manages ECS instances.
   * - ECI: The scaling group manages ECI instances.
   * 
   * @example
   * ECS
   */
  groupType?: string;
  /**
   * @remarks
   * The health check mode of the scaling group. Valid values:
   * - NONE: No health check is performed.
   * - ECS: Health checks are performed on instances in the scaling group. This value applies to both ECS and Elastic Container Instance (ECI) scaling groups.
   * - LOAD_BALANCER: The health status of instances is determined based on the health check results of load balancing (the CLB load balancing type is currently not supported).
   * 
   * @example
   * ECS
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The health check mode of the scaling group. Valid values:
   * 
   * - NONE: No health check is performed.
   * - ECS: Health checks are performed on instances in the scaling group. This value is used to enable instance health checks for both ECS and ECI scaling groups.
   * - LOAD_BALANCER: The health status of instances is determined based on the health check results of load balancing (CLB load balancing is currently not supported).
   */
  healthCheckTypes?: string[];
  /**
   * @remarks
   * The number of instances in the scaling group that are in the initialization state before scale-out.
   * 
   * @example
   * 0
   */
  initCapacity?: number;
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * false
   */
  isElasticStrengthInAlarm?: boolean;
  /**
   * @remarks
   * The ID of the launch template used by the scaling group.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The instance type overrides for the launch template.
   */
  launchTemplateOverrides?: DescribeScalingGroupDetailResponseBodyScalingGroupLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version of the launch template.
   * 
   * @example
   * Default
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The lifecycle state of the scaling group. Valid values:
   * - Active: The scaling group is active. Only active scaling groups can accept requests to execute scaling rules and trigger a scaling activity.
   * - Inactive: The scaling group is inactive. Inactive scaling groups do not accept any requests to execute scaling rules.
   * - Deleting: The scaling group is being deleted. Scaling groups in the Deleting state do not accept any requests to execute scaling rules, and their parameters cannot be modified.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The list of load balancing configurations.
   */
  loadBalancerConfigs?: DescribeScalingGroupDetailResponseBodyScalingGroupLoadBalancerConfigs[];
  /**
   * @remarks
   * The IDs of the load balancing instances associated with the scaling group.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The maximum lifetime of instances in the scaling group. Unit: seconds.
   * Valid values: 0 or [86400, Integer.maxValue]. A value of 0 indicates that the MaxInstanceLifetime value is cleared, which means MaxInstanceLifetime is not configured.
   * Default value: null.
   * > This parameter is not supported for ECI scaling groups or scaling groups that have the economical mode enabled.
   * 
   * @example
   * 86400
   */
  maxInstanceLifetime?: number;
  /**
   * @remarks
   * The maximum number of instances in the scaling group.
   * 
   * @example
   * 2
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum number of instances in the scaling group.
   * 
   * @example
   * 1
   */
  minSize?: number;
  /**
   * @remarks
   * The time when the scaling group was modified. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2014-08-14T10:58Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The ID of the CloudMonitor application group associated with the scaling group.
   * 
   * @example
   * 1497****
   */
  monitorGroupId?: string;
  /**
   * @remarks
   * The scale-out and scale-in policy for ECS instances in a multi-zone scaling group. Valid values:
   * - PRIORITY: Scales instances based on the defined vSwitches (VSwitchIds). If ECS instances cannot be created in the active zone of the vSwitch with the highest priority, the system automatically uses the vSwitch with the next highest priority to create ECS instances.
   * - COST_OPTIMIZED: Attempts to create instances based on the unit price of vCPUs from low to high. If the scaling configuration settings specify multiple instance types that use the spot billing method, the system preferentially creates spot instances. You can use the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when spot instances cannot be created due to insufficient inventory.
   *   > COST_OPTIMIZED is active only when the scaling configuration settings specify multiple instance types or use spot instances.
   * - BALANCE: Evenly allocates ECS instances across the active zones specified for the scaling group. If the distribution across active zones becomes unbalanced due to insufficient inventory, you can call the RebalanceInstance operation to balance the resources.
   * 
   * @example
   * PRIORITY
   */
  multiAZPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. When the number of pay-as-you-go instances in the scaling group is less than this value, the system preferentially creates pay-as-you-go instances.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances to create when the number of instances exceeds the base capacity specified by OnDemandBaseCapacity. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The number of ECS instances that are being added to the scaling group but have not completed the relevant configurations.
   * 
   * @example
   * 0
   */
  pendingCapacity?: number;
  /**
   * @remarks
   * The number of ECS instances that are in the Pending Wait state in the scaling group.
   * 
   * @example
   * 0
   */
  pendingWaitCapacity?: number;
  /**
   * @remarks
   * The number of ECS instances that are in the Protected state in the scaling group.
   * 
   * @example
   * 1
   */
  protectedCapacity?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The scale-in policies used to remove instances from the scaling group.
   */
  removalPolicies?: string[];
  /**
   * @remarks
   * The number of ECS instances that are being removed from the scaling group.
   * 
   * @example
   * 0
   */
  removingCapacity?: number;
  /**
   * @remarks
   * The number of ECS instances that are in the Removing Wait state in the scaling group.
   * 
   * @example
   * 1
   */
  removingWaitCapacity?: number;
  /**
   * @remarks
   * The ID of the resource group to which the new scaling group belongs.
   * > Assigns the new scaling group to the specified resource group. If this parameter is not specified, the scaling group belongs to the default resource group.
   * 
   * @example
   * rg-aek2epf32c4uyji
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp14wlu85wrpchm0****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The name of the scaling group. The name must be unique within a region. It must be 2 to 64 characters in length and start with a digit, a letter, or a Chinese character. It can contain digits, underscores (_), hyphens (-), and periods (.).
   * 
   * @example
   * dyrSuvBOtO1dEdIlIbp****
   */
  scalingGroupName?: string;
  /**
   * @remarks
   * The reclaim mode of the scaling group. Valid values:
   * - recycle: The scaling group uses the shutdown reclaim mode.
   * - release: The scaling group uses the release mode.
   * - forcerelease: The scaling group uses the force release mode.
   * - forcerecycle: The scaling group uses the force shutdown reclaim mode.
   * For more information about the actions on removed instances, see [RemoveInstances](https://help.aliyun.com/document_detail/25955.html).
   * 
   * @example
   * recycle
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The information about the load balancing server groups.
   * 
   * > You can use this parameter to obtain information about the ALB service groups, NLB server groups, and GWLB service groups associated with the scaling group.
   * >
   */
  serverGroups?: DescribeScalingGroupDetailResponseBodyScalingGroupServerGroups[];
  /**
   * @remarks
   * The allocation strategy that determines how the scaling group selects available instance types to meet the capacity requirements. The capacity distribution strategy applies to both pay-as-you-go and spot capacities. This parameter takes effect only when MultiAZPolicy is set to COMPOSABLE. Valid values:
   * - priority: Creates instances based on the order of the configured instance types.
   * - lowestPrice: Creates instances based on the unit price of vCPUs from low to high.
   * 
   * @example
   * lowestPrice
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The number of available instance types. The scaling group creates spot instances of multiple instance types that have the lowest costs and distributes the instances evenly. Valid values: 0 to 10.
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
   * The number of instances that are in the Standby state in the scaling group.
   * 
   * @example
   * 1
   */
  standbyCapacity?: number;
  /**
   * @remarks
   * The number of instances in the scaling group that are in the economical mode.
   * 
   * @example
   * 1
   */
  stoppedCapacity?: number;
  /**
   * @remarks
   * The suspended processes. If no process is suspended, an empty value is returned. Valid values:
   * - ScaleIn: The scale-in process.
   * - ScaleOut: The scale-out process.
   * - HealthCheck: The health check process.
   * - AlarmNotification: The event-triggered task process.
   * - ScheduledAction: The scheduled task process.
   */
  suspendedProcesses?: string[];
  /**
   * @remarks
   * Specifies whether Auto Scaling stops executing the scaling activity in the scaling group. Valid values:
   * 
   * - true: Auto Scaling stops executing the scaling activity in the scaling group. This indicates that the scaling group has failed to execute scale-out and scale-in for more than 7 consecutive days. You must modify the scaling group or scaling configuration to recover the execution of the scaling activity.
   * 
   * - false: Auto Scaling executes the scaling activity in the scaling group.
   * 
   * @example
   * true
   */
  systemSuspended?: boolean;
  /**
   * @remarks
   * The collection of tags for the scaling group.
   */
  tags?: DescribeScalingGroupDetailResponseBodyScalingGroupTags[];
  /**
   * @remarks
   * The total weighted capacity of all instances in the scaling group if instance type weights are configured. Otherwise, this parameter indicates the total number of instances in the scaling group.
   * 
   * @example
   * 1
   */
  totalCapacity?: number;
  /**
   * @remarks
   * The total number of ECS instances in the scaling group.
   * 
   * @example
   * 1
   */
  totalInstanceCount?: number;
  /**
   * @remarks
   * The list of backend server groups.
   */
  VServerGroups?: DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroups[];
  /**
   * @remarks
   * The ID of the vSwitch associated with the scaling group.
   * 
   * @example
   * vsw-bp1whw2u46cn8zubm****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches associated with the scaling group. If you specify the VSwitchIds parameter, the VSwitchId parameter is ignored.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-wz9fcq97y1vqkd8bijcq6
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone shift options.
   */
  zoneShiftOptions?: DescribeScalingGroupDetailResponseBodyScalingGroupZoneShiftOptions;
  static names(): { [key: string]: string } {
    return {
      activeCapacity: 'ActiveCapacity',
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      albServerGroups: 'AlbServerGroups',
      allocationStrategy: 'AllocationStrategy',
      azBalance: 'AzBalance',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      creationTime: 'CreationTime',
      currentHostName: 'CurrentHostName',
      customPolicyARN: 'CustomPolicyARN',
      DBInstanceIds: 'DBInstanceIds',
      defaultCooldown: 'DefaultCooldown',
      desiredCapacity: 'DesiredCapacity',
      enableDesiredCapacity: 'EnableDesiredCapacity',
      groupDeletionProtection: 'GroupDeletionProtection',
      groupType: 'GroupType',
      healthCheckType: 'HealthCheckType',
      healthCheckTypes: 'HealthCheckTypes',
      initCapacity: 'InitCapacity',
      isElasticStrengthInAlarm: 'IsElasticStrengthInAlarm',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateOverrides: 'LaunchTemplateOverrides',
      launchTemplateVersion: 'LaunchTemplateVersion',
      lifecycleState: 'LifecycleState',
      loadBalancerConfigs: 'LoadBalancerConfigs',
      loadBalancerIds: 'LoadBalancerIds',
      maxInstanceLifetime: 'MaxInstanceLifetime',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      modificationTime: 'ModificationTime',
      monitorGroupId: 'MonitorGroupId',
      multiAZPolicy: 'MultiAZPolicy',
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      pendingCapacity: 'PendingCapacity',
      pendingWaitCapacity: 'PendingWaitCapacity',
      protectedCapacity: 'ProtectedCapacity',
      regionId: 'RegionId',
      removalPolicies: 'RemovalPolicies',
      removingCapacity: 'RemovingCapacity',
      removingWaitCapacity: 'RemovingWaitCapacity',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupId: 'ScalingGroupId',
      scalingGroupName: 'ScalingGroupName',
      scalingPolicy: 'ScalingPolicy',
      serverGroups: 'ServerGroups',
      spotAllocationStrategy: 'SpotAllocationStrategy',
      spotInstancePools: 'SpotInstancePools',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      standbyCapacity: 'StandbyCapacity',
      stoppedCapacity: 'StoppedCapacity',
      suspendedProcesses: 'SuspendedProcesses',
      systemSuspended: 'SystemSuspended',
      tags: 'Tags',
      totalCapacity: 'TotalCapacity',
      totalInstanceCount: 'TotalInstanceCount',
      VServerGroups: 'VServerGroups',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneShiftOptions: 'ZoneShiftOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCapacity: 'number',
      activeScalingConfigurationId: 'string',
      albServerGroups: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupAlbServerGroups },
      allocationStrategy: 'string',
      azBalance: 'boolean',
      compensateWithOnDemand: 'boolean',
      creationTime: 'string',
      currentHostName: 'string',
      customPolicyARN: 'string',
      DBInstanceIds: { 'type': 'array', 'itemType': 'string' },
      defaultCooldown: 'number',
      desiredCapacity: 'number',
      enableDesiredCapacity: 'boolean',
      groupDeletionProtection: 'boolean',
      groupType: 'string',
      healthCheckType: 'string',
      healthCheckTypes: { 'type': 'array', 'itemType': 'string' },
      initCapacity: 'number',
      isElasticStrengthInAlarm: 'boolean',
      launchTemplateId: 'string',
      launchTemplateOverrides: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      lifecycleState: 'string',
      loadBalancerConfigs: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupLoadBalancerConfigs },
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      maxInstanceLifetime: 'number',
      maxSize: 'number',
      minSize: 'number',
      modificationTime: 'string',
      monitorGroupId: 'string',
      multiAZPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      pendingCapacity: 'number',
      pendingWaitCapacity: 'number',
      protectedCapacity: 'number',
      regionId: 'string',
      removalPolicies: { 'type': 'array', 'itemType': 'string' },
      removingCapacity: 'number',
      removingWaitCapacity: 'number',
      resourceGroupId: 'string',
      scalingGroupId: 'string',
      scalingGroupName: 'string',
      scalingPolicy: 'string',
      serverGroups: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupServerGroups },
      spotAllocationStrategy: 'string',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      standbyCapacity: 'number',
      stoppedCapacity: 'number',
      suspendedProcesses: { 'type': 'array', 'itemType': 'string' },
      systemSuspended: 'boolean',
      tags: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupTags },
      totalCapacity: 'number',
      totalInstanceCount: 'number',
      VServerGroups: { 'type': 'array', 'itemType': DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroups },
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zoneShiftOptions: DescribeScalingGroupDetailResponseBodyScalingGroupZoneShiftOptions,
    };
  }

  validate() {
    if(Array.isArray(this.albServerGroups)) {
      $dara.Model.validateArray(this.albServerGroups);
    }
    if(Array.isArray(this.DBInstanceIds)) {
      $dara.Model.validateArray(this.DBInstanceIds);
    }
    if(Array.isArray(this.healthCheckTypes)) {
      $dara.Model.validateArray(this.healthCheckTypes);
    }
    if(Array.isArray(this.launchTemplateOverrides)) {
      $dara.Model.validateArray(this.launchTemplateOverrides);
    }
    if(Array.isArray(this.loadBalancerConfigs)) {
      $dara.Model.validateArray(this.loadBalancerConfigs);
    }
    if(Array.isArray(this.loadBalancerIds)) {
      $dara.Model.validateArray(this.loadBalancerIds);
    }
    if(Array.isArray(this.removalPolicies)) {
      $dara.Model.validateArray(this.removalPolicies);
    }
    if(Array.isArray(this.serverGroups)) {
      $dara.Model.validateArray(this.serverGroups);
    }
    if(Array.isArray(this.suspendedProcesses)) {
      $dara.Model.validateArray(this.suspendedProcesses);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.VServerGroups)) {
      $dara.Model.validateArray(this.VServerGroups);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    if(this.zoneShiftOptions && typeof (this.zoneShiftOptions as any).validate === 'function') {
      (this.zoneShiftOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The output details of the ECI scaling group. Currently, only the Kubernetes Deployment YAML format is supported.
   * 
   * @example
   * apiVersion: apps/v1
   * kind: Deployment
   * metadata:
   *   name: nginx-deployment
   *   labels:
   *     app: nginx
   *   spec:
   *     replicas: 3
   *     selector:
   *        matchLabels:
   *         app: nginx
   *     template:
   *       metadata:
   *         labels:
   *           app: nginx
   *         annotations:
   *           k8s.aliyun.com/eip-bandwidth: 10
   *           k8s.aliyun.com/eci-with-eip: true
   *         spec:
   *           containers:
   *           - name: nginx
   *             image: nginx:1.14.2
   *             ports:
   *             - containerPort: 80
   */
  output?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The Auto Scaling group.
   */
  scalingGroup?: DescribeScalingGroupDetailResponseBodyScalingGroup;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      requestId: 'RequestId',
      scalingGroup: 'ScalingGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      requestId: 'string',
      scalingGroup: DescribeScalingGroupDetailResponseBodyScalingGroup,
    };
  }

  validate() {
    if(this.scalingGroup && typeof (this.scalingGroup as any).validate === 'function') {
      (this.scalingGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

