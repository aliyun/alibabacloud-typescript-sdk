// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyTasksTask extends $dara.Model {
  beginTime?: string;
  currentStepName?: string;
  DBName?: string;
  expectedFinishTime?: string;
  finishTime?: string;
  progress?: number;
  progressInfo?: string;
  remain?: number;
  stepProgressInfo?: string;
  stepsInfo?: string;
  taskAction?: string;
  taskErrorCode?: string;
  taskErrorMessage?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentStepName: 'CurrentStepName',
      DBName: 'DBName',
      expectedFinishTime: 'ExpectedFinishTime',
      finishTime: 'FinishTime',
      progress: 'Progress',
      progressInfo: 'ProgressInfo',
      remain: 'Remain',
      stepProgressInfo: 'StepProgressInfo',
      stepsInfo: 'StepsInfo',
      taskAction: 'TaskAction',
      taskErrorCode: 'TaskErrorCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      currentStepName: 'string',
      DBName: 'string',
      expectedFinishTime: 'string',
      finishTime: 'string',
      progress: 'number',
      progressInfo: 'string',
      remain: 'number',
      stepProgressInfo: 'string',
      stepsInfo: 'string',
      taskAction: 'string',
      taskErrorCode: 'string',
      taskErrorMessage: 'string',
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

export class DescribeTasksResponseBodyTasks extends $dara.Model {
  task?: DescribeTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeTasksResponseBodyTasksTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster for which the task was created.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2020-12-02T03:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number of the page returned.
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
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4352AD99-9FF5-41A6-A319-068089******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2020-11-30T00:00Z
   */
  startTime?: string;
  tasks?: DescribeTasksResponseBodyTasks;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      startTime: 'StartTime',
      tasks: 'Tasks',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      startTime: 'string',
      tasks: DescribeTasksResponseBodyTasks,
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.tasks && typeof (this.tasks as any).validate === 'function') {
      (this.tasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

