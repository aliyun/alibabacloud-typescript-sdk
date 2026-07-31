// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoOpsTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The time when the approval of the O&M task was completed. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1669965908
   */
  allowedOverTime?: number;
  /**
   * @remarks
   * The remarks of the O&M task.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The name of the O&M task.
   * 
   * @example
   * taskname
   */
  name?: string;
  /**
   * @remarks
   * The execution plan of the O&M task.
   * - **ExecAt**: If the value of ScheduleType is Manual, this parameter is not meaningful. If the value of ScheduleType is FixTime, this parameter indicates the scheduled execution time in seconds as a UNIX timestamp. If the value of ScheduleType is CycleInterval, this parameter indicates the first execution time in seconds as a UNIX timestamp.
   * 
   * - **PeriodNum**: If the value of ScheduleType is Manual or FixTime, this parameter is not meaningful. If the value of ScheduleType is CycleInterval, this parameter indicates the interval for periodic execution.
   * 
   * - **PeriodUnit**: If the value of ScheduleType is Manual or FixTime, this parameter is not meaningful. If the value of ScheduleType is CycleInterval, this parameter indicates the unit of the periodic execution interval. Valid values: hour and day.
   * 
   * @example
   * {"ExecAt":0,"PeriodNum":0,"PeriodUnit":""}
   */
  scheduleTimeInfo?: string;
  /**
   * @remarks
   * The scheduling type of the task.
   * - **FixTime**: scheduled execution.
   * - **CycleInterval**: periodic execution.
   * - **Manual**: manual execution triggered by the user.
   * 
   * @example
   * FixTime
   */
  scheduleType?: string;
  /**
   * @remarks
   * The content of the script to be executed by the O&M task. The value is Base64-encoded.
   * 
   * @example
   * bHM=
   */
  script?: string;
  /**
   * @remarks
   * The ID of the script associated with the O&M task. This parameter is returned only when ScriptType is set to SpecificScript.
   * 
   * @example
   * 2
   */
  scriptId?: number;
  /**
   * @remarks
   * The name of the script associated with the O&M task.
   * 
   * @example
   * name
   */
  scriptName?: string;
  /**
   * @remarks
   * The script type of the O&M task.
   * 
   * - **HandInput**: manually entered script.
   * 
   * - **SpecificScript**: associated existing script.
   * 
   * @example
   * HandInput
   */
  scriptType?: string;
  /**
   * @remarks
   * The ID of the O&M task.
   * 
   * @example
   * 1
   */
  taskId?: string;
  /**
   * @remarks
   * The status of the O&M task.
   * 
   * - **PendingApproval**: pending approval.
   * - **Rejected**: rejected.
   * - **Cancelled**: cancelled.
   * - **PendingExecution**: approved and waiting for execution.
   * - **PrepareRun**: preparing to execute.
   * - **Running**: executing.
   * - **Completed**: execution completed.
   * - **Failed**: execution failed.
   * 
   * @example
   * PendingApproval
   */
  taskState?: string;
  static names(): { [key: string]: string } {
    return {
      allowedOverTime: 'AllowedOverTime',
      comment: 'Comment',
      name: 'Name',
      scheduleTimeInfo: 'ScheduleTimeInfo',
      scheduleType: 'ScheduleType',
      script: 'Script',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptType: 'ScriptType',
      taskId: 'TaskId',
      taskState: 'TaskState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedOverTime: 'number',
      comment: 'string',
      name: 'string',
      scheduleTimeInfo: 'string',
      scheduleType: 'string',
      script: 'string',
      scriptId: 'number',
      scriptName: 'string',
      scriptType: 'string',
      taskId: 'string',
      taskState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoOpsTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 81500666-d7f5-4143-8329-0223cc738105
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the O&M task.
   */
  task?: GetAutoOpsTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetAutoOpsTaskResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

