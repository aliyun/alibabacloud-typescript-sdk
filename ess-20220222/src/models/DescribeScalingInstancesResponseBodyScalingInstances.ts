// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingInstancesResponseBodyScalingInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the ECS instances were added to the scaling group. The value is accurate to the second.
   * 
   * @example
   * 2020-05-18T03:11:39Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The time when the ECS instances were added to the scaling group. The value is accurate to the minute.
   * 
   * @example
   * 2020-05-18T03:11Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance creation method. Valid values:
   * 
   * *   AutoCreated: The ECS instances are created by Auto Scaling based on the instance configuration source.
   * *   Attached: The ECS instances are manually added to the scaling group.
   * 
   * @example
   * AutoCreated
   */
  creationType?: string;
  /**
   * @remarks
   * Indicates whether the scaling group is allowed to manage the instance lifecycles when ECS instances are manually added. If the scaling group is allowed to manage the instance lifecycles, Auto Scaling can release the ECS instances when the instances are automatically removed from the scaling group. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  entrusted?: boolean;
  /**
   * @remarks
   * The health status of the ECS instance in the scaling group. If an ECS instance is not in the Running state, the instance is considered unhealthy. Valid values:
   * 
   * *   Healthy
   * *   Unhealthy
   * 
   * Auto Scaling automatically removes unhealthy ECS instances from the scaling group and then releases the automatically created instances among the unhealthy instances.
   * 
   * Unhealthy ECS instances that are manually added to the scaling group are released based on the management mode of the lifecycles of the instances. If the lifecycles of the ECS instances are not managed by the scaling group, Auto Scaling removes the instances from the scaling group but does not release the instances. If the lifecycles of the ECS instances are managed by the scaling group, Auto Scaling removes the instances from the scaling group and releases the instances.
   * 
   * >  Make sure that you have sufficient balance within your Alibaba Cloud account. If your Alibaba Cloud account has an overdue payment, all pay-as-you-go ECS instances, including preemptible instances, may be stopped or even released. For information about how the status of ECS instances changes when you have an overdue payment in your Alibaba Cloud account, see [Overdue payments](https://help.aliyun.com/document_detail/170589.html).
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
   * The version number of the launch template.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The lifecycle status of the ECS instance in the scaling group. Valid values:
   * 
   * *   InService: The ECS instance is added to the scaling group and provides services as expected.
   * *   Pending: The ECS instance is being added to the scaling group. When an ECS instance is being added to the scaling group, Auto Scaling also adds the instance to the backend server groups of the attached load balancers and adds the private IP address of the instance to the IP address whitelists of the attached ApsaraDB RDS instances.
   * *   Pending:Wait: The ECS instance is waiting to be added to the scaling group. If a scale-out lifecycle hook is in effect, the ECS instance remains in the Pending:Wait state until the timeout period for the lifecycle hook expires.
   * *   Protected: The ECS instance is protected. Protected ECS instances can continue to provide services as expected, but Auto Scaling does not manage the lifecycles of the ECS instances. You must manually manage the lifecycles of the ECS instances.
   * *   Standby: The ECS instance is on standby. Standby ECS instances do not provide services as expected, and the weights of the ECS instances as backend servers are reset to zero. Auto Scaling does not manage the lifecycles of the ECS instances. Therefore, you must manually manage the lifecycles of the ECS instances.
   * *   Stopped: The ECS instance is stopped. Stopped ECS instances no longer provide services.
   * *   Removing: The ECS instance is being removed from the scaling group. When an ECS instance is being removed from the scaling group, Auto Scaling also removes the instance from the backend server groups of the attached load balancers and removes the private IP address of the instance from the IP address whitelists of the attached ApsaraDB RDS instances.
   * *   Removing:Wait: The ECS instance is waiting to be removed from the scaling group. If a scale-in lifecycle hook is in effect, the ECS instance remains in the Removing:Wait state until the timeout period for the lifecycle hook expires.
   * 
   * @example
   * InService
   */
  lifecycleState?: string;
  /**
   * @remarks
   * The weight of each ECS instance as a backend server.
   * 
   * >  This parameter is deprecated and is not recommended.
   * 
   * @example
   * 50
   */
  loadBalancerWeight?: number;
  /**
   * @remarks
   * The private IP address of the ECS instance.
   * 
   * @example
   * 1**.2*.1**.2**
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The ID of the scaling activity during which the ECS instances were added to the scaling group.
   * 
   * @example
   * asa-bp1c9djwrgxjyk31****
   */
  scalingActivityId?: string;
  /**
   * @remarks
   * The ID of the scaling configuration.
   * 
   * @example
   * asc-bp1i65jd06v04vdh****
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The ID of the ECS instance or elastic container instance.
   * 
   * @example
   * asi-j6cj1gcte640ekhb****
   */
  scalingInstanceId?: string;
  /**
   * @remarks
   * The bidding policy for the preemptible instances. Valid values:
   * 
   * *   SpotWithPriceLimit: The instances are preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instances are preemptible instances for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The warm-up status of the ECS instances. Valid values:
   * 
   * *   NoNeedWarmup: The ECS instances do not need to undergo a warm-up process.
   * *   WaitingForInstanceWarmup: The ECS instances are undergoing the warm-up process.
   * *   InstanceWarmupFinish: The warm-up process for the ECS instances is complete.
   * 
   * @example
   * NoNeedWarmup
   */
  warmupState?: string;
  /**
   * @remarks
   * The weight of the instance type. The weight indicates the capacity of a single instance of the specified instance type in the scaling group. A higher weight indicates that a smaller number of instances of the instance type are required to meet the expected capacity requirement.
   * 
   * @example
   * 4
   */
  weightedCapacity?: number;
  /**
   * @remarks
   * The zone ID of the ECS instances.
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

