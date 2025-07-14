// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyTaskSetTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2020-11-24T12:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The time when the task ended.
   * 
   * @example
   * 2020-11-24T12:50Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * m-bp1i8huqm5u7****
   */
  resourceId?: string;
  /**
   * @remarks
   * Indicates whether the task can be canceled.
   * 
   * @example
   * true
   */
  supportCancel?: string;
  /**
   * @remarks
   * The name of the operation that generates the task.
   * 
   * @example
   * ImportImage
   */
  taskAction?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-bp1hvgwromzv32iq****
   */
  taskId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Finished
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      finishedTime: 'FinishedTime',
      resourceId: 'ResourceId',
      supportCancel: 'SupportCancel',
      taskAction: 'TaskAction',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      finishedTime: 'string',
      resourceId: 'string',
      supportCancel: 'string',
      taskAction: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyTaskSet extends $dara.Model {
  task?: DescribeTasksResponseBodyTaskSetTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeTasksResponseBodyTaskSetTask },
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the tasks.
   */
  taskSet?: DescribeTasksResponseBodyTaskSet;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      taskSet: 'TaskSet',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      taskSet: DescribeTasksResponseBodyTaskSet,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.taskSet && typeof (this.taskSet as any).validate === 'function') {
      (this.taskSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

