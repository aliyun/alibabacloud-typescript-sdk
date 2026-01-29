// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiskInit extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * disk0
   */
  diskName?: string;
  localDisk?: boolean;
  /**
   * @example
   * ext4
   */
  mkfsType?: string;
  mountForRuntime?: boolean;
  /**
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

