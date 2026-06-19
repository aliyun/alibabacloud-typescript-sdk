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
   * The tag key of the disk. Valid values of N: 1 to 20. Once a Tag.N.Key value is specified, it cannot be an empty string. It supports up to 128 characters and cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the disk. Valid values of N: 1 to 20. Once a Tag.N.Value value is specified, it can be an empty string. It supports up to 128 characters and cannot contain `http://` or `https://`.
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
   * Specifies whether to enable burst (performance bursting). Valid values:
   * 
   * - true: enables burst.
   * - false: disables burst.
   * 
   * > This parameter is supported only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a parameter value from your client to ensure uniqueness across different requests. **ClientToken** only supports ASCII characters and cannot exceed 64 characters. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
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
   * - cloud_essd: ESSD.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * - cloud_regional_disk_auto: ESSD zone-redundant disk.
   * - elastic_ephemeral_disk_standard: elastic ephemeral disk - standard.
   * - elastic_ephemeral_disk_premium: elastic ephemeral disk - premium.
   * 
   * Default value: cloud.
   * 
   * @example
   * cloud_ssd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The disk name. The name must be 2 to 128 characters in length and can contain Unicode letters (including English and Chinese characters) and ASCII digits (0-9). It can contain colons (:), underscores (_), periods (.), or hyphens (-). It must start with a Unicode letter.
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
   * - true: encrypts the disk.
   * - false: does not encrypt the disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * Creates a subscription disk and automatically attaches it to the specified subscription instance (InstanceId).
   * 
   * - After you set the instance ID, the ResourceGroupId, Tag.N.Key, Tag.N.Value, ClientToken, and KMSKeyId parameters that you set are ignored.
   * - You cannot specify both ZoneId and InstanceId.
   * 
   * Default value: empty, which means a pay-as-you-go disk is created. The location of the disk is determined by RegionId and ZoneId.
   * 
   * @example
   * i-bp18pnlg1ds9rky4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The KMS key ID used by the disk.
   * 
   * > If Encrypted is set to true and KMSKeyId is not specified, the default key is used for encryption, and the KMSKeyId value is returned after the instance is successfully created.
   * > - - Disk created from a non-shared encrypted snapshot: The encryption key used by the snapshot is used by default.
   * > - - Disk created from a shared encrypted snapshot: The service key is used by default.
   * > - - Disk created in a region where account-level default encryption for block storage is enabled: The specified account-level key is used by default.
   * > - - Other cases: The service key is used by default.
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
   * - Enabled: enables the feature. Currently, only ESSDs support setting this to `Enabled`.
   * 
   * Default value: Disabled.
   * 
   * > Disks with the multi-attach feature enabled only support the pay-as-you-go billing method. Therefore, when `MultiAttach=Enabled`, you cannot set the `InstanceId` parameter. You can call [AttachDisk](https://help.aliyun.com/document_detail/25515.html) to attach the disk after creation, but note that disks with multi-attach enabled can only be attached as data disks.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Sets the performance level of the disk when creating an ESSD. Valid values:
   * 
   * - PL0: maximum random read/write IOPS of 10,000 per disk.
   * - PL1: maximum random read/write IOPS of 50,000 per disk.
   * - PL2: maximum random read/write IOPS of 100,000 per disk.
   * - PL3: maximum random read/write IOPS of 1,000,000 per disk.
   * 
   * Default value: PL1.
   * 
   * For information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk (per disk). Possible values:
   * 
   * - Capacity (GiB) <= 3: provisioned performance cannot be set.
   * 
   * - Capacity (GiB) >= 4: [0, min{(1,000
   * 
   *  IOPS/GiB * capacity - baseline IOPS), 50,000}]
   * 
   * 
   * Baseline performance = max{min{1,800 + 50 * capacity, 50,000}, 3,000}.
   * 
   * 
   * > This parameter is supported only when `DiskCategory` = `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the disk belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The capacity size. Unit: GiB. You must specify a value for this parameter. Valid values:
   * 
   * -   cloud: 5 to 2,000.
   * -   cloud_efficiency: 20 to 32,768.
   * -   cloud_ssd: 20 to 32,768.
   * -   cloud_essd: The valid value range depends on the value of `PerformanceLevel`.
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
   * If you specify the `SnapshotId` parameter, the `SnapshotId` and `Size` parameters have the following restrictions:
   * 
   * - If the snapshot capacity corresponding to the `SnapshotId` parameter is greater than the specified `Size` parameter value, the actual size of the created disk equals the size of the specified snapshot.
   * - If the snapshot capacity corresponding to the `SnapshotId` parameter is less than the specified `Size` parameter value, the actual size of the created disk equals the specified `Size` parameter value.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The snapshot ID used to create the disk. Snapshots created on or before July 15, 2013 cannot be used to create disks.
   * 
   * The `SnapshotId` and `Size` parameters have the following restrictions:
   * 
   * - If the snapshot capacity corresponding to the `SnapshotId` parameter is greater than the specified `Size` parameter value, the actual size of the created disk equals the size of the specified snapshot.
   * - If the snapshot capacity corresponding to the `SnapshotId` parameter is less than the specified `Size` parameter value, the actual size of the created disk equals the specified `Size` parameter value.
   * - Creating elastic ephemeral disks from snapshots is not supported.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The dedicated block storage cluster ID. If you need to create a disk in a specified dedicated block storage cluster, specify this parameter.
   * 
   * > Storage set parameters (`StorageSetId`, `StorageSetPartitionNumber`) and dedicated block storage cluster parameter (`StorageClusterId`) are mutually exclusive. If both are set, the API call will fail.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  /**
   * @remarks
   * The storage set ID.
   * 
   * > Storage set parameters (`StorageSetId`, `StorageSetPartitionNumber`) and dedicated block storage cluster parameter (`StorageClusterId`) are mutually exclusive. If both are set, the API call will fail.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The number of storage set partitions. Valid values: greater than or equal to 2, and cannot exceed the quota limit displayed after calling [DescribeAccountAttributes](https://help.aliyun.com/document_detail/73772.html).
   * 
   * Default value: 2.
   * 
   * @example
   * 3
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The list of tag information for the disk.
   */
  tag?: CreateDiskRequestTag[];
  /**
   * @remarks
   * Creates a pay-as-you-go disk in the specified zone.
   * 
   * - If you do not set InstanceId, ZoneId is required.
   * - You cannot specify both ZoneId and InstanceId.
   * 
   * 
   * > Disks of the `cloud_regional_disk_auto` type do not require ZoneId to be set.
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

