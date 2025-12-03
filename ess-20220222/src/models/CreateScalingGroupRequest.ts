// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingGroupRequestAlbServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the ALB server group.
   * 
   * You can attach only a limited number of ALB server groups to a scaling group. To view the predefined quota limit or manually request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * sgp-ddwb0y0g6y9bjm****
   */
  albServerGroupId?: string;
  /**
   * @remarks
   * The port number used by each ECS instance as a backend server in the ALB server group. Valid values: 1 to 65535.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The weight of an ECS instance as a backend server in the ALB server group. If you increase the weight for an ECS instance, the number of requests that are forwarded to the ECS instance also increases. If you set the weight for an ECS instance to 0, no requests are forwarded to the ECS instance. Valid values: 0 to 100.
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
   * Specifies whether to automatically create pay-as-you-go ECS instances to reach the required number of ECS instances when preemptible ECS instances cannot be created due to high prices or insufficient inventory of resources. This parameter takes effect when you set `MultiAZPolicy` to `COST_OPTIMIZED`. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The minimum number of pay-as-you-go instances required in the scaling group. When the number of pay-as-you-go instances drops below the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances. Valid values: 0 to 1000.
   * 
   * If you set `MultiAZPolicy` to `COMPOSABLE`, the default value is 0.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of pay-as-you-go instances in the excess instances when the minimum number of pay-as-you-go instances is reached. `OnDemandBaseCapacity` specifies the minimum number of pay-as-you-go instances that must be contained in the scaling group. Valid values: 0 to 100.
   * 
   * If you set `MultiAZPolicy` to `COMPOSABLE`, the default value is 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The cost comparison method. Valid values:
   * 
   * *   PricePerUnit: Prices are compared based on the price per instance capacity.
   * 
   *     Capacity is determined by the weights assigned to instance types in the scaling group. If no weight is specified, a default weight of 1 is used, meaning each instance is assigned a capacity of 1.
   * 
   * *   PricePerVCpu: Prices are compared based on the price per vCPU.
   * 
   * Default value: PricePerUnit.
   * 
   * @example
   * PricePerUnit
   */
  priceComparisonMode?: string;
  /**
   * @remarks
   * Specifies whether to replace pay-as-you-go instances with preemptible instances. If you specify `CompensateWithOnDemand`, it may result in a higher percentage of pay-as-you-go instances compared to the value of `OnDemandPercentageAboveBaseCapacity`. In this scenario, Auto Scaling will try to deploy preemptible instances to replace the surplus pay-as-you-go instances. When `CompensateWithOnDemand` is specified, Auto Scaling creates pay-as-you-go instances if there are not enough preemptible instance types. To avoid keeping these pay-as-you-go ECS instances for long periods, Auto Scaling tries to replace them with preemptible instances as soon as enough of preemptible instance types become available. Valid values:
   * 
   * *   true
   * *   false
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
   * The mode in which you want to attach the database to the scaling group. Valid values:
   * 
   * *   SecurityIp: the mode in which Auto Scaling automatically adds the private IP addresses of ECS instances to the IP address whitelist of the database during scale-out events. You can set the value to SecurityIp only if you set Type to RDS.
   * *   SecurityGroup: the mode in which Auto Scaling adds the security group of the applied scaling configuration to the security group whitelist of the database. This setting allows ECS instances created from the scaling configuration to access the database.
   * 
   * @example
   * SecurityIp
   */
  attachMode?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * rm-m5eqju85s45mu0***
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * *   RDS
   * *   Redis
   * *   MongoDB
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
   * The instance type that you want to use to override the instance type that is specified in the launch template.
   * 
   * If you want to scale instances based on the weighted capacities of the instances, you must specify both the InstanceType and WeightedCapacity parameters.
   * 
   * > This parameter is available only if you specify the LaunchTemplateId parameter.
   * 
   * You can use the InstanceType parameter to specify only instance types that are available for purchase.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum bid price of the instance type that is specified by the `InstanceType` parameter. You can specify 1 to 10 instance types by using the Extended Configurations feature of the launch template.
   * 
   * > This parameter is available only if you specify the `LaunchTemplateId` parameter.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The weight of the instance type. The weight specifies the capacity of an instance of the specified instance type in the scaling group. If you want to scale instances based on the weighted capacities of the instances, you must specify the WeightedCapacity parameter after you specify the InstanceType parameter.
   * 
   * A higher weight specifies that a smaller number of instances of the specified instance type are required to meet the expected capacity requirement.
   * 
   * Performance metrics, such as the number of vCPUs and the memory size of each instance type, may vary. You can specify different weights for different instance types based on your business requirements.
   * 
   * Example:
   * 
   * *   Current capacity: 0
   * *   Expected capacity: 6
   * *   Capacity of ecs.c5.xlarge: 4
   * 
   * To meet the expected capacity requirement, Auto Scaling must create and add two ecs.c5.xlarge instances.
   * 
   * > The capacity of the scaling group cannot exceed the sum of the maximum number of instances that is specified by the MaxSize parameter and the maximum weight of the instance types.
   * 
   * Valid values of the WeightedCapacity parameter: 1 to 500.
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
   * The action that Auto Scaling performs when the lifecycle hook times out. Valid values:
   * 
   * *   CONTINUE: Auto Scaling continues to respond to the scaling request.
   * *   ABANDON: Auto Scaling releases ECS instances that are created during scale-out events, or removes ECS instances from the scaling group during scale-in events.
   * 
   * If multiple lifecycle hooks in the scaling group are triggered during scale-in events, and you set DefaultResult to ABANDON for one of the lifecycle hooks, Auto Scaling immediately performs the action after the lifecycle hook whose DefaultResult is set to ABANDON times out. In this case, other lifecycle hooks time out ahead of schedule. In other cases, Auto Scaling performs the action only after all lifecycle hooks time out. The action that Auto Scaling performs is determined by the value of DefaultResult that you specify for the lifecycle hook that most recently times out.
   * 
   * Default value: CONTINUE.
   * 
   * @example
   * CONTINUE
   */
  defaultResult?: string;
  /**
   * @remarks
   * The period of time before the lifecycle hook times out. When the lifecycle hook times out, Auto Scaling performs the action that is specified by DefaultResult. Valid values: 30 to 21600. Unit: seconds.
   * 
   * After you create a lifecycle hook, you can call the RecordLifecycleActionHeartbeat operation to extend the timeout period of the lifecycle hook. You can also call the CompleteLifecycleAction operation to end the timeout period of the lifecycle hook ahead of schedule.
   * 
   * Default value: 600.
   * 
   * @example
   * 600
   */
  heartbeatTimeout?: number;
  /**
   * @remarks
   * The name of the lifecycle hook. After you specify this parameter, you cannot change the name of the lifecycle hook. If you do not specify this parameter, the name of the lifecycle hook is the same as the ID of the lifecycle hook.
   * 
   * @example
   * lifecyclehook****
   */
  lifecycleHookName?: string;
  /**
   * @remarks
   * The type of the scaling activity to which you want to apply the lifecycle hook. Valid values:
   * 
   * *   SCALE_OUT
   * *   SCALE_IN
   * 
   * >  If you specify lifecycle hooks for the scaling group, you must specify LifecycleTransition. Other parameters are optional.
   * 
   * @example
   * SCALE_OUT
   */
  lifecycleTransition?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the notification recipient party. You can specify a Simple Message Queue (SMQ, formerly MNS) topic or queue as the recipient party. The value is in the acs:ess:{region}:{account-id}:{resource-relative-id} format.
   * 
   * *   region: the region ID of the scaling group
   * *   account-id: the ID of your Alibaba Cloud account.
   * 
   * Examples:
   * 
   * *   SMQ queue: acs:ess:{region}:{account-id}:queue/{queuename}
   * *   SMQ topic: acs:ess:{region}:{account-id}:topic/{topicname}
   * 
   * @example
   * acs:ess:cn-hangzhou:1111111111:queue/queue2
   */
  notificationArn?: string;
  /**
   * @remarks
   * The fixed string that you want to include in notifications. When a lifecycle hook takes effect, Auto Scaling sends a notification. The fixed string can contain up to 4,096 characters in length. When Auto Scaling sends a notification to the recipient party, it includes predefined notification metadata into the notification. This helps in managing and labeling notifications of different categories. NotificationMetadata takes effect only if you specify NotificationArn.
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
   * lb-2zen1olhfg9yw3f4qgte4
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The weight of each ECS instance as a backend server in the CLB backend server group. If you increase the weight for an ECS instance, the number of requests that are forwarded to the ECS instance also increases. If you set the weight for an ECS instance to 0, no requests are forwarded to the ECS instance. Valid values: 0 to 100.
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
   * The port number used by each ECS instance as backend server in the vServer group. Valid values: 1 to 65535.
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
   * *   ALB
   * *   NLB
   * 
   * @example
   * ALB
   */
  type?: string;
  /**
   * @remarks
   * The weight of each ECS instance as a backend server in the server group. Valid values: 0 to 100.
   * 
   * If you increase the weight for an ECS instance, the number of requests that are forwarded to the ECS instance also increases. If you set the weight for an ECS instance to 0, no requests are forwarded to the ECS instance.
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
   * Identifies whether the tag is a propagatable tag. Valid values:
   * 
   * *   true: propagates the tag to only instances that are newly created.
   * *   false: does not propagate the tag to any instances.
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
   * The port number used by each ECS instance as a backend server in the vServer group. Valid values: 1 to 65535.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-bp1443g77****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The weight of each ECS instance as a backend server in the vServer group. If you increase the weight for an ECS instance, the number of requests that are forwarded to the ECS instance also increases. If you set the weight for an ECS instance to 0, no requests are forwarded to the ECS instance. Valid values: 0 to 100.
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
   * The ID of the CLB instance to which the backend vServer group belongs.
   * 
   * @example
   * lb-bp1u7etiogg38yvwz****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The attributes of the backend vServer group.
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

export class CreateScalingGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The Application Load Balancer (ALB) server groups.
   */
  albServerGroups?: CreateScalingGroupRequestAlbServerGroups[];
  /**
   * @remarks
   * The allocation policy of instances. Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only when you set the `MultiAZPolicy` parameter to `COMPOSABLE`. Valid values:
   * 
   * *   priority: Auto Scaling selects instance types based on the specified order of the instance types to create the required number of instances.
   * *   lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
   * 
   * Default value: priority.
   * 
   * @example
   * priority
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * Whether to enable automatic rebalancing for the scaling group. This takes effect only when BalancedOnly is enabled for the scaling group. Valid values:
   * 
   * *   false: Auto rebalancing is disabled for the scaling group.
   * *   true: If Auto rebalancing is enabled, the scaling group automatically detects the capacity of the zone. If the capacity of the zone is unbalanced, the scaling group actively scales out the zone and re-balances the capacity of the zone.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRebalance?: boolean;
  /**
   * @remarks
   * Specifies whether to evenly distribute instances in the scaling group across multiple zones. This parameter takes effect only if you set `MultiAZPolicy` to `COMPOSABLE`. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  If you set `MultiAZPolicy` to `COMPOSABLE` and enable `AzBalance` to `true`, this setting has an equivalent effect to setting `MultiAZPolicy` to `BALANCE`.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  azBalance?: boolean;
  /**
   * @remarks
   * The zone balancing mode. This mode takes effect only when the zone balancing mode is enabled. Valid values:
   * 
   * *   BalancedBestEffort: If a resource fails to be created in a zone, it is downgraded to another zone to ensure best-effort delivery of the resource.
   * *   BalancedOnly: If a resource fails to be created in a zone, it is not downgraded to another zone. The scale-out activity is partially successful to avoid excessive imbalance of resources in different zones.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to automatically create pay-as-you-go instances to meet the requirement on the number of ECS instances when the expected capacity of preemptible instances cannot be provided due to reasons such as cost-related issues and insufficient resources. This parameter is available only if you set the MultiAZPolicy parameter to COST_OPTIMIZED. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The ID of the elastic container instance.
   * 
   * @example
   * eci-uf6fonnghi50u374****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function). This parameter is available only if you specify CustomPolicy as the first step to remove instances.
   * 
   * @example
   * acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name
   */
  customPolicyARN?: string;
  /**
   * @remarks
   * The IDs of the ApsaraDB RDS instances that you want to associate with the scaling group. The value can be a JSON array that contains multiple ApsaraDB RDS instance IDs. Separate multiple IDs with commas (,).
   * 
   * You can associate only a limited number of ApsaraDB RDS instances with a scaling group. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to check the maximum number of ApsaraDB RDS instances that you can associate with a scaling group.
   * 
   * @example
   * ["rm-bp142f86de0t7****", "rm-bp18l1z42ar4o****", "rm-bp1lqr97h4aqk****"]
   */
  DBInstanceIds?: string;
  /**
   * @remarks
   * The databases that you want to attach to the scaling group.
   */
  DBInstances?: CreateScalingGroupRequestDBInstances[];
  /**
   * @remarks
   * The cooldown period of the scaling group after a scaling activity is complete in the scaling group. Valid values: 0 to 86400. Unit: seconds.
   * 
   * During the cooldown period, Auto Scaling does not execute scaling activities that are triggered by CloudMonitor event-triggered tasks.
   * 
   * Default value: 300.
   * 
   * @example
   * 300
   */
  defaultCooldown?: number;
  /**
   * @remarks
   * The expected number of ECS instances in the scaling group. Auto Scaling automatically maintains the specified expected number of ECS instances. The DesiredCapacity value cannot be greater than the MaxSize value or less than the MinSize value.
   * 
   * @example
   * 5
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the scaling group. Valid values:
   * 
   * *   true: enables deletion protection for the scaling group. This way, the scaling group cannot be deleted.
   * *   false: disables deletion protection for the scaling group.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  groupDeletionProtection?: boolean;
  /**
   * @remarks
   * The type of the instances that are managed by the scaling group. Valid values:
   * 
   * *   ECS: ECS instances.
   * *   ECI: elastic container instances.
   * 
   * Default value: ECS.
   * 
   * @example
   * ECS
   */
  groupType?: string;
  /**
   * @remarks
   * The health check mode of the scaling group. Valid values:
   * 
   * *   NONE: Auto Scaling does not check the health status of instances.
   * *   ECS: Auto Scaling checks the health status of instances in the scaling group. If you want to enable instance health check, you can set the value to ECS, regardless of whether the scaling group is of ECS type or Elastic Container Instance type.
   * *   LOAD_BALANCER: Auto Scaling checks the health status of instances in the scaling group based on the health check results of load balancers. The health check results of Classic Load Balancer (CLB) instances are not supported as the health check basis for instances in the scaling group.
   * 
   * Default value: ECS.
   * 
   * >  If you want to enable instance health check and load balancer health check at the same time, we recommend that you specify `HealthCheckTypes`.
   * 
   * @example
   * ECS
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The health check mode of the scaling group.
   * 
   * >  You can specify multiple values for this parameter to enable multiple health check options at the same time. If you specify `HealthCheckType`, this parameter is ignored.
   */
  healthCheckTypes?: string[];
  /**
   * @remarks
   * The ID of the ECS instance. When you create a scaling group, you can specify an existing ECS instance. Auto Scaling obtains the configurations of the ECS instance and automatically creates a scaling configuration from the obtained configurations.
   * 
   * @example
   * i-28wt4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the launch template that provides instance configurations for Auto Scaling to create instances.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * Details of the instance types that you specify by using the Extended Configurations feature of the launch template.
   */
  launchTemplateOverrides?: CreateScalingGroupRequestLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version number of the launch template. Valid values:
   * 
   * *   A fixed template version number.
   * *   Default: the default template version.
   * *   Latest: the latest template version.
   * 
   * @example
   * Default
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The lifecycle hooks.
   */
  lifecycleHooks?: CreateScalingGroupRequestLifecycleHooks[];
  /**
   * @remarks
   * The load balancer configurations.
   */
  loadBalancerConfigs?: CreateScalingGroupRequestLoadBalancerConfigs[];
  /**
   * @remarks
   * The IDs of the CLB instances that you want to associate with the scaling group. The value can be a JSON array that contains multiple CLB instance IDs. Separate multiple IDs with commas (,).
   * 
   * You can associate only a limited number of CLB instances with a scaling group. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to check the maximum number of CLB instances that you can associate with a scaling group.
   * 
   * @example
   * ["lb-bp1u7etiogg38yvwz****", "lb-bp168cqrux9ai9l7f****", "lb-bp1jv3m9zvj22ufxp****"]
   */
  loadBalancerIds?: string;
  /**
   * @remarks
   * The maximum life span of an instance in the scaling group. Unit: seconds.
   * 
   * Valid values: 86400 to the value of the Integer.maxValue parameter.
   * 
   * Default value: null.
   * 
   * @example
   * null
   */
  maxInstanceLifetime?: number;
  /**
   * @remarks
   * The maximum number of instances that can be contained in the scaling group. When the total number of ECS instances in the scaling group exceeds the value of MaxSize, Auto Scaling automatically removes ECS instances from the scaling group until the total number equals the maximum number.
   * 
   * The value range of MaxSize is directly correlated with the degree of dependency your business has on Auto Scaling. You can go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to check **the maximum number of instances that a single scaling group can contain.**
   * 
   * If **a single scaling group can contain up to 2,000 ECS instances**, the value range of MaxSize is 0 to 2,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum number of instances that must be contained in the scaling group. When the total number of ECS instances in the scaling group is less than the value of MinSize, Auto Scaling automatically creates ECS instances in the scaling group until the total number reaches the minimum number.
   * 
   * >  The value of MinSize must be less than or equal to the value of MaxSize.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  minSize?: number;
  /**
   * @remarks
   * The scaling policy for ECS instances in the multi-zone scaling group. Valid values:
   * 
   * *   PRIORITY: scale ECS instances based on the priority of the vSwitches specified by VSwitchIds. Auto Scaling preferentially scales instances in the zone where the vSwitch of the highest priority resides. If the scaling fails, Auto Scaling scales instances in the zone where the vSwitch of the next highest priority resides.
   * 
   * *   COST_OPTIMIZED: create ECS instances that have the lowest unit price of vCPUs during scale-out events and removes ECS instances that have the highest unit price of vCPUs during scale-in events. If you specify preemptible instance types in your scaling configuration, Auto Scaling will preferentially create preemptible instances. You can also specify CompensateWithOnDemand to allow Auto Scaling to create pay-as-you-go instances in the case that preemptible instances cannot be created due to limited stock.
   * 
   *     **
   * 
   *     **Note** The COST_OPTIMIZED setting takes effect only when your scaling configuration contains multiple instance types or specifically contains preemptible instance types.
   * 
   * *   BALANCE: evenly distribute ECS instances across the zones that are specified for the scaling group. If ECS instances are unevenly distributed across the specified zones due to insufficient inventory, you can call the [RebalanceInstance](https://help.aliyun.com/document_detail/71516.html) operation to evenly distribute the instances across the zones.
   * 
   *     **
   * 
   *     **Note** When you set `MultiAZPolicy` to `BALANCE`, this setting has an equivalent effect to setting `MultiAZPolicy` to `COMPOSABLE` and enabling `AzBalance` to `true`.
   * 
   * *   COMPOSABLE: combine the preceding policies into a custom scaling policy based on your business requirements. Alternatively, you can specify custom parameters to finely control the capacity of the scaling group.
   * 
   * Default value: PRIORITY.
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
   * The percentage of pay-as-you-go instances in the excess instances when the minimum number of pay-as-you-go instances reaches the requirement. Valid values: 0 to 100.
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
   * The instance removal policies. Valid values:
   * 
   * *   OldestInstance: removes ECS instances that are added at the earliest point in time to the scaling group.
   * *   NewestInstance: removes ECS instances that are most recently added to the scaling group.
   * *   OldestScalingConfiguration: removes ECS instances that are created based on the earliest scaling configuration.
   * *   CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
   * 
   * The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. The CustomPolicy setting takes effect only if you specify it as the first step to remove instances. If you specify CustomPolicy, you must also specify the CustomPolicyARN parameter.
   * 
   * > The removal of ECS instances from a scaling group is also affected by the value of the MultiAZPolicy parameter. For more information, see the [Configure a combination policy for removing instances](https://help.aliyun.com/document_detail/254822.html) topic.
   */
  removalPolicies?: string[];
  /**
   * @remarks
   * The ID of the resource group to which you want to add the scaling group.
   * 
   * > If you specify this parameter, new scaling groups are added to the specified resource group. If you do not specify this parameter, new scaling groups are added to the default resource group.
   * 
   * @example
   * rg-123******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The name of the scaling group. The name of each scaling group must be unique in a region.
   * 
   * The name must be 2 to 64 characters in length, and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
   * 
   * If you do not specify this parameter, the value of the ScalingGroupId parameter is used.
   * 
   * @example
   * scalinggroup****
   */
  scalingGroupName?: string;
  /**
   * @remarks
   * The reclaim mode of the scaling group. Valid values:
   * 
   * *   recycle: the economical mode
   * 
   * *   release: the release mode
   * 
   * *   forcerelease: the forced release mode
   * 
   *     **
   * 
   *     **Note** If you set the value to forcerelease, Auto Scaling will forcibly release the ECS instances that are in the `Running` state during the scale-out events. Forced release equates to an immediate power-off, resulting in the irreversible deletion of all ephemeral data stored on the instance. Once executed, this action cannot be undone and the lost data cannot be recovered. Exercise caution when you select this option.
   * 
   * *   forcerecycle: the forced recycle mode
   * 
   *     **
   * 
   *     **Note** If you set the value to forcerecycle, Auto Scaling will forcibly shut down the ECS instances that are in the `Running` state during the scale-out events. Forced recycle equates to an immediate power-off, resulting in the irreversible deletion of all ephemeral data stored on the instance. Once executed, this action cannot be undone and the lost data cannot be recovered. Exercise caution when you select this option.
   * 
   * ScalingPolicy specifies the reclaim mode of the scaling group. RemovePolicy of the RemoveInstances operation specifies the specific instance removal action. For more information, see [RemoveInstances](https://help.aliyun.com/document_detail/25955.html).
   * 
   * @example
   * recycle
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The server groups.
   * 
   * >  You cannot use AlbServerGroups and ServerGroups to specify the same server group.
   */
  serverGroups?: CreateScalingGroupRequestServerGroups[];
  /**
   * @remarks
   * The allocation policy of preemptible instances. You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set the `MultiAZPolicy` parameter to `COMPOSABLE`. Valid values:
   * 
   * *   priority: Auto Scaling selects instance types based on the specified order of the instance types to create the required number of preemptible instances.
   * *   lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
   * 
   * Default value: priority.
   * 
   * @example
   * lowestPrice
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The number of available instance types. Auto Scaling evenly creates preemptible instances of multiple instance types that are provided at the lowest cost in the scaling group. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * Specifies whether to supplement preemptible instances. If you set this parameter to true, Auto Scaling creates an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
   * 
   * @example
   * true
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The period of time required by the ECS instance to enter the Stopped state. Unit: seconds. Valid values: 30 to 240.
   * 
   * > 
   * 
   * *   This parameter takes effect only if you set ScalingPolicy to release.
   * 
   * *   If you specify this parameter, the system will wait for the ECS instance to enter the Stopped state for the specified period of time before continuing with the scale-in operation, regardless of the status of the ECS instance.
   * 
   * *   If you do not specify this parameter, the system will wait for the ECS instance to stop before continuing with the scale-in operation. If the ECS instance is not successfully stopped, the scale-in process will be rolled back and considered failed.
   * 
   * @example
   * 60
   */
  stopInstanceTimeout?: number;
  /**
   * @remarks
   * > This parameter is unavailable.
   * 
   * @example
   * false
   */
  syncAlarmRuleToCms?: boolean;
  /**
   * @remarks
   * The information about the tags of the scaling group.
   */
  tags?: CreateScalingGroupRequestTags[];
  /**
   * @remarks
   * The backend vServer group that you want to associate with the scaling group.
   */
  VServerGroups?: CreateScalingGroupRequestVServerGroups[];
  /**
   * @remarks
   * The ID of the vSwitch. If you specify the VSwitchId parameter, the network type of the scaling group is VPC.
   * 
   * > If you do not specify the VSwitchId or VSwitchIds parameter, the network type of the scaling group is classic network.
   * 
   * @example
   * vsw-bp14zolna43z266bq****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches. If you specify VSwitchIds, VSwitchId is ignored. If you specify VSwitchIds, the network type of the scaling group is VPC.
   * 
   * If you specify multiple vSwitches, take note of the following items:
   * 
   * *   The vSwitches must belong to the same VPC.
   * *   The vSwitches can belong to different zones.
   * *   vSwitches are sorted in ascending order based on their priorities. The first vSwitch has the highest priority. If Auto Scaling fails to create ECS instances in the zone where the vSwitch of the highest priority resides, Auto Scaling attempts to create ECS instances in the zone where the vSwitch of the next highest priority resides.
   * 
   * >  If you do not specify VSwitchId or VSwitchIds for your scaling group, the network type of the scaling group is classic network.
   */
  vSwitchIds?: string[];
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

