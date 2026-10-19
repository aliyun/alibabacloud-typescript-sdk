// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The allowed operation information. When used, the operation Action is matched based on currentStepName and status in this information. If no Action is matched, the task does not support operations in its current state. Example:
   * 
   * ```
   * {"steps": [
   *     {
   *       "step_name": "exec_task", // Step name, matched with currentStepName
   *       "action_info": {    // Operations supported by the step
   *         "Waiting": [      // Status, matched with status
   *           "modifySwitchTime" // Operation Action, may have multiple values, indicating multiple supported operations
   *         ]
   *       }
   *     },
   *     {
   *       "step_name": "init_task", // Step name
   *       "action_info": {    // Operations supported by the step
   *         "Running": [      // Status
   *           "cancel",       // Operation
   *           "pause"
   *         ]
   *       }
   *     }
   *   ]
   * }
   * ```
   * 
   * Operations that the system may support: 
   * * **retry**: Retry.
   * * **cancel**: Cancel.
   * * **modifySwitchTime**: Modify the switchover time or recovery time.
   * 
   * @example
   * {"steps":[{"action_info":{"Waiting":["modifySwitchTime"]},"step_name":"exec_task"}]}
   */
  actionInfo?: string;
  /**
   * @remarks
   * The request user ID. When callerSource is User, this value represents the user UID.
   * 
   * @example
   * 141345906006****
   */
  callerSource?: string;
  /**
   * @remarks
   * The request source. Valid values: 
   * * **System**: Automatically initiated by the system.
   * * **User**: Initiated by a user.
   * 
   * @example
   * User
   */
  callerUid?: string;
  /**
   * @remarks
   * The name of the current step being executed. An empty value indicates that the task has not started.
   * 
   * @example
   * exec_task
   */
  currentStepName?: string;
  /**
   * @remarks
   * The database type. The value is fixed as redis.
   * 
   * @example
   * redis
   */
  dbType?: string;
  /**
   * @remarks
   * The end time of the task in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2022-02-03T12:06:17Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * dba-tair-test-qcloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. The value is fixed as Instance.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @remarks
   * The product. The value is fixed as kvstore.
   * 
   * @example
   * kvstore
   */
  product?: string;
  /**
   * @remarks
   * The current progress. Valid values: 0 to 100.
   * 
   * @example
   * 79.0
   */
  progress?: number;
  /**
   * @remarks
   * The reason why the current task was initiated.
   * 
   * @example
   * 小版本升级
   */
  reasonCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The estimated remaining execution time. Unit: seconds. A value of 0 indicates that the execution is complete.
   * 
   * @example
   * 1000
   */
  remainTime?: number;
  /**
   * @remarks
   * The start time of the task in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2022-02-03T11:31:03Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **Scheduled**: Waiting for execution.
   * - **Running**: Running.
   * - **Succeed**: Succeeded.
   * - **Failed**: Failed.
   * - **Cancelling**: Being stopped.
   * - **Canceled**: Stopped.
   * - **Waiting**: Waiting for the scheduled time.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task details. Different task types correspond to different outputs.
   * 
   * @example
   * {\\"callerUid\\":\\"test\\"}
   */
  taskDetail?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-83br18hloy3faf****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **ModifyInsSpec**: Specification change or migration.
   * - **DeleteInsNode**: Shard deletion.
   * - **AddInsNode**: Shard addition.
   * - **HaSwitch**: Primary/secondary switchover.
   * - **RestartIns**: Instance restart.
   * - **CreateIns**: Instance creation.
   * - **ModifyInsConfig**: Configuration change.
   * 
   * @example
   * ModifyInsSpec
   */
  taskType?: string;
  /**
   * @remarks
   * The user ID of the resource owner.
   * 
   * @example
   * 141345906006****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      actionInfo: 'ActionInfo',
      callerSource: 'CallerSource',
      callerUid: 'CallerUid',
      currentStepName: 'CurrentStepName',
      dbType: 'DbType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      product: 'Product',
      progress: 'Progress',
      reasonCode: 'ReasonCode',
      regionId: 'RegionId',
      remainTime: 'RemainTime',
      startTime: 'StartTime',
      status: 'Status',
      taskDetail: 'TaskDetail',
      taskId: 'TaskId',
      taskType: 'TaskType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionInfo: 'string',
      callerSource: 'string',
      callerUid: 'string',
      currentStepName: 'string',
      dbType: 'string',
      endTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      product: 'string',
      progress: 'number',
      reasonCode: 'string',
      regionId: 'string',
      remainTime: 'number',
      startTime: 'string',
      status: 'string',
      taskDetail: 'string',
      taskId: 'string',
      taskType: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of task objects.
   */
  items?: DescribeHistoryTasksResponseBodyItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D622714-AEDD-4609-9167-F5DDD3D1****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks that meet the query conditions, regardless of pagination.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeHistoryTasksResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

