// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiskInit extends $dara.Model {
  /**
   * @remarks
   * The name of the disk, which uniquely identifies a disk in the node pool.
   * - If local_disk is set to false, the value must match a disk_name in scaling_group.data_disks.
   * - If local_disk is set to true, the value must be different from any disk_name in scaling_group.data_disks.
   * 
   * This parameter is required.
   * 
   * @example
   * disk0
   */
  diskName?: string;
  /**
   * @remarks
   * The configuration for the local disk. If this parameter is set to true:
   * - If the disk cannot be matched by using the ECS DiskName and symbolic links, the local disk is matched.
   * - If the disk is detected as uninitialized during boot, it is reinitialized.
   * - Both mount_target and mkfs_type must be specified or left empty at the same time.
   * - If this parameter is used in combination with mount_for_runtime and the local disk is reinitialized, the node must be removed from and then re-imported to the node pool.
   */
  localDisk?: boolean;
  /**
   * @remarks
   * The type of the file system for automatic formatting. If this parameter is left empty, the disk is not formatted.
   * 
   * @example
   * ext4
   */
  mkfsType?: string;
  /**
   * @remarks
   * The disk used to store container runtime data.
   */
  mountForRuntime?: boolean;
  /**
   * @remarks
   * The mount directory. If this parameter is left empty, the disk is not mounted.
   * 
   * @example
   * /mnt/disk0
   */
  mountTarget?: string;
  static names(): { [key: string]: string } {
    return {
      diskName: 'disk_name',
      localDisk: 'local_disk',
      mkfsType: 'mkfs_type',
      mountForRuntime: 'mount_for_runtime',
      mountTarget: 'mount_target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskName: 'string',
      localDisk: 'boolean',
      mkfsType: 'string',
      mountForRuntime: 'boolean',
      mountTarget: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

