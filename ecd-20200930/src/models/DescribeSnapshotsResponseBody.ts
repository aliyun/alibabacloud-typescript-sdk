// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The time when the snapshot was created. The time is displayed in UTC and follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-mm-ddthh:mm:ssz` format.
   * 
   * @example
   * 2020-12-20T14:52:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * Administrator
   */
  creator?: string;
  /**
   * @remarks
   * The time when the snapshot was created. The time is displayed in UTC+0 in the `yyyy-mm-ddthh:mm:ssz` format in accordance with the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard.
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
   * The status of the disk to which the snapshot belongs.
   * 
   * @example
   * Available
   */
  diskStatus?: string;
  envId?: string;
  envType?: string;
  jvsId?: string;
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
   * The creation progress of the snapshot. Unit: percentage.
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
   * The remaining time required to create the snapshot. Unit: seconds.
   * 
   * > If `Status` is `PROGRESSING`, the value of `RemainTime` is `-1`, which indicates that the remaining time is being calculated.
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
   * Data cloud disk backup
   */
  restorePointName?: string;
  /**
   * @remarks
   * The ID of the snapshot.
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
   * The snapshot type.
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
   * The snapshot status.
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
   * The ID of the KMS key used when disk encryption is enabled. You can obtain the key ID by calling the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation.
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
      jvsId: 'JvsId',
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
      jvsId: 'string',
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
   * The pagination token for the next query. If the value is empty, no more results are available.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 51592A88-0F2C-55E6-AD2C-2AD9C10D****
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshots.
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

