// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDisksRequestArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  assumeRoleFor?: string;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  rolearn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      roleType: 'RoleType',
      rolearn: 'Rolearn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      roleType: 'string',
      rolearn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDisksRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the disk. Valid values of N: 1 to 20. If you specify Tag.N.Key, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the disk. Valid values of N: 1 to 20. If you specify Tag.N.Value, it can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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

export class CloneDisksRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available.
   */
  arn?: CloneDisksRequestArn[];
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the new disk. Valid values:
   * - true: enables the feature.
   * - false: disables the feature.
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://www.alibabacloud.com/help/en/ecs/user-guide/essd-autopl-disks).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate a parameter value from your client to ensure that the value is unique across different requests. The ClientToken parameter only supports ASCII characters and can be up to 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The destination zone of the new disk.
   * 
   * @example
   * cn-hangzhou-a
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The type of the new disk. Valid values:
   * 
   * - cloud_essd: standard SSD.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * - cloud_regional_disk_auto: zone-redundant enterprise SSD.
   * 
   * > Disk type restrictions for cloud disk cloning:
   * > - A non-zone-redundant cloud disk can only be cloned to a non-zone-redundant type.
   * > - A zone-redundant cloud disk can only be cloned to a zone-redundant type.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the disk. The name must be 2 to 128 characters in length. It can contain letters in the Unicode Letter category (including English and Chinese characters) and ASCII digits (0 to 9). It can also contain colons (:), underscores (_), periods (.), and hyphens (-). It must start with a letter in the Unicode Letter category.
   * 
   * Default value: null.
   * 
   * @example
   * MyDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to only perform a dry run for the request. Valid values:
   * - true: sends a check request and does not perform the actual operation. The check items include whether the AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether required parameters are specified. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * - false (default): sends a normal request. After the check succeeds, the 2XX HTTP status code is returned and the actual operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: string;
  /**
   * @remarks
   * Specifies whether the new disk is an encrypted cloud disk. Valid values:
   * - true: yes.
   * - false: no.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID used by the new disk.
   * 
   * @example
   * key-szz67b2f696f4wh9yeg5d
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the multi-attach attribute for the new disk. Valid values:
   * 
   * - Disabled: disables the attribute.
   * - Enabled: enables the attribute. Currently, only standard SSDs support the Settings of `Enabled`.
   * 
   * This parameter is required.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Settings of the performance level for a standard SSD. Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * > If DiskCategory is set to cloud_essd, the PerformanceLevel parameter is required.
   * 
   * For more information about how to select the performance level of an enterprise SSD, see [enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read and write IOPS of the ESSD AutoPL disk. Valid values:
   * - If the capacity is less than or equal to 3 GiB, provisioned performance is not supported.
   * - If the capacity is greater than or equal to 4 GiB, the valid values are 0 to min{(1,000 IOPS/GiB × Capacity - Baseline IOPS), 50,000}.
   * 
   * Baseline performance = max{min{1,800 + 50 × Capacity, 50,000}, 3,000}.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://www.alibabacloud.com/help/en/ecs/user-guide/essd-autopl-disks).
   * 
   * @example
   * 10
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The access mode of the cloud disk.
   * 
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://www.alibabacloud.com/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.
   * 
   * This parameter is required.
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
   * rg-bp199lyny9b3****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The capacity of the new disk. Unit: GiB. You must specify this parameter. Valid values:
   * 
   * - cloud_essd: The valid values vary by performance level.
   *     - PL0: 1 to 65,536.
   *     - PL1: 20 to 65,536.
   *     - PL2: 461 to 65,536.
   *     - PL3: 1,261 to 65,536.
   * - cloud_auto: 1 to 65,536.
   * - cloud_essd_entry: 10 to 32,768.
   * - cloud_regional_disk_auto: 10 to 65,536.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  size?: number;
  /**
   * @remarks
   * The ID of the source disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1d6tsvznfghy7y****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The list of tag information for the disk.
   */
  tag?: CloneDisksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      burstingEnabled: 'BurstingEnabled',
      clientToken: 'ClientToken',
      destinationZoneId: 'DestinationZoneId',
      diskCategory: 'DiskCategory',
      diskName: 'DiskName',
      dryRun: 'DryRun',
      encrypted: 'Encrypted',
      kmsKeyId: 'KmsKeyId',
      multiAttach: 'MultiAttach',
      ownerId: 'OwnerId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      readWriteMode: 'ReadWriteMode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      size: 'Size',
      sourceDiskId: 'SourceDiskId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: { 'type': 'array', 'itemType': CloneDisksRequestArn },
      burstingEnabled: 'boolean',
      clientToken: 'string',
      destinationZoneId: 'string',
      diskCategory: 'string',
      diskName: 'string',
      dryRun: 'string',
      encrypted: 'boolean',
      kmsKeyId: 'string',
      multiAttach: 'string',
      ownerId: 'number',
      performanceLevel: 'string',
      provisionedIops: 'number',
      readWriteMode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      size: 'number',
      sourceDiskId: 'string',
      tag: { 'type': 'array', 'itemType': CloneDisksRequestTag },
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

