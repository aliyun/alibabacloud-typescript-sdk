// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingGroupRequestAlbServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the ALB server group.
   * 
   * A scaling group can be associated with a limited number of ALB server groups. To view or request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * @example
   * sgp-ddwb0y0g6y9bjm****
   */
  albServerGroupId?: string;
  /**
   * @remarks
   * The port number used by an instance after it is added to the ALB server group. Valid values: 1 to 65535.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The weight of an instance as a backend server after the instance is added to the ALB server group. The higher the weight, the more access requests are distributed to the instance. If the weight is 0, no access requests are distributed to the instance. Valid values: 0 to 100.
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
   * When `MultiAZPolicy` is set to `COST_OPTIMIZED`, this parameter specifies whether to automatically create on-demand instances to meet capacity requirements when spot instances are unavailable due to price or inventory. Valid values:
   * 
   * - `true`: Yes.
   * 
   * - `false`: No.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The minimum number of on-demand instances required in the scaling group. When the number of on-demand instances in the scaling group is less than this value, the system preferentially creates on-demand instances. Valid values: 0 to 1,000.
   * 
   * When `MultiAZPolicy` is set to `COMPOSABLE`, the default value is 0.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of on-demand instances among the excess instances after the `OnDemandBaseCapacity` requirement is met. Valid values: 0 to 100.
   * 
   * When `MultiAZPolicy` is set to `COMPOSABLE`, the default value is 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  /**
   * @remarks
   * The price comparison mode for the cost optimization strategy of the scaling group. Valid values:
   * 
   * - `PricePerUnit`: Compares prices based on per-unit capacity.
   * 
   *   The capacity of an instance in a scaling group is equal to the weight set for the instance type, with a default of 1, meaning one ECS instance equals one unit of capacity.
   * 
   * - `PricePerVCpu`: Compares prices based on per-vCPU price.
   * 
   * Default value: `PricePerUnit`.
   * 
   * @example
   * PricePerUnit
   */
  priceComparisonMode?: string;
  /**
   * @remarks
   * After you enable `CompensateWithOnDemand`, if the on-demand percentage exceeds the `OnDemandPercentageAboveBaseCapacity` ratio, the system attempts to replace on-demand capacity with spot capacity. A common scenario is when `CompensateWithOnDemand` leads to on-demand instances being created due to spot inventory or price issues. To avoid the prolonged existence of these on-demand instances, the system attempts to replace the excess on-demand capacity with spot instances. Valid values:
   * 
   * - `true`: Allows replacement.
   * 
   * - `false`: Does not allow replacement.
   * 
   * Default value: `false`.
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
   * The method that is used to associate the scaling group with the database. Valid values:
   * 
   * - `SecurityIp`: The IP address whitelist mode. This mode automatically adds the scaled-out instances to the IP address whitelist of the database. This mode is supported only by RDS databases.
   * 
   * - `SecurityGroup`: The security group mode. This mode adds the security group of the scaling configuration to the security group whitelist of the database. This allows instances in the security group to access the database.
   * 
   * @example
   * SecurityIp
   */
  attachMode?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * rm-m5eqju85s45mu0***
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * - RDS
   * 
   * - Redis
   * 
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
   * To enable the scaling group to scale based on instance type capacity, you must specify both this parameter and `LaunchTemplateOverrides.WeightedCapacity`.
   * 
   * This parameter specifies the instance type, which overrides the instance type specified in the launch template.
   * 
   * > This parameter takes effect only when the `LaunchTemplateId` parameter is specified.
   * 
   * Must be a valid ECS instance type.
   * 
   * @example
   * ecs.c5.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum hourly price for the instance type specified in `LaunchTemplateOverride.InstanceType`.
   * 
   * > This parameter takes effect only when the `LaunchTemplateId` parameter is specified.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * To enable the scaling group to scale based on instance type capacity, you must specify this parameter after you specify `LaunchTemplateOverrides.InstanceType`.
   * 
   * This parameter specifies the weight of the instance type, which represents the capacity of a single instance of that type in the scaling group. A higher weight means that fewer instances of this type are needed to meet the desired capacity.
   * 
   * Because instance types have different performance metrics, such as the number of vCPUs and memory size, you can assign different weights to different instance types based on your requirements.
   * 
   * Example:
   * 
   * - Current capacity: 0.
   * 
   * - Desired capacity: 6.
   * 
   * - Capacity of ecs.c5.xlarge: 4.
   * 
   * To meet the desired capacity, the scaling group will create two ecs.c5.xlarge instances.
   * 
   * > During a scale-out activity, the capacity of the scaling group cannot exceed the sum of the maximum capacity (`MaxSize`) and the maximum weight of an instance type.
   * 
   * Valid values: 1 to 500.
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
   * The action to take after the wait state ends. Valid values:
   * 
   * - `CONTINUE`: Continues the scale-out or scale-in activity.
   * 
   * - `ABANDON`: Aborts the scale-out activity by releasing the created instances, or aborts the scale-in activity by keeping the instances in the scaling group.
   * 
   * If a scale-in (SCALE_IN) activity triggers multiple lifecycle hooks, and the `DefaultResult` of one of the lifecycle hooks is `ABANDON`, the wait state of the other lifecycle hooks ends prematurely. In other cases, the action is determined by the last lifecycle hook to complete.
   * 
   * Default value: `CONTINUE`.
   * 
   * @example
   * CONTINUE
   */
  defaultResult?: string;
  /**
   * @remarks
   * The wait time that is defined in the lifecycle hook for a scaling activity. After the wait time expires, the next action is performed. Valid values: 30 to 21600. Unit: seconds.
   * 
   * After you create a lifecycle hook, you can call the `RecordLifecycleActionHeartbeat` operation to extend the wait time of an instance, or call the `CompleteLifecycleAction` operation to end the wait state of the scaling activity in advance.
   * 
   * Default value: 600.
   * 
   * @example
   * 600
   */
  heartbeatTimeout?: number;
  /**
   * @remarks
   * The name of the lifecycle hook. The name cannot be modified after it is specified. If you do not specify a name, the ID of the lifecycle hook is used.
   * 
   * @example
   * lifecyclehook****
   */
  lifecycleHookName?: string;
  /**
   * @remarks
   * The type of scaling activity to which the lifecycle hook applies. Valid values:
   * 
   * - `SCALE_OUT`: A scale-out activity.
   * 
   * - `SCALE_IN`: A scale-in activity.
   * 
   * > This parameter is required if you specify a lifecycle hook for the scaling group. Other related parameters are optional.
   * 
   * @example
   * SCALE_OUT
   */
  lifecycleTransition?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the notification recipient for the lifecycle hook. Message Service (MNS) queues and topics are supported. The format is `acs:ess:{region}:{account-id}:{resource-relative-id}`.
   * 
   * - `region`: the region where the scaling group is located.
   * 
   * - `account-id`: the ID of your Alibaba Cloud account.
   * 
   * Examples:
   * 
   * - MNS queue: `acs:ess:{region}:{account-id}:queue/{queuename}`.
   * 
   * - MNS topic: `acs:ess:{region}:{account-id}:topic/{topicname}`.
   * 
   * @example
   * acs:ess:cn-hangzhou:1111111111:queue/queue2
   */
  notificationArn?: string;
  /**
   * @remarks
   * A fixed string of information for the wait state of a scaling activity. The value cannot exceed 4,096 characters in length. When Auto Scaling sends a message to the specified notification recipient, it includes the value of this parameter. This allows you to manage and categorize notifications. This parameter is valid only when you specify the `NotificationArn` parameter.
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
   * The weight of an instance as a backend server after the instance is added to the SLB server group. The higher the weight, the more access requests are distributed to the instance. If the weight is 0, no access requests are distributed to the instance. Valid values: 0 to 100.
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
   * The port number used by an instance after it is added to the server group. Valid values: 1 to 65535.
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
   * - `ALB`: Application Load Balancer.
   * 
   * - `NLB`: Network Load Balancer.
   * 
   * - `GWLB`: Gateway Load Balancer.
   * 
   * @example
   * ALB
   */
  type?: string;
  /**
   * @remarks
   * The weight of an instance as a backend server after the instance is added to the server group. Valid values: 0 to 100.
   * 
   * A higher weight indicates that more access requests are distributed to the instance. If the weight is 0, no access requests are distributed to the instance.
   * 
   * > This parameter is required for ALB and NLB server groups. You cannot set this parameter for GWLB server groups.
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
   * The key of the tag.
   * 
   * @example
   * Department
   */
  key?: string;
  /**
   * @remarks
   * Specifies whether the tag can be propagated. Valid values:
   * 
   * - `true`: The tag is propagated from the scaling group only to newly created instances, not to instances that are already running in the scaling group.
   * 
   * - `false`: The tag is not propagated from the scaling group to any instances.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  propagate?: boolean;
  /**
   * @remarks
   * The value of the tag.
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
   * The port number used by an instance after it is added to the vServer group. Valid values: 1 to 65535.
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
   * The weight of an instance as a backend server after the instance is added to the vServer group. The higher the weight, the more access requests are distributed to the instance. If the weight is 0, no access requests are distributed to the instance. Valid values: 0 to 100.
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
   * The ID of the Classic Load Balancer (CLB) instance to which the vServer group belongs.
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

export class CreateScalingGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The Application Load Balancer (ALB) server groups to associate with the scaling group.
   */
  albServerGroups?: CreateScalingGroupRequestAlbServerGroups[];
  /**
   * @remarks
   * The capacity allocation policy determines how the scaling group selects available instance types to meet capacity requirements. The policy applies to both on-demand and preemptible capacity (effective only when the `MultiAZPolicy` parameter is set to `COMPOSABLE`). Valid values:
   * 
   * - priority: Creates instances in the order of the configured instance types.
   * 
   * - lowestPrice: Create instances based on the price per vCPU of instance types, from lowest to highest.
   * 
   * Default value: priority.
   * 
   * @example
   * priority
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic balancing for the scaling group. This setting takes effect only when BalancedOnly is enabled for a scaling group that is balanced across availability zones. Value range:
   * 
   * - false: Does not enable automatic balancing for the scaling group.
   * 
   * - true: When automatic balancing for the scaling group is enabled, the scaling group automatically detects the capacity across availability zones. If the capacity is imbalanced, the scaling group proactively performs scaling across availability zones to rebalance the capacity.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRebalance?: boolean;
  /**
   * @remarks
   * Specifies whether to evenly distribute the capacity of the scaling group across multiple availability zones. This parameter is valid only when `MultiAZPolicy` is set to `COMPOSABLE`. Valid values:
   * 
   * - `true`: The capacity of the scaling group is evenly distributed across multiple availability zones.
   * 
   * - `false`: The capacity of the scaling group is not evenly distributed across multiple availability zones.
   * 
   * > If `MultiAZPolicy` is set to `COMPOSABLE` and `AzBalance` is set to `true`, the effect is the same as setting `MultiAZPolicy` to `BALANCE`.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  azBalance?: boolean;
  /**
   * @remarks
   * The zone balancing mode is effective only when enabled. Valid values:
   * 
   * - BalancedBestEffort: If a resource fails to be created in an availability zone, the system falls back to other availability zones to ensure best-effort delivery.
   * 
   * - BalancedOnly:
   *   If resource creation fails in an availability zone, the system does not fall back to other availability zones. The scaling activity is partially successful, which prevents an excessive imbalance of resources across different availability zones.
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
   * A client-generated token to ensure the idempotence of the request.
   * 
   * The token must be unique across requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is effective only when `MultiAZPolicy` is set to `COST_OPTIMIZED`. If `true`, Auto Scaling creates on-demand instances to meet capacity requirements when spot instances are unavailable due to price or inventory. Valid values:
   * 
   * - `true`: Yes.
   * 
   * - `false`: No.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  compensateWithOnDemand?: boolean;
  /**
   * @remarks
   * The ID of the ECI instance, also known as the container group ID.
   * 
   * @example
   * eci-uf6fonnghi50u374****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The ARN of the custom scale-in policy function. This parameter is valid only when the first removal policy in `RemovalPolicies` is `CustomPolicy`.
   * 
   * @example
   * acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name
   */
  customPolicyARN?: string;
  /**
   * @remarks
   * A JSON array of RDS instance IDs.
   * 
   * <props="china">
   * 
   * The number of RDS instances that you can associate with a single scaling group varies based on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to view the quota for **Maximum number of RDS instances that can be associated with a single scaling group**.
   * 
   * 
   * 
   * <props="intl">
   * 
   * The number of RDS instances that you can associate with a single scaling group varies based on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to view the quota for **Maximum number of RDS instances that can be associated with a single scaling group**.
   * 
   * 
   * 
   * <props="partner">
   * 
   * The number of RDS instances that you can associate with a single scaling group varies based on your Auto Scaling usage. Go to Quota Center to view the quota for **Maximum number of RDS instances that can be associated with a single scaling group**.
   * 
   * @example
   * ["rm-bp142f86de0t7****", "rm-bp18l1z42ar4o****", "rm-bp1lqr97h4aqk****"]
   */
  DBInstanceIds?: string;
  /**
   * @remarks
   * The databases that are associated with the scaling group.
   */
  DBInstances?: CreateScalingGroupRequestDBInstances[];
  /**
   * @remarks
   * The cooldown period, in seconds, after a scaling activity completes. Valid values: 0 to 86400.
   * 
   * During the cooldown period, the scaling group does not execute other scaling activities that are triggered by CloudMonitor alarm tasks.
   * 
   * Default value: 300.
   * 
   * @example
   * 300
   */
  defaultCooldown?: number;
  /**
   * @remarks
   * The desired number of instances in the scaling group. Auto Scaling automatically maintains this number of instances. The value must be less than or equal to `MaxSize` and greater than or equal to `MinSize`.
   * 
   * @example
   * 5
   */
  desiredCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the scaling group. Valid values:
   * 
   * - `true`: Enables deletion protection. The scaling group cannot be deleted.
   * 
   * - `false`: Disables deletion protection.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  groupDeletionProtection?: boolean;
  /**
   * @remarks
   * The type of instances managed by the scaling group. Valid values:
   * 
   * - `ECS`: The scaling group manages ECS instances.
   * 
   * - `ECI`: The scaling group manages ECI instances.
   * 
   * Default value: `ECS`.
   * 
   * @example
   * ECS
   */
  groupType?: string;
  /**
   * @remarks
   * The health check method for the scaling group. Valid values:
   * 
   * - `NONE`: No health checks are performed.
   * 
   * - `ECS`: Health checks are performed on instances in the scaling group. This value enables health checks for scaling groups of both the ECS and ECI types.
   * 
   * - `LOAD_BALANCER`: The instance health status is based on health check results from the attached load balancer. This option does not support Classic Load Balancer (CLB) instances.
   * 
   * Default value: `ECS`.
   * 
   * > To enable both instance health checks and load balancer health checks, use the `HealthCheckTypes` parameter.
   * 
   * @example
   * ECS
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The health check methods for the scaling group.
   * 
   * > You can use this parameter to set multiple values and enable multiple health check options. If you set the `HealthCheckType` parameter, this parameter is ignored.
   */
  healthCheckTypes?: string[];
  /**
   * @remarks
   * The ID of an existing instance to use as a template. Auto Scaling uses this instance to create a new scaling configuration for the scaling group.
   * 
   * @example
   * i-28wt4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the launch template that provides the configuration for the scaling group.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The instance type information for extending the launch template.
   */
  launchTemplateOverrides?: CreateScalingGroupRequestLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version of the launch template. Valid values:
   * 
   * - A specific version number of the template.
   * 
   * - `Default`: Uses the default version of the template.
   * 
   * - `Latest`: Uses the latest version of the template.
   * 
   * @example
   * Default
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The list of lifecycle hooks.
   */
  lifecycleHooks?: CreateScalingGroupRequestLifecycleHooks[];
  /**
   * @remarks
   * The load balancer configurations.
   */
  loadBalancerConfigs?: CreateScalingGroupRequestLoadBalancerConfigs[];
  /**
   * @remarks
   * A JSON array of Classic Load Balancer (CLB) instance IDs.
   * 
   * <props="china">
   * 
   * The number of CLB instances that you can associate with a single scaling group varies based on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to view the quota for **Maximum number of load balancer instances that can be associated with a single scaling group**.
   * 
   * 
   * 
   * <props="intl">
   * 
   * The number of CLB instances that you can associate with a single scaling group varies based on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to view the quota for **Maximum number of load balancer instances that can be associated with a single scaling group**.
   * 
   * 
   * 
   * <props="partner">
   * 
   * The number of CLB instances that you can associate with a single scaling group varies based on your Auto Scaling usage. Go to Quota Center to view the quota for **Maximum number of load balancer instances that can be associated with a single scaling group**.
   * 
   * @example
   * ["lb-bp1u7etiogg38yvwz****", "lb-bp168cqrux9ai9l7f****", "lb-bp1jv3m9zvj22ufxp****"]
   */
  loadBalancerIds?: string;
  /**
   * @remarks
   * The maximum lifetime of an instance in the scaling group. Unit: seconds.
   * 
   * Value range: [86400, Integer.maxValue].
   * 
   * Default value: null.
   * 
   * @example
   * null
   */
  maxInstanceLifetime?: number;
  /**
   * @remarks
   * The maximum number of instances in the scaling group. If the total number of instances exceeds this value, Auto Scaling removes instances to meet this maximum.
   * 
   * <props="china">
   * 
   * The value range of `MaxSize` depends on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to view the quota for **Maximum number of instances per scaling group**.
   * 
   * 
   * 
   * <props="intl">
   * 
   * The value range of `MaxSize` depends on your Auto Scaling usage. Go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas) to view the quota for **Maximum number of instances per scaling group**.
   * 
   * 
   * 
   * <props="partner">
   * 
   * The value range of `MaxSize` depends on your Auto Scaling usage. Go to Quota Center to view the quota for **Maximum number of instances per scaling group**.
   * 
   * 
   * 
   * If the quota for **Maximum number of instances per scaling group** is 2,000, the value of `MaxSize` can range from 0 to 2,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum number of instances in the scaling group. If the total number of instances falls below this value, Auto Scaling adds instances to meet this minimum.
   * 
   * > The value of `MinSize` must be less than or equal to the value of `MaxSize`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  minSize?: number;
  /**
   * @remarks
   * The scaling policy for ECS instances in a multi-zone scaling group. Valid values:
   * 
   * - `PRIORITY`: Auto Scaling prioritizes the vSwitches specified in `VSwitchIds`. If an operation fails in a higher-priority availability zone, Auto Scaling automatically attempts it in the next-highest-priority zone.
   * 
   * - `COST_OPTIMIZED`: During scale-out, creates instances from the instance types with the lowest vCPU unit price. During scale-in, removes instances from the instance types with the highest vCPU unit price. If the scaling configuration includes multiple spot instance types, spot instances are prioritized for creation. You can use the `CompensateWithOnDemand` parameter to specify whether to automatically create on-demand instances when spot instances cannot be created due to reasons such as insufficient inventory.
   * 
   *   > The `COST_OPTIMIZED` policy takes effect only when the scaling configuration specifies multiple instance types or includes spot instances.
   * 
   * - `BALANCE`: Distributes ECS instances evenly across the specified availability zones in the scaling group. If the distribution of instances becomes uneven due to insufficient inventory, you can call the [RebalanceInstance](https://help.aliyun.com/document_detail/71516.html) API operation to rebalance the instances.
   * 
   *   > If `MultiAZPolicy` is set to `BALANCE`, the effect is the same as setting `MultiAZPolicy` to `COMPOSABLE` and `AzBalance` to `true`.
   * 
   * - `COMPOSABLE`: A composite policy that allows you to combine the preceding policies for multi-zone scaling groups as needed. You can also specify additional parameters to gain finer control over the capacity of your scaling group.
   * 
   * Default value: `PRIORITY`.
   * 
   * @example
   * PRIORITY
   */
  multiAZPolicy?: string;
  /**
   * @remarks
   * The minimum number of on-demand instances required in the scaling group. Valid values: 0 to 1,000. If the number of on-demand instances is less than this value, Auto Scaling preferentially creates on-demand instances.
   * 
   * @example
   * 30
   */
  onDemandBaseCapacity?: number;
  /**
   * @remarks
   * The percentage of on-demand instances among the excess instances after the minimum number of on-demand instances (`OnDemandBaseCapacity`) is met. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  onDemandPercentageAboveBaseCapacity?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the scaling group resides.
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
   * - `OldestInstance`: Removes the ECS instance that was first added to the scaling group.
   * 
   * - `NewestInstance`: Removes the ECS instance that was most recently added to the scaling group.
   * 
   * - `OldestScalingConfiguration`: Removes the ECS instance that was created based on the earliest scaling configuration.
   * 
   * - `CustomPolicy`: Removes ECS instances based on a custom scale-in policy defined by a function.
   * 
   * The term `scaling configuration` in `OldestScalingConfiguration` refers to the source of instance configuration information, which includes both scaling configurations and launch templates. `CustomPolicy` can only be set as the first removal policy. If you specify `CustomPolicy`, you must also specify the `CustomPolicyARN` parameter.
   * 
   * > The removal of instances is also affected by the scaling group\\"s multi-AZ policy (`MultiAZPolicy`). For more information, see [Configure a combination of removal policies](https://help.aliyun.com/document_detail/254822.html).
   */
  removalPolicies?: string[];
  /**
   * @remarks
   * The ID of the resource group to which the new scaling group belongs.
   * 
   * > If you do not specify this parameter, the new scaling group is added to the default resource group.
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
   * The name must be 2 to 64 characters in length. It must start with a letter, a digit, or a Chinese character and can contain digits, underscores (_), hyphens (-), and periods (.).
   * 
   * If you do not specify this parameter, the value of `ScalingGroupId` is used.
   * 
   * @example
   * scalinggroup****
   */
  scalingGroupName?: string;
  /**
   * @remarks
   * The reclamation mode of the scaling group. Valid values:
   * 
   * - `recycle`: The reclamation mode is Economical Mode.
   * 
   * - `release`: The reclamation mode is Release Mode.
   * 
   * - `forcerelease`: The reclamation mode is Force Release Mode.
   * 
   *   > A forced release is equivalent to a power-off operation, which erases data in the memory and ephemeral storage of the instances. This data cannot be recovered. Use this option with caution.
   * 
   * - `forcerecycle`: The reclamation mode is Force Economical Mode.
   * 
   *   > A forced stop is equivalent to a power-off operation, which erases data in the memory and ephemeral storage of the instances. This data cannot be recovered. Use this option with caution.
   * 
   * `ScalingPolicy` specifies the reclamation mode of the scaling group. The specific action taken when an instance is removed from the scaling group is determined by the `RemovePolicy` parameter of the `RemoveInstances` operation. For more information, see [RemoveInstances](https://help.aliyun.com/document_detail/25955.html).
   * 
   * @example
   * recycle
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The load balancer server groups.
   * 
   * > You cannot specify the same server group in both `AlbServerGroups` and `ServerGroups`.
   */
  serverGroups?: CreateScalingGroupRequestServerGroups[];
  /**
   * @remarks
   * The distribution strategy for spot capacity. You can use this parameter to specify a separate strategy for spot capacity (effective only when the `MultiAZPolicy` parameter is set to `COMPOSABLE`). Valid values:
   * 
   * - priority: Creates instances in the order of the configured instance types.
   * 
   * - lowestPrice: Creates instances in ascending order of the price per vCPU of the instance types.
   * 
   * Default value: priority.
   * 
   * @example
   * lowestPrice
   */
  spotAllocationStrategy?: string;
  /**
   * @remarks
   * The number of instance types to use. The scaling group creates spot instances in a balanced manner across the specified number of lowest-cost instance types. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  spotInstancePools?: number;
  /**
   * @remarks
   * If set to `true`, Auto Scaling attempts to create a new instance to replace a spot instance that is about to be reclaimed.
   * 
   * @example
   * true
   */
  spotInstanceRemedy?: boolean;
  /**
   * @remarks
   * The timeout period for the system to wait for an ECS instance to be stopped during a scale-in event. Unit: seconds.
   * Valid values: 30 to 240.
   * 
   * > - This parameter takes effect only during scale-in events when `ScalingPolicy` is set to `release`.
   * >
   * > - If this parameter is set, the system waits for the specified `StopInstanceTimeout` period for the instance to be stopped. If the instance is not stopped after the timeout period, the scale-in process continues regardless of the instance status.
   * >
   * > - If this parameter is not set, the system waits for an extended period for the instance to be stopped. The scale-in process continues only after the instance is stopped. If the instance fails to stop, the scale-in process is rolled back, and the scale-in event fails.
   * 
   * @example
   * 60
   */
  stopInstanceTimeout?: number;
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * false
   */
  syncAlarmRuleToCms?: boolean;
  /**
   * @remarks
   * The tags to apply to the scaling group.
   */
  tags?: CreateScalingGroupRequestTags[];
  /**
   * @remarks
   * The vServer groups to associate with the scaling group.
   */
  VServerGroups?: CreateScalingGroupRequestVServerGroups[];
  /**
   * @remarks
   * The ID of the vSwitch. If you specify this parameter, the network type of the scaling group is Virtual Private Cloud (VPC).
   * 
   * > If you do not specify the `VSwitchId` or `VSwitchIds` parameter, the network type of the scaling group defaults to classic network.
   * 
   * @example
   * vsw-bp14zolna43z266bq****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The IDs of one or more vSwitches. If you specify this parameter, the `VSwitchId` parameter is ignored. If you specify this parameter, the network type of the scaling group is Virtual Private Cloud (VPC).
   * 
   * If you specify multiple vSwitches:
   * 
   * - They must belong to the same VPC.
   * 
   * - They can be in different availability zones.
   * 
   * - The vSwitches are prioritized based on their order in the list, with the first vSwitch having the highest priority. If an instance cannot be created in the availability zone of a higher-priority vSwitch, Auto Scaling automatically attempts to create the instance in the availability zone of the next-highest-priority vSwitch.
   * 
   * > If you do not specify the `VSwitchId` or `VSwitchIds` parameter, the network type of the scaling group defaults to classic network.
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

