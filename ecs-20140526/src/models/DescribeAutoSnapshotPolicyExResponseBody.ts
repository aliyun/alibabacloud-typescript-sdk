// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyCopyEncryptionConfiguration extends $dara.Model {
  /**
   * @remarks
   * Whether to enable encryption for cross-region snapshot replication. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used to encrypt snapshots in cross-region snapshot replication.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encrypted: 'boolean',
      KMSKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the automatic snapshot policy.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the automatic snapshot policy.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTags extends $dara.Model {
  tag?: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-bp67acfmxazb4ph****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy.
   * 
   * @example
   * testAutoSnapshotPolicyName
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 0
   */
  copiedSnapshotsRetentionDays?: number;
  /**
   * @remarks
   * Encryption configurations for cross-region snapshot replication.
   */
  copyEncryptionConfiguration?: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyCopyEncryptionConfiguration;
  /**
   * @remarks
   * The time when the automatic snapshot policy was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-12-10T16:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The number of disks to which the automatic snapshot policy is applied.
   * 
   * @example
   * 1
   */
  diskNums?: number;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
  enableCrossRegionCopy?: boolean;
  /**
   * @remarks
   * The region ID of the automatic snapshot policy.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The days of the week on which to create automatic snapshots. Valid values: 1 to 7, which correspond to the days of the week. For example, 1 indicates Monday. One or more days can be specified.
   * 
   * @example
   * ["6"]
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2kkmhmhs****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The retention period of the automatic snapshots. Unit: days. Valid values:
   * 
   * *   \\-1: Automatic snapshots are retained until they are deleted.
   * *   1 to 65536: Auto snapshots are retained for the specified number of days. After the retention period of auto snapshots expires, the auto snapshots are automatically deleted.
   * 
   * @example
   * 7
   */
  retentionDays?: number;
  /**
   * @remarks
   * The status of the automatic snapshot policy. Valid values:
   * 
   * *   Normal: The automatic snapshot policy is normal.
   * *   Expire: The automatic snapshot policy cannot be used because your account has overdue payments.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The tags of the automatic snapshot policy.
   */
  tags?: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTags;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * test
   */
  targetCopyRegions?: string;
  /**
   * @remarks
   * The points in time of the day at which to create automatic snapshots.
   * 
   * The time is displayed in UTC+8. Unit: hours. Valid values: 0 to 23, which correspond to the 24 points in time on the hour from 00:00:00 to 23:00:00. For example, 1 indicates 01:00:00. Multiple points in time can be specified.
   * 
   * The parameter value is a JSON array that contains up to 24 points in time separated by commas (,). Example: `["0", "1", ... "23"]`.
   * 
   * @example
   * ["1"]
   */
  timePoints?: string;
  /**
   * @remarks
   * The type of the automatic snapshot policy. Valid values:
   * 
   * *   Custom: user-defined snapshot policy.
   * *   System: system-defined snapshot policy.
   * 
   * @example
   * Custom
   */
  type?: string;
  /**
   * @remarks
   * The number of extended volumes to which the automatic snapshot policy is applied.
   * 
   * @example
   * 2
   */
  volumeNums?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      autoSnapshotPolicyName: 'AutoSnapshotPolicyName',
      copiedSnapshotsRetentionDays: 'CopiedSnapshotsRetentionDays',
      copyEncryptionConfiguration: 'CopyEncryptionConfiguration',
      creationTime: 'CreationTime',
      diskNums: 'DiskNums',
      enableCrossRegionCopy: 'EnableCrossRegionCopy',
      regionId: 'RegionId',
      repeatWeekdays: 'RepeatWeekdays',
      resourceGroupId: 'ResourceGroupId',
      retentionDays: 'RetentionDays',
      status: 'Status',
      tags: 'Tags',
      targetCopyRegions: 'TargetCopyRegions',
      timePoints: 'TimePoints',
      type: 'Type',
      volumeNums: 'VolumeNums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      autoSnapshotPolicyName: 'string',
      copiedSnapshotsRetentionDays: 'number',
      copyEncryptionConfiguration: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyCopyEncryptionConfiguration,
      creationTime: 'string',
      diskNums: 'number',
      enableCrossRegionCopy: 'boolean',
      regionId: 'string',
      repeatWeekdays: 'string',
      resourceGroupId: 'string',
      retentionDays: 'number',
      status: 'string',
      tags: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTags,
      targetCopyRegions: 'string',
      timePoints: 'string',
      type: 'string',
      volumeNums: 'number',
    };
  }

  validate() {
    if(this.copyEncryptionConfiguration && typeof (this.copyEncryptionConfiguration as any).validate === 'function') {
      (this.copyEncryptionConfiguration as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPolicies extends $dara.Model {
  autoSnapshotPolicy?: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy[];
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicy: 'AutoSnapshotPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicy: { 'type': 'array', 'itemType': DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.autoSnapshotPolicy)) {
      $dara.Model.validateArray(this.autoSnapshotPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoSnapshotPolicyExResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the automatic snapshot policies.
   */
  autoSnapshotPolicies?: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPolicies;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of automatic snapshot policies
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicies: 'AutoSnapshotPolicies',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicies: DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPolicies,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoSnapshotPolicies && typeof (this.autoSnapshotPolicies as any).validate === 'function') {
      (this.autoSnapshotPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

