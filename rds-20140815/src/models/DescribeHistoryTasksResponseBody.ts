// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * A set of allowed actions that can be taken on the task. The system matches the current step name and status of the task to the available actions specified by ActionInfo. If no matching action is found, the current status of the task does not support any action. Example:
   * 
   *       "steps": [
   *         {
   *           "step_name": "exec_task", // The name of the step, which matches CurrentStepName.      "action_info": {    // The actions supported for this step.        "Waiting": [      // The status, which matches Status.          "modifySwitchTime" // The action. Multiple actions are supported.        ]
   *           }
   *         },
   *         {
   *           "step_name": "init_task", // The name of the step.      "action_info": {    // The actions supported for this step.        "Running": [      // The status.          "cancel",       // The action.          "pause"
   *             ]
   *           }
   *         }
   *       ]
   *     }
   * 
   * The system may support the following actions:
   * 
   * *   **retry**: retries the action.
   * *   **cancel**: cancels the action.
   * *   **modifySwitchTime**: changes the switching time or restoration time.
   * 
   * @example
   * {\\"steps\\":[{\\"action_info\\":{\\"Waiting\\":[\\"modifySwitchTime\\"]},\\"step_name\\":\\"exec_task\\"}]}
   */
  actionInfo?: string;
  /**
   * @remarks
   * The ID of the user who made the request. If CallerSource is set to User, CallerUid indicates the unique ID (UID) of the user.
   * 
   * @example
   * 141345906006****
   */
  callerSource?: string;
  /**
   * @remarks
   * The source of the request. Valid values:
   * 
   * *   **System**
   * *   **User**
   * 
   * @example
   * User
   */
  callerUid?: string;
  /**
   * @remarks
   * The name of the current step. If this parameter is left empty, the task is not started.
   * 
   * @example
   * exec_task
   */
  currentStepName?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The end time of the task.
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
   * rm-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance category.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * rds
   */
  product?: string;
  /**
   * @remarks
   * Indicates the task progress.
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
   * ****
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
   * The estimated amount of time remaining to complete the task. Unit: seconds.
   * 
   * @example
   * 1000
   */
  remainTime?: number;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2022-02-03T11:31:03Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Scheduled
   * *   Running
   * *   Succeed
   * *   Failed
   * *   Cancelling
   * *   Canceled
   * *   Waiting
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task details.
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
   * The task type.
   * 
   * @example
   * autotest_dispatch_cases
   */
  taskType?: string;
  /**
   * @remarks
   * The ID of the user to which the resources belong.
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
   * The tasks.
   */
  items?: DescribeHistoryTasksResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * 5CD61041-35F7-10F7-BE94-33A48B22****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks that meet these constraints without taking pagination into account.
   * 
   * @example
   * 2
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

