// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequestCloudDisks extends $dara.Model {
  /**
   * @remarks
   * If **Resource Type** is **Public Resource** or if **Resource Quota** is subscription-based general-purpose computing resources (CPU cores ≥ 2 and memory ≥ 4 GB, or configured with GPU):
   * 
   * Each instance has a free system disk quota of 100 GiB for persistent storage. **If the DSW instance is stopped and not launched for more than 15 days, the disk is cleared**. The disk can be expanded. For specific pricing, refer to the console.
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
   * Disk type:
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
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      subType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

