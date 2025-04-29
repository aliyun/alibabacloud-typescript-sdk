// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfiguration } from "./ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfiguration";


export class ModifyAutoSnapshotPolicyExRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of the snapshot copy in the destination region. Unit: days. Valid values:
   * 
   * - -1: The snapshot copy is retained until it is deleted.
   * - 1 to 65535: The snapshot copy is retained for a specified number of days.
   * 
   * Default value: -1.
   * 
   * @example
   * 30
   */
  copiedSnapshotsRetentionDays?: number;
  /**
   * @remarks
   * The encryption configurations for cross-region snapshot replication.
   */
  copyEncryptionConfiguration?: ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfiguration;
  /**
   * @remarks
   * Specifies whether to enable cross-region replication for the automatic snapshot.
   * 
   * *   true: enables cross-region replication for the automatic snapshot.
   * *   false: disables cross-region replication for the automatic snapshot.
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
   * The destination region to which to copy the snapshot. You can specify only a single destination region.
   * 
   * @example
   * ["cn-hangzhou"]
   */
  targetCopyRegions?: string;
  /**
   * @remarks
   * The ID of the automatic snapshot policy. You can call the [DescribeAutoSnapshotPolicyEx](https://help.aliyun.com/document_detail/25530.html) operation to query available automatic snapshot policies.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-bp12m37ccmxvbmi5****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy. If this parameter is not specified, the original name of the automatic snapshot policy is retained.
   * 
   * @example
   * SPTestName
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * The region ID of the automatic snapshot policy. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The days of the week on which to create automatic snapshots. Valid values are 1 to 7, which correspond to the days of the week. For example, a value of 1 indicates Monday.
   * 
   * To schedule multiple automatic snapshots to be created in a week, you can specify multiple days.
   * 
   * *   You can specify up to seven days over a one-week period.
   * *   You must set this parameter to a JSON array such as `["1", "2" ... "7"]`. Separate the values in the array with commas (,).
   * 
   * @example
   * ["1", "7"]
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The retention period of the automatic snapshot. Unit: days. Valid values:
   * 
   * *   \\-1: The automatic snapshot is permanently retained.
   * *   1 to 65536: The auto snapshot is retained for the specified number of days.
   * 
   * Default value: -1.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The points in time of the day at which to create automatic snapshots. The time must be in UTC+8. Unit: hours. Valid values are 0 to 23, which correspond to the 24 points in time on the hour from 00:00:00 to 23:00:00. For example, a value of 1 indicates 01:00:00.
   * 
   * To schedule multiple automatic snapshots to be created in a day, you can specify multiple hours.
   * 
   * *   You can specify up to 24 points in time.
   * *   You must set this parameter to a JSON array such as `["0", "1", ... "23"]`. Separate the points in time with commas (,).
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

