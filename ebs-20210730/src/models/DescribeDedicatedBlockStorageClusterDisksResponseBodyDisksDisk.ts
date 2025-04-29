// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDiskTags } from "./DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDiskTags";


export class DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk extends $dara.Model {
  /**
   * @remarks
   * The time when the cloud disk was last attached. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-07T06:08:56Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * This parameter is currently in invitational preview and unavailable for general users.
   * 
   * @example
   * null
   */
  bdfId?: string;
  /**
   * @remarks
   * Whether the ESSD AutoPL disk is enabled burst IOPS / BPS. This parameter is available only if the DiskCategory parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the disk. A value of cloud_essd indicates that the disk is an ESSD.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether the automatic snapshots of the cloud disk are deleted when the disk is released. Valid values:
   * 
   * *   true: The automatic snapshots of the cloud disk are deleted when the disk is released.
   * *   false: The automatic snapshots of the cloud disk are retained when the disk is released.
   * 
   * Snapshots that are created by calling the [CreateSnapshot](https://help.aliyun.com/document_detail/25524.html) operation or by using the Elastic Compute Service (ECS) console are retained and not affected by this parameter.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Indicates whether the cloud disk is released when its associated instance is released. Valid values:
   * 
   * *   true: The cloud disk is released when its associated instance is released.
   * *   false: The cloud disk is retained when its associated instance is released.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the cloud disk.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The time when the cloud disk was last detached.
   * 
   * @example
   * 2021-06-07T21:01:22Z
   */
  detachedTime?: string;
  /**
   * @remarks
   * The device name of the cloud disk on its associated instance. Example: /dev/xvdb. Take note of the following items:
   * 
   * *   This parameter has a value only when the `Status` value is `In_use`.
   * *   This parameter is empty for cloud disks that have the multi-attach feature enabled. You can query the attachment information of the cloud disk based on the `Attachment` values.
   * 
   * >  This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The billing method of the cloud disk. Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the cloud disk.
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Indicates whether the automatic snapshot policy feature is enabled for the cloud disk.
   * 
   * @example
   * false
   */
  enableAutoSnapshot?: boolean;
  /**
   * @remarks
   * Indicates whether the cloud disk is encrypted.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The maximum number of IOPS.
   * 
   * @example
   * 4000
   */
  IOPS?: number;
  /**
   * @remarks
   * The ID of the image that was used to create the instance. This parameter is empty unless the cloud disk was created from an image. The value of this parameter remains unchanged throughout the lifecycle of the cloud disk.
   * 
   * @example
   * m-bp13aqm171qynt3u***
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the instance to which the cloud disk is attached. Take note of the following items:
   * 
   * *   This parameter has a value only when the `Status` value is `In_use`.
   * *   This parameter is empty for cloud disks that have the multi-attach feature enabled. You can query the attachment information of the cloud disk based on the `Attachment` values.
   * 
   * @example
   * i-bp67acfmxazb4q****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used by the cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The number of instances to which the Shared Block Storage device is attached.
   * 
   * @example
   * 1
   */
  mountInstanceNum?: number;
  /**
   * @remarks
   * Indicates whether the multi-attach feature was enabled for the cloud disk.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  /**
   * @remarks
   * The performance level of the enhanced SSD (ESSD). Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Indicates whether the cloud disk is removable.
   * 
   * @example
   * false
   */
  portable?: boolean;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. 
   * >  This parameter is available only if the DiskCategory parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the performance configurations of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 50000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID of cloud disk.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 60
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot that was used to create the cloud disk.
   * 
   * This parameter is empty unless the cloud disk was created from a snapshot. The value of this parameter remains unchanged throughout the lifecycle of the cloud disk.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  sourceSnapshotId?: string;
  /**
   * @remarks
   * The state of the cloud disk. For more information, see [Disk states](https://help.aliyun.com/document_detail/25689.html). Valid values:
   * 
   * *   In_use
   * *   Available
   * *   Attaching
   * *   Detaching
   * *   Creating
   * *   ReIniting
   * 
   * @example
   * In_use
   */
  status?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster to which the cloud disk belongs. If your cloud disk belongs to the public block storage cluster, an empty value is returned.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * @example
   * ss-i-bp1j4i2jdf3owlhe****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The maximum number of partitions in the storage set.
   * 
   * @example
   * 11
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The tags of the cloud disk.
   */
  tags?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDiskTags[];
  /**
   * @remarks
   * The maximum number of BPS.
   * 
   * @example
   * 350
   */
  throughput?: number;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * all
   */
  type?: string;
  /**
   * @remarks
   * The zone ID of cloud disk.
   * 
   * @example
   * cn-heyuan-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      bdfId: 'BdfId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      deleteAutoSnapshot: 'DeleteAutoSnapshot',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      detachedTime: 'DetachedTime',
      device: 'Device',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      enableAutoSnapshot: 'EnableAutoSnapshot',
      encrypted: 'Encrypted',
      IOPS: 'IOPS',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      KMSKeyId: 'KMSKeyId',
      mountInstanceNum: 'MountInstanceNum',
      multiAttach: 'MultiAttach',
      performanceLevel: 'PerformanceLevel',
      portable: 'Portable',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      size: 'Size',
      sourceSnapshotId: 'SourceSnapshotId',
      status: 'Status',
      storageClusterId: 'StorageClusterId',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      tags: 'Tags',
      throughput: 'Throughput',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      bdfId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      deleteAutoSnapshot: 'boolean',
      deleteWithInstance: 'boolean',
      description: 'string',
      detachedTime: 'string',
      device: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      enableAutoSnapshot: 'boolean',
      encrypted: 'boolean',
      IOPS: 'number',
      imageId: 'string',
      instanceId: 'string',
      KMSKeyId: 'string',
      mountInstanceNum: 'number',
      multiAttach: 'string',
      performanceLevel: 'string',
      portable: 'boolean',
      provisionedIops: 'number',
      regionId: 'string',
      size: 'number',
      sourceSnapshotId: 'string',
      status: 'string',
      storageClusterId: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      tags: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDiskTags },
      throughput: 'number',
      type: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

