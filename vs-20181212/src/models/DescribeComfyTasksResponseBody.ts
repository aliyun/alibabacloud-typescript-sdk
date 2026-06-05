// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyTasksResponseBodyTasks extends $dara.Model {
  creationTime?: string;
  endTime?: string;
  /**
   * @example
   * hive-26cd567b35c04a0a90f017388207b2
   */
  hiveId?: string;
  /**
   * @example
   * 6c8234f4-d1e1-4cea-b08b-7926fbdea144
   */
  taskId?: string;
  /**
   * @example
   * RUNNING
   */
  taskState?: string;
  updatedTime?: string;
  /**
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
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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
  tasks?: DescribeComfyTasksResponseBodyTasks[];
  /**
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

