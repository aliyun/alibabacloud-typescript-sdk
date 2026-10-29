// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The creation time, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1780387493000
   */
  creationTime?: string;
  /**
   * @remarks
   * The end time of the task, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1780387494000
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the resource pool used by the task.
   * 
   * @example
   * hive-26cd567b35c04a0a90f017388207b2
   */
  hiveId?: string;
  /**
   * @remarks
   * The task error message.
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 6c8234f4-d1e1-4cea-b08b-7926fbdea144
   */
  taskId?: string;
  /**
   * @remarks
   * The task state.
   * 
   * @example
   * RUNNING
   */
  taskState?: string;
  /**
   * @remarks
   * The task state message.
   * 
   * @example
   * 任务执行成功
   */
  taskStateMessage?: string;
  /**
   * @remarks
   * The last modified time, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1780387494000
   */
  updatedTime?: string;
  /**
   * @remarks
   * The ID of the Comfy workflow used by the task.
   * 
   * @example
   * wf_adb32aed-ccdc-42ae-b4d4-a21181ac8a5f
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      endTime: 'EndTime',
      hiveId: 'HiveId',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
      taskState: 'TaskState',
      taskStateMessage: 'TaskStateMessage',
      updatedTime: 'UpdatedTime',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      endTime: 'string',
      hiveId: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskState: 'string',
      taskStateMessage: 'string',
      updatedTime: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComfyTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * > Only for recording queries.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
   */
  tasks?: DescribeComfyTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribeComfyTasksResponseBodyTasks },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

