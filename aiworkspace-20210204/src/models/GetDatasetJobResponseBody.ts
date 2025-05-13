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
   * The time when the job is started.
   * 
   * @example
   * 2024-11-15T07:06:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job description.
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
   * The time when the job ends.
   * 
   * @example
   * 2024-07-16T02:03:23Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The action that is performed on the job.
   * 
   * Valid values:
   * 
   * *   SemanticIndex: semantic indexing
   * *   IntelligentTag: smart labeling
   * *   FileMetaExport: metadata export
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @remarks
   * The job mode.
   * 
   * Valid value:
   * 
   * *   Full: full data mode.
   * 
   * @example
   * Full
   */
  jobMode?: string;
  /**
   * @remarks
   * The job details.
   * 
   * @example
   * {\\"modelId\\":\\"xxx\\"}
   */
  jobSpec?: string;
  /**
   * @remarks
   * The job logs.
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
   * The job state.
   * 
   * Valid values:
   * 
   * *   Succeeded
   * *   Failed
   * *   Running
   * *   Pending
   * *   PartialFailed
   * *   Deleting
   * *   ManuallyStop
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The total number of job files.
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

