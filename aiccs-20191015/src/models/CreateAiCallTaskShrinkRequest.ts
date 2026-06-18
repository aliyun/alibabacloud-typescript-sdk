// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiCallTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a published agent.
   * 
   * @example
   * 1180**************
   */
  agentId?: string;
  /**
   * @example
   * 025****C98
   */
  applicationCode?: string;
  /**
   * @remarks
   * The list of callable days.
   * 
   * This parameter is required.
   */
  callDayShrink?: string;
  /**
   * @remarks
   * The retry interval, in minutes. The maximum value is 720.
   * 
   * @example
   * 32
   */
  callRetryInterval?: number;
  /**
   * @remarks
   * The failure reasons that trigger a retry.
   */
  callRetryReasonShrink?: string;
  /**
   * @remarks
   * The number of retries. The maximum value is 3.
   * 
   * @example
   * 2
   */
  callRetryTimes?: number;
  /**
   * @remarks
   * The list of callable time periods.
   * 
   * This parameter is required.
   */
  callTimeShrink?: string;
  /**
   * @example
   * JILIANG_***_***_NET
   */
  lineEncoding?: string;
  /**
   * @example
   * 152****3120
   */
  linePhoneNum?: string;
  /**
   * @remarks
   * Specifies whether to enable retry. Valid values:
   * 
   * - `true`: Enables retry.
   * 
   * - `false` (default): Disables retry.
   * 
   * @example
   * false
   */
  missCallRetry?: boolean;
  ownerId?: number;
  /**
   * @example
   * 0
   */
  phoneType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 0
   */
  source?: number;
  /**
   * @remarks
   * The startup mode. Valid values:
   * 
   * - `IMMEDIATE`: Starts the task immediately.
   * 
   * - `SCHEDULE`: Starts the task at a scheduled time.
   * 
   * This parameter is required.
   * 
   * @example
   * SCHEDULE
   */
  startType?: string;
  /**
   * @remarks
   * The task concurrency. The maximum value is 500.
   * 
   * @example
   * 75
   */
  taskCps?: number;
  /**
   * @remarks
   * The name of the task. It must be unique within an account.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试任务
   */
  taskName?: string;
  /**
   * @remarks
   * The scheduled start time for the task, specified as a timestamp in milliseconds. This parameter is required and applies only when `StartType` is set to `SCHEDULE`.
   * 
   * @example
   * 12313123133
   */
  taskStartTime?: number;
  /**
   * @remarks
   * The service instance used for outbound calls.
   * 
   * @example
   * 032712122*****
   */
  virtualNumber?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationCode: 'ApplicationCode',
      callDayShrink: 'CallDay',
      callRetryInterval: 'CallRetryInterval',
      callRetryReasonShrink: 'CallRetryReason',
      callRetryTimes: 'CallRetryTimes',
      callTimeShrink: 'CallTime',
      lineEncoding: 'LineEncoding',
      linePhoneNum: 'LinePhoneNum',
      missCallRetry: 'MissCallRetry',
      ownerId: 'OwnerId',
      phoneType: 'PhoneType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      source: 'Source',
      startType: 'StartType',
      taskCps: 'TaskCps',
      taskName: 'TaskName',
      taskStartTime: 'TaskStartTime',
      virtualNumber: 'VirtualNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationCode: 'string',
      callDayShrink: 'string',
      callRetryInterval: 'number',
      callRetryReasonShrink: 'string',
      callRetryTimes: 'number',
      callTimeShrink: 'string',
      lineEncoding: 'string',
      linePhoneNum: 'string',
      missCallRetry: 'boolean',
      ownerId: 'number',
      phoneType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      source: 'number',
      startType: 'string',
      taskCps: 'number',
      taskName: 'string',
      taskStartTime: 'number',
      virtualNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

