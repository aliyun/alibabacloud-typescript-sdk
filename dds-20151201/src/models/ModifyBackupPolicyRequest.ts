// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The high-frequency backup frequency. Valid values:
   * 
   * - **-1**: Disables high-frequency backups.
   * - **30**: Every 30 minutes.
   * - **60**: Every 1 hour.
   * - **120**: Every 2 hours.
   * - **180**: Every 3 hours.
   * - **240**: Every 4 hours.
   * - **360**: Every 6 hours.
   * - **480**: Every 8 hours.
   * - **720**: Every 12 hours.
   * 
   * > - If **SnapshotBackupType** is set to **Standard**, this parameter must be set to **-1**.
   * > - If **SnapshotBackupType** is set to **Flash** and this parameter is set to a value greater than 0, high-frequency backups take effect.
   * 
   * @example
   * -1
   */
  backupInterval?: string;
  /**
   * @remarks
   * The number of days for which full backups are retained.
   * 
   * > - For users who created instances before September 10, 2021, the default retention period is 7 days.
   * > - For new users who created instances on or after September 10, 2021, the default retention period is 30 days.
   * 
   * @example
   * 30
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The backup data retention policy. Valid values:
   * 
   * - 0: Deletes all backup sets of the instance immediately when the instance is released.
   * 
   * - 1: An automatic backup is performed when the instance is released, and the backup set is retained for long-term retention (LTR).
   * - 2: An automatic backup is performed when the instance is released, and all backup sets of the cluster are retained for long-term retention (LTR).
   * 
   * For more information, see [Long-term retention backups](https://help.aliyun.com/document_detail/2779111.html).
   * 
   * @example
   * 2
   */
  backupRetentionPolicyOnClusterDeletion?: number;
  /**
   * @remarks
   * The days of the week when cross-region backup is performed. Valid values:
   * 
   * 1. Monday: Monday.
   * 2. Tuesday: Tuesday.
   * 3. Wednesday: Wednesday.
   * 4. Thursday: Thursday.
   * 5. Friday: Friday.
   * 6. Saturday: Saturday.
   * 7. Sunday: Sunday.
   * 
   * > This parameter is required for cross-region backup.
   * > - If you specify multiple values, separate them with commas (,).
   * > - When the backup settings are set to standard backup, the value must be a subset of the PreferredBackupPeriod backup epoch.
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  crossBackupPeriod?: string;
  /**
   * @remarks
   * The operation policy for cross-region backup. Valid values:
   * 
   * - update: Modifies the cross-region backup policy.
   * - delete: Deletes the cross-region backup policy.
   * 
   * > This parameter is required for cross-region backup.
   * 
   * @example
   * update
   */
  crossBackupType?: string;
  /**
   * @remarks
   * The retention type for cross-region log backup. Valid values:
   * 
   * - delay: Retains backups for a specified period.
   * - never: Never expires.
   * 
   * > This parameter is required for cross-region backup.
   * 
   * @example
   * delay
   */
  crossLogRetentionType?: string;
  /**
   * @remarks
   * The retention period for cross-region log backup. Valid values: 3 to 1825 days. The value must be less than or equal to the value of CrossRetentionValue.
   * 
   * 
   * > This parameter is required for cross-region backup.
   * 
   * @example
   * 3
   */
  crossLogRetentionValue?: number;
  /**
   * @remarks
   * The retention type for cross-region backup. Valid values:
   * 
   * - delay: Retains backups for a specified period.
   * 
   * - never: Never expires.
   * 
   * > This parameter is required for cross-region backup.
   * 
   * @example
   * delay
   */
  crossRetentionType?: string;
  /**
   * @remarks
   * The retention period for cross-region backup. Valid values: 3 to 1825 days.
   * 
   * > 
   * > - This parameter is required for cross-region backup.
   * > - This parameter is required and must be specified when CrossRetentionType is set to delay.
   * 
   * @example
   * 7
   */
  crossRetentionValue?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp16cb162771****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region where backups are stored.
   * 
   * 
   * > This parameter is required for cross-region backup.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * Specifies whether to enable log backup. Valid values:
   * - **0**: Disables log backup. This is the default value.
   * 
   * - **1**: Enables log backup.
   * >Notice: Sharded cluster instances do not support disabling log backup.</notice>
   * 
   * @example
   * 0
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * Specifies whether to enable cross-region log backup.
   * 
   * > This parameter is required for cross-region backup.
   * > - 1: Enables cross-region log backup. This value is required for sharded cluster instances. For replica set instances, this value is required if you want to support cross-region point-in-time recovery.
   * > - 0: Disables cross-region log backup.
   * 
   * @example
   * 1
   */
  enableCrossLogBackup?: number;
  /**
   * @remarks
   * The number of days for which high-frequency backups are retained. Before you use this parameter, make sure that the BackupInterval parameter is specified. Default value: 1.
   * 
   * @example
   * 1
   */
  highFrequencyBackupRetention?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * - replicate 
   * - sharding
   * 
   * > - This parameter is required when the backup recovery type is set to rebuilding a deleted instance.
   * > - This parameter is required when the backup recovery type is set to cloning an instance from cross-region backup.
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of days for which log backups are retained. Default value: 7.
   * 
   * Valid values: 7 to 730.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * - **Monday**: Monday.
   * - **Tuesday**: Tuesday.
   * - **Wednesday**: Wednesday.
   * - **Thursday**: Thursday.
   * - **Friday**: Friday.
   * - **Saturday**: Saturday.
   * - **Sunday**: Sunday.
   * 
   * >Notice: To ensure data security, back up your MongoDB data at least twice a week.</notice>
   * 
   * > If you specify multiple values, separate them with commas (,).
   * 
   * @example
   * Monday,Wednesday,Friday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time period during which backups are performed. The format is <i>HH:mm</i>Z-<i>HH:mm</i>Z (UTC).
   * > The time period is limited to 1 hour.
   * 
   * @example
   * 03:00Z-04:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * Specifies whether to enable hourly sparse backup. Valid values:
   * 
   * - true: If the backup frequency is set to minutes, all snapshots taken within 1 hour from the current time are retained. For snapshots taken more than 1 hour but within 24 hours from the current time, only the first snapshot taken after the hour is retained.
   * 
   * - false: All snapshots taken within the high-frequency backup retention period are retained.
   * 
   * @example
   * true
   */
  preserveOneEachHour?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The snapshot backup type. Valid values:
   * 
   * - **Flash**: Backup within seconds.
   * - **Standard**: Standard backup. This is the default value.
   * 
   * @example
   * Standard
   */
  snapshotBackupType?: string;
  /**
   * @remarks
   * The region where the instance is deployed.
   * 
   * > 
   * > - This parameter is required to recover deleted instances.
   * > - This parameter is required for cross-region backup.
   * 
   * @example
   * cn-beijing
   */
  srcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupInterval: 'BackupInterval',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      crossBackupPeriod: 'CrossBackupPeriod',
      crossBackupType: 'CrossBackupType',
      crossLogRetentionType: 'CrossLogRetentionType',
      crossLogRetentionValue: 'CrossLogRetentionValue',
      crossRetentionType: 'CrossRetentionType',
      crossRetentionValue: 'CrossRetentionValue',
      DBInstanceId: 'DBInstanceId',
      destRegion: 'DestRegion',
      enableBackupLog: 'EnableBackupLog',
      enableCrossLogBackup: 'EnableCrossLogBackup',
      highFrequencyBackupRetention: 'HighFrequencyBackupRetention',
      instanceType: 'InstanceType',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      preserveOneEachHour: 'PreserveOneEachHour',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotBackupType: 'SnapshotBackupType',
      srcRegion: 'SrcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupInterval: 'string',
      backupRetentionPeriod: 'number',
      backupRetentionPolicyOnClusterDeletion: 'number',
      crossBackupPeriod: 'string',
      crossBackupType: 'string',
      crossLogRetentionType: 'string',
      crossLogRetentionValue: 'number',
      crossRetentionType: 'string',
      crossRetentionValue: 'number',
      DBInstanceId: 'string',
      destRegion: 'string',
      enableBackupLog: 'number',
      enableCrossLogBackup: 'number',
      highFrequencyBackupRetention: 'number',
      instanceType: 'string',
      logBackupRetentionPeriod: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      preserveOneEachHour: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotBackupType: 'string',
      srcRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

