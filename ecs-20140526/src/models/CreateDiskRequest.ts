// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDiskRequestArn } from "./CreateDiskRequestArn";
import { CreateDiskRequestTag } from "./CreateDiskRequestTag";


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
   * >  This parameter is not publicly available.
   */
  arn?: CreateDiskRequestArn[];
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * This parameter is left empty by default.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The category of the data disk. Valid values for different disk categories:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: utra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: ESSD
   * *   cloud_auto: ESSD AutoPL disk
   * *   cloud_essd_entry: ESSD Entry disk
   * *   cloud_regional_disk_auto: Regional ESSD
   * *   elastic_ephemeral_disk_standard: standard elastic ephemeral disk
   * *   elastic_ephemeral_disk_premium: premium elastic ephemeral disk
   * 
   * Default value: cloud.
   * 
   * Enumerated values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: SSD
   * *   cloud_auto: ESSD AutoPL disk
   * *   cloud_regional_disk_auto: Regional ESSD
   * *   cloud_essd: ESSD
   * *   elastic_ephemeral_disk_standard: standard elastic ephemeral disk.
   * *   cloud_essd: ESSD
   * *   elastic_ephemeral_disk_premium: premium elastic ephemeral disk
   * 
   * @example
   * cloud_ssd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). The name must start with a letter.
   * 
   * This parameter is left empty by default.
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
   * The ID of the subscription instance to which to attach the subscription disk.
   * 
   * *   If you specify an instance ID, the following parameters are ignored: ResourceGroupId, Tag.N.Key, Tag.N.Value, ClientToken, and KMSKeyId.
   * *   You cannot specify both ZoneId and InstanceId in a request.
   * 
   * This parameter is empty by default, which indicates that a pay-as-you-go disk is created in the region and zone specified by RegionId and ZoneId.
   * 
   * @example
   * i-bp18pnlg1ds9rky4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used for the disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40826X
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the multi-attach feature for the disk. Valid values:
   * 
   * *   Disabled
   * *   Enabled Set the value to `Enabled` only for ESSDs.
   * 
   * Default value: Disabled.
   * 
   * >  Disks for which the multi-attach feature is enabled support only the pay-as-you-go billing method. When `MultiAttach` is set to Enabled, you cannot specify `InstanceId`. You can call the [AttachDisk](https://help.aliyun.com/document_detail/25515.html) operation to attach disks to instances after the disks are created. Disks for which the multi-attach feature is enabled can be attached only as data disks.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The performance level of the disk if the disk is an ESSD. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * For information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Specifies the read/write IOPS that is provisioned for the ESSD AutoPL disk. Valid value:
   * 
   * *   Capacity (GiB) <= 3: not configurable
   * *   Capacity (GiB) >= 4: [0, min{(1,000
   * 
   * IOPS/GiB × Capacity - Baseline IOPS), 50,000}]
   * 
   * Baseline performance: max{min{1,800 + 50 × Capacity, 50,000}, 3,000}
   * 
   * >  This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The ID of the region in which to create the disk. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to add the disk.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB. This parameter is required. Valid values for different disk categories:
   * 
   * *   Valid values when DiskCategory is set to cloud: 5 to 2000.
   * 
   * *   Valid values when DiskCategory is set to cloud_efficiency: 20 to 32768.
   * 
   * *   Valid values when DiskCategory is set to cloud_ssd: 20 to 32768.
   * 
   * *   Valid values when DiskCategory is set to cloud_essd: vary based on the `PerformanceLevel` value.
   * 
   *     *   Valid values when PerformanceLevel is set to PL0: 1 to 65536.
   *     *   Valid values when PerformanceLevel is set to PL1: 20 to 65536.
   *     *   Valid values when PerformanceLevel is set to PL2: 461 to 65536.
   *     *   Valid values when PerformanceLevel is set to PL3: 1261 to 65536.
   * 
   * *   Valid values when DiskCategory is set to cloud_auto: 1 to 65536.
   * 
   * *   Valid values when DiskCategory is set to cloud_essd_entry: 10 to 32768.
   * 
   * *   Valid values when DiskCategory is set to cloud_regional_disk_auto: 10 to 65536.
   * 
   * *   Valid values when DiskCategory is set to elastic_ephemeral_disk_standard: 64 to 8192.
   * 
   * *   Valid values when DiskCategory is set to elastic_ephemeral_disk_premium: 64 to 8192.
   * 
   * If you specify `SnapshotId`, the following limits apply to `SnapshotId` and `Size`:
   * 
   * *   If the size of the snapshot specified by `SnapshotId` is larger than the value of `Size`, the size of the created disk is equal to the size of the snapshot.
   * *   If the size of the snapshot specified by `SnapshotId` is smaller than the value of `Size`, the size of the created disk is equal to the value of `Size`.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot to use to create the disk. Snapshots that were created on or before July 15, 2013 cannot be used to create disks.
   * 
   * The following limits apply to `SnapshotId` and `Size`:
   * 
   * *   If the size of the snapshot specified by `SnapshotId` is larger than the value of `Size`, the size of the created disk is equal to the specified snapshot size.
   * *   If the size of the snapshot specified by `SnapshotId` is smaller than the value of `Size`, the size of the created disk is equal to the value of `Size`.
   * *   You cannot create elastic ephemeral disks from snapshots.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster in which to create the disk. To create a disk in a specific dedicated block storage cluster, you must specify this parameter.
   * 
   * >  You can specify the storage set-related parameters (`StorageSetId` and `StorageSetPartitionNumber`) or the dedicated block storage cluster-related parameter (`StorageClusterId`), but not both. If you specify a storage set-related parameter and a dedicated block storage cluster-related parameter in a request, the request fails.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * > You cannot specify storage set-related parameters (`StorageSetId` and `StorageSetPartitionNumber`) and the dedicated block storage cluster-related parameter (`StorageClusterId`) at the same time. Otherwise, the operation cannot be called.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The number of partitions in the storage set. The value must be greater than or equal to 2 but cannot exceed the quota obtained by calling the [DescribeAccountAttributes](https://help.aliyun.com/document_detail/73772.html)operation.
   * 
   * Default value: 2.
   * 
   * @example
   * 3
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The tags to add to the disk.
   */
  tag?: CreateDiskRequestTag[];
  /**
   * @remarks
   * The ID of the zone in which to create the pay-as-you-go disk.
   * 
   * *   If you do not specify InstanceId, you must specify ZoneId.
   * *   You cannot specify both ZoneId and InstanceId in the same request.
   * 
   * >  You do not need to specify this parameter if you set DiskCategory to `cloud_regional_disk_auto` to create a Regional ESSD.
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

