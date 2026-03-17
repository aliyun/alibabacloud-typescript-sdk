// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetailDiskNativeSnapshotIdList extends $dara.Model {
  diskNativeSnapshotId?: string[];
  static names(): { [key: string]: string } {
    return {
      diskNativeSnapshotId: 'DiskNativeSnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskNativeSnapshotId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.diskNativeSnapshotId)) {
      $dara.Model.validateArray(this.diskNativeSnapshotId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetail extends $dara.Model {
  destinationNativeSnapshotErrorMessage?: string;
  destinationNativeSnapshotId?: string;
  destinationNativeSnapshotProgress?: number;
  destinationNativeSnapshotStatus?: string;
  destinationRetention?: number;
  destinationSnapshotId?: string;
  diskNativeSnapshotIdList?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetailDiskNativeSnapshotIdList;
  doCopy?: boolean;
  instanceInfos?: { [key: string]: any };
  nativeSnapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationNativeSnapshotErrorMessage: 'DestinationNativeSnapshotErrorMessage',
      destinationNativeSnapshotId: 'DestinationNativeSnapshotId',
      destinationNativeSnapshotProgress: 'DestinationNativeSnapshotProgress',
      destinationNativeSnapshotStatus: 'DestinationNativeSnapshotStatus',
      destinationRetention: 'DestinationRetention',
      destinationSnapshotId: 'DestinationSnapshotId',
      diskNativeSnapshotIdList: 'DiskNativeSnapshotIdList',
      doCopy: 'DoCopy',
      instanceInfos: 'InstanceInfos',
      nativeSnapshotId: 'NativeSnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationNativeSnapshotErrorMessage: 'string',
      destinationNativeSnapshotId: 'string',
      destinationNativeSnapshotProgress: 'number',
      destinationNativeSnapshotStatus: 'string',
      destinationRetention: 'number',
      destinationSnapshotId: 'string',
      diskNativeSnapshotIdList: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetailDiskNativeSnapshotIdList,
      doCopy: 'boolean',
      instanceInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nativeSnapshotId: 'string',
    };
  }

  validate() {
    if(this.diskNativeSnapshotIdList && typeof (this.diskNativeSnapshotIdList as any).validate === 'function') {
      (this.diskNativeSnapshotIdList as any).validate();
    }
    if(this.instanceInfos) {
      $dara.Model.validateMap(this.instanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetailTableNames extends $dara.Model {
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableName)) {
      $dara.Model.validateArray(this.tableName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetail extends $dara.Model {
  tableNames?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetailTableNames;
  static names(): { [key: string]: string } {
    return {
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableNames: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetailTableNames,
    };
  }

  validate() {
    if(this.tableNames && typeof (this.tableNames as any).validate === 'function') {
      (this.tableNames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobPaths extends $dara.Model {
  path?: string[];
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.path)) {
      $dara.Model.validateArray(this.path);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJobReport extends $dara.Model {
  failedFiles?: string;
  reportTaskStatus?: string;
  skippedFiles?: string;
  successFiles?: string;
  totalFiles?: string;
  static names(): { [key: string]: string } {
    return {
      failedFiles: 'FailedFiles',
      reportTaskStatus: 'ReportTaskStatus',
      skippedFiles: 'SkippedFiles',
      successFiles: 'SuccessFiles',
      totalFiles: 'TotalFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFiles: 'string',
      reportTaskStatus: 'string',
      skippedFiles: 'string',
      successFiles: 'string',
      totalFiles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobsBackupJob extends $dara.Model {
  actualBytes?: number;
  actualFiles?: number;
  actualItems?: number;
  backupType?: string;
  bucket?: string;
  bytesDone?: number;
  bytesTotal?: number;
  changeListPath?: string;
  clientId?: string;
  completeTime?: number;
  createTime?: number;
  createdTime?: number;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  destDataSourceDetail?: string;
  destDataSourceId?: string;
  destSourceType?: string;
  detail?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetail;
  errorMessage?: string;
  exclude?: string;
  fileSystemId?: string;
  filesDone?: number;
  filesTotal?: number;
  identifier?: string;
  include?: string;
  instanceId?: string;
  instanceName?: string;
  itemsDone?: number;
  itemsTotal?: number;
  jobId?: string;
  jobName?: string;
  options?: string;
  otsDetail?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetail;
  paths?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobPaths;
  planId?: string;
  prefix?: string;
  progress?: number;
  report?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobReport;
  sourceType?: string;
  speed?: number;
  speedLimit?: string;
  startTime?: number;
  status?: string;
  tableName?: string;
  updatedTime?: number;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualFiles: 'ActualFiles',
      actualItems: 'ActualItems',
      backupType: 'BackupType',
      bucket: 'Bucket',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      changeListPath: 'ChangeListPath',
      clientId: 'ClientId',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      destDataSourceDetail: 'DestDataSourceDetail',
      destDataSourceId: 'DestDataSourceId',
      destSourceType: 'DestSourceType',
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      exclude: 'Exclude',
      fileSystemId: 'FileSystemId',
      filesDone: 'FilesDone',
      filesTotal: 'FilesTotal',
      identifier: 'Identifier',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      jobId: 'JobId',
      jobName: 'JobName',
      options: 'Options',
      otsDetail: 'OtsDetail',
      paths: 'Paths',
      planId: 'PlanId',
      prefix: 'Prefix',
      progress: 'Progress',
      report: 'Report',
      sourceType: 'SourceType',
      speed: 'Speed',
      speedLimit: 'SpeedLimit',
      startTime: 'StartTime',
      status: 'Status',
      tableName: 'TableName',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualFiles: 'number',
      actualItems: 'number',
      backupType: 'string',
      bucket: 'string',
      bytesDone: 'number',
      bytesTotal: 'number',
      changeListPath: 'string',
      clientId: 'string',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      destDataSourceDetail: 'string',
      destDataSourceId: 'string',
      destSourceType: 'string',
      detail: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetail,
      errorMessage: 'string',
      exclude: 'string',
      fileSystemId: 'string',
      filesDone: 'number',
      filesTotal: 'number',
      identifier: 'string',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      jobId: 'string',
      jobName: 'string',
      options: 'string',
      otsDetail: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetail,
      paths: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobPaths,
      planId: 'string',
      prefix: 'string',
      progress: 'number',
      report: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobReport,
      sourceType: 'string',
      speed: 'number',
      speedLimit: 'string',
      startTime: 'number',
      status: 'string',
      tableName: 'string',
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
    }
    if(this.paths && typeof (this.paths as any).validate === 'function') {
      (this.paths as any).validate();
    }
    if(this.report && typeof (this.report as any).validate === 'function') {
      (this.report as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBodyBackupJobs extends $dara.Model {
  backupJob?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJob[];
  static names(): { [key: string]: string } {
    return {
      backupJob: 'BackupJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJob: { 'type': 'array', 'itemType': DescribeBackupJobs2ResponseBodyBackupJobsBackupJob },
    };
  }

  validate() {
    if(Array.isArray(this.backupJob)) {
      $dara.Model.validateArray(this.backupJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupJobs2ResponseBody extends $dara.Model {
  backupJobs?: DescribeBackupJobs2ResponseBodyBackupJobs;
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned backup jobs that meet the specified conditions.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backupJobs: 'BackupJobs',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobs: DescribeBackupJobs2ResponseBodyBackupJobs,
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.backupJobs && typeof (this.backupJobs as any).validate === 'function') {
      (this.backupJobs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

