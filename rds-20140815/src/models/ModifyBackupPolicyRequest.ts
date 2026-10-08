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
  onlyPreserveOneEachDay?: boolean;
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
  advancedDataPolicies?: ModifyBackupPolicyRequestAdvancedDataPolicies[];
  advancedLogPolicies?: ModifyBackupPolicyRequestAdvancedLogPolicies[];
  /**
   * @remarks
   * The number of archived backups to retain. The default value is **1**. Valid values:
   * * When **ArchiveBackupKeepPolicy** is set to **ByMonth**, valid values are **1 to 31**.
   * * When **ArchiveBackupKeepPolicy** is set to **ByWeek**, valid values are **1 to 7**.
   * 
   * > * When **ArchiveBackupKeepPolicy** is set to **KeepAll**, this parameter does not need to be specified.
   * > * This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 1
   */
  archiveBackupKeepCount?: number;
  /**
   * @remarks
   * The retention cycle of archived backups. The number of backups retained within this cycle is determined by **ArchiveBackupKeepCount**. The default value is **0**. Valid values:
   * * **ByMonth**: monthly
   * * **ByWeek**: weekly
   * * **KeepAll**: all retained
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * ByMonth
   */
  archiveBackupKeepPolicy?: string;
  /**
   * @remarks
   * The number of days for which archived backups are retained. The default value is **0**, which indicates that archived backup is not enabled. Valid values: **30 to 1095**.
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
   * > * This parameter works together with the **PreferredBackupPeriod** parameter to determine the backup policy.
   * > * MySQL instances must be cloud disk instances running MySQL 5.7 or 8.0 in the **high-availability series or Cluster Edition**.
   * > * PostgreSQL instances must be cloud disk instances.
   * > * SQL Server instances must have [**snapshot backup**](https://help.aliyun.com/document_detail/211143.html) **enabled**.
   * > * This parameter is invalid when **Category** is set to **Flash**.
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
   * * **Enable**: Enable.
   * * **Disabled**: Disable.
   * 
   * **For SQL Server instances**, log backup is enabled by default and cannot be disabled. However, you can modify the log backup frequency as follows:
   * 
   * - Log backup frequency of **every 5 minutes**: Set BackupLog to Enable and leave LogBackupFrequency empty. For more information, see [5-minute log backup](https://help.aliyun.com/document_detail/2861729.html). **This configuration is not supported when backup on the secondary instance is preferred (BackupPriority is set to 1). Otherwise, an error is returned.**
   * - Log backup frequency of **every 30 minutes**: Leave BackupLog empty and set LogBackupFrequency to LogInterval.
   * - Log backup frequency **consistent with data backup**: Leave both BackupLog and LogBackupFrequency empty.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy** and is used to enable or disable log backup.
   * 
   * @example
   * Enable
   */
  backupLog?: string;
  /**
   * @remarks
   * The backup method for **SQL Server instances with cloud disks**. Valid values:
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
   * The type of the backup policy. Valid values:
   * 
   * * **DataBackupPolicy**: data backup
   * * **LogBackupPolicy**: log backup
   * 
   * @example
   * DataBackupPolicy
   */
  backupPolicyMode?: string;
  /**
   * @remarks
   * The [backup on secondary instance](https://help.aliyun.com/document_detail/95717.html) setting for **SQL Server Cluster Edition** instances. Valid values:
   * - **1**: secondary instance preferred.
   * - **2**: primary instance forced.
   *  
   * > - This parameter takes effect only when **BackupMethod** is set to **Physical**. If **BackupMethod** is set to **Snapshot**, SQL Server Cluster Edition instances are forced to perform backups on the primary instance.
   * > - After you set **secondary instance preferred** (BackupPriority to 1), the **5-minute log backup** policy (BackupLog set to Enable and LogBackupFrequency left empty) is **not supported**. Otherwise, an error is returned. Set the log backup frequency to every 30 minutes or consistent with data backup.
   * 
   * @example
   * 2
   */
  backupPriority?: number;
  /**
   * @remarks
   * The number of days for which data backups are retained. Valid values: **7 to 730**.
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
   * * **Flash**: Enable.
   * * **Standard**: Disable.
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
   * * **0**: not compressed.
   * * **1**: zlib compression. The format is tar.gz.
   * * **2**: parallel zlib compression.
   * * **4**: quicklz compression. The format is xb.gz. This method is applicable only to MySQL 5.6 and 5.7 and can be used for [individual database and table restoration](https://help.aliyun.com/document_detail/103175.html).
   * * **8**: quicklz compression. The format is xb.gz. This method is applicable only to MySQL 8.0. Individual database and table restoration is not supported.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * 4
   */
  compressType?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  enableAdvancedBackupPolicy?: number;
  /**
   * @remarks
   * Specifies whether to enable instance log backup for **MySQL**, **PostgreSQL**, and **MariaDB** instances. Valid values:
   * * **True** or **1**: Enable.
   * * **False** or **0**: Disable.
   * 
   * > - Instance log backup for **SQL Server** instances is enabled by default and cannot be disabled. You do not need to configure this parameter for SQL Server instances.
   * > - This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy** and is used to enable or disable instance log backup.
   * 
   * @example
   * 1
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * Specifies whether to enable incremental backup for **SQL Server instances with cloud disks or MySQL instances with local disks**. Valid values:
   * * **False** (default): Disable.
   * * **True**: Enable.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * False
   */
  enableIncrementDataBackup?: boolean;
  /**
   * @remarks
   * Specifies whether to enable point-in-time recovery for **MySQL** instances. Valid values:
   * - **True**: Enable.
   * - **False**: Disable.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy** and **BackupLog** is set to **Enable**. For more information, see [Configure a point-in-time recovery policy](https://help.aliyun.com/document_detail/2666046.html).
   * 
   * @example
   * True
   */
  enablePitrProtection?: boolean;
  /**
   * @remarks
   * Specifies whether to unconditionally clean up binary logs when the storage usage of a **MySQL** instance exceeds 80% or the remaining storage is less than 5 GB. Valid values: **Enable | Disable**. The default value is not modified.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy** and is required in this case.
   * 
   * @example
   * Enable
   */
  highSpaceUsageProtection?: string;
  /**
   * @remarks
   * The high-frequency incremental backup frequency for **MySQL instances with local disks**. Valid values:
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
   * The number of hours for which instance log backups are retained on the local storage of a **MySQL** instance. Valid values: **0 to 168** (7 × 24). A value of 0 indicates that instance logs are not retained locally.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy** and is required in this case.
   * 
   * @example
   * 18
   */
  localLogRetentionHours?: string;
  /**
   * @remarks
   * The maximum usage of the local log storage space for a **MySQL** instance. If the usage exceeds this value, the system starts to clean up binary logs from the earliest one until the usage drops below this threshold. Valid values: **0 to 50**. The default value is not modified.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy** and is required in this case.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: string;
  /**
   * @remarks
   * The log backup frequency for **SQL Server** instances. Valid values:
   * * **LogInterval**: every **30 minutes**.
   * * **Empty** (no value required): every **5 minutes** or **consistent with data backup**.
   * 
   * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * LogInterval
   */
  logBackupFrequency?: string;
  /**
   * @remarks
   * The number of binary logs retained locally. The default value is **60**. Valid values: **6 to 100**.
   * 
   * > * This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**.
   * > * For MySQL instances, you can set this parameter to -1, which indicates that the number of locally retained binary logs is not limited.
   * 
   * @example
   * 60
   */
  logBackupLocalRetentionNumber?: number;
  /**
   * @remarks
   * The number of days for which log backups are retained. Valid values: **7 to 730**. The value cannot be greater than the number of days for which data backups are retained.
   * 
   * > * When log backup is enabled, you can set the retention period of log backup files. Currently, only MySQL and PostgreSQL instances support this setting.
   * > * This parameter applies when **BackupPolicyMode** is set to **DataBackupPolicy** or **LogBackupPolicy**.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The backup cycle. Specify at least two days. Separate multiple values with commas (,). Valid values:
   * * **Monday**
   * * **Tuesday**
   * * **Wednesday**
   * * **Thursday**
   * * **Friday**
   * * **Saturday**
   * * **Sunday**
   * 
   * > * This parameter works together with the **BackupInterval** parameter to determine the backup policy. For example, if you set this parameter to Saturday and Sunday and set **BackupInterval** to 30 minutes, a backup is performed every 30 minutes on Saturday and Sunday each week.
   * > * This parameter is required when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * > * This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * 
   * @example
   * Monday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time at which to perform a backup task. Format: <i>HH:mm</i>Z-<i>HH:mm</i>Z (UTC).
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
   * The archived backup data retention policy for deleted **MySQL** instances. Valid values:
   * * **None**: not retained.
   * * **Lastest**: the last backup is retained.
   * * **All**: all backups are retained.
   * 
   * > - This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
   * > - For ApsaraDB RDS for MySQL cloud disk instances purchased on or after February 1, 2024, the default value of ReleasedKeepPolicy is **Lastest**. For instances with Premium Local SSDs, the default value is **None**. For more information about this feature, see [Backups of deleted instances](https://help.aliyun.com/document_detail/2836955.html).
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

