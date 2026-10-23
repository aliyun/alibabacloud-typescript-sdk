// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The actual amount of data written, in bytes.
   * 
   * @example
   * 600
   */
  actualBytes?: number;
  /**
   * @remarks
   * The actual number of items.
   * 
   * @example
   * 6
   */
  actualItems?: number;
  /**
   * @remarks
   * The archive time.
   * 
   * @example
   * 1640334062
   */
  archiveTime?: number;
  /**
   * @remarks
   * The backup type. A value of **COMPLETE** indicates a full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The amount of backed up data, in bytes.
   * 
   * @example
   * 800
   */
  bytesDone?: number;
  /**
   * @remarks
   * The total amount of data to back up, in bytes.
   * 
   * @example
   * 1000
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The ID of the backup client when the value of **SourceType** is **ECS_FILE** or **File**. In other cases, this parameter indicates the ID of the backup data source.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * The backup completion time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1642496679
   */
  completeTime?: number;
  /**
   * @remarks
   * The creation time of the backup point, in seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The backup creation time.
   * 
   * @example
   * 1642496679
   */
  createdTime?: number;
  /**
   * @remarks
   * The file that records backup failure information, including information about partially completed backups.
   * 
   * @example
   * temp/report/123456789/job-xxxxxxxxx_failed.zip
   */
  errorFile?: string;
  /**
   * @remarks
   * The source paths excluded from the backup job.
   * 
   * @example
   * [\\"/test/example_cn-hangzhou_7.txt\\", \\"/test/example_cn-hangzhou_1.txt\\", \\"/test/example_cn-hangzhou_3.txt\\", \\"/test/example_cn-hangzhou_9.txt\\", \\"/test/example_cn-hangzhou_6.txt\\"]
   */
  exclude?: string;
  /**
   * @remarks
   * The expiration time of the backup.
   * 
   * @example
   * 1771901707
   */
  expireTime?: number;
  /**
   * @remarks
   * The source paths included in the backup job.
   * 
   * @example
   * [\\"/test/example_cn-huhehaote_3.txt\\", \\"/test/example_cn-huhehaote_9.txt\\", \\"/test/example_cn-huhehaote_5.txt\\", \\"/test/example_cn-huhehaote_1.txt\\", \\"/test/example_cn-huhehaote_7.txt\\"]
   */
  include?: string;
  /**
   * @remarks
   * The instance ID of the backup data source.
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
   * The number of backed up items.
   * 
   * @example
   * 8
   */
  itemsDone?: number;
  /**
   * @remarks
   * The total number of items to back up.
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
   * job-00030j3chkt******2
   */
  jobId?: string;
  /**
   * @remarks
   * The backup path.
   * 
   * @example
   * /home
   */
  path?: string;
  /**
   * @remarks
   * The list of backup paths.
   */
  paths?: string[];
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * po-123***7890
   */
  planId?: string;
  /**
   * @remarks
   * The size of the protected source data, in bytes. When the value of SourceType is ECS_FILE, this parameter indicates the capacity of the protected cloud disk.
   * 
   * @example
   * 42949672960
   */
  protectedDataSize?: number;
  /**
   * @remarks
   * The end time of the Tablestore backup job. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1642521709966
   */
  rangeEnd?: number;
  /**
   * @remarks
   * The start time of the Tablestore backup job. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1642492553038
   */
  rangeStart?: number;
  /**
   * @remarks
   * The retention period of the backup, in days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The hash value of the backup point.
   * 
   * @example
   * f2ac5fd243**********************bc4451777be019
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the backup point.
   * 
   * @example
   * s-00047mxg17p26*****b
   */
  snapshotId?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   * 
   * - **ECS_FILE**: ECS file backup
   * - **File**: on-premises file backup
   * - **OSS**: OSS backup
   * - **NAS**: Alibaba Cloud NAS backup
   * - **COMMON_NAS**: on-premises NAS backup
   * - **CONTAINER**: container backup
   * - **OTS_TABLE**: Tablestore backup
   * - **COMMON_FILE_SYSTEM**: CPFS backup
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the backup point. Valid values:
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The storage class. Valid values:
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @remarks
   * The name of the data table in the Tablestore instance.
   * 
   * @example
   * table2
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the vault that stores the backup data.
   * 
   * @example
   * v-00030j*******sn
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualItems: 'ActualItems',
      archiveTime: 'ArchiveTime',
      backupType: 'BackupType',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      clientId: 'ClientId',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      errorFile: 'ErrorFile',
      exclude: 'Exclude',
      expireTime: 'ExpireTime',
      include: 'Include',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      jobId: 'JobId',
      path: 'Path',
      paths: 'Paths',
      planId: 'PlanId',
      protectedDataSize: 'ProtectedDataSize',
      rangeEnd: 'RangeEnd',
      rangeStart: 'RangeStart',
      retention: 'Retention',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      status: 'Status',
      storageClass: 'StorageClass',
      tableName: 'TableName',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualItems: 'number',
      archiveTime: 'number',
      backupType: 'string',
      bytesDone: 'number',
      bytesTotal: 'number',
      clientId: 'string',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      errorFile: 'string',
      exclude: 'string',
      expireTime: 'number',
      include: 'string',
      instanceId: 'string',
      instanceName: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      jobId: 'string',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      planId: 'string',
      protectedDataSize: 'number',
      rangeEnd: 'number',
      rangeStart: 'number',
      retention: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      status: 'string',
      storageClass: 'string',
      tableName: 'string',
      vaultId: 'string',
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

export class ListSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The maximum number of returned results.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned message. A value of successful indicates success. If an error occurs, the corresponding error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page. If NextToken is empty, no more pages exist.
   * 
   * @example
   * aWQj********MCMy
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17189276-****-****-****-0FF51B5A41A0
   */
  requestId?: string;
  /**
   * @remarks
   * The list of backup points.
   */
  snapshots?: ListSnapshotsResponseBodySnapshots[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': ListSnapshotsResponseBodySnapshots },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

