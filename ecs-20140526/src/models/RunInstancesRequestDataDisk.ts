// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy to apply to data disk N.
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for data disk N. Valid values:
   * 
   * *   true: enables the performance burst feature for the data disk.
   * *   false: disables the performance burst feature for the data disk.
   * 
   * >  This parameter is available only if you set DataDisk.N.Category to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of data disk N. Valid values:
   * 
   * *   cloud_efficiency: ultra disk.
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
   * Specifies whether to release data disk N when the associated instance is released. Valid values:
   * 
   * *   true: releases the data disk when the associated instance is released.
   * *   false: does not release the data disk when the associated instance is released.
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
   * DataDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The mount point of data disk N. The mount points are named based on the number of data disks:
   * 
   * *   1st to 25th data disks: /dev/xvd`[b-z]`.
   * *   From the 26th data disk on: /dev/xvd`[aa-zz]`. For example, the 26th data disk is named /dev/xvdaa, the 27th data disk is named /dev/xvdab, and so on.
   * 
   * >  This parameter is applicable to scenarios in which a full image is used to create instances. A full image is an image that contains an operating system, application software, and business data. For these scenarios, you can set this parameter to the mount point of data disk N in the full image and modify `DataDisk.N.Size` and `DataDisk.N.Category` to change the category and size of data disk N created based on the image.
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
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * aes-256
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data disk N. Valid values:
   * 
   * *   true: encrypts the data disk.
   * *   false: does not encrypt the data disk.
   * 
   * Default value: false.
   * 
   * >  When you use a shared encrypted image to create the disk based on an encrypted snapshot, you must set Encrypted to true to ensure that the disk uses an encryption key of your own.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key to use for data disk N.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
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
   * For information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk to use as data disk N. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.
   * 
   * Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * >  This parameter is available only if you set DataDisk.N.Category to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_efficiency: 20 to 32768.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_ssd: 20 to 32768.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_essd: vary based on the value of `DataDisk.N.PerformanceLevel`.
   * 
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL0: 1 to 65536.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL1: 20 to 65536.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL2: 461 to 65536.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL3: 1261 to 65536.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud: 5 to 2000.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_auto: 1 to 65536.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_essd_entry: 10 to 32768.
   * 
   * >  The value of this parameter must be greater than or equal to the size of the snapshot specified by `DataDisk.N.SnapshotId`.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16.
   * 
   * When `DataDisk.N.SnapshotId` is specified, `DataDisk.N.Size` is ignored. The data disk is created with the size of the specified snapshot. Use snapshots created after July 15, 2013. Otherwise, an error is returned and your request is rejected.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster to which data disk N belongs. If you want to use a disk in a dedicated block storage cluster as data disk N when you create the instance, you must specify this parameter.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
      storageClusterId: 'StorageClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
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

