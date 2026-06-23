// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurgeTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The refresh object.
   * 
   * @example
   * http://a.com/1.jpg?b=1
   */
  content?: string;
  /**
   * @remarks
   * The creation time, in ISO 8601 format (for example, 2024-01-01T00:00:00+Z).
   * 
   * @example
   * 2023-07-26T01:56:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error description returned when the refresh task fails.
   * 
   * @example
   * Internal Error
   */
  description?: string;
  /**
   * @remarks
   * The task completion progress in percentage.
   * 
   * @example
   * 100%
   */
  process?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **Complete**: The task is complete.
   * 
   * - **Refreshing**: The task is in progress.
   * 
   * - **Failed**: The task failed.
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
   * The refresh task type. Valid values:
   * - **file** (default): file refresh.
   * - **cachetag**: cache tag refresh.
   * - **directory**: directory refresh.
   * - **ignoreParams**: parameter-stripped refresh.
   * - **hostname**: hostname refresh.
   * - **purgeall**: refresh all cached content of the site.
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
   * The task list.
   */
  tasks?: DescribePurgeTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of entries.
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

