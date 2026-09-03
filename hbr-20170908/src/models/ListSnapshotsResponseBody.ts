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
   * The actual number of nodes.
   * 
   * @example
   * 6
   */
  actualItems?: number;
  /**
   * @remarks
   * The time when the backup was archived.
   * 
   * @example
   * 1640334062
   */
  archiveTime?: number;
  /**
   * @remarks
   * The backup type. The value is **COMPLETE**, which indicates a full backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The amount of data that has been backed up, in bytes.
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
   * When **SourceType** is set to **ECS_FILE** or **File**, this parameter indicates the backup client ID. In other cases, it indicates the ID of the backup data source.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * The backup completion time. A UNIX timestamp, in seconds.
   * 
   * @example
   * 1642496679
   */
  completeTime?: number;
  /**
   * @remarks
   * The time when the backup point was created, in seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the backup was created.
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
   * The backup expiration time.
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
   * The Tablestore instance name.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of nodes that have been backed up.
   * 
   * @example
   * 8
   */
  itemsDone?: number;
  /**
   * @remarks
   * The total number of nodes to back up.
   * 
   * @example
   * 10
   */
  itemsTotal?: number;
  /**
   * @remarks
   * The backup job ID.
   * 
   * @example
   * job-00030j3chkt******2
   */
  jobId?: string;
  /**
   * @remarks
   * The source path.
   * 
   * @example
   * /home
   */
  path?: string;
  /**
   * @remarks
   * The list of source paths.
   */
  paths?: string[];
  /**
   * @remarks
   * The backup plan ID.
   * 
   * @example
   * po-123***7890
   */
  planId?: string;
  /**
   * @remarks
   * The protected source data size, in bytes. When SourceType is set to ECS_FILE, this indicates the protected cloud disk capacity.
   * 
   * @example
   * 42949672960
   */
  protectedDataSize?: number;
  /**
   * @remarks
   * The end time of the Tablestore backup job execution. A UNIX timestamp, in milliseconds.
   * 
   * @example
   * 1642521709966
   */
  rangeEnd?: number;
  /**
   * @remarks
   * The start time of the Tablestore backup job execution. A UNIX timestamp, in milliseconds.
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
   * The backup point ID.
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
   * - **File**: On-premises file backup
   * - **OSS**: OSS backup
   * - **NAS**: Alibaba Cloud NAS backup
   * - **COMMON_NAS**: On-premises NAS backup
   * - **CONTAINER**: Container backup
   * - **OTS_TABLE**: Tablestore backup
   * - **COMMON_FILE_SYSTEM**: CPFS backup
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The backup point status.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The storage class.
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
   * The maximum number of results returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The return message. The value "successful" is returned for successful requests. An error message is returned for failed requests.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page. An empty NextToken indicates that no more pages are available.
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
   * Indicates whether the request was successful.
   * 
   * - true: The request was successful.
   * - false: The request failed.
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

