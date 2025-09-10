// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail extends $dara.Model {
  /**
   * @remarks
   * The number of channels processed by each Tablestore restore job.
   * 
   * @example
   * 2
   */
  batchChannelCount?: number;
  /**
   * @remarks
   * Indicates whether the existing Tablestore restore job was overwritten.
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The files that failed to be executed.
   * 
   * @example
   * /temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_failed.zip
   */
  failedFiles?: string;
  /**
   * @remarks
   * The status of the report generation.
   * 
   * @example
   * COMPLETE
   */
  reportTaskStatus?: string;
  /**
   * @remarks
   * The skipped files.
   * 
   * @example
   * /temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_skipped.zip
   */
  skippedFiles?: string;
  /**
   * @remarks
   * The files that are successfully executed.
   * 
   * @example
   * /temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_success.zip
   */
  successFiles?: string;
  /**
   * @remarks
   * The full files that are restored based on the file list.
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

export class DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJob extends $dara.Model {
  /**
   * @remarks
   * The actual amount of data that is restored after duplicates are removed. Unit: bytes.
   * 
   * @example
   * 600
   */
  actualBytes?: number;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the actual number of objects that are restored by the restore job.
   * 
   * @example
   * 6
   */
  actualItems?: number;
  /**
   * @remarks
   * The amount of data that was restored. Unit: bytes.
   * 
   * @example
   * 800
   */
  bytesDone?: number;
  /**
   * @remarks
   * The total amount of data that was backed up from the data source. Unit: bytes.
   * 
   * @example
   * 1000
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The ID of the client group used for restoration.
   * 
   * @example
   * cl-000******hp6
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the restore job was completed. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  completeTime?: number;
  /**
   * @remarks
   * The time when the restore job was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Indicates whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
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
   * 158975xxxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The files that failed to be restored.
   * 
   * @example
   * "test.csv"
   */
  errorFile?: string;
  /**
   * @remarks
   * The error message that is returned for the restore job.
   * 
   * @example
   * PARTIAL_COMPLETE
   */
  errorMessage?: string;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the paths to the files that are excluded from the restore job. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * The time when the restore job expires.
   * 
   * @example
   * 1634714531
   */
  expireTime?: number;
  /**
   * @remarks
   * The details about the VMware failback task.
   * 
   * @example
   * {"cpu":4,"extra":"{\\"restoreVMNamePrefix\\":\\"627-\\",\\"dataCenterName\\":\\"SDDC-Datacenter\\",\\"dataStoreId\\":\\"datastore-50\\",\\"folderId\\":\\"group-v49\\",\\"resourcePoolId\\":\\"resgroup-46\\",\\"locationName\\":\\"vcenter.pc-uf600arcwi9td3eyj641.acvs.aliyuncs.com/SDDC-Datacenter/Workloads\\",\\"computeResourceName\\":\\"SDDC-Datacenter/Default_c-uf600arcwi9td3eyj640\\",\\"dataStoreName\\":\\"Default_c-uf600arcwi9td3eyj640/WorkloadDatastore\\",\\"networkMoReference\\":\\"DistributedVirtualPortgroup:dvportgroup-1001\\",\\"useHotAdd\\":false}","instanceId":"i-2vc357i2eannmmotcagz","memoryInMB":8192,"serverId":"0fdc0c86-eb92-4e05-91ab-eeaf9fb6ad01","uefiBoot":false}
   */
  failbackDetail?: string;
  /**
   * @remarks
   * The paths to the files that are included in the restore job.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the number of restored objects.
   * 
   * @example
   * 8
   */
  itemsDone?: number;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates the total number of objects in the data source.
   * 
   * @example
   * 10
   */
  itemsTotal?: number;
  /**
   * @remarks
   * The amount of data that was restored. Unit: bytes. This parameter is valid only if the StorageClass parameter is set to ARCHIVE. The minimum billable size of the data stored at the Archive tier is 1 MB.
   * 
   * @example
   * 1048576
   */
  meteringBytesDone?: number;
  /**
   * @remarks
   * The total amount of data that was backed up from the data source. Unit: bytes. This parameter is valid only if the StorageClass parameter is set to ARCHIVE. The minimum billable size of the data stored at the Archive tier is 1 MB.
   * 
   * @example
   * 1048576
   */
  meteringBytesTotal?: number;
  /**
   * @remarks
   * This parameter is valid only if the **SourceType** parameter is set to **ECS_FILE**. This parameter indicates whether Windows Volume Shadow Copy Service (VSS) is used to define a restoration path.
   * 
   * *   This parameter is available only for Windows ECS instances.
   * *   If data changes occur in the backup source, the source data must be the same as the data to be backed up before you can set this parameter to `["UseVSS":true]`.
   * *   If you use VSS, you cannot restore data from multiple directories.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The details about the Tablestore instance.
   */
  otsDetail?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobOtsDetail;
  /**
   * @remarks
   * The ID of the parent job.
   * 
   * @example
   * r-0003hd2an3x4dyv0l18b
   */
  parentId?: string;
  /**
   * @remarks
   * The progress of the restore job. Valid values: [0,10000]. For example, 10000 indicates that the progress is 100%.
   * 
   * @example
   * 10000
   */
  progress?: number;
  /**
   * @remarks
   * The report of the restore job.
   */
  report?: DescribeRestoreJobs2ResponseBodyRestoreJobsRestoreJobReport;
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * @example
   * r-0003*****8a
   */
  restoreId?: string;
  /**
   * @remarks
   * The type of the restore job.
   * 
   * @example
   * ECS_FILE
   */
  restoreType?: string;
  /**
   * @remarks
   * The hash value of the backup snapshot.
   * 
   * @example
   * f2fe...
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the snapshot used for restoration.
   * 
   * @example
   * s-0002******ga88
   */
  snapshotId?: string;
  sourceInstanceId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: ECS files
   * *   **OSS**: Object Storage Service (OSS) buckets
   * *   **NAS**: Apsara File Storage NAS (NAS) file systems
   * *   **OTS_TABLE**: Tablestore instances
   * *   **UDM_ECS**: ECS instances
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
   * The time when the restore job started. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the restore job. Valid values:
   * 
   * *   **COMPLETE**: The job is completed.
   * *   **PARTIAL_COMPLETE**: The job is partially completed.
   * *   **FAILED**: The job failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the backup data. Valid values:
   * 
   * *   **STANDARD**
   * *   **ARCHIVE**
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @remarks
   * The name of the destination OSS bucket. This parameter is returned only for OSS buckets.
   * 
   * @example
   * target-bucket
   */
  targetBucket?: string;
  /**
   * @remarks
   * The ID of the destination client.
   * 
   * @example
   * c-000e*****397
   */
  targetClientId?: string;
  /**
   * @remarks
   * The time when the file system was created. This parameter is returned only for NAS file systems.
   * 
   * @example
   * 1634714531
   */
  targetCreateTime?: number;
  /**
   * @remarks
   * The ID of the destination data source.
   * 
   * @example
   * ds-000*****997
   */
  targetDataSourceId?: string;
  /**
   * @remarks
   * The ID of the destination NAS file system. This parameter is returned only for NAS file systems.
   * 
   * @example
   * 0be9****9c9
   */
  targetFileSystemId?: string;
  /**
   * @remarks
   * The ID of the destination instance for the restore job.
   * 
   * @example
   * i-2ze3m7ktcgw******cs
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The name of the destination Tablestore instance.
   * 
   * @example
   * instancename
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * The destination file path of the restore job.
   * 
   * @example
   * "D:\\\\rebk"
   */
  targetPath?: string;
  /**
   * @remarks
   * The prefix of the objects that are restored. This parameter is returned only for OSS buckets.
   * 
   * @example
   * "/target"
   */
  targetPrefix?: string;
  /**
   * @remarks
   * The name of the destination table in the Tablestore instance.
   * 
   * @example
   * tablename
   */
  targetTableName?: string;
  /**
   * @remarks
   * The time when the Tablestore instance was backed up. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642560261
   */
  targetTime?: number;
  /**
   * @remarks
   * The details about Elastic Compute Service (ECS) instance backup.
   * 
   * @example
   * {\\"doCopy\\":true,\\"doBackup\\":false,\\"instanceName\\":\\"instance example\\",\\"appConsistent\\":false,\\"destinationRegionId\\":\\"cn-shanghai\\",\\"enableFsFreeze\\":true,\\"osNameEn\\":\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\",\\"osName\\":\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\",\\"diskIdList\\":[],\\"backupVaultId\\":\\"\\",\\"snapshotGroup\\":true,\\"destinationRetention\\":35,\\"platform\\":\\"Windows Server 2012\\",\\"timeoutInSeconds\\":60,\\"backupRetention\\":1,\\"osType\\":\\"windows\\",\\"preScriptPath\\":\\"\\",\\"postScriptPath\\":\\"\\",\\"enableWriters\\":true,\\"ecsDeleted\\":false}
   */
  udmDetail?: string;
  /**
   * @remarks
   * The time when the restore job was updated. This value is a UNIX timestamp. Unit: seconds.
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
  /**
   * @remarks
   * The queried restore jobs.
   * 
   * @example
   * {\\"RestoreJob\\": []}
   */
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

