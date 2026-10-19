// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The high-frequency backup frequency. Valid values:
   * 
   * - **-1**: high-frequency backup is disabled
   * - **15**: every 15 minutes
   * - **30**: every 30 minutes
   * - **60**: every 1 hour
   * - **120**: every 2 hours
   * - **180**: every 3 hours
   * - **240**: every 4 hours
   * - **360**: every 6 hours
   * - **480**: every 8 hours
   * - **720**: every 12 hours
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
   * The backup data retention policy. Valid values:
   * 
   * - 0: All backup sets of the instance are immediately deleted when the instance is released.
   * - 1: An automatic backup is created when the instance is released, and the backup set is retained for long-term retention (LTR).
   * - 2: An automatic backup is created when the instance is released, and all backup sets of the cluster are retained for long-term retention (LTR).
   * 
   * For more information, see [Long-term retention backup](https://help.aliyun.com/document_detail/2779111.html).
   * 
   * @example
   * 0
   */
  backupRetentionPolicyOnClusterDeletion?: number;
  /**
   * @remarks
   * The days of the week when geo-redundancy backups are performed. Valid values:
   * 
   * - Monday: Monday
   * - Tuesday: Tuesday
   * - Wednesday: Wednesday
   * - Thursday: Thursday
   * - Friday: Friday
   * - Saturday: Saturday
   * - Sunday: Sunday
   * 
   * > Required for geo-redundancy backups.
   * 
   * @example
   * Monday
   */
  crossBackupPeriod?: string;
  /**
   * @remarks
   * The retention type for cross-region log backups. Valid values:
   * 
   * - delay: retained for a specified period
   * - never: never expires
   * 
   * @example
   * delay
   */
  crossLogRetentionType?: string;
  /**
   * @remarks
   * The retention period for cross-region log backups.
   * 
   * @example
   * 7
   */
  crossLogRetentionValue?: number;
  /**
   * @remarks
   * The retention type for geo-redundancy backups. Valid values:
   * 
   * - delay: retained for a specified period
   * 
   * - never: never expires
   * 
   * @example
   * delay
   */
  crossRetentionType?: string;
  /**
   * @remarks
   * The retention period for geo-redundancy backups.
   * 
   * @example
   * 7
   */
  crossRetentionValue?: number;
  /**
   * @remarks
   * The region where geo-redundancy backups are stored.
   * 
   * @example
   * cn-shenzhen
   */
  destRegion?: string;
  /**
   * @remarks
   * Specifies whether to enable log backup. Valid values:
   * - **0**: disabled (default)
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
  /**
   * @remarks
   * Specifies whether cross-region log backup is enabled.
   * 
   * > Required for geo-redundancy backups.
   * > - 1: enabled (must be set to 1 for sharded cluster instances)
   * > - 0: disabled (must be set to 0 for replica set instances)
   * 
   * @example
   * 1
   */
  enableCrossLogBackup?: number;
  /**
   * @remarks
   * The retention period for high-frequency backups, in days.
   * 
   * @example
   * 1
   */
  highFrequencyBackupRetention?: string;
  /**
   * @remarks
   * The retention period for log backups, in days. Valid values: 7 to 730.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * - **Monday**: Monday
   * - **Tuesday**: Tuesday
   * - **Wednesday**: Wednesday
   * - **Thursday**: Thursday
   * - **Friday**: Friday
   * - **Saturday**: Saturday
   * - **Sunday**: Sunday
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time. The format is <i>HH:mm</i>Z-<i>HH:mm</i>Z (UTC time).
   * 
   * @example
   * 09:00Z-10:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The time of the next regular backup. The format is <i>yyyy-mm-dd</i>t<i>hh:mm</i>z (UTC time).
   * 
   * @example
   * 2024-06-19T19:11Z
   */
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * Specifies whether to enable sparse backup within an hour. Valid values:
   * 
   * - true: When the backup frequency is set to minutes, all snapshots taken within 1 hour from the current time are retained. For snapshots taken more than 1 hour but within 24 hours from the current time, only the first snapshot after the hour is retained.
   * 
   * - false: Sparse backup within an hour is disabled. All snapshots within the high-frequency backup retention period are retained.
   * 
   * @example
   * false
   */
  preserveOneEachHour?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5A9464CA-F7DC-5434-90B1-DF7F197C****
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot backup type. Valid values:
   * 
   * - **Flash**: backup within seconds
   * - **Standard**: standard backup (default)
   * 
   * @example
   * Standard
   */
  snapshotBackupType?: string;
  /**
   * @remarks
   * The region where the source instance is deployed.
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

