// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUploadTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The creation time in ISO 8601 format (for example, 2024-01-01T00:00:00+Z).
   * 
   * @example
   * 2023-07-26T01:56:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned when the file upload task fails.
   * 
   * @example
   * invalid url
   */
  description?: string;
  /**
   * @remarks
   * The error code. Multiple error codes are separated by commas. Valid values:
   * 
   * - **InvalidUrl**: The URL format is invalid.
   * - **InvalidDomain**: The domain name ownership verification failed.
   * - **QuotaExcess**: The quota limit is exceeded.
   * - **OtherErrors**: Other errors occurred.
   * 
   * @example
   * InvalidUrl,InvalidDomain
   */
  errorCode?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **Complete**: The task is complete.
   * - **Refreshing**: The task is in progress.
   * - **Failed**: The task failed.
   * 
   * @example
   * Complete
   */
  status?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **file**: URL file purge.
   * - **preload**: resource prefetch.
   * - **directory**: directory purge.
   * - **ignoreparams**: purge with parameters ignored.
   * 
   * @example
   * file
   */
  type?: string;
  /**
   * @remarks
   * The ID of the file upload task.
   * 
   * @example
   * 159253299357****
   */
  uploadId?: string;
  /**
   * @remarks
   * The name of the file upload task.
   * 
   * @example
   * purge_file_task
   */
  uploadTaskName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      errorCode: 'ErrorCode',
      status: 'Status',
      type: 'Type',
      uploadId: 'UploadId',
      uploadTaskName: 'UploadTaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      errorCode: 'string',
      status: 'string',
      type: 'string',
      uploadId: 'string',
      uploadTaskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUploadTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6D****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of file upload tasks.
   */
  tasks?: ListUploadTasksResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListUploadTasksResponseBodyTasks },
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

