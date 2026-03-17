// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail extends $dara.Model {
  batchChannelCount?: number;
  overwriteExisting?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchChannelCount: 'BatchChannelCount',
      overwriteExisting: 'OverwriteExisting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchChannelCount: 'number',
      overwriteExisting: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobReport extends $dara.Model {
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

export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJob extends $dara.Model {
  actualBytes?: number;
  actualItems?: number;
  bytesDone?: number;
  bytesTotal?: number;
  clusterId?: string;
  completeTime?: number;
  createdTime?: number;
  crossAccountRoleName?: string;
  crossAccountType?: string;
  crossAccountUserId?: number;
  errorFile?: string;
  errorMessage?: string;
  exclude?: string;
  expireTime?: number;
  failbackDetail?: string;
  include?: string;
  itemsDone?: number;
  itemsTotal?: number;
  meteringBytesDone?: number;
  meteringBytesTotal?: number;
  options?: string;
  otsDetail?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail;
  parentId?: string;
  progress?: number;
  report?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobReport;
  restoreId?: string;
  restoreType?: string;
  snapshotHash?: string;
  snapshotId?: string;
  sourceInstanceId?: string;
  sourceType?: string;
  speed?: number;
  startTime?: number;
  status?: string;
  storageClass?: string;
  targetBucket?: string;
  targetClientId?: string;
  targetCreateTime?: number;
  targetDataSourceId?: string;
  targetFileSystemId?: string;
  targetInstanceId?: string;
  targetInstanceName?: string;
  targetPath?: string;
  targetPrefix?: string;
  targetTableName?: string;
  targetTime?: number;
  udmDetail?: string;
  updatedTime?: number;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualItems: 'ActualItems',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      clusterId: 'ClusterId',
      completeTime: 'CompleteTime',
      createdTime: 'CreatedTime',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      errorFile: 'ErrorFile',
      errorMessage: 'ErrorMessage',
      exclude: 'Exclude',
      expireTime: 'ExpireTime',
      failbackDetail: 'FailbackDetail',
      include: 'Include',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      meteringBytesDone: 'MeteringBytesDone',
      meteringBytesTotal: 'MeteringBytesTotal',
      options: 'Options',
      otsDetail: 'OtsDetail',
      parentId: 'ParentId',
      progress: 'Progress',
      report: 'Report',
      restoreId: 'RestoreId',
      restoreType: 'RestoreType',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceInstanceId: 'SourceInstanceId',
      sourceType: 'SourceType',
      speed: 'Speed',
      startTime: 'StartTime',
      status: 'Status',
      storageClass: 'StorageClass',
      targetBucket: 'TargetBucket',
      targetClientId: 'TargetClientId',
      targetCreateTime: 'TargetCreateTime',
      targetDataSourceId: 'TargetDataSourceId',
      targetFileSystemId: 'TargetFileSystemId',
      targetInstanceId: 'TargetInstanceId',
      targetInstanceName: 'TargetInstanceName',
      targetPath: 'TargetPath',
      targetPrefix: 'TargetPrefix',
      targetTableName: 'TargetTableName',
      targetTime: 'TargetTime',
      udmDetail: 'UdmDetail',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualItems: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
      clusterId: 'string',
      completeTime: 'number',
      createdTime: 'number',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      errorFile: 'string',
      errorMessage: 'string',
      exclude: 'string',
      expireTime: 'number',
      failbackDetail: 'string',
      include: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      meteringBytesDone: 'number',
      meteringBytesTotal: 'number',
      options: 'string',
      otsDetail: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail,
      parentId: 'string',
      progress: 'number',
      report: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobReport,
      restoreId: 'string',
      restoreType: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceInstanceId: 'string',
      sourceType: 'string',
      speed: 'number',
      startTime: 'number',
      status: 'string',
      storageClass: 'string',
      targetBucket: 'string',
      targetClientId: 'string',
      targetCreateTime: 'number',
      targetDataSourceId: 'string',
      targetFileSystemId: 'string',
      targetInstanceId: 'string',
      targetInstanceName: 'string',
      targetPath: 'string',
      targetPrefix: 'string',
      targetTableName: 'string',
      targetTime: 'number',
      udmDetail: 'string',
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  validate() {
    if(this.otsDetail && typeof (this.otsDetail as any).validate === 'function') {
      (this.otsDetail as any).validate();
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

export class DescribeRestoreJobs2ResponseBodyRestoreJobs extends $dara.Model {
  restoreJob?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJob[];
  static names(): { [key: string]: string } {
    return {
      restoreJob: 'RestoreJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreJob: { 'type': 'array', 'itemType': DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJob },
    };
  }

  validate() {
    if(Array.isArray(this.restoreJob)) {
      $dara.Model.validateArray(this.restoreJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobs2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  restoreJobs?: DescribeRestoreJobs2ResponseBodyRestoreJobs;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      restoreJobs: 'RestoreJobs',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      restoreJobs: DescribeRestoreJobs2ResponseBodyRestoreJobs,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.restoreJobs && typeof (this.restoreJobs as any).validate === 'function') {
      (this.restoreJobs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

