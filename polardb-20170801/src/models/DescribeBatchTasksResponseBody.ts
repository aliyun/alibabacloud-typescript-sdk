// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchTasksResponseBodyTaskList extends $dara.Model {
  /**
   * @remarks
   * The ID of the batch task.
   * 
   * @example
   * pcb-xxx
   */
  batchId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The number of successful tasks in the batch.
   * 
   * @example
   * 4
   */
  successCount?: number;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2026-04-06 20:51:44
   */
  taskBegin?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2026-04-06 22:43:26
   */
  taskEnd?: string;
  /**
   * @remarks
   * The description of the model service.
   * 
   * @example
   * batch_task_test
   */
  taskName?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * polarclaw_install_skills
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of tasks that meet the specified conditions, regardless of pagination.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      status: 'Status',
      successCount: 'SuccessCount',
      taskBegin: 'TaskBegin',
      taskEnd: 'TaskEnd',
      taskName: 'TaskName',
      taskType: 'TaskType',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      status: 'string',
      successCount: 'number',
      taskBegin: 'string',
      taskEnd: 'string',
      taskName: 'string',
      taskType: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
   */
  requestId?: string;
  /**
   * @remarks
   * The task details.
   */
  taskList?: DescribeBatchTasksResponseBodyTaskList[];
  /**
   * @remarks
   * The total number of tasks that meet the specified conditions, regardless of pagination.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskList: 'TaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeBatchTasksResponseBodyTaskList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

