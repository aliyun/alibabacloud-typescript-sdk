// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupDetailResponseBodyScalingGroupAlbServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the Application Load Balancer (ALB) server group.
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupLaunchTemplateOverrides extends $dara.Model {
  /**
   * @remarks
   * The instance type. The instance type that is specified by using this parameter overwrites the instance type of the launch template.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum bid price of the instance type that is specified by `LaunchTemplateOverride.InstanceType`.
   * 
   * >  This parameter takes effect only if you specify `LaunchTemplateId`.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The weight of the instance type. The value of this parameter indicates the capacity of an instance of the specified instance type in the scaling group. A higher weight indicates that a smaller number of instances of the specified instance type are required to meet the expected capacity requirement.
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
   * The ID of the CLB instance.
   * 
   * @example
   * lb-2zein3ytoeq49cmkbyxr0
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The weight of a backend server.
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
   * *   GWLB
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupTags extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tags of the scaling group can be propagated to instances. Valid values:
   * 
   * *   true: The tags of the scaling group can be propagated to only instances that are newly created.
   * *   false: The tags of the scaling group cannot be propagated to any instances.
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
   * The port number of a backend vServer.
   * 
   * @example
   * 80
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

export class DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the Classic Load Balancer (CLB, formerly known as Server Load Balancer or SLB) instance to which the backend vServer group belongs.
   * 
   * @example
   * 147b46d767c-cn-qingdao-cm5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The attributes of the backend vServer group.
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

export class DescribeScalingGroupDetailResponseBodyScalingGroup extends $dara.Model {
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
   * The information about the Application Load Balancer (ALB) server groups.
   */
  albServerGroups?: DescribeScalingGroupDetailResponseBodyScalingGroupAlbServerGroups[];
  /**
   * @remarks
   * The allocation policy of instances. Auto Scaling selects instance types based on the allocation policy to create the required number of instances. You can apply the policy to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set `MultiAZPolicy` to `COMPOSABLE`. Valid values:
   * 
   * *   priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.
   * *   lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
   * 
   * @example
   * priority
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * Indicates whether instances in the scaling group are evenly distributed across zones. This parameter takes effect only if you set `MultiAZPolicy` to `COMPOSABLE`. Valid values:
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
   * The time when the scaling group was created.
   * 
   * @example
   * 2014-08-14T10:58Z
   */
  creationTime?: string;
  /**
   * @remarks
   * >  This parameter is not available for use.
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
   * null
   */
  customPolicyARN?: string;
  /**
   * @remarks
   * The IDs of the ApsaraDB RDS instances that are associated with the scaling group.
   */
  DBInstanceIds?: string[];
  /**
   * @remarks
   * The cooldown period of the scaling group. Unit: seconds.
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
   * true
   */
  enableDesiredCapacity?: boolean;
  /**
   * @remarks
   * Indicates whether Deletion Protection is enabled for the scaling group. Valid values:
   * 
   * *   true: Deletion Protection is enabled for the scaling group. This way, the scaling group cannot be deleted.
   * *   false: Deletion Protection is disabled for the scaling group.
   * 
   * @example
   * true
   */
  groupDeletionProtection?: boolean;
  /**
   * @remarks
   * The type of the instances that are managed by the scaling group. Valid values:
   * 
   * *   ECS: ECS instances
   * *   ECI: elastic container instances
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
   * The number of instances that are in the Initialized state and not added to the scaling group.
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
   * The information about the instance types that are extended in the launch template.
   */
  launchTemplateOverrides?: DescribeScalingGroupDetailResponseBodyScalingGroupLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version number of the launch template.
   * 
   * @example
   * Default
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The status of the scaling group. Valid values:
   * 
   * *   Active: The scaling group is in the Enabled state. Enabled scaling groups can receive requests to execute scaling rules and trigger scaling activities.
   * *   Inactive: The scaling group is in the Disabled state. Disabled scaling groups cannot receive requests to execute scaling rules.
   * *   Deleting: The scaling group is being deleted. Scaling groups that are being deleted cannot receive requests to execute scaling rules, and the parameter settings of the scaling groups cannot be modified.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The CLB configurations.
   */
  loadBalancerConfigs?: DescribeScalingGroupDetailResponseBodyScalingGroupLoadBalancerConfigs[];
  /**
   * @remarks
   * The IDs of the SLB instances that are associated with the scaling group.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The maximum life span of an instance in the scaling group. Unit: seconds.
   * 
   * Valid values: 0 or from 86400 to `Integer.maxValue`. A value of 0 for MaxInstanceLifetime indicates that any previously set limit has been removed, which effectively disables the maximum instance lifetime constraint.
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
   * The time when the scaling group was modified.
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
   * *   COST_OPTIMIZED: ECS instances are created based on the unit prices of their vCPUs. Auto Scaling preferentially creates ECS instances that use the lowest-priced vCPUs. If preemptible instance types are specified in the scaling configuration, Auto Scaling preferentially creates preemptible instances. You can also specify CompensateWithOnDemand to allow Auto Scaling to create pay-as-you-go instances in the case that preemptible instances cannot be created due to insufficient inventory of preemptible instance types.
   * 
   *     **
   * 
   *     **Note** The COST_OPTIMIZED setting takes effect only if you specified multiple instance types or preemptible instance types in your scaling configuration.
   * 
   * *   BALANCE: ECS instances are evenly distributed across the zones of the scaling group. If ECS instance are unevenly distributed across the specified zones due to insufficient inventory of instance types, you can call the RebalanceInstance operation to rebalance the distribution of the ECS instances.
   * 
   * @example
   * PRIORITY
   */
  multiAZPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances that must be contained in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances in the scaling group is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the excess instances when the minimum number of pay-as-you-go instances reaches the requirement. Valid values: 0 to 100.
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
   * The instance removal policies.
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
   * >  If you specify this parameter, new scaling groups are added to the specified resource group. If you do not specify this parameter, new scaling groups are added to the default resource group.
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
   * The name of the scaling group. The name of each scaling group must be unique in a region.
   * 
   * The name must be 2 to 64 characters in length, and can contain letters, digits, underscores (_), hyphens (-), and periods (.). It must start with a letter or digit.
   * 
   * @example
   * dyrSuvBOtO1dEdIlIbp****
   */
  scalingGroupName?: string;
  /**
   * @remarks
   * The reclaim mode of the scaling group. Valid values:
   * 
   * *   recycle: economical mode
   * *   release: release mode
   * *   forcerelease: forced release mode
   * *   forcerecycle: forced recycle mode
   * 
   * For more information, see [RemoveInstances](https://help.aliyun.com/document_detail/25955.html).
   * 
   * @example
   * recycle
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The information about the server groups.
   * 
   * >  You can use this parameter to obtain the information about the ALB, NLB, and GWLB server groups associated with a scaling group.
   */
  serverGroups?: DescribeScalingGroupDetailResponseBodyScalingGroupServerGroups[];
  /**
   * @remarks
   * The allocation policy of preemptible instances. Auto Scaling selects instance types based on the allocation policy to create the required number of preemptible instances. You can apply the policy to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set `MultiAZPolicy` to `COMPOSABLE`. Valid values:
   * 
   * *   priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.
   * *   lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
   * 
   * @example
   * lowestPrice
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The number of instance types that are specified. Preemptible instances of multiple lowest-priced instance types are evenly distributed across the zones of the scaling group. Valid values: 0 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Indicates whether preemptible instances can be supplemented. If this parameter is set to true, Auto Scaling creates an instance to replace a preemptible instance when Auto Scaling receives the system message which indicates that the preemptible instance is to be reclaimed.
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
   * The number of instances that are stopped in Economical Mode in the scaling group.
   * 
   * @example
   * 1
   */
  stoppedCapacity?: number;
  /**
   * @remarks
   * The processes that are suspended. If no process is suspended, null is returned. Valid values:
   * 
   * *   ScaleIn: scale-in
   * *   ScaleOut: scale-out
   * *   HealthCheck: health check
   * *   AlarmNotification: event-triggered task
   * *   ScheduledAction: scheduled task
   */
  suspendedProcesses?: string[];
  /**
   * @remarks
   * Indicates whether Auto Scaling stops executing scaling activities in the scaling group. Valid values:
   * 
   * *   true: Auto Scaling stops executing scaling activities in the scaling group if the scaling activities failed for more than seven consecutive days in the scaling group. You must modify the scaling group or scaling configuration to resume the execution of the scaling activities.
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
  tags?: DescribeScalingGroupDetailResponseBodyScalingGroupTags[];
  /**
   * @remarks
   * The total weighted capacity of all ECS instances in the scaling group if Weighted is specified. In other cases, the value of this parameter indicates the total number of ECS instances in the scaling group.
   * 
   * @example
   * 1
   */
  totalCapacity?: number;
  /**
   * @remarks
   * The total number of Elastic Compute Service (ECS) instances in the scaling group.
   * 
   * @example
   * 1
   */
  totalInstanceCount?: number;
  /**
   * @remarks
   * The backend vServer groups.
   */
  VServerGroups?: DescribeScalingGroupDetailResponseBodyScalingGroupVServerGroups[];
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
   * The virtual private cloud (VPC) ID of the scaling group.
   * 
   * @example
   * vpc-wz9fcq97y1vqkd8bijcq6
   */
  vpcId?: string;
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The output details of the scaling group of the Elastic Container Instance type. Currently, the output is displayed in a Kubernetes Deployment YAML file.
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
   * The scaling group.
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

