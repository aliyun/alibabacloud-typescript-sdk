// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The time when the snapshot was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-20T14:52:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The snapshot description.
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
   * The progress of creating the cloud computer.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The remaining time required to complete snapshot creation. Unit: seconds.
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
   * Data Disk Backup
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
   * The snapshot name.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * The snapshot type.
   * 
   * Valid values:
   * 
   * *   AUTO: an automatic snapshot.
   * *   USER: a manual snapshot.
   * 
   * @example
   * USER
   */
  snapshotType?: string;
  /**
   * @remarks
   * The size of the source disk. Unit: GiB.
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
   * *   SYSTEM: a system disk.
   * *   DATA: a data disk.
   * 
   * @example
   * SYSTEM
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The snapshot status.
   * 
   * Valid values:
   * 
   * *   PROGRESSING: The snapshot is being created.
   * *   FAILED: The snapshot failed to be created.
   * *   ACCOMPLISHED: The snapshot is created.
   * 
   * @example
   * ACCOMPLISHED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      desktopId: 'DesktopId',
      progress: 'Progress',
      remainTime: 'RemainTime',
      restorePointId: 'RestorePointId',
      restorePointName: 'RestorePointName',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      desktopId: 'string',
      progress: 'string',
      remainTime: 'number',
      restorePointId: 'string',
      restorePointName: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskSize: 'string',
      sourceDiskType: 'string',
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

export class DescribeSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.If NextToken is empty, no next page exists.
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

