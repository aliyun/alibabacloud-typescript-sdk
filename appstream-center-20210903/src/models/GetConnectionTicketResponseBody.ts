// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetConnectionTicketResponseBodyBindQueueInfo extends $dara.Model {
  /**
   * @remarks
   * The queue task status.
   * 
   * @example
   * Waiting
   */
  queueStatus?: string;
  /**
   * @remarks
   * The ranking information.
   * 
   * @example
   * 1
   */
  rank?: number;
  /**
   * @remarks
   * The timeout period for manual connection after the turn is reached.
   * 
   * @example
   * 120
   */
  readyTimeout?: number;
  /**
   * @remarks
   * The remaining wait time. Unit: seconds.
   * 
   * @example
   * 100
   */
  remainingTime?: number;
  /**
   * @remarks
   * The queue request key.
   * 
   * @example
   * alice******
   */
  requestKey?: string;
  /**
   * @remarks
   * The queue ID.
   * 
   * @example
   * aig-53fvrq1oa******
   */
  targetId?: string;
  /**
   * @remarks
   * The time already waited in the queue. Unit: seconds.
   * 
   * @example
   * 100
   */
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      queueStatus: 'QueueStatus',
      rank: 'Rank',
      readyTimeout: 'ReadyTimeout',
      remainingTime: 'RemainingTime',
      requestKey: 'RequestKey',
      targetId: 'TargetId',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueStatus: 'string',
      rank: 'number',
      readyTimeout: 'number',
      remainingTime: 'number',
      requestKey: 'string',
      targetId: 'string',
      waitTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use adaptive resolution.
   * 
   * > 
   * > - `true`: The session resolution changes with the terminal display area. In this case, `SessionResolutionWidth` and `SessionResolutionHeight` are the maximum values of the resolution change.
   * > - `false`: The session resolution does not change with the terminal display area. In this case, the resolution is fixed to the values of `SessionResolutionWidth` and `SessionResolutionHeight`.
   * 
   * @example
   * true
   */
  resolutionAdaptive?: string;
  /**
   * @remarks
   * The resolution height, in pixels.
   * 
   * @example
   * 1080
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The resolution width, in pixels.
   * 
   * @example
   * 1920
   */
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      resolutionAdaptive: 'ResolutionAdaptive',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resolutionAdaptive: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * @example
   * aig-53fvrq1oa******
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The application instance ID.
   * 
   * @example
   * ai-gc1gemx6vp******
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The persistent session ID.
   * 
   * @example
   * p-0cdr5c9kl******
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * The user avatar ID.
   * 
   * @example
   * abc
   */
  avatarId?: string;
  /**
   * @remarks
   * The queue information.
   * 
   * > This parameter is not available.
   */
  bindQueueInfo?: GetConnectionTicketResponseBodyBindQueueInfo;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalError.TicketGenInternalError
   */
  code?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * v2c4e2ef03d62******
   */
  loginToken?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * reenter app instance failed
   */
  message?: string;
  /**
   * @remarks
   * The next polling interval, in milliseconds. If this parameter is empty, the value is 1000 ms.
   * 
   * @example
   * 500
   * 
   * **if can be null:**
   * true
   */
  nextPollIntervalMs?: number;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The session policy.
   */
  policy?: GetConnectionTicketResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the region to which the delivery group belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AD2D0761-1FE5-549D-B169******
   */
  requestId?: string;
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * 3
   */
  retryTimes?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * f3d1b31c-605e-******
   */
  taskId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Running
   */
  taskStatus?: string;
  /**
   * @remarks
   * The tenant ID, which is the Alibaba Cloud account UID.
   * 
   * @example
   * 1126819517******
   */
  tenantId?: number;
  /**
   * @remarks
   * The connection ticket.
   * 
   * @example
   * n7n9bqZlPrvgUOPY0tOfVYGBBcdoPoH3******
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      avatarId: 'AvatarId',
      bindQueueInfo: 'BindQueueInfo',
      code: 'Code',
      loginToken: 'LoginToken',
      message: 'Message',
      nextPollIntervalMs: 'NextPollIntervalMs',
      osType: 'OsType',
      policy: 'Policy',
      regionId: 'RegionId',
      requestId: 'RequestId',
      retryTimes: 'RetryTimes',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      avatarId: 'string',
      bindQueueInfo: GetConnectionTicketResponseBodyBindQueueInfo,
      code: 'string',
      loginToken: 'string',
      message: 'string',
      nextPollIntervalMs: 'number',
      osType: 'string',
      policy: GetConnectionTicketResponseBodyPolicy,
      regionId: 'string',
      requestId: 'string',
      retryTimes: 'number',
      taskId: 'string',
      taskStatus: 'string',
      tenantId: 'number',
      ticket: 'string',
    };
  }

  validate() {
    if(this.bindQueueInfo && typeof (this.bindQueueInfo as any).validate === 'function') {
      (this.bindQueueInfo as any).validate();
    }
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

