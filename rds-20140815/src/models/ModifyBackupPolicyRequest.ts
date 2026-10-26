// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequestAdvancedDataPolicies extends $dara.Model {
  actionType?: string;
  bakType?: string;
  destRegion?: string;
  destType?: string;
  filterKey?: string;
  filterType?: string;
  filterValue?: string;
  /**
   * @remarks
   * Specifies whether to retain only one data backup per day.
   */
  onlyPreserveOneEachDay?: boolean;
  /**
   * @remarks
   * Specifies whether to retain only one data backup per hour.
   */
  onlyPreserveOneEachHour?: boolean;
  retentionType?: string;
  retentionValue?: number;
  srcRegion?: string;
  srcType?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      bakType: 'BakType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      filterKey: 'FilterKey',
      filterType: 'FilterType',
      filterValue: 'FilterValue',
      onlyPreserveOneEachDay: 'OnlyPreserveOneEachDay',
      onlyPreserveOneEachHour: 'OnlyPreserveOneEachHour',
      retentionType: 'RetentionType',
      retentionValue: 'RetentionValue',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      bakType: 'string',
      destRegion: 'string',
      destType: 'string',
      filterKey: 'string',
      filterType: 'string',
      filterValue: 'string',
      onlyPreserveOneEachDay: 'boolean',
      onlyPreserveOneEachHour: 'boolean',
      retentionType: 'string',
      retentionValue: 'number',
      srcRegion: 'string',
      srcType: 'string',
      strategyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequestAdvancedLogPolicies extends $dara.Model {
  actionType?: string;
  destRegion?: string;
  destType?: string;
  enableLogBackup?: number;
  filterKey?: string;
  filterValue?: string;
  logRetentionType?: string;
  logRetentionValue?: number;
  srcRegion?: string;
  srcType?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      enableLogBackup: 'EnableLogBackup',
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      logRetentionType: 'LogRetentionType',
      logRetentionValue: 'LogRetentionValue',
      srcRegion: 'SrcRegion',
      srcType: 'SrcType',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      destRegion: 'string',
      destType: 'string',
      enableLogBackup: 'number',
      filterKey: 'string',
      filterValue: 'string',
      logRetentionType: 'string',
      logRetentionValue: 'number',
      srcRegion: 'string',
      srcType: 'string',
      strategyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of advanced data backup policies.
   */
  advancedDataPolicies?: ModifyBackupPolicyRequestAdvancedDataPolicies[];
  /**
   * @remarks
   * The list of advanced log backup policies.
   */
  advancedLogPolicies?: ModifyBackupPolicyRequestAdvancedLogPolicies[];
  /**
   * @remarks
   * The number of archived backups to retain. Default value: **1**. Valid values:
   * * When **ArchiveBackupKeepPolicy** is set to **ByMonth**, valid values are **1** to **31**.
   * * When **ArchiveBackupKeepPolicy** is set to **ByWeek**, valid values are **1** to **7**.
   * 
   * > * When **ArchiveBackupKeepPolicy** is set to **KeepAll**, you do not need to specify this parameter.
   * > * This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 1
   */
  archiveBackupKeepCount?: number;
  /**
   * @remarks
   * The retention period of archived backups. The number of archived backups that can be retained within this period is determined by **ArchiveBackupKeepCount**. Default value: **0**. Valid values:
   * * **ByMonth**: month.
   * * **ByWeek**: week.
   * * **KeepAll**: all archived backups are retained.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * ByMonth
   */
  archiveBackupKeepPolicy?: string;
  /**
   * @remarks
   * The number of days for which archived backups are retained. Default value: **0**, which indicates that archive backup is disabled. Valid values: **30** to **1095**.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 365
   */
  archiveBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The snapshot backup frequency. Valid values:
   * * **15**: 15 minutes.
   * * **30**: 30 minutes.
   * * **60**: 60 minutes.
   * * **120**: 120 minutes.
   * * **180**: 180 minutes.
   * * **240**: 240 minutes.
   * * **360**: 360 minutes.
   * * **480**: 480 minutes.
   * * **720**: 720 minutes.
   * 
   * > * This parameter and the **PreferredBackupPeriod** parameter determine the backup policy together.
   * > * The MySQL instance must be a cloud disk instance of MySQL 5.7 or 8.0 **High-availability Edition** or **Cluster Edition**.
   * > * The PostgreSQL instance must be a cloud disk instance.
   * > * [**Snapshot backup**](https://help.aliyun.com/document_detail/211143.html) must be **enabled** for the SQL Server instance.
   * > * This parameter does not take effect when **Category** is set to **Flash**.
   * > * This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 30
   */
  backupInterval?: string;
  /**
   * @remarks
   * Specifies whether to enable log backup. Valid values:
   * 
   * * **Enable**: enables log backup.
   * * **Disabled**: disables log backup.
   * 
   * **For ApsaraDB RDS for SQL Server instances**, log backup is enabled by default and cannot be disabled. However, you can change the log backup frequency as follows:
   * 
   * - **Every 5 minutes**: Set BackupLog to Enable and leave LogBackupFrequency empty. For more information, see [5-minute log backup](https://help.aliyun.com/document_detail/2861729.html). **This configuration is not supported when the preferred secondary instance is configured for backup (BackupPriority is set to 1). Otherwise, an error is reported.**
   * - **Every 30 minutes**: Leave BackupLog empty and set LogBackupFrequency to LogInterval.
   * - **Same as data backup frequency**: Leave both BackupLog and LogBackupFrequency empty.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**. It is used to enable or disable log backup.
   * 
   * @example
   * Enable
   */
  backupLog?: string;
  /**
   * @remarks
   * The backup method for **ApsaraDB RDS for SQL Server instances with cloud disks**. Valid values:
   * * **Physical** (default): physical backup.
   * * **Snapshot**: snapshot backup.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * * **DataBackupPolicy**: data backup.
   * * **LogBackupPolicy**: log backup.
   * 
   * @example
   * DataBackupPolicy
   */
  backupPolicyMode?: string;
  /**
   * @remarks
   * The backup priority setting for [secondary instance backup](https://help.aliyun.com/document_detail/95717.html) of **ApsaraDB RDS for SQL Server Cluster Edition** instances. Valid values:
   * - **1**: prefer secondary instance.
   * - **2**: force primary instance.
   *  
   * > - This parameter takes effect only when **BackupMethod** is set to **Physical**. If **BackupMethod** is set to **Snapshot**, backups are forcibly performed on the primary instance for ApsaraDB RDS for SQL Server Cluster Edition instances.
   * > - After you set the backup priority to **prefer secondary instance** (BackupPriority is set to 1), the **5-minute log backup** policy (BackupLog is set to Enable and LogBackupFrequency is left empty) is **not supported**. Otherwise, an error is reported. Set the log backup frequency to every 30 minutes or the same as the data backup frequency.
   * 
   * @example
   * 2
   */
  backupPriority?: number;
  /**
   * @remarks
   * The number of days for which data backups are retained. Valid values: **7** to **730**.
   * 
   * > * This parameter is required when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * > * This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * Specifies whether to enable backup within seconds. Valid values:
   * * **Flash**: enables backup within seconds.
   * * **Standard**: disables backup within seconds.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The backup compression method. Valid values:
   * * **0**: no compression.
   * * **1**: zlib compression. The format is tar.gz.
   * * **2**: parallel zlib compression.
   * * **4**: quicklz compression. The format is xb.gz. This method applies only to MySQL 5.6 and 5.7. You can use this compression method to [restore individual databases and tables](https://help.aliyun.com/document_detail/103175.html).
   * * **8**: quicklz compression. The format is xb.gz. This method applies only to MySQL 8.0. Restoration of individual databases and tables is not supported.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 4
   */
  compressType?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the advanced backup policy. If you set this parameter to 1, both the advanced data backup policy and the advanced log backup policy are configured.
   * 
   * @example
   * 1
   */
  enableAdvancedBackupPolicy?: number;
  /**
   * @remarks
   * Specifies whether to enable log backup for **MySQL**, **PostgreSQL**, and **MariaDB** instances. Valid values:
   * * **True** or **1**: enabled.
   * * **False** or **0**: shutdown.
   * 
   * > - Instance log backup is enabled by default and cannot be shut down for **SQL Server** instances. Therefore, you do not need to configure this parameter for SQL Server instances.
   * > - This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**. It is used to enable or shutdown instance log backup.
   * 
   * @example
   * 1
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * Specifies whether to enable incremental backup for **ApsaraDB RDS for SQL Server instances with cloud disks** and **ApsaraDB RDS for MySQL instances with local SSDs**. Valid values:
   * * **False** (default): disables incremental backup.
   * * **True**: enables incremental backup.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * False
   */
  enableIncrementDataBackup?: boolean;
  /**
   * @remarks
   * Specifies whether to enable point-in-time recovery (PITR) for **MySQL** instances. Valid values:
   * - **True**: enabled.
   * - **False**: shutdown.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy** and **BackupLog** is set to **Enable**. For feature details, see [Settings for point-in-time recovery policy](https://help.aliyun.com/document_detail/2666046.html).
   * 
   * @example
   * True
   */
  enablePitrProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to unconditionally delete binary log files when the storage usage of the **ApsaraDB RDS for MySQL** instance exceeds 80% or the remaining storage space is less than 5 GB. Valid values: **Enable** and **Disable**. By default, this parameter is not modified.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**. In this case, this parameter is required.
   * 
   * @example
   * Enable
   */
  highSpaceUsageProtection?: string;
  /**
   * @remarks
   * The high-frequency incremental backup frequency for **ApsaraDB RDS for MySQL instances with local SSDs**. Valid values:
   * * **60**: 60 minutes.
   * * **120**: 120 minutes.
   * * **240**: 240 minutes.
   * * **360**: 360 minutes.
   * * **720**: 720 minutes.
   * 
   * > This parameter takes effect only when **EnableIncrementDataBackup** is set to **True**.
   * 
   * @example
   * 120
   */
  incBackupInterval?: number;
  /**
   * @remarks
   * The number of hours for which instance log backups are retained locally on the **MySQL** instance. Valid values: **0** to **168** (7 × 24). A value of 0 indicates that instance log backups are not retained locally.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**. In this case, this parameter is required.
   * 
   * @example
   * 18
   */
  localLogRetentionHours?: string;
  /**
   * @remarks
   * The maximum usage of the local log storage space on the **ApsaraDB RDS for MySQL** instance. If the usage exceeds this value, the earliest binary log files are deleted until the usage drops below this value. Valid values: **0** to **50**. By default, this parameter is not modified.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**. In this case, this parameter is required.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: string;
  /**
   * @remarks
   * The log backup frequency for **ApsaraDB RDS for SQL Server** instances. Valid values:
   * * **LogInterval**: every 30 minutes.
   * * **Empty** (no value required): every 5 minutes or same as the data backup frequency.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * LogInterval
   */
  logBackupFrequency?: string;
  /**
   * @remarks
   * The number of binary log files retained locally. Default value: **60**. Valid values: **6** to **100**.
   * 
   * > * This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**.
   * > * If the instance is an ApsaraDB RDS for MySQL instance, you can set this parameter to -1, which indicates that the number of locally retained binary log files is not limited.
   * 
   * @example
   * 60
   */
  logBackupLocalRetentionNumber?: number;
  /**
   * @remarks
   * The number of days for which log backups are retained. Valid values: **7** to **730**. The value cannot be greater than the number of days for which data backups are retained.
   * 
   * > * When log backup is enabled, you can specify the number of days for which log backup files are retained. This parameter is supported only for ApsaraDB RDS for MySQL and ApsaraDB RDS for PostgreSQL instances.
   * > * This parameter takes effect when **BackupPolicyMode** is set to **DataBackupPolicy** or **LogBackupPolicy**.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The backup cycle. You must specify at least two days. Separate multiple values with commas (,). Valid values:
   * * **Monday**: Monday.
   * * **Tuesday**: Tuesday.
   * * **Wednesday**: Wednesday.
   * * **Thursday**: Thursday.
   * * **Friday**: Friday.
   * * **Saturday**: Saturday.
   * * **Sunday**: Sunday.
   * 
   * > * This parameter and the **BackupInterval** parameter determine the backup policy together. For example, if you set this parameter to Saturday and Sunday and set **BackupInterval** to 30 minutes, a backup is performed every 30 minutes on Saturdays and Sundays.
   * > * This parameter is required when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * > * This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * Monday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time period during which the backup task is executed. Specify the time in the <i>HH:mm</i>Z-<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * > * This parameter is required when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * > * This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 00:00Z-01:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The data retention policy for archived backups of deleted **MySQL** instances. Valid values:
   * * **None**: does not retain archived backups.
   * * **Lastest**: retains the last archived backup.
   * * **All**: retains all archived backups.
   * 
   * > - This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * > - For ApsaraDB RDS for MySQL cloud disk instances purchased on or after February 1, 2024, the default value of ReleasedKeepPolicy is **Lastest**. For instances with Premium Local SSDs, the default value is **None**. For feature details, see [Backups of deleted instances](https://help.aliyun.com/document_detail/2836955.html).
   * 
   * @example
   * None
   */
  releasedKeepPolicy?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      advancedDataPolicies: 'AdvancedDataPolicies',
      advancedLogPolicies: 'AdvancedLogPolicies',
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
      enableAdvancedBackupPolicy: 'EnableAdvancedBackupPolicy',
      enableBackupLog: 'EnableBackupLog',
      enableIncrementDataBackup: 'EnableIncrementDataBackup',
      enablePitrProtection: 'EnablePitrProtection',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      incBackupInterval: 'IncBackupInterval',
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
      advancedDataPolicies: { 'type': 'array', 'itemType': ModifyBackupPolicyRequestAdvancedDataPolicies },
      advancedLogPolicies: { 'type': 'array', 'itemType': ModifyBackupPolicyRequestAdvancedLogPolicies },
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
      enableAdvancedBackupPolicy: 'number',
      enableBackupLog: 'string',
      enableIncrementDataBackup: 'boolean',
      enablePitrProtection: 'boolean',
      highSpaceUsageProtection: 'string',
      incBackupInterval: 'number',
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
    if(Array.isArray(this.advancedDataPolicies)) {
      $dara.Model.validateArray(this.advancedDataPolicies);
    }
    if(Array.isArray(this.advancedLogPolicies)) {
      $dara.Model.validateArray(this.advancedLogPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

