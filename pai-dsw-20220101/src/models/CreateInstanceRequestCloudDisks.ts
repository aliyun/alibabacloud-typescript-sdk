// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceRequestCloudDisksStatus } from "./CreateInstanceRequestCloudDisksStatus";


export class CreateInstanceRequestCloudDisks extends $dara.Model {
  /**
   * @remarks
   * If **Resource Type** is **Public Resource** or if **Resource Quota** is subscription-based general-purpose computing resources (CPU cores ≥ 2 and memory ≥ 4 GB, or configured with GPU):
   * 
   * Each instance has a free system disk of 100 GiB for persistent storage. **If the DSW instance is stopped and not launched for more than 15 days, the disk is cleared**. The disk can be expanded. For specific pricing, refer to the console.
   * 
   * **
   * 
   * **Warning**
   * 
   * *   After the expansion, you cannot reduce the storage space. Proceed with caution.
   * 
   * *   After the expansion, the disk is not cleared if the instance is stopped for more than 15 days. However, it will continue to incur fees.
   * 
   * *   If you delete the instance, the system disk is also released and the data stored in the disk is deleted. Make sure that you have backed up your data before you delete the instance.
   * 
   * If you need persistent storage, you can **mount a dataset** or add the OSS, NAS, or CPFS path to the **storage path**.
   * 
   * @example
   * 100Gi
   */
  capacity?: string;
  /**
   * @remarks
   * The mount path of the cloud disk.
   * 
   * @example
   * /mnt/systemDisk
   */
  mountPath?: string;
  /**
   * @remarks
   * The subpath of the cloud disk that is mounted to the instance.
   * 
   * @example
   * workspace
   */
  path?: string;
  /**
   * @remarks
   * The disk or snapshot usage.
   */
  status?: CreateInstanceRequestCloudDisksStatus;
  /**
   * @remarks
   * The cloud disk type.
   * 
   * *   rootfs: Mounts the disk as a system disk. The system environment is stored on the disk.
   * 
   * @example
   * rootfs
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      mountPath: 'MountPath',
      path: 'Path',
      status: 'Status',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      mountPath: 'string',
      path: 'string',
      status: CreateInstanceRequestCloudDisksStatus,
      subType: 'string',
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

