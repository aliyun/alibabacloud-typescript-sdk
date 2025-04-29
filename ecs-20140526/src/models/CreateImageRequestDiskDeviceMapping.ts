// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageRequestDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name of disk N in the custom image. Valid values:
   * 
   * *   The device name of the system disk must be /dev/xvda.
   * *   The device names of the data disks are unique and range from /dev/xvdb to /dev/xvdz in alphabetical order.
   * 
   * @example
   * /dev/vdb
   */
  device?: string;
  /**
   * @remarks
   * The type of disk N in the custom image. You can specify this parameter to create the system disk of the custom image from a data disk snapshot. If you do not specify this parameter, the disk type is determined by the corresponding snapshot. Valid values:
   * 
   * *   system: system disk. You can specify only one snapshot to use to create the system disk in the custom image.
   * *   data: data disk. You can specify up to 16 snapshots to use to create data disks in the custom image.
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The size of disk N in the custom image. Unit: GiB. The valid values and default value of DiskDeviceMapping.N.Size vary based on the value of DiskDeviceMapping.N.SnapshotId.
   * 
   * *   If you leave DiskDeviceMapping.N.SnapshotId empty, DiskDeviceMapping.N.Size has the following valid values and default values:
   * 
   *     *   For basic disks, the valid values range from 5 to 2000, and the default value is 5.
   *     *   For other disks, the valid values range from 20 to 32768, and the default value is 20.
   * 
   * *   If you specify DiskDeviceMapping.N.SnapshotId, the value of DiskDeviceMapping.N.Size must be greater than or equal to the size of the specified snapshot. The default value of DiskDeviceMapping.N.Size is the size of the specified snapshot.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * s-bp17441ohwkdca0****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      diskType: 'DiskType',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      diskType: 'string',
      size: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

