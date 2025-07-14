// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksResponseBodyDisksDiskAttachmentsAttachment extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was attached. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-07T06:08:56Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * The device name of the disk.
   * 
   * @example
   * /dev/xvda
   */
  device?: string;
  /**
   * @remarks
   * The ID of the instance to which the disk is attached.
   * 
   * @example
   * i-bp67acfmxazb4q****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      device: 'Device',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      device: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskAttachments extends $dara.Model {
  attachment?: DescribeDisksResponseBodyDisksDiskAttachmentsAttachment[];
  static names(): { [key: string]: string } {
    return {
      attachment: 'Attachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachment: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskAttachmentsAttachment },
    };
  }

  validate() {
    if(Array.isArray(this.attachment)) {
      $dara.Model.validateArray(this.attachment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was attached. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-05T2340:00Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * The mount point of the disk.
   * 
   * @example
   * /dev/xvda
   */
  device?: string;
  /**
   * @remarks
   * The ID of the instance to which the disk is attached.
   * 
   * @example
   * i-bp1j4i2jdf3owlhe****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      device: 'Device',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      device: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskMountInstances extends $dara.Model {
  mountInstance?: DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance[];
  static names(): { [key: string]: string } {
    return {
      mountInstance: 'MountInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountInstance: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance },
    };
  }

  validate() {
    if(Array.isArray(this.mountInstance)) {
      $dara.Model.validateArray(this.mountInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskOperationLocksOperationLock extends $dara.Model {
  /**
   * @remarks
   * The reason why the disk was locked.
   * 
   * @example
   * security
   */
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskOperationLocks extends $dara.Model {
  operationLock?: DescribeDisksResponseBodyDisksDiskOperationLocksOperationLock[];
  static names(): { [key: string]: string } {
    return {
      operationLock: 'OperationLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLock: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskOperationLocksOperationLock },
    };
  }

  validate() {
    if(Array.isArray(this.operationLock)) {
      $dara.Model.validateArray(this.operationLock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskPlacement extends $dara.Model {
  /**
   * @remarks
   * The IDs of the zones in which data is stored.
   * 
   * @example
   * cn-hangzhou-b
   * cn-hangzhou-j
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDiskTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the disk.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the disk.
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

export class DescribeDisksResponseBodyDisksDiskTags extends $dara.Model {
  tag?: DescribeDisksResponseBodyDisksDiskTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisksDisk extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was last attached. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-07T06:08:56Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * The attachment information of the disk. The value is an array that consists of the `Attachment` values. This value is not returned when you query Shared Block Storage devices.
   */
  attachments?: DescribeDisksResponseBodyDisksDiskAttachments;
  /**
   * @remarks
   * The ID of the automatic snapshot policy that is applied to the cloud disk.
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  autoSnapshotPolicyId?: string;
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
   * Indicates whether the performance burst feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is available only if you set `Category` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: ESSD
   * *   cloud_auto: ESSD AutoPL disk
   * *   local_ssd_pro: I/O-intensive local disk
   * *   local_hdd_pro: throughput-intensive local disk
   * *   cloud_essd_entry: ESSD Entry disk
   * *   elastic_ephemeral_disk_standard: standard elastic ephemeral disk
   * *   elastic_ephemeral_disk_premium: premium static ephemeral disk
   * *   ephemeral: retired local disk
   * *   ephemeral_ssd: retired local SSD
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The time when the disk was created.
   * 
   * @example
   * 2021-06-07T06:08:54Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the automatic snapshots of the cloud disk are deleted when the cloud disk is released. Valid values:
   * 
   * *   true: The automatic snapshots of the cloud disk are deleted when the disk is released.
   * *   false: The automatic snapshots of the cloud disk are retained when the disk is released.
   * 
   * Snapshots that were created in the ECS console or by calling the [CreateSnapshot](https://help.aliyun.com/document_detail/25524.html) operation are retained and not affected by this parameter.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Indicates whether the disk is released when the instance to which the disk is attached is released. Valid values:
   * 
   * *   true: The disk is released when the associated instance is released.
   * *   false: The disk is retained when the associated instance is released.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the disk.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The time when the disk was last detached.
   * 
   * @example
   * 2021-06-07T21:01:22Z
   */
  detachedTime?: string;
  /**
   * @remarks
   * The device name of the disk on the instance to which the disk is attached. Example: /dev/xvdb. Take note of the following items:
   * 
   * *   This parameter has a value only when the `Status` value is `In_use` or `Detaching`.
   * *   This parameter is empty for cloud disks for which the multi-attach feature is enabled. You can query the attachment information of the cloud disk based on the returned list of `Attachment` objects.
   * 
   * >  This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The billing method of the disk. Valid values:
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
   * The ID of the disk.
   * 
   * @example
   * d-bp18um4r4f2fve24****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Indicates whether the automatic snapshot policy feature is enabled for the cloud disk.
   * 
   * >  This parameter is deprecated. By default, the automatic snapshot policy feature is enabled for cloud disks. You need to only apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
   * 
   * @example
   * false
   */
  enableAutoSnapshot?: boolean;
  /**
   * @remarks
   * Indicates whether an automatic snapshot policy is applied to the cloud disk.
   * 
   * @example
   * false
   */
  enableAutomatedSnapshotPolicy?: boolean;
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
   * The time when the subscription disk expires.
   * 
   * @example
   * 2021-07-07T16:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The maximum number of read and write operations per second.
   * 
   * @example
   * 4000
   */
  IOPS?: number;
  /**
   * @remarks
   * The maximum number of read operations per second.
   * 
   * @example
   * 2000
   */
  IOPSRead?: number;
  /**
   * @remarks
   * The maximum number of write operations per second.
   * 
   * @example
   * 2000
   */
  IOPSWrite?: number;
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
   * The ID of the instance to which the disk is attached. Take note of the following items:
   * 
   * *   This parameter has a value only when the `Status` value is `In_use` or `Detaching`.
   * *   This parameter is empty for cloud disks for which the multi-attach feature is enabled. You can query the attachment information of the cloud disk based on the returned `Attachment` objects.
   * 
   * @example
   * i-bp67acfmxazb4q****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the KMS key that is used for the cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb408***
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
   * The attachment information of the Shared Block Storage device.
   */
  mountInstances?: DescribeDisksResponseBodyDisksDiskMountInstances;
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
   * The reasons why the disk was locked.
   */
  operationLocks?: DescribeDisksResponseBodyDisksDiskOperationLocks;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
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
   * The locations in which data is stored.
   * 
   * This parameter is returned only if you specify `Placement` in the AdditionalAttributes.N request parameter.
   * 
   * >  This parameter is valid only for Regional ESSDs (cloud_regional_disk_auto).
   */
  placement?: DescribeDisksResponseBodyDisksDiskPlacement;
  /**
   * @remarks
   * Indicates whether the disk is removable.
   * 
   * @example
   * false
   */
  portable?: boolean;
  /**
   * @remarks
   * The product code of the disk in Alibaba Cloud Marketplace.
   * 
   * @example
   * jxsc000204
   */
  productCode?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × *Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × *Capacity, 50,000}
   * 
   * This parameter is available only if you set `Category` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The ID of the region to which the disk belongs.
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
  /**
   * @remarks
   * The serial number of the disk.
   * 
   * @example
   * bp18um4r4f2fve2****
   */
  serialNumber?: string;
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
   * The status of the disk. Valid values:
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
   * The tags of the disk.
   */
  tags?: DescribeDisksResponseBodyDisksDiskTags;
  /**
   * @remarks
   * The amount of data that can be transferred per second. Unit: MB/s.
   * 
   * @example
   * 100
   */
  throughput?: number;
  /**
   * @remarks
   * The amount of data that can be read per second. Unit: MB/s.
   * 
   * @example
   * 100
   */
  throughputRead?: number;
  /**
   * @remarks
   * The amount of data that can be written per second. Unit: MB/s.
   * 
   * @example
   * 100
   */
  throughputWrite?: number;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * system
   */
  type?: string;
  /**
   * @remarks
   * The ID of the zone to which the disk belongs.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      attachments: 'Attachments',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      bdfId: 'BdfId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      creationTime: 'CreationTime',
      deleteAutoSnapshot: 'DeleteAutoSnapshot',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      detachedTime: 'DetachedTime',
      device: 'Device',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      enableAutoSnapshot: 'EnableAutoSnapshot',
      enableAutomatedSnapshotPolicy: 'EnableAutomatedSnapshotPolicy',
      encrypted: 'Encrypted',
      expiredTime: 'ExpiredTime',
      IOPS: 'IOPS',
      IOPSRead: 'IOPSRead',
      IOPSWrite: 'IOPSWrite',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      KMSKeyId: 'KMSKeyId',
      mountInstanceNum: 'MountInstanceNum',
      mountInstances: 'MountInstances',
      multiAttach: 'MultiAttach',
      operationLocks: 'OperationLocks',
      performanceLevel: 'PerformanceLevel',
      placement: 'Placement',
      portable: 'Portable',
      productCode: 'ProductCode',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serialNumber: 'SerialNumber',
      size: 'Size',
      sourceSnapshotId: 'SourceSnapshotId',
      status: 'Status',
      storageClusterId: 'StorageClusterId',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      tags: 'Tags',
      throughput: 'Throughput',
      throughputRead: 'ThroughputRead',
      throughputWrite: 'ThroughputWrite',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      attachments: DescribeDisksResponseBodyDisksDiskAttachments,
      autoSnapshotPolicyId: 'string',
      bdfId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      creationTime: 'string',
      deleteAutoSnapshot: 'boolean',
      deleteWithInstance: 'boolean',
      description: 'string',
      detachedTime: 'string',
      device: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      enableAutoSnapshot: 'boolean',
      enableAutomatedSnapshotPolicy: 'boolean',
      encrypted: 'boolean',
      expiredTime: 'string',
      IOPS: 'number',
      IOPSRead: 'number',
      IOPSWrite: 'number',
      imageId: 'string',
      instanceId: 'string',
      KMSKeyId: 'string',
      mountInstanceNum: 'number',
      mountInstances: DescribeDisksResponseBodyDisksDiskMountInstances,
      multiAttach: 'string',
      operationLocks: DescribeDisksResponseBodyDisksDiskOperationLocks,
      performanceLevel: 'string',
      placement: DescribeDisksResponseBodyDisksDiskPlacement,
      portable: 'boolean',
      productCode: 'string',
      provisionedIops: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serialNumber: 'string',
      size: 'number',
      sourceSnapshotId: 'string',
      status: 'string',
      storageClusterId: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      tags: DescribeDisksResponseBodyDisksDiskTags,
      throughput: 'number',
      throughputRead: 'number',
      throughputWrite: 'number',
      type: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.attachments && typeof (this.attachments as any).validate === 'function') {
      (this.attachments as any).validate();
    }
    if(this.mountInstances && typeof (this.mountInstances as any).validate === 'function') {
      (this.mountInstances as any).validate();
    }
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.placement && typeof (this.placement as any).validate === 'function') {
      (this.placement as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDisks extends $dara.Model {
  disk?: DescribeDisksResponseBodyDisksDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDisk },
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

export class DescribeDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the disks.
   */
  disks?: DescribeDisksResponseBodyDisks;
  /**
   * @remarks
   * The returned pagination token which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: DescribeDisksResponseBodyDisks,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

