// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshotsSnapshot extends $dara.Model {
  /**
   * @remarks
   * The time when snapshot creation was complete.
   * 
   * The time follows the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard in UTC. The time is displayed in the `yyyy-MM-ddThh:mmZ` format.
   * 
   * >  This parameter is valid only when the snapshot is created. During snapshot creation, the value of this parameter is the same as that of CreateTime.
   * 
   * @example
   * 2014-07-24T13:10:52Z
   */
  completedTime?: string;
  /**
   * @remarks
   * The time when the snapshot was created.
   * 
   * The time follows the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard in UTC. The time is displayed in the `yyyy-MM-ddThh:mmZ` format.
   * 
   * @example
   * 2014-07-24T13:00:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the snapshot.
   * 
   * @example
   * FinanceDept
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the snapshot is encrypted.
   * 
   * Valid values:
   * 
   * *   0: The snapshot is not encrypted.
   * *   1: The snapshot is encrypted.
   * 
   * @example
   * 1
   */
  encryptType?: number;
  /**
   * @remarks
   * The type of the file system.
   * 
   * @example
   * extreme
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The progress of the snapshot creation. The value of this parameter is expressed as a percentage.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The remaining time that is required to create the snapshot.
   * 
   * Unit: seconds.
   * 
   * @example
   * 38
   */
  remainTime?: number;
  /**
   * @remarks
   * The retention period of the auto snapshot.
   * 
   * Unit: days.
   * 
   * Valid values:
   * 
   * *   \\-1: Auto snapshots are permanently retained. After the number of auto snapshots exceeds the upper limit, the earliest auto snapshot is automatically deleted.
   * *   1 to 65536: Auto snapshots are retained for the specified days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-extreme-snapsho****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The snapshot name.
   * 
   * If you specify a name to create a snapshot, the name of the snapshot is returned. Otherwise, no value is returned for this parameter.
   * 
   * @example
   * FinanceJoshua
   */
  snapshotName?: string;
  /**
   * @remarks
   * The snapshot type. Valid values:
   * 
   * *   auto: automatically created snapshots
   * *   user: manually created snapshots
   * 
   * @example
   * user
   */
  snapshotType?: string;
  /**
   * @remarks
   * The ID of the source file system.
   * 
   * This parameter is retained even if the source file system of the snapshot is deleted.
   * 
   * @example
   * extreme-012****
   */
  sourceFileSystemId?: string;
  /**
   * @remarks
   * The capacity of the source file system.
   * 
   * Unit: GiB.
   * 
   * @example
   * 2000
   */
  sourceFileSystemSize?: number;
  /**
   * @remarks
   * The version of the source file system.
   * 
   * @example
   * 1
   */
  sourceFileSystemVersion?: string;
  /**
   * @remarks
   * The status of the snapshot.
   * 
   * Valid values:
   * 
   * *   progressing: The snapshot is being created.
   * *   accomplished: The snapshot is created.
   * *   failed: The snapshot fails to be created.
   * 
   * @example
   * accomplished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      description: 'Description',
      encryptType: 'EncryptType',
      fileSystemType: 'FileSystemType',
      progress: 'Progress',
      remainTime: 'RemainTime',
      retentionDays: 'RetentionDays',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceFileSystemId: 'SourceFileSystemId',
      sourceFileSystemSize: 'SourceFileSystemSize',
      sourceFileSystemVersion: 'SourceFileSystemVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      description: 'string',
      encryptType: 'number',
      fileSystemType: 'string',
      progress: 'string',
      remainTime: 'number',
      retentionDays: 'number',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceFileSystemId: 'string',
      sourceFileSystemSize: 'number',
      sourceFileSystemVersion: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

