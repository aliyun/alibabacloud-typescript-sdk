// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCDisksResponseBodyDisksTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testkey1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testvalue1
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

export class DescribeRCDisksResponseBodyDisks extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was attached.
   * 
   * @example
   * 2017-12-05T2340:00Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * Indicates whether burstable performance is enabled. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see ESSD AutoPL cloud disks.
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The disk category. Valid values:
   * 
   * - **cloud_efficiency**: Ultra cloud disk.
   * - **cloud_ssd**: Standard SSD cloud disk.
   * - **cloud_essd**: ESSD cloud disk.
   * - **cloud_auto**: Premium performance disk.
   * 
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @remarks
   * The time when the cloud disk was created. The time follows the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2024-10-22T02:41:37Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether automatic snapshots are deleted along with the cloud disk. Valid values:
   * - true: Deletes the snapshots on the cloud disk.
   * - false: Retains the snapshots on the cloud disk.
   * 
   * @example
   * true
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Indicates whether the disk is released when the instance is released. Valid values:
   * 
   * - true: The disk is released when the instance is released.
   * - false: The disk is retained when the instance is released.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The disk description.
   * 
   * @example
   * zd_test
   */
  description?: string;
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
   * The billing method of the disk.
   * 
   * Only **PostPaid** (pay-as-you-go) is supported.
   * 
   * @example
   * PostPaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * rcd-wz9f3peueu5npsl****
   */
  diskId?: string;
  /**
   * @remarks
   * The disk name.
   * 
   * @example
   * fvt-ecs-bcfb3627
   */
  diskName?: string;
  /**
   * @remarks
   * Indicates whether the cloud disk is encrypted. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  expiredTime?: string;
  /**
   * @remarks
   * The provisioned read and write IOPS of the ESSD AutoPL cloud disk. Valid values: 0 to min{50,000, 1,000 × capacity - baseline performance}. Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * This parameter is supported only when Category is set to cloud_auto.
   * 
   * @example
   * 4000
   */
  IOPS?: number;
  /**
   * @remarks
   * The ID of the image used to create the RDS Custom instance. This parameter has a value only if the cloud disk was created from an image. Otherwise, the value is empty. The value remains unchanged throughout the lifecycle of the cloud disk.
   * 
   * @example
   * m-2zeb24dw6wripjn2****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-e8w1cn7634kiam****
   */
  instanceId?: string;
  /**
   * @remarks
   * The performance level of the ESSD cloud disk (not standard SSD). Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Indicates whether the disk is removable.
   */
  portable?: boolean;
  /**
   * @remarks
   * The region ID.
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
   * rg-aekzescnje5khnq
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
   * The disk size. Unit: GiB.
   * 
   * @example
   * 60
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create the cloud disk.
   * 
   * If no snapshot was specified when the cloud disk was created, the value is empty. The value remains unchanged throughout the lifecycle of the cloud disk.
   * 
   * @example
   * rcds-bp67acfmxazb4p****
   */
  sourceSnapshotId?: string;
  /**
   * @remarks
   * The disk status. Valid values:
   * - In_use: In use.
   * - Available: Available.
   * - Attaching: Attaching.
   * - Detaching: Detaching.
   * - Creating: Creating.
   * - ReIniting: Initializing.
   * 
   * @example
   * In_use
   */
  status?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster to which the cloud disk belongs. If the cloud disk is in a public cloud block storage cluster, the value is empty.
   * 
   * @example
   * dbsc-cn-zvp2rl601****
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
   * The tags.
   */
  tag?: DescribeRCDisksResponseBodyDisksTag[];
  /**
   * @remarks
   * The disk type. Valid values:
   * - system: System cloud disk.
   * - data: Data cloud disk.
   * 
   * @example
   * data
   */
  type?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      creationTime: 'CreationTime',
      deleteAutoSnapshot: 'DeleteAutoSnapshot',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      expiredTime: 'ExpiredTime',
      IOPS: 'IOPS',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      performanceLevel: 'PerformanceLevel',
      portable: 'Portable',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serialNumber: 'SerialNumber',
      size: 'Size',
      sourceSnapshotId: 'SourceSnapshotId',
      status: 'Status',
      storageClusterId: 'StorageClusterId',
      storageSetId: 'StorageSetId',
      tag: 'Tag',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      creationTime: 'string',
      deleteAutoSnapshot: 'boolean',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      encrypted: 'boolean',
      expiredTime: 'string',
      IOPS: 'number',
      imageId: 'string',
      instanceId: 'string',
      performanceLevel: 'string',
      portable: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      serialNumber: 'string',
      size: 'number',
      sourceSnapshotId: 'string',
      status: 'string',
      storageClusterId: 'string',
      storageSetId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeRCDisksResponseBodyDisksTag },
      type: 'string',
      zoneId: 'string',
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

export class DescribeRCDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of disk information.
   */
  disks?: DescribeRCDisksResponseBodyDisks[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B993DA9-5272-5414-94E3-4CA8BA0146C2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: { 'type': 'array', 'itemType': DescribeRCDisksResponseBodyDisks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

