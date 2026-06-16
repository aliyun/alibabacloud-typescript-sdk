// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingInstancesResponseBodyScalingInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the ECS instance was added to the scaling group. The value is accurate to the second.
   * 
   * @example
   * 2020-05-18T03:11:39Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The time when the ECS instance was added to the scaling group. The value is accurate to the minute.
   * 
   * @example
   * 2020-05-18T03:11Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The method used to create the ECS instance. Valid values: 
   * 
   * - AutoCreated: The ECS instance is created by automatic creation based on the instance configuration source in Auto Scaling. 
   * - Attached: The ECS instance is not created by Auto Scaling but manually added to the scaling group.
   * 
   * @example
   * AutoCreated
   */
  creationType?: string;
  /**
   * @remarks
   * Indicates whether the manually added instance is managed by the scaling group. A managed manually added instance is released when it is removed from the scaling group (excluding manual removal). Valid values:
   * - true: The instance is managed by the scaling group.
   * - false: The instance is not managed by the scaling group.
   * 
   * @example
   * true
   */
  entrusted?: boolean;
  /**
   * @remarks
   * The health check status of the ECS instance in the scaling group. ECS instances that are not in the Running state are considered unhealthy. Valid values: 
   * 
   * - Healthy: The ECS instance is healthy. 
   * - Unhealthy: The ECS instance is unhealthy. 
   * 
   * Auto Scaling automatically removes unhealthy ECS instances from the scaling group and releases the ECS instances created by automatic creation.
   * 
   * Whether a manually added ECS instance is released depends on its managed state. If the instance lifecycle is not managed by the scaling group, the instance is only removed but not released. If the instance lifecycle is managed by the scaling group, the instance is removed and released.
   * 
   * > Make sure that your account has a sufficient available quota. If your account has an overdue payment, all pay-as-you-go ECS instances (including pay-as-you-go instances and spot instances) are stopped or even released. For information about how the status of ECS instances in a scaling group changes after an overdue payment occurs, see [Overdue payments](https://help.aliyun.com/document_detail/170589.html).
   * 
   * @example
   * Healthy
   */
  healthStatus?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp109k5j3dum1ce6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the launch template.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The version of the launch template.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The lifecycle state of the ECS instance in the scaling group. Valid values:
   *  
   * - InService: The ECS instance is added to the scaling group and provides services in the Normal state. 
   * - Pending: The ECS instance is being added to the scaling group. During this procedure, the ECS instance is added to the backend server group of the associated load balancing instance and to the access whitelist of the associated ApsaraDB RDS instance.
   * - Pending:Wait: The ECS instance is waiting to be added to the scaling group. If a lifecycle hook that applies to scale-out activities is created for the scaling group, the ECS instance is suspended and waits for the lifecycle hook timeout to end.
   * - Protected: The ECS instance is protected. The ECS instance provides services as expected, but Auto Scaling does not manage the lifecycle of the ECS instance. You must manually manage the lifecycle.
   * - Standby: The ECS instance is in the standby state. The ECS instance does not provide services, the weight of SLB backend server is set to zero, and Auto Scaling does not manage the lifecycle of the ECS instance. You must manually manage the lifecycle.
   * - Stopped: The ECS instance is stopped and does not provide services.
   * - Removing: The ECS instance is being removed from the scaling group. During this procedure, the ECS instance is removed from the backend server group of the associated load balancing instance and from the access whitelist of the associated ApsaraDB RDS instance. 
   * - Removing:Wait: The ECS instance is waiting to be removed from the scaling group. If a lifecycle hook that applies to scale-down activities is created for the scaling group, the ECS instance is suspended and waits for the lifecycle hook timeout to end.
   * 
   * @example
   * InService
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The weight of the load balancing instance.
   * > This parameter is deprecated and is not recommended.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The private IP address of the instance in the scaling group.
   * 
   * @example
   * 1**.2*.1**.2**
   */
  privateIpAddress?: string;
  replaceStatus?: string;
  /**
   * @remarks
   * The ID of the scaling activity during which the ECS instance was added to the scaling group.
   * 
   * @example
   * asa-bp1c9djwrgxjyk31****
   */
  scalingActivityId?: string;
  /**
   * @remarks
   * The ID of the associated scaling configuration.
   * 
   * @example
   * asc-bp1i65jd06v04vdh****
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The ID of the scaling group to which the instance belongs.
   * 
   * @example
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The instance identity in the scaling group, which has a one-to-one mapping with the ECS instance ID or Elastic Container Instance (ECI) instance identity.
   * 
   * @example
   * asi-j6cj1gcte640ekhb****
   */
  scalingInstanceId?: string;
  /**
   * @remarks
   * The preemption policy of the spot instance. Valid values:
   * 
   * - SpotWithPriceLimit: The spot instance has a maximum price limit.
   * - SpotAsPriceGo: The system automatically bids at the current market price.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The warmup state of the ECS instance. Valid values: 
   *          
   * - NoNeedWarmup: No warmup is required.
   * - WaitingForInstanceWarmup: The instance is waiting for warmup to complete.
   * - InstanceWarmupFinish: Warmup is complete.
   * 
   * @example
   * NoNeedWarmup
   */
  warmupState?: string;
  /**
   * @remarks
   * The weight of the instance type. The weight indicates the capacity that a single instance of this instance type represents in the scaling group. A higher weight means that fewer instances of this type are required to meet the expected capacity.
   * 
   * @example
   * 4
   */
  weightedCapacity?: number;
  /**
   * @remarks
   * The zone ID of the ECS instance.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      creationTime: 'CreationTime',
      creationType: 'CreationType',
      entrusted: 'Entrusted',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      lifecycleState: 'LifecycleState',
      loadBalancerWeight: 'LoadBalancerWeight',
      privateIpAddress: 'PrivateIpAddress',
      replaceStatus: 'ReplaceStatus',
      scalingActivityId: 'ScalingActivityId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
      scalingInstanceId: 'ScalingInstanceId',
      spotStrategy: 'SpotStrategy',
      warmupState: 'WarmupState',
      weightedCapacity: 'WeightedCapacity',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      creationTime: 'string',
      creationType: 'string',
      entrusted: 'boolean',
      healthStatus: 'string',
      instanceId: 'string',
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      lifecycleState: 'string',
      loadBalancerWeight: 'number',
      privateIpAddress: 'string',
      replaceStatus: 'string',
      scalingActivityId: 'string',
      scalingConfigurationId: 'string',
      scalingGroupId: 'string',
      scalingInstanceId: 'string',
      spotStrategy: 'string',
      warmupState: 'string',
      weightedCapacity: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
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
   * B13527BF-1FBD-4334-A512-20F5E9D3****
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of ECS instance information.
   */
  scalingInstances?: DescribeScalingInstancesResponseBodyScalingInstances[];
  /**
   * @remarks
   * The total number of ECS instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of running spot instances in the current scaling group.
   * 
   * @example
   * 4
   */
  totalSpotCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingInstances: 'ScalingInstances',
      totalCount: 'TotalCount',
      totalSpotCount: 'TotalSpotCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingInstances: { 'type': 'array', 'itemType': DescribeScalingInstancesResponseBodyScalingInstances },
      totalCount: 'number',
      totalSpotCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scalingInstances)) {
      $dara.Model.validateArray(this.scalingInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

