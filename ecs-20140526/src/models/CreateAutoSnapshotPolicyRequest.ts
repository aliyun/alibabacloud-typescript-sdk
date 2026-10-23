// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoSnapshotPolicyRequestCopyEncryptionConfigurationArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * 1000000000
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * hide
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not available.
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
   * > This parameter is not available.
   */
  arn?: CreateAutoSnapshotPolicyRequestCopyEncryptionConfigurationArn[];
  /**
   * @remarks
   * Specifies whether to enable encryption for cross-region snapshot backups. Valid values:
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
   * The KMS key ID used for snapshot geo-redundancy backup encryption.
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
   * The tag key of the automatic snapshot policy. Valid values of N: 1 to 20. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length, and cannot start with aliyun or acs: or contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the automatic snapshot policy. Valid values of N: 1 to 20. If you specify this parameter, it can be an empty string. The tag value can be up to 128 characters in length, and cannot start with acs: or contain http:// or https://.
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

export class CreateAutoSnapshotPolicyRequestTargetTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Valid values of N: 1 to 5.
   * 
   * If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length, and cannot start with aliyun or acs: or contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Valid values of N: 1 to 5.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain http:// or https://.
   * 
   * > If you leave this parameter empty or specify an empty string, it indicates any value.
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
   * The association type between the automatic snapshot policy and the target resources. Valid values:
   * - AssociatedWithDisk: Associated with cloud disks.
   * - AssociatedWithInstanceTag: Associated with instance tags.
   * 
   * Default value: AssociatedWithDisk.
   * 
   * @example
   * AssociatedWithDisk
   */
  associationType?: string;
  /**
   * @remarks
   * The retention period of cross-region replicated snapshots. Unit: days. Valid values:
   * 
   * - -1: The snapshots are retained permanently.
   * - 1 to 65535: The snapshots are retained for the specified number of days.
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
   * Specifies whether to allow automatic cross-region replication. Valid values:
   * 
   * - true: Allowed.
   * - false: Not allowed.
   * 
   * @example
   * false
   */
  enableCrossRegionCopy?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2kkmhmhs****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  storageLocationArn?: string;
  /**
   * @remarks
   * The list of tags for the automatic snapshot policy.
   */
  tag?: CreateAutoSnapshotPolicyRequestTag[];
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
   * The list of target resource tags. The automatic snapshot policy matches target resources based on tags. This parameter is required when AssociationType is set to AssociatedWithInstanceTag.
   */
  targetTags?: CreateAutoSnapshotPolicyRequestTargetTags[];
  /**
   * @remarks
   * The name of the automatic snapshot policy. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
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
   * The days of the week when automatic snapshots are created. Valid values: 1 to 7, which represent Monday to Sunday. For example, 1 indicates Monday. Format description:
   * 
   * - The parameter must be a JSON array. For example, ["1"] indicates that automatic snapshots are created every Monday.
   * - If you want to create automatic snapshots multiple times a week, you can specify multiple days separated by commas (,). You can specify up to 7 days. For example, ["1","3","5"] indicates that automatic snapshots are created every Monday, Wednesday, and Friday.
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
   * - -1: The snapshots are retained permanently.
   * - 1 to 65535: The snapshots are retained for the specified number of days.
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
   * The points in time when automatic snapshots are created. The time is in UTC+8 and measured in hours. Valid values: 0 to 23, which represent the 24 points in time from 00:00 to 23:00. For example, 1 indicates 01:00. Format description:
   * 
   * - The parameter must be a JSON array. For example, ["1"] indicates that automatic snapshots are created at 01:00.
   * - If you want to create multiple automatic snapshots in a day, you can specify multiple points in time separated by commas (,). You can specify up to 24 points in time. For example, ["1","3","5"] indicates that automatic snapshots are created at 01:00, 03:00, and 05:00.
   * 
   * > If the cloud disk contains a large amount of data and the duration of creating a single automatic snapshot exceeds the interval between two points in time, the system skips the next point in time. For example, if you set the points in time to 09:00, 10:00, 11:00, and 12:00, and the snapshot creation starts at 09:00 and finishes at 10:20, taking 80 minutes, the system skips the 10:00 point in time and creates the next automatic snapshot at 11:00.
   * 
   * This parameter is required.
   * 
   * @example
   * ["0", "1", … "23"]
   */
  timePoints?: string;
  static names(): { [key: string]: string } {
    return {
      associationType: 'AssociationType',
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
      targetTags: 'TargetTags',
      autoSnapshotPolicyName: 'autoSnapshotPolicyName',
      regionId: 'regionId',
      repeatWeekdays: 'repeatWeekdays',
      retentionDays: 'retentionDays',
      timePoints: 'timePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationType: 'string',
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
      targetTags: { 'type': 'array', 'itemType': CreateAutoSnapshotPolicyRequestTargetTags },
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
    if(Array.isArray(this.targetTags)) {
      $dara.Model.validateArray(this.targetTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

