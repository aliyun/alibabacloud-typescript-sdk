// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyCopyEncryptionConfiguration } from "./DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyCopyEncryptionConfiguration";
import { DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTags } from "./DescribeAutoSnapshotPolicyExResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicyTags";


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

