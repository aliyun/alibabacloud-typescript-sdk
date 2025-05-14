// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstancesToNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to store container data and images on data disks. Valid values:
   * 
   * *   `true`: stores container data and images on data disks.
   * *   `false`: does not store container data or images on data disks.
   * 
   * Default value: `false`.
   * 
   * How to mount a data disk:
   * 
   * *   If the ECS instances are already mounted with data disks and the file system of the last data disk is not initialized, the system automatically formats this data disk to ext4 and mounts it to /var/lib/docker and /var/lib/kubelet.
   * *   If no data disk is attached to the ECS instances, the system does not purchase a new data disk.
   * 
   * > If you choose to store container data and images on a data disk and the data disk is already mounted to the ECS instance, the existing data on the data disk will be cleared. You can back up the disk to avoid data loss.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * The IDs of the instances to be added.
   */
  instances?: string[];
  /**
   * @remarks
   * Specifies whether to retain the instance name. Valid values:
   * 
   * *   `true`: retains the instance name.
   * *   `false`: does not retain the instance name.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The SSH password that is used to log on to the instance.
   * 
   * @example
   * Hello1234
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

