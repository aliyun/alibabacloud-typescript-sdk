// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The frequency at which high-frequency backup is created. Valid values:
   * 
   * *   **-1**: High-frequency backup is disabled.
   * *   **15**: every 15 minutes.
   * *   **30**: every 30 minutes.
   * *   **60**: every hour.
   * *   **120**: every 2 hours.
   * *   **180**: every 3 hours.
   * *   **240**: every 4 hours.
   * *   **360**: every 6 hours.
   * *   **480**: every 8 hours.
   * *   **720**: every 12 hours.
   * 
   * @example
   * -1
   */
  backupInterval?: number;
  /**
   * @remarks
   * The retention period of the backup data. Unit: day.
   * 
   * @example
   * 30
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The backup retention policy configured for the instance. Valid values:
   * 
   * 1.  0: All backup sets are immediately deleted when the instance is released.
   * 2.  1: Automatic backup is performed and the backup set is retained for a long period of time when the instance is released.
   * 3.  2: Automatic backup is performed and all backup sets are retained for a long period of time when the instance is released.
   * 
   * For more information, see [Retain the backup files of an ApsaraDB for MongoDB instance for a long period of time](https://help.aliyun.com/document_detail/2779111.html).
   * 
   * @example
   * 0
   */
  backupRetentionPolicyOnClusterDeletion?: number;
  /**
   * @remarks
   * The retention period of Cross-regional backup.
   * Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * @example
   * Monday
   */
  crossBackupPeriod?: string;
  /**
   * @remarks
   * The retention type of Cross-regional  log backup.
   * 
   * - delay : retain the backup for a period of time.
   * - never : retain the backup permanently.
   * 
   * @example
   * delay
   */
  crossLogRetentionType?: string;
  /**
   * @remarks
   * The retention time of Cross-regional log backup.
   * 
   * @example
   * 7
   */
  crossLogRetentionValue?: number;
  /**
   * @remarks
   * The retention type of Cross-regional backup.
   * 
   * - delay : retain the backup for a period of time.
   * - never : retain the backup permanently.
   * 
   * @example
   * delay
   */
  crossRetentionType?: string;
  /**
   * @remarks
   * The retention time of Cross-regional backup.
   * 
   * @example
   * 7
   */
  crossRetentionValue?: number;
  /**
   * @remarks
   * The region ID of the cross-regional backup..
   * 
   * @example
   * cn-shenzhen
   */
  destRegion?: string;
  /**
   * @remarks
   * Indicates whether the log backup feature is enabled. Valid values:
   * 
   * *   **0** (default): The log backup feature is disabled.
   * *   **1**: The log backup feature is enabled.
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * Whether to turn on cross-regional log backup.
   * - 1: turn on . Used for sharded cluster.
   * - 0: turn off. Used for replicate set.
   * 
   * @example
   * 1
   */
  enableCrossLogBackup?: number;
  /**
   * @remarks
   * The retention period of high-frequency backups. Unit: day.
   * 
   * @example
   * 1
   */
  highFrequencyBackupRetention?: string;
  /**
   * @remarks
   * The number of days for which log backups are retained. Valid values: 7 to 730.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The day of a week on which to back up data. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time range during which the backup was created. The time follows the ISO 8601 standard in the *HH:mm*Z-*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 09:00Z-10:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The time of next standard backup.
   * 
   * @example
   * 2024-06-19T19:11Z
   */
  preferredNextBackupTime?: string;
  preserveOneEachHour?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A9464CA-F7DC-5434-90B1-DF7F197C****
   */
  requestId?: string;
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
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupInterval: 'BackupInterval',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      crossBackupPeriod: 'CrossBackupPeriod',
      crossLogRetentionType: 'CrossLogRetentionType',
      crossLogRetentionValue: 'CrossLogRetentionValue',
      crossRetentionType: 'CrossRetentionType',
      crossRetentionValue: 'CrossRetentionValue',
      destRegion: 'DestRegion',
      enableBackupLog: 'EnableBackupLog',
      enableCrossLogBackup: 'EnableCrossLogBackup',
      highFrequencyBackupRetention: 'HighFrequencyBackupRetention',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      preferredNextBackupTime: 'PreferredNextBackupTime',
      preserveOneEachHour: 'PreserveOneEachHour',
      requestId: 'RequestId',
      snapshotBackupType: 'SnapshotBackupType',
      srcRegion: 'SrcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupInterval: 'number',
      backupRetentionPeriod: 'string',
      backupRetentionPolicyOnClusterDeletion: 'number',
      crossBackupPeriod: 'string',
      crossLogRetentionType: 'string',
      crossLogRetentionValue: 'number',
      crossRetentionType: 'string',
      crossRetentionValue: 'number',
      destRegion: 'string',
      enableBackupLog: 'number',
      enableCrossLogBackup: 'number',
      highFrequencyBackupRetention: 'string',
      logBackupRetentionPeriod: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      preferredNextBackupTime: 'string',
      preserveOneEachHour: 'boolean',
      requestId: 'string',
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

