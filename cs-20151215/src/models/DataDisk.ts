// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataDisk extends $dara.Model {
  /**
   * @example
   * true
   * 
   * @deprecated
   */
  autoFormat?: boolean;
  /**
   * @example
   * sp-2zej1nogjvovnz4z****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @example
   * DataDiskName
   */
  diskName?: string;
  /**
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @example
   * ext4
   * 
   * @deprecated
   */
  fileSystem?: string;
  /**
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  kmsKeyId?: string;
  /**
   * @example
   * /mnt/path1
   * 
   * @deprecated
   */
  mountTarget?: string;
  /**
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @example
   * 1000
   */
  provisionedIops?: number;
  /**
   * @example
   * 40
   */
  size?: number;
  /**
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

