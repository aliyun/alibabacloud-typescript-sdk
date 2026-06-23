// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstancesToNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to store container data and images on a data cloud disk. Valid values:
   * 
   * - `true`: Stores container data and images on a data cloud disk.
   * 
   * - `false`: Does not store container data and images on a data cloud disk.
   * 
   * Default value: `false`.
   * 
   * 
   * Data cloud disk mounting rules:
   * 
   * - If the ECS instance has data cloud disks attached and the file system of the last data cloud disk is not initialized, the system automatically formats the data cloud disk as EXT4 to store /var/lib/docker and /var/lib/kubelet.
   * - If the ECS instance has no data cloud disks attached, no new data cloud disk is mounted.
   * > If you choose to store data on a data cloud disk and the ECS instance already has data cloud disks attached, existing data on the data cloud disk is lost. Back up your data in advance.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * The list of ECS instances to be added.
   */
  instances?: string[];
  /**
   * @remarks
   * Specifies whether to retain the original instance name. Valid values:
   * 
   * - `true`: Retains the instance name.
   * 
   * - `false`: Does not retain the instance name.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The SSH logon password of the instances to be added.
   * 
   * @example
   * ******
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      formatDisk: 'format_disk',
      instances: 'instances',
      keepInstanceName: 'keep_instance_name',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatDisk: 'boolean',
      instances: { 'type': 'array', 'itemType': 'string' },
      keepInstanceName: 'boolean',
      password: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

