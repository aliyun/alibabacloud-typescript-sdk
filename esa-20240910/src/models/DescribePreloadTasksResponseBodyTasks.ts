// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreloadTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The prefetched content.
   * 
   * @example
   * http://a.com/1.jpg?b=2
   */
  content?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2023-03-28 14:28:57
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned upon a prefetch task failure. Valid values:
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
   * The ID of the queried task.
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

