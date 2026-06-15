// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter to use for the query. Set the value to `CreationStartTime`. You can use `Filter.1.Key` and `Filter.1.Value` to query resources that were created after a specific point in time.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter to use for the query. When you specify this parameter, you must also specify the `Filter.1.Key` parameter. Specify the time in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
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
   * The tag key of the disk.
   * 
   * > For better compatibility, we recommend that you use the `Tag.N.Key` parameter.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the disk.
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
   * The additional attributes. Currently, the only valid value is `Placement`, which you can specify to query the data placement location of the disk.
   * 
   * > Currently, only regional redundant disks have a data placement location.
   * 
   * @example
   * IOPS
   */
  additionalAttributes?: string[];
  /**
   * @remarks
   * The ID of the automatic snapshot policy that is applied to the cloud disk.
   * 
   * @example
   * sp-m5e2w2jutw8bv31****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * - all: all disk categories, including all cloud disks, local disks, and elastic ephemeral disks.
   * 
   * - cloud: basic disk.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: SSD disk.
   * 
   * - cloud_essd: ESSD
   * 
   * - cloud_auto: ESSD AutoPL disk.
   * 
   * - cloud_regional_disk_auto: regional redundant ESSD disk.
   * 
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * - elastic_ephemeral_disk_standard: Standard elastic ephemeral disk.
   * 
   * - elastic_ephemeral_disk_premium: Premium elastic ephemeral disk.
   * 
   * - local_ssd_pro: I/O-intensive local disk.
   * 
   * - local_hdd_pro: throughput-intensive local disk.
   * 
   * - ephemeral: (Discontinued) local disk.
   * 
   * - ephemeral_ssd: (Discontinued) local SSD disk.
   * 
   * Default value: all.
   * 
   * @example
   * all
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release the automatic snapshots of the disk when the disk is released. Valid values:
   * 
   * - true: The automatic snapshots are released.
   * 
   * - false: The automatic snapshots are retained.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether the disk is released when the instance is released. Valid values:
   * 
   * - true: The disk is released with the instance.
   * 
   * - false: The disk is retained as a pay-as-you-go data disk and is not released.
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
   * 
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The IDs of the cloud disks, local disks, or elastic ephemeral disks. The value is a JSON array of up to 100 disk IDs.
   * 
   * @example
   * ["d-bp67acfmxazb4p****", "d-bp67acfmxazb4g****", … "d-bp67acfmxazb4d****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The name of the disk. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * - all: both system disks and data disks.
   * 
   * - system: only system disks.
   * 
   * - data: only data disks.
   * 
   * Default value: all.
   * 
   * > Elastic ephemeral disks cannot be used as system disks.
   * 
   * @example
   * all
   */
  diskType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for the request. Valid values:
   * 
   * - true: Performs a dry run to check the request\\"s validity, including AccessKey authentication, permissions, and required parameters. If the request is valid, the `DryRunOperation` error code is returned. Otherwise, an error message is returned.
   * 
   * - false: Sends the request. If the request is valid, a 2xx HTTP status code is returned and the resources are queried.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the automatic snapshot policy feature is enabled for the disk. Valid values:
   * 
   * - true: The feature is enabled.
   * 
   * - false: The feature is disabled.
   * 
   * > This parameter is deprecated. The automatic snapshot policy feature is enabled by default for all disks. You only need to apply an automatic snapshot policy to a disk.
   * 
   * @example
   * true
   */
  enableAutoSnapshot?: boolean;
  /**
   * @remarks
   * Specifies whether an automatic snapshot policy is applied to the disk. Valid values:
   * 
   * - true: An automatic snapshot policy is applied.
   * 
   * - false: No automatic snapshot policy is applied to the disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableAutomatedSnapshotPolicy?: boolean;
  /**
   * @remarks
   * Specifies whether the disk is a shared block storage device.
   * 
   * @example
   * false
   */
  enableShared?: boolean;
  /**
   * @remarks
   * Specifies whether to query only encrypted disks. Valid values:
   * 
   * - true: Only encrypted disks are queried.
   * 
   * - false: The query includes both encrypted and unencrypted disks.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the instance to which the disk is attached.
   * 
   * @example
   * i-bp67acfmxazb4q****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the KMS key that is used to encrypt the cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The reason why the disk is locked. Valid values:
   * 
   * - financial: The disk is locked due to overdue payments.
   * 
   * - security: The disk is locked for security reasons.
   * 
   * @example
   * security
   */
  lockReason?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 500.
   * 
   * Default value:
   * 
   * - If this parameter is not specified or is set to a value less than 10, the default value is 10.
   * 
   * - If this parameter is set to a value greater than 500, the value 500 is used.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether the multi-attach feature is enabled for the disk. Valid values:
   * 
   * - Disabled: The multi-attach feature is disabled.
   * 
   * - Enabled: The multi-attach feature is enabled.
   * 
   * - LegacyShared: Used to query shared block storage devices.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  /**
   * @remarks
   * The token used to start the next query. To retrieve the next page of results, set this parameter to the `NextToken` value returned from the previous call.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is deprecated. Use the `NextToken` and `MaxResults` parameters for paged queries instead.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is deprecated. Use the `NextToken` and `MaxResults` parameters for paged queries instead.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the disk is detachable. Valid values:
   * 
   * - true: The disk is detachable. A detachable disk can exist independently and can be attached to or detached from an instance within the same availability zone.
   * 
   * - false: The disk is not detachable. Its lifecycle is bound to the instance to which it is attached.
   * 
   * The `Portable` attribute for the following disk types is always `false`, and their lifecycles are bound to the instances to which they are attached:
   * 
   * - Local disks
   * 
   * - Local SSD disks
   * 
   * - Subscription data disks
   * 
   * @example
   * false
   */
  portable?: boolean;
  /**
   * @remarks
   * The ID of the region where the disk resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the disk belongs. When you use this parameter to filter resources, the number of resources cannot exceed 1,000.
   * 
   * > You cannot filter resources in the default resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the snapshot that was used to create the cloud disk.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The state of the disk. For more information, see [Disk states](https://help.aliyun.com/document_detail/25689.html). Valid values:
   * 
   * - In_use: The disk is in use.
   * 
   * - Available: The disk is ready for attachment.
   * 
   * - Attaching: The disk is being attached.
   * 
   * - Detaching: The disk is being detached.
   * 
   * - Creating: The disk is being created.
   * 
   * - ReIniting: The disk is being re-initialized.
   * 
   * - All: all disk states.
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
   * The ID of the availability zone.
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

