// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSoftwarelibDistributeTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The task creation time as a second-level UNIX timestamp.
   * 
   * @example
   * 1782268092
   */
  createTime?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test_task
   */
  name?: string;
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * test software
   */
  softwareName?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **enabled**: enabled.
   * - **disabled**: disabled.
   * 
   * The initial status of a task after creation is disabled.
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * The operating system to which the task applies. Valid values:
   * - **Windows**: Windows.
   * - **Mac(Apple)**: macOS with Apple silicon.
   * - **Mac(Intel)**: macOS with Intel processors.
   * 
   * @example
   * Windows
   */
  supportOs?: string;
  /**
   * @remarks
   * The task ID, which is used to query the task execution result.
   * 
   * @example
   * softwarelib-distribute-task-911dd7898bc2****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      name: 'Name',
      softwareName: 'SoftwareName',
      status: 'Status',
      supportOs: 'SupportOs',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      softwareName: 'string',
      status: 'string',
      supportOs: 'string',
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

export class CreateSoftwarelibDistributeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B608C6AE-623D-55C4-9454-601B88AE937E
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the created task.
   */
  task?: CreateSoftwarelibDistributeTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: CreateSoftwarelibDistributeTaskResponseBodyTask,
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

