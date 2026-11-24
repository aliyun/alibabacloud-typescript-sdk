// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSoftwarelibDistributeTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1782268092
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * test_task
   */
  name?: string;
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * test software
   */
  softwareName?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * - **enabled**: Enabled.
   * - **disabled**: Disabled.
   * 
   * After a task is created, its initial status is disabled.
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * The operating system to which the task applies. Valid values:
   * - **Windows**: Windows.
   * - **Mac(Apple)**: macOS on Apple silicon.
   * - **Mac(Intel)**: macOS on Intel processors.
   * 
   * @example
   * Windows
   */
  supportOs?: string;
  /**
   * @remarks
   * The ID of the task. You can use the ID to query the task execution result.
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
   * The ID of the request.
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

