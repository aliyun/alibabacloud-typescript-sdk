// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2021-02-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The total number of files that are read in the data retrieval task.
   * 
   * @example
   * 100
   */
  discoveredFileCount?: number;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the data retrieval task.
   * 
   * @example
   * lrj-nfstest-ia-160****853-hshvw
   */
  jobId?: string;
  /**
   * @remarks
   * The execution path of the data retrieval task.
   */
  paths?: string[];
  /**
   * @remarks
   * The total number of files that are retrieved.
   * 
   * @example
   * 80
   */
  retrievedFileCount?: number;
  /**
   * @remarks
   * The status of the data retrieval task. Valid values:
   * 
   * *   active: The task is running.
   * *   canceled: The task is canceled.
   * *   completed: The task is completed.
   * *   failed: The task has failed.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * *   InfrequentAccess: the IA storage class.
   * *   Archive: the Archive storage class.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2021-02-30T11:08:08Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      discoveredFileCount: 'DiscoveredFileCount',
      fileSystemId: 'FileSystemId',
      jobId: 'JobId',
      paths: 'Paths',
      retrievedFileCount: 'RetrievedFileCount',
      status: 'Status',
      storageType: 'StorageType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      discoveredFileCount: 'number',
      fileSystemId: 'string',
      jobId: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      retrievedFileCount: 'number',
      status: 'string',
      storageType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

