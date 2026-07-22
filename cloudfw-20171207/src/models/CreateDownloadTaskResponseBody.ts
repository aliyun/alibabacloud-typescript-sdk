// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7F333E0-7B70-54DA-A307-4B2B49DEE923
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - finish: The task is completed. You can call a task query operation to obtain the download URL of the task file.
   * 
   * - start: The task has started.
   * 
   * - error: The task failed.
   * 
   * - expire: The task has expired. The task file is no longer valid and cannot be downloaded.
   * 
   * This field is returned only under specific conditions, such as when the task is completed synchronously. In regular responses, only RequestId is returned. Use a task query operation to obtain the real-time status.
   * 
   * @example
   * start
   */
  status?: string;
  /**
   * @remarks
   * The task ID, which uniquely identifies the task. This field is returned only under specific conditions, such as when the task is completed synchronously. In regular responses, only RequestId is returned. Use a task query operation to obtain the task status and download URL.
   * 
   * @example
   * 132
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the file download task. This field is returned only under specific conditions, such as when the task is completed synchronously. In regular responses, only RequestId is returned.
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

