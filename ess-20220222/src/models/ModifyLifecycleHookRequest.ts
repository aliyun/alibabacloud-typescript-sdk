// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLifecycleHookRequest extends $dara.Model {
  /**
   * @remarks
   * The action that you want Auto Scaling to perform after the lifecycle hook ends. Valid values:
   * 
   * *   CONTINUE: Auto Scaling continues to respond to scaling requests.
   * *   ABANDON: Auto Scaling releases Elastic Compute Service (ECS) instances that are created during scale-out activities, or removes ECS instances from the scaling group during scale-in activities.
   * 
   * If multiple lifecycle hooks in a scaling group are triggered during scale-in activities and you set the DefaultResult parameter to ABANDON for the lifecycle hook that you want to modify, Auto Scaling immediately performs the action after the lifecycle hook that you want to modify ends. As a result, other lifecycle hooks end ahead of schedule. In other cases, Auto Scaling performs the action only after all lifecycle hooks end.
   * 
   * @example
   * CONTINUE
   */
  defaultResult?: string;
  /**
   * @remarks
   * The period of time before the lifecycle hook ends. Auto Scaling performs the specified action after the lifecycle hook ends. Valid values: 30 to 21600. Unit: seconds.
   * 
   * You can call the RecordLifecycleActionHeartbeat operation to prolong the length of a lifecycle hook. You can also call the CompleteLifecycleAction operation to end a lifecycle hook ahead of schedule.
   * 
   * @example
   * 600
   */
  heartbeatTimeout?: number;
  /**
   * @remarks
   * The ID of the lifecycle hook that you want to modify.
   * 
   * @example
   * ash-bp1fxuqyi98w0aib****
   */
  lifecycleHookId?: string;
  /**
   * @remarks
   * The name of the lifecycle hook that you want to modify.
   * 
   * @example
   * test_SCALE_IN
   */
  lifecycleHookName?: string;
  /**
   * @remarks
   * The status into which you want to put the lifecycle hook. Valid values:
   * 
   * *   Active
   * *   InActive
   * 
   * If you do not specify this parameter, the status of the lifecycle hook remains unchanged after you call this operation.
   * 
   * > By default, a lifecycle hook is in the Active state after you create it.
   * 
   * @example
   * Active
   */
  lifecycleHookStatus?: string;
  /**
   * @remarks
   * The type of scaling activity to which the lifecycle hook applies. Valid values:
   * 
   * *   SCALE_OUT
   * *   SCALE_IN
   * 
   * @example
   * SCALE_IN
   */
  lifecycleTransition?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the notification recipient. Specify the value in one of the following formats:
   * 
   * *   If you specify a Simple Message Queue (SMQ, formerly MNS) as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:queue/{queuename} format.
   * *   If you specify an SMQ topic as the notification recipient, specify the value in the acs:mns:{region-id}:{account-id}:topic/{topicname} format.
   * *   If you specify a CloudOps Orchestration Service (OOS) template as the notification recipient, specify the value in the acs:oos:{region-id}:{account-id}:template/{templatename} format.
   * *   If you specify an event bus as the notification recipient, specify the value in the acs:eventbridge:{region-id}:{account-id}:eventbus/default format.
   * 
   * The variables in the preceding value formats have the following meanings:
   * 
   * *   region-id: the region ID of your scaling group.
   * *   account-id: the ID of your Alibaba Cloud account.
   * *   queuename: the name of the SMQ queue.
   * *   topicname: the name of the SMQ topic.
   * *   templatename: the name of the OOS template.
   * 
   * @example
   * acs:mns:cn-beijing:161456884340****:queue/modifyLifecycleHo****
   */
  notificationArn?: string;
  /**
   * @remarks
   * The fixed string that is included in a notification. Auto Scaling sends the notification when the lifecycle hook takes effect. The value of this parameter cannot exceed 4,096 characters in length.
   * 
   * Auto Scaling sends the value specified for the NotificationMetadata parameter together with the notification. This helps you categorize your notifications. The NotificationMetadata parameter takes effect only after you specify the NotificationArn parameter.
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

