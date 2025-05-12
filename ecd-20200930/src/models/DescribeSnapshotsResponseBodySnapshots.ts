// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The point in time at which the snapshot was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-mm-ddthh:mm:ssz` format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-20T14:52:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The user who creates the snapshot.
   * 
   * @example
   * Administrator
   */
  creator?: string;
  /**
   * @remarks
   * The time when the snapshot was deleted. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-mm-ddthh:mm:ssz` format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-20T14:52:28Z
   */
  deletionTime?: string;
  /**
   * @remarks
   * The description of the snapshot.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud computer to which the snapshot belongs.
   * 
   * @example
   * ecd-g03l3tlm8djoj****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * test
   */
  desktopName?: string;
  /**
   * @remarks
   * The status of the cloud computer.
   * 
   * Valid values:
   * 
   * *   Stopped
   * *   Starting
   * *   Rebuilding
   * *   Running
   * *   Stopping
   * *   Expired
   * *   Deleted
   * *   Pending
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  diskStatus?: string;
  osType?: string;
  /**
   * @remarks
   * The progress of creating the snapshot. Unit: %.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid values:
   * 
   * *   HDX: High-definition Experience (HDX) protocol
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ASP: in-house Adaptive Streaming Protocol (ASP)
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The remaining time that is required to complete the snapshot creation. Unit: seconds.
   * 
   * >  When the `Status` value is `PROGRESSING`, the `RemainTime` value is `-1`. A value of -1 indicates that the system is calculating the remaining time.
   * 
   * @example
   * 30
   */
  remainTime?: number;
  /**
   * @remarks
   * The ID of the restore point.
   * 
   * @example
   * rp-btgmaa20wkcju****
   */
  restorePointId?: string;
  /**
   * @remarks
   * The name of the restore point.
   * 
   * @example
   * DataDiskBackup
   */
  restorePointName?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-2zeipxmnhej803x7****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The name of the snapshot.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * The type of the snapshot.
   * 
   * Valid values:
   * 
   * *   AUTO: automatic snapshot
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   USER: manual snapshot
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * USER
   */
  snapshotType?: string;
  /**
   * @remarks
   * The capacity of the source disk. Unit: GiB.
   * 
   * @example
   * 150
   */
  sourceDiskSize?: string;
  /**
   * @remarks
   * The type of the source disk.
   * 
   * Valid values:
   * 
   * *   SYSTEM: system disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DATA: data disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * SYSTEM
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The status of the snapshot.
   * 
   * Valid values:
   * 
   * *   PROGRESSING: The snapshot is being created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   FAILED: The snapshot fails to be created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ACCOMPLISHED: The snapshot is created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * ACCOMPLISHED
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used when disk encryption is enabled. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to query the list of KMS keys.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      creator: 'Creator',
      deletionTime: 'DeletionTime',
      description: 'Description',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      diskStatus: 'DiskStatus',
      osType: 'OsType',
      progress: 'Progress',
      protocolType: 'ProtocolType',
      remainTime: 'RemainTime',
      restorePointId: 'RestorePointId',
      restorePointName: 'RestorePointName',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      creator: 'string',
      deletionTime: 'string',
      description: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      diskStatus: 'string',
      osType: 'string',
      progress: 'string',
      protocolType: 'string',
      remainTime: 'number',
      restorePointId: 'string',
      restorePointName: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskSize: 'string',
      sourceDiskType: 'string',
      status: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

