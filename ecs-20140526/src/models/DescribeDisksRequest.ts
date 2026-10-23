// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key used to query resources. Set the value to `CreationStartTime`. If you specify both `Filter.1.Key` and `Filter.1.Value`, you can query resources created after the specified time.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value used to query resources. If you specify this parameter, you must also specify the `Filter.1.Key` parameter. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
   * 
   * @example
   * 2017-12-05T22:40Z
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

export class DescribeDisksRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the disk. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the resource count returned cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that attach multiple tags cannot exceed 1,000. If the resource count exceeds 1,000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the disk. Valid values of N: 1 to 20.
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

export class DescribeDisksRequest extends $dara.Model {
  filter?: DescribeDisksRequestFilter[];
  /**
   * @remarks
   * The list of additional attributes. Currently, only `Placement` is supported, which indicates the data storage location of the disk.
   * 
   * > Currently, only regional disks have a data storage location.
   * 
   * @example
   * IOPS
   */
  additionalAttributes?: string[];
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-m5e2w2jutw8bv31****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The disk category. Valid values:
   * - all: all cloud disks, local disks, and elastic ephemeral disks.
   * - cloud: basic disk.
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_regional_disk_auto: regional ESSD.
   * - cloud_essd_entry: ESSD Entry disk.
   * - elastic_ephemeral_disk_standard: standard elastic ephemeral disk.
   * - elastic_ephemeral_disk_premium: premium elastic ephemeral disk.
   * - local_ssd_pro: I/O-intensive local disk.
   * - local_hdd_pro: throughput-intensive local disk.
   * - ephemeral: (retired) local disk.
   * - ephemeral_ssd: (retired) local SSD.
   * 
   * Default value: all.
   * 
   * @example
   * all
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether automatic snapshots are released when the cloud disk is released. Valid values:
   * - true: Automatic snapshots are released.
   * - false: Automatic snapshots are not released.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether the disk is released together with the instance. Valid values:
   * - true: The disk is released together with the instance.
   * - false: The disk is retained and not released. It is converted to a pay-as-you-go data disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The billing method of the disk. Valid values:
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The IDs of the cloud disks, local disks, or elastic ephemeral disks. The value is a JSON array that contains up to 100 IDs separated by commas (,).
   * 
   * @example
   * ["d-bp67acfmxazb4p****", "d-bp67acfmxazb4g****", … "d-bp67acfmxazb4d****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The name of the disk. The name must be 2 to 128 characters in length and can contain Unicode letters, including English letters, Chinese characters, and digits. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The type of the cloud disk, local disk, or elastic ephemeral disk to query. Valid values:
   * - all: queries both system disks and data disks.
   * - system: queries only system disks.
   * - data: queries only data disks.
   * 
   * Default value: all.
   * > Elastic ephemeral disks cannot be used as system disks.
   * 
   * @example
   * all
   */
  diskType?: string;
  /**
   * @remarks
   * Specifies whether to only perform a dry run for this request. Valid values:
   * - true: send a check request and do not query resources. The check items include whether the AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - false: send a Normal request. If the request passes the check, a 2xx HTTP status code is returned and resources are queried.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the automatic snapshot policy feature is enabled for the cloud disk. Valid values:
   * - true: The feature is enabled.
   * - false: The feature is not enabled.
   * 
   * > This parameter is deprecated. The automatic snapshot policy feature is enabled by default for newly created cloud disks. You only need to apply an automatic snapshot policy to the cloud disk to use the feature.
   * 
   * @example
   * true
   */
  enableAutoSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether an automatic snapshot policy is applied to the cloud disk. Valid values:
   * - true: An automatic snapshot policy is applied.
   * - false: No automatic snapshot policy is applied.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableAutomatedSnapshotPolicy?: boolean;
  /**
   * @remarks
   * Specifies whether the block storage device is Shared Block Storage.
   * 
   * @example
   * false
   */
  enableShared?: boolean;
  /**
   * @remarks
   * Specifies whether to query only encrypted cloud disks. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The instance ID to which the disk, local disk, or elastic ephemeral disk is attached.
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
   * The reason why the disk is locked. Valid values:
   * - financial: The disk is locked due to overdue payments.
   * - security: The disk is locked for security reasons.
   * 
   * @example
   * security
   */
  lockReason?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 10 to 500.
   * 
   * Default value:
   * - If this parameter is not specified or the specified value is less than 10, the default value is 10.
   * - If the specified value is greater than 500, the default value is 500.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether the multi-attach feature is enabled. Valid values:
   * - Disabled: The feature is disabled.
   * - Enabled: The feature is enabled.
   * - LegacyShared: Used to query shared block storage devices.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  /**
   * @remarks
   * The query token. The value is the `NextToken` value returned from the previous API call.
   * 
   * For more information about how to configure the returned data for this operation, see the operation description section above.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to go offline. We recommend that you use the `NextToken` and `MaxResults` parameters to perform paging and complete the paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to go offline. We recommend that you use the `NextToken` and `MaxResults` parameters to perform paging and complete the paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The performance level (PL) of the ESSD disk. Valid values: PL0, PL1, PL2, and PL3.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Specifies whether the disk can be detached. Valid values:
   * - true: The disk can be detached. It can exist independently and can be freely attached and detached within a zone.
   * - false: The disk cannot be detached. It cannot exist independently and cannot be freely attached or detached within a zone.
   * 
   * The `Portable` attribute is `false` for the following types of block storage devices, and their lifecycles are the same as those of the instances:
   * - Local disks.
   * - Local SSDs.
   * - Subscription data disks.
   * 
   * @example
   * false
   */
  portable?: boolean;
  /**
   * @remarks
   * The region ID of the block storage device. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the disk belongs. When you use this parameter to filter resources, the resource count cannot exceed 1,000.
   * 
   * > Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create the cloud disk.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The disk status. For more information, see [Disk status](https://help.aliyun.com/document_detail/25689.html). Valid values:
   * - In_use: The disk is in use.
   * - Available: The disk is available for attachment.
   * - Attaching: The disk is being attached.
   * - Detaching: The disk is being detached.
   * - Creating: The disk is being created.
   * - ReIniting: The disk is being initialized.
   * - All: all statuses.
   * 
   * Default value: All.
   * 
   * @example
   * All
   */
  status?: string;
  /**
   * @remarks
   * The tags of the disk.
   */
  tag?: DescribeDisksRequestTag[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      additionalAttributes: 'AdditionalAttributes',
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      category: 'Category',
      deleteAutoSnapshot: 'DeleteAutoSnapshot',
      deleteWithInstance: 'DeleteWithInstance',
      diskChargeType: 'DiskChargeType',
      diskIds: 'DiskIds',
      diskName: 'DiskName',
      diskType: 'DiskType',
      dryRun: 'DryRun',
      enableAutoSnapshot: 'EnableAutoSnapshot',
      enableAutomatedSnapshotPolicy: 'EnableAutomatedSnapshotPolicy',
      enableShared: 'EnableShared',
      encrypted: 'Encrypted',
      instanceId: 'InstanceId',
      KMSKeyId: 'KMSKeyId',
      lockReason: 'LockReason',
      maxResults: 'MaxResults',
      multiAttach: 'MultiAttach',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      performanceLevel: 'PerformanceLevel',
      portable: 'Portable',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotId: 'SnapshotId',
      status: 'Status',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeDisksRequestFilter },
      additionalAttributes: { 'type': 'array', 'itemType': 'string' },
      autoSnapshotPolicyId: 'string',
      category: 'string',
      deleteAutoSnapshot: 'boolean',
      deleteWithInstance: 'boolean',
      diskChargeType: 'string',
      diskIds: 'string',
      diskName: 'string',
      diskType: 'string',
      dryRun: 'boolean',
      enableAutoSnapshot: 'boolean',
      enableAutomatedSnapshotPolicy: 'boolean',
      enableShared: 'boolean',
      encrypted: 'boolean',
      instanceId: 'string',
      KMSKeyId: 'string',
      lockReason: 'string',
      maxResults: 'number',
      multiAttach: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      performanceLevel: 'string',
      portable: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDisksRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.additionalAttributes)) {
      $dara.Model.validateArray(this.additionalAttributes);
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

