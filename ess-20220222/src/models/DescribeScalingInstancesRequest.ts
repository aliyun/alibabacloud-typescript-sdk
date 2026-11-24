// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The creation type of the instances in the scaling group. Valid values: 
   * 
   * - AutoCreated: The ECS instance is created by Auto Scaling through automatic creation based on the instance configuration source. 
   * - Attached: The ECS instance is not created by Auto Scaling, but is manually added to the scaling group.
   * - Managed: The managed instance is not created by Auto Scaling, but is manually added to the scaling group.
   * 
   * @example
   * AutoCreated
   */
  creationType?: string;
  /**
   * @remarks
   * The creation types of the instances in the scaling group. You can specify only one of the CreationTypes and CreationType parameters at a time.
   */
  creationTypes?: string[];
  /**
   * @remarks
   * The health status of the ECS instances in the scaling group. ECS instances that are not in the Running state are considered unhealthy. Valid values: 
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
   * The IDs of the ECS instances.
   * 
   * Invalid InstanceIds are ignored in the returned query results, and no error is reported.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The lifecycle state of the ECS instances in the scaling group. Valid values:
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
   * The lifecycle statuses of the ECS instances in the scaling group. You can specify only one of the LifecycleStates and LifecycleState parameters at a time. We recommend that you use this parameter.
   */
  lifecycleStates?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the ECS instance list. Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paging query. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region to which the scaling group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the scaling activity.
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
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      creationType: 'CreationType',
      creationTypes: 'CreationTypes',
      healthStatus: 'HealthStatus',
      instanceIds: 'InstanceIds',
      lifecycleState: 'LifecycleState',
      lifecycleStates: 'LifecycleStates',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingActivityId: 'ScalingActivityId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationType: 'string',
      creationTypes: { 'type': 'array', 'itemType': 'string' },
      healthStatus: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleState: 'string',
      lifecycleStates: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingActivityId: 'string',
      scalingConfigurationId: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.creationTypes)) {
      $dara.Model.validateArray(this.creationTypes);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.lifecycleStates)) {
      $dara.Model.validateArray(this.lifecycleStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

