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
   * The category of the disk. Valid values:
   * 
   * *   **cloud_efficiency**: ultra disk.
   * *   **cloud_ssd**: standard SSD.
   * *   **cloud_essd**: ESSD.
   * *   **cloud_auto**: Premium ESSD
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-22T02:41:37Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the automatic snapshots of the cloud disk are deleted after the disk is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Indicates whether the cloud disk is released when its associated instance is released. Valid values:
   * 
   * *   true
   * *   false
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
   * Indicates whether only encrypted cloud disks are queried. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * none
   */
  expiredTime?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × *Capacity - Baseline performance}. Baseline performance = min{1,800 + 50 × *Capacity, 50,000}
   * 
   * This parameter is available only when the `Category` parameter is set to `cloud_auto`.
   * 
   * @example
   * 4000
   */
  IOPS?: number;
  /**
   * @remarks
   * The ID of the image that is used to create the instance. This parameter is returned only if the cloud disk is created from an image. The value of this parameter remains unchanged throughout the lifecycle of the cloud disk.
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
   * The performance level (PL) of the ESSD. Valid values:
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
   * rcds-bp67acfmxazb4p****
   */
  sourceSnapshotId?: string;
  /**
   * @remarks
   * The status of the disk. Valid values:
   * 
   * *   In_use: The disk is in use.
   * *   Available: The disk can be attached.
   * *   Attaching: The disk is being attached.
   * *   Detaching: The cloud disk is being detached.
   * *   Creating: The disk is being created.
   * *   ReIniting: The disk is being initialized.
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
   * The list of tags.
   */
  tag?: DescribeRCDisksResponseBodyDisksTag[];
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * *   system: system disk
   * *   data: data disk
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
   * The information about the disks.
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
   * The number of entries returned per page.
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
   * The total number of entries returned.
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

