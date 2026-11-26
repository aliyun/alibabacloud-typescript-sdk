// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiCallTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the online agent.
   * 
   * @example
   * 1180**************
   */
  agentId?: string;
  /**
   * @remarks
   * The application code. This parameter is used when the creation source is engine creation.
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
   * The expiration date for outbound call details, which is the specific cutoff time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2026-07-30 20:00:20
   */
  callExpireDate?: string;
  /**
   * @remarks
   * The expiration duration for outbound call details. Unit: minutes.
   * 
   * @example
   * 10
   */
  callExpireMinutes?: number;
  /**
   * @remarks
   * The validity period type for outbound calls. Valid values:
   * 
   * - 0: Permanently valid.
   * - 1: Valid for a specified period after import.
   * - 2: Valid until a specified time.
   * 
   * @example
   * 0
   */
  callExpireType?: number;
  /**
   * @remarks
   * The retry interval. Unit: minutes. The maximum value is 720.
   * 
   * @example
   * 32
   */
  callRetryInterval?: number;
  /**
   * @remarks
   * The list of reasons for retrying failed calls.
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
   * @remarks
   * The list of callable time periods. Each element is represented as a JSON string that contains startTime and endTime.
   */
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
   * - true: Yes.
   * 
   * - false (default): No.
   * 
   * @example
   * false
   */
  missCallRetry?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The number type. This parameter is used when the creation source is engine creation. Valid values:
   * 
   * - 0: Alibaba Cloud number.
   * 
   * - 1: Customer-provided line.
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
   * - 0: Created by an agent.
   * 
   * - 1: Created by an engine.
   * 
   * @example
   * 0
   */
  source?: number;
  /**
   * @remarks
   * The start method. Valid values:
   * 
   * - IMMEDIATE: Starts immediately.
   * 
   * - SCHEDULE: Starts at a scheduled time.
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
   * The name of the task. The name must be unique within the same account.
   * 
   * This parameter is required.
   * 
   * @example
   * Test task
   */
  taskName?: string;
  /**
   * @remarks
   * The preset start time of the task. The value is a timestamp in milliseconds. This parameter is valid and required only when the StartType parameter is set to SCHEDULE. The task automatically starts at the time specified by this parameter.
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

