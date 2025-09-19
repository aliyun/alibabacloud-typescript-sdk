// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLastOnceTaskInfoResponseBodyTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The progress of the task in percentage.
   * 
   * @example
   * 69
   */
  progress?: number;
  /**
   * @remarks
   * The result of the scan task. Valid values:
   * 
   * *   **SUCCESS**: The task is successful.
   * *   **TASK_NOT_SUPPORT_REGION**: The images are deployed in a region that is not supported by container image scan.
   * *   **TASK_NOT_EXISTS**: The task does not exist.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **INIT**: The task is not started.
   * *   **START**: The task is started.
   * *   **SUCCESS**: The task is complete.
   * *   **TIMEOUT**: The task timed out.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      result: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLastOnceTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time at which the task was run.
   * 
   * @example
   * 1671184531000
   */
  collectTime?: number;
  /**
   * @remarks
   * The number of tasks that have been completed.
   * 
   * @example
   * 67
   */
  finishCount?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578AB****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the latest scan task.
   * 
   * @example
   * 3f65e1f1bb13118891a889d569a3****
   */
  taskId?: number;
  /**
   * @remarks
   * The information about the latest task.
   */
  taskInfo?: GetLastOnceTaskInfoResponseBodyTaskInfo;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 44
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      collectTime: 'CollectTime',
      finishCount: 'FinishCount',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskInfo: 'TaskInfo',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectTime: 'number',
      finishCount: 'number',
      requestId: 'string',
      taskId: 'number',
      taskInfo: GetLastOnceTaskInfoResponseBodyTaskInfo,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

