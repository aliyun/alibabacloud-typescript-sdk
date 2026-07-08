// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The creation time of the task.
   * 
   * @example
   * 1780387493000
   */
  creationTime?: string;
  /**
   * @remarks
   * The end time of the task.
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
   * The last modified time of the task.
   * 
   * @example
   * 1780387494000
   */
  updatedTime?: string;
  /**
   * @remarks
   * The ID of the Comfy workflow associated with the task.
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
      taskId: 'TaskId',
      taskState: 'TaskState',
      updatedTime: 'UpdatedTime',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      endTime: 'string',
      hiveId: 'string',
      taskId: 'string',
      taskState: 'string',
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
   * The error code. A value of 0 indicates a successful request.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The message that provides details about the result of the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned data. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tasks per page.
   * 
   * > This parameter applies only to recording queries.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * A list of Comfy tasks.
   */
  tasks?: DescribeComfyTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of tasks that match the filter criteria.
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

