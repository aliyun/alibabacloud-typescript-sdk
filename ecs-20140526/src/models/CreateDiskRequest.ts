// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiskRequestArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * 1000000000
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * hide
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not yet available.
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
   * The tag key of the disk.
   * 
   * > For better code compatibility, we recommend that you use the `Tag.N.Key` parameter.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the disk. The value of N ranges from 1 to 20. If you specify `Tag.N.Value`, the value can be an empty string. The value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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
   * This parameter is not yet available.
   * 
   * @example
   * hide
   */
  advancedFeatures?: string;
  /**
   * @remarks
   * > This parameter is not yet available.
   */
  arn?: CreateDiskRequestArn[];
  /**
   * @remarks
   * Specifies whether to enable performance bursting. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * A client-generated, unique, case-sensitive token that you can use to ensure the idempotency of the request. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
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
   * - `cloud`: basic disk
   * 
   * - `cloud_efficiency`: ultra disk
   * 
   * - `cloud_ssd`: standard SSD
   * 
   * - `cloud_essd`: ESSD
   * 
   * - `cloud_auto`: ESSD AutoPL disk
   * 
   * - `cloud_essd_entry`: ESSD Entry disk
   * 
   * - `cloud_regional_disk_auto`: ESSD zone-redundant disk
   * 
   * - `elastic_ephemeral_disk_standard`: Elastic Ephemeral Disk - Standard
   * 
   * - `elastic_ephemeral_disk_premium`: Elastic Ephemeral Disk - Premium
   * 
   * Default value: `cloud`.
   * 
   * @example
   * cloud_ssd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the disk. The name must be 2 to 128 characters in length. It must start with a letter as defined by Unicode and can contain letters (including English and Chinese characters), digits (0-9), colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * This parameter is not yet available.
   * 
   * @example
   * hide
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the disk. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * Creates a subscription disk and automatically attaches it to the specified subscription instance.
   * 
   * - If you set this parameter, the `ResourceGroupId`, `Tag.N.Key`, `Tag.N.Value`, `ClientToken`, and `KMSKeyId` parameters are ignored.
   * 
   * - You cannot specify both `ZoneId` and `InstanceId`.
   * 
   * Default value: empty. An empty value indicates that you are creating a pay-as-you-go disk. The disk\\"s location is determined by `RegionId` and `ZoneId`.
   * 
   * @example
   * i-bp18pnlg1ds9rky4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the KMS key to use for the disk.
   * 
   * > If `Encrypted` is set to true and you do not specify `KMSKeyId`, a default key is used for encryption. The `KMSKeyId` is returned in the response after the instance is created.
   * >
   * > - - If the disk is created from an unshared encrypted snapshot, the encryption key used by that snapshot is used by default.
   * >
   * > - - If the disk is created from a shared encrypted snapshot, the service key is used by default.
   * >
   * > - - If the disk is created in a region with account-level default encryption enabled, the specified account-level key is used by default.
   * >
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
   * - Disabled: The feature is disabled.
   * 
   * - Enabled: The feature is enabled. Currently, only ESSDs support setting this parameter to `Enabled`.
   * 
   * Default value: Disabled.
   * 
   * > Disks with the multi-attach feature enabled can only be billed on a pay-as-you-go basis. Therefore, you cannot set the `InstanceId` parameter when `MultiAttach` is `Enabled`. After you create the disk, you can call [AttachDisk](https://help.aliyun.com/document_detail/25515.html) to attach it. Note that a multi-attach disk can be attached only as a data disk.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * 
   * - PL1: A single disk can deliver up to 50,000 random read/write IOPS.
   * 
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * 
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * For more information about how to choose an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of a single ESSD AutoPL disk. Valid values:
   * 
   * - Capacity <= 3 GiB: You cannot set provisioned performance.
   * 
   * - Capacity >= 4 GiB: 0 to min(1,000 IOPS/GiB × Capacity - Baseline IOPS, 50,000).
   * 
   * Baseline IOPS = max(min(1,800 + 50 × Capacity, 50,000), 3,000).
   * 
   * > This parameter is available only for ESSD AutoPL disks (`cloud_auto`). For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The ID of the region in which to create the disk. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The capacity of the disk, in GiB. You must specify a value for this parameter. Value range:
   * 
   * - `cloud`: 5 to 2,000
   * 
   * - `cloud_efficiency`: 20 to 32,768
   * 
   * - `cloud_ssd`: 20 to 32,768
   * 
   * - `PerformanceLevel`
   * 
   *   - PL0: 1 to 65,536
   * 
   *   - PL1: 20 to 65,536
   * 
   *   - PL2: 461 to 65,536
   * 
   *   - PL3: 1,261 to 65,536
   * 
   * - `cloud_auto`: 1 to 65,536
   * 
   * - `cloud_essd_entry`: 10 to 32,768
   * 
   * - `cloud_regional_disk_auto`: 10 to 65,536
   * 
   * - `elastic_ephemeral_disk_standard`: 64 to 8,192
   * 
   * - `elastic_ephemeral_disk_premium`: 64 to 8,192
   * 
   * If you specify `SnapshotId`, the following limits apply to `SnapshotId` and `Size`:
   * 
   * - If the snapshot capacity is greater than the specified `Size`, the actual disk size is the snapshot capacity.
   * 
   * - If the snapshot capacity is smaller than the specified `Size`, the actual disk size is the specified `Size`.
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
   * - If the snapshot capacity is greater than the specified `Size`, the actual disk size is the snapshot capacity.
   * 
   * - If the snapshot capacity is smaller than the specified `Size`, the actual disk size is the specified `Size`.
   * 
   * - You cannot use snapshots to create Elastic Ephemeral Disks.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster. If you need to create a disk in a specific dedicated block storage cluster, specify this parameter.
   * 
   * > You can specify either storage set parameters (`StorageSetId` and `StorageSetPartitionNumber`) or the dedicated block storage cluster parameter (`StorageClusterId`), but not both. The request fails if you specify parameters for both.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * > You can specify either storage set parameters (`StorageSetId` and `StorageSetPartitionNumber`) or the dedicated block storage cluster parameter (`StorageClusterId`), but not both. The request fails if you specify parameters for both.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The number of partitions in the storage set. The value must be greater than or equal to 2 and cannot exceed the quota returned by the [DescribeAccountAttributes](https://help.aliyun.com/document_detail/73772.html) operation.
   * 
   * Default value: 2.
   * 
   * @example
   * 3
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * A list of tags for the disk.
   */
  tag?: CreateDiskRequestTag[];
  /**
   * @remarks
   * The ID of the zone in which to create the pay-as-you-go disk.
   * 
   * - If you do not set `InstanceId`, this parameter is required.
   * 
   * - You cannot specify both `ZoneId` and `InstanceId`.
   * 
   * > ESSD zone-redundant disks (`cloud_regional_disk_auto`) do not require a zone ID.
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

