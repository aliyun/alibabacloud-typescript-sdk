// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDisksRequestArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  assumeRoleFor?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
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
   * The tag key of the disk. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. The tag key cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the disk. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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
   * > This parameter is not publicly available.
   */
  arn?: CloneDisksRequestArn[];
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the new disk. Valid values:
   * - true: enables the performance burst feature.
   * - false: does not enable the performance burst feature.
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://www.alibabacloud.com/help/en/ecs/user-guide/essd-autopl-disks).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The category of the new disk. Valid values:
   * 
   * - cloud_essd: enterprise SSD.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_essd_entry: ESSD Entry disk.
   * - cloud_regional_disk_auto: regional ESSD.
   * 
   * > Disk category restrictions for disk cloning:
   * > - Non-regional disks can be cloned only to non-regional types.
   * > - Regional disks can be cloned only to regional types.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the disk. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). The name must start with a letter.
   * 
   * Default value: empty.
   * 
   * @example
   * MyDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * - true: sends a check request without querying the filing status. The check items include whether the AccessKey pair is valid, whether the Resource Access Management (RAM) user is granted the required authorization, and whether the required parameters are specified. If the check fails, the corresponding error message is returned. If the check succeeds, the DryRunOperation error code is returned.
   * - false (default): sends a Normal request. After the check succeeds, a 2XX HTTP status code is returned and the filing status is directly queried.
   * 
   * @example
   * true
   */
  dryRun?: string;
  /**
   * @remarks
   * Specifies whether the new disk is encrypted. Valid values:
   * - true: The new disk is encrypted.
   * - false: The new disk is not encrypted.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The key ID of the KMS key used by the new disk.
   * 
   * @example
   * key-szz67b2f696f4wh9yeg5d
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the multi-attach attribute for the new disk. Valid values:
   * 
   * - Disabled: disables the multi-attach attribute.
   * - Enabled: enables the multi-attach attribute. Currently, only enterprise SSDs support Settings to `Enabled`.
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
   * The performance level of the standard SSD. Settings for this parameter depend on the disk category. Valid values:
   * 
   * - PL0: a single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1: a single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: a single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: a single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * > If DiskCategory is set to cloud_essd, PerformanceLevel is required.
   * 
   * For more information about how to select an ESSD performance level, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values:
   * - Capacity (GiB) <= 3: provisioned performance is not supported.
   * - Capacity (GiB) >= 4: [0, min{(1,000 IOPS/GiB × Capacity - Baseline IOPS), 50,000}]
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
   * The region ID. You can call [DescribeRegions](https://www.alibabacloud.com/help/en/ecs/api-regions-describeregions) to query the most recent region list.
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
   * The capacity of the new disk. Unit: GiB. You must specify a value for this parameter. Valid values:
   * 
   * - cloud_essd: The valid values depend on the performance level.
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
   * The list of tags for the disk.
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

