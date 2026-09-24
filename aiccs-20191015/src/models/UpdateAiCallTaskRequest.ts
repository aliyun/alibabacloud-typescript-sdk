// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiCallTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The callable days.
   * 
   * This parameter is required.
   */
  callDay?: string[];
  /**
   * @remarks
   * The expiration date of outbound call details (the specific deadline). Format: YYYY-MM-DD HH:mm:ss.
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
   * 1: Valid for a specified period after import.
   * 2: Valid until a specified date.
   * 
   * @example
   * 0
   */
  callExpireType?: number;
  /**
   * @remarks
   * The retry interval. Unit: minutes. The maximum value is 120.
   * 
   * @example
   * 25
   */
  callRetryInterval?: number;
  /**
   * @remarks
   * The reasons for retrying failed calls.
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
   * The callable time periods.
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
   * 0: Created by agent.
   * 
   * 1: Created by engine.
   * 
   * @example
   * Cannot be modified. You do not need to specify this parameter
   */
  source?: number;
  /**
   * @remarks
   * The start mode. Valid values:
   * 
   * - IMMEDIATE: Starts immediately.
   * 
   * - SCHEDULE: Starts at a scheduled time.
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
   * The preset start time of the task. The value is a UNIX timestamp in milliseconds. This parameter is valid and required when StartType is set to SCHEDULE. The task automatically starts at the time specified by this parameter.
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
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStartTime: 'TaskStartTime',
      virtualNumber: 'VirtualNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      taskId: 'string',
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

