// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key used to query resources. Set the value to `CreationStartTime`. You can specify both Filter.1.Key and Filter.1.Value to query resources created after the specified point in time.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value used to query resources. When you specify this parameter, you must also specify Filter.1.Key. Specify the time in the `yyyy-MM-ddTHH:mmZ` format in UTC+0.
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
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that are attached with all specified tags cannot exceed 1,000. If the resource count exceeds 1,000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
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
   * The list of additional attribute values. The only valid value is `Placement`, which queries the data storage location of the disk.
   * 
   * > Only regional (cross-zone redundant) disks have a valid data storage location.
   * 
   * @example
   * IOPS
   */
  additionalAttributes?: string[];
  /**
   * @remarks
   * The ID of the automatic snapshot policy used to query cloud disks.
   * 
   * @example
   * sp-m5e2w2jutw8bv31****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The category of the disk. Valid values: 
   *          
   * - all: all cloud disks, local disks, and elastic ephemeral disks.
   * - cloud: basic disk.
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD (ESSD).
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_regional_disk_auto: regional ESSD.
   * - cloud_essd_entry: ESSD Entry disk.
   * - elastic_ephemeral_disk_standard: elastic ephemeral disk - standard.
   * - elastic_ephemeral_disk_premium: elastic ephemeral disk - premium.
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
   * Specifies whether automatic snapshots are released when the cloud disk is released.
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether the disk is set to be released together with the instance. Valid values:
   * 
   * - true: The disk is released together with the instance.
   * - false: The disk is retained as a pay-as-you-go data disk when the instance is released.
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
   * 
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The IDs of cloud disks, local disks, or elastic ephemeral disks. The value is a JSON array that can contain up to 100 IDs. Separate the IDs with commas (,).
   * 
   * @example
   * ["d-bp67acfmxazb4p****", "d-bp67acfmxazb4g****", … "d-bp67acfmxazb4d****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The name of the disk. The name must be 2 to 128 characters in length and can contain Unicode characters under the letter category (including letters, digits, and characters from other languages). The name can contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The type of the cloud disk, local disk, or elastic ephemeral disk to query. Valid values: 
   *          
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
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized Resource Access Management (RAM) users, and missing parameter values. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * - false: performs a dry run and sends the Normal request. If the request passes the dry run, a 2XX HTTP status code is returned and the authorization is verified.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * > This parameter is deprecated. After a cloud disk is created, the automatic snapshot policy feature is enabled by default. You only need to associate an automatic snapshot policy with the cloud disk.
   * 
   * @example
   * true
   */
  enableAutoSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether an automatic snapshot policy is applied to the cloud disk.
   * - true: Applied.
   * - false: Not applied.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableAutomatedSnapshotPolicy?: boolean;
  /**
   * @remarks
   * Specifies whether the disk is a Shared Block Storage device.
   * 
   * @example
   * false
   */
  enableShared?: boolean;
  /**
   * @remarks
   * Specifies whether to query only encrypted cloud disks.
   * 
   * - true: Yes.
   * 
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
   * The instance ID of the instance to which the cloud disk, local disk, or elastic ephemeral disk is attached.
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
   * 
   * - financial: locked due to overdue payment.
   * - security: locked for security reasons.
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
   * - If this parameter is not specified or is set to a value less than 10, the default value is 10.
   * - If this parameter is set to a value greater than 500, the default value is 500.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether the multi-attach feature is enabled. Valid values:
   * 
   * - Disabled: not enabled.
   * - Enabled: enabled.
   * - LegacyShared: queries Shared Block Storage devices.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * For information about how to view the returned data, see the operation description section above.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults for paging operations.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults for paging operations.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the disk is removable. Valid values:
   * 
   * - true: The disk can exist independently and can be freely attached and detached within the zone.
   * 
   * - false: The disk cannot exist independently and cannot be freely attached and detached within the zone.
   * 
   * The Portable attribute of the following types of block storage devices is false, and their lifecycle is the same as that of the instance:
   * 
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
   * The region ID of the block storage device. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the disk belongs. When you use this parameter to filter resources, the resource count cannot exceed 1,000.
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
   * The status of the disk. For more information, see [Disk status](https://help.aliyun.com/document_detail/25689.html). Valid values:
   * - In_use: in use.
   * - Available: to be attached.
   * - Attaching: being attached.
   * - Detaching: being detached.
   * - Creating: being created.
   * - ReIniting: being initialized.
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
   * The list of tags of the disk.
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

