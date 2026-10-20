// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiskInit extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for a disk in the node pool.
   * - When local_disk is set to false, the value must match one of the disk_name values in scaling_group.data_disks.
   * - When local_disk is set to true, the value must be different from all disk_name values in scaling_group.data_disks.
   * 
   * This parameter is required.
   * 
   * @example
   * disk0
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether this configuration applies to a local disk. When this parameter is set to true:
   * - If the disk cannot be matched by using the ECS DiskName and symbolic links, the local disk can be matched.
   * - If the disk is detected as uninitialized during boot, it is reinitialized.
   * - Both mount_target and mkfs_type must be set or left empty at the same time.
   * - When used in combination with mount_for_runtime, if the local disk is reinitialized, the node must be removed from and then re-added to the node pool.
   */
  localDisk?: boolean;
  /**
   * @remarks
   * The type of the file system for automatic formatting. An empty value indicates that the disk is not formatted.
   * 
   * @example
   * ext4
   */
  mkfsType?: string;
  /**
   * @remarks
   * Specifies whether container runtime data is stored on the disk.
   */
  mountForRuntime?: boolean;
  /**
   * @remarks
   * The mount directory. An empty value indicates that the disk is not mounted.
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

