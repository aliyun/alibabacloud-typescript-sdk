// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The method used to create the instance in the scaling group. Valid values: 
   * 
   * - AutoCreated: The ECS instance is created by automatic creation based on the instance configuration source in Auto Scaling. 
   * - Attached: The ECS instance is not created by Auto Scaling but manually added to the scaling group.
   * - Managed: The managed instance is not created by Auto Scaling but manually added to the scaling group.
   * 
   * @example
   * AutoCreated
   */
  creationType?: string;
  /**
   * @remarks
   * The methods used to create instances in the scaling group. You can specify only one of this parameter and CreationType.
   */
  creationTypes?: string[];
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
   * The IDs of the ECS instances.
   * 
   * Invalid InstanceId values are ignored in the query results, and no error is returned.
   */
  instanceIds?: string[];
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
   * The lifecycle states of ECS instances in the scaling group. You can specify only one of this parameter and LifecycleState. We recommend that you use this parameter.
   */
  lifecycleStates?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the ECS instance list. Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Settings: Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
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

