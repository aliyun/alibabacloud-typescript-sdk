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
   * The status of the task. Valid values:
   * 
   * finish: The task finished. You can query the task to obtain the download link of the file.
   * 
   * start: The task start.
   * 
   * error: An error occurred.
   * 
   * expire: The task file is invalid and cannot be downloaded.
   * 
   * @example
   * start
   */
  status?: string;
  /**
   * @remarks
   * The unique ID of the task.
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
   * Internet Boundary Firewall Assets - IPv4
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

