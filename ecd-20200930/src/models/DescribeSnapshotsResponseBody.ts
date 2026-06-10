// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The point in time at which the snapshot was created. The time follows the [ISO 8601](t10049.xdita#) standard in the `yyyy-mm-ddthh:mm:ssz` format. The time is displayed in UTC.
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
   * The snapshot creation time follows the [ISO 8601](t10049.xdita#) standard. It uses UTC+0 time and is formatted as `yyyy-mm-ddThh:mm:ssZ`.
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
   * The ID of the cloud desktop to which the snapshot belongs.
   * 
   * @example
   * ecd-g03l3tlm8djoj****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * test
   */
  desktopName?: string;
  /**
   * @remarks
   * The status of the cloud desktop.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * Status of the disk to which the snapshot belongs.
   * 
   * @example
   * Available
   */
  diskStatus?: string;
  envId?: string;
  envType?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
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
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The remaining time to complete snapshot creation. Unit: seconds.
   * 
   * > When `Status` is `PROGRESSING`, the value of `RemainTime` is `-1`. This indicates that the system is calculating the remaining time.
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
   * 数据盘备份
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
   * @example
   * SYSTEM
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The status of the snapshot.
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
   * The ID of the Key Management Service (KMS) key that is used when disk encryption is enabled. You can call the [](t22712.xdita#)operation to query the list of KMS keys.
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
      envId: 'EnvId',
      envType: 'EnvType',
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
      envId: 'string',
      envType: 'string',
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

export class DescribeSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that marks the start of the next page of results. If NextToken is empty, no more pages exist.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51592A88-0F2C-55E6-AD2C-2AD9C10D****
   */
  requestId?: string;
  /**
   * @remarks
   * A collection of snapshots.
   */
  snapshots?: DescribeSnapshotsResponseBodySnapshots[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshots },
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

