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
   * - finish: The task is complete. You can query the task to obtain the download URL of the task file.
   * 
   * - start: The task has started.
   * 
   * - error: The task failed.
   * 
   * - expire: The task has expired. The task file is no longer valid and cannot be downloaded.
   * 
   * @example
   * start
   */
  status?: string;
  /**
   * @remarks
   * The task ID, which uniquely identifies the task.
   * 
   * @example
   * 132
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the file download task.
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

