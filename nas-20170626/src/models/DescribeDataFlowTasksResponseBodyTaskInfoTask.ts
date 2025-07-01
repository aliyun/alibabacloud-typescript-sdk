// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats } from "./DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats";
import { DescribeDataFlowTasksResponseBodyTaskInfoTaskReports } from "./DescribeDataFlowTasksResponseBodyTaskInfoTaskReports";


export class DescribeDataFlowTasksResponseBodyTaskInfoTask extends $dara.Model {
  /**
   * @remarks
   * The conflict policy for files with the same name. Valid values:
   * 
   * *   SKIP_THE_FILE: skips files with the same name.
   * *   KEEP_LATEST: compares the update time and keeps the latest version.
   * *   OVERWRITE_EXISTING: forcibly overwrites the existing file.
   * 
   * @example
   * KEEP_LATEST
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2021-08-04 18:27:35
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the data flow.
   * 
   * @example
   * dfid-194433a5be3****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The type of data on which operations are performed by the data flow task. Valid values:
   * 
   * *   Metadata: the metadata of a file, including the timestamp, ownership, and permission information of the file. If you select Metadata, only the metadata of the file is imported. You can only query the file. When you access the file data, the file is loaded from the source storage as required.
   * *   Data: the data blocks of the file.
   * *   MetaAndData: the metadata and data blocks of the file.
   * 
   * >  CPFS for LINGJUN supports only the MetaAndData type.
   * 
   * @example
   * Metadata
   */
  dataType?: string;
  /**
   * @remarks
   * The directory in which the data flow task is executed.
   * 
   * @example
   * /path_in_cpfs/
   */
  directory?: string;
  /**
   * @remarks
   * The directory mapped to the data flow task.
   * 
   * @example
   * /path_in_cpfs/
   */
  dstDirectory?: string;
  /**
   * @remarks
   * The time when the task ended.
   * 
   * @example
   * 2021-08-04 18:27:35
   */
  endTime?: string;
  /**
   * @remarks
   * The cause of the task exception.
   * 
   * >  If this parameter is not returned or the return value is empty, no error occurs.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The directory of the fileset in the CPFS file system.
   * 
   * Limits:
   * 
   * *   The directory must be 2 to 1024 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * *   The directory must be a fileset directory in the CPFS file system.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * /a/b/c/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  filesystemId?: string;
  /**
   * @remarks
   * The path of the smart directory.
   * 
   * @example
   * /aa/
   */
  fsPath?: string;
  includes?: string;
  /**
   * @remarks
   * The initiator of the data flow task. Valid values:
   * 
   * *   User: The task is initiated by a user.
   * *   System: The task is automatically initiated by CPFS based on the automatic update interval.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * User
   */
  originator?: string;
  /**
   * @remarks
   * The progress of the data flow task. The number of operations that have been performed by the data flow task.
   * 
   * @example
   * 240
   */
  progress?: number;
  /**
   * @remarks
   * The progress of the data flow task.
   */
  progressStats?: DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats;
  /**
   * @remarks
   * The save path of data flow task reports in the CPFS file system.
   * 
   * *   The task reports for a CPFS file system are generated in the `.dataflow_report` directory of the CPFS file system.
   * *   CPFS for LINGJUN returns an OSS download link for you to download the task reports.
   * 
   * @example
   * /path_in_cpfs/reportfile.cvs
   * 
   * @deprecated
   */
  reportPath?: string;
  /**
   * @remarks
   * The reports.
   * 
   * >  Streaming tasks do not support reports.
   */
  reports?: DescribeDataFlowTasksResponseBodyTaskInfoTaskReports;
  /**
   * @remarks
   * The access path of the source storage. Format: `<storage type>://[<account id>:]<path>`.
   * 
   * Parameters:
   * 
   * *   storage type: Only Object Storage Service (OSS) is supported.
   * 
   * *   account id: the UID of the account of the source storage.
   * 
   * *   path: the name of the OSS bucket. Limits:
   * 
   *     *   The name can contain only lowercase letters, digits, and hyphens (-). The name must start and end with a lowercase letter or digit.
   *     *   The name can be up to 128 characters in length.
   *     *   The name must be encoded in UTF-8.
   * 
   * > 
   * 
   * *   The OSS bucket must be an existing bucket in the region.
   * 
   * *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
   * 
   * @example
   * oss://bucket1
   */
  sourceStorage?: string;
  /**
   * @remarks
   * The time when the task started.
   * 
   * @example
   * 2021-08-04 18:27:35
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the data flow task. Valid values:
   * 
   * *   Pending: The data flow task has been created and has not started.
   * *   Executing: The data flow task is being executed.
   * *   Failed: The data flow task failed to be executed. You can view the cause of the failure in the data flow task report.
   * *   Completed: The data flow task is completed. You can check that all the files have been correctly transferred in the data flow task report.
   * *   Canceled: The data flow task is canceled and is not completed.
   * *   Canceling: The data flow task is being canceled.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The type of the data flow task. Valid values:
   * 
   * *   Import: imports data stored in the source storage to a CPFS file system.
   * *   Export: exports specified data from a CPFS file system to the source storage.
   * *   StreamImport: imports the specified data from the source storage to a CPFS file system in streaming mode.
   * *   StreamExport: exports specified data from a CPFS file system to the source storage in streaming mode.
   * *   Evict: releases the data blocks of a file in a CPFS file system. After the eviction, only the metadata of the file is retained in the CPFS file system. You can still query the file. However, the data blocks of the file are cleared and do not occupy the storage space in the CPFS file system. When you access the file data, the file is loaded from the source storage as required.
   * *   Inventory: obtains the inventory list managed by a data flow from the CPFS file system, providing the cache status of inventories in the data flow.
   * 
   * >  Only CPFS for LINGJUN V2.6.0 and later support StreamImport and StreamExport.
   * 
   * @example
   * Import
   */
  taskAction?: string;
  /**
   * @remarks
   * The ID of the data flow task.
   * 
   * @example
   * taskId-12345678
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      conflictPolicy: 'ConflictPolicy',
      createTime: 'CreateTime',
      dataFlowId: 'DataFlowId',
      dataType: 'DataType',
      directory: 'Directory',
      dstDirectory: 'DstDirectory',
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      fileSystemPath: 'FileSystemPath',
      filesystemId: 'FilesystemId',
      fsPath: 'FsPath',
      includes: 'Includes',
      originator: 'Originator',
      progress: 'Progress',
      progressStats: 'ProgressStats',
      reportPath: 'ReportPath',
      reports: 'Reports',
      sourceStorage: 'SourceStorage',
      startTime: 'StartTime',
      status: 'Status',
      taskAction: 'TaskAction',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictPolicy: 'string',
      createTime: 'string',
      dataFlowId: 'string',
      dataType: 'string',
      directory: 'string',
      dstDirectory: 'string',
      endTime: 'string',
      errorMsg: 'string',
      fileSystemPath: 'string',
      filesystemId: 'string',
      fsPath: 'string',
      includes: 'string',
      originator: 'string',
      progress: 'number',
      progressStats: DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats,
      reportPath: 'string',
      reports: DescribeDataFlowTasksResponseBodyTaskInfoTaskReports,
      sourceStorage: 'string',
      startTime: 'string',
      status: 'string',
      taskAction: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.progressStats && typeof (this.progressStats as any).validate === 'function') {
      (this.progressStats as any).validate();
    }
    if(this.reports && typeof (this.reports as any).validate === 'function') {
      (this.reports as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

