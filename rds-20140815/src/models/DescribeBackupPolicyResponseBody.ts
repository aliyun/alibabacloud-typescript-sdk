// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of archived backup files that are retained.
   * 
   * @example
   * 1
   */
  archiveBackupKeepCount?: string;
  /**
   * @remarks
   * The cycle based on which archived backup files are retained.
   * 
   * @example
   * ByMonth
   */
  archiveBackupKeepPolicy?: string;
  /**
   * @remarks
   * The number of days for which archived backup files are retained.
   * 
   * @example
   * 365
   */
  archiveBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The backup interval. Unit: minutes.
   * 
   * *   If the instance runs MySQL, the interval is the same as the value of the Snapshot Backup Start Time parameter rather than the Snapshot Backup Period parameter in the ApsaraDB RDS console. For more information, see [Back up an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/98818.html).
   * *   If the instance runs SQL Server, the interval is the same as the log backup frequency.
   * 
   * @example
   * 30
   */
  backupInterval?: string;
  /**
   * @remarks
   * Indicates whether the log backup feature is enabled. Valid values:
   * 
   * *   **Enable**
   * *   **Disabled**
   * 
   * @example
   * Enable
   */
  backupLog?: string;
  /**
   * @remarks
   * The backup method of the instance. Valid values:
   * 
   * *   **Physical**: physical backup
   * *   **Snapshot**: snapshot backup
   * 
   * > This parameter is returned only when the instance runs SQL Server and uses cloud disks.
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup settings of the secondary instance. Valid values:
   * 
   * *   **1**: Secondary instance preferred
   * *   **2**: Primary instance preferred
   * 
   * >  This parameter is available only for instances that run SQL Server on RDS Cluster Edition. This parameter is returned only when SupportModifyBackupPriority is set to True.
   * 
   * @example
   * 2
   */
  backupPriority?: number;
  /**
   * @remarks
   * The number of days for which data backup files are retained.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Indicates whether to enable the single-digit second backup feature. This feature allows ApsaraDB RDS to complete a backup within single-digit seconds. Valid values:
   * 
   * *   **Flash**: The single-digit second backup feature is enabled.
   * *   **Standard**: The single-digit second backup feature is disabled.
   * 
   * > This parameter takes effect only when you set the **BackupPolicyMode** parameter to **DataBackupPolicy**.
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The method that is used to compress backup data. Valid values:
   * 
   * *   **0**: Backup data is not compressed.
   * *   **1**: Backup data is compressed by using zlib.
   * *   **2**: Backup data is compressed by using zlib that invokes more than one thread in parallel for each backup.
   * *   **4**: Backup data is compressed by using QuickLZ and can be used to restore individual databases or tables.
   * *   **8**: Backup data is compressed by using QuickLZ but cannot be used to restore individual databases or tables.
   * 
   * @example
   * 1
   */
  compressType?: string;
  /**
   * @remarks
   * Indicates whether the log backup feature is enabled. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * Indicates whether incremental backup is enabled. Valid values:
   * 
   * *   **True**: Incremental backup is enabled.
   * *   **False**: Incremental backup is disabled.
   * 
   * @example
   * True
   */
  enableIncrementDataBackup?: boolean;
  /**
   * @remarks
   * Indicates whether the point-in-time restoration (PITR) feature is enabled. The PITR feature is an enhancement of the log backup feature. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * >  This parameter is returned only when the instance runs MySQL. For more information, see [Configure the PITR feature](https://help.aliyun.com/document_detail/2666046.html).
   * 
   * @example
   * True
   */
  enablePitrProtection?: boolean;
  /**
   * @remarks
   * Indicates whether the log backup deletion feature is enabled. If the disk usage exceeds 80% or the remaining disk space is less than 5 GB on the instance, this feature deletes binary log files. Valid values:
   * 
   * *   **Disable**
   * *   **Enable**
   * 
   * @example
   * Enable
   */
  highSpaceUsageProtection?: string;
  /**
   * @remarks
   * The number of hours for which log backup files are retained on the instance.
   * 
   * @example
   * 0
   */
  localLogRetentionHours?: number;
  /**
   * @remarks
   * The maximum storage usage that is allowed for log files on the instance.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: string;
  /**
   * @remarks
   * The backup frequency of logs. Valid values:
   * 
   * *   **LogInterval**: Log backups are performed every 30 minutes.
   * *   Default value: same as the value of the **PreferredBackupPeriod** parameter.
   * 
   * >  This parameter is returned only when the instance runs SQL Server.
   * 
   * @example
   * LogInterval
   */
  logBackupFrequency?: string;
  /**
   * @remarks
   * The number of binary log files that you want to retain on the instance.
   * 
   * @example
   * 60
   */
  logBackupLocalRetentionNumber?: number;
  /**
   * @remarks
   * The number of days for which log backup files are retained.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The number of days during which you can restore data of the instance to any point in time.
   * 
   * @example
   * 7
   */
  pitrRetentionPeriod?: number;
  /**
   * @remarks
   * The cycle based on which you want to perform a backup. Separate multiple values with commas (,). Valid values:
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
   * Monday,Wednesday,Friday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time when a data backup is performed. The time follows the ISO 8601 standard in the *HH:mm*Z-*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The time when the next backup is performed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-19T15:15Z
   */
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * The policy that is used to retain archived backup files if the instance is released. Valid values:
   * 
   * *   **None**: No archived backup files are retained.
   * *   **Lastest**: Only the last archived backup file is retained.
   * *   **All**: All archived backup files are retained.
   * 
   * @example
   * None
   */
  releasedKeepPolicy?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B87E2AB3-B7C9-4394-9160-7F639F732031
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the backup settings of a secondary instance can be modified. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * False
   */
  supportModifyBackupPriority?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  supportReleasedKeep?: number;
  /**
   * @remarks
   * Indicates whether the instance supports snapshot backups. Valid values:
   * 
   * *   **1**: The instance supports snapshot backups.
   * *   **0**: The instance does not support snapshot backups.
   * 
   * >  This parameter is returned only when the instance runs SQL Server.
   * 
   * @example
   * 1
   */
  supportVolumeShadowCopy?: number;
  /**
   * @remarks
   * Indicates whether log backups for SQL Server are performed verery five minutes.
   * 
   * *   0: No
   * *   1: Yes
   * 
   * @example
   * 0
   */
  supportsHighFrequencyBackup?: number;
  static names(): { [key: string]: string } {
    return {
      archiveBackupKeepCount: 'ArchiveBackupKeepCount',
      archiveBackupKeepPolicy: 'ArchiveBackupKeepPolicy',
      archiveBackupRetentionPeriod: 'ArchiveBackupRetentionPeriod',
      backupInterval: 'BackupInterval',
      backupLog: 'BackupLog',
      backupMethod: 'BackupMethod',
      backupPriority: 'BackupPriority',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      category: 'Category',
      compressType: 'CompressType',
      enableBackupLog: 'EnableBackupLog',
      enableIncrementDataBackup: 'EnableIncrementDataBackup',
      enablePitrProtection: 'EnablePitrProtection',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupFrequency: 'LogBackupFrequency',
      logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      pitrRetentionPeriod: 'PitrRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      preferredNextBackupTime: 'PreferredNextBackupTime',
      releasedKeepPolicy: 'ReleasedKeepPolicy',
      requestId: 'RequestId',
      supportModifyBackupPriority: 'SupportModifyBackupPriority',
      supportReleasedKeep: 'SupportReleasedKeep',
      supportVolumeShadowCopy: 'SupportVolumeShadowCopy',
      supportsHighFrequencyBackup: 'SupportsHighFrequencyBackup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveBackupKeepCount: 'string',
      archiveBackupKeepPolicy: 'string',
      archiveBackupRetentionPeriod: 'string',
      backupInterval: 'string',
      backupLog: 'string',
      backupMethod: 'string',
      backupPriority: 'number',
      backupRetentionPeriod: 'number',
      category: 'string',
      compressType: 'string',
      enableBackupLog: 'string',
      enableIncrementDataBackup: 'boolean',
      enablePitrProtection: 'boolean',
      highSpaceUsageProtection: 'string',
      localLogRetentionHours: 'number',
      localLogRetentionSpace: 'string',
      logBackupFrequency: 'string',
      logBackupLocalRetentionNumber: 'number',
      logBackupRetentionPeriod: 'number',
      pitrRetentionPeriod: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      preferredNextBackupTime: 'string',
      releasedKeepPolicy: 'string',
      requestId: 'string',
      supportModifyBackupPriority: 'boolean',
      supportReleasedKeep: 'number',
      supportVolumeShadowCopy: 'number',
      supportsHighFrequencyBackup: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

