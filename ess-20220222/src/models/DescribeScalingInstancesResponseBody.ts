// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingInstancesResponseBodyScalingInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the ECS instance was added to the scaling group. The time is accurate to seconds and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-18T03:11:39Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The time when the ECS instance was added to the scaling group. The time is accurate to minutes and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-18T03:11Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The creation type of the ECS instance. Valid values: 
   * 
   * - AutoCreated: The ECS instance is created by Auto Scaling through automatic creation based on the instance configuration source. 
   * - Attached: The ECS instance is not created by Auto Scaling, but is manually added to the scaling group.
   * 
   * @example
   * AutoCreated
   */
  creationType?: string;
  /**
   * @remarks
   * Specifies whether the instance is managed by the scaling group when it is manually added to the scaling group. A manually added instance in the managed state is released when it is removed from the scaling group, excluding manual removal. Valid values:
   * - true: The instance is managed by the scaling group.
   * - false: The instance is not managed by the scaling group.
   * 
   * @example
   * true
   */
  entrusted?: boolean;
  /**
   * @remarks
   * The health status of the ECS instance in the scaling group. ECS instances that are not in the Running state are considered unhealthy. Valid values: 
   * 
   * - Healthy: The ECS instance is healthy. 
   * - Unhealthy: The ECS instance is unhealthy. 
   * 
   * Auto Scaling automatically removes unhealthy ECS instances from the scaling group and releases ECS instances created through automatic creation.
   * 
   * Whether to release manually added ECS instances depends on their managed state. If the instance lifecycle is not managed by the scaling group, the instance is only removed but not released. If the instance lifecycle is managed by the scaling group, the instance is removed and released.
   * 
   * > Make sure that your account has sufficient active balance. If your account has overdue payments, all pay-as-you-go ECS instances, including pay-as-you-go instances and spot instances, are stopped or even released. For more information about the instance status changes of ECS instances in a scaling group after overdue payments, see [Overdue payments](https://help.aliyun.com/document_detail/170589.html).
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
   * The ID of the instance launch template.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The version of the instance launch template.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The lifecycle state of the ECS instance in the scaling group. Valid values:
   *  
   * - InService: The ECS instance is added to the scaling group and provides services normally. 
   * - Pending: The ECS instance is being added to the scaling group. The procedure of adding an ECS instance to a scaling group includes adding the instance to the backend server group of a load balancing instance and adding the IP address of the instance to the access whitelist of an ApsaraDB RDS instance.
   * - Pending:Wait: The addition of the ECS instance to the scaling group is suspended. If a lifecycle hook applicable to scale-out activities is created in the scaling group, the ECS instance is suspended when it is added to the scaling group and waits for the hook timeout to end.
   * - Protected: The ECS instance provides services normally, but Auto Scaling does not manage the lifecycle of the ECS instance. You must manually manage the lifecycle.
   * - Standby: The ECS instance does not provide services, the weight of SLB backend server is set to zero, and Auto Scaling does not manage the lifecycle of the ECS instance. You must manually manage the lifecycle.
   * - Stopped: The ECS instance is stopped and does not provide services.
   * - Removing: The ECS instance is being removed from the scaling group. The procedure of removing an ECS instance from a scaling group includes removing the instance from the backend server group of a load balancing instance and removing the IP address of the instance from the access whitelist of an ApsaraDB RDS instance. 
   * - Removing:Wait: The removal of the ECS instance from the scaling group is suspended. If a lifecycle hook applicable to scale-down activities is created in the scaling group, the ECS instance is suspended when it is removed from the scaling group and waits for the hook timeout to end.
   * 
   * @example
   * InService
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The weight of the SLB backend server.
   * > **[Deprecated]** This parameter is deprecated. Do not use it.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The internal IP address of the instance in the scaling group.
   * 
   * @example
   * 1**.2*.1**.2**
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The instance replacement process that the instance is in. Valid values:
   * - Normal: The instance is not in any replacement process.
   * - ReBalance: The instance is in the rebalancing replacement process of the scaling group.
   * - SpotRemedy: The instance is in the spot instance remedy replacement process.
   * - MaxInstanceLifetimeExpire: The instance is in the replacement process due to the expiration of the maximum instance lifetime.
   * - InstanceRefresh: The instance is in the instance refresh replacement process.
   * - SpotReplaceOnDemand: The instance is in the process of replacing a spot instance with a pay-as-you-go instance.
   * 
   * @example
   * ReBalance
   */
  replaceStatus?: string;
  /**
   * @remarks
   * The ID of the scaling activity when the ECS instance was added to the scaling group.
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
   * The instance identity in the scaling group, which corresponds one-to-one with the ID of the ECS instance or elastic container instance.
   * 
   * @example
   * asi-j6cj1gcte640ekhb****
   */
  scalingInstanceId?: string;
  /**
   * @remarks
   * The bidding policy for the spot instance. Valid values:
   * 
   * - SpotWithPriceLimit: The spot instance with a maximum price.
   * - SpotAsPriceGo: The system automatically bids based on the current market price.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The warmup status of the ECS instance. Valid values: 
   *          
   * - NoNeedWarmup: No warmup is required.
   * - WaitingForInstanceWarmup: The instance is waiting for the warmup to complete.
   * - InstanceWarmupFinish: The warmup is complete.
   * 
   * @example
   * NoNeedWarmup
   */
  warmupState?: string;
  /**
   * @remarks
   * The weight of the instance type, which indicates the capacity of a single instance of the instance type in the scaling group. A greater weight indicates that fewer instances of the instance type are required to meet the expected capacity.
   * 
   * @example
   * 4
   */
  weightedCapacity?: number;
  /**
   * @remarks
   * The ID of the zone to which the ECS instance belongs.
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
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
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
   * The total number of running spot instances in the scaling group.
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

