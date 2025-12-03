// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupsResponseBodyScalingGroupsAlbServerGroups extends $dara.Model {
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
   * The port number used by an ECS instance as a backend server in the ALB server group.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The weight of an ECS instance as a backend server in the ALB server group.
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

export class DescribeScalingGroupsResponseBodyScalingGroupsCapacityOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether pay-as-you-go ECS instances can be automatically created to reach the required number of ECS instances when preemptible ECS instances cannot be created due to high prices or insufficient inventory of resources. This parameter takes effect when you set `MultiAZPolicy` to `COST_OPTIMIZED`. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. When the actual number of pay-as-you-go instances drops below the minimum threshold, Auto Scaling preferentially creates pay-as-you-go instances. Valid values: 0 to 1000.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances in the excess instances when the minimum number of pay-as-you-go instances is reached. `OnDemandBaseCapacity` specifies the minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 100.
   * 
   * @example
   * 0
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * Indicates how prices are compared. Valid values:
   * 
   * *   PricePerUnit: Prices are compared based on the price per instance capacity.
   * 
   *     Capacity is determined by the weights assigned to instance types in the scaling group. If no weight is specified, a default weight of 1 is used, meaning each instance is assigned a capacity of 1.
   * 
   * *   PricePerVCpu: Prices are compared based on the price per vCPU.
   * 
   * @example
   * PricePerUnit
   */
  priceComparisonMode?: string;
  /**
   * @remarks
   * Specifies whether to replace pay-as-you-go ECS instances with preemptible ECS instances. If you specify `CompensateWithOnDemand`, it may result in a higher percentage of pay-as-you-go instances compared to the value of `OnDemandPercentageAboveBaseCapacity`. In this scenario, Auto Scaling will try to deploy preemptible ECS instances to replace the surplus pay-as-you-go ECS instances. When `CompensateWithOnDemand` is specified, Auto Scaling creates pay-as-you-go ECS instances if there are not enough preemptible instance types available. To avoid keeping these pay-as-you-go ECS instances for long periods, Auto Scaling tries to replace them with preemptible instances as soon as enough of preemptible instance types become available. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
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

export class DescribeScalingGroupsResponseBodyScalingGroupsDBInstances extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * rm-m5eqju85s45mu0***
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The IDs of the security groups that are added to the security group whitelist of the attached database.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   RDS.
   * *   Redis.
   * *   MongoDB.
   * 
   * @example
   * RDS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      securityGroupIds: 'SecurityGroupIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsLaunchTemplateOverrides extends $dara.Model {
  /**
   * @remarks
   * The instance type. The instance type that is specified by this parameter overrides the instance type that is specified in the launch template.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum bid price of the instance type that is specified by `LaunchTemplateOverride.InstanceType`.
   * 
   * >  This parameter takes effect only if you use `LaunchTemplateId` to specify a launch template.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The weight of the instance type. The value of this parameter indicates the capacity of a single instance of the specified instance type in the scaling group. A higher weight indicates that a smaller number of instances of the specified instance type are required to meet the expected capacity.
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

export class DescribeScalingGroupsResponseBodyScalingGroupsLoadBalancerConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-2zep8alpq5zq1a2xwyxxx
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The weight of an ECS instance as a backend server in the CLB server group. An increase in the weight of an ECS instance indicates an increase in the number of access requests that are forwarded to the ECS instance. If you set the weight of an ECS instance to 0, no access requests are forwarded to the ECS instance. Valid values: 0 to 100.
   * 
   * @example
   * 10
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

export class DescribeScalingGroupsResponseBodyScalingGroupsServerGroups extends $dara.Model {
  /**
   * @remarks
   * The port number used by an ECS instance as a backend server in the server group.
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
   * The type of the server group. Valid values:
   * 
   * *   ALB
   * *   NLB
   * 
   * @example
   * ALB
   */
  type?: string;
  /**
   * @remarks
   * The weight of an ECS instance as a backend server in the server group.
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

export class DescribeScalingGroupsResponseBodyScalingGroupsTags extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tags of the scaling group can be propagated to instances. Valid values:
   * 
   * *   true: The tags of the scaling group can be propagated only to new instances.
   * *   false: The tags of the scaling group cannot be propagated to instances.
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

export class DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes extends $dara.Model {
  /**
   * @remarks
   * The port number that is used by the load balancer to provide external services.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend vServer group.
   * 
   * @example
   * rsp-bp12bjrny****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The weight of the backend vServer group.
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

export class DescribeScalingGroupsResponseBodyScalingGroupsVServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the load balancer to which the backend vServer group belongs.
   * 
   * @example
   * 147b46d767c-cn-qingdao-cm5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The attributes of the backend vServer groups.
   */
  VServerGroupAttributes?: DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes },
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

