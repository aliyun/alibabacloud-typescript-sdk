// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecycleBinJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-05-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error code.
   * 
   * This value is valid only when Status is Fail or PartialSuccess.
   * 
   * @example
   * InvalidFileId.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * This value is valid only when JobStatus is Fail or PartialSuccess.
   * 
   * @example
   * The Target File or Directory does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The FileId of the file or directory associated with the task.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the file or directory associated with the task.
   * 
   * @example
   * test001
   */
  fileName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 8C****C54
   */
  id?: string;
  /**
   * @remarks
   * The execution progress of the task.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Running: The task is running.
   * - Defragmenting: Data is being defragmented.
   * - PartialSuccess: The task partially succeeded.
   * - Success: The task succeeded.
   * - Fail: The task failed.
   * - Cancelled: The task is canceled.
   * 
   * @example
   * Fail
   */
  status?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - Restore: A file restoration task.
   * - Delete: A file deletion task.
   * 
   * @example
   * Restore
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileId: 'FileId',
      fileName: 'FileName',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      fileId: 'string',
      fileName: 'string',
      id: 'string',
      progress: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecycleBinJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of task information in the recycle bin.
   */
  jobs?: ListRecycleBinJobsResponseBodyJobs[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tasks per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks in the recycle bin.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListRecycleBinJobsResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

