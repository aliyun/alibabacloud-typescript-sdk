// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableResponseBodyTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The details about the status of the current subtask.
   * 
   * *   If the current subtask is successful, success is returned.
   * *   If the current subtask fails, the error details are displayed.
   * 
   * @example
   * success
   */
  content?: string;
  /**
   * @remarks
   * The ID of the subtask that you want to run. If this parameter is left empty, all subtasks are complete.
   * 
   * @example
   * abc1
   */
  nextTaskId?: string;
  /**
   * @remarks
   * The status of the current subtask. Valid values:
   * 
   * *   operating: The subtask is running.
   * *   success: The subtask succeeds.
   * *   failure: The subtask fails to run. For more information about the error details, see the Content parameter.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the current subtask.
   * 
   * @example
   * abc
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      nextTaskId: 'NextTaskId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      nextTaskId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * abcdef
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the request task. After a request task is submitted, it is divided into multiple subtasks that are run in sequence. After the current subtask is complete, the next subtask starts to run. After all subtasks are complete, the request task is complete.
   * 
   * If a request task is aborted due to one of the following issues, address the issue based on the error code and initiate the request task again:
   * 
   * *   The request task fails to be submitted.
   * *   After the request task is submitted, a subtask fails to run.
   */
  taskInfo?: CreateTableResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: CreateTableResponseBodyTaskInfo,
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

