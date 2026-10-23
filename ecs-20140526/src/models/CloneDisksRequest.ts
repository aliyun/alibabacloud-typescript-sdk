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
   * The tag key of the cloud disk. Valid values of N: 1 to 20. If you specify Tag.N.Key, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the cloud disk. Valid values of N: 1 to 20. If you specify Tag.N.Value, it can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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
   * Specifies whether to enable performance bursting for the new cloud disk. Valid values:
   * - true: enables performance bursting.
   * - false: disables performance bursting.
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPLs](https://www.alibabacloud.com/help/en/ecs/user-guide/essd-autopl-disks).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate a parameter value from your client to ensure that the value is unique across different requests. The ClientToken parameter only supports ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The category of the new cloud disk. Valid values:
   * 
   * - cloud_essd: ESSD.
   * - cloud_auto: ESSD AutoPL.
   * - cloud_essd_entry: ESSD Entry.
   * - cloud_regional_disk_auto: zone-redundant ESSD.
   * 
   * > Limits on cloud disk categories for cloning
   * > - Non-zone-redundant cloud disks can only be cloned to non-zone-redundant types.
   * > - Zone-redundant cloud disks can only be cloned to zone-redundant types.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the cloud disk. The name must be 2 to 128 characters in length and can contain letters in the Unicode letter category (including English and Chinese characters) and ASCII digits (0-9). It can contain colons (:), underscores (_), periods (.), and hyphens (-). It must start with a letter in the Unicode letter category.
   * 
   * Default value: empty.
   * 
   * @example
   * MyDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to only perform a dry run for this request. Valid values:
   * - true: sends a check request and does not perform the actual operation. The check items include whether the AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * - false (default): sends a Normal request. If the check succeeds, a 2XX HTTP status code is returned and the actual operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: string;
  /**
   * @remarks
   * Specifies whether the new cloud disk is encrypted. Valid values:
   * - true: The cloud disk is encrypted.
   * - false: The cloud disk is not encrypted.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The KMS key ID used by the new cloud disk.
   * 
   * @example
   * key-szz67b2f696f4wh9yeg5d
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the multi-attach feature for the new cloud disk. Valid values:
   * 
   * - Disabled: disables the feature.
   * - Enabled: enables the feature. Only ESSDs support this value.
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
   * The performance level settings of the cloud disk when you create an ESSD. Valid values:
   * 
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * > If DiskCategory is set to cloud_essd, the PerformanceLevel parameter is required.
   * 
   * For more information about how to select the performance level of an ESSD, see [ESSD standard SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read and write IOPS for a single ESSD AutoPL. Valid values:
   * - If the capacity is less than or equal to 3 GiB, provisioned performance is not supported.
   * - If the capacity is greater than or equal to 4 GiB, the valid values are 0 to the minimum of (1,000 IOPS/GiB × Capacity - Baseline IOPS) and 50,000.
   * 
   * Baseline performance = the maximum of the minimum of (1,800 + 50 × Capacity) and 50,000, and 3,000.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPLs](https://www.alibabacloud.com/help/en/ecs/user-guide/essd-autopl-disks).
   * 
   * @example
   * 10
   */
  provisionedIops?: number;
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
   * The ID of the resource group to which the cloud disk belongs.
   * 
   * @example
   * rg-bp199lyny9b3****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The capacity of the new cloud disk. Unit: GiB. You must specify a value for this parameter. Valid values:
   * 
   * - cloud_essd: The valid values vary based on the performance level.
   *   - PL0: 1 to 65,536.
   *   - PL1: 20 to 65,536.
   *   - PL2: 461 to 65,536.
   *   - PL3: 1,261 to 65,536.
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
   * The ID of the source cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1d6tsvznfghy7y****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The list of tag information for the cloud disk.
   */
  tag?: CloneDisksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      burstingEnabled: 'BurstingEnabled',
      clientToken: 'ClientToken',
      diskCategory: 'DiskCategory',
      diskName: 'DiskName',
      dryRun: 'DryRun',
      encrypted: 'Encrypted',
      kmsKeyId: 'KmsKeyId',
      multiAttach: 'MultiAttach',
      ownerId: 'OwnerId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
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
      diskCategory: 'string',
      diskName: 'string',
      dryRun: 'string',
      encrypted: 'boolean',
      kmsKeyId: 'string',
      multiAttach: 'string',
      ownerId: 'number',
      performanceLevel: 'string',
      provisionedIops: 'number',
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

