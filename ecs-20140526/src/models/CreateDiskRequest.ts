// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiskRequestArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 1000000000
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
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
   * The tag key of the disk. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the disk. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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
   * This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  advancedFeatures?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   */
  arn?: CreateDiskRequestArn[];
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * > This parameter is supported only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
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
   * - elastic_ephemeral_disk_standard: elastic ephemeral disk - Standard Edition.
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
   * The name of the disk. The name must be 2 to 128 characters in length and can contain letters in the Unicode letter category (including English and Chinese characters) and ASCII digits (0-9). The name can contain colons (:), underscores (_), periods (.), or hyphens (-). The name must start with a character in the Unicode letter category.
   * 
   * Default value: empty.
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the disk. Valid values:
   * 
   * - true: Encrypted.
   * - false: Not encrypted.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the subscription instance to which the created subscription disk is automatically attached.
   * 
   * - After you specify the instance ID, the ResourceGroupId, Tag.N.Key, Tag.N.Value, ClientToken, and KMSKeyId parameters are ignored.
   * - You cannot specify both ZoneId and InstanceId.
   * 
   * Default value: empty. A pay-as-you-go disk is created, and the region of the disk is determined by RegionId and ZoneId.
   * 
   * @example
   * i-bp18pnlg1ds9rky4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used by the disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is not specified, the default key is used for encryption. The KMSKeyId value is returned after the instance is created.
   * > - - If the disk is created from a non-shared encrypted snapshot, the encryption key used by the snapshot is used by default.
   * > - - If the disk is created from a shared encrypted snapshot, the service key is used by default.
   * > - - If the disk is created in a region where account-level default encryption for block storage is enabled, the specified account-level key is used by default.
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
   * - Disabled: Disabled.
   * - Enabled: Enabled. Only enterprise SSDs support setting this parameter to `Enabled`.
   * 
   * Default value: Disabled.
   * 
   * > Disks with the multi-attach feature enabled support only the pay-as-you-go billing method. Therefore, when `MultiAttach=Enabled`, you cannot specify the `InstanceId` parameter. After the disk is created, you can call [AttachDisk](https://help.aliyun.com/document_detail/25515.html) to attach it. Note that a disk with the multi-attach feature enabled can be attached only as a data disk.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The performance level of the enterprise SSD to create. Set this parameter to one of the following values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * For information about how to select an ESSD performance level, see [Enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values:
   * 
   * - Capacity (GiB) <= 3: Provisioned performance is not supported.
   * 
   * - Capacity (GiB) >= 4: [0, min{(1,000 IOPS/GiB × Capacity - Baseline IOPS), 50,000}]
   * 
   * 
   * Baseline performance = max{min{1,800 + 50 × Capacity, 50,000}, 3,000}.
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
   * The ID of the region. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The size of the disk. Unit: GiB. You must specify a value for this parameter. Valid values:
   * 
   * -   cloud: 5 to 2,000.
   * -   cloud_efficiency: 20 to 32,768.
   * -   cloud_ssd: 20 to 32,768.
   * -   cloud_essd: The valid values depend on the `PerformanceLevel` value.
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
   * If you specify `SnapshotId`, the `SnapshotId` and `Size` parameters have the following restrictions:
   * 
   * - If the snapshot specified by `SnapshotId` is larger than the specified `Size` value, the snapshot size of the created disk equals the size of the specified snapshot.
   * - If the snapshot specified by `SnapshotId` is smaller than the specified `Size` value, the snapshot size of the created disk equals the specified `Size` value.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot to use to create the disk. Snapshots created on or before July 15, 2013 cannot be used to create disks. 
   * 
   * The `SnapshotId` and `Size` parameters have the following restrictions:
   * 
   * - If the snapshot specified by `SnapshotId` is larger than the specified `Size` value, the snapshot size of the created disk equals the size of the specified snapshot.
   * - If the snapshot specified by `SnapshotId` is smaller than the specified `Size` value, the snapshot size of the created disk equals the specified `Size` value.
   * - Elastic ephemeral disks cannot be created from snapshots.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. To create a disk in a specific dedicated block storage cluster, specify this parameter.
   * 
   * > You can set either the storage set parameters (`StorageSetId` and `StorageSetPartitionNumber`) or the dedicated block storage cluster parameter (`StorageClusterId`), but not both. If you set both, the API call fails.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * > You can set either the storage set parameters (`StorageSetId` and `StorageSetPartitionNumber`) or the dedicated block storage cluster parameter (`StorageClusterId`), but not both. If you set both, the API call fails.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The number of partitions in the storage set. Valid values: 2 and greater. The maximum value cannot exceed the privilege quota limit returned by calling [DescribeAccountAttributes](https://help.aliyun.com/document_detail/73772.html).
   * 
   * Default value: 2.
   * 
   * @example
   * 3
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The list of tags for the disk.
   */
  tag?: CreateDiskRequestTag[];
  /**
   * @remarks
   * The ID of the zone in which to create a pay-as-you-go disk.
   * 
   * - If you do not specify InstanceId, ZoneId is required.
   * - You cannot specify both ZoneId and InstanceId.
   * 
   * 
   * > You do not need to set ZoneId for disks of the `cloud_regional_disk_auto` type.
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

