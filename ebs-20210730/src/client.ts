// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateDedicatedBlockStorageClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
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

export class CreateDiskReplicaGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the replication pair-consistent group.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the replication pair-consistent group.
   * 
   * @example
   * tag-value
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

export class CreateDiskReplicaPairRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:` or contain `http://` or `https://`.
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

export class CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions extends $dara.Model {
  /**
   * @remarks
   * The region ID of the destination. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Number of days to retain the destination snapshot. The range of values is greater than 1.
   * 
   * @example
   * 7
   */
  retainDays?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      retainDays: 'RetainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      retainDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo extends $dara.Model {
  /**
   * @remarks
   * Whether cross-region replication is enabled. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of destination regions.
   */
  regions?: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestRetainRule extends $dara.Model {
  /**
   * @remarks
   * Maximum number of retained snapshots.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The time interval , valid value greater than 1.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of time, valid values:
   * 
   * - DAYS
   * 
   * - WEEKS
   * 
   * @example
   * DAYS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestSchedule extends $dara.Model {
  /**
   * @remarks
   * The time when the policy will to be scheduled. Valid values: Set the parameter in a cron expression.
   * 
   * For example, you can use 0 0 4 1/1 * ? to specify 04:00:00 (UTC+8) on the first day of each month.
   * 
   * This parameter is required.
   */
  cronExpression?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules extends $dara.Model {
  /**
   * @remarks
   * The periodic unit for specially retained snapshots. If configured to WEEKS, it provides special retention for the first snapshot of each week. The retention period is determined by TimeUnit and TimeInterval. The range of values are:
   * - WEEKS
   * - MONTHS
   * - YEARS
   * 
   * @example
   * WEEKS
   */
  specialPeriodUnit?: string;
  /**
   * @remarks
   * Retention Time Value. The range of values is greater than 1.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * Retention time unit for special snapshots. The range of values:
   * 
   * - DAYS
   * 
   * - WEEKS
   * 
   * @example
   * WEEKS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      specialPeriodUnit: 'SpecialPeriodUnit',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPeriodUnit: 'string',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the special retention is enabled.
   * 
   * *   true: enable
   * *   false: disable
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestStorageRule extends $dara.Model {
  /**
   * @remarks
   * Whether to enable the rapid availability of snapshots. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enableImmediateAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableImmediateAccess: 'EnableImmediateAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableImmediateAccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
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

export class CreateEnterpriseSnapshotPolicyShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
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

export class DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDiskTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the cloud disk.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the cloud disk.
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

export class DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks extends $dara.Model {
  /**
   * @remarks
   * Details about the cloud disks.
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

export class DescribeDedicatedBlockStorageClustersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the dedicated block storage cluster.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the dedicated block storage cluster.
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

export class DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity extends $dara.Model {
  /**
   * @remarks
   * The available capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 61440
   */
  availableCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster that was delivered in disk creation orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  availableDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 40000.3
   */
  availableSpaceCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that was delivered in orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  clusterAvailableCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that is to be delivered in orders. Unit: GB.
   * 
   * @example
   * 0
   */
  clusterDeliveryCapacity?: number;
  /**
   * @remarks
   * The capacity to be delivered for the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 0
   */
  deliveryCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 61440
   */
  totalCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster that is to be delivered in disk creation orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  totalDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 73728
   */
  totalSpaceCapacity?: number;
  /**
   * @remarks
   * The used capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 1440
   */
  usedCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that was used to create disks. Unit: GB.
   * 
   * @example
   * 32000
   */
  usedDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 33727.7
   */
  usedSpaceCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      availableCapacity: 'AvailableCapacity',
      availableDeviceCapacity: 'AvailableDeviceCapacity',
      availableSpaceCapacity: 'AvailableSpaceCapacity',
      clusterAvailableCapacity: 'ClusterAvailableCapacity',
      clusterDeliveryCapacity: 'ClusterDeliveryCapacity',
      deliveryCapacity: 'DeliveryCapacity',
      totalCapacity: 'TotalCapacity',
      totalDeviceCapacity: 'TotalDeviceCapacity',
      totalSpaceCapacity: 'TotalSpaceCapacity',
      usedCapacity: 'UsedCapacity',
      usedDeviceCapacity: 'UsedDeviceCapacity',
      usedSpaceCapacity: 'UsedSpaceCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCapacity: 'number',
      availableDeviceCapacity: 'number',
      availableSpaceCapacity: 'number',
      clusterAvailableCapacity: 'number',
      clusterDeliveryCapacity: 'number',
      deliveryCapacity: 'number',
      totalCapacity: 'number',
      totalDeviceCapacity: 'number',
      totalSpaceCapacity: 'number',
      usedCapacity: 'number',
      usedDeviceCapacity: 'number',
      usedSpaceCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the dedicated block storage cluster.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the dedicated block storage cluster.
   * 
   * @example
   * testValue
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

export class DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClusters extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12345601234560***
   */
  aliUid?: string;
  /**
   * @remarks
   * The category of disks that can be created in the dedicated block storage cluster.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The time when the dedicated block storage cluster was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1657113211
   */
  createTime?: string;
  /**
   * @remarks
   * Details about the storage capacity of the dedicated block storage cluster.
   */
  dedicatedBlockStorageClusterCapacity?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * @example
   * dbsc-f8z4d3k4nsgg9okb****
   */
  dedicatedBlockStorageClusterId?: string;
  /**
   * @remarks
   * The name of the dedicated block storage cluster.
   * 
   * @example
   * myDBSCCluster
   */
  dedicatedBlockStorageClusterName?: string;
  /**
   * @remarks
   * The description of the dedicated block storage cluster.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether Thin Provision is enabled.
   * 
   * @example
   * true
   */
  enableThinProvision?: boolean;
  /**
   * @remarks
   * The time when the dedicated block storage cluster expires. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1673020800
   */
  expiredTime?: string;
  /**
   * @remarks
   * The performance level of disks. Valid values:
   * 
   * *   PL0
   * *   PL1
   * *   PL2
   * *   PL3
   * 
   * >  This parameter is valid only when the SupportedCategory value is cloud_essd.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated block storage cluster belongs. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the ID of the resource group.
   * 
   * @example
   * rg-aekzsoux****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The capacity oversold ratio.
   * 
   * @example
   * 1.2
   */
  sizeOverSoldRatio?: number;
  /**
   * @remarks
   * The state of the dedicated block storage cluster. Valid values:
   * 
   * *   Preparing
   * *   Running
   * *   Expired
   * *   Offline
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * StorageDomain
   * 
   * @example
   * StorageDomain
   */
  storageDomain?: string;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * cloud_essd
   */
  supportedCategory?: string;
  /**
   * @remarks
   * The tags of the dedicated block storage cluster.
   */
  tags?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersTags[];
  /**
   * @remarks
   * The type of the dedicated block storage cluster. Valid values:
   * 
   * *   Standard: basic dedicated block storage cluster. ESSDs at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
   * *   Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The zone ID of the dedicated block storage cluster.
   * 
   * @example
   * cn-heyuan-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      category: 'Category',
      createTime: 'CreateTime',
      dedicatedBlockStorageClusterCapacity: 'DedicatedBlockStorageClusterCapacity',
      dedicatedBlockStorageClusterId: 'DedicatedBlockStorageClusterId',
      dedicatedBlockStorageClusterName: 'DedicatedBlockStorageClusterName',
      description: 'Description',
      enableThinProvision: 'EnableThinProvision',
      expiredTime: 'ExpiredTime',
      performanceLevel: 'PerformanceLevel',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sizeOverSoldRatio: 'SizeOverSoldRatio',
      status: 'Status',
      storageDomain: 'StorageDomain',
      supportedCategory: 'SupportedCategory',
      tags: 'Tags',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      category: 'string',
      createTime: 'string',
      dedicatedBlockStorageClusterCapacity: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity,
      dedicatedBlockStorageClusterId: 'string',
      dedicatedBlockStorageClusterName: 'string',
      description: 'string',
      enableThinProvision: 'boolean',
      expiredTime: 'string',
      performanceLevel: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sizeOverSoldRatio: 'number',
      status: 'string',
      storageDomain: 'string',
      supportedCategory: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersTags },
      type: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.dedicatedBlockStorageClusterCapacity && typeof (this.dedicatedBlockStorageClusterCapacity as any).validate === 'function') {
      (this.dedicatedBlockStorageClusterCapacity as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskEventsResponseBodyDiskEvents extends $dara.Model {
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp1bq5g3dxxo1x4o****
   */
  diskId?: string;
  /**
   * @remarks
   * The recommended action after the event occurred. Valid values:
   * 
   * *   Resize: resizes the disk.
   * *   ModifyDiskSpec: changes the category of the disk.
   * *   NoAction: performs no operation.
   * 
   * @example
   * NoAction
   */
  recommendAction?: string;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The state of the event. Valid values:
   * 
   * *   Solved
   * *   UnSolved
   * 
   * @example
   * Solved
   */
  status?: string;
  /**
   * @remarks
   * The time when the event occurred. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-01T08:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The type of the event. Only DataNeedProtect can be returned.
   * 
   * @example
   * DataNeedProtect
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      diskId: 'DiskId',
      recommendAction: 'RecommendAction',
      regionId: 'RegionId',
      status: 'Status',
      timestamp: 'Timestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      diskId: 'string',
      recommendAction: 'string',
      regionId: 'string',
      status: 'string',
      timestamp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponseBodyMonitorData extends $dara.Model {
  /**
   * @remarks
   * The percentage of BPS.
   * 
   * @example
   * 80(%)
   */
  BPSPercent?: number;
  /**
   * @remarks
   * The number of burst I/O operations.
   * 
   * @example
   * 0
   */
  burstIOCount?: number;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp1bq5g3dxxo1x4o****
   */
  diskId?: string;
  /**
   * @remarks
   * The percentage of IOPS.
   * 
   * @example
   * 80(%)
   */
  IOPSPercent?: number;
  /**
   * @remarks
   * The read bandwidth of the disk. Unit: MByte/s.
   * 
   * @example
   * 10
   */
  readBPS?: number;
  /**
   * @remarks
   * Read IO block size. Unit: Bytes
   * 
   * @example
   * 4096
   */
  readBlockSize?: number;
  /**
   * @remarks
   * The maximum number of read IOPS.
   * 
   * @example
   * 2000
   */
  readIOPS?: number;
  /**
   * @remarks
   * Read IO latency. Unit:  microsecond
   * 
   * @example
   * 100
   */
  readLatency?: number;
  /**
   * @remarks
   * The timestamp that is used to query the near real-time monitoring data of the disk. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-01T08:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The write bandwidth of the disk. Unit: MByte/s.
   * 
   * @example
   * 204
   */
  writeBPS?: number;
  /**
   * @remarks
   * Write IO block size. Unit: Bytes
   * 
   * @example
   * 4096
   */
  writeBlockSize?: number;
  /**
   * @remarks
   * The maximum number of write IOPS.
   * 
   * @example
   * 2000
   */
  writeIOPS?: number;
  /**
   * @remarks
   * Write IO latency. Unit: microsecond
   * 
   * @example
   * 100
   */
  writeLatency?: number;
  static names(): { [key: string]: string } {
    return {
      BPSPercent: 'BPSPercent',
      burstIOCount: 'BurstIOCount',
      diskId: 'DiskId',
      IOPSPercent: 'IOPSPercent',
      readBPS: 'ReadBPS',
      readBlockSize: 'ReadBlockSize',
      readIOPS: 'ReadIOPS',
      readLatency: 'ReadLatency',
      timestamp: 'Timestamp',
      writeBPS: 'WriteBPS',
      writeBlockSize: 'WriteBlockSize',
      writeIOPS: 'WriteIOPS',
      writeLatency: 'WriteLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      BPSPercent: 'number',
      burstIOCount: 'number',
      diskId: 'string',
      IOPSPercent: 'number',
      readBPS: 'number',
      readBlockSize: 'number',
      readIOPS: 'number',
      readLatency: 'number',
      timestamp: 'string',
      writeBPS: 'number',
      writeBlockSize: 'number',
      writeIOPS: 'number',
      writeLatency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataListResponseBodyMonitorData extends $dara.Model {
  /**
   * @remarks
   * The number of burst I/O operations.
   * 
   * @example
   * 2000
   */
  burstIOCount?: number;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The beginning of the time range during which the performance of the disk bursts. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-01T08:00:00Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      burstIOCount: 'BurstIOCount',
      diskId: 'DiskId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstIOCount: 'number',
      diskId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the replication pair-consistent group.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the replication pair-consistent group.
   * 
   * @example
   * tag-value
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

export class DescribeDiskReplicaGroupsResponseBodyReplicaGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the replication pair-consistent group.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the replication pair-consistent group.
   * 
   * @example
   * testValue
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

export class DescribeDiskReplicaGroupsResponseBodyReplicaGroups extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value. Unit: Kbit/s. This parameter is not publicly available and has a system-preset value.
   * 
   * @example
   * 0
   */
  bandwidth?: number;
  /**
   * @remarks
   * The description of the replication pair-consistent group.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the region in which the secondary site is deployed.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The ID of the zone in which the secondary site is deployed.
   * 
   * @example
   * cn-shanghai-e
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The name of the replication pair-consistent group.
   * 
   * @example
   * myreplicagrouptest
   */
  groupName?: string;
  /**
   * @remarks
   * The time when data was last replicated from the primary disks to the secondary disks in the replication pair-consistent group. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1637835114
   */
  lastRecoverPoint?: number;
  /**
   * @remarks
   * The IDs of replication pairs that belong to the replication pair-consistent group.
   */
  pairIds?: Buffer[];
  /**
   * @remarks
   * The number of replication pairs that belong to the replication pair-consistent group.
   * 
   * @example
   * 2
   */
  pairNumber?: number;
  /**
   * @remarks
   * The initial source region (primary region) of the replication pair-consistent group.
   * 
   * @example
   * cn-beijing
   */
  primaryRegion?: string;
  /**
   * @remarks
   * The initial source zone (primary zone) of the replication pair-consistent group.
   * 
   * @example
   * cn-beijing-h
   */
  primaryZone?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair-consistent group. Unit: seconds.
   * 
   * @example
   * 180
   */
  RPO?: number;
  /**
   * @remarks
   * The IDs of the replication pair-consistent groups.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair-consistent group belongs.
   * 
   * @example
   * rg-aek2a*******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the site from which the information about the replication pairs and replication pair-consistent group was obtained. Valid values:
   * 
   * *   production: primary site
   * *   backup: secondary site
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The ID of the region in which the primary site is deployed.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The ID of the zone in which the primary site is deployed.
   * 
   * @example
   * cn-beijing-f
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The initial destination region (secondary region) of the replication pair-consistent group.
   * 
   * @example
   * cn-shanghai
   */
  standbyRegion?: string;
  /**
   * @remarks
   * The initial destination zone (secondary zone) of the replication pair-consistent group.
   * 
   * @example
   * cn-shanghai-e
   */
  standbyZone?: string;
  /**
   * @remarks
   * The status of the replication pair-consistent group. Valid values:
   * 
   * *   invalid: The replication pair-consistent group is invalid, which indicates that abnormal replication pairs are present in the replication pair-consistent group.
   * *   creating: The replication pair-consistent group is being created.
   * *   created: The replication pair-consistent group was created.
   * *   create_failed: The replication pair-consistent group failed to be created.
   * *   manual_syncing: Data was being manually synchronized between the disks in the replication pair-consistent group. When data was being manually synchronized for the first time, the replication pair is in this state.
   * *   syncing: Data was being synchronized between the disks. When data is being asynchronously replicated from the primary disk to the secondary disk again in subsequent operations, the replication pair is in this state.
   * *   normal: The replication pair was working as expected. When the system finishes replicating data from the primary disk to the secondary disk within the current replication cycle, the replication pair enters this state.
   * *   stopping: The replication pair was being stopped.
   * *   stopped: The replication pair was stopped.
   * *   stop_failed: The replication pair failed to be stopped.
   * *   failovering: A failover was being performed.
   * *   failovered: A failover was performed.
   * *   failover_failed: A failover failed to be performed.
   * *   reprotecting: A reverse replication was being performed.
   * *   reprotect_failed: A reverse replication failed to be performed.
   * *   deleting: The replication pair was being deleted.
   * *   delete_failed: The replication pair failed to be deleted.
   * *   deleted: The replication pair was deleted.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The tags of the replication pair-consistent group.
   */
  tags?: DescribeDiskReplicaGroupsResponseBodyReplicaGroupsTags[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      description: 'Description',
      destinationRegionId: 'DestinationRegionId',
      destinationZoneId: 'DestinationZoneId',
      groupName: 'GroupName',
      lastRecoverPoint: 'LastRecoverPoint',
      pairIds: 'PairIds',
      pairNumber: 'PairNumber',
      primaryRegion: 'PrimaryRegion',
      primaryZone: 'PrimaryZone',
      RPO: 'RPO',
      replicaGroupId: 'ReplicaGroupId',
      resourceGroupId: 'ResourceGroupId',
      site: 'Site',
      sourceRegionId: 'SourceRegionId',
      sourceZoneId: 'SourceZoneId',
      standbyRegion: 'StandbyRegion',
      standbyZone: 'StandbyZone',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      description: 'string',
      destinationRegionId: 'string',
      destinationZoneId: 'string',
      groupName: 'string',
      lastRecoverPoint: 'number',
      pairIds: { 'type': 'array', 'itemType': 'Buffer' },
      pairNumber: 'number',
      primaryRegion: 'string',
      primaryZone: 'string',
      RPO: 'number',
      replicaGroupId: 'string',
      resourceGroupId: 'string',
      site: 'string',
      sourceRegionId: 'string',
      sourceZoneId: 'string',
      standbyRegion: 'string',
      standbyZone: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDiskReplicaGroupsResponseBodyReplicaGroupsTags },
    };
  }

  validate() {
    if(Array.isArray(this.pairIds)) {
      $dara.Model.validateArray(this.pairIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class DescribeDiskReplicaPairsResponseBodyReplicaPairsTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * testValue
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

export class DescribeDiskReplicaPairsResponseBodyReplicaPairs extends $dara.Model {
  /**
   * @remarks
   * The bandwidth used to asynchronously replicate data from the primary disk to the secondary disk. Unit: Kbit/s.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the replication pair. Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the replication pair was created. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1649750977
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the replication pair.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the secondary disk.
   * 
   * @example
   * d-asdfjl2342kj2l3k4****
   */
  destinationDiskId?: string;
  /**
   * @remarks
   * The region ID of the secondary disk.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The zone ID of the secondary disk.
   * 
   * @example
   * cn-shanghai-b
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The time when the replication pair expires. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1649750977
   */
  expiredTime?: number;
  /**
   * @remarks
   * The time when data was last replicated from the primary disk to the secondary disk in the replication pair. The value of this parameter is a timestamp. Unit: seconds. 86,400 seconds is equivalent to 24 hours.
   * 
   * @example
   * 1649751977
   */
  lastRecoverPoint?: number;
  /**
   * @remarks
   * The name of the replication pair.
   * 
   * @example
   * TestReplicaPair
   */
  pairName?: string;
  /**
   * @remarks
   * The initial source region (primary region) of the replication pair.
   * 
   * @example
   * cn-beijing
   */
  primaryRegion?: string;
  /**
   * @remarks
   * The initial source zone (primary zone) of the replication pair.
   * 
   * @example
   * cn-beijing-a
   */
  primaryZone?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair. Unit: seconds.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The ID of the replication pair-consistent group to which the replication pair belongs.
   * 
   * @example
   * pg-xxxx****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The name of the replication pair-consistent group to which the replication pair belongs.
   * 
   * @example
   * pg-name****
   */
  replicaGroupName?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair belongs.
   * 
   * @example
   * rg-acfmvs*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the site from which the information about the replication pairs and replication pair-consistent group was obtained. Valid values:
   * 
   * *   production: primary site
   * *   backup: secondary site
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The ID of the primary disk.
   * 
   * @example
   * d-bp131n0q38u3a4zi****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The region ID of the primary disk.
   * 
   * @example
   * cn-beijing
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The zone ID of the primary disk.
   * 
   * @example
   * cn-beijing-a
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The initial destination region (secondary region) of the replication pair.
   * 
   * @example
   * cn-shanghai
   */
  standbyRegion?: string;
  /**
   * @remarks
   * The initial destination zone (secondary zone) of the replication pair.
   * 
   * @example
   * cn-shanghai-b
   */
  standbyZone?: string;
  /**
   * @remarks
   * The status of the replication pair. Valid values:
   * 
   * *   invalid: The replication pair was invalid. When a replication pair becomes abnormal, it enters this state.
   * *   creating: The replication pair was being created.
   * *   created: The replication pair was created.
   * *   create_failed: The replication pair failed to be created.
   * *   initial_syncing: Data was synchronized from the primary disk to the secondary disk for the first time. After a replication pair is created and activated, the replication pair is in this state the first time data is synchronized from the primary disk to the secondary disk.
   * *   manual_syncing: Data was being manually synchronized from the primary disk to the secondary disk. After data is manually synchronized from the primary disk to the secondary disk, the replication pair returns to the stopped state. The first time data is manually synchronized from the primary disk to the secondary disk, the replication pair is in the manual_syncing state during the synchronization.
   * *   syncing: Data was being synchronized from the primary disk to the secondary disk. When data is being asynchronously replicated from the primary disk to the secondary disk again in subsequent operations, the replication pair is in this state.
   * *   normal: The replication pair was working as expected. When the system finishes replicating data from the primary disk to the secondary disk within the current replication cycle, the replication pair enters this state.
   * *   stopping: The replication pair was being stopped.
   * *   stopped: The replication pair was stopped.
   * *   stop_failed: The replication pair failed to be stopped.
   * *   failovering: A failover was being performed.
   * *   failovered: A failover was performed.
   * *   failover_failed: A failover failed to be performed.
   * *   reprotecting: A reverse replication was being performed.
   * *   reprotect_failed: A reverse replication failed to be performed.
   * *   deleting: The replication pair was being deleted.
   * *   delete_failed: The replication pair failed to be deleted.
   * *   deleted: The replication pair was deleted.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The message that describes the state of the replication pair. This parameter has a value when `Status` has a value of invalid or `create_failed`. Valid values:
   * 
   * *   PrePayOrderExpired: The replication pair has expired.
   * *   PostPayOrderCeaseService: The pay-as-you-go replication pair has been stopped due to an overdue payment.
   * *   DeviceRemoved: The primary or secondary disk has been deleted.
   * *   DeviceKeyChanged: The `DeviceKey` mapping of the primary or secondary disk has changed.
   * *   DeviceSizeChanged: The `DeviceSize` value of the primary or secondary disk has changed.
   * *   OperationDenied.QuotaExceed: The maximum number of replication pairs that can be created has been reached.
   * 
   * @example
   * PrePayOrderExpired
   */
  statusMessage?: string;
  /**
   * @remarks
   * The tags of the replication pair.
   */
  tags?: DescribeDiskReplicaPairsResponseBodyReplicaPairsTags[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      destinationDiskId: 'DestinationDiskId',
      destinationRegion: 'DestinationRegion',
      destinationZoneId: 'DestinationZoneId',
      expiredTime: 'ExpiredTime',
      lastRecoverPoint: 'LastRecoverPoint',
      pairName: 'PairName',
      primaryRegion: 'PrimaryRegion',
      primaryZone: 'PrimaryZone',
      RPO: 'RPO',
      replicaGroupId: 'ReplicaGroupId',
      replicaGroupName: 'ReplicaGroupName',
      replicaPairId: 'ReplicaPairId',
      resourceGroupId: 'ResourceGroupId',
      site: 'Site',
      sourceDiskId: 'SourceDiskId',
      sourceRegion: 'SourceRegion',
      sourceZoneId: 'SourceZoneId',
      standbyRegion: 'StandbyRegion',
      standbyZone: 'StandbyZone',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      chargeType: 'string',
      createTime: 'number',
      description: 'string',
      destinationDiskId: 'string',
      destinationRegion: 'string',
      destinationZoneId: 'string',
      expiredTime: 'number',
      lastRecoverPoint: 'number',
      pairName: 'string',
      primaryRegion: 'string',
      primaryZone: 'string',
      RPO: 'number',
      replicaGroupId: 'string',
      replicaGroupName: 'string',
      replicaPairId: 'string',
      resourceGroupId: 'string',
      site: 'string',
      sourceDiskId: 'string',
      sourceRegion: 'string',
      sourceZoneId: 'string',
      standbyRegion: 'string',
      standbyZone: 'string',
      status: 'string',
      statusMessage: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDiskReplicaPairsResponseBodyReplicaPairsTags },
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

export class DescribeEnterpriseSnapshotPolicyRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the enterprise-level snapshot policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the enterprise-level snapshot policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
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

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfoRegions extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The retention period of snapshot copies in the destination region. Unit: day.
   * 
   * @example
   * 7
   */
  retainDays?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      retainDays: 'RetainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      retainDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the cross-region replication feature is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The destination regions that store snapshot copies.
   */
  regions?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfoRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule extends $dara.Model {
  /**
   * @remarks
   * The maximum number of snapshots that can be retained.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The value of the retention period of snapshots.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of the retention period of snapshots.
   * 
   * @example
   * DAYS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule extends $dara.Model {
  /**
   * @remarks
   * The cron expression of the enterprise-level snapshot policy.
   */
  cronExpression?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules extends $dara.Model {
  /**
   * @remarks
   * The unit of the special retention period.
   * 
   * @example
   * WEEKS
   */
  specialPeriodUnit?: string;
  /**
   * @remarks
   * The value of the retention period.
   * 
   * @example
   * 1
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of the retention period.
   * 
   * @example
   * WEEKS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      specialPeriodUnit: 'SpecialPeriodUnit',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPeriodUnit: 'string',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the special retention period is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instant access feature is enabled.
   * 
   * @example
   * false
   */
  enableImmediateAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableImmediateAccess: 'EnableImmediateAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableImmediateAccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag of the enterprise-level snapshot policy.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag of the enterprise-level snapshot policy.
   * 
   * @example
   * value
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

export class DescribeEnterpriseSnapshotPolicyResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The time when the enterprise-level snapshot policy was created.
   * 
   * @example
   * 2023-06-24T06:03:35Z
   */
  createTime?: string;
  /**
   * @remarks
   * The replication rule of snapshots in the enterprise-level snapshot policy.
   */
  crossRegionCopyInfo?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo;
  /**
   * @remarks
   * The description of the enterprise-level snapshot policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The disks that are associated with the snapshot policy.
   */
  diskIds?: string[];
  /**
   * @remarks
   * Indicates whether snapshots are managed.
   * 
   * @example
   * false
   */
  managedForEcs?: boolean;
  /**
   * @remarks
   * The name of the enterprise-level snapshot policy.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The ID of the enterprise-level snapshot policy.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * the resource group
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The retention rule of the enterprise-level snapshot policy.
   */
  retainRule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule;
  /**
   * @remarks
   * The scheduling rule of the enterprise-level snapshot policy.
   */
  schedule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule;
  /**
   * @remarks
   * The special retention rules of the enterprise-level snapshot policy.
   */
  specialRetainRules?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules;
  /**
   * @remarks
   * The status of the enterprise-level snapshot policy.
   * 
   * @example
   * DISABLED
   */
  state?: string;
  /**
   * @remarks
   * The storage rule of snapshots in the enterprise-level snapshot policy.
   */
  storageRule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule;
  /**
   * @remarks
   * the pair tags
   */
  tags?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags[];
  /**
   * @remarks
   * The number of objects that are associated with the enterprise-level snapshot policy.
   * 
   * @example
   * 10
   */
  targetCount?: number;
  /**
   * @remarks
   * The type of the enterprise-level snapshot policy.
   * 
   * @example
   * DISK
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      diskIds: 'DiskIds',
      managedForEcs: 'ManagedForEcs',
      name: 'Name',
      policyId: 'PolicyId',
      resourceGroupId: 'ResourceGroupId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
      tags: 'Tags',
      targetCount: 'TargetCount',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      crossRegionCopyInfo: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo,
      desc: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      managedForEcs: 'boolean',
      name: 'string',
      policyId: 'string',
      resourceGroupId: 'string',
      retainRule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule,
      schedule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule,
      specialRetainRules: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules,
      state: 'string',
      storageRule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule,
      tags: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags },
      targetCount: 'number',
      targetType: 'string',
    };
  }

  validate() {
    if(this.crossRegionCopyInfo && typeof (this.crossRegionCopyInfo as any).validate === 'function') {
      (this.crossRegionCopyInfo as any).validate();
    }
    if(Array.isArray(this.diskIds)) {
      $dara.Model.validateArray(this.diskIds);
    }
    if(this.retainRule && typeof (this.retainRule as any).validate === 'function') {
      (this.retainRule as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    if(this.specialRetainRules && typeof (this.specialRetainRules as any).validate === 'function') {
      (this.specialRetainRules as any).validate();
    }
    if(this.storageRule && typeof (this.storageRule as any).validate === 'function') {
      (this.storageRule as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyResourceEvents extends $dara.Model {
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * need snapshot
   */
  description?: string;
  /**
   * @remarks
   * The end time of the event, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   * 
   * @example
   * 1679538083000
   */
  endTime?: string;
  /**
   * @remarks
   * The level of the event. Valid values:
   * 
   * 1.  INFO
   * 2.  WARN
   * 3.  CRITICAL
   * 
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @remarks
   * The name of the event. Valid values:
   * 
   * *   NoSnapshot: indicates the event that is triggered because no snapshot is created for a disk to protect data on the disk.
   * *   BurstIOTriggered: indicates the event that is triggered when a burst I/O operation is performed on a disk.
   * *   CostOptimizationNeeded: indicates the event that is triggered when cost optimization is required.
   * *   DiskSpecNotMatchedWithInstance: indicates the event that is triggered because the specifications of a disk do not match the instance to which the disk is attached.
   * *   DiskIONo4kAligned: indicates the event that is triggered because the physical and logical sectors involved in a read or write operation are not 4K aligned.
   * *   DiskIOHang: indicates the event that is triggered when an I/O hang occurs on a disk.
   * *   InstanceIOPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of IOPS on an instance reaches the upper limit.
   * *   InstanceBPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of BPS on an instance reaches the upper limit.
   * *   DiskIOPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of IOPS on a disk reaches the upper limit for the associated instance.
   * *   DiskBPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of BPS on a disk reaches the upper limit for the associated instance.
   * *   DiskIOPSExceedDiskMaxLimit: indicates the event that is triggered when the number of IOPS on a disk reaches the upper limit for the disk.
   * *   DiskBPSExceedDiskMaxLimit: indicates the event that is triggered when the number of BPS on a disk reaches the upper limit for the disk.
   * 
   * @example
   * DiskIOHang
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * 1.  Notification
   * 2.  SystemException
   * 3.  Alert
   * 
   * @example
   * Alert
   */
  eventType?: string;
  /**
   * @remarks
   * Extra attributes of event, possible fields are:
   * 
   * - EcsInstanceId: ECS instance ID where the cloud disk is mounted;
   * - Adapter: cloud disk mount point.
   * 
   * @example
   * {\\"EcsInstanceId\\":\\"i-uf6dkn9qpcw6y94g7ag7\\",\\"Adapter\\":\\"hda\\"}
   */
  extraAttributes?: string;
  /**
   * @remarks
   * The recommended action after the event occurred. Valid values:
   * 
   * *   ModifyDiskSpec
   * *   CreateSnapshot
   * *   ResizeDisk
   * *   AdjustProvision
   * *   ModifyInstanceSpec
   * 
   * @example
   * AdjustProvision
   */
  recommendAction?: string;
  /**
   * @remarks
   * The codes of the parameters for the recommended action after the event occurred.
   * 
   * @example
   * 4296
   */
  recommendParams?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * disk
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time of the event, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   * 
   * @example
   * 1684204822000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * 1.  WillExecute
   * 2.  Executing
   * 3.  Executed
   * 4.  Ignore
   * 5.  Expired
   * 6.  Deleted
   * 
   * @example
   * WillExecute
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endTime: 'EndTime',
      eventLevel: 'EventLevel',
      eventName: 'EventName',
      eventType: 'EventType',
      extraAttributes: 'ExtraAttributes',
      recommendAction: 'RecommendAction',
      recommendParams: 'RecommendParams',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'string',
      eventLevel: 'string',
      eventName: 'string',
      eventType: 'string',
      extraAttributes: 'string',
      recommendAction: 'string',
      recommendParams: 'string',
      resourceId: 'string',
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensMonitorDisksResponseBodyDiskInfosTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * user
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

export class DescribeLensMonitorDisksResponseBodyDiskInfos extends $dara.Model {
  /**
   * @remarks
   * The BPS.
   * 
   * @example
   * 300
   */
  bps?: number;
  /**
   * @remarks
   * Indicates whether the performance burst feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * - cloud
   * - cloud_efficiency
   * - cloud_ssd
   * - cloud_essd
   * - cloud_auto
   * - cloud_essd_entry
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-cd401****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * disk-28c6b****
   */
  diskName?: string;
  /**
   * @remarks
   * The disk status. Valid values:
   * 
   * - Available
   * - Deleted
   * 
   * @example
   * Available
   */
  diskStatus?: string;
  /**
   * @remarks
   * The disk type. Valid values:
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The IOPS.
   * 
   * @example
   * 4000
   */
  iops?: number;
  /**
   * @remarks
   * Event tags of the disk.
   */
  lensTags?: string[];
  /**
   * @remarks
   * The new performance level of the ESSD. Valid values:
   * 
   * *   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD delivers up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk to use as the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.
   * 
   * Baseline performance = min{1,800 + 50 × Capacity, 50,000}
   * 
   * This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * 4000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 64
   */
  size?: number;
  /**
   * @remarks
   * Tags of the disk.
   */
  tags?: DescribeLensMonitorDisksResponseBodyDiskInfosTags[];
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      burstingEnabled: 'BurstingEnabled',
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      diskName: 'DiskName',
      diskStatus: 'DiskStatus',
      diskType: 'DiskType',
      iops: 'Iops',
      lensTags: 'LensTags',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      size: 'Size',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      burstingEnabled: 'boolean',
      diskCategory: 'string',
      diskId: 'string',
      diskName: 'string',
      diskStatus: 'string',
      diskType: 'string',
      iops: 'number',
      lensTags: { 'type': 'array', 'itemType': 'string' },
      performanceLevel: 'string',
      provisionedIops: 'number',
      regionId: 'string',
      size: 'number',
      tags: { 'type': 'array', 'itemType': DescribeLensMonitorDisksResponseBodyDiskInfosTags },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lensTags)) {
      $dara.Model.validateArray(this.lensTags);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The datapoints that consist of consecutive timestamps in seconds and metric values that were recorded at these time points.
   * 
   * @example
   * {
   *         "1699258861": 1,
   *         "1699259461": 0,
   *         "1699260061": 0,
   *         "1699260661": 0,
   *         "1699261261": 0,
   *         "1699261861": 0,
   *         "1699262461": 0,
   *         "1699263061": 0,
   *         "1699263661": 0,
   *         "1699264261": 0,
   *         "1699264861": 0
   * }
   */
  datapoints?: any;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"DiskId": "d-1234"}
   */
  labels?: any;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: 'any',
      labels: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePairDrillsResponseBodyDrills extends $dara.Model {
  /**
   * @remarks
   * The ID of the drill disk.
   * 
   * @example
   * d-xxx
   */
  drillDiskId?: string;
  /**
   * @remarks
   * The status of the drill disk. Valid values:
   * 
   * *   created
   * *   deleted
   * *   creating
   * *   deleting
   * 
   * >  This parameter can also display error code details if your drill disk fails to be created or deleted.
   * 
   * @example
   * created
   */
  drillDiskStatus?: string;
  /**
   * @remarks
   * The ID of the drill.
   * 
   * @example
   * drill-xxx
   */
  drillId?: string;
  /**
   * @remarks
   * The recovery point of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1690855931
   */
  recoverPoint?: number;
  /**
   * @remarks
   * The beginning time of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1690855888
   */
  startAt?: number;
  /**
   * @remarks
   * The status of the drill. Valid values:
   * 
   * *   execute_failed
   * *   executed
   * *   executing
   * *   clear_failed
   * *   clearing
   * 
   * @example
   * executing
   */
  status?: string;
  /**
   * @remarks
   * The error message that was displayed if the drill failed to be executed.
   * 
   * @example
   * PAIR_SYNCPOINT_NOT_FOUND
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      drillDiskId: 'DrillDiskId',
      drillDiskStatus: 'DrillDiskStatus',
      drillId: 'DrillId',
      recoverPoint: 'RecoverPoint',
      startAt: 'StartAt',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillDiskId: 'string',
      drillDiskStatus: 'string',
      drillId: 'string',
      recoverPoint: 'number',
      startAt: 'number',
      status: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsZones extends $dara.Model {
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * Hangzhou Zone H
   */
  localName?: string;
  /**
   * @remarks
   * The type of resource list.
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      resourceTypes: 'ResourceTypes',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * ebs.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Details about the zones.
   */
  zones?: DescribeRegionsResponseBodyRegionsZones[];
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the drill disk.
   * 
   * @example
   * d-xxx
   */
  drillDiskId?: string;
  /**
   * @remarks
   * The status of the drill disk. Valid values:
   * 
   * *   created
   * *   deleted
   * *   creating
   * *   deleting
   * 
   * >  This parameter can also display error code details if your drill disk fails to be created or deleted.
   * 
   * @example
   * created
   */
  drillDiskStatus?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * @example
   * pair-xxx
   */
  pairId?: string;
  static names(): { [key: string]: string } {
    return {
      drillDiskId: 'DrillDiskId',
      drillDiskStatus: 'DrillDiskStatus',
      pairId: 'PairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillDiskId: 'string',
      drillDiskStatus: 'string',
      pairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaGroupDrillsResponseBodyDrills extends $dara.Model {
  /**
   * @remarks
   * The ID of the drill.
   * 
   * @example
   * pg-drill-xxx
   */
  drillId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * @example
   * pg-xxx
   */
  groupId?: string;
  /**
   * @remarks
   * The information of replication pairs.
   */
  pairsInfo?: DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo[];
  /**
   * @remarks
   * The recovery point of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1691114995
   */
  recoverPoint?: number;
  /**
   * @remarks
   * The beginning time of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1649750977
   */
  startAt?: number;
  /**
   * @remarks
   * The status of the drill. Valid values:
   * 
   * *   execute_failed
   * *   executed
   * *   executing
   * *   clear_failed
   * *   clearing
   * 
   * @example
   * executed
   */
  status?: string;
  /**
   * @remarks
   * The error message that appears if the drill fails to be executed.
   * 
   * @example
   * GROUP_SYNCPOINT_NOT_FOUND
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      groupId: 'GroupId',
      pairsInfo: 'PairsInfo',
      recoverPoint: 'RecoverPoint',
      startAt: 'StartAt',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      groupId: 'string',
      pairsInfo: { 'type': 'array', 'itemType': DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo },
      recoverPoint: 'number',
      startAt: 'number',
      status: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pairsInfo)) {
      $dara.Model.validateArray(this.pairsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSolutionInstanceConfigurationRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The key of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportResponseBodyDatasData extends $dara.Model {
  /**
   * @remarks
   * Data Points.
   * 
   * @example
   * {
   *   "1726416000": 0.44,
   *   "1726502400": 0.44,
   *   "1726588800": 0.44,
   *   "1726675200": 0.44,
   *   "1726761600": 0.43,
   *   "1726848000": 0.43,
   *   "1726934400": 0.43,
   *   "1727020800": 0.43
   * }
   */
  dataPoints?: { [key: string]: any };
  /**
   * @remarks
   * Data Labels.
   * 
   * @example
   * {
   *   "category": "cloud"
   * }
   */
  labels?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.dataPoints) {
      $dara.Model.validateMap(this.dataPoints);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportResponseBodyDatas extends $dara.Model {
  /**
   * @remarks
   * Data.
   */
  data?: GetReportResponseBodyDatasData[];
  /**
   * @remarks
   * Data Title.
   * 
   * @example
   * disk_count_percent_by_category
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetReportResponseBodyDatasData },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportsResponseBodyHistoryReports extends $dara.Model {
  /**
   * @remarks
   * Application name.
   * 
   * @example
   * default
   */
  appName?: string;
  /**
   * @remarks
   * Report ID.
   * 
   * @example
   * report-e19c7b597f5fXX
   */
  reportId?: string;
  /**
   * @remarks
   * Report name.
   * 
   * @example
   * default-2024-09-30~2024-10-07-Usage Report
   */
  reportName?: string;
  /**
   * @remarks
   * Report generation time.
   * 
   * @example
   * 2024-10-07T02:09:17Z
   */
  reportTime?: string;
  /**
   * @remarks
   * Report subscription period.
   * 
   * @example
   * Weekly
   */
  subscribePeriod?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      reportId: 'ReportId',
      reportName: 'ReportName',
      reportTime: 'ReportTime',
      subscribePeriod: 'SubscribePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      reportId: 'string',
      reportName: 'string',
      reportTime: 'string',
      subscribePeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N used for exact search of EBS resources. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * The `Tag.N` parameter pair (Tag.N.Key and Tag.N.Value) is used for exact search of EBS resources that have specified tags added. Each tag is a key-value pair.
   * 
   * *   If you specify only `Tag.N.Key`, all EBS resources whose tags contain the specified tag key are returned.
   * *   If you specify only `Tag.N.Value`, the `InvalidParameter.TagValue` error is returned.
   * *   If you specify multiple tag key-value pairs at the same time, only EBS resources that match all tag key-value pairs are returned.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N used for exact search of EBS resources. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * tag-value
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * pair-cn-c4d2t7f****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   dedicatedblockstoragecluster: dedicated block storage cluster
   * *   diskreplicapair: replication pair
   * *   diskreplicagroup: replication pair-consistent group
   * 
   * @example
   * pair
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
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

export class QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems extends $dara.Model {
  /**
   * @remarks
   * Available capacity size of the dedicated block storage cluster.
   * 
   * @example
   * 61360
   */
  availableSize?: number;
  /**
   * @remarks
   * Total capacity size of the dedicated block storage cluster.
   * 
   * @example
   * 61440
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      availableSize: 'AvailableSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned metrics.
   */
  monitorItems?: QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems;
  /**
   * @remarks
   * The ID list of the resource.
   * 
   * @example
   * dbsc-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The timestamp when the data is collected.
   * 
   * @example
   * 1606403800
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      monitorItems: 'MonitorItems',
      resourceId: 'ResourceId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItems: QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems,
      resourceId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    if(this.monitorItems && typeof (this.monitorItems as any).validate === 'function') {
      (this.monitorItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:` or contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
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

export class UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Number of days to retain the destination snapshot. The range of values is greater than 1.
   * 
   * @example
   * 7
   */
  retainDays?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      retainDays: 'RetainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      retainDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo extends $dara.Model {
  /**
   * @remarks
   * Whether cross-region replication is enabled. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * Destination region information.
   */
  regions?: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestRetainRule extends $dara.Model {
  /**
   * @remarks
   * Maximum number of retained snapshots.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The time interval , valid value greater than 1.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of time, valid values:
   * 
   * - DAYS
   * - WEEKS
   * 
   * @example
   * DAYS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestSchedule extends $dara.Model {
  /**
   * @remarks
   * The time when the policy will to be scheduled. Valid values: Set the parameter in a cron expression.
   * 
   * For example, you can use `0 0 4 1/1 * ?` to specify 04:00:00 (UTC+8) on the first day of each month.
   * 
   * This parameter is required.
   */
  cronExpression?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules extends $dara.Model {
  /**
   * @remarks
   * The periodic unit for specially retained snapshots. If configured to WEEKS, it provides special retention for the first snapshot of each week. The retention period is determined by TimeUnit and TimeInterval. The range of values are:
   * - WEEKS
   * - MONTHS
   * - YEARS"
   * 
   * @example
   * WEEKS
   */
  specialPeriodUnit?: string;
  /**
   * @remarks
   * Retention Time Value. The range of values is greater than 1.
   * 
   * @example
   * 30
   */
  timeInterval?: number;
  /**
   * @remarks
   * Retention time unit for special snapshots. The range of values:
   * 
   * - DAYS
   * 
   * - WEEKS
   * 
   * @example
   * WEEKS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      specialPeriodUnit: 'SpecialPeriodUnit',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPeriodUnit: 'string',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the special retention is enabled.
   * 
   * *   true: enable
   * *   false: disable
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestStorageRule extends $dara.Model {
  /**
   * @remarks
   * Whether to enable the rapid availability of snapshots. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enableImmediateAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableImmediateAccess: 'EnableImmediateAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableImmediateAccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the IDs of existing replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
      replicaPairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDiskReplicaPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDiskReplicaPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDiskReplicaPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyLensServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyLensServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyLensServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyLensServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEnterpriseSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of disks.
   */
  diskTargets?: string[];
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskTargets: 'DiskTargets',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskTargets: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskTargets)) {
      $dara.Model.validateArray(this.diskTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEnterpriseSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF4CA176-3358-5B74-B317-B1908B4B1F7D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEnterpriseSnapshotPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindEnterpriseSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindEnterpriseSnapshotPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLensServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLensServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelLensServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelLensServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the new resource group. You can view the available resource groups in the Resource Management console. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-123
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource. For example, if you set ResourceType to diskreplicapair, set this parameter to the ID of a replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-123
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   dedicatedblockstoragecluster: dedicated block storage cluster.
   * *   diskreplicapair: replication pair.
   * *   diskreplicagroup: replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * diskreplicapair
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearPairDrillRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the drill. You can call the [DescribePairDrills](https://help.aliyun.com/document_detail/2584480.html) operation to query the disaster recovery drills that were performed on replication pairs in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * drill-xxxx
   */
  drillId?: string;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the most recent list of replication pairs, including replication pair IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-xxxx
   */
  pairId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      pairId: 'PairId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      pairId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearPairDrillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearPairDrillResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearPairDrillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ClearPairDrillResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearReplicaGroupDrillRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the drill. You can call the [DescribeReplicaGroupDrills](https://help.aliyun.com/document_detail/2584481.html) operation to query disaster recovery drills that were performed on replication pairs in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-drill-xxxx
   */
  drillId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the most recent list of replication pair-consistent groups, including group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      groupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearReplicaGroupDrillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearReplicaGroupDrillResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearReplicaGroupDrillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ClearReplicaGroupDrillResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedBlockStorageClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone in which to create the dedicated block storage cluster. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan-b
   */
  azone?: string;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster. Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
   * 
   * >  If the capacity of a dedicated block storage cluster is less than 576 TiB, the maximum throughput per TiB cannot exceed 52 MB/s. If the capacity of a dedicated block storage cluster is greater than 576 TiB, the maximum throughput per TiB cannot exceed 26 MB/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 61440
   */
  capacity?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * test1233
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  dbscId?: string;
  /**
   * @remarks
   * The name of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * myDBSCCluster
   */
  dbscName?: string;
  /**
   * @remarks
   * The subscription duration of the dedicated block storage cluster. Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
   * 
   * @example
   * 12
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration specified by `Period`. Set the value to Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the region in which to create the dedicated block storage cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the dedicated block storage cluster.
   * 
   * @example
   * rg-acfmvs*******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags to add to the dedicated block storage cluster. You can specify up to 20 tags.
   */
  tag?: CreateDedicatedBlockStorageClusterRequestTag[];
  /**
   * @remarks
   * The type of the dedicated block storage cluster. Valid values:
   * 
   * *   Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
   * *   Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
   * 
   * Default value: Premium.
   * 
   * For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Premium
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      azone: 'Azone',
      capacity: 'Capacity',
      dbscId: 'DbscId',
      dbscName: 'DbscName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azone: 'string',
      capacity: 'number',
      dbscId: 'string',
      dbscName: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDedicatedBlockStorageClusterRequestTag },
      type: 'string',
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

export class CreateDedicatedBlockStorageClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * @example
   * dbsc-f8z4d3k4nsgg9okb****
   */
  dbscId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 50155660025****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbscId: 'DbscId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbscId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedBlockStorageClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDedicatedBlockStorageClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDedicatedBlockStorageClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value. Unit: Mbit/s.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair-consistent group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The region ID of the secondary site.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The zone ID of the secondary site.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-e
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The name of the replication pair-consistent group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * myreplicagrouptest
   */
  groupName?: string;
  /**
   * @remarks
   * The RPO of the replication pair-consistent group. Unit: seconds. Valid value: 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The ID of the region in which to create the replication pair-consistent group. The primary site is deployed in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair-consistent group belongs.
   * 
   * @example
   * rg-acfmvs*******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The zone ID of the primary site.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-f
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The tags. Up to 20 tags are supported.
   */
  tag?: CreateDiskReplicaGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      destinationRegionId: 'DestinationRegionId',
      destinationZoneId: 'DestinationZoneId',
      groupName: 'GroupName',
      RPO: 'RPO',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceZoneId: 'SourceZoneId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      destinationRegionId: 'string',
      destinationZoneId: 'string',
      groupName: 'string',
      RPO: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceZoneId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDiskReplicaGroupRequestTag },
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

export class CreateDiskReplicaGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * @example
   * pg-xxxxxxx
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      replicaGroupId: 'ReplicaGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaGroupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDiskReplicaGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDiskReplicaGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth to use to asynchronously replicate data between the primary disk and secondary disk. Unit: Kbit/s. Valid values:
   * 
   * *   10240 : equal to 10 Mbit/s
   * *   20480 : equal to 20 Mbit/s
   * *   51200 : equal to 50 Mbit/s
   * *   102400 : equal to 100 Mbit/s
   * 
   * Default value: 10240.
   * 
   * When you set the ChargeType parameter to POSTPAY, the Bandwidth parameter is automatically set to 0 and cannot be modified. The value 0 indicates that bandwidth is dynamically allocated based on the volume of data that is asynchronously replicated from the primary disk to the secondary disk.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the replication pair. Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * Default value: POSTPAY.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the secondary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-sa1f82p58p1tdw9g****
   */
  destinationDiskId?: string;
  /**
   * @remarks
   * The region ID of the secondary disk. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The zone ID of the secondary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-e
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The ID of the primary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-iq80sgp4d0xbk24q****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the replication pair. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * TestReplicaPair
   */
  pairName?: string;
  /**
   * @remarks
   * The subscription duration of the replication pair. This parameter is required when the `ChargeType` parameter is set to PREPAY. The unit of the subscription duration is specified by the `PeriodUnit` parameter.
   * 
   * *   Valid values when the `PeriodUnit` parameter is set to Week: 1, 2, 3, and 4.
   * *   Valid values when the `PeriodUnit` parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration of the replication pair. Valid values:
   * 
   * *   Week.
   * *   Month
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair. Unit: seconds. Set the value to 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The ID of the region in which to create the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the replication group.
   * 
   * @example
   * rg-acfmvs****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The zone ID of the primary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-f
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The resource tags. You can specify up to 20 tags.
   */
  tag?: CreateDiskReplicaPairRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      description: 'Description',
      destinationDiskId: 'DestinationDiskId',
      destinationRegionId: 'DestinationRegionId',
      destinationZoneId: 'DestinationZoneId',
      diskId: 'DiskId',
      pairName: 'PairName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      RPO: 'RPO',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceZoneId: 'SourceZoneId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      chargeType: 'string',
      clientToken: 'string',
      description: 'string',
      destinationDiskId: 'string',
      destinationRegionId: 'string',
      destinationZoneId: 'string',
      diskId: 'string',
      pairName: 'string',
      period: 'number',
      periodUnit: 'string',
      RPO: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceZoneId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDiskReplicaPairRequestTag },
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

export class CreateDiskReplicaPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 123456****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      replicaPairId: 'ReplicaPairId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      replicaPairId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDiskReplicaPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfo?: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the snapshot policy.
   * 
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot retention rule.
   * 
   * This parameter is required.
   */
  retainRule?: CreateEnterpriseSnapshotPolicyRequestRetainRule;
  /**
   * @remarks
   * The rule for scheduling.
   * 
   * This parameter is required.
   */
  schedule?: CreateEnterpriseSnapshotPolicyRequestSchedule;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRules?: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * - ENABLED: Enable snapshot policy execution.
   * 
   * - DISABLED: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRule?: CreateEnterpriseSnapshotPolicyRequestStorageRule;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateEnterpriseSnapshotPolicyRequestTag[];
  /**
   * @remarks
   * Binding target type, valid value:
   * 
   * - DISK
   * 
   * This parameter is required.
   * 
   * @example
   * DISK
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
      tag: 'Tag',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfo: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo,
      desc: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      retainRule: CreateEnterpriseSnapshotPolicyRequestRetainRule,
      schedule: CreateEnterpriseSnapshotPolicyRequestSchedule,
      specialRetainRules: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules,
      state: 'string',
      storageRule: CreateEnterpriseSnapshotPolicyRequestStorageRule,
      tag: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestTag },
      targetType: 'string',
    };
  }

  validate() {
    if(this.crossRegionCopyInfo && typeof (this.crossRegionCopyInfo as any).validate === 'function') {
      (this.crossRegionCopyInfo as any).validate();
    }
    if(this.retainRule && typeof (this.retainRule as any).validate === 'function') {
      (this.retainRule as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    if(this.specialRetainRules && typeof (this.specialRetainRules as any).validate === 'function') {
      (this.specialRetainRules as any).validate();
    }
    if(this.storageRule && typeof (this.storageRule as any).validate === 'function') {
      (this.storageRule as any).validate();
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

export class CreateEnterpriseSnapshotPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfoShrink?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the snapshot policy.
   * 
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot retention rule.
   * 
   * This parameter is required.
   */
  retainRuleShrink?: string;
  /**
   * @remarks
   * The rule for scheduling.
   * 
   * This parameter is required.
   */
  scheduleShrink?: string;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRulesShrink?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * - ENABLED: Enable snapshot policy execution.
   * 
   * - DISABLED: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRuleShrink?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateEnterpriseSnapshotPolicyShrinkRequestTag[];
  /**
   * @remarks
   * Binding target type, valid value:
   * 
   * - DISK
   * 
   * This parameter is required.
   * 
   * @example
   * DISK
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfoShrink: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retainRuleShrink: 'RetainRule',
      scheduleShrink: 'Schedule',
      specialRetainRulesShrink: 'SpecialRetainRules',
      state: 'State',
      storageRuleShrink: 'StorageRule',
      tag: 'Tag',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfoShrink: 'string',
      desc: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      retainRuleShrink: 'string',
      scheduleShrink: 'string',
      specialRetainRulesShrink: 'string',
      state: 'string',
      storageRuleShrink: 'string',
      tag: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyShrinkRequestTag },
      targetType: 'string',
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

export class CreateEnterpriseSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The id of a policy.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A8959DA-1E04-5724-8288-58334031454E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEnterpriseSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEnterpriseSnapshotPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDiskReplicaGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDiskReplicaGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the primary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the region information of replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A37597A6-BB99-19B3-85EA-4C2B91F0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDiskReplicaPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B9F716DF-FAFD-50FD-B962-BCE0C837639A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseSnapshotPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEnterpriseSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEnterpriseSnapshotPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClusterDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsc-cn-od43bf****
   */
  dbscId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Maximum value: 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned in the previous call to the DescribeDedicatedBlockStorageClusterDisks operation. Leave this parameter empty the first time you call this operation.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the dedicated block storage cluster resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbscId: 'DbscId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbscId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClusterDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the cloud disks.
   */
  disks?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks;
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
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

export class DescribeDedicatedBlockStorageClusterDisksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDedicatedBlockStorageClusterDisksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDedicatedBlockStorageClusterDisksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The zone ID of the dedicated block storage cluster. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-heyuan-b
   */
  azoneId?: string;
  /**
   * @remarks
   * The category of disks that can be created in the dedicated block storage cluster.
   * 
   * Set the value to cloud_essd. Only enhanced SSDs (ESSDs) can be created in dedicated block storage clusters.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  clientToken?: string;
  dedicatedBlockStorageClusterId?: string[];
  maxResults?: number;
  nextToken?: string;
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
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated block storage cluster belongs.
   * 
   * @example
   * rg-acfmvs4****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The states of dedicated block storage clusters. Valid values:
   * 
   * *   Preparing
   * *   Running
   * *   Expired
   * *   Offline
   * 
   * Multiple states can be specified. Valid values of N: 1, 2, 3, and 4.
   */
  status?: string[];
  /**
   * @remarks
   * The tags. Up to 20 tags are supported.
   */
  tag?: DescribeDedicatedBlockStorageClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      category: 'Category',
      clientToken: 'ClientToken',
      dedicatedBlockStorageClusterId: 'DedicatedBlockStorageClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      category: 'string',
      clientToken: 'string',
      dedicatedBlockStorageClusterId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClustersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedBlockStorageClusterId)) {
      $dara.Model.validateArray(this.dedicatedBlockStorageClusterId);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
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

export class DescribeDedicatedBlockStorageClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the dedicated block storage clusters.
   */
  dedicatedBlockStorageClusters?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClusters[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedBlockStorageClusters: 'DedicatedBlockStorageClusters',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedBlockStorageClusters: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClusters },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedBlockStorageClusters)) {
      $dara.Model.validateArray(this.dedicatedBlockStorageClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClustersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDedicatedBlockStorageClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDedicatedBlockStorageClustersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: enhanced SSD (ESSD).
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-06-01T05:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100.
   * 
   * Default values:
   * 
   * *   If this parameter is not specified or is set to a value smaller than 10, the default value is 10.
   * *   If this parameter is set to a value greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in this request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the disk. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the list of regions that support CloudLens for EBS.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The event type. Set the value to DataNeedProtect, which indicates that the disk data needs to be protected.
   * 
   * @example
   * DataNeedProtect
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
      diskId: 'string',
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The risk events of the disk.
   */
  diskEvents?: DescribeDiskEventsResponseBodyDiskEvents[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diskEvents: 'DiskEvents',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskEvents: { 'type': 'array', 'itemType': DescribeDiskEventsResponseBodyDiskEvents },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.diskEvents)) {
      $dara.Model.validateArray(this.diskEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskEventsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiskEventsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The end of the time range during which you want to query the near real-time monitoring data of the disk. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-01T05:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The interval at which the near real-time monitoring data is collected. Unit: seconds. Valid values:
   * 
   * *   5
   * *   60
   * 
   * Default value: 5.
   * 
   * @example
   * 5
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range during which you want to query the near real-time monitoring data of the disk. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the monitoring data. Valid values:
   * 
   * *   basic: baseline performance data.
   * *   pro: burst performance data, such as burst I/O operations.
   * 
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      endTime: 'EndTime',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      endTime: 'string',
      period: 'number',
      regionId: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The near real-time monitoring data of the disk.
   */
  monitorData?: DescribeDiskMonitorDataResponseBodyMonitorData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
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
      monitorData: 'MonitorData',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: { 'type': 'array', 'itemType': DescribeDiskMonitorDataResponseBodyMonitorData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.monitorData)) {
      $dara.Model.validateArray(this.monitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiskMonitorDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the disks. The value is a JSON array that contains multiple disk IDs. Separate the IDs with commas (,).
   * 
   * @example
   * ["d-bp67acfmxazb4p****","d-bp67acfmxazs5t****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The end of the time range during which you want to query the near real-time monitoring data of the disks. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-01T05:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries per page. If you specify this parameter, both `MaxResults` and `NextToken` are used for a paged query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in this request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * e71d8a535bd9c****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the list of regions that support CloudLens for EBS.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range during which you want to query the near real-time monitoring data of the disks. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the monitoring data. Set the value to pro.
   * 
   * pro: burst performance data, such as burst I/O operations.
   * 
   * This parameter is required.
   * 
   * @example
   * pro
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskIds: 'DiskIds',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIds: 'string',
      endTime: 'string',
      maxResults: 'string',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The near real-time monitoring data of the disks.
   */
  monitorData?: DescribeDiskMonitorDataListResponseBodyMonitorData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * e71d8a535bd9c****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: { 'type': 'array', 'itemType': DescribeDiskMonitorDataListResponseBodyMonitorData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.monitorData)) {
      $dara.Model.validateArray(this.monitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskMonitorDataListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiskMonitorDataListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the replication pair-consistent groups. You can specify the IDs of one or more replication pair-consistent groups. Separate the IDs with commas (,).
   * 
   * This parameter is empty by default, which indicates that all replication pair-consistent groups in the specified region are queried. You can specify up to the IDs of 100 replication pair-consistent groups.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  groupIds?: string;
  /**
   * @remarks
   * The maximum number of entries per page. You can use this parameter together with NextToken.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the replication pair-consistent group. You can perform a fuzzy search.
   * 
   * @example
   * pg-name***
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. If you specify NextToken, the PageSize and PageNumber request parameters do not take effect, and the TotalCount response parameter is invalid.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region to which the replication pair-consistent group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair-consistent group belongs.
   * 
   * @example
   * rg-aekz*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the site from which the information of replication pair-consistent groups is retrieved. This parameter is used for scenarios where data is replicated across zones in replication pairs.
   * 
   * *   If this parameter is not specified, information such as the status of replication pair-consistent groups at the primary site is queried and returned.
   * 
   * *   Otherwise, information such as the state of replication pairs at the site specified by the Site parameter is queried and returned. Valid values:
   * 
   *     *   production: primary site
   *     *   backup: secondary site
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The tags to add to the replication pair-consistent group. You can specify up to 20 tags.
   */
  tag?: DescribeDiskReplicaGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      site: 'Site',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      site: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDiskReplicaGroupsRequestTag },
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

export class DescribeDiskReplicaGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about the replication pair-consistent groups.
   */
  replicaGroups?: DescribeDiskReplicaGroupsResponseBodyReplicaGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      replicaGroups: 'ReplicaGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      replicaGroups: { 'type': 'array', 'itemType': DescribeDiskReplicaGroupsResponseBodyReplicaGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.replicaGroups)) {
      $dara.Model.validateArray(this.replicaGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskReplicaGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiskReplicaGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairProgressRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html)operation to query the IDs of existing replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-tl32ribst0z
   */
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The replication progress of the replication pair.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The timestamp that indicates the last recovery point in time. The value is returned only after the replication pair works for replicating data.
   * 
   * @example
   * 1661917424
   */
  recoverPoint?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      recoverPoint: 'RecoverPoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      recoverPoint: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairProgressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskReplicaPairProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiskReplicaPairProgressResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page. You can use this parameter together with NextToken.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the replication pair. Fuzzy search is supported.
   * 
   * @example
   * name***
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. If you specify NextToken, the PageSize and PageNumber request parameters do not take effect, and the TotalCount response parameter is invalid.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of replication pairs. You can specify the IDs of one or more replication pairs and separate the IDs with commas (,). Example: `pair-cn-dsa****,pair-cn-asd****`.
   * 
   * This parameter is empty by default, which indicates that all replication pairs in the specified region are queried. You can specify a maximum of 100 replication pair IDs.
   * 
   * @example
   * pair-cn-dsa****
   */
  pairIds?: string;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can specify the ID of a replication pair-consistent group to query the replication pairs in the group. Example: `pg-****`.
   * 
   * This parameter is empty by default, which indicates that all replication pairs in the specified region are queried.
   * 
   * >  If this parameter is set to`-`, replication pairs that are not added to any replication pair-consistent groups are returned.
   * 
   * @example
   * pg-****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair belongs.
   * 
   * @example
   * rg-acfmvs******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the site from which the information of replication pairs is retrieved. Valid value:
   * 
   * *   production: primary site
   * *   backup: secondary site
   * 
   * Default value: production.
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The tags. Up to 20 tags are supported.
   */
  tag?: DescribeDiskReplicaPairsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pairIds: 'PairIds',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
      resourceGroupId: 'ResourceGroupId',
      site: 'Site',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pairIds: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
      resourceGroupId: 'string',
      site: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDiskReplicaPairsRequestTag },
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

export class DescribeDiskReplicaPairsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Details about the replication pairs.
   */
  replicaPairs?: DescribeDiskReplicaPairsResponseBodyReplicaPairs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      replicaPairs: 'ReplicaPairs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      replicaPairs: { 'type': 'array', 'itemType': DescribeDiskReplicaPairsResponseBodyReplicaPairs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.replicaPairs)) {
      $dara.Model.validateArray(this.replicaPairs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskReplicaPairsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiskReplicaPairsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The IDs of disks.
   */
  diskIds?: string[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. If you specify NextToken, the PageSize and PageNumber request parameters do not take effect, and the TotalCount response parameter is invalid.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of enterprise-level snapshot policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the enterprise-level snapshot policies. Valid values of N: 1 to 20.
   */
  tag?: DescribeEnterpriseSnapshotPolicyRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskIds: 'DiskIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyIds: 'PolicyIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.diskIds)) {
      $dara.Model.validateArray(this.diskIds);
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
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

export class DescribeEnterpriseSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned snapshot policies.
   */
  policies?: DescribeEnterpriseSnapshotPolicyResponseBodyPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CA35A83-8D8A-5B67-BAA0-2E124F194DA4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policies: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPolicies },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEnterpriseSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnterpriseSnapshotPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-06-01T04:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The severity level of the event. Valid values:
   * 
   * *   **INFO**
   * *   **WARN**
   * *   **CRITICAL**
   * 
   * @example
   * WARN
   */
  eventLevel?: string;
  /**
   * @remarks
   * The name of the event. Valid values:
   * 
   * *   NoSnapshot: indicates the event that is triggered because no snapshot is created for a disk to protect data on the disk.
   * *   BurstIOTriggered: indicates the event that is triggered when a burst I/O operation is performed on a disk.
   * *   CostOptimizationNeeded: indicates the event that is triggered when cost optimization is required.
   * *   DiskSpecNotMatchedWithInstance: indicates the event that is triggered because the specifications of a disk do not match the instance to which the disk is attached.
   * *   DiskIONo4kAligned: indicates the event that is triggered because the physical and logical sectors involved in a read or write operation are not 4K aligned.
   * *   DiskIOHang: indicates the event that is triggered when an I/O hang occurs on a disk.
   * *   InstanceIOPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of IOPS on an instance reaches the upper limit.
   * *   InstanceBPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of BPS on an instance reaches the upper limit.
   * *   DiskIOPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of IOPS on a disk reaches the upper limit for the associated instance.
   * *   DiskBPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of BPS on a disk reaches the upper limit for the associated instance.
   * *   DiskIOPSExceedDiskMaxLimit: indicates the event that is triggered when the number of IOPS on a disk reaches the upper limit for the disk.
   * *   DiskBPSExceedDiskMaxLimit: indicates the event that is triggered when the number of BPS on a disk reaches the upper limit for the disk.
   * 
   * @example
   * DiskIOHang
   */
  eventName?: string;
  /**
   * @remarks
   * The number of entries to return on each page. If you specify MaxResults, `MaxResults` and `NextToken` are used for a paged query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   disk.
   * 
   * Default value: disk.
   * 
   * @example
   * disk
   */
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of event. Valid values:
   * 
   * - WillExecute
   * - Executing
   * - Executed
   * - Ignore
   * - Expired
   * - Deleted
   * 
   * @example
   * WillExecute
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventLevel: 'EventLevel',
      eventName: 'EventName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventLevel: 'string',
      eventName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The events.
   */
  resourceEvents?: DescribeEventsResponseBodyResourceEvents[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceEvents: 'ResourceEvents',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceEvents: { 'type': 'array', 'itemType': DescribeEventsResponseBodyResourceEvents },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceEvents)) {
      $dara.Model.validateArray(this.resourceEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEventsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensMonitorDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the disk. Valid values:
   * - cloud
   * - cloud_efficiency
   * - cloud_ssd
   * - cloud_essd
   * - cloud_auto
   * - cloud_essd_entry
   * 
   * @example
   * cloud_auto
   */
  diskCategory?: string;
  /**
   * @remarks
   * Regular matching fuzzy query to filter cloud disk IDs.
   * 
   * @example
   * d-cd40hxfu0v**
   */
  diskIdPattern?: string;
  /**
   * @remarks
   * The list of disks.
   * 
   * @example
   * [\\"d-1\\", \\"d-2\\"]
   */
  diskIds?: string[];
  /**
   * @remarks
   * Event tags of the disk, which are used to filter the disks on which the events associated with the specified tags occurred in the previous 24 hours. Valid values:
   * 
   * *   NoSnapshot: specifies the event that is triggered because no snapshot is created for the disk to protect data on the disk.
   * *   BurstIOTriggered: specifies the event that is triggered when a burst I/O operation is performed on the disk.
   * *   CostOptimizationNeeded: specifies the event that is triggered when cost optimization is required.
   * *   DiskSpecNotMatchedWithInstance: specifies the event that is triggered if the disk specifications do not match the instance to which the disk is attached.
   * *   DiskIONo4kAligned: specifies the event that is triggered if the physical and logical sectors involved in a read or write operation are not 4K aligned.
   * *   DiskIOHang: specifies the event that is triggered when an I/O hang occurs on the disk.
   * *   InstanceIOPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of IOPS on the instance reaches the upper limit.
   * *   InstanceBPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of BPS on the instance reaches the upper limit.
   * *   DiskIOPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of IOPS on the disk reaches the upper limit of the instance.
   * *   DiskBPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of BPS on the disk reaches the upper limit of the instance.
   * *   DiskIOPSExceedDiskMaxLimit: specifies the event that is triggered when the number of IOPS on the disk reaches the upper limit of the disk.
   * *   DiskBPSExceedDiskMaxLimit: specifies the event that is triggered when the number of BPS on the disk reaches the upper limit of the disk.
   */
  lensTags?: string[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query to retrieve more results.
   * 
   * >The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
      diskIdPattern: 'DiskIdPattern',
      diskIds: 'DiskIds',
      lensTags: 'LensTags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
      diskIdPattern: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      lensTags: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskIds)) {
      $dara.Model.validateArray(this.diskIds);
    }
    if(Array.isArray(this.lensTags)) {
      $dara.Model.validateArray(this.lensTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensMonitorDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the disks.
   */
  diskInfos?: DescribeLensMonitorDisksResponseBodyDiskInfos[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diskInfos: 'DiskInfos',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskInfos: { 'type': 'array', 'itemType': DescribeLensMonitorDisksResponseBodyDiskInfos },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.diskInfos)) {
      $dara.Model.validateArray(this.diskInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensMonitorDisksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLensMonitorDisksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLensMonitorDisksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The state of CloudLens for EBS. Valid values:
   * 
   * *   Applying
   * *   UnAvailable
   * *   Available
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensServiceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLensServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLensServiceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * Aggregation method in time dimension. Valid values:
   * 
   * - SUM
   * - COUNT
   * - AVG
   * - MAX
   * - MIN
   * 
   * @example
   * SUM
   */
  aggreOps?: string;
  /**
   * @remarks
   * The dimension map in the JSON format. A dimension is a key-value pair. Valid dimension key: diskId.
   * 
   * @example
   * {"diskId":["d-bp14xxxx","d-bp11xxxx"]}
   */
  dimensions?: string;
  /**
   * @remarks
   * The end of the time range to query. The specified time must be later than the current time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-11-21T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * *   disk_bps_percent
   * *   disk_iops_percent
   * *   disk_read_block_size
   * *   disk_read_bps
   * *   disk_read_iops
   * *   disk_read_latency
   * *   disk_write_block_size
   * *   disk_write_bps
   * *   disk_write_iops
   * *   disk_write_latency
   * 
   * This parameter is required.
   * 
   * @example
   * disk_bps_percent
   */
  metricName?: string;
  /**
   * @remarks
   * The interval at which metric data is collected. Unit: seconds. Default value: 60. Valid values: 60, 300, 600, and 3600, which support queries for time ranges of up to 2 hours, 2 hours, 1 day, and 7 days, respectively. For example, if you set Period to 60, the end time is less than 2 hours from the end time.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. You can specify a point in time that is up to one year apart from the current time. If StartTime and EndTime are both unspecified, the monitoring metric data of the last Period value is queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-11-21T01:50:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      aggreOps: 'AggreOps',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      metricName: 'MetricName',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggreOps: 'string',
      dimensions: 'string',
      endTime: 'string',
      metricName: 'string',
      period: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The disk monitoring data.
   */
  dataList?: DescribeMetricDataResponseBodyDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data entries queried.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeMetricDataResponseBodyDataList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMetricDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePairDrillsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the drill.
   * 
   * @example
   * drill-xxxx
   */
  drillId?: string;
  /**
   * @remarks
   * The maximum number of entries to be returned. You can use this parameter together with NextToken.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Set the value to the NextToken value returned in the previous call to the DescribeDiskReplicaPairs operation. Leave this parameter empty the first time you call this operation. When you specify NextToken, the PageSize and PageNumber request parameters do not take effect and the TotalCount response parameter is invalid.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
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
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query a list of asynchronous replication pairs, including replication pair IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-xxxx
   */
  pairId?: string;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the async replication pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pairId: 'PairId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pairId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePairDrillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of disaster recovery drills that were performed on the replication pair.
   */
  drills?: DescribePairDrillsResponseBodyDrills[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B6392****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      drills: 'Drills',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drills: { 'type': 'array', 'itemType': DescribePairDrillsResponseBodyDrills },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.drills)) {
      $dara.Model.validateArray(this.drills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePairDrillsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePairDrillsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePairDrillsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the regions and zones are named. This parameter corresponds to the `LocalName` response parameter. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * *   ja: Japanese
   * 
   * Default value: zh-CN.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   ear: async replication
   * *   lens: CloudLens for EBS
   * *   dbsc: Dedicated Block Storage Cluster
   * 
   * Default value: ear.
   * 
   * @example
   * ear
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17EE62D8-064E-5404-8B0D-72122478****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaGroupDrillsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the drill.
   * 
   * @example
   * pg-drill-xxxx
   */
  drillId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query a list of async replication pair-consistent groups, including group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of entries to be returned. You can use this parameter together with NextToken.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. When you specify NextToken, the PageSize and PageNumber request parameters do not take effect and the TotalCount response parameter is invalid.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the async replication pair-consistent group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      groupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaGroupDrillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of disaster recovery drills that were performed on the replication pair-consistent group.
   */
  drills?: DescribeReplicaGroupDrillsResponseBodyDrills[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      drills: 'Drills',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drills: { 'type': 'array', 'itemType': DescribeReplicaGroupDrillsResponseBodyDrills },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.drills)) {
      $dara.Model.validateArray(this.drills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaGroupDrillsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeReplicaGroupDrillsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeReplicaGroupDrillsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSolutionInstanceConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The parameters.
   */
  parameters?: DescribeSolutionInstanceConfigurationRequestParameters[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the solution.
   * 
   * This parameter is required.
   * 
   * @example
   * sln-xxxxx
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      regionId: 'RegionId',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': DescribeSolutionInstanceConfigurationRequestParameters },
      regionId: 'string',
      solutionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSolutionInstanceConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: { [key: string]: any }[];
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
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSolutionInstanceConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSolutionInstanceConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSolutionInstanceConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagKeysRequest extends $dara.Model {
  /**
   * @remarks
   * Number of items per page in paginated queries. The maximum value is 100.
   * 
   * Default value:
   * 
   * - If no value is set or the set value is less than 10, the default is 10.
   * 
   * - If the set value is greater than 100, the default is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token returned by this call (Token).
   * 
   * @example
   * f07b150eadfa1d7a
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region to which the resource belongs. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tagKey for filtering the query.
   * 
   * @example
   * tagKey
   */
  tagFilterKey?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      tagFilterKey: 'TagFilterKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      tagFilterKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of items per page in paginated queries. The maximum value is 100.
   * 
   * Default value:
   * 
   * - If no value is set or the set value is less than 10, the default is 10.
   * 
   * - If the set value is greater than 100, the default is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. An empty NextToken indicates there are no more results.
   * 
   * @example
   * f07b150eadfa1d7a
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  /**
   * @remarks
   * List of matching tag keys.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagKeysResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserTagKeysResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagValuesRequest extends $dara.Model {
  /**
   * @remarks
   * Number of items per page in a paginated query. The maximum value is 100.
   * 
   * Default value:
   * 
   * - If no value is set or the set value is less than 10, the default value is 10.
   * 
   * - If the set value is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token (Token). The value should be the NextToken parameter value from the previous call to this interface. This parameter is not required for the initial call. If NextToken is set, the PageSize and PageNumber request parameters become invalid, and the TotalCount in the response data is also invalid.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the consistency replication group.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Tag content filter
   * 
   * @example
   * keyValue
   */
  tagFilterValue?: string;
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      tagFilterValue: 'TagFilterValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      tagFilterValue: 'string',
      tagKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of items per page in a paginated query. The maximum value is 100.
   * 
   * Default value:
   * 
   * - If no value is set or the set value is less than 10, the default value is 10.
   * 
   * - If the set value is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token (Token). The value should be the NextToken parameter value from the previous call to this interface. This parameter is not required for the initial call. If NextToken is set, the PageSize and PageNumber request parameters become invalid, and the TotalCount in the response data is also invalid.
   * 
   * @example
   * NextToken
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID. We return the request ID regardless of whether the API call was successful or not.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  /**
   * @remarks
   * Tag values corresponding to the tag key.
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagValuesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserTagValuesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the secondary site of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * group-myreplica****
   */
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FailoverDiskReplicaGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FailoverDiskReplicaGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query region IDs of secondary disks in replication pairs.
   * 
   * >  The failover feature must be enabled for the region where the secondary disk is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FailoverDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FailoverDiskReplicaPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportRequest extends $dara.Model {
  /**
   * @remarks
   * Optional, AppName only takes effect when ReportType=present.
   * 
   * @example
   * App1
   */
  appName?: string;
  /**
   * @remarks
   * Region name.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * When ReportType=history, ReportId is required to query historical reports based on ReportId.
   * 
   * @example
   * report-74fbea80e802xxxx
   */
  reportId?: string;
  /**
   * @remarks
   * Optional values: history/present.
   * 
   * @example
   * history
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      regionId: 'RegionId',
      reportId: 'ReportId',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      regionId: 'string',
      reportId: 'string',
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data Details.
   */
  datas?: GetReportResponseBodyDatas[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datas: 'Datas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datas: { 'type': 'array', 'itemType': GetReportResponseBodyDatas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datas)) {
      $dara.Model.validateArray(this.datas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportsRequest extends $dara.Model {
  /**
   * @remarks
   * App name.
   * 
   * This parameter is required.
   * 
   * @example
   * App1
   */
  appName?: string;
  /**
   * @remarks
   * Maximum number of items for Token-based pagination.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token (Token), the value is the NextToken parameter value returned from the previous API call.
   * 
   * @example
   * a6792e832ff0XXXXX
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number for paginated queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of rows per page when performing paginated queries.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) to query the list of regions supported by Block Storage Data Insights.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Historical reports.
   */
  historyReports?: ListReportsResponseBodyHistoryReports[];
  /**
   * @remarks
   * Query token (Token), the value is the NextToken parameter value returned from the previous API call.
   * 
   * @example
   * a6792e832ff0XXXX
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number for paginated queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records per page for paginated queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID, an identifier generated by Alibaba Cloud for this request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      historyReports: 'HistoryReports',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyReports: { 'type': 'array', 'itemType': ListReportsResponseBodyHistoryReports },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.historyReports)) {
      $dara.Model.validateArray(this.historyReports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListReportsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * token123
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID list of the resource. You can specify up to 50 resource IDs in each call.
   * 
   * @example
   * disk-123
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   dedicatedblockstoragecluster: dedicated block storage cluster
   * *   diskreplicapair: replication pair
   * *   diskreplicagroup: replication pair-consistent group
   * 
   * This parameter is required.
   * 
   * @example
   * diskreplicagroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The information about the tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request. The request ID is returned regardless of whether the call is successful.
   * 
   * @example
   * 484256DA-D816-44D2-9D86-B6EE4D5B****
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the resources and tags, including resource IDs, resource types, and tag key-value pairs.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedBlockStorageClusterAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure idempotence ](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsc-cn-od43bf****
   */
  dbscId?: string;
  /**
   * @remarks
   * The new name of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * my-test-dbsc
   */
  dbscName?: string;
  /**
   * @remarks
   * The new description of dedicated block storage cluster.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbscId: 'DbscId',
      dbscName: 'DbscName',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbscId: 'string',
      dbscName: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedBlockStorageClusterAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedBlockStorageClusterAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDedicatedBlockStorageClusterAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDedicatedBlockStorageClusterAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value. Unit: Kbit/s.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * -
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair-consistent group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The name of the replication pair-consistent group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * myreplicagrouptest
   */
  groupName?: string;
  /**
   * @remarks
   * The RPO of the replication pair-consistent group. Unit: seconds. Valid value: 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      groupName: 'GroupName',
      RPO: 'RPO',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      groupName: 'string',
      RPO: 'number',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDiskReplicaGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDiskReplicaGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value. Unit: Kbit/s.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The name of the replication pair.
   * 
   * @example
   * TestReplicaPair
   */
  pairName?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair-consistent group. Unit: seconds. Valid value: 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      pairName: 'PairName',
      RPO: 'RPO',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      pairName: 'string',
      RPO: 'number',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDiskReplicaPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the request of SetDedicatedBlockStorageClusterDiskThroughput api.
   * 
   * This parameter is required.
   * 
   * @example
   * A37597B5-BB99-19B3-85EA-4C2B91F0****
   */
  qosRequestId?: string;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      qosRequestId: 'QosRequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      qosRequestId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterDiskThroughputStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A37597A6-BB99-19B3-85EA-4C2B91F0****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the throughput after setting the throughput by SetDedicatedBlockStorageClusterDiskThroughput api.
   * 
   * - SUCCESS: The throughput has been successfully set.
   * - RUNNING: The throughput is currently being set.
   * - WAIT(): The throughput is waiting to be set.
   * - FAIL(): The throughput setting has failed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDedicatedBlockStorageClusterDiskThroughputStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDedicatedBlockStorageClusterDiskThroughputStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterInventoryDataRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure idempotence ](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsc-xxx
   */
  dbscId?: string;
  /**
   * @remarks
   * End timestamp of trend data.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606403800
   */
  endTime?: number;
  /**
   * @remarks
   * The time interval (seconds) between data retrieval points.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * Start timestamp of trend data.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606303800
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbscId: 'DbscId',
      endTime: 'EndTime',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbscId: 'string',
      endTime: 'number',
      period: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterInventoryDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData[];
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * @example
   * dbsc-xxx
   */
  dbscId?: string;
  /**
   * @remarks
   * The name of the dedicated block storage cluster.
   * 
   * @example
   * myDBSCCluster
   */
  dbscName?: string;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   cloud_essd: enhanced SSD (ESSD).
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1A4258A-0C8C-5329-B495-BC5AD7AD****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dbscId: 'DbscId',
      dbscName: 'DbscName',
      diskCategory: 'DiskCategory',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData },
      dbscId: 'string',
      dbscName: 'string',
      diskCategory: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterInventoryDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDedicatedBlockStorageClusterInventoryDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryDedicatedBlockStorageClusterInventoryDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
      replicaPairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDiskReplicaPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDiskReplicaPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveDiskReplicaPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the reverse replication sub-feature. Valid values: true and false. Default value: true.
   * 
   * @example
   * true
   */
  reverseReplicate?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
      reverseReplicate: 'ReverseReplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
      reverseReplicate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReprotectDiskReplicaGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReprotectDiskReplicaGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query region IDs of secondary disks in replication pairs.
   * 
   * >  The reverse replication feature must be enabled from the region where the secondary disk is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  /**
   * @remarks
   * Specifies whether to enable the reverse replication sub-feature. Valid values: true and false. Default value: true.
   * 
   * @example
   * true
   */
  reverseReplicate?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
      reverseReplicate: 'ReverseReplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
      reverseReplicate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReprotectDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReprotectDiskReplicaPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDedicatedBlockStorageClusterDiskThroughputRequest extends $dara.Model {
  /**
   * @remarks
   * Target throughput.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  bps?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The region ID of disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      clientToken: 'string',
      diskId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDedicatedBlockStorageClusterDiskThroughputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17EE62D8-064E-5404-8B0D-72122478****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDedicatedBlockStorageClusterDiskThroughputResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDedicatedBlockStorageClusterDiskThroughputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDedicatedBlockStorageClusterDiskThroughputResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to immediately synchronize data once. Valid values:
   * 
   * *   true: immediately synchronizes data once.
   * *   false: synchronizes data based on the RPO of the replication pair-consistent group.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  oneShot?: boolean;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      oneShot: 'OneShot',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      oneShot: 'boolean',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDiskReplicaGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDiskReplicaGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to immediately synchronize data. Valid values:
   * 
   * *   true: immediately synchronizes data.
   * *   false: synchronizes data based on the recovery point objective (RPO).
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  oneShot?: boolean;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the region information of replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      oneShot: 'OneShot',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      oneShot: 'boolean',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A37597A6-BB99-19B3-85EA-4C2B91F0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDiskReplicaPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPairDrillRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query a list of replication pairs, including replication pair IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-xxxx
   */
  pairId?: string;
  /**
   * @remarks
   * The region ID of the secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the region in which the secondary disk of the replication pair resides.
   * 
   * >  You must enable the disaster recovery drill feature in the region in which the secondary site resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      pairId: 'PairId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      pairId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPairDrillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The drill ID.
   * 
   * @example
   * drill-xxx
   */
  drillId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPairDrillResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartPairDrillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartPairDrillResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReplicaGroupDrillRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group ID. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation the most recent list of async replication pair-consistent groups, including group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the region where the secondary site in the replication pair-consistent group is located. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the region where the secondary site in the replication pair-consistent group is located.
   * 
   * >  You must enable the disaster recovery drill feature in the region in which the secondary site resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      groupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReplicaGroupDrillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The drill ID.
   * 
   * @example
   * pg-drill-xxxx
   */
  drillId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReplicaGroupDrillResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartReplicaGroupDrillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartReplicaGroupDrillResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDiskReplicaGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDiskReplicaGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the region information of replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A37597A6-BB99-19B3-85EA-4C2B91F0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDiskReplicaPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDiskReplicaPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID list of the resources. You can specify up to 50 IDs in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * disk-123
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   dedicatedblockstoragecluster: dedicated block storage cluster
   * *   diskreplicapair: replication pair
   * *   diskreplicagroup: replication pair-consistent group
   * 
   * This parameter is required.
   * 
   * @example
   * diskreplicagroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource tags. You can specify up to 20 tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The request ID is returned regardless of whether the call is successful.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEnterpriseSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of disks.
   */
  diskTargets?: string[];
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxs
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskTargets: 'DiskTargets',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskTargets: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskTargets)) {
      $dara.Model.validateArray(this.diskTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEnterpriseSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 061DE1AB-08BA-5ACD-A03A-440117C6939A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEnterpriseSnapshotPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindEnterpriseSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindEnterpriseSnapshotPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. This parameter is valid only when the TagKey.N parameter is not specified. Valid values:
   * 
   * *   true: removes all tags from the resource.
   * *   false: does not remove all tags from the resource.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID list of the resource. You can specify up to 50 resource IDs in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * disk-123
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   dedicatedblockstoragecluster: dedicated block storage cluster
   * *   diskreplicapair: the replication pair.
   * *   diskreplicagroup: replication pair-consistent group
   * 
   * This parameter is required.
   * 
   * @example
   * diskreplicapair
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys. You can specify up to 20 tag keys in the list.
   * 
   * @example
   * disk-123
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The request ID is returned regardless of whether the call is successful.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B6392****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfo?: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Snapshot retention rule.
   */
  retainRule?: UpdateEnterpriseSnapshotPolicyRequestRetainRule;
  /**
   * @remarks
   * The rule for scheduling.
   */
  schedule?: UpdateEnterpriseSnapshotPolicyRequestSchedule;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRules?: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **ENABLED**: Enable snapshot policy execution.
   * *   **DISABLED**: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRule?: UpdateEnterpriseSnapshotPolicyRequestStorageRule;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfo: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo,
      desc: 'string',
      name: 'string',
      policyId: 'string',
      regionId: 'string',
      retainRule: UpdateEnterpriseSnapshotPolicyRequestRetainRule,
      schedule: UpdateEnterpriseSnapshotPolicyRequestSchedule,
      specialRetainRules: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules,
      state: 'string',
      storageRule: UpdateEnterpriseSnapshotPolicyRequestStorageRule,
    };
  }

  validate() {
    if(this.crossRegionCopyInfo && typeof (this.crossRegionCopyInfo as any).validate === 'function') {
      (this.crossRegionCopyInfo as any).validate();
    }
    if(this.retainRule && typeof (this.retainRule as any).validate === 'function') {
      (this.retainRule as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    if(this.specialRetainRules && typeof (this.specialRetainRules as any).validate === 'function') {
      (this.specialRetainRules as any).validate();
    }
    if(this.storageRule && typeof (this.storageRule as any).validate === 'function') {
      (this.storageRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfoShrink?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Snapshot retention rule.
   */
  retainRuleShrink?: string;
  /**
   * @remarks
   * The rule for scheduling.
   */
  scheduleShrink?: string;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRulesShrink?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **ENABLED**: Enable snapshot policy execution.
   * *   **DISABLED**: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRuleShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfoShrink: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      retainRuleShrink: 'RetainRule',
      scheduleShrink: 'Schedule',
      specialRetainRulesShrink: 'SpecialRetainRules',
      state: 'State',
      storageRuleShrink: 'StorageRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfoShrink: 'string',
      desc: 'string',
      name: 'string',
      policyId: 'string',
      regionId: 'string',
      retainRuleShrink: 'string',
      scheduleShrink: 'string',
      specialRetainRulesShrink: 'string',
      state: 'string',
      storageRuleShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA903E56-48CE-5B81-9611-ED7962EED3DF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEnterpriseSnapshotPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEnterpriseSnapshotPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSolutionInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * defaultDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * defaultName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the dedicated block storage cluster resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * inst-***
   */
  solutionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      solutionInstanceId: 'SolutionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      solutionInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSolutionInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSolutionInstanceAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSolutionInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSolutionInstanceAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ebs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Adds a replication pair to a replication pair-consistent group. You can use a replication pair-consistent group to batch manage replication pairs. When you call this operation, you can specify parameters, such as ReplicaGroupId, ReplicaPairId, and ClientToken, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   A replication pair and a replication pair-consistent group replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added only to a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   Before you can add a replication pair to a replication pair-consistent group, make sure that the pair and the group are in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * *   Up to 17 replication pairs can be added to a single replication pair-consistent group.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs in place of their original RPOs.
   * 
   * @param request - AddDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDiskReplicaPairResponse
   */
  async addDiskReplicaPairWithOptions(request: AddDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<AddDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new AddDiskReplicaPairResponse({}));
    } else {
      return $dara.cast<AddDiskReplicaPairResponse>(await this.execute(params, req, runtime), new AddDiskReplicaPairResponse({}));
    }

  }

  /**
   * Adds a replication pair to a replication pair-consistent group. You can use a replication pair-consistent group to batch manage replication pairs. When you call this operation, you can specify parameters, such as ReplicaGroupId, ReplicaPairId, and ClientToken, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   A replication pair and a replication pair-consistent group replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added only to a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   Before you can add a replication pair to a replication pair-consistent group, make sure that the pair and the group are in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * *   Up to 17 replication pairs can be added to a single replication pair-consistent group.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs in place of their original RPOs.
   * 
   * @param request - AddDiskReplicaPairRequest
   * @returns AddDiskReplicaPairResponse
   */
  async addDiskReplicaPair(request: AddDiskReplicaPairRequest): Promise<AddDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Enables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - ApplyLensServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyLensServiceResponse
   */
  async applyLensServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<ApplyLensServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ApplyLensService",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ApplyLensServiceResponse>(await this.callApi(params, req, runtime), new ApplyLensServiceResponse({}));
    } else {
      return $dara.cast<ApplyLensServiceResponse>(await this.execute(params, req, runtime), new ApplyLensServiceResponse({}));
    }

  }

  /**
   * Enables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * @returns ApplyLensServiceResponse
   */
  async applyLensService(): Promise<ApplyLensServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyLensServiceWithOptions(runtime);
  }

  /**
   * Bind disks into a enterprise-level snapshot policy.
   * 
   * @param request - BindEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindEnterpriseSnapshotPolicyResponse
   */
  async bindEnterpriseSnapshotPolicyWithOptions(request: BindEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<BindEnterpriseSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskTargets)) {
      query["DiskTargets"] = request.diskTargets;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BindEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new BindEnterpriseSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<BindEnterpriseSnapshotPolicyResponse>(await this.execute(params, req, runtime), new BindEnterpriseSnapshotPolicyResponse({}));
    }

  }

  /**
   * Bind disks into a enterprise-level snapshot policy.
   * 
   * @param request - BindEnterpriseSnapshotPolicyRequest
   * @returns BindEnterpriseSnapshotPolicyResponse
   */
  async bindEnterpriseSnapshotPolicy(request: BindEnterpriseSnapshotPolicyRequest): Promise<BindEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Disables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - CancelLensServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelLensServiceResponse
   */
  async cancelLensServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<CancelLensServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CancelLensService",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelLensServiceResponse>(await this.callApi(params, req, runtime), new CancelLensServiceResponse({}));
    } else {
      return $dara.cast<CancelLensServiceResponse>(await this.execute(params, req, runtime), new CancelLensServiceResponse({}));
    }

  }

  /**
   * Disables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * @returns CancelLensServiceResponse
   */
  async cancelLensService(): Promise<CancelLensServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelLensServiceWithOptions(runtime);
  }

  /**
   * Changes the resource group to which an Elastic Block Storage (EBS) resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * Changes the resource group to which an Elastic Block Storage (EBS) resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disk of a replication pair and deletes the auto-created drill disks.
   * 
   * @param request - ClearPairDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearPairDrillResponse
   */
  async clearPairDrillWithOptions(request: ClearPairDrillRequest, runtime: $dara.RuntimeOptions): Promise<ClearPairDrillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

    if (!$dara.isNull(request.pairId)) {
      query["PairId"] = request.pairId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearPairDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ClearPairDrillResponse>(await this.callApi(params, req, runtime), new ClearPairDrillResponse({}));
    } else {
      return $dara.cast<ClearPairDrillResponse>(await this.execute(params, req, runtime), new ClearPairDrillResponse({}));
    }

  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disk of a replication pair and deletes the auto-created drill disks.
   * 
   * @param request - ClearPairDrillRequest
   * @returns ClearPairDrillResponse
   */
  async clearPairDrill(request: ClearPairDrillRequest): Promise<ClearPairDrillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearPairDrillWithOptions(request, runtime);
  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disks of a replication pair-consistent group and deletes the auto-created drill disks.
   * 
   * @param request - ClearReplicaGroupDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearReplicaGroupDrillResponse
   */
  async clearReplicaGroupDrillWithOptions(request: ClearReplicaGroupDrillRequest, runtime: $dara.RuntimeOptions): Promise<ClearReplicaGroupDrillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearReplicaGroupDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ClearReplicaGroupDrillResponse>(await this.callApi(params, req, runtime), new ClearReplicaGroupDrillResponse({}));
    } else {
      return $dara.cast<ClearReplicaGroupDrillResponse>(await this.execute(params, req, runtime), new ClearReplicaGroupDrillResponse({}));
    }

  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disks of a replication pair-consistent group and deletes the auto-created drill disks.
   * 
   * @param request - ClearReplicaGroupDrillRequest
   * @returns ClearReplicaGroupDrillResponse
   */
  async clearReplicaGroupDrill(request: ClearReplicaGroupDrillRequest): Promise<ClearReplicaGroupDrillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearReplicaGroupDrillWithOptions(request, runtime);
  }

  /**
   * Creates a dedicated block storage cluster. When you call this operation, you can specify parameters, such as Azone, Capacity, Type, and PeriodUnit, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   Dedicated block storage clusters are physically isolated from public block storage clusters. The owner of each dedicated block storage cluster has exclusive access to all resources in the cluster.
   * *   Disks created in a dedicated block storage cluster can be attached only to Elastic Compute Service (ECS) instances that reside in the same zone as the cluster. Before you create a dedicated block storage cluster, decide the regions and zones in which to deploy your cloud resources.
   * *   Dedicated block storage clusters are classified into basic and performance types. When you create a dedicated block storage cluster, select a cluster type based on your business requirements.
   * *   You are charged for creating dedicated block storage clusters.
   * 
   * @param request - CreateDedicatedBlockStorageClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDedicatedBlockStorageClusterResponse
   */
  async createDedicatedBlockStorageClusterWithOptions(request: CreateDedicatedBlockStorageClusterRequest, runtime: $dara.RuntimeOptions): Promise<CreateDedicatedBlockStorageClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.azone)) {
      query["Azone"] = request.azone;
    }

    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.dbscId)) {
      query["DbscId"] = request.dbscId;
    }

    if (!$dara.isNull(request.dbscName)) {
      query["DbscName"] = request.dbscName;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDedicatedBlockStorageCluster",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDedicatedBlockStorageClusterResponse>(await this.callApi(params, req, runtime), new CreateDedicatedBlockStorageClusterResponse({}));
    } else {
      return $dara.cast<CreateDedicatedBlockStorageClusterResponse>(await this.execute(params, req, runtime), new CreateDedicatedBlockStorageClusterResponse({}));
    }

  }

  /**
   * Creates a dedicated block storage cluster. When you call this operation, you can specify parameters, such as Azone, Capacity, Type, and PeriodUnit, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   Dedicated block storage clusters are physically isolated from public block storage clusters. The owner of each dedicated block storage cluster has exclusive access to all resources in the cluster.
   * *   Disks created in a dedicated block storage cluster can be attached only to Elastic Compute Service (ECS) instances that reside in the same zone as the cluster. Before you create a dedicated block storage cluster, decide the regions and zones in which to deploy your cloud resources.
   * *   Dedicated block storage clusters are classified into basic and performance types. When you create a dedicated block storage cluster, select a cluster type based on your business requirements.
   * *   You are charged for creating dedicated block storage clusters.
   * 
   * @param request - CreateDedicatedBlockStorageClusterRequest
   * @returns CreateDedicatedBlockStorageClusterResponse
   */
  async createDedicatedBlockStorageCluster(request: CreateDedicatedBlockStorageClusterRequest): Promise<CreateDedicatedBlockStorageClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDedicatedBlockStorageClusterWithOptions(request, runtime);
  }

  /**
   * Creates a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * The replication pair-consistent group feature allows you to batch manage multiple disks in disaster recovery scenarios. You can restore the data of all disks in the same replication pair-consistent group to the same point in time to allow for disaster recovery of instances.
   * Take note of the following items:
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Replication pair-consistent groups can be used to implement disaster recovery across zones within the same region and disaster recovery across regions.
   * *   A replication pair and a replication pair-consistent group can replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added to only a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs instead of their original RPOs.
   * 
   * @param request - CreateDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiskReplicaGroupResponse
   */
  async createDiskReplicaGroupWithOptions(request: CreateDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!$dara.isNull(request.destinationZoneId)) {
      query["DestinationZoneId"] = request.destinationZoneId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceZoneId)) {
      query["SourceZoneId"] = request.sourceZoneId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new CreateDiskReplicaGroupResponse({}));
    } else {
      return $dara.cast<CreateDiskReplicaGroupResponse>(await this.execute(params, req, runtime), new CreateDiskReplicaGroupResponse({}));
    }

  }

  /**
   * Creates a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * The replication pair-consistent group feature allows you to batch manage multiple disks in disaster recovery scenarios. You can restore the data of all disks in the same replication pair-consistent group to the same point in time to allow for disaster recovery of instances.
   * Take note of the following items:
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Replication pair-consistent groups can be used to implement disaster recovery across zones within the same region and disaster recovery across regions.
   * *   A replication pair and a replication pair-consistent group can replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added to only a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs instead of their original RPOs.
   * 
   * @param request - CreateDiskReplicaGroupRequest
   * @returns CreateDiskReplicaGroupResponse
   */
  async createDiskReplicaGroup(request: CreateDiskReplicaGroupRequest): Promise<CreateDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Creates a replication pair to asynchronously replicate data between disks.
   * 
   * @remarks
   * Async replication is a feature that protects data across regions by using the data replication capability of Elastic Block Storage (EBS). This feature can be used to asynchronously replicate data from a disk in one region to a disk in another region for disaster recovery purposes. You can use this feature to implement disaster recovery for critical business to protect data in your databases and improve business continuity.
   * Currently, the async replication feature can asynchronously replicate data only between enhanced SSDs (ESSDs). The functionality of disks in replication pairs is limited. You are charged on a subscription basis for the bandwidth that is used by the async replication feature.
   * Before you call this operation, take note of the following items:
   * *   Make sure that the source disk (primary disk) from which to replicate data and the destination disk (secondary disk) to which to replicate data are created. You can call the [CreateDisk](https://help.aliyun.com/document_detail/25513.html) operation to create disks.
   * *   The secondary disk cannot reside the same region as the primary disk. The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore, US (Silicon Valley), and US (Virginia) regions.
   * *   After you call this operation to create a replication pair, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation to enable async replication to periodically replicate data from the primary disk to the secondary disk across regions.
   * 
   * @param request - CreateDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiskReplicaPairResponse
   */
  async createDiskReplicaPairWithOptions(request: CreateDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<CreateDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationDiskId)) {
      query["DestinationDiskId"] = request.destinationDiskId;
    }

    if (!$dara.isNull(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!$dara.isNull(request.destinationZoneId)) {
      query["DestinationZoneId"] = request.destinationZoneId;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.pairName)) {
      query["PairName"] = request.pairName;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceZoneId)) {
      query["SourceZoneId"] = request.sourceZoneId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new CreateDiskReplicaPairResponse({}));
    } else {
      return $dara.cast<CreateDiskReplicaPairResponse>(await this.execute(params, req, runtime), new CreateDiskReplicaPairResponse({}));
    }

  }

  /**
   * Creates a replication pair to asynchronously replicate data between disks.
   * 
   * @remarks
   * Async replication is a feature that protects data across regions by using the data replication capability of Elastic Block Storage (EBS). This feature can be used to asynchronously replicate data from a disk in one region to a disk in another region for disaster recovery purposes. You can use this feature to implement disaster recovery for critical business to protect data in your databases and improve business continuity.
   * Currently, the async replication feature can asynchronously replicate data only between enhanced SSDs (ESSDs). The functionality of disks in replication pairs is limited. You are charged on a subscription basis for the bandwidth that is used by the async replication feature.
   * Before you call this operation, take note of the following items:
   * *   Make sure that the source disk (primary disk) from which to replicate data and the destination disk (secondary disk) to which to replicate data are created. You can call the [CreateDisk](https://help.aliyun.com/document_detail/25513.html) operation to create disks.
   * *   The secondary disk cannot reside the same region as the primary disk. The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore, US (Silicon Valley), and US (Virginia) regions.
   * *   After you call this operation to create a replication pair, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation to enable async replication to periodically replicate data from the primary disk to the secondary disk across regions.
   * 
   * @param request - CreateDiskReplicaPairRequest
   * @returns CreateDiskReplicaPairResponse
   */
  async createDiskReplicaPair(request: CreateDiskReplicaPairRequest): Promise<CreateDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Create an enterprise-level snapshot policy
   * 
   * @param tmpReq - CreateEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnterpriseSnapshotPolicyResponse
   */
  async createEnterpriseSnapshotPolicyWithOptions(tmpReq: CreateEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<CreateEnterpriseSnapshotPolicyResponse> {
    tmpReq.validate();
    let request = new CreateEnterpriseSnapshotPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.crossRegionCopyInfo)) {
      request.crossRegionCopyInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.crossRegionCopyInfo, "CrossRegionCopyInfo", "json");
    }

    if (!$dara.isNull(tmpReq.retainRule)) {
      request.retainRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retainRule, "RetainRule", "json");
    }

    if (!$dara.isNull(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "Schedule", "json");
    }

    if (!$dara.isNull(tmpReq.specialRetainRules)) {
      request.specialRetainRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.specialRetainRules, "SpecialRetainRules", "json");
    }

    if (!$dara.isNull(tmpReq.storageRule)) {
      request.storageRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storageRule, "StorageRule", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossRegionCopyInfoShrink)) {
      query["CrossRegionCopyInfo"] = request.crossRegionCopyInfoShrink;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.retainRuleShrink)) {
      query["RetainRule"] = request.retainRuleShrink;
    }

    if (!$dara.isNull(request.scheduleShrink)) {
      query["Schedule"] = request.scheduleShrink;
    }

    if (!$dara.isNull(request.specialRetainRulesShrink)) {
      query["SpecialRetainRules"] = request.specialRetainRulesShrink;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.storageRuleShrink)) {
      query["StorageRule"] = request.storageRuleShrink;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new CreateEnterpriseSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<CreateEnterpriseSnapshotPolicyResponse>(await this.execute(params, req, runtime), new CreateEnterpriseSnapshotPolicyResponse({}));
    }

  }

  /**
   * Create an enterprise-level snapshot policy
   * 
   * @param request - CreateEnterpriseSnapshotPolicyRequest
   * @returns CreateEnterpriseSnapshotPolicyResponse
   */
  async createEnterpriseSnapshotPolicy(request: CreateEnterpriseSnapshotPolicyRequest): Promise<CreateEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Before you can delete a replication pair-consistent group, make sure that no replication pairs exist in the group.
   * *   The replication pair-consistent group that you want to delete must be in the **Created** (`created`), **Creation Failed** (`create_failed`), **Stopped** (`stopped`), **Failovered** (`failovered`), **Deleting** (`deleting`), **Deletion Failed** (`delete_failed`), or **Invalid** (`invalid`) state.
   * 
   * @param request - DeleteDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiskReplicaGroupResponse
   */
  async deleteDiskReplicaGroupWithOptions(request: DeleteDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new DeleteDiskReplicaGroupResponse({}));
    } else {
      return $dara.cast<DeleteDiskReplicaGroupResponse>(await this.execute(params, req, runtime), new DeleteDiskReplicaGroupResponse({}));
    }

  }

  /**
   * Deletes a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Before you can delete a replication pair-consistent group, make sure that no replication pairs exist in the group.
   * *   The replication pair-consistent group that you want to delete must be in the **Created** (`created`), **Creation Failed** (`create_failed`), **Stopped** (`stopped`), **Failovered** (`failovered`), **Deleting** (`deleting`), **Deletion Failed** (`delete_failed`), or **Invalid** (`invalid`) state.
   * 
   * @param request - DeleteDiskReplicaGroupRequest
   * @returns DeleteDiskReplicaGroupResponse
   */
  async deleteDiskReplicaGroup(request: DeleteDiskReplicaGroupRequest): Promise<DeleteDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Deletes replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Stopped** (`stopped`), **Invalid** (`invalid`), or **Failovered** (`failovered`) state can be deleted. This operation deletes only replication pairs. The primary and secondary disks in the deleted replication pairs are retained.
   * *   To delete a replication pair, you must call this operation in the region where the primary disk is located. After the replication pair is deleted, the functionality limits are lifted from the primary and secondary disks. For example, you can attach the secondary disk, resize the disk, or read data from or write data to the disk.
   * 
   * @param request - DeleteDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiskReplicaPairResponse
   */
  async deleteDiskReplicaPairWithOptions(request: DeleteDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new DeleteDiskReplicaPairResponse({}));
    } else {
      return $dara.cast<DeleteDiskReplicaPairResponse>(await this.execute(params, req, runtime), new DeleteDiskReplicaPairResponse({}));
    }

  }

  /**
   * Deletes replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Stopped** (`stopped`), **Invalid** (`invalid`), or **Failovered** (`failovered`) state can be deleted. This operation deletes only replication pairs. The primary and secondary disks in the deleted replication pairs are retained.
   * *   To delete a replication pair, you must call this operation in the region where the primary disk is located. After the replication pair is deleted, the functionality limits are lifted from the primary and secondary disks. For example, you can attach the secondary disk, resize the disk, or read data from or write data to the disk.
   * 
   * @param request - DeleteDiskReplicaPairRequest
   * @returns DeleteDiskReplicaPairResponse
   */
  async deleteDiskReplicaPair(request: DeleteDiskReplicaPairRequest): Promise<DeleteDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Delete a enterprise-level snapshot policy.
   * 
   * @param request - DeleteEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnterpriseSnapshotPolicyResponse
   */
  async deleteEnterpriseSnapshotPolicyWithOptions(request: DeleteEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DeleteEnterpriseSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new DeleteEnterpriseSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<DeleteEnterpriseSnapshotPolicyResponse>(await this.execute(params, req, runtime), new DeleteEnterpriseSnapshotPolicyResponse({}));
    }

  }

  /**
   * Delete a enterprise-level snapshot policy.
   * 
   * @param request - DeleteEnterpriseSnapshotPolicyRequest
   * @returns DeleteEnterpriseSnapshotPolicyResponse
   */
  async deleteEnterpriseSnapshotPolicy(request: DeleteEnterpriseSnapshotPolicyRequest): Promise<DeleteEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more disks in a dedicated block storage cluster.
   * 
   * @remarks
   *   You can use one of the following methods to check the responses:
   *     *   Method 1: Use `NextToken` to configure the query token. Set the value to the `NextToken` value that is returned in the last call to the DescribeDisks operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.
   *     *   Method 2: Use `PageSize` to specify the number of entries to return on each page and then use `PageNumber` to specify the number of the page to return.
   *         You can use only one of the preceding methods. If a large number of entries are to be returned, we recommend that you use method 1. When `NextToken` is specified, `PageSize` and `PageNumber` do not take effect and `TotalCount` in the response is invalid.
   * *   A disk that has the multi-attach feature enabled can be attached to multiple instances. You can query the attachment information of the disk based on the `Attachment` values in the response.
   * When you call an API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter format overview](https://help.aliyun.com/document_detail/110340.html).
   * 
   * @param request - DescribeDedicatedBlockStorageClusterDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedBlockStorageClusterDisksResponse
   */
  async describeDedicatedBlockStorageClusterDisksWithOptions(request: DescribeDedicatedBlockStorageClusterDisksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDedicatedBlockStorageClusterDisksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbscId)) {
      query["DbscId"] = request.dbscId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDedicatedBlockStorageClusterDisks",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDedicatedBlockStorageClusterDisksResponse>(await this.callApi(params, req, runtime), new DescribeDedicatedBlockStorageClusterDisksResponse({}));
    } else {
      return $dara.cast<DescribeDedicatedBlockStorageClusterDisksResponse>(await this.execute(params, req, runtime), new DescribeDedicatedBlockStorageClusterDisksResponse({}));
    }

  }

  /**
   * Queries the details of one or more disks in a dedicated block storage cluster.
   * 
   * @remarks
   *   You can use one of the following methods to check the responses:
   *     *   Method 1: Use `NextToken` to configure the query token. Set the value to the `NextToken` value that is returned in the last call to the DescribeDisks operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.
   *     *   Method 2: Use `PageSize` to specify the number of entries to return on each page and then use `PageNumber` to specify the number of the page to return.
   *         You can use only one of the preceding methods. If a large number of entries are to be returned, we recommend that you use method 1. When `NextToken` is specified, `PageSize` and `PageNumber` do not take effect and `TotalCount` in the response is invalid.
   * *   A disk that has the multi-attach feature enabled can be attached to multiple instances. You can query the attachment information of the disk based on the `Attachment` values in the response.
   * When you call an API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter format overview](https://help.aliyun.com/document_detail/110340.html).
   * 
   * @param request - DescribeDedicatedBlockStorageClusterDisksRequest
   * @returns DescribeDedicatedBlockStorageClusterDisksResponse
   */
  async describeDedicatedBlockStorageClusterDisks(request: DescribeDedicatedBlockStorageClusterDisksRequest): Promise<DescribeDedicatedBlockStorageClusterDisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedBlockStorageClusterDisksWithOptions(request, runtime);
  }

  /**
   * Queries the dedicated block storage clusters that are created.
   * 
   * @remarks
   * ## [](#)Usage notes
   * >  The Dedicated Block Storage Cluster feature is available only in the China (Heyuan), Indonesia (Jakarta), and China (Shenzhen) regions.
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are included in the filter conditions.
   * *   We recommend that you use NextToken and MaxResults to perform paged queries. We recommend that you use MaxResults to specify the maximum number of entries to return in each request. The return value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. When you call the DescribeDedicatedBlockStorageClusters operation to retrieve a new page of results, set NextToken to the NextToken value that is returned in the previous call and specify MaxResults to limit the number of entries returned.
   * 
   * @param request - DescribeDedicatedBlockStorageClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedBlockStorageClustersResponse
   */
  async describeDedicatedBlockStorageClustersWithOptions(request: DescribeDedicatedBlockStorageClustersRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDedicatedBlockStorageClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dedicatedBlockStorageClusterId)) {
      query["DedicatedBlockStorageClusterId"] = request.dedicatedBlockStorageClusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.azoneId)) {
      body["AzoneId"] = request.azoneId;
    }

    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDedicatedBlockStorageClusters",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDedicatedBlockStorageClustersResponse>(await this.callApi(params, req, runtime), new DescribeDedicatedBlockStorageClustersResponse({}));
    } else {
      return $dara.cast<DescribeDedicatedBlockStorageClustersResponse>(await this.execute(params, req, runtime), new DescribeDedicatedBlockStorageClustersResponse({}));
    }

  }

  /**
   * Queries the dedicated block storage clusters that are created.
   * 
   * @remarks
   * ## [](#)Usage notes
   * >  The Dedicated Block Storage Cluster feature is available only in the China (Heyuan), Indonesia (Jakarta), and China (Shenzhen) regions.
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are included in the filter conditions.
   * *   We recommend that you use NextToken and MaxResults to perform paged queries. We recommend that you use MaxResults to specify the maximum number of entries to return in each request. The return value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. When you call the DescribeDedicatedBlockStorageClusters operation to retrieve a new page of results, set NextToken to the NextToken value that is returned in the previous call and specify MaxResults to limit the number of entries returned.
   * 
   * @param request - DescribeDedicatedBlockStorageClustersRequest
   * @returns DescribeDedicatedBlockStorageClustersResponse
   */
  async describeDedicatedBlockStorageClusters(request: DescribeDedicatedBlockStorageClustersRequest): Promise<DescribeDedicatedBlockStorageClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDedicatedBlockStorageClustersWithOptions(request, runtime);
  }

  /**
   * Queries the risk events of a disk.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskEventsResponse
   */
  async describeDiskEventsWithOptions(request: DescribeDiskEventsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDiskEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskEvents",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDiskEventsResponse>(await this.callApi(params, req, runtime), new DescribeDiskEventsResponse({}));
    } else {
      return $dara.cast<DescribeDiskEventsResponse>(await this.execute(params, req, runtime), new DescribeDiskEventsResponse({}));
    }

  }

  /**
   * Queries the risk events of a disk.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskEventsRequest
   * @returns DescribeDiskEventsResponse
   */
  async describeDiskEvents(request: DescribeDiskEventsRequest): Promise<DescribeDiskEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskEventsWithOptions(request, runtime);
  }

  /**
   * Queries the near real-time monitoring data of a disk.
   * 
   * @remarks
   * ## Usage notes
   * *   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * *   Up to 400 monitoring data entries can be returned at a time. An error is returned if the value calculated based on the following formula is greater than 400: `(EndTime - StartTime)/Period`.
   * *   You can query the monitoring data collected in the last three days. An error is returned if the time specified by `StartTime` is more than three days prior to the current time.
   * 
   * @param request - DescribeDiskMonitorDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskMonitorDataResponse
   */
  async describeDiskMonitorDataWithOptions(request: DescribeDiskMonitorDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDiskMonitorDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskMonitorData",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDiskMonitorDataResponse>(await this.callApi(params, req, runtime), new DescribeDiskMonitorDataResponse({}));
    } else {
      return $dara.cast<DescribeDiskMonitorDataResponse>(await this.execute(params, req, runtime), new DescribeDiskMonitorDataResponse({}));
    }

  }

  /**
   * Queries the near real-time monitoring data of a disk.
   * 
   * @remarks
   * ## Usage notes
   * *   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * *   Up to 400 monitoring data entries can be returned at a time. An error is returned if the value calculated based on the following formula is greater than 400: `(EndTime - StartTime)/Period`.
   * *   You can query the monitoring data collected in the last three days. An error is returned if the time specified by `StartTime` is more than three days prior to the current time.
   * 
   * @param request - DescribeDiskMonitorDataRequest
   * @returns DescribeDiskMonitorDataResponse
   */
  async describeDiskMonitorData(request: DescribeDiskMonitorDataRequest): Promise<DescribeDiskMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskMonitorDataWithOptions(request, runtime);
  }

  /**
   * Queries the near real-time monitoring data of disks. You can query only the burst performance data of ESSD AutoPL disks. The data is aggregated by hour.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskMonitorDataListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskMonitorDataListResponse
   */
  async describeDiskMonitorDataListWithOptions(request: DescribeDiskMonitorDataListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDiskMonitorDataListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskMonitorDataList",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDiskMonitorDataListResponse>(await this.callApi(params, req, runtime), new DescribeDiskMonitorDataListResponse({}));
    } else {
      return $dara.cast<DescribeDiskMonitorDataListResponse>(await this.execute(params, req, runtime), new DescribeDiskMonitorDataListResponse({}));
    }

  }

  /**
   * Queries the near real-time monitoring data of disks. You can query only the burst performance data of ESSD AutoPL disks. The data is aggregated by hour.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskMonitorDataListRequest
   * @returns DescribeDiskMonitorDataListResponse
   */
  async describeDiskMonitorDataList(request: DescribeDiskMonitorDataListRequest): Promise<DescribeDiskMonitorDataListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskMonitorDataListWithOptions(request, runtime);
  }

  /**
   * Queries the details of replication pair-consistent groups in a specific region.
   * 
   * @remarks
   * ## [](#)Usage notes
   * To perform a paged query, specify the MaxResults and NextToken parameters.
   * During a paged query, when you call the DescribeDiskReplicaGroups operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaGroups operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskReplicaGroupsResponse
   */
  async describeDiskReplicaGroupsWithOptions(request: DescribeDiskReplicaGroupsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDiskReplicaGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.site)) {
      query["Site"] = request.site;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskReplicaGroups",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDiskReplicaGroupsResponse>(await this.callApi(params, req, runtime), new DescribeDiskReplicaGroupsResponse({}));
    } else {
      return $dara.cast<DescribeDiskReplicaGroupsResponse>(await this.execute(params, req, runtime), new DescribeDiskReplicaGroupsResponse({}));
    }

  }

  /**
   * Queries the details of replication pair-consistent groups in a specific region.
   * 
   * @remarks
   * ## [](#)Usage notes
   * To perform a paged query, specify the MaxResults and NextToken parameters.
   * During a paged query, when you call the DescribeDiskReplicaGroups operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaGroups operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaGroupsRequest
   * @returns DescribeDiskReplicaGroupsResponse
   */
  async describeDiskReplicaGroups(request: DescribeDiskReplicaGroupsRequest): Promise<DescribeDiskReplicaGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskReplicaGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the replication progress of a replication pair.
   * 
   * @param request - DescribeDiskReplicaPairProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskReplicaPairProgressResponse
   */
  async describeDiskReplicaPairProgressWithOptions(request: DescribeDiskReplicaPairProgressRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDiskReplicaPairProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskReplicaPairProgress",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDiskReplicaPairProgressResponse>(await this.callApi(params, req, runtime), new DescribeDiskReplicaPairProgressResponse({}));
    } else {
      return $dara.cast<DescribeDiskReplicaPairProgressResponse>(await this.execute(params, req, runtime), new DescribeDiskReplicaPairProgressResponse({}));
    }

  }

  /**
   * Queries the replication progress of a replication pair.
   * 
   * @param request - DescribeDiskReplicaPairProgressRequest
   * @returns DescribeDiskReplicaPairProgressResponse
   */
  async describeDiskReplicaPairProgress(request: DescribeDiskReplicaPairProgressRequest): Promise<DescribeDiskReplicaPairProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskReplicaPairProgressWithOptions(request, runtime);
  }

  /**
   * Queries information about replication pairs in a specific region.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   When you call this operation for a specific region, if the primary disk (source disk) or secondary disk (destination disk) of a replication pair resides in the region, information about the replication pair is displayed in the response.
   * *   If you want to perform a paged query, configure the `NextToken` and `MaxResults` parameters. During a paged query, when you call the DescribeDiskReplicaPairs operation to retrieve the first page of results, set `MaxResults` to limit the maximum number of entries to return in the call. The return value of NextToken is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaPairs operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskReplicaPairsResponse
   */
  async describeDiskReplicaPairsWithOptions(request: DescribeDiskReplicaPairsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDiskReplicaPairsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pairIds)) {
      query["PairIds"] = request.pairIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.site)) {
      query["Site"] = request.site;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiskReplicaPairs",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDiskReplicaPairsResponse>(await this.callApi(params, req, runtime), new DescribeDiskReplicaPairsResponse({}));
    } else {
      return $dara.cast<DescribeDiskReplicaPairsResponse>(await this.execute(params, req, runtime), new DescribeDiskReplicaPairsResponse({}));
    }

  }

  /**
   * Queries information about replication pairs in a specific region.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   When you call this operation for a specific region, if the primary disk (source disk) or secondary disk (destination disk) of a replication pair resides in the region, information about the replication pair is displayed in the response.
   * *   If you want to perform a paged query, configure the `NextToken` and `MaxResults` parameters. During a paged query, when you call the DescribeDiskReplicaPairs operation to retrieve the first page of results, set `MaxResults` to limit the maximum number of entries to return in the call. The return value of NextToken is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaPairs operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaPairsRequest
   * @returns DescribeDiskReplicaPairsResponse
   */
  async describeDiskReplicaPairs(request: DescribeDiskReplicaPairsRequest): Promise<DescribeDiskReplicaPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiskReplicaPairsWithOptions(request, runtime);
  }

  /**
   * Queries the information about enterprise-level snapshot policies. When you call this operation, you can specify parameters, such as PolicyIds, ResourceGroupId, and Tag, in the request.
   * 
   * @param request - DescribeEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnterpriseSnapshotPolicyResponse
   */
  async describeEnterpriseSnapshotPolicyWithOptions(request: DescribeEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DescribeEnterpriseSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyIds)) {
      query["PolicyIds"] = request.policyIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new DescribeEnterpriseSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<DescribeEnterpriseSnapshotPolicyResponse>(await this.execute(params, req, runtime), new DescribeEnterpriseSnapshotPolicyResponse({}));
    }

  }

  /**
   * Queries the information about enterprise-level snapshot policies. When you call this operation, you can specify parameters, such as PolicyIds, ResourceGroupId, and Tag, in the request.
   * 
   * @param request - DescribeEnterpriseSnapshotPolicyRequest
   * @returns DescribeEnterpriseSnapshotPolicyResponse
   */
  async describeEnterpriseSnapshotPolicy(request: DescribeEnterpriseSnapshotPolicyRequest): Promise<DescribeEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the risk events of a disk.
   * 
   * @param request - DescribeEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsResponse
   */
  async describeEventsWithOptions(request: DescribeEventsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventLevel)) {
      query["EventLevel"] = request.eventLevel;
    }

    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEvents",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeEventsResponse>(await this.callApi(params, req, runtime), new DescribeEventsResponse({}));
    } else {
      return $dara.cast<DescribeEventsResponse>(await this.execute(params, req, runtime), new DescribeEventsResponse({}));
    }

  }

  /**
   * Queries the risk events of a disk.
   * 
   * @param request - DescribeEventsRequest
   * @returns DescribeEventsResponse
   */
  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  /**
   * Queries one or more Elastic Block Storage (EBS) devices that you created.
   * 
   * @param request - DescribeLensMonitorDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLensMonitorDisksResponse
   */
  async describeLensMonitorDisksWithOptions(request: DescribeLensMonitorDisksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeLensMonitorDisksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!$dara.isNull(request.diskIdPattern)) {
      query["DiskIdPattern"] = request.diskIdPattern;
    }

    if (!$dara.isNull(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!$dara.isNull(request.lensTags)) {
      query["LensTags"] = request.lensTags;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLensMonitorDisks",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeLensMonitorDisksResponse>(await this.callApi(params, req, runtime), new DescribeLensMonitorDisksResponse({}));
    } else {
      return $dara.cast<DescribeLensMonitorDisksResponse>(await this.execute(params, req, runtime), new DescribeLensMonitorDisksResponse({}));
    }

  }

  /**
   * Queries one or more Elastic Block Storage (EBS) devices that you created.
   * 
   * @param request - DescribeLensMonitorDisksRequest
   * @returns DescribeLensMonitorDisksResponse
   */
  async describeLensMonitorDisks(request: DescribeLensMonitorDisksRequest): Promise<DescribeLensMonitorDisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLensMonitorDisksWithOptions(request, runtime);
  }

  /**
   * 查询用户开通ebs数据洞察服务状态
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeLensServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLensServiceStatusResponse
   */
  async describeLensServiceStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeLensServiceStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLensServiceStatus",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeLensServiceStatusResponse>(await this.callApi(params, req, runtime), new DescribeLensServiceStatusResponse({}));
    } else {
      return $dara.cast<DescribeLensServiceStatusResponse>(await this.execute(params, req, runtime), new DescribeLensServiceStatusResponse({}));
    }

  }

  /**
   * 查询用户开通ebs数据洞察服务状态
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * @returns DescribeLensServiceStatusResponse
   */
  async describeLensServiceStatus(): Promise<DescribeLensServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLensServiceStatusWithOptions(runtime);
  }

  /**
   * Queries the statistics about a metric of Elastic Block Storage (EBS) disks.
   * 
   * @param request - DescribeMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricDataResponse
   */
  async describeMetricDataWithOptions(request: DescribeMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggreOps)) {
      query["AggreOps"] = request.aggreOps;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricData",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeMetricDataResponse({}));
    } else {
      return $dara.cast<DescribeMetricDataResponse>(await this.execute(params, req, runtime), new DescribeMetricDataResponse({}));
    }

  }

  /**
   * Queries the statistics about a metric of Elastic Block Storage (EBS) disks.
   * 
   * @param request - DescribeMetricDataRequest
   * @returns DescribeMetricDataResponse
   */
  async describeMetricData(request: DescribeMetricDataRequest): Promise<DescribeMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricDataWithOptions(request, runtime);
  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair whose secondary disk resides in a specific region.
   * 
   * @param request - DescribePairDrillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePairDrillsResponse
   */
  async describePairDrillsWithOptions(request: DescribePairDrillsRequest, runtime: $dara.RuntimeOptions): Promise<DescribePairDrillsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pairId)) {
      query["PairId"] = request.pairId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePairDrills",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePairDrillsResponse>(await this.callApi(params, req, runtime), new DescribePairDrillsResponse({}));
    } else {
      return $dara.cast<DescribePairDrillsResponse>(await this.execute(params, req, runtime), new DescribePairDrillsResponse({}));
    }

  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair whose secondary disk resides in a specific region.
   * 
   * @param request - DescribePairDrillsRequest
   * @returns DescribePairDrillsResponse
   */
  async describePairDrills(request: DescribePairDrillsRequest): Promise<DescribePairDrillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePairDrillsWithOptions(request, runtime);
  }

  /**
   * Queries the details of regions in which Elastic Block Storage (EBS) features (such as async replication, CloudLens for EBS, and Dedicated Block Storage Cluster) are supported.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * Queries the details of regions in which Elastic Block Storage (EBS) features (such as async replication, CloudLens for EBS, and Dedicated Block Storage Cluster) are supported.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair-consistent group whose secondary disk resides in a specific region.
   * 
   * @param request - DescribeReplicaGroupDrillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReplicaGroupDrillsResponse
   */
  async describeReplicaGroupDrillsWithOptions(request: DescribeReplicaGroupDrillsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeReplicaGroupDrillsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeReplicaGroupDrills",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeReplicaGroupDrillsResponse>(await this.callApi(params, req, runtime), new DescribeReplicaGroupDrillsResponse({}));
    } else {
      return $dara.cast<DescribeReplicaGroupDrillsResponse>(await this.execute(params, req, runtime), new DescribeReplicaGroupDrillsResponse({}));
    }

  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair-consistent group whose secondary disk resides in a specific region.
   * 
   * @param request - DescribeReplicaGroupDrillsRequest
   * @returns DescribeReplicaGroupDrillsResponse
   */
  async describeReplicaGroupDrills(request: DescribeReplicaGroupDrillsRequest): Promise<DescribeReplicaGroupDrillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeReplicaGroupDrillsWithOptions(request, runtime);
  }

  /**
   * 查询解决方案实例默认配置
   * 
   * @param request - DescribeSolutionInstanceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSolutionInstanceConfigurationResponse
   */
  async describeSolutionInstanceConfigurationWithOptions(request: DescribeSolutionInstanceConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSolutionInstanceConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.solutionId)) {
      query["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSolutionInstanceConfiguration",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSolutionInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new DescribeSolutionInstanceConfigurationResponse({}));
    } else {
      return $dara.cast<DescribeSolutionInstanceConfigurationResponse>(await this.execute(params, req, runtime), new DescribeSolutionInstanceConfigurationResponse({}));
    }

  }

  /**
   * 查询解决方案实例默认配置
   * 
   * @param request - DescribeSolutionInstanceConfigurationRequest
   * @returns DescribeSolutionInstanceConfigurationResponse
   */
  async describeSolutionInstanceConfiguration(request: DescribeSolutionInstanceConfigurationRequest): Promise<DescribeSolutionInstanceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSolutionInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * Centralized Role: Query User Disk Snapshot tagKeys
   * 
   * @remarks
   * ## Interface Description
   * Query the tag key-value pairs of user\\"s cloud disk and snapshot. The search scope can be narrowed down by using filterTagKey.
   * 
   * @param request - DescribeUserTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserTagKeysResponse
   */
  async describeUserTagKeysWithOptions(request: DescribeUserTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUserTagKeysResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tagFilterKey)) {
      body["TagFilterKey"] = request.tagFilterKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserTagKeys",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeUserTagKeysResponse>(await this.callApi(params, req, runtime), new DescribeUserTagKeysResponse({}));
    } else {
      return $dara.cast<DescribeUserTagKeysResponse>(await this.execute(params, req, runtime), new DescribeUserTagKeysResponse({}));
    }

  }

  /**
   * Centralized Role: Query User Disk Snapshot tagKeys
   * 
   * @remarks
   * ## Interface Description
   * Query the tag key-value pairs of user\\"s cloud disk and snapshot. The search scope can be narrowed down by using filterTagKey.
   * 
   * @param request - DescribeUserTagKeysRequest
   * @returns DescribeUserTagKeysResponse
   */
  async describeUserTagKeys(request: DescribeUserTagKeysRequest): Promise<DescribeUserTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserTagKeysWithOptions(request, runtime);
  }

  /**
   * Centralized Role: Query User Disk and Snapshot tagValues
   * 
   * @remarks
   * ## Interface Description
   * > The dedicated block storage cluster feature is currently supported in the following regions: South China 2 (Heyuan), Indonesia (Jakarta), and South China 1 (Shenzhen).
   * - The request parameters act as a filter, with a logical AND relationship. If any parameter is empty, the filter does not take effect.
   * - For paginated queries, it is recommended to use the MaxResults and NextToken parameters. Usage instructions: When querying the first page, set only MaxResults to limit the number of returned entries. The NextToken in the response will serve as the token for querying subsequent pages. When querying subsequent pages, set the NextToken parameter to the value obtained from the previous response, and set MaxResults to limit the number of returned entries.
   * 
   * @param request - DescribeUserTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserTagValuesResponse
   */
  async describeUserTagValuesWithOptions(request: DescribeUserTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUserTagValuesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tagFilterValue)) {
      body["TagFilterValue"] = request.tagFilterValue;
    }

    if (!$dara.isNull(request.tagKey)) {
      body["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserTagValues",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeUserTagValuesResponse>(await this.callApi(params, req, runtime), new DescribeUserTagValuesResponse({}));
    } else {
      return $dara.cast<DescribeUserTagValuesResponse>(await this.execute(params, req, runtime), new DescribeUserTagValuesResponse({}));
    }

  }

  /**
   * Centralized Role: Query User Disk and Snapshot tagValues
   * 
   * @remarks
   * ## Interface Description
   * > The dedicated block storage cluster feature is currently supported in the following regions: South China 2 (Heyuan), Indonesia (Jakarta), and South China 1 (Shenzhen).
   * - The request parameters act as a filter, with a logical AND relationship. If any parameter is empty, the filter does not take effect.
   * - For paginated queries, it is recommended to use the MaxResults and NextToken parameters. Usage instructions: When querying the first page, set only MaxResults to limit the number of returned entries. The NextToken in the response will serve as the token for querying subsequent pages. When querying subsequent pages, set the NextToken parameter to the value obtained from the previous response, and set MaxResults to limit the number of returned entries.
   * 
   * @param request - DescribeUserTagValuesRequest
   * @returns DescribeUserTagValuesResponse
   */
  async describeUserTagValues(request: DescribeUserTagValuesRequest): Promise<DescribeUserTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserTagValuesWithOptions(request, runtime);
  }

  /**
   * Enables the failover feature for replication pairs in a replication pair-consistent group. When the primary disks of specific replication pairs in a replication pair-consistent group fail, you can call this operation to enable the read and write permissions on the secondary disks.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), **Stopped** (`stopped`), **In Failover** (`failovering`), **Failover Failed** (`failover_failed`), or **Failovered** (`failovered`) state.
   * *   After a failover is performed, the replication pair-consistent group enters the **Failovered** (`failovered`) state.
   * *   Before you perform a failover, make sure that the first full data synchronization is completed between the primary site and secondary site.
   * 
   * @param request - FailoverDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FailoverDiskReplicaGroupResponse
   */
  async failoverDiskReplicaGroupWithOptions(request: FailoverDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<FailoverDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FailoverDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FailoverDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new FailoverDiskReplicaGroupResponse({}));
    } else {
      return $dara.cast<FailoverDiskReplicaGroupResponse>(await this.execute(params, req, runtime), new FailoverDiskReplicaGroupResponse({}));
    }

  }

  /**
   * Enables the failover feature for replication pairs in a replication pair-consistent group. When the primary disks of specific replication pairs in a replication pair-consistent group fail, you can call this operation to enable the read and write permissions on the secondary disks.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), **Stopped** (`stopped`), **In Failover** (`failovering`), **Failover Failed** (`failover_failed`), or **Failovered** (`failovered`) state.
   * *   After a failover is performed, the replication pair-consistent group enters the **Failovered** (`failovered`) state.
   * *   Before you perform a failover, make sure that the first full data synchronization is completed between the primary site and secondary site.
   * 
   * @param request - FailoverDiskReplicaGroupRequest
   * @returns FailoverDiskReplicaGroupResponse
   */
  async failoverDiskReplicaGroup(request: FailoverDiskReplicaGroupRequest): Promise<FailoverDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.failoverDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Enables the failover feature for replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable failover cannot be in the **Invalid** (`invalid`) or **Deleted** (`deleted`) state.
   * *   After a failover is performed, the replication pair enters the **Failovered** (`failovered`) state.
   * 
   * @param request - FailoverDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FailoverDiskReplicaPairResponse
   */
  async failoverDiskReplicaPairWithOptions(request: FailoverDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<FailoverDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FailoverDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FailoverDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new FailoverDiskReplicaPairResponse({}));
    } else {
      return $dara.cast<FailoverDiskReplicaPairResponse>(await this.execute(params, req, runtime), new FailoverDiskReplicaPairResponse({}));
    }

  }

  /**
   * Enables the failover feature for replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable failover cannot be in the **Invalid** (`invalid`) or **Deleted** (`deleted`) state.
   * *   After a failover is performed, the replication pair enters the **Failovered** (`failovered`) state.
   * 
   * @param request - FailoverDiskReplicaPairRequest
   * @returns FailoverDiskReplicaPairResponse
   */
  async failoverDiskReplicaPair(request: FailoverDiskReplicaPairRequest): Promise<FailoverDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.failoverDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Centralized Role: Obtain User Usage Report with reportId
   * 
   * @param request - GetReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReportResponse
   */
  async getReportWithOptions(request: GetReportRequest, runtime: $dara.RuntimeOptions): Promise<GetReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reportId)) {
      body["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReport",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetReportResponse>(await this.callApi(params, req, runtime), new GetReportResponse({}));
    } else {
      return $dara.cast<GetReportResponse>(await this.execute(params, req, runtime), new GetReportResponse({}));
    }

  }

  /**
   * Centralized Role: Obtain User Usage Report with reportId
   * 
   * @param request - GetReportRequest
   * @returns GetReportResponse
   */
  async getReport(request: GetReportRequest): Promise<GetReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getReportWithOptions(request, runtime);
  }

  /**
   * Centralized Role: Query Historical Reports
   * 
   * @param request - ListReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReportsResponse
   */
  async listReportsWithOptions(request: ListReportsRequest, runtime: $dara.RuntimeOptions): Promise<ListReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReports",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListReportsResponse>(await this.callApi(params, req, runtime), new ListReportsResponse({}));
    } else {
      return $dara.cast<ListReportsResponse>(await this.execute(params, req, runtime), new ListReportsResponse({}));
    }

  }

  /**
   * Centralized Role: Query Historical Reports
   * 
   * @param request - ListReportsRequest
   * @returns ListReportsResponse
   */
  async listReports(request: ListReportsRequest): Promise<ListReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listReportsWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to one or more Elastic Block Storage (EBS) resources, or queries the IDs and tags of resources in a specified non-default resource group.
   * 
   * @remarks
   * Specify at least one of the following parameters or parameter pairs in a request to determine a query object:
   * *   `ResourceId.N`
   * *   `Tag.N` parameter pair (`Tag.N.Key` and `Tag.N.Value`)
   * If you set `Tag.N` and `ResourceId.N` at the same time, the EBS resources that match both the parameters are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries the tags that are added to one or more Elastic Block Storage (EBS) resources, or queries the IDs and tags of resources in a specified non-default resource group.
   * 
   * @remarks
   * Specify at least one of the following parameters or parameter pairs in a request to determine a query object:
   * *   `ResourceId.N`
   * *   `Tag.N` parameter pair (`Tag.N.Key` and `Tag.N.Value`)
   * If you set `Tag.N` and `ResourceId.N` at the same time, the EBS resources that match both the parameters are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 修改专属集群属性OpenApi
   * 
   * @remarks
   * You can call this operation to modify the information of a dedicated block storage cluster. The information includes the name and description of the cluster.
   * 
   * @param request - ModifyDedicatedBlockStorageClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDedicatedBlockStorageClusterAttributeResponse
   */
  async modifyDedicatedBlockStorageClusterAttributeWithOptions(request: ModifyDedicatedBlockStorageClusterAttributeRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDedicatedBlockStorageClusterAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dbscId)) {
      query["DbscId"] = request.dbscId;
    }

    if (!$dara.isNull(request.dbscName)) {
      query["DbscName"] = request.dbscName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDedicatedBlockStorageClusterAttribute",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDedicatedBlockStorageClusterAttributeResponse>(await this.callApi(params, req, runtime), new ModifyDedicatedBlockStorageClusterAttributeResponse({}));
    } else {
      return $dara.cast<ModifyDedicatedBlockStorageClusterAttributeResponse>(await this.execute(params, req, runtime), new ModifyDedicatedBlockStorageClusterAttributeResponse({}));
    }

  }

  /**
   * 修改专属集群属性OpenApi
   * 
   * @remarks
   * You can call this operation to modify the information of a dedicated block storage cluster. The information includes the name and description of the cluster.
   * 
   * @param request - ModifyDedicatedBlockStorageClusterAttributeRequest
   * @returns ModifyDedicatedBlockStorageClusterAttributeResponse
   */
  async modifyDedicatedBlockStorageClusterAttribute(request: ModifyDedicatedBlockStorageClusterAttributeRequest): Promise<ModifyDedicatedBlockStorageClusterAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDedicatedBlockStorageClusterAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, or recovery point objective (RPO) of a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * 
   * @param request - ModifyDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskReplicaGroupResponse
   */
  async modifyDiskReplicaGroupWithOptions(request: ModifyDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new ModifyDiskReplicaGroupResponse({}));
    } else {
      return $dara.cast<ModifyDiskReplicaGroupResponse>(await this.execute(params, req, runtime), new ModifyDiskReplicaGroupResponse({}));
    }

  }

  /**
   * Modifies the name, description, or recovery point objective (RPO) of a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * 
   * @param request - ModifyDiskReplicaGroupRequest
   * @returns ModifyDiskReplicaGroupResponse
   */
  async modifyDiskReplicaGroup(request: ModifyDiskReplicaGroupRequest): Promise<ModifyDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can have their names or descriptions modified.
   * 
   * @param request - ModifyDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskReplicaPairResponse
   */
  async modifyDiskReplicaPairWithOptions(request: ModifyDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.pairName)) {
      query["PairName"] = request.pairName;
    }

    if (!$dara.isNull(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new ModifyDiskReplicaPairResponse({}));
    } else {
      return $dara.cast<ModifyDiskReplicaPairResponse>(await this.execute(params, req, runtime), new ModifyDiskReplicaPairResponse({}));
    }

  }

  /**
   * Modifies a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can have their names or descriptions modified.
   * 
   * @param request - ModifyDiskReplicaPairRequest
   * @returns ModifyDiskReplicaPairResponse
   */
  async modifyDiskReplicaPair(request: ModifyDiskReplicaPairRequest): Promise<ModifyDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Query the throughput status of a dedicated block storage cluster disk which has been set through the SetDedicatedBlockStorageClusterDiskThroughput API.
   * 
   * @param request - QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse
   */
  async queryDedicatedBlockStorageClusterDiskThroughputStatusWithOptions(request: QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest, runtime: $dara.RuntimeOptions): Promise<QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qosRequestId)) {
      body["QosRequestId"] = request.qosRequestId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDedicatedBlockStorageClusterDiskThroughputStatus",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse>(await this.callApi(params, req, runtime), new QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse({}));
    } else {
      return $dara.cast<QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse>(await this.execute(params, req, runtime), new QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse({}));
    }

  }

  /**
   * Query the throughput status of a dedicated block storage cluster disk which has been set through the SetDedicatedBlockStorageClusterDiskThroughput API.
   * 
   * @param request - QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest
   * @returns QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse
   */
  async queryDedicatedBlockStorageClusterDiskThroughputStatus(request: QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest): Promise<QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDedicatedBlockStorageClusterDiskThroughputStatusWithOptions(request, runtime);
  }

  /**
   * Query dedicated block storage cluster capacity trend data, includ available capacity size and total capacity size.
   * 
   * @remarks
   * Period is the time interval between data retrieval points. When set to 60 (minute interval), a maximum of 1440 data points can be returned; when set to 3600 (hour interval), a maximum of 744 data points can be returned; and when set to 86400 (day interval), a maximum of 366 data points can be returned.
   * 
   * @param request - QueryDedicatedBlockStorageClusterInventoryDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDedicatedBlockStorageClusterInventoryDataResponse
   */
  async queryDedicatedBlockStorageClusterInventoryDataWithOptions(request: QueryDedicatedBlockStorageClusterInventoryDataRequest, runtime: $dara.RuntimeOptions): Promise<QueryDedicatedBlockStorageClusterInventoryDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbscId)) {
      body["DbscId"] = request.dbscId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDedicatedBlockStorageClusterInventoryData",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDedicatedBlockStorageClusterInventoryDataResponse>(await this.callApi(params, req, runtime), new QueryDedicatedBlockStorageClusterInventoryDataResponse({}));
    } else {
      return $dara.cast<QueryDedicatedBlockStorageClusterInventoryDataResponse>(await this.execute(params, req, runtime), new QueryDedicatedBlockStorageClusterInventoryDataResponse({}));
    }

  }

  /**
   * Query dedicated block storage cluster capacity trend data, includ available capacity size and total capacity size.
   * 
   * @remarks
   * Period is the time interval between data retrieval points. When set to 60 (minute interval), a maximum of 1440 data points can be returned; when set to 3600 (hour interval), a maximum of 744 data points can be returned; and when set to 86400 (day interval), a maximum of 366 data points can be returned.
   * 
   * @param request - QueryDedicatedBlockStorageClusterInventoryDataRequest
   * @returns QueryDedicatedBlockStorageClusterInventoryDataResponse
   */
  async queryDedicatedBlockStorageClusterInventoryData(request: QueryDedicatedBlockStorageClusterInventoryDataRequest): Promise<QueryDedicatedBlockStorageClusterInventoryDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDedicatedBlockStorageClusterInventoryDataWithOptions(request, runtime);
  }

  /**
   * Removes a replication pair from a replication pair-consistent group. After a replication pair is removed from a replication pair-consistent group, the pair is disassociated from the group but is not deleted.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group from which you want to remove a replication pair must be in the **Created** (`created`), **Stopped** (`stopped`), or **Invalid** (`invalid`) state.
   * 
   * @param request - RemoveDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDiskReplicaPairResponse
   */
  async removeDiskReplicaPairWithOptions(request: RemoveDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<RemoveDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new RemoveDiskReplicaPairResponse({}));
    } else {
      return $dara.cast<RemoveDiskReplicaPairResponse>(await this.execute(params, req, runtime), new RemoveDiskReplicaPairResponse({}));
    }

  }

  /**
   * Removes a replication pair from a replication pair-consistent group. After a replication pair is removed from a replication pair-consistent group, the pair is disassociated from the group but is not deleted.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group from which you want to remove a replication pair must be in the **Created** (`created`), **Stopped** (`stopped`), or **Invalid** (`invalid`) state.
   * 
   * @param request - RemoveDiskReplicaPairRequest
   * @returns RemoveDiskReplicaPairResponse
   */
  async removeDiskReplicaPair(request: RemoveDiskReplicaPairRequest): Promise<RemoveDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Enables the reverse replication feature for replication pairs that belong to a replication pair-consistent group. After reverse replication is enabled, data stored on the original secondary disks is replicated to the original primary disks. When a reverse replication is being performed, the primary and secondary sites of the replication pair-consistent group remain unchanged, but data is replicated from the secondary site to the primary site.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the `FailoverDiskReplicaPair` operation to enable failover.
   * *   Before a reverse replication is performed, the primary disks must be detached from its associated Elastic Compute Service (ECS) instance and must be in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disks.
   * *   After you enable reverse replication, you must call the `StartDiskReplicaPair` operation again to enable the async replication feature before data can be replicated from the original secondary disks to the original primary disks.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReprotectDiskReplicaGroupResponse
   */
  async reprotectDiskReplicaGroupWithOptions(request: ReprotectDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<ReprotectDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!$dara.isNull(request.reverseReplicate)) {
      query["ReverseReplicate"] = request.reverseReplicate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReprotectDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReprotectDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new ReprotectDiskReplicaGroupResponse({}));
    } else {
      return $dara.cast<ReprotectDiskReplicaGroupResponse>(await this.execute(params, req, runtime), new ReprotectDiskReplicaGroupResponse({}));
    }

  }

  /**
   * Enables the reverse replication feature for replication pairs that belong to a replication pair-consistent group. After reverse replication is enabled, data stored on the original secondary disks is replicated to the original primary disks. When a reverse replication is being performed, the primary and secondary sites of the replication pair-consistent group remain unchanged, but data is replicated from the secondary site to the primary site.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the `FailoverDiskReplicaPair` operation to enable failover.
   * *   Before a reverse replication is performed, the primary disks must be detached from its associated Elastic Compute Service (ECS) instance and must be in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disks.
   * *   After you enable reverse replication, you must call the `StartDiskReplicaPair` operation again to enable the async replication feature before data can be replicated from the original secondary disks to the original primary disks.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaGroupRequest
   * @returns ReprotectDiskReplicaGroupResponse
   */
  async reprotectDiskReplicaGroup(request: ReprotectDiskReplicaGroupRequest): Promise<ReprotectDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reprotectDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Enables the reverse replication feature for a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the [FailoverDiskReplicaPair](https://help.aliyun.com/document_detail/354358.html) operation to enable failover.
   * *   The primary disk must be detached from its associated Elastic Compute Service (ECS) instance and is in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disk.
   * *   After you enable reverse replication, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation again to activate the replication pair before data can be replicated from the original secondary disk to the original primary disk.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReprotectDiskReplicaPairResponse
   */
  async reprotectDiskReplicaPairWithOptions(request: ReprotectDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<ReprotectDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    if (!$dara.isNull(request.reverseReplicate)) {
      query["ReverseReplicate"] = request.reverseReplicate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReprotectDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReprotectDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new ReprotectDiskReplicaPairResponse({}));
    } else {
      return $dara.cast<ReprotectDiskReplicaPairResponse>(await this.execute(params, req, runtime), new ReprotectDiskReplicaPairResponse({}));
    }

  }

  /**
   * Enables the reverse replication feature for a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the [FailoverDiskReplicaPair](https://help.aliyun.com/document_detail/354358.html) operation to enable failover.
   * *   The primary disk must be detached from its associated Elastic Compute Service (ECS) instance and is in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disk.
   * *   After you enable reverse replication, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation again to activate the replication pair before data can be replicated from the original secondary disk to the original primary disk.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaPairRequest
   * @returns ReprotectDiskReplicaPairResponse
   */
  async reprotectDiskReplicaPair(request: ReprotectDiskReplicaPairRequest): Promise<ReprotectDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reprotectDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * In the elastic type dedicated block storage cluster, you can easily achieve the specified throughput (Bps) for the target disk. You only need to set the cloud disk ID and the target throughput, simplifying the process of configuring.
   * 
   * @param request - SetDedicatedBlockStorageClusterDiskThroughputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDedicatedBlockStorageClusterDiskThroughputResponse
   */
  async setDedicatedBlockStorageClusterDiskThroughputWithOptions(request: SetDedicatedBlockStorageClusterDiskThroughputRequest, runtime: $dara.RuntimeOptions): Promise<SetDedicatedBlockStorageClusterDiskThroughputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bps)) {
      body["Bps"] = request.bps;
    }

    if (!$dara.isNull(request.diskId)) {
      body["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDedicatedBlockStorageClusterDiskThroughput",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetDedicatedBlockStorageClusterDiskThroughputResponse>(await this.callApi(params, req, runtime), new SetDedicatedBlockStorageClusterDiskThroughputResponse({}));
    } else {
      return $dara.cast<SetDedicatedBlockStorageClusterDiskThroughputResponse>(await this.execute(params, req, runtime), new SetDedicatedBlockStorageClusterDiskThroughputResponse({}));
    }

  }

  /**
   * In the elastic type dedicated block storage cluster, you can easily achieve the specified throughput (Bps) for the target disk. You only need to set the cloud disk ID and the target throughput, simplifying the process of configuring.
   * 
   * @param request - SetDedicatedBlockStorageClusterDiskThroughputRequest
   * @returns SetDedicatedBlockStorageClusterDiskThroughputResponse
   */
  async setDedicatedBlockStorageClusterDiskThroughput(request: SetDedicatedBlockStorageClusterDiskThroughputRequest): Promise<SetDedicatedBlockStorageClusterDiskThroughputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDedicatedBlockStorageClusterDiskThroughputWithOptions(request, runtime);
  }

  /**
   * Enables the async replication feature for replication pairs that belong to a replication pair-consistent group. When the async replication feature is enabled for the pairs for the first time, the system first performs a full synchronization to synchronize all data from disks at the primary site (primary disks) to disks at the secondary site (secondary disks) and then periodically synchronizes incremental data based on the recovery point objective (RPO) of the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   If you set the `OneShot` to `false`, the replication pair-consistent group must be in the **Created** (`created` ), **Synchronizing** (`syncing` ), **Normal** (`normal` ), or **Stopped** (`stopped`) state.
   * *   If you set `OneShot` to `true`, the replication pair-consistent group must be in the **Created** (`created` ), **One-time Syncing** (`manual_syncing` ), or **Stopped** (`stopped`) state. The time interval between two consecutive one-time synchronizations must be longer than one half of the recovery point objective (RPO).
   * *   After a replication pair-consistent group is activated, the group enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first async replication to replicate all data from the primary disks to secondary disks.
   * 
   * @param request - StartDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDiskReplicaGroupResponse
   */
  async startDiskReplicaGroupWithOptions(request: StartDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<StartDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.oneShot)) {
      query["OneShot"] = request.oneShot;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new StartDiskReplicaGroupResponse({}));
    } else {
      return $dara.cast<StartDiskReplicaGroupResponse>(await this.execute(params, req, runtime), new StartDiskReplicaGroupResponse({}));
    }

  }

  /**
   * Enables the async replication feature for replication pairs that belong to a replication pair-consistent group. When the async replication feature is enabled for the pairs for the first time, the system first performs a full synchronization to synchronize all data from disks at the primary site (primary disks) to disks at the secondary site (secondary disks) and then periodically synchronizes incremental data based on the recovery point objective (RPO) of the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   If you set the `OneShot` to `false`, the replication pair-consistent group must be in the **Created** (`created` ), **Synchronizing** (`syncing` ), **Normal** (`normal` ), or **Stopped** (`stopped`) state.
   * *   If you set `OneShot` to `true`, the replication pair-consistent group must be in the **Created** (`created` ), **One-time Syncing** (`manual_syncing` ), or **Stopped** (`stopped`) state. The time interval between two consecutive one-time synchronizations must be longer than one half of the recovery point objective (RPO).
   * *   After a replication pair-consistent group is activated, the group enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first async replication to replicate all data from the primary disks to secondary disks.
   * 
   * @param request - StartDiskReplicaGroupRequest
   * @returns StartDiskReplicaGroupResponse
   */
  async startDiskReplicaGroup(request: StartDiskReplicaGroupRequest): Promise<StartDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Activates a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can be activated.
   * *   After a replication pair is activated, it enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first asynchronous replication to replicate all data from the primary disk to the secondary disk.
   * 
   * @param request - StartDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDiskReplicaPairResponse
   */
  async startDiskReplicaPairWithOptions(request: StartDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<StartDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.oneShot)) {
      query["OneShot"] = request.oneShot;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new StartDiskReplicaPairResponse({}));
    } else {
      return $dara.cast<StartDiskReplicaPairResponse>(await this.execute(params, req, runtime), new StartDiskReplicaPairResponse({}));
    }

  }

  /**
   * Activates a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can be activated.
   * *   After a replication pair is activated, it enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first asynchronous replication to replicate all data from the primary disk to the secondary disk.
   * 
   * @param request - StartDiskReplicaPairRequest
   * @returns StartDiskReplicaPairResponse
   */
  async startDiskReplicaPair(request: StartDiskReplicaPairRequest): Promise<StartDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Starts a disaster recovery drill to ensure the continued replication and clone the data from the last recovery point of the secondary disk to a new disk. This helps you test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on the secondary disk, a pay-as-you-go drill disk that has the same capacity and category as the secondary disk is created in the zone where the secondary disk resides. The drill disk contains last-recovery-point data that can be used to test the completeness and correctness of applications.
   * 
   * @param request - StartPairDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartPairDrillResponse
   */
  async startPairDrillWithOptions(request: StartPairDrillRequest, runtime: $dara.RuntimeOptions): Promise<StartPairDrillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.pairId)) {
      query["PairId"] = request.pairId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartPairDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartPairDrillResponse>(await this.callApi(params, req, runtime), new StartPairDrillResponse({}));
    } else {
      return $dara.cast<StartPairDrillResponse>(await this.execute(params, req, runtime), new StartPairDrillResponse({}));
    }

  }

  /**
   * Starts a disaster recovery drill to ensure the continued replication and clone the data from the last recovery point of the secondary disk to a new disk. This helps you test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on the secondary disk, a pay-as-you-go drill disk that has the same capacity and category as the secondary disk is created in the zone where the secondary disk resides. The drill disk contains last-recovery-point data that can be used to test the completeness and correctness of applications.
   * 
   * @param request - StartPairDrillRequest
   * @returns StartPairDrillResponse
   */
  async startPairDrill(request: StartPairDrillRequest): Promise<StartPairDrillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startPairDrillWithOptions(request, runtime);
  }

  /**
   * Starts a disaster recovery drill in a replication pair-consistent group to ensure the continued replication and restores data from the latest recovery point of secondary disks to new disks. This helps test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on secondary disks, a pay-as-you-go drill disk is created in the zone where the secondary disk of each replication pair resides. The latest-recovery-point data is restored to the drill disks to test the completeness and correctness of applications.
   * 
   * @param request - StartReplicaGroupDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartReplicaGroupDrillResponse
   */
  async startReplicaGroupDrillWithOptions(request: StartReplicaGroupDrillRequest, runtime: $dara.RuntimeOptions): Promise<StartReplicaGroupDrillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartReplicaGroupDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartReplicaGroupDrillResponse>(await this.callApi(params, req, runtime), new StartReplicaGroupDrillResponse({}));
    } else {
      return $dara.cast<StartReplicaGroupDrillResponse>(await this.execute(params, req, runtime), new StartReplicaGroupDrillResponse({}));
    }

  }

  /**
   * Starts a disaster recovery drill in a replication pair-consistent group to ensure the continued replication and restores data from the latest recovery point of secondary disks to new disks. This helps test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on secondary disks, a pay-as-you-go drill disk is created in the zone where the secondary disk of each replication pair resides. The latest-recovery-point data is restored to the drill disks to test the completeness and correctness of applications.
   * 
   * @param request - StartReplicaGroupDrillRequest
   * @returns StartReplicaGroupDrillResponse
   */
  async startReplicaGroupDrill(request: StartReplicaGroupDrillRequest): Promise<StartReplicaGroupDrillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startReplicaGroupDrillWithOptions(request, runtime);
  }

  /**
   * Stops a replication pair-consistent group. This operation stops all replication pairs in the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group that you want to stop must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), or **Stopped** (`stopped`) state.
   * *   When a replication pair-consistent group is stopped, it enters the **Stopped** (`stopped`) state. If a replication pair-consistent group cannot be stopped, the state of the group remains unchanged or changes to **Stop Failed** (`stop_failed`). In this case, try again later.
   * 
   * @param request - StopDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDiskReplicaGroupResponse
   */
  async stopDiskReplicaGroupWithOptions(request: StopDiskReplicaGroupRequest, runtime: $dara.RuntimeOptions): Promise<StopDiskReplicaGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new StopDiskReplicaGroupResponse({}));
    } else {
      return $dara.cast<StopDiskReplicaGroupResponse>(await this.execute(params, req, runtime), new StopDiskReplicaGroupResponse({}));
    }

  }

  /**
   * Stops a replication pair-consistent group. This operation stops all replication pairs in the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group that you want to stop must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), or **Stopped** (`stopped`) state.
   * *   When a replication pair-consistent group is stopped, it enters the **Stopped** (`stopped`) state. If a replication pair-consistent group cannot be stopped, the state of the group remains unchanged or changes to **Stop Failed** (`stop_failed`). In this case, try again later.
   * 
   * @param request - StopDiskReplicaGroupRequest
   * @returns StopDiskReplicaGroupResponse
   */
  async stopDiskReplicaGroup(request: StopDiskReplicaGroupRequest): Promise<StopDiskReplicaGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Stops a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Initial Syncing** (`initial_syncing`), **Syncing** (`syncing`), **One-time Syncing** (`manual_syncing`), or **Normal** (`normal`) state can be stopped. When a replication pair is stopped, it enters the Stopped (`stopped`) state. The secondary disk rolls back to the point in time when the last async replication was complete and drops all the data that is being replicated from the primary disk.
   * 
   * @param request - StopDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDiskReplicaPairResponse
   */
  async stopDiskReplicaPairWithOptions(request: StopDiskReplicaPairRequest, runtime: $dara.RuntimeOptions): Promise<StopDiskReplicaPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new StopDiskReplicaPairResponse({}));
    } else {
      return $dara.cast<StopDiskReplicaPairResponse>(await this.execute(params, req, runtime), new StopDiskReplicaPairResponse({}));
    }

  }

  /**
   * Stops a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Initial Syncing** (`initial_syncing`), **Syncing** (`syncing`), **One-time Syncing** (`manual_syncing`), or **Normal** (`normal`) state can be stopped. When a replication pair is stopped, it enters the Stopped (`stopped`) state. The secondary disk rolls back to the point in time when the last async replication was complete and drops all the data that is being replicated from the primary disk.
   * 
   * @param request - StopDiskReplicaPairRequest
   * @returns StopDiskReplicaPairResponse
   */
  async stopDiskReplicaPair(request: StopDiskReplicaPairRequest): Promise<StopDiskReplicaPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Creates tags and adds the tags to Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   * Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number of tags is reached, an error message is returned. For more information, see the "Tag limits" section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Creates tags and adds the tags to Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   * Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number of tags is reached, an error message is returned. For more information, see the "Tag limits" section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unbind disks from a enterprise-level snapshot policy.
   * 
   * @param request - UnbindEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindEnterpriseSnapshotPolicyResponse
   */
  async unbindEnterpriseSnapshotPolicyWithOptions(request: UnbindEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<UnbindEnterpriseSnapshotPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskTargets)) {
      query["DiskTargets"] = request.diskTargets;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnbindEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new UnbindEnterpriseSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<UnbindEnterpriseSnapshotPolicyResponse>(await this.execute(params, req, runtime), new UnbindEnterpriseSnapshotPolicyResponse({}));
    }

  }

  /**
   * Unbind disks from a enterprise-level snapshot policy.
   * 
   * @param request - UnbindEnterpriseSnapshotPolicyRequest
   * @returns UnbindEnterpriseSnapshotPolicyResponse
   */
  async unbindEnterpriseSnapshotPolicy(request: UnbindEnterpriseSnapshotPolicyRequest): Promise<UnbindEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Removes tags from specified Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   *   You can remove up to 20 tags at a time.
   * *   After a tag is removed from an EBS resource, the tag is automatically deleted if the tag is not added to any instance.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Removes tags from specified Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   *   You can remove up to 20 tags at a time.
   * *   After a tag is removed from an EBS resource, the tag is automatically deleted if the tag is not added to any instance.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Search for a enterprise-level snapshot policy.
   * 
   * @param tmpReq - UpdateEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnterpriseSnapshotPolicyResponse
   */
  async updateEnterpriseSnapshotPolicyWithOptions(tmpReq: UpdateEnterpriseSnapshotPolicyRequest, runtime: $dara.RuntimeOptions): Promise<UpdateEnterpriseSnapshotPolicyResponse> {
    tmpReq.validate();
    let request = new UpdateEnterpriseSnapshotPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.crossRegionCopyInfo)) {
      request.crossRegionCopyInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.crossRegionCopyInfo, "CrossRegionCopyInfo", "json");
    }

    if (!$dara.isNull(tmpReq.retainRule)) {
      request.retainRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retainRule, "RetainRule", "json");
    }

    if (!$dara.isNull(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "Schedule", "json");
    }

    if (!$dara.isNull(tmpReq.specialRetainRules)) {
      request.specialRetainRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.specialRetainRules, "SpecialRetainRules", "json");
    }

    if (!$dara.isNull(tmpReq.storageRule)) {
      request.storageRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storageRule, "StorageRule", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.crossRegionCopyInfoShrink)) {
      query["CrossRegionCopyInfo"] = request.crossRegionCopyInfoShrink;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.retainRuleShrink)) {
      query["RetainRule"] = request.retainRuleShrink;
    }

    if (!$dara.isNull(request.scheduleShrink)) {
      query["Schedule"] = request.scheduleShrink;
    }

    if (!$dara.isNull(request.specialRetainRulesShrink)) {
      query["SpecialRetainRules"] = request.specialRetainRulesShrink;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.storageRuleShrink)) {
      query["StorageRule"] = request.storageRuleShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new UpdateEnterpriseSnapshotPolicyResponse({}));
    } else {
      return $dara.cast<UpdateEnterpriseSnapshotPolicyResponse>(await this.execute(params, req, runtime), new UpdateEnterpriseSnapshotPolicyResponse({}));
    }

  }

  /**
   * Search for a enterprise-level snapshot policy.
   * 
   * @param request - UpdateEnterpriseSnapshotPolicyRequest
   * @returns UpdateEnterpriseSnapshotPolicyResponse
   */
  async updateEnterpriseSnapshotPolicy(request: UpdateEnterpriseSnapshotPolicyRequest): Promise<UpdateEnterpriseSnapshotPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * 更新解决方案实例属性
   * 
   * @param request - UpdateSolutionInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSolutionInstanceAttributeResponse
   */
  async updateSolutionInstanceAttributeWithOptions(request: UpdateSolutionInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateSolutionInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.solutionInstanceId)) {
      query["SolutionInstanceId"] = request.solutionInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSolutionInstanceAttribute",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateSolutionInstanceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateSolutionInstanceAttributeResponse({}));
    } else {
      return $dara.cast<UpdateSolutionInstanceAttributeResponse>(await this.execute(params, req, runtime), new UpdateSolutionInstanceAttributeResponse({}));
    }

  }

  /**
   * 更新解决方案实例属性
   * 
   * @param request - UpdateSolutionInstanceAttributeRequest
   * @returns UpdateSolutionInstanceAttributeResponse
   */
  async updateSolutionInstanceAttribute(request: UpdateSolutionInstanceAttributeRequest): Promise<UpdateSolutionInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSolutionInstanceAttributeWithOptions(request, runtime);
  }

}
