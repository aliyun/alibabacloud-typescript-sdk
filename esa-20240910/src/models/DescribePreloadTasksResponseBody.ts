// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreloadTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The prefetch object.
   * 
   * @example
   * http://a.com/1.jpg?b=2
   */
  content?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-03-28 14:28:57
   */
  createTime?: string;
  /**
   * @remarks
   * The error description returned when the prefetch fails. Valid values:
   * 
   * - **Internal Error**: An internal error occurred.
   * - **Origin Timeout**: The origin server response timed out.
   * - **Origin Return StatusCode 5XX**: The origin server returned a 5xx error code.
   * 
   * @example
   * Internal Error
   */
  description?: string;
  /**
   * @remarks
   * The task completion progress percentage.
   * 
   * @example
   * 100%
   */
  process?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **Complete**: Complete.
   * - **Refreshing**: Prefetching.
   * - **Failed**: Prefetch failed.
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
   * 1597854579687428
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      process: 'Process',
      status: 'Status',
      taskId: 'TaskId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreloadTasksResponseBody extends $dara.Model {
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The task list.
   */
  tasks?: DescribePreloadTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 83
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
      tasks: { 'type': 'array', 'itemType': DescribePreloadTasksResponseBodyTasks },
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

