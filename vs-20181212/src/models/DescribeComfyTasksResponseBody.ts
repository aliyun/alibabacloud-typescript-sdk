// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1780387493000
   */
  creationTime?: string;
  /**
   * @remarks
   * The task end time.
   * 
   * @example
   * 1780387494000
   */
  endTime?: string;
  /**
   * @remarks
   * The resource pool ID used by the task.
   * 
   * @example
   * hive-26cd567b35c04a0a90f017388207b2
   */
  hiveId?: string;
  /**
   * @remarks
   * The task status.
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
   * The task status.
   * 
   * @example
   * RUNNING
   */
  taskState?: string;
  /**
   * @remarks
   * The task status.
   */
  taskStateMessage?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 1780387494000
   */
  updatedTime?: string;
  /**
   * @remarks
   * The Comfy workflow ID used by the task.
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
   * The description.
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
   * > Only applicable to recording queries.
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
   * The task list.
   */
  tasks?: DescribeComfyTasksResponseBodyTasks[];
  /**
   * @remarks
   * The number of tasks.
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

