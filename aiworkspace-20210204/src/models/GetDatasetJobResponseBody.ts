// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of completed files.
   * 
   * @example
   * 990
   */
  completedFileCount?: number;
  /**
   * @remarks
   * The time when the task was started.
   * 
   * @example
   * 2024-11-15T07:06:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * This is a task description.
   */
  description?: string;
  /**
   * @remarks
   * The total number of failed files.
   * 
   * @example
   * 10
   */
  failedFileCount?: number;
  /**
   * @remarks
   * The time when the task was finished.
   * 
   * @example
   * 2024-07-16T02:03:23Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The task operation.
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @remarks
   * The task pattern.
   * 
   * @example
   * Full
   */
  jobMode?: string;
  /**
   * @remarks
   * The task details.
   * 
   * @example
   * {\\"modelId\\":\\"xxx\\"}
   */
  jobSpec?: string;
  /**
   * @remarks
   * The list of task logs.
   */
  logs?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64B50C1D-D4C2-560C-86A3-A6ED****16D
   */
  requestId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The total number of files for the task.
   * 
   * @example
   * 1000
   */
  totalFileCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedFileCount: 'CompletedFileCount',
      createTime: 'CreateTime',
      description: 'Description',
      failedFileCount: 'FailedFileCount',
      finishTime: 'FinishTime',
      jobAction: 'JobAction',
      jobMode: 'JobMode',
      jobSpec: 'JobSpec',
      logs: 'Logs',
      requestId: 'RequestId',
      status: 'Status',
      totalFileCount: 'TotalFileCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedFileCount: 'number',
      createTime: 'string',
      description: 'string',
      failedFileCount: 'number',
      finishTime: 'string',
      jobAction: 'string',
      jobMode: 'string',
      jobSpec: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'string',
      totalFileCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

