// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiCallTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The available call days.
   * 
   * This parameter is required.
   */
  callDayShrink?: string;
  /**
   * @remarks
   * The expiration date of outbound call details (the specific deadline).
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
   * The retry interval. Unit: minutes. The maximum value is 120 minutes.
   * 
   * @example
   * 25
   */
  callRetryInterval?: number;
  /**
   * @remarks
   * The reasons for retry upon failure.
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
   * The available call time periods.
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
   * - true: Enabled.
   * 
   * - false (default): Disabled.
   * 
   * @example
   * true
   */
  missCallRetry?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The number type. This parameter is used when the creation source is engine-based.
   * 
   * 0: Alibaba Cloud number.
   * 
   * 1: Customer-provided line.
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
   * 0: created by agent.
   * 
   * 1: created by engine.
   * 
   * @example
   * Cannot be modified. Leave this parameter empty
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
   * IMMEDIATE
   */
  startType?: string;
  /**
   * @remarks
   * The task concurrency. The maximum value is 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 57
   */
  taskCps?: number;
  /**
   * @remarks
   * The ID of the task to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 1187**************
   */
  taskId?: string;
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
   * 1748923429000
   */
  taskStartTime?: number;
  /**
   * @remarks
   * The service instance used for outbound calls.
   * 
   * @example
   * 0537022*****
   */
  virtualNumber?: string;
  static names(): { [key: string]: string } {
    return {
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
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStartTime: 'TaskStartTime',
      virtualNumber: 'VirtualNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      taskId: 'string',
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

