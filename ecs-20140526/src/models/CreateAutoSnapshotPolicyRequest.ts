// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoSnapshotPolicyRequestCopyEncryptionConfigurationArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 1000000000
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
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

export class CreateAutoSnapshotPolicyRequestCopyEncryptionConfiguration extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available.
   */
  arn?: CreateAutoSnapshotPolicyRequestCopyEncryptionConfigurationArn[];
  /**
   * @remarks
   * Specifies whether to enable encryption for cross-region snapshot backup. Valid values:
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
   * The key ID of the KMS key used for cross-region encrypted snapshot backup.
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
      arn: { 'type': 'array', 'itemType': CreateAutoSnapshotPolicyRequestCopyEncryptionConfigurationArn },
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

export class CreateAutoSnapshotPolicyRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the automatic snapshot policy. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. The tag key cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the automatic snapshot policy. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with acs:. The tag value cannot contain http:// or https://.
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

export class CreateAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of cross-region snapshot copies. Unit: days. Valid values:
   * 
   * - -1: Snapshot copies are permanently retained.
   * - 1 to 65535: Snapshot copies are retained for the specified number of days.
   * 
   * Default value: -1.
   * 
   * @example
   * 30
   */
  copiedSnapshotsRetentionDays?: number;
  /**
   * @remarks
   * The backup encryption parameter object for snapshot geo-redundancy.
   */
  copyEncryptionConfiguration?: CreateAutoSnapshotPolicyRequestCopyEncryptionConfiguration;
  /**
   * @remarks
   * Specifies whether to enable automatic cross-region replication.
   * 
   * - true: enabled.
   * - false: disabled.
   * 
   * @example
   * false
   */
  enableCrossRegionCopy?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2kkmhmhs****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  storageLocationArn?: string;
  /**
   * @remarks
   * The tags of the automatic snapshot policy.
   */
  tag?: CreateAutoSnapshotPolicyRequestTag[];
  /**
   * @remarks
   * The destination region to which snapshots are copied across regions. You can specify one destination region.
   * 
   * @example
   * ["cn-hangzhou"]
   */
  targetCopyRegions?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * Default value: null.
   * 
   * @example
   * TestName
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * The region to which the automatic snapshot policy belongs. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The days of the week on which automatic snapshots are created. Unit: days. The cycle is weekly. Valid values: 1 to 7. For example, 1 indicates Monday. Format description:
   * 
   * - The parameter value must be a JSON array. For example, ["1"\\] indicates that automatic snapshots are created every Monday.
   * - To create multiple automatic snapshots within a week, specify multiple days separated by commas (,). You can specify a maximum of 7 days. For example, ["1","3","5"\\] indicates that automatic snapshots are created every Monday, Wednesday, and Friday.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1","2"]
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The retention period of automatic snapshots. Unit: days. Valid values:
   * 
   * - -1: Automatic snapshots are permanently retained.
   * - 1 to 65535: Automatic snapshots are retained for the specified number of days.
   * 
   * Default value: -1.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The points in time at which automatic snapshots are created. The time is displayed in UTC+8. Unit: hours. Valid values: 0 to 23, which represent the 24 points in time from 00:00 to 23:00. For example, 1 indicates 01:00. Format description:
   * 
   * - The parameter value must be a JSON array. For example, ["1"\\] indicates that automatic snapshots are created at 01:00.
   * - To create multiple automatic snapshots within a day, specify multiple points in time separated by commas (,). You can specify a maximum of 24 points in time. For example, ["1","3","5"\\] indicates that automatic snapshots are created at 01:00, 03:00, and 05:00.
   * 
   * > If a disk contains a large amount of data and the time required to create a single automatic snapshot exceeds the interval between two consecutive points in time, the next point in time is automatically skipped. For example, you set 09:00, 10:00, 11:00, and 12:00 as the points in time for automatic snapshot creation. The snapshot creation starts at 09:00 and is completed at 10:20, which takes 80 minutes. The system skips the 10:00 point in time and creates the next automatic snapshot at 11:00.
   * 
   * This parameter is required.
   * 
   * @example
   * ["0", "1", … "23"]
   */
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      copiedSnapshotsRetentionDays: 'CopiedSnapshotsRetentionDays',
      copyEncryptionConfiguration: 'CopyEncryptionConfiguration',
      enableCrossRegionCopy: 'EnableCrossRegionCopy',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageLocationArn: 'StorageLocationArn',
      tag: 'Tag',
      targetCopyRegions: 'TargetCopyRegions',
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
      copyEncryptionConfiguration: CreateAutoSnapshotPolicyRequestCopyEncryptionConfiguration,
      enableCrossRegionCopy: 'boolean',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageLocationArn: 'string',
      tag: { 'type': 'array', 'itemType': CreateAutoSnapshotPolicyRequestTag },
      targetCopyRegions: 'string',
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

