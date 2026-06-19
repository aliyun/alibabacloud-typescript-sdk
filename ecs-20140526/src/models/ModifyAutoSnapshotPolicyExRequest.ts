// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfigurationArn extends $dara.Model {
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * 1000000000
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  roleType?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
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
   * This parameter is not publicly available.
   */
  arn?: ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfigurationArn[];
  /**
   * @remarks
   * Specifies whether to enable encryption for cross-region snapshot replication. Valid values:
   * 
   * - true: enabled. 
   * - false: disabled. 
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The key ID of the KMS key used for encrypted cross-region snapshot replication.
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

export class ModifyAutoSnapshotPolicyExRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of cross-region snapshot replicas. Unit: days. Valid values:
   * 
   * - -1: permanently retained.
   * - 1 to 65535: the specified number of days for which snapshot replicas are retained.
   * 
   * Default value: -1.
   * 
   * @example
   * 30
   */
  copiedSnapshotsRetentionDays?: number;
  /**
   * @remarks
   * The encryption parameter for cross-region snapshot replication.
   */
  copyEncryptionConfiguration?: ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfiguration;
  /**
   * @remarks
   * Specifies whether to allow automatic cross-region replication.
   * 
   * - true: allowed.
   * - false: not allowed.
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
   * The destination region for cross-region snapshot replication. You can set one destination region.
   * 
   * @example
   * ["cn-hangzhou"]
   */
  targetCopyRegions?: string;
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
   * The days of the week on which automatic snapshots are created. Unit: days. The cycle is weekly. Valid values: 1 to 7. For example, 1 indicates Monday.
   * 
   * To create multiple automatic snapshots within a week, specify multiple days:
   * 
   * - You can specify up to 7 days.
   * - Specify multiple days in a JSON array in the format of `"1", "2", … "7"`. Separate the days with commas (,).
   * 
   * @example
   * ["1", "7"]
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The retention period of automatic snapshots. Unit: days. Valid values:
   * 
   * - -1: permanently retained.
   * - 1 to 65536: the specified number of days for which snapshots are retained.
   * 
   * Default value: -1.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The points in time at which automatic snapshots are created. The time is displayed in UTC+8. Unit: hours. Valid values: 0 to 23, which correspond to the 24 points in time from 00:00 to 23:00. For example, 1 indicates 01:00.
   * 
   * To create multiple automatic snapshots within a day, specify multiple points in time:
   * 
   * - You can specify up to 24 points in time.
   * - Specify multiple points in time in a JSON array in the format of `"0", "1", … "23"`. Separate the points in time with commas (,).
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

