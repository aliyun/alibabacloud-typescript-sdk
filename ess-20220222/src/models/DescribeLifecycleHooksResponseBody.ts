// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecycleHooksResponseBodyLifecycleHooks extends $dara.Model {
  /**
   * @remarks
   * The action to perform after the wait state of the instance ends.
   * 
   * @example
   * CONTINUE
   */
  defaultResult?: string;
  /**
   * @remarks
   * The wait time configured in the lifecycle hook for the scaling activity. The next action is performed after the wait time expires.
   * 
   * @example
   * 60
   */
  heartbeatTimeout?: number;
  /**
   * @remarks
   * The specific scenarios in which the lifecycle hook is triggered.
   */
  lifecycleActionSources?: string[];
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
   * - Active: The lifecycle hook is active.
   * - InActive: The lifecycle hook is inactive.
   * 
   * @example
   * Active
   */
  lifecycleHookStatus?: string;
  /**
   * @remarks
   * The scaling activity type associated with the lifecycle hook.
   * 
   * @example
   * SCALE_OUT
   */
  lifecycleTransition?: string;
  /**
   * @remarks
   * The identifier of the notification recipient for the lifecycle hook. The parameter format is as follows:
   * - Notifications not configured: `acs:ess:{region-id}:{account-id}:null/null`.
   * - MNS queue: `acs:mns:{region-id}:{account-id}:queue/{queuename}`.
   * - MNS topic: `acs:mns:{region-id}:{account-id}:topic/{topicname}`.
   * - OOS template: `acs:oos:{region-id}:{account-id}:template/{templatename}`.
   * - EventBridge: `acs:eventbridge:{region-id}:{account-id}:eventbus/default`.
   * 
   * The variables in the parameter format have the following meanings:
   * - region-id: The ID of the region where the scaling group resides.
   * - account-id: The Alibaba Cloud account ID.
   * - queuename: The name of the MNS queue.
   * - topicname: The name of the MNS topic.
   * - templatename: The name of the OOS template.
   * 
   * @example
   * acs:ess:cn-beijing:161456884340****:null/null
   */
  notificationArn?: string;
  /**
   * @remarks
   * The fixed string information for the wait state of the scaling activity.
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
      lifecycleActionSources: 'LifecycleActionSources',
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
      lifecycleActionSources: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.lifecycleActionSources)) {
      $dara.Model.validateArray(this.lifecycleActionSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLifecycleHooksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of lifecycle hooks.
   */
  lifecycleHooks?: DescribeLifecycleHooksResponseBodyLifecycleHooks[];
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
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of lifecycle hooks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecycleHooks: 'LifecycleHooks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleHooks: { 'type': 'array', 'itemType': DescribeLifecycleHooksResponseBodyLifecycleHooks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecycleHooks)) {
      $dara.Model.validateArray(this.lifecycleHooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

