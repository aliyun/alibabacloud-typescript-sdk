// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetConnectionTicketResponseBodyBindQueueInfo extends $dara.Model {
  queueStatus?: string;
  rank?: number;
  readyTimeout?: number;
  remainingTime?: number;
  requestKey?: string;
  targetId?: string;
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
  resolutionAdaptive?: string;
  resolutionHeight?: number;
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
   * @example
   * aig-53fvrq1oanz6cxzi3
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-gc1gemx6vpa6vlync
   */
  appInstanceId?: string;
  appInstancePersistentId?: string;
  /**
   * @example
   * abc
   */
  avatarId?: string;
  bindQueueInfo?: GetConnectionTicketResponseBodyBindQueueInfo;
  /**
   * @example
   * InternalError.TicketGenInternalError
   */
  code?: string;
  /**
   * @example
   * v15418e331d8d068c29411646996786785303b8f61fd880aeaa50c5b584443cd9e65cc7eec72acdaad0a844666a3b26dab
   */
  loginToken?: string;
  /**
   * @example
   * reenter app instance failed
   */
  message?: string;
  /**
   * @example
   * 500
   * 
   * **if can be null:**
   * true
   */
  nextPollIntervalMs?: number;
  /**
   * @example
   * Windows
   */
  osType?: string;
  policy?: GetConnectionTicketResponseBodyPolicy;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AD2D0761-1FE5-549D-B169-D3F8D19C6CDD
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  retryTimes?: number;
  /**
   * @example
   * f3d1b31c-605e-4d04-a896-015fc9fc03b4
   */
  taskId?: string;
  /**
   * @example
   * Running
   */
  taskStatus?: string;
  tenantId?: number;
  /**
   * @example
   * n7n9bqZlPrvgUOPSJzfdb$89jWwlVISgrchpY0tOfVYGBBcdoPoH39PVHK63fQTEM14kzajQdWAnHTnSicc35W_eI2LbTSGKquKukwcU7opRwmInhtQH*mlmsZQ3ByOLYVmqI*1hFESs0
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

