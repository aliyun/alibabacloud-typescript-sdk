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
  /**
   * @remarks
   * The information about the remote replication failure.
   * 
   * @example
   * ECS.CreatingSnapshot
   */
  destinationNativeSnapshotErrorMessage?: string;
  /**
   * @remarks
   * The ID of the remote replication snapshot.
   * 
   * @example
   * s-******************
   */
  destinationNativeSnapshotId?: string;
  /**
   * @remarks
   * The progress of the remote replication.
   * 
   * @example
   * 85
   */
  destinationNativeSnapshotProgress?: number;
  /**
   * @remarks
   * The state of the remote replication.
   * 
   * @example
   * COMPLETE
   */
  destinationNativeSnapshotStatus?: string;
  /**
   * @remarks
   * The retention period of the remote replication backup.
   * 
   * @example
   * 30
   */
  destinationRetention?: number;
  /**
   * @remarks
   * The ID of the remote replication backup.
   * 
   * @example
   * s-******************
   */
  destinationSnapshotId?: string;
  /**
   * @remarks
   * The mapping between snapshots and disks.
   */
  diskNativeSnapshotIdList?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetailDiskNativeSnapshotIdList;
  /**
   * @remarks
   * Indicates whether remote replication is enabled.
   * 
   * @example
   * true
   */
  doCopy?: boolean;
  /**
   * @remarks
   * The ecs instance infos.
   * 
   * @example
   * {
   *   "i-xxxxxxxx": {
   *     "hostName": "test",
   *     "instanceName": "test",
   *     "instanceType": "ecs.c7.xlarge",
   *     "osType": "linux",
   *     "diskIds": [
   *       "d-xxxxxxxx01",
   *       "d-xxxxxxxx02"
   *     ],
   *     "osNameEn": "Rocky Linux 8.8 64 bit",
   *     "osName": "Rocky Linux 8.8 64位",
   *     "platform": "Rocky Linux"
   *   }
   * }
   */
  instanceInfos?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-******************
   */
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
  /**
   * @remarks
   * The names of the destination tables in the Tablestore instance.
   */
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
  /**
   * @remarks
   * List of failed files
   * 
   * @example
   * /temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_failed.zip
   */
  failedFiles?: string;
  /**
   * @remarks
   * Report generation status.
   * 
   * @example
   * COMPLETE
   */
  reportTaskStatus?: string;
  /**
   * @remarks
   * List of skipped files
   * 
   * @example
   * /temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_skipped.zip
   */
  skippedFiles?: string;
  /**
   * @remarks
   * List of successful files.
   * 
   * @example
   * /temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_success.zip
   */
  successFiles?: string;
  /**
   * @remarks
   * List of all files. (This field is not returned for data synchronization)
   * 
   * @example
   * /temp/report/158975xxxxxx4625/job-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_total.csv
   */
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
  /**
   * @remarks
   * The actual amount of data that is backed up after duplicates are removed. Unit: bytes.
   * 
   * @example
   * 600
   */
  actualBytes?: number;
  /**
   * @remarks
   * The number of files that are actually processed.
   * 
   * @example
   * 8
   */
  actualFiles?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the actual number of objects that are backed up by the backup job.
   * 
   * @example
   * 6
   */
  actualItems?: number;
  /**
   * @remarks
   * The backup type. Valid value: **COMPLETE**, which indicates full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **OSS**. This parameter indicates the name of the OSS bucket that is backed up.
   * 
   * @example
   * hbr-backup-oss
   */
  bucket?: string;
  /**
   * @remarks
   * The actual amount of data that is generated by incremental backups. Unit: bytes.
   * 
   * @example
   * 800
   */
  bytesDone?: number;
  /**
   * @remarks
   * The total amount of data that is backed up from the data source. Unit: bytes.
   * 
   * @example
   * 1000
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The data source details at the destination. Thisparameter is returned only for data synchronization.
   * 
   * @example
   * {"dataSourceId": "ds-123456789", "path": "/changelist"}
   */
  changeListPath?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the ID of the backup client.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * The time when the backup job was completed. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  completeTime?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **NAS**. This parameter indicates the time when the file system was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the backup job was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * SELF_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * Destination data source details. (Required only for synchronization)
   * 
   * @example
   * {\\"prefix\\":\\"/\\"}
   */
  destDataSourceDetail?: string;
  /**
   * @remarks
   * Destination data source ID. (Required only for synchronization)
   * 
   * @example
   * ds-000cov4ufudxklj24zdk
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * Destination data source type. (Required only for synchronization)
   * 
   * @example
   * OSS
   */
  destSourceType?: string;
  /**
   * @remarks
   * The udm backup job detail.
   */
  detail?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobDetail;
  /**
   * @remarks
   * The error message that is returned for the backup job.
   * 
   * @example
   * PARTIAL_COMPLETE
   */
  errorMessage?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the paths to the files that are excluded from the backup job. The value must be 1 to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **NAS**. This parameter indicates the ID of the NAS file system.
   * 
   * @example
   * 005494
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of files that have been processed.
   * 
   * @example
   * 9
   */
  filesDone?: number;
  /**
   * @remarks
   * The total number of files to be processed.
   * 
   * @example
   * 10
   */
  filesTotal?: number;
  /**
   * @remarks
   * The identifier of the container cluster. For a Container Service for Kubernetes (ACK) cluster, specify the cluster ID.
   * 
   * @example
   * c83**************************b76
   */
  identifier?: string;
  /**
   * @remarks
   * The paths to the files that are included in the backup job.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **NAS**. This parameter indicates the ID of the ECS instance.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Tablestore instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the number of objects that are backed up.
   * 
   * @example
   * 8
   */
  itemsDone?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the total number of objects in the data source.
   * 
   * @example
   * 10
   */
  itemsTotal?: number;
  /**
   * @remarks
   * The ID of the backup job.
   * 
   * @example
   * job-000g********w7
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the backup job.
   * 
   * @example
   * jobname
   */
  jobName?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates whether Windows VSS is used to define a backup path.
   * 
   * *   This parameter is available only for Windows ECS instances.
   * *   If data changes occur in the backup source, the source data must be the same as the data to be backed up before the system sets this parameter to `["UseVSS":true]`.
   * *   If you use VSS, you cannot back up data from multiple directories.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The details about the Tablestore instance.
   */
  otsDetail?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobOtsDetail;
  /**
   * @remarks
   * The backup paths.
   */
  paths?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobPaths;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * plan-20********35
   */
  planId?: string;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **OSS**. This parameter indicates the prefix of objects that are backed up.
   * 
   * @example
   * example/
   */
  prefix?: string;
  /**
   * @remarks
   * The backup progress. For example, 10000 indicates that the progress is 100%.
   * 
   * @example
   * 10000
   */
  progress?: number;
  /**
   * @remarks
   * Task Report
   */
  report?: DescribeBackupJobs2ResponseBodyBackupJobsBackupJobReport;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: ECS files
   * *   **OSS**: OSS buckets
   * *   **NAS**: NAS file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The average speed at which data is backed up. Unit: KB/s.
   * 
   * @example
   * 500
   */
  speed?: number;
  /**
   * @remarks
   * This parameter is returned only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the throttling rules. Format: `{start}{end}{bandwidth}`. Multiple throttling rules are separated with vertical bars (`{start}|{end}|{bandwidth}`). A specified time range cannot overlap with another one.
   * 
   * *   **start**: the start hour
   * *   **end**: the end hour
   * *   **bandwidth**: the bandwidth. Unit: KB/s.
   * 
   * @example
   * 0:24:5120
   */
  speedLimit?: string;
  /**
   * @remarks
   * The time when the backup job started. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the backup job. Valid values:
   * 
   * *   **COMPLETE**: The backup job is completed.
   * *   **PARTIAL_COMPLETE**: The backup job is partially completed.
   * *   **FAILED**: The restore job has failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The name of a destination table in the Tablestore instance.
   * 
   * @example
   * table1
   */
  tableName?: string;
  /**
   * @remarks
   * The time when the backup job was updated. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  updatedTime?: number;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0006******q
   */
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
  /**
   * @remarks
   * The returned backup jobs that meet the specified conditions.
   */
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

