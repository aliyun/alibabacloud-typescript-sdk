// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLifecycleHookRequest extends $dara.Model {
  /**
   * @remarks
   * The action to be performed after the wait state ends. Valid values: 
   * 
   * - CONTINUE: Continues the response to the scale-out or scale-in activity.
   * - ABANDON: Releases the ECS instances created by the scale-out activity or removes the ECS instances in the scale-in activity from the scaling group. 
   * - ROLLBACK: Rejects the release of ECS instances and rolls back the scale-in activity. For a scale-out activity, this value directly releases the created ECS instances, which has the same effect as ABANDON.
   * 
   * When a scale-in activity occurs in the scaling group and multiple lifecycle hooks are triggered, if the DefaultResult of one lifecycle hook is set to ABANDON or ROLLBACK and the wait state of the hook ends, the wait states of other lifecycle hooks are ended in advance. In other cases, the action to be performed is subject to the action of the last lifecycle hook whose wait state ends.
   * 
   * Default value: CONTINUE.
   * 
   * @example
   * CONTINUE
   */
  defaultResult?: string;
  /**
   * @remarks
   * The wait time configured by the lifecycle hook for the scaling activity. After the wait state times out, the next action is performed. Valid values: 30 to 21600. Unit: seconds.
   * 
   * After you create a lifecycle hook, you can call RecordLifecycleActionHeartbeat to extend the wait time of the ECS instance, or call CompleteLifecycleAction to end the wait state of the scaling activity in advance. 
   * 
   * Default value: 600.
   * 
   * @example
   * 600
   */
  heartbeatTimeout?: number;
  /**
   * @remarks
   * The specific scenarios triggered by the lifecycle hook.
   */
  lifecycleActionSources?: string[];
  /**
   * @remarks
   * The name of the lifecycle hook. The name must be unique among all lifecycle hooks in the current scaling group. It must be 2 to 64 characters in length, start with a digit, an uppercase or lowercase letter, or a Chinese character, and can contain digits, underscores (_), hyphens (-), and periods (.).
   * 
   * Default value: the value of LifecycleHookId.
   * 
   * @example
   * lifecyclehook****
   */
  lifecycleHookName?: string;
  /**
   * @remarks
   * The type of scaling activity to which the lifecycle hook applies. Valid values: 
   *          
   * - SCALE_OUT: scale-out activity of the scaling group. 
   * - SCALE_IN: scale-in activity of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * SCALE_OUT
   */
  lifecycleTransition?: string;
  /**
   * @remarks
   * The identifier of the notification recipient for the lifecycle hook. If you do not specify this parameter, no notifications are sent. If you specify this parameter, the following notification methods are supported:
   * - MNS queue. Format: acs:mns:{region-id}:{account-id}:queue/{queuename}.
   * - MNS topic. Format: acs:mns:{region-id}:{account-id}:topic/{topicname}.
   * - OOS template. Format: acs:oos:{region-id}:{account-id}:template/{templatename}.
   * - EventBridge. Format: acs:eventbridge:{region-id}:{account-id}:eventbus/default.
   * 
   * The variables in the formats have the following meanings:
   * - region-id: the ID of the region where the scaling group resides.
   * - account-id: the Alibaba Cloud account ID. The ID of a Resource Access Management (RAM) user is not supported.
   * - queuename: the name of the MNS queue.
   * - topicname: the name of the MNS topic.
   * - templatename: the name of the OOS template.
   * 
   * @example
   * acs:mns:cn-beijing:161456884340****:queue/modifyLifecycleHo****
   */
  notificationArn?: string;
  /**
   * @remarks
   * The notification message pushed to the NotificationArn (notification recipient) when the lifecycle hook pauses the scaling activity. This parameter helps you manage and mark different types of notification messages. You must specify NotificationArn together with this parameter. The value can be up to 4,096 characters in length.
   * 
   * If NotificationArn is set to an OOS template, including a public or custom template, NotificationMetadata must be specified as a JSON string that matches the parameters of the OOS template. For example, `{"dbInstanceId": "dds-bp17661e0135****", "modifyMode": "Append"}`, where `dbInstanceId` and `modifyMode` are parameters defined in the OOS template. Some parameters of the OOS template have default values. You must specify parameters without default values in NotificationMetadata. If you specify parameters with default values, the original default values are overwritten. However, keep the default values for the following parameters to obtain relevant information at runtime:
   * 
   * - `regionId`: the region where the scaling activity is executed. Default value: ${regionId}.
   * 
   * - `instanceIds`: the list of instances associated with the scaling activity. Default value: ${instanceIds}.
   * 
   * - `lifecycleHookId`: the ID of the lifecycle hook. Default value: ${lifecycleHookId}.
   * 
   * - `lifecycleActionToken`: the wait state identifier for the scaling activity, which is used to end the current suspended activity in advance. Default value: ${lifecycleActionToken}.
   * 
   * - `scalingGroupId`: the ID of the scaling group to which the scaling activity belongs. Default value: ${scalingGroupId}.
   * 
   * - `lifecycleActionResult`: the action to be performed after the wait state of the lifecycle hook ends. This parameter is used to end the current suspended activity in advance when the OOS template execution fails. When DefaultResult is set to ROLLBACK, the default value of this parameter is ROLLBACK. In other cases, the default value is ABANDON.
   * 
   * >- You can configure the value of lifecycleActionResult to overwrite the current default value as needed. Valid values: ABANDON, CONTINUE, ROLLBACK, and ${lifecycleActionResult}.
   * Among these values, ${lifecycleActionResult} indicates that the value of lifecycleActionResult is the same as that of DefaultResult.
   * - You can obtain detailed information about the parameters of the corresponding template in the [OOS console](https://oos.console.aliyun.com/).
   * 
   * @example
   * Test lifecycle hook.
   */
  notificationMetadata?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1eyv4qn8ssgv43****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResult: 'DefaultResult',
      heartbeatTimeout: 'HeartbeatTimeout',
      lifecycleActionSources: 'LifecycleActionSources',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleTransition: 'LifecycleTransition',
      notificationArn: 'NotificationArn',
      notificationMetadata: 'NotificationMetadata',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResult: 'string',
      heartbeatTimeout: 'number',
      lifecycleActionSources: { 'type': 'array', 'itemType': 'string' },
      lifecycleHookName: 'string',
      lifecycleTransition: 'string',
      notificationArn: 'string',
      notificationMetadata: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

