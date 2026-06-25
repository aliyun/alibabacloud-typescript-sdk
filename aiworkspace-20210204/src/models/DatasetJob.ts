// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetJob extends $dara.Model {
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
   * The time when the job was created (UTC).
   * 
   * @example
   * 2023-06-20T04:05:59Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dsjob-9jx1*****uj9e
   */
  datasetJobId?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * 这是一个数据集任务描述。
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
   * The time when the job was finished (UTC).
   * 
   * @example
   * 2023-06-20T06:03:48Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The job operation.
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @remarks
   * The job mode.
   * 
   * @example
   * Full
   */
  jobMode?: string;
  /**
   * @remarks
   * The job specifications.
   * 
   * @example
   * {\\"modelId\\":\\"xxx\\"}
   */
  jobSpec?: string;
  /**
   * @remarks
   * A list of task logs.
   */
  logs?: string[];
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The total number of files for the job.
   * 
   * @example
   * 1000
   */
  totalFileCount?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 145883
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      completedFileCount: 'CompletedFileCount',
      createTime: 'CreateTime',
      datasetJobId: 'DatasetJobId',
      datasetVersion: 'DatasetVersion',
      description: 'Description',
      failedFileCount: 'FailedFileCount',
      finishTime: 'FinishTime',
      jobAction: 'JobAction',
      jobMode: 'JobMode',
      jobSpec: 'JobSpec',
      logs: 'Logs',
      status: 'Status',
      totalFileCount: 'TotalFileCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedFileCount: 'number',
      createTime: 'string',
      datasetJobId: 'string',
      datasetVersion: 'string',
      description: 'string',
      failedFileCount: 'number',
      finishTime: 'string',
      jobAction: 'string',
      jobMode: 'string',
      jobSpec: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      totalFileCount: 'number',
      workspaceId: 'string',
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

