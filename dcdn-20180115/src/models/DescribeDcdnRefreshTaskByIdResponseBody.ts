// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnRefreshTaskByIdResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO8601 standard in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-10T08:54:23Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error returned when the refresh or prefetch task failed. Valid values:
   * 
   * *   **Internal Error**: An internal error occurred.
   * *   **Origin Timeout**: The response from the origin server timed out.
   * *   **Origin Return StatusCode 5XX**: The origin server returned a 5XX error.
   * 
   * @example
   * Internal Error
   */
  description?: string;
  /**
   * @remarks
   * The path of the refresh or prefetch object.
   * 
   * @example
   * http://example.com/image_01.png
   */
  objectPath?: string;
  /**
   * @remarks
   * The type of the refresh or prefetch task. Valid values:
   * 
   * *   **file**: refreshes an individual file.
   * *   **directory**: refreshes files under the specified directory.
   * *   **preload**: prefetches an individual file.
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
   * The task status. Valid values:
   * 
   * *   **Complete**: The task is complete.
   * *   **Pending**: The task is pending.
   * *   **Refreshing**: The task is running.
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
   * 113681**
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

export class DescribeDcdnRefreshTaskByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0C2EF95-B1EC-4C93-855E-2059A7DA2B7B
   */
  requestId?: string;
  /**
   * @remarks
   * A list of prefetch or refresh tasks.
   */
  tasks?: DescribeDcdnRefreshTaskByIdResponseBodyTasks[];
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
      tasks: { 'type': 'array', 'itemType': DescribeDcdnRefreshTaskByIdResponseBodyTasks },
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

