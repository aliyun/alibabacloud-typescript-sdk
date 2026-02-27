// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataDisk extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically mount the data disk.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoFormat?: boolean;
  /**
   * @remarks
   * The ID of the automatic snapshot policy. The system performs automatic backup for a cloud disk based on the specified automatic snapshot policy.
   * 
   * By default, this parameter is empty, which indicates that automatic backup is disabled.
   * 
   * @example
   * sp-2zej1nogjvovnz4z****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the burst feature for the data disk. Valid values:
   * 
   * *   `true`: enables the burst feature.
   * *   `false`: disables the burst feature for the data disk.
   * 
   * This parameter is available only if `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of data disk. Valid values:
   * 
   * *   `cloud`: basic disk.
   * *   `cloud_efficiency`: ultra disk
   * *   `cloud_ssd`: standard SSD.
   * *   `cloud_essd`: Enterprise ESSD (ESSD).
   * *   `cloud_auto`: ESSD AutoPL disk.
   * *   `cloud_essd_entry`: ESSD Entry disk.
   * *   `elastic_ephemeral_disk_premium`: premium elastic ephemeral disk.
   * *   `elastic_ephemeral_disk_standard`: standard elastic ephemeral disk.
   * 
   * Default value: `cloud_efficiency`.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The mount target of the data disk. If you do not specify this parameter, the system automatically assigns a mount target when you create an Elastic Compute Service (ECS) instance. Valid values: /dev/xvdb to /dev/xvdz.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The data disk name. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * DataDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the data disk. Valid values:
   * 
   * *   `true`: encrypts the data disk.
   * *   `false`: does not encrypt the data disk.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @remarks
   * The file system that is mounted. This parameter takes effect only if auto_format is set to true. Valid values: ext4 and xfs.
   * 
   * @example
   * ext4
   * 
   * @deprecated
   */
  fileSystem?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used to encrypt the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The path to which the data disk is mounted. You must specify a valid path.
   * 
   * @example
   * /mnt/path1
   * 
   * @deprecated
   */
  mountTarget?: string;
  /**
   * @remarks
   * The performance level (PL) of the data disk. This parameter takes effect only for an ESSD. This parameter is related to the disk size. For more information, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The preset IOPS of the data disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * This parameter is available only if `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 1000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB.
   * 
   * Valid values: 40 to 32768.
   * 
   * Default value: `120`.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot that you want to use to create the data disk. If this parameter is specified, the specified size of the data disk is ignored. The size of the disk equals the size of the specified snapshot. If the snapshot was created on or before July 15, 2013, the API request is rejected and the InvalidSnapshot.TooOld message is returned.
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

