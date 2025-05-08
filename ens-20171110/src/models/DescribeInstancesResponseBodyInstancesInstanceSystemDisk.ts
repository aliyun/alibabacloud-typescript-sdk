// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the cloud disk or local disk. Valid values:
   * 
   * *   **file**: local disk.
   * *   **pangu**: ultra disk.
   * *   **local_hdd**: local HDD.
   * 
   * @example
   * file
   */
  category?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-5ip4c2dhmas0rn7rt0p9****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * DiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The size of the disk. Unit: MiB.
   * 
   * @example
   * 51200
   */
  size?: number;
  /**
   * @remarks
   * The extended field of the disk category. Valid values:
   * 
   * *   **file**: local disk.
   * *   **pangu**: ultra disk.
   * *   **local_hdd**: local HDD.
   * 
   * @example
   * pangu
   */
  deviceType?: string;
  /**
   * @remarks
   * The type of the cloud disk or local disk. Valid values:
   * 
   * *   **system**: system disk.
   * *   **data**: data disk.
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * DiskName
   */
  name?: string;
  /**
   * @remarks
   * The size of the disk. Unit: MiB.
   * 
   * @example
   * 20480
   */
  storage?: number;
  /**
   * @remarks
   * The UUID of the disk.
   * 
   * @example
   * d-5ip4c2dhmas0rn7rt0p96****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      diskName: 'DiskName',
      size: 'Size',
      deviceType: 'device_type',
      diskType: 'disk_type',
      name: 'name',
      storage: 'storage',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
      diskName: 'string',
      size: 'number',
      deviceType: 'string',
      diskType: 'string',
      name: 'string',
      storage: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

