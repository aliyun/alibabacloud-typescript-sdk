// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiCallTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the agent that has been published.
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
  callDay?: string[];
  /**
   * @remarks
   * The expiration date of outbound call details (specific deadline). Format: YYYY-MM-DD HH:mm:ss.
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
   * 0: Permanently valid.
   * 1: Valid for a specified duration after import.
   * 2: Valid until a specified date.
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
   * The list of retry reasons for failed calls.
   */
  callRetryReason?: string[];
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
  callTime?: string[];
  callableTime?: string[];
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
   * The start type. Valid values:
   * 
   * - IMMEDIATE: Start immediately.
   * 
   * - SCHEDULE: Start at a scheduled time.
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
   * The preset start time of the task. The value is a UNIX timestamp in milliseconds. This parameter is valid and required when StartType is set to SCHEDULE. The task automatically starts at the time specified by this parameter.
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
      callDay: 'CallDay',
      callExpireDate: 'CallExpireDate',
      callExpireMinutes: 'CallExpireMinutes',
      callExpireType: 'CallExpireType',
      callRetryInterval: 'CallRetryInterval',
      callRetryReason: 'CallRetryReason',
      callRetryTimes: 'CallRetryTimes',
      callTime: 'CallTime',
      callableTime: 'CallableTime',
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
      callDay: { 'type': 'array', 'itemType': 'string' },
      callExpireDate: 'string',
      callExpireMinutes: 'number',
      callExpireType: 'number',
      callRetryInterval: 'number',
      callRetryReason: { 'type': 'array', 'itemType': 'string' },
      callRetryTimes: 'number',
      callTime: { 'type': 'array', 'itemType': 'string' },
      callableTime: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.callDay)) {
      $dara.Model.validateArray(this.callDay);
    }
    if(Array.isArray(this.callRetryReason)) {
      $dara.Model.validateArray(this.callRetryReason);
    }
    if(Array.isArray(this.callTime)) {
      $dara.Model.validateArray(this.callTime);
    }
    if(Array.isArray(this.callableTime)) {
      $dara.Model.validateArray(this.callableTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

