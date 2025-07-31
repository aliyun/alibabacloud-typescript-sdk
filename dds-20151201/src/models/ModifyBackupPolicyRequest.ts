// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The frequency at which high-frequency backups are generated. Valid values:
   * 
   * *   **-1**: High-frequency backup is disabled.
   * *   **30**: High-frequency backups are generated every 30 minutes.
   * *   **60**: High-frequency backups are generated every 1 hour.
   * *   **120**: High-frequency backups are generated every 2 hours.
   * *   **180**: High-frequency backups are generated every 3 hours.
   * *   **240**: High-frequency backups are generated every 4 hours.
   * *   **360**: High-frequency backups are generated every 6 hours.
   * *   **480**: High-frequency backups are generated every 8 hours.
   * *   **720**: High-frequency backups are generated every 12 hours.
   * 
   * > 
   * 
   * *   If you set the **SnapshotBackupType** parameter to **Standard**, you must fix the value of this parameter to -1.
   * 
   * *   High-frequency backup takes effect only when you set the **SnapshotBackupType** parameter to **Flash** and this parameter to a value greater than 0.
   * 
   * @example
   * -1
   */
  backupInterval?: string;
  /**
   * @remarks
   * The retention period of full backups.
   * 
   * > 
   * 
   * *   If your instance is created before September 10, 2021, backups are retained for seven days by default.
   * 
   * *   If your instance is created after September 10, 2021, backups are retained for 30 days by default.
   * 
   * @example
   * 30
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The backup retention policy configured for the instance. Valid values:
   * 
   * *   0: All backup sets are immediately deleted when the instance is released.
   * *   1: Automatic backup is performed when the instance is released and the backup set is retained for a long period of time.
   * *   2: Automatic backup is performed when the instance is released and all backup sets are retained for a long period of time.
   * 
   * For more information, see [Retain the backup files of an ApsaraDB for MongoDB instance for a long period of time](https://help.aliyun.com/document_detail/2779111.html).
   * 
   * @example
   * 2
   */
  backupRetentionPolicyOnClusterDeletion?: number;
  /**
   * @remarks
   * The day of the week on which the cross-region backup files are retained. Valid values:
   * 
   * 1.  Monday
   * 2.  Tuesday
   * 3.  Wednesday
   * 4.  Thursday
   * 5.  Friday
   * 6.  Saturday
   * 7.  Sunday
   * 
   * >  This parameter is required for a cross-region backup operation.
   * 
   * *   Separate multiple values with commas (,).
   * 
   * *   If you set the SnapshotBackupType parameter to Standard, the parameter value must fall within the value of the PreferredBackupPeriod parameter that specifies the standard backup period.
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  crossBackupPeriod?: string;
  /**
   * @remarks
   * The action performed for the cross-region backup policy. Valid values:
   * 
   * *   update: modifies the cross-region backup policy.
   * *   delete: deletes the cross-region backup policy.
   * 
   * >  This parameter is required for a cross-region backup operation.
   * 
   * @example
   * update
   */
  crossBackupType?: string;
  /**
   * @remarks
   * The retention type of the cross-region log backup files. Valid values:
   * 
   * *   delay: retains the cross-region backup files for a period of time.
   * *   never: permanently retains the cross-region backup files.
   * 
   * >  This parameter is required for a cross-region backup operation.
   * 
   * @example
   * delay
   */
  crossLogRetentionType?: string;
  /**
   * @remarks
   * The retention period of the cross-region log backup files. Valid values: 3 to 1825. Unit: day. The parameter value must be less than or equal to the value of the CrossRetentionValue parameter.
   * 
   * >  This parameter is required for a cross-region backup operation.
   * 
   * @example
   * 3
   */
  crossLogRetentionValue?: number;
  /**
   * @remarks
   * The retention type of the cross-region backup files. Valid values:
   * 
   * *   delay: retains the cross-region backup files for a period of time.
   * *   never: permanently retains the cross-region backup files.
   * 
   * >  This parameter is required for a cross-region backup operation.
   * 
   * @example
   * delay
   */
  crossRetentionType?: string;
  /**
   * @remarks
   * The retention period of the cross-region backup files. Valid values: 3 to 1825. Unit: day.
   * 
   * > 
   * 
   * *   This parameter is required for a cross-region backup operation.
   * 
   * *   This parameter is required when you set the CrossRetentionType parameter to delay.
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
   * The region in which the backup files are retained.
   * 
   * >  This parameter is required for a cross-region backup operation.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * Specifies whether to enable the log backup feature. Valid values:
   * 
   * *   **0** (default): The log backup feature is disabled.
   * *   **1**: The log backup feature is enabled.
   * 
   * @example
   * 0
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * Specifies whether to enable the cross-region log backup feature.
   * 
   * >  This parameter is required for a cross-region backup operation.
   * 
   * *   Valid values:1: enables the feature. The parameter value must be 1 for sharded cluster instances.
   * 
   * *   0: disables the feature. The parameter value must be 0 for replica set instances.
   * 
   * @example
   * 1
   */
  enableCrossLogBackup?: number;
  /**
   * @remarks
   * The number of days for which high-frequency backup files are retained. Before you use this parameter, make sure that you specify the BackupInterval parameter. By default, high-frequency backup files are retained for one day.
   * 
   * @example
   * 1
   */
  highFrequencyBackupRetention?: number;
  /**
   * @remarks
   * The instance architecture. Valid values:
   * 
   * *   replicate
   * *   sharding
   * 
   * > 
   * 
   * *   This parameter is required when you set the RestoreType parameter to 2.
   * 
   * *   This parameter is required when you set the RestoreType parameter to 3.
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
   * The day of a week when the system regularly backs up data. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * **
   * 
   * **Notice**: To ensure data security, make sure that the system backs up data at least twice a week.
   * 
   * >  Separate multiple values with commas (,).
   * 
   * @example
   * Monday,Wednesday,Friday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The start time of the backup. Specify the time in the ISO 8601 standard in the *HH:mm*Z-*HH:mm*Z format. The time must be in UTC.
   * 
   * >  The time range is 1 hour.
   * 
   * @example
   * 03:00Z-04:00Z
   */
  preferredBackupTime?: string;
  preserveOneEachHour?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The snapshot backup type. Valid values:
   * 
   * *   **Flash**: single-digit second backup
   * *   **Standard** (default): standard backup
   * 
   * @example
   * Standard
   */
  snapshotBackupType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > 
   * 
   * *   This parameter is required for the data restoration of a deleted instance.
   * 
   * *   This parameter is required for a cross-region backup operation.
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

