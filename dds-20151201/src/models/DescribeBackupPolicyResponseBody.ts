// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The high-frequency backup frequency. Valid values:
   * 
   * - **-1**: high-frequency backup is disabled.
   * 
   * - **15**: every 15 minutes.
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
   * @example
   * -1
   */
  backupInterval?: number;
  /**
   * @remarks
   * The backup retention period in days.
   * 
   * @example
   * 30
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The backup retention policy.
   * 
   * 1. 0: All backup sets of the instance are immediately deleted when the instance is released
   * 
   * 2. 1: The instance is automatically backed up when it is released, and the backup set is retained for a long time
   * 
   * 3. 2: The instance is automatically backed up when it is released, and all backup sets of the cluster are retained for a long time
   * 
   * For more information, see [Long-term backup retention](https://help.aliyun.com/document_detail/2779111.html)
   * 
   * @example
   * 0
   */
  backupRetentionPolicyOnClusterDeletion?: number;
  /**
   * @remarks
   * The geo-redundancy backup retention time.
   * 
   * 1. Monday: Monday.
   * 
   * 2. Tuesday: Tuesday.
   * 
   * 3. Wednesday: Wednesday.
   * 
   * 4. Thursday: Thursday.
   * 
   * 5. Friday: Friday.
   * 
   * 6. Saturday: Saturday.
   * 
   * 7. Sunday: Sunday.
   * 
   * > Required for geo-redundancy backup
   * 
   * @example
   * Monday
   */
  crossBackupPeriod?: string;
  /**
   * @remarks
   * The geo-redundancy log backup retention type.
   * 
   * - delay: retained for a period of time
   * 
   * - never: never expires
   * 
   * @example
   * delay
   */
  crossLogRetentionType?: string;
  /**
   * @remarks
   * The geo-redundancy log backup retention period.
   * 
   * @example
   * 7
   */
  crossLogRetentionValue?: number;
  /**
   * @remarks
   * The geo-redundancy backup retention type.
   * 
   * - delay: retained for a period of time
   * 
   * - never: never expires
   * 
   * @example
   * delay
   */
  crossRetentionType?: string;
  /**
   * @remarks
   * The geo-redundancy backup retention period.
   * 
   * @example
   * 7
   */
  crossRetentionValue?: number;
  /**
   * @remarks
   * The region where the geo-redundancy backup is located.
   * 
   * @example
   * cn-shenzhen
   */
  destRegion?: string;
  /**
   * @remarks
   * Indicates whether log backup is enabled. Valid values:
   * 
   * - **0**: disabled (default).
   * 
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * Indicates whether cross-region log backup is enabled.
   * 
   * > Required for geo-redundancy backup
   * >
   * > - 1: enabled (must be 1 for sharded cluster instances)
   * >
   * > - 0: disabled (must be 0 for replica set instances)
   * 
   * @example
   * 1
   */
  enableCrossLogBackup?: number;
  /**
   * @remarks
   * The high-frequency backup retention period in days.
   * 
   * @example
   * 1
   */
  highFrequencyBackupRetention?: string;
  /**
   * @remarks
   * The log backup retention period in days. Valid values: 7 to 730.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * 
   * - **Monday**: Monday.
   * 
   * - **Tuesday**: Tuesday.
   * 
   * - **Wednesday**: Wednesday.
   * 
   * - **Thursday**: Thursday.
   * 
   * - **Friday**: Friday.
   * 
   * - **Saturday**: Saturday.
   * 
   * - **Sunday**: Sunday.
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time in the format of *HH:mm*Z-*HH:mm*Z (UTC time).
   * 
   * @example
   * 09:00Z-10:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The next regular backup time in the format of *yyyy-mm-dd*t*hh:mm*z (UTC time).
   * 
   * @example
   * 2024-06-19T19:11Z
   */
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * Indicates whether sparse backup within an hour is enabled.
   * 
   * - true: When the backup frequency is at the minute level, all snapshots within 1 hour from the current time are retained. For snapshots that are more than 1 hour but within 24 hours from the current time, only the first snapshot after each hour is retained.
   * 
   * - false: Sparse backup within an hour is disabled: all snapshots within the high-frequency backup retention period are retained.
   * 
   * @example
   * false
   */
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
   * - **Flash**: second-level backup.
   * 
   * - **Standard**: regular backup (default).
   * 
   * @example
   * Standard
   */
  snapshotBackupType?: string;
  /**
   * @remarks
   * The region where the source instance is located.
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

