// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableAddColumnResponseBodyTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The detailed execution status of the current subtask:
   * - If the execution succeeds, "success" is returned.
   * - If the execution fails, the corresponding error details are returned.
   * 
   * @example
   * success
   */
  content?: string;
  /**
   * @remarks
   * The ID of the subtask to be executed next. If this field is empty, all subtasks have been completed.
   * 
   * @example
   * abc1
   */
  nextTaskId?: string;
  /**
   * @remarks
   * The status of the current subtask. Valid values:
   * - operating: The subtask is being executed.
   * - success: The subtask is executed.
   * - failure: The subtask failed to be executed. For detailed error information, see the Content parameter.
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
   * abc2
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

export class UpdateTableAddColumnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * abc
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the request task.
   * 
   * After the request task is submitted, it is divided into multiple subtasks that are executed in sequence. The next subtask is executed only after the current subtask succeeds. The request task ends when all subtasks are completed. The request task terminates in the following situations. You must resolve the issue based on the error code and resubmit the request task:
   * - The request task fails to be submitted.
   * - After the request task is submitted, any subtask fails.
   */
  taskInfo?: UpdateTableAddColumnResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: UpdateTableAddColumnResponseBodyTaskInfo,
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

