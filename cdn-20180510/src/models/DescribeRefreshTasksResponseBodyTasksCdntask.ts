// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefreshTasksResponseBodyTasksCDNTask extends $dara.Model {
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
   * The type of the error returned when the refresh or prefetch task failed. Valid values:
   * 
   * *   **InternalError**: An internal error occurred.
   * *   **OriginTimeout**: The response from the origin server timed out.
   * *   **OriginReturnStatusCode 5XX**: The origin server returned a 5XX error.
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
   * http://example.com/1.txt
   */
  objectPath?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * *   **file**: refreshes one or more files.
   * *   **directory**: refreshes files in the specified directories.
   * *   **regex**: refreshes content based on a regular expression.
   * *   **preload**: prefetches one or more files.
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
   * *   **Complete**: The task has completed.
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

