// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchTasksResponseBodyTaskList extends $dara.Model {
  /**
   * @remarks
   * The batch ID.
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
   * The number of successfully completed subtasks in the batch.
   * 
   * @example
   * 4
   */
  successCount?: number;
  /**
   * @remarks
   * The task start time.
   * 
   * @example
   * 2026-04-06 20:51:44
   */
  taskBegin?: string;
  /**
   * @remarks
   * The task end time.
   * 
   * @example
   * 2026-04-06 22:43:26
   */
  taskEnd?: string;
  /**
   * @remarks
   * The task name.
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
   * The total number of subtasks in the batch.
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
   * The page number of the returned results.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
   */
  requestId?: string;
  /**
   * @remarks
   * The task list.
   */
  taskList?: DescribeBatchTasksResponseBodyTaskList[];
  /**
   * @remarks
   * The total number of tasks that match the query, ignoring pagination.
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

