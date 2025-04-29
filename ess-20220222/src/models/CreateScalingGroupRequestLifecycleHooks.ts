// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

