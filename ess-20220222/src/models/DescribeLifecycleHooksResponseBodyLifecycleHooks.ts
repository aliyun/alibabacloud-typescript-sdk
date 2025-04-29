// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecycleHooksResponseBodyLifecycleHooks extends $dara.Model {
  /**
   * @remarks
   * The next action that is performed after the lifecycle hook times out.
   * 
   * @example
   * CONTINUE
   */
  defaultResult?: string;
  /**
   * @remarks
   * The period of time before the lifecycle hook times out. When the lifecycle hook times out, Auto Scaling performs the action that is specified by DefaultResult.
   * 
   * @example
   * 60
   */
  heartbeatTimeout?: number;
  /**
   * @remarks
   * The ID of the lifecycle hook.
   * 
   * @example
   * ash-bp19d1032y9kij96****
   */
  lifecycleHookId?: string;
  /**
   * @remarks
   * The name of the lifecycle hook.
   * 
   * @example
   * lifecyclehook****
   */
  lifecycleHookName?: string;
  /**
   * @remarks
   * The status of the lifecycle hook. Valid values:
   * 
   * *   Active: The lifecycle hook is enabled.
   * *   InActive: The lifecycle hook is disabled.
   * 
   * @example
   * Active
   */
  lifecycleHookStatus?: string;
  /**
   * @remarks
   * The type of the scaling activity to which the lifecycle hook applies.
   * 
   * @example
   * SCALE_OUT
   */
  lifecycleTransition?: string;
  /**
   * @remarks
   * The ARN of the notification recipient when the lifecycle hook takes effect. The value of this parameter must be in one of the following formats:
   * 
   * *   If you do not create a notification rule, specify the value in the `acs:ess:{region-id}:{account-id}:null/null` format.
   * *   If you specify a Simple Message Queue (SMQ, formerly MNS) queue as the notification recipient, specify the value in the `acs:mns:{region-id}:{account-id}:queue/{queuename}` format.
   * *   If you specify an SMQ as the notification recipient, specify the value in the `acs:mns:{region-id}:{account-id}:topic/{topicname}` format.
   * *   If you specify a CloudOps Orchestration Service (OOS) template as the notification recipient, specify the value in the `acs:oos:{region-id}:{account-id}:template/{templatename}` format.
   * *   If you specify an event bus as the notification recipient, specify the value in the `acs:eventbridge:{region-id}:{account-id}:eventbus/default` format.
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
   * acs:ess:cn-beijing:161456884340****:null/null
   */
  notificationArn?: string;
  /**
   * @remarks
   * The fixed string that is included in a notification that Auto Scaling sends when the lifecycle hook takes effect.
   * 
   * @example
   * Test Lifecycle Hook.
   */
  notificationMetadata?: string;
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
      defaultResult: 'DefaultResult',
      heartbeatTimeout: 'HeartbeatTimeout',
      lifecycleHookId: 'LifecycleHookId',
      lifecycleHookName: 'LifecycleHookName',
      lifecycleHookStatus: 'LifecycleHookStatus',
      lifecycleTransition: 'LifecycleTransition',
      notificationArn: 'NotificationArn',
      notificationMetadata: 'NotificationMetadata',
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

