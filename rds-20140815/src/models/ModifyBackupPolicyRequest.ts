// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of archived backup files that are retained. Default value: **1**. Valid values:
   * 
   * *   Valid values when **ArchiveBackupKeepPolicy** is set to **ByMonth**: **1** to **31**.
   * *   Valid values when **ArchiveBackupKeepPolicy** is set to **ByWeek**: **1** to **7**.
   * 
   * > *   You do not need to specify this parameter when **ArchiveBackupKeepPolicy** is set to **KeepAll**.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 1
   */
  archiveBackupKeepCount?: number;
  /**
   * @remarks
   * The retention period of archived backup files. The number of archived backup files that can be retained within the specified retention period is specified by **ArchiveBackupKeepCount**. Default value: **0**. Valid values:
   * 
   * *   **ByMonth**
   * *   **ByWeek**
   * *   **KeepAll**
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * ByMonth
   */
  archiveBackupKeepPolicy?: string;
  /**
   * @remarks
   * The number of days for which the archived backup is retained. The default value **0** specifies that the backup archiving feature is disabled. Valid values: **30** to **1095**.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 365
   */
  archiveBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The frequency at which you want to perform a snapshot backup on the instance. Valid values:
   * 
   * *   **-1**: No backup frequencies are specified.
   * *   **30**: A snapshot backup is performed every 30 minutes.
   * *   **60**: A snapshot backup is performed every 60 minutes.
   * *   **120**: A snapshot backup is performed every 120 minutes.
   * *   **240**: A snapshot backup is performed every 240 minutes.
   * *   **480**: A snapshot backup is performed every 480 minutes.
   * 
   * > *   You can configure a backup policy by using this parameter and the **PreferredBackupPeriod** parameter. For example, if you set **PreferredBackupPeriod** to Saturday,Sunday and BackupInterval to \\*\\*-1\\*\\*, a snapshot backup is performed on every Saturday and Sunday.
   * > *   If the instance runs PostgreSQL, BackupInterval is supported only when the instance is equipped with cloud disks.
   * > *   If the instance runs SQL Server, BackupInterval is supported only when the snapshot backup feature is enabled for the instance. For more information, see [Enable snapshot backups for an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/211143.html).
   * > *   If **Category** is set to **Flash**, BackupInterval is invalid.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 30
   */
  backupInterval?: string;
  /**
   * @remarks
   * Specifies whether to enable the log backup feature. Valid values:
   * 
   * *   **Enable**: enables the feature.
   * *   **Disabled**: disables the feature.
   * 
   * > *   This parameter must be specified when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
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
   * Default value: **Physical**.
   * 
   * > *   This parameter takes effect only on instances that run SQL Server with cloud disks.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The type of the backup. Valid values:
   * 
   * *   **DataBackupPolicy**: data backup
   * *   **LogBackupPolicy**: log backup
   * 
   * @example
   * DataBackupPolicy
   */
  backupPolicyMode?: string;
  /**
   * @remarks
   * Specifies whether the backup settings of a secondary instance are configured. Valid values:
   * 
   * *   **1**: secondary instance preferred
   * *   **2**: primary instance preferred
   * 
   * > *   This parameter is suitable only for instances that run SQL Server on RDS Cluster Edition.
   * > *   This parameter takes effect only when **BackupMethod** is set to **Physical**. If **BackupMethod** is set to **Snapshot**, backups are forcefully performed on the primary instance that runs SQL Server on RDS Cluster Edition.
   * 
   * @example
   * 2
   */
  backupPriority?: number;
  /**
   * @remarks
   * The number of days for which you want to retain data backup files. Valid values: **7 to 730**.
   * 
   * > *   This parameter must be specified when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * Specifies whether to enable the single-digit second backup feature. Valid values:
   * 
   * *   **Flash**: enables the feature.
   * *   **Standard**: disables the feature.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The format that is used to compress backup data. Valid values:
   * 
   * *   **0**: Backups are not compressed.
   * *   **1**: The zlib tool is used to compress backups into .tar.gz files.
   * *   **2**: The zlib tool is used to compress backups in parallel.
   * *   **4**: The QuickLZ tool is used to compress backups into .xb.gz files. This compression format is supported for instances that run MySQL 5.6 or MySQL 5.7. Backups in this compression format can be used to restore individual databases and tables. For more information, see [Restore individual databases and tables of an ApsaraDB RDS for MySQL instance](https://help.aliyun.com/document_detail/103175.html).
   * *   **8**: The QuickLZ tool is used to compress backups into .xb.gz files. This compression format is supported only for instances that run MySQL 8.0. Backups in this compression format cannot be used to restore individual databases and tables.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 4
   */
  compressType?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the log backup feature. Valid values:
   * 
   * *   **True** or **1**: enables the log backup feature.
   * *   **False** or **0**: disables the log backup feature.
   * 
   * > 
   * 
   * *   You must specify this parameter when you set the **BackupPolicyMode** parameter to **LogBackupPolicy**.
   * 
   * *   This parameter takes effect only when you set the **BackupPolicyMode** parameter to **LogBackupPolicy**.
   * 
   * @example
   * 1
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * Specifies whether to enable incremental backup. Valid values:
   * 
   * *   **false** (default): disables the feature.
   * *   **true**: enables the feature.
   * 
   * > *   This parameter takes effect only on instances that run SQL Server with cloud disks.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * false
   */
  enableIncrementDataBackup?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully delete log backup files from the instance when the storage usage of the instance exceeds 80% or the amount of remaining storage on the instance is less than 5 GB. Valid values: **Enable and Disable**. You can retain the default value.
   * 
   * > *   You must specify this parameter when you set the **BackupPolicyMode** parameter to **LogBackupPolicy**.
   * > *   This parameter takes effect only when you set the **BackupPolicyMode** parameter to **LogBackupPolicy**.
   * 
   * @example
   * Enable
   */
  highSpaceUsageProtection?: string;
  /**
   * @remarks
   * The number of hours for which you want to retain log backup files on the instance. Valid values: **0 to 168**. The value 0 specifies that log backup files are not retained on the instance. The value 168 is calculated based on the following formula: 7 × 24.
   * 
   * > *   This parameter must be specified when **BackupPolicyMode** is set to **LogBackupPolicy**.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**.
   * 
   * @example
   * 18
   */
  localLogRetentionHours?: string;
  /**
   * @remarks
   * The maximum storage usage that is allowed for log backup files on the instance. If the storage usage for log backup files on the instance exceeds the value of this parameter, the system deletes earlier log backup files until the storage usage falls below the value of this parameter. Valid values:**0 to 50**. You can retain the default value.
   * 
   * > *   This parameter must be specified when **BackupPolicyMode** is set to **LogBackupPolicy**.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: string;
  /**
   * @remarks
   * The frequency at which you want to back up the logs of the instance. Valid values:
   * 
   * *   **LogInterval**: A log backup is performed every 30 minutes.
   * *   The default value is the same as the data backup frequency.
   * 
   * > *   The value **LogInterval** is supported only for instances that run SQL Server.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * LogInterval
   */
  logBackupFrequency?: string;
  /**
   * @remarks
   * The number of binary log files that you want to retain on the instance. Default value: **60**. Valid values: **6** to **100**.
   * 
   * > 
   * 
   * *   This parameter takes effect only when you set the **BackupPolicyMode** parameter to **LogBackupPolicy**.
   * 
   * *   If the instance runs MySQL, you can set this parameter to \\*\\*-1\\*\\*. The value \\*\\*-1\\*\\* specifies that an unlimited number of binary log files can be retained on the instance.
   * 
   * @example
   * 60
   */
  logBackupLocalRetentionNumber?: number;
  /**
   * @remarks
   * The number of days for which the log backup is retained. Valid values: **7 to 730**. The log backup retention period cannot be longer than the data backup retention period.
   * 
   * > *   If you enable the log backup feature, you can specify the log backup retention period. This parameter is supported for instances that run MySQL and PostgreSQL.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy** or **LogBackupPolicy**.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The backup cycle. Specify at least two days of the week and separate the days with commas (,). Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * > *   You can configure a backup policy by using this parameter and the **BackupInterval** parameter. For example, if you set this parameter to Saturday,Sunday and the **BackupInterval** parameter to 30, a backup is performed every 30 minutes on every Saturday and Sunday.
   * > *   This parameter must be specified when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * Monday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time at which you want to perform a backup. Specify the time in the ISO 8601 standard in the *HH:mm*Z-*HH:mm*Z format. The time must be in UTC.
   * 
   * > *   This parameter must be specified when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * > *   This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 00:00Z-01:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The policy that is used to retain archived backup files if the instance is released. Valid values:
   * 
   * *   **None**: No archived backup files are retained.
   * *   **Lastest**: Only the last archived backup file is retained.
   * *   **All**: All archived backup files are retained.
   * 
   * > *   This parameter takes effect only when you set the **BackupPolicyMode** parameter to **DataBackupPolicy**.
   * > *   If the instance uses cloud disks and was created on or after February 1, 2024, this parameter is automatically set to **Lastest**. If the instance uses local disks in the same scenario, this parameter is automatically set to **None**. For more information, see [Backup for deleted instances](https://help.aliyun.com/document_detail/2836955.html).
   * 
   * @example
   * None
   */
  releasedKeepPolicy?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      archiveBackupKeepCount: 'ArchiveBackupKeepCount',
      archiveBackupKeepPolicy: 'ArchiveBackupKeepPolicy',
      archiveBackupRetentionPeriod: 'ArchiveBackupRetentionPeriod',
      backupInterval: 'BackupInterval',
      backupLog: 'BackupLog',
      backupMethod: 'BackupMethod',
      backupPolicyMode: 'BackupPolicyMode',
      backupPriority: 'BackupPriority',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      category: 'Category',
      compressType: 'CompressType',
      DBInstanceId: 'DBInstanceId',
      enableBackupLog: 'EnableBackupLog',
      enableIncrementDataBackup: 'EnableIncrementDataBackup',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupFrequency: 'LogBackupFrequency',
      logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      releasedKeepPolicy: 'ReleasedKeepPolicy',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveBackupKeepCount: 'number',
      archiveBackupKeepPolicy: 'string',
      archiveBackupRetentionPeriod: 'string',
      backupInterval: 'string',
      backupLog: 'string',
      backupMethod: 'string',
      backupPolicyMode: 'string',
      backupPriority: 'number',
      backupRetentionPeriod: 'string',
      category: 'string',
      compressType: 'string',
      DBInstanceId: 'string',
      enableBackupLog: 'string',
      enableIncrementDataBackup: 'boolean',
      highSpaceUsageProtection: 'string',
      localLogRetentionHours: 'string',
      localLogRetentionSpace: 'string',
      logBackupFrequency: 'string',
      logBackupLocalRetentionNumber: 'number',
      logBackupRetentionPeriod: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      releasedKeepPolicy: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

