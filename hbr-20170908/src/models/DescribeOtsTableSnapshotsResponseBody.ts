// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOtsTableSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The actual data amount of backup snapshots after duplicates are removed. Unit: bytes.
   * 
   * @example
   * 0
   */
  actualBytes?: string;
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
   * The total amount of data. Unit: bytes.
   * 
   * @example
   * 0
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The time when the backup snapshot was completed. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  completeTime?: number;
  /**
   * @remarks
   * The time when the Tablestore instance was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1607436917
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the backup snapshot was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  createdTime?: number;
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
   * The ID of the backup job.
   * 
   * @example
   * job-00030j3chkt******2
   */
  jobId?: string;
  /**
   * @remarks
   * The hash value of the parent backup snapshot.
   * 
   * @example
   * f2fe..
   */
  parentSnapshotHash?: string;
  /**
   * @remarks
   * The time when the backup job ended. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1642521709966
   */
  rangeEnd?: number;
  /**
   * @remarks
   * The time when the backup job started. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1642492553038
   */
  rangeStart?: number;
  /**
   * @remarks
   * The retention period of the backup snapshot. Unit: days.
   * 
   * @example
   * 730
   */
  retention?: number;
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
   * The ID of the backup snapshot.
   * 
   * @example
   * s-00047mxg17p26*****b
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: backup snapshots for Elastic Compute Service (ECS) files
   * *   **OSS**: backup snapshots for Object Storage Service (OSS) buckets
   * *   **NAS**: backup snapshots for Apsara File Storage NAS file systems
   * *   **OTS_TABLE**: backup snapshots for Tablestore instances
   * 
   * @example
   * OTS_TABLE
   */
  sourceType?: string;
  /**
   * @remarks
   * The time when the backup snapshot started. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496543
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the backup job. Valid values:
   * 
   * *   **COMPLETE**: The backup job is completed.
   * *   **PARTIAL_COMPLETE**: The backup job is partially completed.
   * *   **FAILED**: The backup job has failed.
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The name of the table in the Tablestore instance.
   * 
   * @example
   * table2
   */
  tableName?: string;
  /**
   * @remarks
   * The time when the backup snapshot was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496679
   */
  updatedTime?: number;
  /**
   * @remarks
   * The ID of the backup vault that stores the backup snapshot.
   * 
   * @example
   * v-00030j*******sn
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      backupType: 'BackupType',
      bytesTotal: 'BytesTotal',
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      createdTime: 'CreatedTime',
      instanceName: 'InstanceName',
      jobId: 'JobId',
      parentSnapshotHash: 'ParentSnapshotHash',
      rangeEnd: 'RangeEnd',
      rangeStart: 'RangeStart',
      retention: 'Retention',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      tableName: 'TableName',
      updatedTime: 'UpdatedTime',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'string',
      backupType: 'string',
      bytesTotal: 'number',
      completeTime: 'number',
      createTime: 'number',
      createdTime: 'number',
      instanceName: 'string',
      jobId: 'string',
      parentSnapshotHash: 'string',
      rangeEnd: 'number',
      rangeStart: 'number',
      retention: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      startTime: 'number',
      status: 'string',
      tableName: 'string',
      updatedTime: 'number',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOtsTableSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of backup snapshots that are displayed on the current page.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The token that is required to obtain the next page of backup snapshots.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09376812-6290-5E36-B504-E8010D72D1F0
   */
  requestId?: string;
  /**
   * @remarks
   * The backup snapshots.
   */
  snapshots?: DescribeOtsTableSnapshotsResponseBodySnapshots[];
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      limit: 'Limit',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      limit: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeOtsTableSnapshotsResponseBodySnapshots },
      success: 'boolean',
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

