// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAutoSnapshotPolicyRequestCopyEncryptionConfiguration } from "./CreateAutoSnapshotPolicyRequestCopyEncryptionConfiguration";
import { CreateAutoSnapshotPolicyRequestTag } from "./CreateAutoSnapshotPolicyRequestTag";


export class CreateAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of the snapshot copy in the destination region. Unit: days. Valid values:
   * 
   * *   \\-1: The snapshot copy is retained until it is deleted.
   * *   1 to 65535: The snapshot copy is retained for the specified number of days. After the retention period of the snapshot copy expires, the snapshot copy is automatically deleted.
   * 
   * Default value: -1.
   * 
   * @example
   * 30
   */
  copiedSnapshotsRetentionDays?: number;
  /**
   * @remarks
   * The encryption parameters for cross-region snapshot replication.
   */
  copyEncryptionConfiguration?: CreateAutoSnapshotPolicyRequestCopyEncryptionConfiguration;
  /**
   * @remarks
   * Specifies whether to enable cross-region replication for snapshots.
   * 
   * *   true
   * *   false
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
   * The tags to add to the automatic snapshot policy.
   */
  tag?: CreateAutoSnapshotPolicyRequestTag[];
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
   * The name of the automatic snapshot policy. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * TestName
   */
  autoSnapshotPolicyName?: string;
  /**
   * @remarks
   * The ID of the region in which to create the automatic snapshot policy. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The days of the week on which to create automatic snapshots. Valid values: 1 to 7, which correspond to Monday to Sunday. 1 indicates Monday. Format description:
   * 
   * *   Set this parameter to a JSON-formatted array. For example, a value of ["1"] specifies automatic snapshots to be created every Monday.
   * *   To schedule multiple automatic snapshots to be created in a week, you can specify multiple values. Separate the values with commas (,). You can specify a maximum of seven days. For example, a value of ["1","3","5"] specifies automatic snapshots to be created every Monday, Wednesday, and Friday.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1","2"]
   */
  repeatWeekdays?: string;
  /**
   * @remarks
   * The retention period of the automatic snapshot. Unit: days. Valid values:
   * 
   * *   \\-1: The automatic snapshot is retained until it is deleted.
   * *   1 to 65535: The automatic snapshot is retained for the specified number of days. After the retention period of the automatic snapshot expires, the automatic snapshot is automatically deleted.
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
   * The points in time of the day at which to create automatic snapshots. The time must be in UTC+8. Unit: hours. Valid values: 0 to 23, which correspond to the 24 on-the-hour points in time from 00:00:00 to 23:00:00. For example, 1 indicates 01:00:00. Format description:
   * 
   * *   Set this parameter to a JSON-formatted array. For example, a value of ["1"] specifies automatic snapshots to be created at 01:00:00.
   * *   To schedule multiple automatic snapshots to be created in a day, you can specify multiple values. Separate the values with commas (,). You can specify up to 24 points in time. For example, a value of ["1","3","5"] specifies automatic snapshots to be created at 01:00:00, 03:00:00, and 05:00:00.
   * 
   * >  If an automatic snapshot is being created when the time scheduled for creating another automatic snapshot is due, the new snapshot task is skipped. This may occur when a disk contains a large volume of data. For example, you scheduled snapshots to be automatically created at 09:00, 10:00, 11:00, and 12:00. The system starts to create a snapshot for the disk at 09:00:00. The process takes 80 minutes to complete because the disk contains a large volume of data and ends at 10:20:00. The system skips the automatic snapshot task scheduled for 10:00:00 and creates the next automatic snapshot for the disk at 11:00:00.
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

