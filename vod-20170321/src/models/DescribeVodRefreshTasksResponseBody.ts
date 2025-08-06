// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodRefreshTasksResponseBodyTasksTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2014-11-27T08:23:22Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The type of error returned when the refresh or prefetch task failed. Valid values: Valid values:
   * 
   * *   **Internal Error**: An internal error occurred.
   * *   **Origin Timeout**: The response from the origin server timed out.
   * *   **Origin Return StatusCode 5XX**: The origin server returned an HTTP status code 5xx.
   * 
   * @example
   * Internal Error
   */
  description?: string;
  /**
   * @remarks
   * The URL of the object refreshed.
   * 
   * @example
   * http://example.com/****.txt
   */
  objectPath?: string;
  /**
   * @remarks
   * The type of the task. Default value: file. Valid values:
   * 
   * *   **file**: refreshes one or more files.
   * *   **directory**: refreshes files in the specified directory.
   * *   **preload**: prefetches one or more files.
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
   * 100%
   */
  process?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **Complete**: The task is complete.
   * *   **Refreshing**: The task is in progress.
   * *   **Failed**: The task failed.
   * *   **Pending**: The task is pending.
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
   * 704225667
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

export class DescribeVodRefreshTasksResponseBodyTasks extends $dara.Model {
  task?: DescribeVodRefreshTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeVodRefreshTasksResponseBodyTasksTask },
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

export class DescribeVodRefreshTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 174F6032-AA26-470D-****-36F0EB205BEE
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the returned tasks.
   */
  tasks?: DescribeVodRefreshTasksResponseBodyTasks;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
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
      tasks: DescribeVodRefreshTasksResponseBodyTasks,
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

