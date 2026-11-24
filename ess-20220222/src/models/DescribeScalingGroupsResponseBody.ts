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
   * The port number used by the ECS instance after Auto Scaling adds the ECS instance to the ALB server group.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The weight of the ECS instance as a backend server after Auto Scaling adds the ECS instance to the ALB server group.
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
   * Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances when the MultiAZPolicy parameter is set to COST_OPTIMIZED and sufficient spot instances cannot be created due to price or inventory reasons. Valid values:
   * 
   * - true: Allowed.
   * - false: Not allowed.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. If the number of pay-as-you-go instances in the scaling group is less than this value, the system preferentially creates pay-as-you-go instances. Valid values: 0 to 1000.
   * 
   * @example
   * 0
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances among the excess instances after the scaling group meets the minimum number of pay-as-you-go instances specified by OnDemandBaseCapacity. Valid values: 0 to 100.
   * 
   * @example
   * 0
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The price comparison mode of the cost optimization strategy for the scaling group. Valid values:
   * - PricePerUnit: Compares prices based on the price per unit of capacity.
   * 
   *   The capacity of an instance in the scaling group is equal to the weight set for the instance type. The default weight is 1, which means one ECS instance occupies one unit of capacity.
   * 
   * - PricePerVCpu: Compares prices based on the price per vCPU.
   * 
   * @example
   * PricePerUnit
   */
  priceComparisonMode?: string;
  /**
   * @remarks
   * Specifies whether to use spot instances to replace pay-as-you-go capacity when CompensateWithOnDemand is enabled and the percentage of pay-as-you-go instances exceeds the value of OnDemandPercentageAboveBaseCapacity. In common scenarios where CompensateWithOnDemand downgrades spot instances to pay-as-you-go instances due to spot inventory or price reasons, this feature attempts to use spot instances to replace the excess pay-as-you-go capacity to avoid long-term retention of pay-as-you-go instances. Valid values:
   * 
   * - true: Allowed.
   * - false: Not allowed.
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
   * The database instance ID.
   * 
   * @example
   * rm-m5eqju85s45mu0***
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of security group whitelists added to the database by the scaling group.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The type of the database. Valid values:
   * - RDS
   * - Redis
   * - MongoDB
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
   * The specified instance type, which overrides the instance type in the launch template.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum hourly price for the instance type specified in the launch template override (namely LaunchTemplateOverride.InstanceType).
   * > This parameter takes effect only when the LaunchTemplateId parameter is specified.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The weight of the specified instance type, which indicates the capacity of a single instance of this type in the scaling group. A higher weight indicates that fewer instances of this type are required to meet the expected capacity.
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
   * The ID of the Classic Load Balancer (CLB) instance for load balancing.
   * 
   * @example
   * lb-2zep8alpq5zq1a2xwyxxx
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The weight of the ECS instance as a backend server after Auto Scaling adds the ECS instance to the SLB server group. A higher weight indicates that more access requests are distributed to the ECS instance. If the weight is 0, the ECS instance does not receive access requests. Valid values: 0 to 100.
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
   * The port number used by the ECS instance after Auto Scaling adds the ECS instance to the server group.
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
   * The weight of the ECS instance as a backend server after Auto Scaling adds the ECS instance to the server group.
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
   * Specifies whether the tag is propagated. Valid values:
   * - true: Tags on the scaling group are propagated only to newly created instances, but not to existing instances in the scaling group.
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

export class DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes extends $dara.Model {
  /**
   * @remarks
   * The port number used by the load balancing instance to provide services.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The attributes of the backend server group.
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

export class DescribeScalingGroupsResponseBodyScalingGroupsVServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the load balancing instance to which the backend server group belongs.
   * 
   * @example
   * 147b46d767c-cn-qingdao-cm5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The attributes of the backend server group.
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

export class DescribeScalingGroupsResponseBodyScalingGroupsWarmPoolConfigurationCapacityOptions extends $dara.Model {
  /**
   * @remarks
   * The expected number of pre-warmed instances to cover. The system maintains the sum of the current number of instances in the scaling group and the number of instances in the warm pool at this value.
   * 
   * @example
   * 5
   */
  desiredGroupPreparedCapacity?: number;
  /**
   * @remarks
   * The minimum number of instances in the warm pool. The system always retains no less than this number of pre-warmed instances in the warm pool to ensure rapid scale-out from the warm pool at any time.
   * 
   * @example
   * 0
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      desiredGroupPreparedCapacity: 'DesiredGroupPreparedCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredGroupPreparedCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsWarmPoolConfigurationInstanceReusePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether instances are returned to the warm pool when the scaling group scales in.
   * 
   * @example
   * true
   */
  reuseOnScaleIn?: boolean;
  static names(): { [key: string]: string } {
    return {
      reuseOnScaleIn: 'ReuseOnScaleIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reuseOnScaleIn: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsWarmPoolConfiguration extends $dara.Model {
  /**
   * @remarks
   * The capacity configuration of the warm pool.
   */
  capacityOptions?: DescribeScalingGroupsResponseBodyScalingGroupsWarmPoolConfigurationCapacityOptions;
  /**
   * @remarks
   * The instance reuse policy.
   */
  instanceReusePolicy?: DescribeScalingGroupsResponseBodyScalingGroupsWarmPoolConfigurationInstanceReusePolicy;
  /**
   * @remarks
   * The state of instances in the warm pool. Valid values:
   * 
   * - Running: The instances are in the running state. Scale-out is faster, but you are charged for the full cost of the instances.
   * 
   * - Stopped: The instances are in the economical mode. You are charged only for resources such as cloud disks, elastic IP addresses (EIPs), and snapshots of the instances. However, instance startup may fail during scale-out due to insufficient inventory.
   * 
   * @example
   * Running
   */
  poolState?: string;
  /**
   * @remarks
   * The status of the warm pool. Valid values:
   * 
   * - Active: Active.
   * 
   * - Deleting: Deleting.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      capacityOptions: 'CapacityOptions',
      instanceReusePolicy: 'InstanceReusePolicy',
      poolState: 'PoolState',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityOptions: DescribeScalingGroupsResponseBodyScalingGroupsWarmPoolConfigurationCapacityOptions,
      instanceReusePolicy: DescribeScalingGroupsResponseBodyScalingGroupsWarmPoolConfigurationInstanceReusePolicy,
      poolState: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.capacityOptions && typeof (this.capacityOptions as any).validate === 'function') {
      (this.capacityOptions as any).validate();
    }
    if(this.instanceReusePolicy && typeof (this.instanceReusePolicy as any).validate === 'function') {
      (this.instanceReusePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupsResponseBodyScalingGroupsZoneShiftOptionsZoneShiftPolicy extends $dara.Model {
  /**
   * @remarks
   * The health check behavior in impaired zones. Valid values: 
   * 
   * - ReplaceUnhealthy: Unhealthy instances in all zones are replaced normally.
   * - IgnoreUnhealthy: Unhealthy instances in impaired zones are not replaced. Healthy zones are not affected.
   * 
   * @example
   * ReplaceUnhealthy
   */
  impairedZoneHealthCheckBehavior?: string;
  /**
   * @remarks
   * Blocks scale-in triggered by specified types of scaling rules. The blocking scope covers all zones under the scaling group, not just the impaired zones. This prevents false scale-in caused by seemingly improved monitoring metrics due to unreachable instances in impaired zones. Valid values: 
   * 
   * - StepScalingRule: Blocks scale-in triggered by step scaling rules. 
   * - TargetTrackingScalingRule: Blocks scale-in triggered by target tracking scaling rules. 
   * - None: No blocking.
   * 
   * @example
   * StepScalingRule
   */
  scaleInBlockedRuleTypes?: string[];
  /**
   * @remarks
   * Specifies whether scale-out creates instances only in healthy zones during the shift. Valid values: 
   * 
   * - true: Scale-out creates instances only in healthy zones and skips impaired zones. 
   * - false: Scale-out is not restricted by zone and can create instances in any zone under the scaling group.
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

export class DescribeScalingGroupsResponseBodyScalingGroupsZoneShiftOptions extends $dara.Model {
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
  zoneShiftPolicy?: DescribeScalingGroupsResponseBodyScalingGroupsZoneShiftOptionsZoneShiftPolicy;
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
      zoneShiftPolicy: DescribeScalingGroupsResponseBodyScalingGroupsZoneShiftOptionsZoneShiftPolicy,
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

export class DescribeScalingGroupsResponseBodyScalingGroups extends $dara.Model {
  /**
   * @remarks
   * The number of ECS instances that have been added to the scaling group and are running normally.
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
   * The collection of information about Application Load Balancer (ALB) server groups.
   */
  albServerGroups?: DescribeScalingGroupsResponseBodyScalingGroupsAlbServerGroups[];
  /**
   * @remarks
   * The capacity allocation strategy, which determines how the scaling group selects available instance types to meet the capacity requirements. The capacity distribution strategy applies to both pay-as-you-go and spot capacity. This parameter takes effect only when the MultiAZPolicy parameter is set to COMPOSABLE. Valid values:
   * 
   * - priority: Creates instances based on the order of the configured instance types.
   * - lowestPrice: Creates instances based on the unit vCPU price of the instance types in ascending order.
   * 
   * @example
   * priority
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic balancing for the scaling group. This parameter takes effect only when BalancedOnly is enabled for the zone balance scaling group. Valid values:
   * - false: Automatic balancing for the scaling group is disabled.
   * - true: Automatic balancing for the scaling group is enabled. The scaling group automatically detects the capacity across zones. If the capacity is unbalanced, the scaling group proactively scales in or out to rebalance the capacity across zones.
   * 
   * @example
   * false
   */
  autoRebalance?: boolean;
  /**
   * @remarks
   * Specifies whether the capacity of the scaling group is evenly distributed across multiple zones. This parameter takes effect only when the MultiAZPolicy parameter is set to COMPOSABLE. Valid values:
   * 
   * - true: The capacity of the scaling group is evenly distributed across multiple zones.
   * - false: The capacity of the scaling group is not evenly distributed across multiple zones.
   * 
   * @example
   * false
   */
  azBalance?: boolean;
  /**
   * @remarks
   * The zone balance mode. This parameter takes effect only when the zone balance mode is enabled. Valid values:
   *  
   * - BalancedBestEffort: If resource creation fails in a zone, the system falls back to other zones to ensure best-effort delivery of resources.
   * 
   * - BalancedOnly: If resource creation fails in a zone, the system does not fall back to other zones. The scale-out activity partially succeeds to avoid excessive imbalance of resources across different zones.
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
   * Specifies whether to automatically create pay-as-you-go instances to meet the requirement for the number of ECS instances when the MultiAZPolicy parameter is set to COST_OPTIMIZED and spot instances cannot be created due to price or inventory issues. Valid values:
   * - true: Allowed.
   * - false: Not allowed.
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
   * > This parameter is not available.
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
   * acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name
   */
  customPolicyARN?: string;
  /**
   * @remarks
   * The IDs of the ApsaraDB RDS instances associated with the scaling group.
   */
  DBInstanceIds?: string[];
  /**
   * @remarks
   * The list of databases associated with the scaling group.
   */
  DBInstances?: DescribeScalingGroupsResponseBodyScalingGroupsDBInstances[];
  /**
   * @remarks
   * The default cooldown time of the scaling group. During the cooldown time, the scaling group does not execute any other scaling activity. This parameter takes effect only for a scaling activity triggered by [CloudMonitor](https://help.aliyun.com/document_detail/35170.html) event-triggered tasks.
   * 
   * @example
   * 60
   */
  defaultCooldown?: number;
  /**
   * @remarks
   * The expected number of ECS instances in the scaling group. The scaling group automatically maintains the number of ECS instances at the expected number of instances.
   * 
   * @example
   * 5
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * Specifies whether the expected number of instances feature is enabled. Valid values:
   * - true: The expected number of instances feature is enabled.
   * - false: The expected number of instances feature is disabled.
   * 
   * @example
   * false
   */
  enableDesiredCapacity?: boolean;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the scaling group. Valid values:
   * - true: Deletion protection is enabled. The scaling group cannot be deleted.
   * - false: Deletion protection is disabled.
   * 
   * @example
   * true
   */
  groupDeletionProtection?: boolean;
  /**
   * @remarks
   * The type of instances managed by the scaling group.
   * 
   * @example
   * ECS
   */
  groupType?: string;
  /**
   * @remarks
   * The health check mode of the scaling group. Valid values:
   * - NONE: No health check is performed.
   * - ECS: Health checks are performed on instances in the scaling group. This value is used to enable instance health checks for both ECS and ECI scaling groups.
   * - LOAD_BALANCER: The health status of instances is determined based on the health check results of load balancing (CLB load balancing is not supported).
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
   * - LOAD_BALANCER: The health status of instances is determined based on the load balancing health check results (the CLB load balancing type is not currently supported).
   */
  healthCheckTypes?: string[];
  /**
   * @remarks
   * The number of instances in the initialization state before scale-out in the scaling group.
   * 
   * @example
   * 0
   */
  initCapacity?: number;
  /**
   * @remarks
   * > This parameter is not available.
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
   * The instance type information that extends the launch template.
   */
  launchTemplateOverrides?: DescribeScalingGroupsResponseBodyScalingGroupsLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version of the launch template used by the scaling group.
   * 
   * @example
   * Default
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The lifecycle state of the scaling group. Valid values:
   * - Active: The scaling group is active. Only active scaling groups can accept requests to execute scaling rules and trigger a scaling activity.
   * - Inactive: The scaling group is inactive. Inactive scaling groups do not receive any requests to execute scaling rules.
   * - Deleting: The scaling group is being deleted. Scaling groups in the deleting state do not receive any requests to execute scaling rules, and their parameters cannot be modified.
   * 
   * @example
   * Active
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The list of load balancing configurations.
   */
  loadBalancerConfigs?: DescribeScalingGroupsResponseBodyScalingGroupsLoadBalancerConfigs[];
  /**
   * @remarks
   * The list of IDs of the load balancing instances associated with the scaling group.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The maximum lifetime of an instance in the scaling group. Unit: seconds.
   * 
   * Valid values: 0 or [86400, Integer.maxValue]. A value of 0 indicates that the configured value of MaxInstanceLifetime is cleared, which means MaxInstanceLifetime is not configured.
   * 
   * Default value: null.
   * 
   * >This parameter is not supported for scaling groups of the Elastic Container Instance (ECI) type or scaling groups that have the No Fees for Stopped Instances feature enabled.
   * 
   * @example
   * 86400
   */
  maxInstanceLifetime?: number;
  /**
   * @remarks
   * The maximum number of ECS instances in the scaling group.
   * 
   * @example
   * 2
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum number of ECS instances in the scaling group.
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
   * - PRIORITY: Scales out and scales in instances based on the vSwitches defined in VSwitchIds. If ECS instances cannot be created in the active zone of the vSwitch with the highest priority, the system automatically uses the vSwitch with the next highest priority to create ECS instances.
   * - COST_OPTIMIZED: Attempts to create instances based on the unit price of vCPUs from low to high. When the scaling configuration specifies multiple instance types with the spot billing method, the system preferentially creates spot instances. You can use the CompensateWithOnDemand parameter to specify whether to automatically attempt to create pay-as-you-go instances when spot instances cannot be created due to inventory issues.
   *     > COST_OPTIMIZED takes effect only when the scaling configuration specifies multiple instance types or uses spot instances.
   * - BALANCE: Evenly allocates ECS instances across the active zones specified for the scaling group. If the distribution becomes unbalanced due to insufficient inventory, you can call the RebalanceInstance operation to balance the resources.
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
   * The percentage of pay-as-you-go instances to be created when the scaling group exceeds the minimum number of pay-as-you-go instances specified by OnDemandBaseCapacity. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The number of ECS instances that are being added to the scaling group but have not completed the related configurations.
   * 
   * @example
   * 0
   */
  pendingCapacity?: number;
  /**
   * @remarks
   * The number of ECS instances that are in the pending wait state in the scaling group.
   * 
   * @example
   * 1
   */
  pendingWaitCapacity?: number;
  /**
   * @remarks
   * The number of ECS instances that are in the protected state in the scaling group.
   * 
   * @example
   * 1
   */
  protectedCapacity?: number;
  /**
   * @remarks
   * The ID of the region to which the scaling group belongs.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The collection of policies for removing ECS instances from the scaling group. Valid values:
   * - OldestInstance: Removes the ECS instance that was created earliest.
   * - NewestInstance: Removes the ECS instance that was created latest.
   * - OldestScalingConfiguration: Removes the ECS instance that was created earliest based on the scaling configuration.
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
   * The number of ECS instances that are in the removing wait state in the scaling group.
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
   * The reclaim mode of the scaling group. Valid values:
   * - recycle: The scaling group uses the shutdown and reclaim mode.
   * - release: The scaling group uses the release mode.
   * - forcerelease: The scaling group uses the force release mode.
   * For more information about the actions on removed instances, see [RemoveInstances](https://help.aliyun.com/document_detail/25955.html).
   * 
   * @example
   * recycle
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The collection of information about load balancing server groups.
   * > You can use this parameter to obtain the collection of information about ALB service groups, NLB server groups, and GWLB service groups associated with the scaling group.
   * >
   */
  serverGroups?: DescribeScalingGroupsResponseBodyScalingGroupsServerGroups[];
  /**
   * @remarks
   * The spot capacity distribution strategy. You can use this parameter to separately specify the distribution strategy for spot capacity. This parameter takes effect only when the MultiAZPolicy parameter is set to COMPOSABLE. Valid values:
   * 
   * - priority: Creates instances based on the order of the configured instance types.
   * - lowestPrice: Creates instances based on the unit vCPU price of the instance types in ascending order.
   * 
   * Default value: priority.
   * 
   * @example
   * lowestPrice
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The number of spot instances in the scaling group.
   * 
   * @example
   * 0
   */
  spotCapacity?: number;
  /**
   * @remarks
   * The number of available instance types specified. The scaling group evenly creates spot instances based on the most cost-effective instance types. Valid values: 0 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Indicates whether the spot instance replacement feature is enabled. After this feature is enabled, when the scaling group receives a system message indicating that a spot instance will be reclaimed, the scaling group attempts to create a new instance to replace the spot instance to be reclaimed.
   * 
   * @example
   * true
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The number of instances that are in the standby state in the scaling group.
   * 
   * @example
   * 1
   */
  standbyCapacity?: number;
  /**
   * @remarks
   * The timeout period for waiting for an ECS instance to be stopped during the scale-in process. Unit: seconds.
   * 
   * @example
   * 60
   */
  stopInstanceTimeout?: number;
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
   * Indicates whether Auto Scaling stops executing any scaling activity in the scaling group. Valid values:
   * - true: Auto Scaling stops executing any scaling activity in the scaling group. This indicates that the scaling group has failed to execute scale-out or scale-in for more than seven consecutive days. You must modify the scaling group or scaling configuration to resume the execution of the scaling activity.
   * - false: Auto Scaling executes the scaling activity in the scaling group.
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
   * The total weighted capacity of all ECS instances in the scaling group if instance type weights are configured. Otherwise, this parameter indicates the total number of ECS instances in the scaling group.
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
  VServerGroups?: DescribeScalingGroupsResponseBodyScalingGroupsVServerGroups[];
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
   * The collection of IDs of the vSwitches associated with the scaling group. If you use the VSwitchIds parameter, the VSwitchId parameter is ignored.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC to which the scaling group belongs.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The number of instances in the warm pool.
   * 
   * @example
   * 5
   */
  warmPoolCapacity?: number;
  /**
   * @remarks
   * The current warm pool configuration of the scaling group.
   */
  warmPoolConfiguration?: DescribeScalingGroupsResponseBodyScalingGroupsWarmPoolConfiguration;
  /**
   * @remarks
   * The zone shift options.
   */
  zoneShiftOptions?: DescribeScalingGroupsResponseBodyScalingGroupsZoneShiftOptions;
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
      warmPoolCapacity: 'WarmPoolCapacity',
      warmPoolConfiguration: 'WarmPoolConfiguration',
      zoneShiftOptions: 'ZoneShiftOptions',
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
      warmPoolCapacity: 'number',
      warmPoolConfiguration: DescribeScalingGroupsResponseBodyScalingGroupsWarmPoolConfiguration,
      zoneShiftOptions: DescribeScalingGroupsResponseBodyScalingGroupsZoneShiftOptions,
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
    if(this.warmPoolConfiguration && typeof (this.warmPoolConfiguration as any).validate === 'function') {
      (this.warmPoolConfiguration as any).validate();
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

export class DescribeScalingGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
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
   * The total number of scaling groups.
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

