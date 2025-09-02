// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTableResponseBodyTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The content of the task.
   * 
   * @example
   * success
   */
  content?: string;
  /**
   * @remarks
   * The ID of the task that is running.
   * 
   * @example
   * abc1
   */
  nextTaskId?: string;
  /**
   * @remarks
   * The status of the task that is complete.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task that is complete.
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

export class DeleteTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * abcde
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the task that is used to delete the table.
   */
  taskInfo?: DeleteTableResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: DeleteTableResponseBodyTaskInfo,
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

