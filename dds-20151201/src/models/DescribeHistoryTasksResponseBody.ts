// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * A set of allowed actions that can be taken on the task. The system matches the current step name and status of the task to the available actions specified by ActionInfo. If no matching action is found, the current status of the task does not support any action. Example:
   * 
   *        "steps": [
   *         {
   *           "step_name": "exec_task", // The name of the step, which matches the value of CurrentStepName.
   *           "action_info": {    // The actions supported for this step.
   *             "Waiting": [      // The status, which matches the value of Status.
   *               "modifySwitchTime" // The action. Multiple actions are supported.
   *             ]
   *           }
   *         },
   *         {
   *           "step_name": "init_task", // The name of the step.
   *           "action_info": {    // The actions supported for this step.
   *             "Running": [      // The status.
   *               "cancel",       // The action.
   *               "pause"
   *             ]
   *           }
   *         }
   *       ]
   *     }
   * 
   * The system may support the following actions:
   * 
   * *   retry: makes another attempt.
   * *   cancel: makes a cancellation.
   * *   modifySwitchTime: changes the switching or restoration time.
   * 
   * @example
   * `{\\"steps\\":[{\\"action_info\\":{\\"Waiting\\":[\\"modifySwitchTime\\"]},\\"step_name\\":\\"exec_task\\"}]}`
   */
  actionInfo?: string;
  /**
   * @remarks
   * The request source. Valid values: System and User.
   * 
   * @example
   * System
   */
  callerSource?: string;
  /**
   * @remarks
   * The ID of the user who made the request. If CallerSource is set to User, CallerUid indicates the unique ID (UID) of the user.
   * 
   * @example
   * 141345906006****
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
   * The database type. The value is fixed to mongodb.
   * 
   * @example
   * mongodb
   */
  dbType?: string;
  /**
   * @remarks
   * The end time of the performed O\\&M task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-16T02:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID
   * 
   * @example
   * dds-t4n18194768fxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test-dds
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type of the instance. The value is fixed to Instance.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @remarks
   * The product. The value is fixed to dds.
   * 
   * @example
   * dds
   */
  product?: string;
  /**
   * @remarks
   * The current progress of the task. The valid values range from 0 to 100.
   * 
   * @example
   * 100.0
   */
  progress?: number;
  /**
   * @remarks
   * The reason why the current task was initiated.
   * 
   * @example
   * test
   */
  reasonCode?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The estimated remaining execution time. Unit: seconds. The value 0 indicates that the task is completed.
   * 
   * @example
   * 1000
   */
  remainTime?: number;
  /**
   * @remarks
   * The start time of the performed O\\&M task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-11T02:33Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Scheduled: The task is waiting to be executed.
   * *   Running: The task is running.
   * *   Succeed: The task is successful.
   * *   Failed: The task failed.
   * *   Cancelling: The task is being terminated.
   * *   Canceled: The task has been terminated.
   * *   Waiting: The task is waiting for scheduled time.
   * 
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @remarks
   * The details of the task. The task details vary based on the value of the taskType parameter.
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
   * t-0mq1yyhm3ffl2bxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * *   CreateIns: Create an instance.
   * *   DeleteIns: Delete an instance.
   * *   ChangeVariable: Modify parameter settings for an instance.
   * *   ModifyInsConfig: Change the configurations of an instance.
   * *   RestartIns: Restart an instance.
   * *   HaSwitch: Perform a primary/secondary switchover on an instance.
   * *   CloneIns: Clone an instance.
   * *   KernelVersionUpgrade: Update the minor version of an instance.
   * *   ProxyVersionUpgrade: Upgrade the agent version of an instance.
   * *   ModifyAccount: Change the account of an instance.
   * *   ModifyInsSpec: Change the specifications of an instance or perform a data migration on the instance.
   * *   CreateReadIns: Create a read-only instance.
   * *   StartIns: Start an instance.
   * *   StopIns: Stop an instance.
   * *   ModifyNetwork: Modify the network type for an instance.
   * *   LockIns: Lock an instance.
   * *   UnlockIns: Unlock an instance.
   * *   DiskOnlineExpansion: Scale out the disks of an instance online.
   * *   StorageOnlineExpansion: Expend the storage capacity of an instance online.
   * *   AddInsNode: Add a node to an instance.
   * *   DeleteInsNode: Delete a node from an instance.
   * *   ManualBackupIns: Manually back up an instance.
   * *   ModifyInsStorageType: Modify the storage type for an instance.
   * 
   * @example
   * CreateIns
   */
  taskType?: string;
  /**
   * @remarks
   * The ID of the user to which the resource belongs.
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
   * The task objects.
   */
  items?: DescribeHistoryTasksResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page.
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
   * 3C4A2494-XXXX-XXXX-93CF-548DB3375193
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks that meet these conditions without taking pagination into account.
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

