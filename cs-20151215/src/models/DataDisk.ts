// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataDisk extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to mount the data cloud disk.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoFormat?: boolean;
  /**
   * @remarks
   * The ID of the automatic snapshot policy. The cloud disk is automatically backed up based on the snapshot policy.
   * 
   * Default value: empty, which indicates that automatic backup is disabled.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable performance burst for the data cloud disk. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The type of the data cloud disk. Valid values:
   * 
   * - cloud: Basic cloud disk.
   * - cloud_efficiency: Ultra disk.
   * - cloud_ssd: Standard SSD.
   * - cloud_essd: ESSD.
   * - cloud_auto: ESSD AutoPL cloud disk.
   * - cloud_essd_entry: ESSD Entry cloud disk.
   * - elastic_ephemeral_disk_premium: Premium elastic ephemeral disk.
   * - elastic_ephemeral_disk_standard: Standard elastic ephemeral disk.
   * 
   * Default value: cloud_efficiency.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The mount point of the data cloud disk. If you do not specify this parameter, the system will allocate a mount point by default during the automatic creation of an ECS instance. The mount point starts from /dev/xvdb and ends at /dev/xvdz.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data cloud disk. The name must be 2 to 128 characters in length and can contain letters and Chinese characters. It must start with a letter or a Chinese character and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * DataDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the data cloud disk. Valid values:
   * 
   * - true: Encrypts the data cloud disk.
   * - false: Does not encrypt the data cloud disk.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @remarks
   * The type of the file system to be mounted. This parameter takes effect only when auto_format is set to true. Valid values: ext4 and xfs.
   * 
   * @example
   * ext4
   * 
   * @deprecated
   */
  fileSystem?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used to encrypt the data cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The mount path. It must be a valid file path.
   * 
   * @example
   * /mnt/path1
   * 
   * @deprecated
   */
  mountTarget?: string;
  /**
   * @remarks
   * The performance level of the node data cloud disk. This parameter takes effect only for ESSDs, not standard SSDs. The performance level is related to the disk size. For more information, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read and write IOPS of the data cloud disk. Valid values: 0 to min{50,000, 1000 × Capacity - Baseline performance}.
   * Baseline performance = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB.
   * 
   * Valid values: 40 to 32768.
   * 
   * Default value: 120.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create the data cloud disk. If you specify this parameter, the DataDisks.Size parameter is ignored, and the actual size of the created disk is the same as the size of the specified snapshot. If the snapshot was created on or before July 15, 2013, the call is rejected and the InvalidSnapshot.TooOld error code is returned.
   * 
   * @example
   * s-280s7****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoFormat: 'auto_format',
      autoSnapshotPolicyId: 'auto_snapshot_policy_id',
      burstingEnabled: 'bursting_enabled',
      category: 'category',
      device: 'device',
      diskName: 'disk_name',
      encrypted: 'encrypted',
      fileSystem: 'file_system',
      kmsKeyId: 'kms_key_id',
      mountTarget: 'mount_target',
      performanceLevel: 'performance_level',
      provisionedIops: 'provisioned_iops',
      size: 'size',
      snapshotId: 'snapshot_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoFormat: 'boolean',
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      device: 'string',
      diskName: 'string',
      encrypted: 'string',
      fileSystem: 'string',
      kmsKeyId: 'string',
      mountTarget: 'string',
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

