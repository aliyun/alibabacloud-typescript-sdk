// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnceTaskResultInfoResponseBodyTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **INIT**: The task is not started.
   * *   **START**: The task is started.
   * *   **SUCCESS**: The task is complete.
   * *   **TIMEOUT**: The task times out.
   * 
   * @example
   * START
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetOnceTaskResultInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution time of the task.
   * 
   * @example
   * 1671184531000
   */
  collectTime?: number;
  /**
   * @remarks
   * The number of tasks that were completed.
   * 
   * @example
   * 47
   */
  finishCount?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * @example
   * e7b70a4b030db086db52231f1b58****
   */
  taskId?: number;
  /**
   * @remarks
   * The information about the task.
   */
  taskInfo?: GetOnceTaskResultInfoResponseBodyTaskInfo;
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
      taskInfo: GetOnceTaskResultInfoResponseBodyTaskInfo,
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

