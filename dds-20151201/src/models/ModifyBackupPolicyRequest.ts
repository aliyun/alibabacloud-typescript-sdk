// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The frequency of high-frequency backups. Valid values:
   * 
   * - **-1**: High-frequency backup is disabled.
   * 
   * - **30**: every 30 minutes.
   * 
   * - **60**: every 1 hour.
   * 
   * - **120**: every 2 hours.
   * 
   * - **180**: every 3 hours.
   * 
   * - **240**: every 4 hours.
   * 
   * - **360**: every 6 hours.
   * 
   * - **480**: every 8 hours.
   * 
   * - **720**: every 12 hours.
   * 
   * > * If you set **SnapshotBackupType** to **Standard**, the value of this parameter is -1.
   * >
   * > * High-frequency backup takes effect only if you set **SnapshotBackupType** to **Flash** and set this parameter to a value greater than 0.
   * 
   * @example
   * -1
   */
  backupInterval?: string;
  /**
   * @remarks
   * The number of days to retain full backups.
   * 
   * > - For instances that were created before September 10, 2021, the default retention period is 7 days.
   * >
   * > - For instances that are created after September 10, 2021, the default retention period is 30 days.
   * 
   * @example
   * 30
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The policy to retain backups when you release the instance.
   * 
   * - 0: All backup sets of the instance are deleted when the instance is released.
   * 
   * - 1: An automatic backup is performed when the instance is released, and this backup is retained for a long time.
   * 
   * - 2: An automatic backup is performed when the instance is released, and all backup sets of the instance are retained for a long time.
   * 
   * For more information, see [Long-term backup retention](https://help.aliyun.com/document_detail/2779111.html).
   * 
   * @example
   * 2
   */
  backupRetentionPolicyOnClusterDeletion?: number;
  /**
   * @remarks
   * The days of the week to perform geo-redundant backups. Valid values:
   * 
   * 1. Monday
   * 
   * 2. Tuesday
   * 
   * 3. Wednesday
   * 
   * 4. Thursday
   * 
   * 5. Friday
   * 
   * 6. Saturday
   * 
   * 7. Sunday
   * 
   * > This parameter is required if you enable geo-redundancy.
   * >
   * > - To specify multiple days, separate them with commas (,).
   * >
   * > - If you set the backup method to conventional backup, the days of the week specified by this parameter must be a subset of the days of the week specified by PreferredBackupPeriod.
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  crossBackupPeriod?: string;
  /**
   * @remarks
   * The policy for geo-redundant backups. Valid values:
   * 
   * - update: Modify the geo-redundancy policy.
   * 
   * - delete: Delete the geo-redundancy policy.
   * 
   * > This parameter is required if you enable geo-redundancy.
   * 
   * @example
   * update
   */
  crossBackupType?: string;
  /**
   * @remarks
   * The retention policy for cross-region log backups. Valid values:
   * 
   * - delay: Retain the backup for a specified period.
   * 
   * - never: Retain the backup permanently.
   * 
   * > This parameter is required if you enable geo-redundancy.
   * 
   * @example
   * delay
   */
  crossLogRetentionType?: string;
  /**
   * @remarks
   * The number of days to retain cross-region log backups. Valid values: 3 to 1825. The value must be less than or equal to the value of CrossRetentionValue.
   * 
   * > This parameter is required if you enable geo-redundancy.
   * 
   * @example
   * 3
   */
  crossLogRetentionValue?: number;
  /**
   * @remarks
   * The retention policy for geo-redundant backups. Valid values:
   * 
   * - delay: Retain the backup for a specified period.
   * 
   * - never: Retain the backup permanently.
   * 
   * > This parameter is required if you enable geo-redundancy.
   * 
   * @example
   * delay
   */
  crossRetentionType?: string;
  /**
   * @remarks
   * The number of days to retain geo-redundant backups. Valid values: 3 to 1825.
   * 
   * > - This parameter is required if you enable geo-redundancy.
   * >
   * > - This parameter is required if you set CrossRetentionType to delay.
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
   * The region ID of the geo-redundant backup.
   * 
   * > This parameter is required if you enable geo-redundancy.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * Specifies whether to enable log backup. Valid values:
   * 
   * - **0**: Disable log backup. This is the default value.
   * 
   * - **1**: Enable log backup.
   * 
   * >Notice: 
   * 
   * You cannot disable log backup for sharded cluster instances.
   * 
   * @example
   * 0
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * Specifies whether to enable cross-region log backup. Valid values:
   * 
   * > This parameter is required if you enable geo-redundancy.
   * >
   * > - 1: Enable cross-region log backup. This value is required for sharded cluster instances. This value is also required for replica set instances if you want to enable geo-redundant point-in-time recovery.
   * >
   * > - 0: Disable cross-region log backup.
   * 
   * @example
   * 1
   */
  enableCrossLogBackup?: number;
  /**
   * @remarks
   * The number of days to retain high-frequency backups. Before you specify this parameter, you must set the BackupInterval parameter. The default retention period is 1 day.
   * 
   * @example
   * 1
   */
  highFrequencyBackupRetention?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - replicate
   * 
   * - sharding
   * 
   * > * This parameter is required when you restore a deleted instance.
   * >
   * > * This parameter is required when you clone an instance from a geo-redundant backup.
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of days to retain log backups. Default value: 7.
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
   * 
   * - **Monday**
   * 
   * - **Tuesday**
   * 
   * - **Wednesday**
   * 
   * - **Thursday**
   * 
   * - **Friday**
   * 
   * - **Saturday**
   * 
   * - **Sunday**
   * 
   * >Notice: 
   * 
   * To ensure data security, back up the MongoDB instance at least twice a week.
   * 
   * 
   * 
   * > To specify multiple backup cycles, separate them with commas (,).
   * 
   * @example
   * Monday,Wednesday,Friday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time range to perform a backup. Specify the time in the *HH:mm*Z-*HH:mm*Z format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * > The time range must be 1 hour.
   * 
   * @example
   * 03:00Z-04:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * Specifies whether to enable hourly sparse backup. Valid values:
   * 
   * - true: If the backup frequency is in minutes, all snapshots that are generated within the last hour are retained. For snapshots that were generated more than 1 hour ago but less than 24 hours ago, only the first snapshot that is generated after each full hour is retained.
   * 
   * - false: All snapshots are retained within the high-frequency backup retention period.
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
   * - **Flash**: second-level backup.
   * 
   * - **Standard**: conventional backup. This is the default value.
   * 
   * @example
   * Standard
   */
  snapshotBackupType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > - This parameter is required if you restore a deleted instance.
   * >
   * > - This parameter is required if you enable geo-redundancy.
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

