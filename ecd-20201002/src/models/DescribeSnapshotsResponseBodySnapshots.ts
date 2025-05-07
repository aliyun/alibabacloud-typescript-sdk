// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @example
   * 2020-12-20T14:52:28Z
   */
  creationTime?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * ecd-g03l3tlm8djoj****
   */
  desktopId?: string;
  /**
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @example
   * 30
   */
  remainTime?: number;
  restorePointId?: string;
  restorePointName?: string;
  /**
   * @example
   * s-2zeipxmnhej803x7****
   */
  snapshotId?: string;
  /**
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @example
   * USER
   */
  snapshotType?: string;
  /**
   * @example
   * 150
   */
  sourceDiskSize?: string;
  /**
   * @example
   * SYSTEM
   */
  sourceDiskType?: string;
  /**
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

