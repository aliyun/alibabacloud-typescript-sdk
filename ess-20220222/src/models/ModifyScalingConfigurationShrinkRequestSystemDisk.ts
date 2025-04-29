// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingConfigurationShrinkRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy that you want to apply to the system disk.
   * 
   * @example
   * sp-bp12m37ccmxvbmi5****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the Burst feature for the system disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  If you set `SystemDisk.Category` to `cloud_auto`, you can specify this parameter.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   cloud: basic disk.
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: Enterprise SSD (ESSD).
   * *   ephemeral_ssd: local SSD.
   * 
   * If you specify SystemDisk.Category, you cannot specify `SystemDiskCategories`. If you do not specify SystemDisk.Category or `SystemDiskCategories`, the default value of SystemDisk.Category is used. The default value for non-I/O optimized instances of Generation I instance families is cloud. The default value for other instances is cloud_efficiency.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * The description of the system disk. The description must be 2 to 256 characters in length. The description can contain letters but cannot start with `http://` or `https://`.
   * 
   * @example
   * Test system disk.
   */
  description?: string;
  /**
   * @remarks
   * The name of the system disk. The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with `http:// `or `https://`. 
   * 
   * Default value: null.
   * 
   * @example
   * cloud_ssdSystem
   */
  diskName?: string;
  /**
   * @remarks
   * The encryption algorithm of the system disk. Valid values:
   * 
   * *   AES-256
   * *   SM4-128
   * 
   * Default value: AES-256.
   * 
   * @example
   * AES-256
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the system disk. Valid values:
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
   * The ID of the KMS key that you want to use to encrypt the system disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk that is an ESSD. Valid values:
   * 
   * *   PL0: An ESSD can provide up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can provide up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can provide up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
   * 
   * >  For more information about how to select ESSD PLs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The IOPS metric that is preconfigured for the system disk.
   * 
   * > IOPS measures the number of read and write operations that an EBS device can process per second.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
   * 
   * *   Basic disk: 20 to 500.
   * 
   * *   ESSD: Valid values vary based on the performance level of the ESSD.
   * 
   *     *   PL0 ESSD: 1 to 2048.
   *     *   PL1 ESSD: 20 to 2048.
   *     *   PL2 ESSD: 461 to 2048.
   *     *   PL3 ESSD: 1261 to 2048.
   * 
   * *   ESSD AutoPL disk: 1 to 2048.
   * 
   * *   Other disk categories: 20 to 2048.
   * 
   * The value of this parameter must be at least 1 and greater than or equal to the image size.
   * 
   * @example
   * 50
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      description: 'Description',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      description: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

