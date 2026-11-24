// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLifecycleHookRequest extends $dara.Model {
  /**
   * @remarks
   * The subsequent action to perform after the wait state ends. Valid values: 
   * 
   * - CONTINUE: Continues the response to the scale-out or scale-down activity.
   * - ABANDON: Releases the ECS instances created during the scale-out activity or removes the ECS instances from the scaling group during the scale-down activity.
   * - ROLLBACK: Rejects the release of ECS instances and rolls back the scale-down activity. For a scale-out activity, releases the created ECS instances, which has the same effect as ABANDON.
   * 
   * If a scale-down activity is triggered and multiple lifecycle hooks are invoked, and the DefaultResult of one lifecycle hook is set to ABANDON or ROLLBACK, the wait states of other lifecycle hooks are ended in advance when the wait state of this hook ends. In other cases, the subsequent action is determined by the last lifecycle hook that ends its wait state.
   * 
   * @example
   * CONTINUE
   */
  defaultResult?: string;
  /**
   * @remarks
   * The wait time set by the lifecycle hook for the scaling activity. The subsequent action is performed after the wait state times out. Valid values: 30 to 21600. Unit: seconds.
   * 
   * You can call the RecordLifecycleActionHeartbeat operation to extend the wait time of the ECS instance, or call the CompleteLifecycleAction operation to end the wait state of the scaling activity in advance.
   * 
   * @example
   * 600
   */
  heartbeatTimeout?: number;
  /**
   * @remarks
   * The specific scenarios that trigger the lifecycle hook.
   */
  lifecycleActionSources?: string[];
  /**
   * @remarks
   * The ID of the lifecycle hook to be modified.
   * 
   * @example
   * ash-bp1fxuqyi98w0aib****
   */
  lifecycleHookId?: string;
  /**
   * @remarks
   * The name of the lifecycle hook to be modified.
   * 
   * @example
   * test_SCAL****
   */
  lifecycleHookName?: string;
  /**
   * @remarks
   * The status of the lifecycle hook. Valid values:
   * - Active: Enables the lifecycle hook.
   * - InActive: Disables the lifecycle hook.
   * 
   * If you do not specify this parameter, the status of the lifecycle hook remains unchanged.
   * > After a lifecycle hook is created, it is enabled by default.
   * 
   * @example
   * Active
   */
  lifecycleHookStatus?: string;
  /**
   * @remarks
   * The type of scaling activity to which the lifecycle hook applies. Valid values:
   * - SCALE_OUT: Scale-out activity of the scaling group.
   * - SCALE_IN: Scale-in activity of the scaling group.
   * 
   * @example
   * SCALE_IN
   */
  lifecycleTransition?: string;
  /**
   * @remarks
   * The identifier of the notification recipient for the lifecycle hook. The following notification methods are supported:
   * - Message Service (MNS) queue. Format: acs:mns:{region-id}:{account-id}:queue/{queuename}.
   * - MNS topic. Format: acs:mns:{region-id}:{account-id}:topic/{topicname}.
   * - Operation Orchestration Service (OOS) template. Format: acs:oos:{region-id}:{account-id}:template/{templatename}.
   * - EventBridge. Format: acs:eventbridge:{region-id}:{account-id}:eventbus/default.
   * 
   * Variables in the formats:
   * - region-id: The ID of the region where the scaling group resides.
   * - account-id: The Alibaba Cloud account ID.
   * - queuename: The name of the MNS queue.
   * - topicname: The name of the MNS topic.
   * - templatename: The name of the OOS template.
   * 
   * @example
   * acs:mns:cn-beijing:161456884340****:queue/modifyLifecycleHo****
   */
  notificationArn?: string;
  /**
   * @remarks
   * The fixed string information for the wait state of the scaling activity. The value can be up to 4,096 characters in length.
   * 
   * When Auto Scaling pushes a message to the notification recipient, it also sends the predefined NotificationMetadata value to help you manage and tag different types of notifications. This parameter takes effect only when the NotificationArn parameter is specified.
   * 
   * @example
   * Test
   */
  notificationMetadata?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group to which the lifecycle hook belongs.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      heartbeatTimeout: 'HeartbeatTimeout',
      lifecycleActionSources: 'LifecycleActionSources',
      lifecycleHookId: 'LifecycleHookId',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleHookStatus: 'LifecycleHookStatus',
      lifecycleTransition: 'LifecycleTransition',
      notificationArn: 'NotificationArn',
      notificationMetadata: 'NotificationMetadata',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      heartbeatTimeout: 'number',
      lifecycleActionSources: { 'type': 'array', 'itemType': 'string' },
      lifecycleHookId: 'string',
      lifecycleHookName: 'string',
      lifecycleHookStatus: 'string',
      lifecycleTransition: 'string',
      notificationArn: 'string',
      notificationMetadata: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lifecycleActionSources)) {
      $dara.Model.validateArray(this.lifecycleActionSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

