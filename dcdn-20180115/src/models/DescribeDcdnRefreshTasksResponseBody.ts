// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnRefreshTasksResponseBodyTasksTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC.
   * 
   * @example
   * 2014-11-27T08:23:22Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The type of error returned when the refresh or prefetch task has failed.
   * 
   * *   **InternalError**: An internal error occurred.
   * *   **OriginTimeout**: The response from the origin server timed out.
   * *   **OriginReturn StatusCode 5XX**: The origin server returned a 5XX error.
   * 
   * @example
   * InternalError
   */
  description?: string;
  /**
   * @remarks
   * The URL of the object refreshed.
   * 
   * @example
   * http://example.com/examplefile.txt
   */
  objectPath?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * *   **file**: URL-based refresh
   * *   **path**: directory-based refresh
   * *   **preload**: URL-based prefetch
   * 
   * @example
   * file
   */
  objectType?: string;
  /**
   * @remarks
   * The progress of the task in percentage.
   * 
   * @example
   * 10
   */
  process?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * *   **Complete**: The task is complete.
   * *   **Refreshing**: The task is in progress.
   * *   **Failed**: The task failed.
   * 
   * @example
   * Complete
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      process: 'Process',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      objectPath: 'string',
      objectType: 'string',
      process: 'string',
      status: 'string',
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

export class DescribeDcdnRefreshTasksResponseBodyTasks extends $dara.Model {
  task?: DescribeDcdnRefreshTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDcdnRefreshTasksResponseBodyTasksTask },
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

export class DescribeDcdnRefreshTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 174F6032-AA26-470D-B90E-36F0EB205BEE
   */
  requestId?: string;
  /**
   * @remarks
   * Details about tasks.
   */
  tasks?: DescribeDcdnRefreshTasksResponseBodyTasks;
  /**
   * @remarks
   * The number of tasks.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: DescribeDcdnRefreshTasksResponseBodyTasks,
      totalCount: 'number',
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

