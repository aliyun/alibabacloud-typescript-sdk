// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk extends $dara.Model {
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
   * d-5ip4c2dhmas0vjd5u1r****
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
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 100
   */
  diskSize?: number;
  /**
   * @remarks
   * The KMS key ID used by the cloud drive.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fxxxxx
   */
  encryptKeyId?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the disk.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
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
   * **system**: system disk. **data**: data disk.
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
   * name
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
   * d-5itef1wtxj961mbff8xe9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      diskName: 'DiskName',
      diskSize: 'DiskSize',
      encryptKeyId: 'EncryptKeyId',
      encrypted: 'Encrypted',
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
      diskSize: 'number',
      encryptKeyId: 'string',
      encrypted: 'boolean',
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

