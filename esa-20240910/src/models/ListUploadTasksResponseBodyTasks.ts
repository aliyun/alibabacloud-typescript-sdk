// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUploadTasksResponseBodyTasks extends $dara.Model {
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
   * The error message returned when the file upload task failed.
   * 
   * @example
   * invalid url
   */
  description?: string;
  /**
   * @remarks
   * The error code. Multiple error codes are separated by commas (,).
   * 
   * *   **InvalidUrl**: The URL format is incorrect.
   * *   **InvalidDomain**: The domain ownership fails to be verified.
   * *   **QuotaExcess**: The quota limit has been reached.
   * *   **OtherErrors**: Other errors.
   * 
   * @example
   * InvalidUrl,InvalidDomain
   */
  errorCode?: string;
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
   * The task type. Valid values:
   * 
   * *   **file**: purges the cache by file URL.
   * *   **preload**: prefetches files.
   * *   **directory**: purges the cache by directory.
   * *   **ignoreparams**: purges the cache by URL with specified parameters ignored.
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

