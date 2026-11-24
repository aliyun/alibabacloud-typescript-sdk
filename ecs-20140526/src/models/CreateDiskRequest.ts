// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiskRequestArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * 1000000000
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * hide
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * hide
   */
  rolearn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      roleType: 'RoleType',
      rolearn: 'Rolearn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'number',
      roleType: 'string',
      rolearn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the disk. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the disk. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * hide
   */
  advancedFeatures?: string;
  /**
   * @remarks
   * > This parameter is not available.
   */
  arn?: CreateDiskRequestArn[];
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: yes.
   * - false: no.
   * 
   * > This parameter is supported only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The disk description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The category of the data disk. Valid values:
   * 
   * - cloud: basic disk.
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * - cloud_regional_disk_auto: regional Enterprise SSD (ESSD).
   * - elastic_ephemeral_disk_standard: elastic ephemeral disk - standard edition.
   * - elastic_ephemeral_disk_premium: elastic ephemeral disk - Premium Edition.
   * 
   * Default value: cloud.
   * 
   * @example
   * cloud_ssd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The disk name. The name must be 2 to 128 characters in length and can contain Unicode letters (including English and Chinese characters) and ASCII digits (0-9). It can contain colons (:), underscores (_), periods (.), and hyphens (-). It must start with a Unicode letter.
   * 
   * Default value: empty.
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * hide
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the disk. Valid values:
   * 
   * - true: yes.
   * - false: no.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the subscription instance to which the disk is automatically attached. Specify this parameter to create a subscription disk and attach it to the specified subscription instance.
   * 
   * - After you specify the instance ID, the `ResourceGroupId`, `Tag.N.Key`, `Tag.N.Value`, `ClientToken`, and `KMSKeyId` parameters are ignored.
   * - You cannot specify both `ZoneId` and `InstanceId`.
   * 
   * Default value: empty. An empty value indicates that a pay-as-you-go disk is created. The region and zone of the disk are determined by the `RegionId` and `ZoneId` parameters.
   * 
   * @example
   * i-bp18pnlg1ds9rky4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used to encrypt the disk.
   * 
   * > If `Encrypted` is set to true and `KMSKeyId` is not specified, the default key is used for encryption, and the `KMSKeyId` value is returned after the disk is created.
   * > - - If the disk is created from an unshared encrypted snapshot, the encryption key used for the snapshot is used by default.
   * > - - If the disk is created from a shared encrypted snapshot, the service key is used by default.
   * > - - If the disk is created in a region where account-level default encryption for Block Storage is enabled, the specified account-level key is used by default.
   * > - - In other cases, the service key is used by default.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40826X
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the multi-attach feature. Valid values:
   * 
   * - Disabled: disables the feature.
   * - Enabled: enables the feature. Only enterprise SSDs support this feature (standard SSDs do not).
   * 
   * Default value: Disabled.
   * 
   * > Disks with the multi-attach feature enabled support only the pay-as-you-go billing method. Therefore, when `MultiAttach` is set to `Enabled`, you cannot specify the `InstanceId` parameter. You can call [AttachDisk](https://help.aliyun.com/document_detail/25515.html) to attach the disk after it is created. Note that disks with the multi-attach feature enabled can only be attached as data disks.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The performance level of the enterprise SSD (standard SSDs do not support this parameter). Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * For more information about how to select an enterprise SSD performance level, see [enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read and write IOPS for a single ESSD AutoPL disk. Valid values:
   * 
   * - If the disk size is less than or equal to 3 GiB, you cannot configure provisioned performance.
   * 
   * - If the disk size is greater than or equal to 4 GiB: 0 to min{(1,000 IOPS/GiB × disk size - baseline IOPS), 50,000}.
   * 
   * 
   * The baseline performance is calculated as follows: max{min{1,800 + 50 × disk size, 50,000}, 3,000}.
   * 
   * 
   * > This parameter is supported only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The access mode of the disk.
   * 
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the disk belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The disk size. Unit: GiB. You must specify this parameter. Valid values:
   * 
   * -   cloud: 5 to 2,000.
   * -   cloud_efficiency: 20 to 32,768.
   * -   cloud_ssd: 20 to 32,768.
   * -   cloud_essd: The valid values vary based on the `PerformanceLevel` parameter.
   *     - PL0: 1 to 65,536.
   *     - PL1: 20 to 65,536.
   *     - PL2: 461 to 65,536.
   *     - PL3: 1,261 to 65,536.
   * - cloud_auto: 1 to 65,536.
   * - cloud_essd_entry: 10 to 32,768.
   * - cloud_regional_disk_auto: 10 to 65,536.
   * - elastic_ephemeral_disk_standard: 64 to 8,192.
   * - elastic_ephemeral_disk_premium: 64 to 8,192.
   * 
   * If you specify the `SnapshotId` parameter, the `SnapshotId` and `Size` parameters have the following limits:
   * 
   * - If the snapshot size is greater than the `Size` value, the created disk size is equal to the snapshot size.
   * - If the snapshot size is less than the `Size` value, the created disk size is equal to the `Size` value.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create the disk. Snapshots created on or before July 15, 2013 cannot be used to create disks. 
   * 
   * The `SnapshotId` and `Size` parameters have the following limits:
   * 
   * - If the snapshot size is greater than the `Size` value, the created disk size is equal to the snapshot size.
   * - If the snapshot size is less than the `Size` value, the created disk size is equal to the `Size` value.
   * - You cannot use snapshots to create elastic ephemeral disks.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. Specify this parameter to create a disk in a specific dedicated block storage cluster.
   * 
   * > You can specify only one of the storage set parameters (`StorageSetId` and `StorageSetPartitionNumber`) and the dedicated block storage cluster parameter (`StorageClusterId`). If you specify both, the API call fails.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * > You can specify only one of the storage set parameters (`StorageSetId` and `StorageSetPartitionNumber`) and the dedicated block storage cluster parameter (`StorageClusterId`). If you specify both, the API call fails.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The number of partitions in the storage set. Valid values: greater than or equal to 2. The maximum value cannot exceed the privilege quota limit displayed after you call [DescribeAccountAttributes](https://help.aliyun.com/document_detail/73772.html).
   * 
   * Default value: 2.
   * 
   * @example
   * 3
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The tags of the disk.
   */
  tag?: CreateDiskRequestTag[];
  /**
   * @remarks
   * The zone ID of the pay-as-you-go disk.
   * 
   * - If you do not specify `InstanceId`, `ZoneId` is required.
   * - You cannot specify both `ZoneId` and `InstanceId`.
   * 
   * 
   * > You do not need to specify `ZoneId` for disks of the `cloud_regional_disk_auto` type.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      advancedFeatures: 'AdvancedFeatures',
      arn: 'Arn',
      burstingEnabled: 'BurstingEnabled',
      clientToken: 'ClientToken',
      description: 'Description',
      diskCategory: 'DiskCategory',
      diskName: 'DiskName',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      instanceId: 'InstanceId',
      KMSKeyId: 'KMSKeyId',
      multiAttach: 'MultiAttach',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      readWriteMode: 'ReadWriteMode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      size: 'Size',
      snapshotId: 'SnapshotId',
      storageClusterId: 'StorageClusterId',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedFeatures: 'string',
      arn: { 'type': 'array', 'itemType': CreateDiskRequestArn },
      burstingEnabled: 'boolean',
      clientToken: 'string',
      description: 'string',
      diskCategory: 'string',
      diskName: 'string',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      instanceId: 'string',
      KMSKeyId: 'string',
      multiAttach: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      performanceLevel: 'string',
      provisionedIops: 'number',
      readWriteMode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      size: 'number',
      snapshotId: 'string',
      storageClusterId: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      tag: { 'type': 'array', 'itemType': CreateDiskRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

