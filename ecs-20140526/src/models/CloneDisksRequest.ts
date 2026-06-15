// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDisksRequestArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * null
   */
  assumeRoleFor?: string;
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * null
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not yet available.
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
   * The key of tag N to add to the new disk. Valid values of N: 1 to 20. The tag key must be 1 to 128 characters in length and cannot start with `aliyun` or `acs:` or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the new disk. Valid values of N: 1 to 20. The tag value can be an empty string or up to 128 characters in length, and it cannot contain `http://` or `https://`.
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
   * > This parameter is not yet available.
   */
  arn?: CloneDisksRequestArn[];
  /**
   * @remarks
   * Specifies whether to enable performance bursting for the new disk. Valid values:
   * 
   * - `true`: Enables performance bursting.
   * 
   * - `false`: Disables performance bursting.
   * 
   * > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/zh/ecs/user-guide/essd-autopl-disks).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * A client-generated token that, when provided, ensures the idempotence of the request. The token must be unique for each request. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The type of the new disk. Valid values:
   * 
   * - `cloud_essd`: ESSD cloud disk.
   * 
   * - `cloud_auto`: ESSD AutoPL cloud disk.
   * 
   * - `cloud_essd_entry`: ESSD Entry cloud disk.
   * 
   * - `cloud_regional_disk_auto`: regional disk.
   * 
   * > Disk type limits for cloning
   * >
   * > - A non-regional disk can be cloned only as a non-regional disk.
   * >
   * > - A regional disk can be cloned only as a regional disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the new disk. The name must be 2 to 128 characters in length. It must start with a letter and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * Default value: none.
   * 
   * @example
   * MyDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - `true`: Performs a dry run to check the request without cloning the disk. The system checks whether your AccessKey is valid, whether the RAM user is authorized, and whether the required parameters are specified. If the request fails the check, the system returns the corresponding error message. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * - `false` (default): Sends a normal request. If the request passes the check, the system returns a 2xx HTTP status code and clones the disk.
   * 
   * @example
   * true
   */
  dryRun?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the new disk. Valid values:
   * 
   * - `true`: The disk is encrypted.
   * 
   * - `false`: The disk is not encrypted.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the KMS key to use for the new disk.
   * 
   * @example
   * key-szz67b2f696f4wh9yeg5d
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the multi-attach feature for the new disk. Valid values:
   * 
   * - `Disabled`: Disables the multi-attach feature.
   * 
   * - `Enabled`: Enables the multi-attach feature. You can set this parameter to `Enabled` only for ESSD cloud disks.
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
   * The performance level of the new ESSD cloud disk. Valid values:
   * 
   * - `PL0`: A single disk can deliver up to 10,000 random read/write IOPS.
   * 
   * - `PL1`: A single disk can deliver up to 50,000 random read/write IOPS.
   * 
   * - `PL2`: A single disk can deliver up to 100,000 random read/write IOPS.
   * 
   * - `PL3`: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * > This parameter is required when `DiskCategory` is set to `cloud_essd`.
   * 
   * For more information about how to select an ESSD performance level, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL cloud disk. Valid values:
   * 
   * - You cannot set this parameter for disks that are 3 GiB or smaller in size.
   * 
   * - For disks that are 4 GiB or larger in size, the value must be in the range of `[0, min(1000 * Size - baseline performance, 50000)]`.
   * 
   * baseline performance = `max(min(1800 + 50 * Size, 50000), 3000)`.
   * 
   * > This parameter is valid only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/zh/ecs/user-guide/essd-autopl-disks).
   * 
   * @example
   * 10
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/zh/ecs/api-regions-describeregions) operation to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group for the new disk.
   * 
   * @example
   * rg-bp199lyny9b3****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The size of the new disk, in GiB. The value must be greater than or equal to the size of the source disk. The value range varies based on the `DiskCategory` value:
   * 
   * - `cloud_essd`: The value range depends on the `PerformanceLevel` value.
   * 
   *   - `PL0`: 1 to 65,536
   * 
   *   - `PL1`: 20 to 65,536
   * 
   *   - `PL2`: 461 to 65,536
   * 
   *   - `PL3`: 1,261 to 65,536
   * 
   * - `cloud_auto`: 1 to 65,536
   * 
   * - `cloud_essd_entry`: 10 to 32,768
   * 
   * - `cloud_regional_disk_auto`: 10 to 65,536
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
   * The tags to add to the new disk.
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