export class DescribeScalingGroupsResponseBodyScalingGroups extends $dara.Model {
  /**
   * @remarks
   * The number of ECS instances that are in the In Service state in the scaling group.
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
   * The Application Load Balancer (ALB) server groups.
   */
  albServerGroups?: DescribeScalingGroupsResponseBodyScalingGroupsAlbServerGroups[];
  /**
   * @remarks
   * The instance allocation policy. Auto Scaling selects instance types based on the allocation policy to create the required number of preemptible instances. The policy is suitable for pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set `MultiAZPolicy` to `COMPOSABLE`. Valid values:
   * 
   * *   priority: Auto Scaling adopts the predefined instance type sequence to create the required number of preemptible instances.
   * *   lowestPrice: Auto Scaling selects instance types that have the most economical vCPU pricing to create the required number of instances.
   * 
   * @example
   * priority
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * Whether to enable automatic rebalancing for the scaling group. This takes effect only when BalancedOnly is enabled for the scaling group. Valid value:
   * 
   * *   false: Auto rebalancing is disabled for the scaling group.
   * *   true: If Auto rebalancing is enabled, the scaling group automatically detects the capacity of the zone. If the capacity of the zone is unbalanced, the scaling group actively scales out the zone and re-balances the capacity of the zone.
   * 
   * @example
   * false
   */
  autoRebalance?: boolean;
  /**
   * @remarks
   * Indicates whether instances in the scaling group are evenly distributed across the specified zones. This parameter takes effect only if you set `MultiAZPolicy` to `COMPOSABLE`. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  azBalance?: boolean;
  /**
   * @remarks
   * The zone balancing mode. This mode takes effect only when the zone balancing mode is enabled. Valid value:
   * 
   * *   Default value: BalancedBestEffort. If a resource fails to be created in a zone, the resource is downgraded to another zone. This ensures best-effort delivery of the resource.
   * *   BalancedOnly: If a resource fails to be created in a zone, the resource is not downgraded to another zone. The scale-out activity is partially successful to avoid excessive imbalance of resources in different zones.
   * 
   * @example
   * BalancedBestEffort
   */
  balanceMode?: string;
  /**
   * @remarks
   * The capacity options.
   */
  capacityOptions?: DescribeScalingGroupsResponseBodyScalingGroupsCapacityOptions;
  /**
   * @remarks
   * Indicates whether Auto Scaling can create pay-as-you-go instances to supplement preemptible instances if preemptible instances cannot be created due to price-related factors or insufficient inventory when MultiAZPolicy is set to COST_OPTIMIZED. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The time when the scaling group was created.
   * 
   * @example
   * 2014-08-14T10:58Z
   */
  creationTime?: string;
  /**
   * @remarks
   * >  This parameter is unavailable.
   * 
   * @example
   * hostname
   */
  currentHostName?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the function that is specified in the custom scale-in policy. This parameter takes effect only if you set the first value of RemovalPolicies to CustomPolicy.
   * 
   * @example
   * acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name
   */
  customPolicyARN?: string;
  /**
   * @remarks
   * The IDs of the ApsaraDB RDS instances that are attached to the scaling group.
   */
  DBInstanceIds?: string[];
  /**
   * @remarks
   * The databases that are attached to the scaling group.
   */
  DBInstances?: DescribeScalingGroupsResponseBodyScalingGroupsDBInstances[];
  /**
   * @remarks
   * The cooldown period of the scaling group. During the cooldown period, Auto Scaling does not execute the scaling activities that are triggered by [CloudMonitor](https://help.aliyun.com/document_detail/35170.html) event-triggered tasks.
   * 
   * @example
   * 60
   */
  defaultCooldown?: number;
  /**
   * @remarks
   * The expected number of ECS instances in the scaling group. Auto Scaling automatically maintains the expected number of ECS instances.
   * 
   * @example
   * 5
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * Indicates whether the Expected Number of Instances feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableDesiredCapacity?: boolean;
  /**
   * @remarks
   * Indicates whether the Deletion Protection feature is enabled for the scaling group. Valid values:
   * 
   * *   true: The Deletion Protection feature is enabled for the scaling group. The scaling group cannot be deleted.
   * *   false: The Deletion Protection feature is disabled for the scaling group.
   * 
   * @example
   * true
   */
  groupDeletionProtection?: boolean;
  /**
   * @remarks
   * The type of instances that are managed by the scaling group.
   * 
   * @example
   * ECS
   */
  groupType?: string;
  /**
   * @remarks
   * The health check mode of the scaling group. Valid values:
   * 
   * *   NONE: Auto Scaling does not perform health checks.
   * *   ECS: Auto Scaling checks the health status of instances in the scaling group. If you want to enable instance health check, you can set the value to ECS, regardless of whether the scaling group is of ECS type or Elastic Container Instance type.
   * *   LOAD_BALANCER: Auto Scaling checks the health status of instances in the scaling group based on the health check results of load balancers. The health check results of Classic Load Balancer (CLB) instances are not supported as the health check basis for instances in the scaling group.
   * 
   * @example
   * ECS
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The health check mode of the scaling group. Valid values:
   * 
   * *   NONE: Auto Scaling does not perform health checks.
   * *   ECS: Auto Scaling checks the health status of instances in the scaling group. If you want to enable instance health check, you can set the value to ECS, regardless of whether the scaling group is of ECS type or Elastic Container Instance type.
   * *   LOAD_BALANCER: Auto Scaling checks the health status of instances in the scaling group based on the health check results of load balancers. The health check results of CLB instances are not supported as the health check basis for instances in the scaling group.
   */
  healthCheckTypes?: string[];
  /**
   * @remarks
   * The number of instances that are initialized before they are added into the scaling group.
   * 
   * @example
   * 0
   */
  initCapacity?: number;
  /**
   * @remarks
   * >  This parameter is not available for use.
   * 
   * @example
   * false
   */
  isElasticStrengthInAlarm?: boolean;
  /**
   * @remarks
   * The ID of the launch template that is used by the scaling group.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The instance types that are extended in the launch template.
   */
  launchTemplateOverrides?: DescribeScalingGroupsResponseBodyScalingGroupsLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version of the launch template that is used by the scaling group.
   * 
   * @example
   * Default
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The status of the scaling group. Valid values:
   * 
   * *   Active: The scaling group is active. Active scaling groups can receive requests to execute scaling rules and trigger scaling activities.
   * *   Inactive: The scaling group is in the Disabled state. Disabled scaling groups cannot receive requests to execute scaling rules.
   * *   Deleting: The scaling group is being deleted. Scaling groups that are being deleted cannot receive requests to execute scaling rules, and the parameter settings of the scaling groups cannot be modified.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The load balancer configurations.
   */
  loadBalancerConfigs?: DescribeScalingGroupsResponseBodyScalingGroupsLoadBalancerConfigs[];
  /**
   * @remarks
   * The IDs of the load balancers that are attached to the scaling group.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The maximum life span of each ECS instance in the scaling group. Unit: seconds.
   * 
   * Valid values: 0 or `[86400, Integer.maxValue]`. A value of 0 for MaxInstanceLifetime indicates that a previously set limit has been removed. This effectively disables the maximum instance lifetime constraint.
   * 
   * Default value: null.
   * 
   * >  This parameter is not supported by scaling groups of the Elastic Container Instance type and scaling groups whose ScalingPolicy is set to Recycle.
   * 
   * @example
   * null
   */
  maxInstanceLifetime?: number;
  /**
   * @remarks
   * The maximum number of ECS instances that can be contained in the scaling group.
   * 
   * @example
   * 2
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum number of ECS instances that must be contained in the scaling group.
   * 
   * @example
   * 1
   */
  minSize?: number;
  /**
   * @remarks
   * The time when the scaling group was last modified.
   * 
   * @example
   * 2014-08-14T10:58Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The ID of the CloudMonitor application group that is associated with the scaling group.
   * 
   * @example
   * 1497****
   */
  monitorGroupId?: string;
  /**
   * @remarks
   * The scaling policy of the ECS instances in the multi-zone scaling group. Valid values:
   * 
   * *   PRIORITY: ECS instances are created based on the value of VSwitchIds. If Auto Scaling cannot create ECS instances in the zone where the vSwitch of the highest priority resides, Auto Scaling creates ECS instances in the zone where the vSwitch of the next highest priority resides.
   * 
   * *   COST_OPTIMIZED: ECS instances are created based on the unit prices of their vCPUs. Auto Scaling preferentially creates ECS instances whose vCPUs are provided at the lowest price. If preemptible instance types are specified in the scaling configuration, Auto Scaling preferentially creates preemptible instances. You can also specify CompensateWithOnDemand to allow Auto Scaling to create pay-as-you-go instances if preemptible instances cannot be created due to limited stock.
   * 
   *     **
   * 
   *     **Note** The COST_OPTIMIZED setting takes effect only if your scaling configuration contains multiple instance types or contains preemptible instance types.
   * 
   * *   BALANCE: ECS instances are evenly distributed across the zones that are specified for the scaling group. If ECS instances become unevenly distributed across the specified zones due to limited instance type availability, you can call the RebalanceInstance operation to balance the distribution of the ECS instances.
   * 
   * @example
   * PRIORITY
   */
  multiAZPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances that must be contained in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances in excess when the minimum number of pay-as-you-go instances reaches the threshold. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The number of ECS instances that are being added to the scaling group and configured.
   * 
   * @example
   * 0
   */
  pendingCapacity?: number;
  /**
   * @remarks
   * The number of ECS instances that are in the Pending Add state in the scaling group.
   * 
   * @example
   * 1
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
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The instance removal policies. Valid values:
   * 
   * *   OldestInstance: Auto Scaling removes ECS instances that are added at the earliest point in time to the scaling group.
   * *   NewestInstance: Auto Scaling removes ECS instances that are most recently added to the scaling group.
   * *   OldestScalingConfiguration: Auto Scaling removes ECS instances that are created from the earliest scaling configuration.
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
   * The number of ECS instances that are in the Pending Remove state in the scaling group.
   * 
   * @example
   * 1
   */
  removingWaitCapacity?: number;
  /**
   * @remarks
   * The ID of the resource group to which the scaling group belongs.
   * 
   * @example
   * rg-123****
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
   * The name of the scaling group.
   * 
   * @example
   * dyrSuvBOtO1dEdIlIbp****
   */
  scalingGroupName?: string;
  /**
   * @remarks
   * The instance reclaim mode of the scaling group. Valid values:
   * 
   * *   recycle: economical mode.
   * *   release: release mode.
   * *   forcerelease: forced release mode.
   * 
   * For more information, see [RemoveInstances](https://help.aliyun.com/document_detail/25955.html).
   * 
   * @example
   * recycle
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The server groups.
   * 
   * >  You can use this parameter to obtain information about ALB server groups and Network Load Balancer (NLB) server groups attached to the scaling group.
   */
  serverGroups?: DescribeScalingGroupsResponseBodyScalingGroupsServerGroups[];
  /**
   * @remarks
   * The allocation policy of preemptible instances. This parameter indicates the manner in which Auto Scaling selects instance types to create the required number of preemptible instances. This parameter takes effect only if you set `MultiAZPolicy` to `COMPOSABLE`. Valid values:
   * 
   * *   priority: Auto Scaling adopts the predefined instance type sequence to create the required number of preemptible instances.
   * *   lowestPrice: Auto Scaling selects instance types that have the most economical vCPU pricing to create the required number of preemptible instances.
   * 
   * Default value: priority.
   * 
   * @example
   * lowestPrice
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The number of preemptible instances in the scaling group.
   * 
   * @example
   * 0
   */
  spotCapacity?: number;
  /**
   * @remarks
   * The number of instance types in the scaling group. Auto Scaling evenly creates preemptible instances of multiple instance types that are provided at the lowest price across the zones of the scaling group. Valid values: 0 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Indicates whether preemptible instances can be supplemented. If this parameter is set to true, Auto Scaling proactively creates instances to replace the preemptible instances for reclamation when Auto Scaling receives a system notification.
   * 
   * @example
   * true
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The number of ECS instances that are in the Standby state in the scaling group.
   * 
   * @example
   * 1
   */
  standbyCapacity?: number;
  /**
   * @remarks
   * The period of time that is required by the Elastic Compute Service (ECS) instance to enter the Stopped state during the scale-in process. Unit: seconds.
   * 
   * @example
   * 60
   */
  stopInstanceTimeout?: number;
  /**
   * @remarks
   * The number of instances that was stopped in Economical Mode in the scaling group.
   * 
   * @example
   * 1
   */
  stoppedCapacity?: number;
  /**
   * @remarks
   * The processes that are suspended. If no process is suspended, null is returned. Valid values:
   * 
   * *   ScaleIn: scale-in processes.
   * *   ScaleOut: scale-out processes.
   * *   HealthCheck: health check processes.
   * *   AlarmNotification: event-triggered task processes.
   * *   ScheduledAction: scheduled task processes.
   */
  suspendedProcesses?: string[];
  /**
   * @remarks
   * Indicates whether Auto Scaling stops executing scaling activities in the scaling group. Valid values:
   * 
   * *   true: Auto Scaling stops executing scaling activities in the scaling group if the scaling activities failed for more than seven consecutive days in the scaling group. In this case, you must modify the scaling group or scaling configuration to resume the scaling activities.
   * *   false: Auto Scaling does not stop executing scaling activities in the scaling group.
   * 
   * @example
   * true
   */
  systemSuspended?: boolean;
  /**
   * @remarks
   * The tags of the scaling group.
   */
  tags?: DescribeScalingGroupsResponseBodyScalingGroupsTags[];
  /**
   * @remarks
   * The total weighted capacity of all ECS instances in the scaling group if Weighted is specified. In other cases, this parameter specifies the total number of ECS instances in the scaling group.
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
   * The backend vServer groups.
   */
  VServerGroups?: DescribeScalingGroupsResponseBodyScalingGroupsVServerGroups[];
  /**
   * @remarks
   * The vSwitch ID of the scaling group.
   * 
   * @example
   * vsw-bp1whw2u46cn8zubm****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches that are associated with the scaling group. If you specify VSwitchIds, VSwitchId is ignored.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the scaling group resides.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      activeCapacity: 'ActiveCapacity',
      activeScalingConfigurationId: 'ActiveScalingConfigurationId',
      albServerGroups: 'AlbServerGroups',
      allocationStrategy: 'AllocationStrategy',
      autoRebalance: 'AutoRebalance',
      azBalance: 'AzBalance',
      balanceMode: 'BalanceMode',
      capacityOptions: 'CapacityOptions',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      creationTime: 'CreationTime',
      currentHostName: 'CurrentHostName',
      customPolicyARN: 'CustomPolicyARN',
      DBInstanceIds: 'DBInstanceIds',
      DBInstances: 'DBInstances',
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
      spotCapacity: 'SpotCapacity',
      spotInstancePools: 'SpotInstancePools',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      standbyCapacity: 'StandbyCapacity',
      stopInstanceTimeout: 'StopInstanceTimeout',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCapacity: 'number',
      activeScalingConfigurationId: 'string',
      albServerGroups: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsAlbServerGroups },
      allocationStrategy: 'string',
      autoRebalance: 'boolean',
      azBalance: 'boolean',
      balanceMode: 'string',
      capacityOptions: DescribeScalingGroupsResponseBodyScalingGroupsCapacityOptions,
      compensateWithOnDemand: 'boolean',
      creationTime: 'string',
      currentHostName: 'string',
      customPolicyARN: 'string',
      DBInstanceIds: { 'type': 'array', 'itemType': 'string' },
      DBInstances: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsDBInstances },
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
      launchTemplateOverrides: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      lifecycleState: 'string',
      loadBalancerConfigs: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsLoadBalancerConfigs },
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
      serverGroups: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsServerGroups },
      spotAllocationStrategy: 'string',
      spotCapacity: 'number',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      standbyCapacity: 'number',
      stopInstanceTimeout: 'number',
      stoppedCapacity: 'number',
      suspendedProcesses: { 'type': 'array', 'itemType': 'string' },
      systemSuspended: 'boolean',
      tags: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsTags },
      totalCapacity: 'number',
      totalInstanceCount: 'number',
      VServerGroups: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsVServerGroups },
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.albServerGroups)) {
      $dara.Model.validateArray(this.albServerGroups);
    }
    if(this.capacityOptions && typeof (this.capacityOptions as any).validate === 'function') {
      (this.capacityOptions as any).validate();
    }
    if(Array.isArray(this.DBInstanceIds)) {
      $dara.Model.validateArray(this.DBInstanceIds);
    }
    if(Array.isArray(this.DBInstances)) {
      $dara.Model.validateArray(this.DBInstances);
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The scaling groups.
   */
  scalingGroups?: DescribeScalingGroupsResponseBodyScalingGroups[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingGroups: 'ScalingGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingGroups: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroups },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scalingGroups)) {
      $dara.Model.validateArray(this.scalingGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

