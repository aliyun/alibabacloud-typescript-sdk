// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefreshTaskByIdResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-08-03T08:54:23Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error returned when the refresh or prefetch task failed. Valid values:
   * 
   * *   **Internal Error**
   * *   **Origin Timeout**
   * *   **Origin Return StatusCode 5XX**
   * 
   * @example
   * Internal Error
   */
  description?: string;
  /**
   * @remarks
   * The path of the object refreshed by the refresh task.
   * 
   * @example
   * http://example.com/abc.jpg
   */
  objectPath?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **file**: refreshes an individual file.
   * *   **directory**: refreshes files in the specified directory.
   * *   **preload**: prefetches an individual file.
   * *   **regex**: refreshes content based on a regular expression.
   * 
   * @example
   * file
   */
  objectType?: string;
  /**
   * @remarks
   * The progress of the task, in percentage.
   * 
   * @example
   * 100%
   */
  process?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **Complete**
   * *   **Pending**
   * *   **Refreshing**
   * *   **Failed**
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
   * 24840
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

export class DescribeRefreshTaskByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E0C2EF95-B1EC-4C93-855E-2059A7DA2B7B
   */
  requestId?: string;
  /**
   * @remarks
   * Details about tasks.
   */
  tasks?: DescribeRefreshTaskByIdResponseBodyTasks[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribeRefreshTaskByIdResponseBodyTasks },
      totalCount: 'number',
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

