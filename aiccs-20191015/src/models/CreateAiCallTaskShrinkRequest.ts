// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiCallTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the agent that is already online.
   * 
   * @example
   * 1180**************
   */
  agentId?: string;
  /**
   * @remarks
   * The application code. This parameter is used when the creation source is engine.
   * 
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
   * The expiration date of outbound call details (specific deadline).
   * 
   * @example
   * 2026-07-30 20:00:20
   */
  callExpireDate?: string;
  /**
   * @remarks
   * The expiration duration of outbound call details. Unit: minutes.
   * 
   * @example
   * 10
   */
  callExpireMinutes?: number;
  /**
   * @remarks
   * The outbound call validity type. Valid values:
   * 
   * 0: permanently valid.
   * 1: valid for a specified duration after import.
   * 2: valid until a specified date.
   * 
   * @example
   * 0
   */
  callExpireType?: number;
  /**
   * @remarks
   * The retry interval. Unit: minutes. The maximum value is 720 minutes.
   * 
   * @example
   * 32
   */
  callRetryInterval?: number;
  /**
   * @remarks
   * The list of failure retry reasons.
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
  callableTimeShrink?: string;
  /**
   * @remarks
   * The line encoding.
   * 
   * @example
   * JILIANG_***_***_NET
   */
  lineEncoding?: string;
  /**
   * @remarks
   * The customer-provided line number.
   * 
   * @example
   * 152****3120
   */
  linePhoneNum?: string;
  /**
   * @remarks
   * Specifies whether to enable retry. Valid values:
   * 
   * - true: enabled.
   * 
   * - false (default): disabled.
   * 
   * @example
   * false
   */
  missCallRetry?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The number type. This parameter is used when the creation source is engine. Valid values:
   * 
   * - 0: Alibaba Cloud number.
   * 
   * - 1: customer-provided line.
   * 
   * @example
   * 0
   */
  phoneType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The creation source. Valid values:
   * 
   * - 0: created by agent.
   * 
   * - 1: created by engine.
   * 
   * @example
   * 0
   */
  source?: number;
  /**
   * @remarks
   * The start mode. Valid values:
   * 
   * - IMMEDIATE: starts immediately.
   * 
   * - SCHEDULE: starts at a scheduled time.
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
   * The task name. The name must be unique within the same account.
   * 
   * This parameter is required.
   * 
   * @example
   * TestTask
   */
  taskName?: string;
  /**
   * @remarks
   * The preset start time of the task. The value is a UNIX timestamp in milliseconds. This parameter is valid and required when the StartType parameter is set to SCHEDULE. The task automatically starts at the time specified by this parameter.
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
      callExpireDate: 'CallExpireDate',
      callExpireMinutes: 'CallExpireMinutes',
      callExpireType: 'CallExpireType',
      callRetryInterval: 'CallRetryInterval',
      callRetryReasonShrink: 'CallRetryReason',
      callRetryTimes: 'CallRetryTimes',
      callTimeShrink: 'CallTime',
      callableTimeShrink: 'CallableTime',
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
      callExpireDate: 'string',
      callExpireMinutes: 'number',
      callExpireType: 'number',
      callRetryInterval: 'number',
      callRetryReasonShrink: 'string',
      callRetryTimes: 'number',
      callTimeShrink: 'string',
      callableTimeShrink: 'string',
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

