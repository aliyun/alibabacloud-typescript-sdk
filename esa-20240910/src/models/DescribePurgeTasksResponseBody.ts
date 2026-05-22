// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurgeTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The purged content.
   * 
   * @example
   * http://a.com/1.jpg?b=1
   */
  content?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2023-07-26T01:56:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error description returned when the purge task failed.
   * 
   * @example
   * Internal Error
   */
  description?: string;
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
   * The task status.
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
   * The task ID.
   * 
   * @example
   * 16346513304
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the purge task. Valid values:
   * 
   * *   **file** (default): purges the cache by file.
   * *   **cachetag**: purges the cache by cache tag.
   * *   **directory**: purges the cache by directory.
   * *   **ignoreParams**: purges the cache by URL with specified parameters ignored.
   * *   **hostname**: purges the cache by hostname.
   * *   **purgeall**: purges all cache.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      process: 'Process',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      description: 'string',
      process: 'string',
      status: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePurgeTasksResponseBody extends $dara.Model {
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
   */
  requestId?: string;
  /**
   * @remarks
   * The tasks.
   */
  tasks?: DescribePurgeTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
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
      tasks: { 'type': 'array', 'itemType': DescribePurgeTasksResponseBodyTasks },
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

