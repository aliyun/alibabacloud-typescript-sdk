// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of data disk N. Valid values:
   * 
   * *   cloud_efficiency: utra disk.
   * 
   * *   cloud_ssd: standard SSD.
   * 
   * *   cloud_essd: ESSD.
   * 
   * *   cloud: basic disk.
   * 
   * *   cloud_auto: ESSD AutoPL disk.
   * 
   * *   cloud_essd_entry: ESSD Entry disk.
   * 
   *     **
   * 
   *     **Note** This parameter can be set to `cloud_essd_entry` only when `InstanceType` is set to `ecs.u1` or `ecs.e`.
   * 
   * *   elastic_ephemeral_disk_standard: standard elastic ephemeral disk.
   * 
   * *   elastic_ephemeral_disk_premium: premium elastic ephemeral disk.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release data disk N when the instance is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of data disk N. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The mount point of data disk N.
   * 
   * >  This parameter is applicable to scenarios in which a full image is used to create instances. A full image is an image that contains an operating system, application software, and business data. For these scenarios, you can set this parameter to the mount point of data disk N contained in the full image and modify the `DataDisk.N.Size` and `DataDisk.N.Category` parameters to change the category and size of data disk N created based on the image.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of data disk N. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * DataDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data disk N. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key to use for data disk N.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level of the ESSD to use as data disk N. The value of N must be the same as that in `DataDisk.N.Category` when DataDisk.N.Category is set to cloud_essd. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1 (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * *   Valid values if you set DataDisk.N.Category to cloud_efficiency: 20 to 32768.
   * 
   * *   Valid values if you set DataDisk.N.Category to cloud_ssd: 20 to 32768.
   * 
   * *   Valid values if you set DataDisk.N.Category to cloud_essd: vary based on the `DataDisk.N.PerformanceLevel` value.
   * 
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL0: 1 to 65536.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL1: 20 to 65536.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL2: 461 to 65536.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL3: 1261 to 65536.
   * 
   * *   Valid values if you set DataDisk.N.Category to cloud: 5 to 2000.
   * 
   * >  The value of this parameter must be greater than or equal to the size of the snapshot specified by `SnapshotId`.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16.
   * 
   * *   If `DataDisk.N.SnapshotId` is specified, `DataDisk.N.Size` is ignored. The data disk is created based on the size of the specified snapshot.
   * *   Use snapshots created on or after July 15, 2013. Otherwise, an error is returned and your request is rejected.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster to which data disk N belongs. If you want to use a disk in a dedicated block storage cluster as data disk N when you create the instance, specify this parameter.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
      snapshotId: 'SnapshotId',
      storageClusterId: 'StorageClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      size: 'number',
      snapshotId: 'string',
      storageClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

