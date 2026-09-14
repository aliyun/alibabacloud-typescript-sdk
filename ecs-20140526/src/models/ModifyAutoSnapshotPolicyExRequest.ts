// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfigurationArn extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available for use.
   * 
   * @example
   * 1000000000
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * This parameter is not available for use.
   * 
   * @example
   * hide
   */
  roleType?: string;
  /**
   * @remarks
   * This parameter is not available for use.
   * 
   * @example
   * hide
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
      assumeRoleFor: 'number',
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

export class ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available for use.
   */
  arn?: ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfigurationArn[];
  /**
   * @remarks
   * Specifies whether to enable encryption for cross-region snapshot replication. Valid values:
   * 
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
   * The key ID of the KMS key used for cross-region encrypted snapshot replication.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40826X
   */
  KMSKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: { 'type': 'array', 'itemType': ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfigurationArn },
      encrypted: 'boolean',
      KMSKeyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyExRequestTargetTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Valid values of N: 1 to 5.
   * 
   * The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with aliyun or acs:, or contain http:// or https://.
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Valid values of N: 1 to 5.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * > If you pass an empty value or an empty string, the tag value matches any value.
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

export class ModifyAutoSnapshotPolicyExRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of cross-region replicated snapshots. Unit: days. Valid values:
   * 
   * - -1: The snapshot is retained permanently.
   * - 1 to 65535: The snapshot is retained for the specified number of days.
   * 
   * Default value: -1.
   * 
   * @example
   * 30
   */
  copiedSnapshotsRetentionDays?: number;
  /**
   * @remarks
   * The encryption configuration for cross-region snapshot replication.
   */
  copyEncryptionConfiguration?: ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfiguration;
  /**
   * @remarks
   * Specifies whether to allow automatic cross-region snapshot replication. Valid values:
   * 
   * - true: Allowed.
   * - false: Not allowed.
   * 
   * @example
   * false
   */
  enableCrossRegionCopy?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The destination region for cross-region snapshot replication. You can specify only one destination region.
   * 
   * @example
   * ["cn-hangzhou"]
   */
  targetCopyRegions?: string;
  /**
   * @remarks
   * The list of target resource tags. The automatic snapshot policy matches target resources based on tags.
   */
  targetTags?: ModifyAutoSnapshotPolicyExRequestTargetTags[];
  /**
   * @remarks
   * The ID of the automatic snapshot policy. You can call [DescribeAutoSnapshotPolicyEx](https://help.aliyun.com/document_detail/25530.html) to query available automatic snapshot policies.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-bp12m37ccmxvbmi5****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy. If this parameter is left empty, the name is not modified.
   * 
   * @example
   * SPTestName
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * The region ID of the automatic snapshot policy. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The days of the week on which to create automatic snapshots. Valid values: 1 to 7, where 1 represents Monday.
   * 
   * To create multiple automatic snapshots within a week, specify multiple days:
   * 
   * - You can specify up to 7 days.
   * - Specify multiple days as a JSON array in the format of `"1", "2", … "7"`. Separate multiple days with commas (,).
   * 
   * @example
   * ["1", "7"]
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The retention period of automatic snapshots. Unit: days. Valid values:
   * 
   * - -1: The snapshot is retained permanently.
   * - 1 to 65536: The snapshot is retained for the specified number of days.
   * 
   * Default value: -1.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The time of day at which to create automatic snapshots. The time is in UTC+8 and in the format of hours. Valid values: 0 to 23, representing 24 points in time from 00:00 to 23:00. For example, 1 represents 01:00.
   * 
   * To create multiple automatic snapshots within a day, specify multiple time points:
   * 
   * - You can specify up to 24 time points.
   * - Specify multiple time points as a JSON array in the format of `"0", "1", … "23"`. Separate multiple time points with commas (,).
   * 
   * @example
   * ["0", "1"]
   */
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      copiedSnapshotsRetentionDays: 'CopiedSnapshotsRetentionDays',
      copyEncryptionConfiguration: 'CopyEncryptionConfiguration',
      enableCrossRegionCopy: 'EnableCrossRegionCopy',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetCopyRegions: 'TargetCopyRegions',
      targetTags: 'TargetTags',
      autoSnapshotPolicyId: 'autoSnapshotPolicyId',
      autoSnapshotPolicyName: 'autoSnapshotPolicyName',
      regionId: 'regionId',
      repeatWeekdays: 'repeatWeekdays',
      retentionDays: 'retentionDays',
      timePoints: 'timePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copiedSnapshotsRetentionDays: 'number',
      copyEncryptionConfiguration: ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfiguration,
      enableCrossRegionCopy: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetCopyRegions: 'string',
      targetTags: { 'type': 'array', 'itemType': ModifyAutoSnapshotPolicyExRequestTargetTags },
      autoSnapshotPolicyId: 'string',
      autoSnapshotPolicyName: 'string',
      regionId: 'string',
      repeatWeekdays: 'string',
      retentionDays: 'number',
      timePoints: 'string',
    };
  }

  validate() {
    if(this.copyEncryptionConfiguration && typeof (this.copyEncryptionConfiguration as any).validate === 'function') {
      (this.copyEncryptionConfiguration as any).validate();
    }
    if(Array.isArray(this.targetTags)) {
      $dara.Model.validateArray(this.targetTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

