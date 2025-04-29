// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupRequestLaunchConfigurationDataDisk extends $dara.Model {
  /**
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the system disk. Valid values:
   * 
   * *   true: force attaches the disk to the instance.
   * *   false: disables the performance burst feature for the system disk.
   * 
   * >  This parameter is available only if you set LaunchConfiguration.DataDisk.N.Category to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of data disk N. Valid values of N: 1 to 16. Valid values:
   * 
   * *   cloud_efficiency: utra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: enterprise SSD (ESSD).
   * *   cloud: basic disk.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency. For non-I/O optimized instances, the default value is cloud.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release data disk N when the instance to which the data disk is attached is released. Valid values:
   * 
   * *   true: releases data disk N when the associated instance is released.
   * *   false: does not release data disk N when the associated instance is released.
   * 
   * Default value: true.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of data disk N. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * DataDisk_Description
   */
  description?: string;
  /**
   * @remarks
   * The mount point of data disk N. When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * /dev/vd1
   */
  device?: string;
  /**
   * @remarks
   * The name of data disk N. The name must be 2 to 128 characters in length The name must start with a letter but cannot start with `http://` or `https://`. The name can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * This parameter is left empty by default.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
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
   * null
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt data disk N. Valid values:
   * 
   * *   true: encrypts system disk N.
   * *   false: does not encrypt system disk N.
   * 
   * Default value: false.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key to use for data disk N. When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The performance level of the Enterprise SSD (ESSD) to use as data disk N. The value of N in this parameter must be the same as the value of N in `LaunchConfiguration.DataDisk.N.Category`. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10000 random read/write IOPS.
   * *   PL1 (default): A single ESSD can deliver up to 50000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1000000 random read/write IOPS.
   * 
   * For information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
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
   * >  This parameter is available only if you set LaunchConfiguration.DataDisk.N.Category to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * *   Valid values if you set LaunchConfiguration.DataDisk.N.Category to cloud_efficiency: 20 to 32768.
   * 
   * *   Valid values if you set LaunchConfiguration.DataDisk.N.Category to cloud_ssd: 20 to 32768.
   * 
   * *   Valid values if you set LaunchConfiguration.DataDisk.N.Category to cloud_essd: vary based on the `LaunchConfiguration.DataDisk.N.PerformanceLevel` value.
   * 
   *     *   Valid values if you set LaunchConfiguration.DataDisk.N.PerformanceLevel to PL0: 40 to 32768.
   *     *   Valid values if you set LaunchConfiguration.DataDisk.N.PerformanceLevel to PL1: 20 to 32768.
   *     *   Valid values if you set LaunchConfiguration.DataDisk.N.PerformanceLevel to PL2: 461 to 32768.
   *     *   Valid values if you set LaunchConfiguration.DataDisk.N.PerformanceLevel to PL3: 1261 to 32768.
   * 
   * *   Valid values if you set LaunchConfiguration.DataDisk.N.Category to cloud: 5 to 2000.
   * 
   * >  The value of this parameter must be greater than or equal to the size of the snapshot specified by `LaunchConfiguration.DataDisk.N.SnapshotId`.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot to use to create data disk N. Valid values of N: 1 to 16.
   * 
   * If you specify this parameter, `LaunchConfiguration.DataDisk.N.Size` is ignored. The size of data disk N is the same as that of the snapshot specified by this parameter. Use snapshots created after July 15, 2013. Otherwise, an error is returned and your request is rejected.
   * 
   * When both LaunchTemplateId and LaunchConfiguration.\\* parameters are specified, LaunchTemplateId takes precedence.
   * 
   * @example
   * s-bp17441ohwka0yuh****
   */
  snapshotId?: string;
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
      kmsKeyId: 'KmsKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
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
      encrypted: 'boolean',
      kmsKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

