// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDiskTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk extends $dara.Model {
  /**
   * @remarks
   * The time when the cloud disk was last attached. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-07T06:08:56Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  bdfId?: string;
  /**
   * @remarks
   * Indicates whether the burst (performance burst) feature is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * This parameter is supported only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the cloud disk or local disk is cloud_essd, which indicates an ESSD.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether automatic snapshots are deleted when the cloud disk is released. Valid values:
   * 
   * - true: Automatic snapshots are deleted when the cloud disk is released.
   * - false: Automatic snapshots are retained when the cloud disk is released.
   * 
   * Snapshots created by calling [CreateSnapshot](https://help.aliyun.com/document_detail/25524.html) or by using the console are not affected by this parameter and are always retained.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Indicates whether the cloud disk is released when the instance is released. Valid values:
   * 
   * - true: The cloud disk is released when the instance is released.
   * - false: The cloud disk is retained when the instance is released.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The cloud disk description.
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
   * The device name of the instance to which the cloud disk is attached, such as /dev/xvdb. Note the following items:
   * 
   * - This parameter has a value only when the `Status` parameter is set to `In_use`. This parameter is empty in other states.
   * 
   * - For cloud disks with the multi-attach feature enabled, this value is always empty. You can view all attachment information of the cloud disk from the returned `Attachment` list.
   * 
   * > This parameter will be deprecated. To ensure code compatibility, do not use this parameter.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The billing method of the cloud disk. Valid values:
   * 
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The cloud disk name.
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Indicates whether the automatic snapshot policy feature is enabled for the cloud disk.
   * 
   * >This parameter is deprecated. After a cloud disk is created, the automatic snapshot policy feature is enabled by default. You only need to associate an automatic snapshot policy with the cloud disk.
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
   * The maximum number of read/write (I/O) operations per second. Unit: operations/s.
   * 
   * @example
   * 4000
   */
  IOPS?: number;
  /**
   * @remarks
   * The ID of the image used to create the ECS instance. This parameter has a value only for cloud disks created from an image. Otherwise, this value is empty. This value remains unchanged throughout the lifecycle of the cloud disk.
   * 
   * @example
   * m-bp13aqm171qynt3u***
   */
  imageId?: string;
  /**
   * @remarks
   * The instance ID of the instance to which the cloud disk is mounted. Note the following items:
   * 
   * - This parameter has a value only when the `Status` parameter is set to `In_use`. This parameter is empty in other states.
   * 
   * - For cloud disks with the multi-attach attribute enabled, this value is always empty. You can view all mount information of the cloud disk from the returned `Attachment` list.
   * 
   * @example
   * i-bp67acfmxazb4q****
   */
  instanceId?: string;
  /**
   * @remarks
   * The KMS key ID used by the cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The number of instances to which the shared storage is attached.
   * 
   * @example
   * 1
   */
  mountInstanceNum?: number;
  /**
   * @remarks
   * Indicates whether the multi-attach feature is enabled for the cloud disk.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
   * 
   * - PL0: a maximum of 10,000 random read/write IOPS per cloud disk.
   * - PL1: a maximum of 50,000 random read/write IOPS per cloud disk.
   * - PL2: a maximum of 100,000 random read/write IOPS per cloud disk.
   * - PL3: a maximum of 1,000,000 random read/write IOPS per cloud disk.
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
   * The provisioned read/write IOPS of the ESSD AutoPL cloud disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * This parameter is supported only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID of the cloud disk.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The cloud disk size. Unit: GiB.
   * 
   * @example
   * 60
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create the cloud disk.
   * 
   * If no snapshot was specified when the cloud disk was created, this value is empty. This value remains unchanged throughout the lifecycle of the cloud disk.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  sourceSnapshotId?: string;
  /**
   * @remarks
   * The cloud disk status. For more information, see [Cloud disk status](https://help.aliyun.com/document_detail/25689.html). Valid values:
   * 
   * -   In_use.
   * -   Available.
   * -   Attaching.
   * -   Detaching.
   * -   Creating.
   * -   ReIniting.
   * 
   * @example
   * In_use
   */
  status?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster to which the cloud disk belongs. If the cloud disk belongs to a public cloud block storage cluster, this value is empty.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  /**
   * @remarks
   * The storage set ID.
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
   * The amount of data that can be transferred per unit of time. Unit: MB/s.
   * 
   * @example
   * 100
   */
  throughput?: number;
  /**
   * @remarks
   * The type of the cloud disk. Valid values:
   * 
   * - system: system cloud disk.
   * - data: data cloud disk.
   * 
   * @example
   * system
   */
  type?: string;
  /**
   * @remarks
   * The zone ID of the cloud disk.
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

export class DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks extends $dara.Model {
  /**
   * @remarks
   * The collection of cloud disk information.
   */
  disk?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk },
    };
  }

  validate() {
    if(Array.isArray(this.disk)) {
      $dara.Model.validateArray(this.disk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClusterDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of cloud disk information.
   */
  disks?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks;
  /**
   * @remarks
   * The pagination token returned in this call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.disks && typeof (this.disks as any).validate === 'function') {
      (this.disks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

