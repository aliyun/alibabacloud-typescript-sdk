// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7F333E0-7B70-54DA-A307-4B2B49DEE923
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - finish: The task is completed. You can query the task to obtain the download URL of the task file.
   * - start: The task is started.
   * - error: The task failed.
   * - expire: The task has expired. The task file is invalid and cannot be downloaded.
   * 
   * Note: This field is returned only under specific conditions, such as when the task is completed synchronously. A standard response returns only RequestId. To query the real-time status, call a task query operation.
   * 
   * @example
   * start
   */
  status?: string;
  /**
   * @remarks
   * The unique identifier of the task. Note: This field is returned only under specific conditions, such as when the task is completed synchronously. A standard response returns only RequestId. To obtain the task status and download URL, call a task query operation.
   * 
   * @example
   * 132
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the file download task. Note: This field is returned only under specific conditions, such as when the task is completed synchronously. A standard response returns only RequestId.
   * 
   * @example
   * test-IPv4
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

