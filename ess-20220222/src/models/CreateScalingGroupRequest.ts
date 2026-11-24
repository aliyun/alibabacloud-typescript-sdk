// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingGroupRequestAlbServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the ALB server group.
   * 
   * A scaling group supports a limited number of associated ALB server groups. To view or manually apply for a quota increase, go to the [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * sgp-ddwb0y0g6y9bjm****
   */
  albServerGroupId?: string;
  /**
   * @remarks
   * The port number used by the instance after Auto Scaling adds the instance to the ALB server group. Valid values: 1 to 65535.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The weight of the instance as a backend server after Auto Scaling adds the instance to the ALB server group. A higher weight specifies that more requests are distributed to the instance. If the weight is 0, the instance does not receive requests. Valid values: 0 to 100.
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

export class CreateScalingGroupRequestCapacityOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the system to automatically attempt to create pay-as-you-go instances to meet the required number of ECS instances when the MultiAZPolicy parameter is set to COST_OPTIMIZED and sufficient spot instances cannot be created due to price or inventory reasons. Valid values:
   * 
   * - true: Allowed.
   * - false: Not allowed.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. When the number of pay-as-you-go instances in the scaling group is less than this value, the system preferentially creates pay-as-you-go instances. Valid values: 0 to 1000.
   * 
   * When the MultiAZPolicy parameter is set to COMPOSABLE, the default value is 0.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances in the excess instances after the scaling group meets the minimum number of pay-as-you-go instances specified by OnDemandBaseCapacity. Valid values: 0 to 100.
   * 
   * When the MultiAZPolicy parameter is set to COMPOSABLE, the default value is 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The price comparison mode for the cost optimization policy of the scaling group. Valid values:
   * - PricePerUnit: Compares prices based on the price per unit of capacity.
   * 
   *   The capacity of an instance in the scaling group is equal to the weight set for the instance type. The default weight is 1, which means one ECS instance occupies a capacity of 1.
   * 
   * - PricePerVCpu: Compares prices based on the price per vCPU.
   * 
   * Default value: PricePerUnit.
   * 
   * @example
   * PricePerUnit
   */
  priceComparisonMode?: string;
  /**
   * @remarks
   * Specifies whether to attempt to use spot instances to replace pay-as-you-go capacity when CompensateWithOnDemand is enabled and the proportion of pay-as-you-go instances exceeds the OnDemandPercentageAboveBaseCapacity value. In common scenarios where CompensateWithOnDemand downgrades spot instances to pay-as-you-go instances due to spot inventory or price reasons, this parameter attempts to use spot instances to replace the excess pay-as-you-go capacity to avoid long-term existence of pay-as-you-go instances. Valid values:
   * 
   * - true: Allowed.
   * - false: Not allowed.
   * 
   * Default value: false.
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

export class CreateScalingGroupRequestDBInstances extends $dara.Model {
  /**
   * @remarks
   * The association mode between the scaling group and the database. Valid values:
   * - SecurityIp: Modifies the IP whitelist mode by automatically adding scaled-out instances to the IP whitelist of the database. Only ApsaraDB RDS databases are supported.
   * - SecurityGroup: Uses the security group mode by adding the security group of the scaling configuration to the security group whitelist of the database to allow instances in the security group to access the database.
   * 
   * @example
   * SecurityIp
   */
  attachMode?: string;
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
   * The type of the database. Valid values:
   * - RDS
   * - Redis
   * - MongoDB
   * 
   * Default value: RDS.
   * 
   * @example
   * RDS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachMode: 'AttachMode',
      DBInstanceId: 'DBInstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachMode: 'string',
      DBInstanceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestLaunchTemplateOverrides extends $dara.Model {
  /**
   * @remarks
   * If you want the scaling group to scale based on the capacity of the instance type, specify both this parameter and LaunchTemplateOverrides.WeightedCapacity.
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
   * This parameter is used to specify the maximum price for the overridden instance type (namely, `LaunchTemplateOverride.InstanceType`) in the launch template.
   * > This parameter takes effect only when the `LaunchTemplateId` parameter is specified.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * If you want the scaling group to scale based on the capacity of the instance type, specify this parameter after you specify LaunchTemplateOverrides.InstanceType.
   * 
   * This parameter is used to specify the weight of the instance type, which indicates the capacity represented by a single instance of the instance type in the scaling group. A larger weight indicates that fewer instances of this instance type are required to meet the expected capacity.
   * 
   * Because performance metrics such as the number of vCPUs and memory size vary among instance types, you can configure different weights for different instance types based on your needs.
   * 
   * Example:
   * 
   * - Current capacity: 0.
   * 
   * - Expected capacity: 6.
   * 
   * - Capacity of the ecs.c5.xlarge instance type: 4.
   * 
   * To meet the expected capacity, the scaling group scales out two ecs.c5.xlarge instances for you.
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

export class CreateScalingGroupRequestLifecycleHooks extends $dara.Model {
  /**
   * @remarks
   * The action to be performed after the wait state ends. Valid values:
   * 
   * - CONTINUE: continues the response to the scale-out activity or continues the response to the scale-down activity.
   * 
   * - ABANDON: directly releases the instances created by the scale-out activity or directly removes the instances in the scale-down activity from the scaling group.
   * 
   * When a scale-down activity (SCALE_IN) occurs in the scaling group and triggers multiple lifecycle hooks, if the wait state triggered by a lifecycle hook whose DefaultResult is ABANDON ends, the other corresponding wait states end in advance. In other cases, the next action is subject to the next action of the last wait state that ends.
   * 
   * Default value: CONTINUE.
   * 
   * @example
   * CONTINUE
   */
  defaultResult?: string;
  /**
   * @remarks
   * The wait time set by the lifecycle hook for the scaling group activity. After the wait state times out, the next action is performed. Valid values: 30 to 21600. Unit: seconds.
   * 
   * After you create a lifecycle hook, you can call RecordLifecycleActionHeartbeat to extend the wait time of the instance, or call CompleteLifecycleAction to end the wait state of the scaling activity in advance.
   * 
   * Default value: 600.
   * 
   * @example
   * 600
   */
  heartbeatTimeout?: number;
  /**
   * @remarks
   * The name of the lifecycle hook. The name cannot be modified after it is specified. If you do not specify this parameter, the default value is the same as the lifecycle hook ID.
   * 
   * @example
   * lifecyclehook****
   */
  lifecycleHookName?: string;
  /**
   * @remarks
   * The type of scaling activity to which the lifecycle hook applies. Valid values:
   * 
   * - SCALE_OUT: scale-out activities of the scaling group.
   * 
   * - SCALE_IN: scale-down activities of the scaling group.
   * 
   * > If you specify a lifecycle hook for the scaling group, this parameter is required, and other related parameters are optional.
   * 
   * @example
   * SCALE_OUT
   */
  lifecycleTransition?: string;
  /**
   * @remarks
   * The identifier of the notification recipient for the lifecycle hook. Simple Message Queue (formerly MNS) queues or topics are supported. The parameter value format is acs:ess:{region}:{account-id}:{resource-relative-id}.
   * 
   * - region: the region where the scaling group resides.
   * 
   * - account-id: the Alibaba Cloud account ID.
   * 
   * Examples:
   * 
   * - Simple Message Queue (formerly MNS) queue: acs:ess:{region}:{account-id}:queue/{queuename}.
   * 
   * - Simple Message Queue (formerly MNS) topic: acs:ess:{region}:{account-id}:topic/{topicname}.
   * 
   * @example
   * acs:ess:cn-hangzhou:1111111111:queue/queue2
   */
  notificationArn?: string;
  /**
   * @remarks
   * The fixed string information for the wait state of the scaling activity. The value cannot exceed 4,096 characters in length. Each time Auto Scaling pushes a message to the notification recipient, it also sends the predefined value of the NotificationMetadata parameter to help you manage and mark different types of notification information. The NotificationMetadata parameter takes effect only when you also specify the NotificationArn parameter.
   * 
   * @example
   * Test
   */
  notificationMetadata?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      heartbeatTimeout: 'HeartbeatTimeout',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleTransition: 'LifecycleTransition',
      notificationArn: 'NotificationArn',
      notificationMetadata: 'NotificationMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      heartbeatTimeout: 'number',
      lifecycleHookName: 'string',
      lifecycleTransition: 'string',
      notificationArn: 'string',
      notificationMetadata: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestLoadBalancerConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-2zen1olhfg9yw3f4q****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The weight of the instance as a backend server after Auto Scaling adds the instance to the CLB server group. A higher weight specifies that more requests are distributed to the instance. If the weight is 0, the instance does not receive requests. Valid values: 0 to 100.
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

export class CreateScalingGroupRequestServerGroups extends $dara.Model {
  /**
   * @remarks
   * The port number used by the instance after Auto Scaling adds the instance to the server group. Valid values: 1 to 65535.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-5yc3bd9lfyh*****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The type of the server group. Valid values:
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
   * The weight of the instance as a backend server after Auto Scaling adds the instance to the server group. Valid values: 0 to 100.
   * 
   * A higher weight specifies that more access requests are allocated to the instance. If the weight is 0, the instance does not receive access requests.
   * 
   * > This parameter is required for ALB and NLB. You cannot configure this parameter for GWLB.
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

export class CreateScalingGroupRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the scaling group.
   * 
   * @example
   * Department
   */
  key?: string;
  /**
   * @remarks
   * Specifies whether the tag is a propagatable tag. Valid values:
   * - true: tags on the scaling group are propagated only to newly created instances, not to existing instances in the scaling group.
   * - false: tags on the scaling group are not propagated to instances.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  propagate?: boolean;
  /**
   * @remarks
   * The tag value of the scaling group.
   * 
   * @example
   * Finance
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      propagate: 'Propagate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      propagate: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupRequestVServerGroupsVServerGroupAttributes extends $dara.Model {
  /**
   * @remarks
   * The port number used by the instance after Auto Scaling adds the instance to the virtual server group. Valid values: 1 to 65535.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The ID of the virtual server group.
   * 
   * @example
   * rsp-bp1443g77****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The weight of the instance as a backend server after Auto Scaling adds the instance to the virtual server group. A higher weight indicates that more access requests are allocated to the instance. If the weight is 0, the instance does not receive access requests. Valid values: 0 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 100
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

export class CreateScalingGroupRequestVServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the Classic Load Balancer (CLB) instance to which the virtual server group belongs.
   * 
   * @example
   * lb-bp1u7etiogg38yvwz****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The attributes of the backend server group.
   */
  VServerGroupAttributes?: CreateScalingGroupRequestVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': CreateScalingGroupRequestVServerGroupsVServerGroupAttributes },
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

export class CreateScalingGroupRequestZoneShiftPolicy extends $dara.Model {
  /**
   * @remarks
   * The health check behavior in impaired zones. Valid values: 
   * 
   * - ReplaceUnhealthy: Replaces unhealthy instances in all zones normally. 
   * - IgnoreUnhealthy: Does not replace unhealthy instances in impaired zones. Healthy zones are not affected. 
   * 
   * Default value: ReplaceUnhealthy.
   * 
   * @example
   * ReplaceUnhealthy
   */
  impairedZoneHealthCheckBehavior?: string;
  /**
   * @remarks
   * Blocks scale-in triggered by specified types of scaling rules. The blocking scope applies to all zones under the scaling group, not just the impaired zones. This prevents false scale-in caused by fake improvements in monitoring metrics due to unreachable instances in impaired zones. Valid values: 
   * 
   * - StepScalingRule: Blocks scale-in triggered by step scaling rules. 
   * - TargetTrackingScalingRule: Blocks scale-in triggered by target tracking scaling rules. 
   * - None: Does not block. 
   * 
   * Default value: None.
   * 
   * @example
   * StepScalingRule
   */
  scaleInBlockedRuleTypes?: string[];
  /**
   * @remarks
   * Specifies whether scale-out creates instances only in healthy zones during zone shift. Valid values: 
   * 
   * - true: Scale-out creates instances only in healthy zones and skips impaired zones. 
   * - false: Scale-out is not restricted by zone and can create instances in any zone of the scaling group. 
   * 
   * Default value: false.
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

export class CreateScalingGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of information about the ALB server groups.
   */
  albServerGroups?: CreateScalingGroupRequestAlbServerGroups[];
  /**
   * @remarks
   * The capacity allocation policy, which determines how the scaling group selects available instance types to meet the capacity requirements. The capacity distribution policy applies to both pay-as-you-go and spot capacities. This parameter takes effect only when the MultiAZPolicy parameter is set to COMPOSABLE. Valid values:
   * 
   * - priority: Creates instances based on the order of the configured instance types.
   * - lowestPrice: Creates instances based on the unit price per vCPU of the instance types in ascending order.
   * 
   * Default value: priority.
   * 
   * @example
   * priority
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic balancing for the scaling group. This parameter takes effect only when BalancedOnly is enabled for the zone-balanced scaling group. Valid values:
   * - false: Does not enable automatic balancing for the scaling group.
   * - true: Enables automatic balancing for the scaling group. The scaling group automatically detects the capacity across zones. When the capacity is unbalanced across zones, the scaling group proactively scales out or in to rebalance the capacity across zones.
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
   * 
   * - true: The capacity of the scaling group is evenly distributed across multiple zones.
   * - false: The capacity of the scaling group is not evenly distributed across multiple zones.
   * 
   * > If the MultiAZPolicy parameter is set to COMPOSABLE and the AzBalance parameter is set to true, the effect is the same as when the MultiAZPolicy parameter is set to BALANCE.
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
   * - BalancedBestEffort: When resource creation fails in a zone, the system falls back to other zones to ensure best-effort delivery of resources.
   * 
   * - BalancedOnly: When resource creation fails in a zone, the system does not fall back to other zones. The scale-out activity partially succeeds to avoid excessive imbalance of resources across different zones.
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
  capacityOptions?: CreateScalingGroupRequestCapacityOptions;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to automatically attempt to create pay-as-you-go instances to meet the required number of ECS instances when the MultiAZPolicy parameter is set to COST_OPTIMIZED and sufficient spot instances cannot be created due to price or inventory reasons. Valid values:
   * 
   * - true: allows the creation.
   * - false: does not allow the creation.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The ECI instance ID, which is the container group ID.
   * 
   * @example
   * eci-uf6fonnghi50u374****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The ARN of the Function Compute function for the custom scale-in policy. This parameter takes effect only when the first removal policy configured in RemovalPolicies is CustomPolicy.
   * 
   * @example
   * acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name
   */
  customPolicyARN?: string;
  /**
   * @remarks
   * The IDs of the ApsaraDB RDS instances. The value can be a JSON array that contains multiple ApsaraDB RDS instance IDs. Separate multiple IDs with commas (,). 
   * 
   * <props="china">The maximum number of ApsaraDB RDS instances that can be associated with a scaling group depends on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to check the quota for the **maximum number of ApsaraDB RDS instances that can be associated with a scaling group**.
   * 
   * <props="intl">The maximum number of ApsaraDB RDS instances that can be associated with a scaling group depends on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to check the quota for the **maximum number of ApsaraDB RDS instances that can be associated with a scaling group**.
   * 
   * <props="partner">The maximum number of ApsaraDB RDS instances that can be associated with a scaling group depends on your Auto Scaling usage. Go to Quota Center to check the quota for the **maximum number of ApsaraDB RDS instances that can be associated with a scaling group**.
   * 
   * @example
   * ["rm-bp142f86de0t7****", "rm-bp18l1z42ar4o****", "rm-bp1lqr97h4aqk****"]
   */
  DBInstanceIds?: string;
  /**
   * @remarks
   * The list of databases associated with the scaling group.
   */
  DBInstances?: CreateScalingGroupRequestDBInstances[];
  /**
   * @remarks
   * The cooldown time after a scaling activity (adding or removing instances) is completed. Valid values: 0 to 86400. Unit: seconds.
   * 
   * During the cooldown time, the scaling group does not execute other scaling activities. This parameter takes effect only for scaling activities triggered by CloudMonitor event-triggered tasks.  
   * 
   * Default value: 300.
   * 
   * @example
   * 300
   */
  defaultCooldown?: number;
  /**
   * @remarks
   * The expected number of instances in the scaling group. The scaling group automatically maintains the number of instances at the expected number. The value cannot be greater than MaxSize or less than MinSize.
   * 
   * @example
   * 5
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the scaling group. Valid values:
   * 
   * - true: enables deletion protection for the scaling group. In this case, the scaling group cannot be deleted.
   * - false: disables deletion protection for the scaling group.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  groupDeletionProtection?: boolean;
  /**
   * @remarks
   * The type of instances managed by the scaling group. Valid values:
   * 
   * - ECS: the scaling group manages ECS instances.
   * 
   * - ECI: the scaling group manages ECI instances.
   * 
   * Default value: ECS.
   * 
   * @example
   * ECS
   */
  groupType?: string;
  /**
   * @remarks
   * The health check type of the scaling group. Valid values:
   * 
   * - NONE: disables health checks.
   * - ECS: performs health checks on instances in the scaling group. This value is used to enable instance health checks for both ECS and ECI scaling groups.
   * - LOAD_BALANCER: determines the health status of instances based on the health check results of the load balancer. CLB is not supported.
   * 
   * 
   * Default value: ECS.
   * 
   * > If you want to enable both instance health checks and load balancer health checks, use the `HealthCheckTypes` parameter.
   * 
   * @example
   * ECS
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The health check modes of the scaling group.
   * > You can set multiple values for this parameter to enable multiple health check options. If the HealthCheckType parameter is specified, this parameter is ignored.
   */
  healthCheckTypes?: string[];
  /**
   * @remarks
   * The ID of the instance. When you create a scaling group, Auto Scaling obtains the required configuration information from the specified instance and automatically creates a scaling configuration.
   * 
   * @example
   * i-28wt4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the launch template. This parameter is used to specify the launch template from which the scaling group obtains launch configurations.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The extended instance type information of the launch template.
   */
  launchTemplateOverrides?: CreateScalingGroupRequestLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version of the launch template. Valid values:
   * 
   * - A specific version number.
   * 
   * - Default: always uses the default version of the launch template.
   * 
   * - Latest: always uses the latest version of the launch template.
   * 
   * @example
   * Default
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The list of lifecycle hook information.
   */
  lifecycleHooks?: CreateScalingGroupRequestLifecycleHooks[];
  /**
   * @remarks
   * The list of load balancing configurations.
   */
  loadBalancerConfigs?: CreateScalingGroupRequestLoadBalancerConfigs[];
  /**
   * @remarks
   * The IDs of the Classic Load Balancer (CLB) instances. The value can be a JSON array that contains multiple CLB instance IDs. Separate multiple IDs with commas (,).
   * 
   * <props="china">The maximum number of CLB instances that can be associated with a scaling group depends on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to check the quota for the **maximum number of load balancing instances that can be associated with a scaling group**.
   * 
   * <props="intl">The maximum number of CLB instances that can be associated with a scaling group depends on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to check the quota for the **maximum number of load balancing instances that can be associated with a scaling group**.
   * 
   * <props="partner">The maximum number of CLB instances that can be associated with a scaling group depends on your Auto Scaling usage. Go to Quota Center to check the quota for the **maximum number of load balancing instances that can be associated with a scaling group**.
   * 
   * @example
   * ["lb-bp1u7etiogg38yvwz****", "lb-bp168cqrux9ai9l7f****", "lb-bp1jv3m9zvj22ufxp****"]
   */
  loadBalancerIds?: string;
  /**
   * @remarks
   * The maximum lifetime of an instance in the scaling group. Unit: seconds.
   * 
   * Valid values: [86400, Integer.maxValue].
   * 
   * Default value: null.
   * 
   * @example
   * 86400
   */
  maxInstanceLifetime?: number;
  /**
   * @remarks
   * The maximum number of instances in the scaling group. If the number of instances in the scaling group is greater than the value of MaxSize, Auto Scaling automatically removes instances. 
   * 
   * <props="china">The value range of MaxSize depends on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to check the quota for the **maximum number of instances in a scaling group**.
   * 
   * <props="intl">The value range of MaxSize depends on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to check the quota for the **maximum number of instances in a scaling group**.
   * 
   * <props="partner">The value range of MaxSize depends on your Auto Scaling usage. Go to Quota Center to check the quota for the **maximum number of instances in a scaling group**.
   * 
   * If the quota for the **maximum number of instances in a scaling group** is 2000, the value range of MaxSize is 0 to 2000.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum number of instances in the scaling group. If the number of instances in the scaling group is less than the value of MinSize, Auto Scaling automatically creates instances. 
   * 
   * > The value of MinSize must be less than or equal to the value of MaxSize.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  minSize?: number;
  /**
   * @remarks
   * The multi-zone scaling policy for ECS instances in the scaling group. Valid values: 
   *          
   * - PRIORITY: the vSwitches specified by VSwitchIds are prioritized. Auto Scaling preferentially attempts to scale ECS instances in the zone where the highest-priority vSwitch resides. If the scaling fails, Auto Scaling automatically attempts to scale instances in the zone of the next highest-priority vSwitch.  
   * - COST_OPTIMIZED: during scale-out, Auto Scaling attempts to create ECS instances in ascending order of vCPU unit price. During scale-in, Auto Scaling attempts to remove ECS instances in descending order of vCPU unit price. If the scaling configuration settings specify multiple instance types that use the preemptible billing method, spot instances are preferentially created. You can use the CompensateWithOnDemand parameter to specify whether to automatically attempt to create pay-as-you-go instances when spot instances cannot be created due to insufficient inventory or other reasons. 
   * 
   *     > COST_OPTIMIZED takes effect only when the scaling configuration settings specify multiple instance types or use spot instances. 
   * - BALANCE: evenly distributes ECS instances across the zones specified for the scaling group. If the instances are unevenly allocated across zones due to insufficient inventory or other reasons, you can invoke the [RebalanceInstance](https://help.aliyun.com/document_detail/71516.html) operation to balance the resources.
   * 
   *     > If the `MultiAZPolicy` parameter is set to `BALANCE`, the effect is the same as when the `MultiAZPolicy` parameter is set to `COMPOSABLE` and the `AzBalance` parameter is set to `true`. 
   * - COMPOSABLE: a combined policy that allows you to combine the preceding multi-zone scaling policies for ECS instances based on your needs. You can also specify additional parameters to control the capacity of the scaling group in a more fine-grained manner.
   * 
   * Default value: PRIORITY.
   * 
   * @example
   * PRIORITY
   */
  multiAZPolicy?: string;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than this value, pay-as-you-go instances are preferentially created.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances in the excess instances after the scaling group meets the minimum number of pay-as-you-go instances (OnDemandBaseCapacity). Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The filtering policy for the instance removal policy. Valid values:
   * 
   * - OldestInstance: removes the ECS instances that were added to the scaling group at the earliest point in time.
   * - NewestInstance: removes the ECS instances that were added to the scaling group at the latest point in time.
   * - OldestScalingConfiguration: removes the ECS instances that were created based on the earliest scaling configuration.
   * - CustomPolicy: removes ECS instances based on a custom scale-in policy function.
   * 
   * The scaling configuration mentioned in OldestScalingConfiguration refers to the instance configuration source in the scaling group, including scaling configurations and launch templates. CustomPolicy can only be set as the first removal policy. If you specify CustomPolicy, you must also specify the CustomPolicyARN parameter.
   * 
   * > The removal of ECS instances from a scaling group is also affected by the multi-zone scaling policy (MultiAZPolicy) of the scaling group. For more information, see [Configure a combined policy for removing instances](https://help.aliyun.com/document_detail/254822.html).
   */
  removalPolicies?: string[];
  /**
   * @remarks
   * The ID of the resource group to which the newly created scaling group belongs.
   * > Assigns the newly created scaling group to the specified resource group. If you do not specify this parameter, the scaling group belongs to the default resource group.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The name of the scaling group. The name must be unique within a region.
   * 
   * It must be 2 to 64 characters in length. It must start with a digit, a letter, or a Chinese character, and can contain digits, underscores (_), hyphens (-), and periods (.).
   * 
   * Default value: the value of ScalingGroupId.
   * 
   * @example
   * scalinggroup****
   */
  scalingGroupName?: string;
  /**
   * @remarks
   * The reclaim mode of the scaling group. Valid values: 
   *          
   * - recycle: sets the reclaim mode of the scaling group to shutdown and reclaim mode.  
   * - release: sets the reclaim mode of the scaling group to release mode.
   * - forcerelease: sets the reclaim mode of the scaling group to force release mode.
   *     > If you select forcerelease, the system forcibly releases instances in the `Running` state during scale-down activities. Forcibly releasing an instance is equivalent to a power-off operation, which erases temporary data in the memory and storage of the instance. The data cannot be recovered. Proceed with caution.
   * - forcerecycle: sets the reclaim mode of the scaling group to force shutdown and reclaim mode.
   *     > If you select forcerecycle, the system forcibly shuts down instances in the `Running` state during scale-down activities. Forcibly shutting down an instance is equivalent to a power-off operation, which erases temporary data in the memory and storage of the instance. The data cannot be recovered. Proceed with caution.
   * 
   * 
   * The ScalingPolicy parameter specifies the reclaim mode of the scaling group, but the specific action taken when an instance is removed from the scaling group is determined by the RemovePolicy parameter of RemoveInstances. For more information, see [RemoveInstances](https://help.aliyun.com/document_detail/25955.html).
   * 
   * @example
   * recycle
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The collection of information about the server groups.
   * > You cannot configure the same server group settings in both AlbServerGroups and ServerGroups at the same time.
   */
  serverGroups?: CreateScalingGroupRequestServerGroups[];
  /**
   * @remarks
   * The spot capacity distribution policy. You can use this parameter to separately specify the distribution policy for spot capacity. This parameter takes effect only when the MultiAZPolicy parameter is set to COMPOSABLE. Valid values:
   * 
   * - priority: Creates instances based on the order of the configured instance types.
   * - lowestPrice: Creates instances based on the unit price per vCPU of the instance types in ascending order.
   * 
   * Default value: priority.
   * 
   * @example
   * lowestPrice
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The number of available instance types. The scaling group evenly creates spot instances across multiple instance types with the lowest cost. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to enable the Auto Scaling policy to supplement spot instances. After this feature is enabled, when a system message indicating that a spot instance is to be reclaimed is received, the scaling group attempts to create a new instance to replace the spot instance to be reclaimed.
   * 
   * @example
   * true
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The timeout period for waiting for an ECS instance to be stopped during the scale-in process. Unit: seconds.
   * Valid values: 30 to 240.
   * 
   * > - This parameter takes effect only in the scale-in process when ScalingPolicy is set to release.  
   * > - If this parameter is specified, the system waits for a maximum of the StopInstanceTimeout period for the instance to be stopped. After the timeout period elapses, the scale-in process continues regardless of whether the instance is stopped.  
   * > - If this parameter is not specified, the system waits for a long time for the instance to be stopped. The scale-in process continues only after the instance is stopped. If the instance fails to be stopped, the scale-in process is rolled back and the scale-in fails.
   * 
   * @example
   * 60
   */
  stopInstanceTimeout?: number;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * false
   */
  syncAlarmRuleToCms?: boolean;
  /**
   * @remarks
   * The collection of tag information for the scaling group.
   */
  tags?: CreateScalingGroupRequestTags[];
  /**
   * @remarks
   * The collection of information about the virtual server groups associated with the scaling group.
   */
  VServerGroups?: CreateScalingGroupRequestVServerGroups[];
  /**
   * @remarks
   * The ID of the vSwitch. After this parameter is specified, the network type of the scaling group is VPC.
   * 
   * > If neither VSwitchId nor VSwitchIds is specified for the scaling group, the network type of the scaling group is classic network by default.
   * 
   * @example
   * vsw-bp14zolna43z266bq****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The IDs of one or more vSwitches. If you use the VSwitchIds parameter, the VSwitchId parameter is ignored. After this parameter is specified, the network type of the scaling group is VPC.
   * 
   * When you specify multiple vSwitches:
   * 
   * - The vSwitches must belong to the same VPC.
   * 
   * - The vSwitches can belong to different zones.
   * 
   * - The vSwitches are prioritized in ascending order of numbers. 1 indicates the highest priority. If instances cannot be created in the zone of a higher-priority vSwitch, the system automatically selects the next highest-priority vSwitch to create instances.
   * 
   * > If neither VSwitchId nor VSwitchIds is specified for the scaling group, the network type of the scaling group is classic network by default.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The behavior policy of the scaling group during zone shift.
   */
  zoneShiftPolicy?: CreateScalingGroupRequestZoneShiftPolicy;
  static names(): { [key: string]: string } {
    return {
      albServerGroups: 'AlbServerGroups',
      allocationStrategy: 'AllocationStrategy',
      autoRebalance: 'AutoRebalance',
      azBalance: 'AzBalance',
      balanceMode: 'BalanceMode',
      capacityOptions: 'CapacityOptions',
      clientToken: 'ClientToken',
      compensateWithOnDemand: 'CompensateWithOnDemand',
      containerGroupId: 'ContainerGroupId',
      customPolicyARN: 'CustomPolicyARN',
      DBInstanceIds: 'DBInstanceIds',
      DBInstances: 'DBInstances',
      defaultCooldown: 'DefaultCooldown',
      desiredCapacity: 'DesiredCapacity',
      groupDeletionProtection: 'GroupDeletionProtection',
      groupType: 'GroupType',
      healthCheckType: 'HealthCheckType',
      healthCheckTypes: 'HealthCheckTypes',
      instanceId: 'InstanceId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateOverrides: 'LaunchTemplateOverrides',
      launchTemplateVersion: 'LaunchTemplateVersion',
      lifecycleHooks: 'LifecycleHooks',
      loadBalancerConfigs: 'LoadBalancerConfigs',
      loadBalancerIds: 'LoadBalancerIds',
      maxInstanceLifetime: 'MaxInstanceLifetime',
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      multiAZPolicy: 'MultiAZPolicy',
      onDemandBaseCapacity: 'OnDemandBaseCapacity',
      onDemandPercentageAboveBaseCapacity: 'OnDemandPercentageAboveBaseCapacity',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removalPolicies: 'RemovalPolicies',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupName: 'ScalingGroupName',
      scalingPolicy: 'ScalingPolicy',
      serverGroups: 'ServerGroups',
      spotAllocationStrategy: 'SpotAllocationStrategy',
      spotInstancePools: 'SpotInstancePools',
      spotInstanceRemedy: 'SpotInstanceRemedy',
      stopInstanceTimeout: 'StopInstanceTimeout',
      syncAlarmRuleToCms: 'SyncAlarmRuleToCms',
      tags: 'Tags',
      VServerGroups: 'VServerGroups',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      zoneShiftPolicy: 'ZoneShiftPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroups: { 'type': 'array', 'itemType': CreateScalingGroupRequestAlbServerGroups },
      allocationStrategy: 'string',
      autoRebalance: 'boolean',
      azBalance: 'boolean',
      balanceMode: 'string',
      capacityOptions: CreateScalingGroupRequestCapacityOptions,
      clientToken: 'string',
      compensateWithOnDemand: 'boolean',
      containerGroupId: 'string',
      customPolicyARN: 'string',
      DBInstanceIds: 'string',
      DBInstances: { 'type': 'array', 'itemType': CreateScalingGroupRequestDBInstances },
      defaultCooldown: 'number',
      desiredCapacity: 'number',
      groupDeletionProtection: 'boolean',
      groupType: 'string',
      healthCheckType: 'string',
      healthCheckTypes: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      launchTemplateId: 'string',
      launchTemplateOverrides: { 'type': 'array', 'itemType': CreateScalingGroupRequestLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      lifecycleHooks: { 'type': 'array', 'itemType': CreateScalingGroupRequestLifecycleHooks },
      loadBalancerConfigs: { 'type': 'array', 'itemType': CreateScalingGroupRequestLoadBalancerConfigs },
      loadBalancerIds: 'string',
      maxInstanceLifetime: 'number',
      maxSize: 'number',
      minSize: 'number',
      multiAZPolicy: 'string',
      onDemandBaseCapacity: 'number',
      onDemandPercentageAboveBaseCapacity: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      removalPolicies: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupName: 'string',
      scalingPolicy: 'string',
      serverGroups: { 'type': 'array', 'itemType': CreateScalingGroupRequestServerGroups },
      spotAllocationStrategy: 'string',
      spotInstancePools: 'number',
      spotInstanceRemedy: 'boolean',
      stopInstanceTimeout: 'number',
      syncAlarmRuleToCms: 'boolean',
      tags: { 'type': 'array', 'itemType': CreateScalingGroupRequestTags },
      VServerGroups: { 'type': 'array', 'itemType': CreateScalingGroupRequestVServerGroups },
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneShiftPolicy: CreateScalingGroupRequestZoneShiftPolicy,
    };
  }

  validate() {
    if(Array.isArray(this.albServerGroups)) {
      $dara.Model.validateArray(this.albServerGroups);
    }
    if(this.capacityOptions && typeof (this.capacityOptions as any).validate === 'function') {
      (this.capacityOptions as any).validate();
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
    if(Array.isArray(this.lifecycleHooks)) {
      $dara.Model.validateArray(this.lifecycleHooks);
    }
    if(Array.isArray(this.loadBalancerConfigs)) {
      $dara.Model.validateArray(this.loadBalancerConfigs);
    }
    if(Array.isArray(this.removalPolicies)) {
      $dara.Model.validateArray(this.removalPolicies);
    }
    if(Array.isArray(this.serverGroups)) {
      $dara.Model.validateArray(this.serverGroups);
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
    if(this.zoneShiftPolicy && typeof (this.zoneShiftPolicy as any).validate === 'function') {
      (this.zoneShiftPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

