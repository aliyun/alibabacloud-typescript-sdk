import * as $dara from '@darabonba/typescript';
export declare class ModifyBackupPolicyRequestAdvancedDataPolicies extends $dara.Model {
    /**
     * @remarks
     * The operation on this sub-policy. Valid values:
     *
     * - CREATE: create.
     * - UPDATE: update.
     * - DELETE: delete.
     *
     * @example
     * delete/update
     */
    actionType?: string;
    /**
     * @remarks
     * The backup type. Valid values:
     *
     * - F: full backup.
     * - L: log backup. This value takes effect only when Engine is set to SQL Server.
     *
     * @example
     * F
     */
    bakType?: string;
    /**
     * @remarks
     * The region ID of the destination region for data backup.
     *
     * @example
     * ap-northeast-1
     */
    destRegion?: string;
    /**
     * @remarks
     * The type of the destination storage pool. Valid values:
     *
     * - level1: level-1 storage.
     * - level2Cross: cross-region backup.
     * - level2: intra-region backup.
     *
     * @example
     * level1
     */
    destType?: string;
    /**
     * @remarks
     * The filter option. Valid values:
     *
     * - backupInterval: fixed interval.
     * - dayOfWeek: fixed day of the week.
     *
     * @example
     * dayOfWeek
     */
    filterKey?: string;
    /**
     * @remarks
     * The filter type. Valid value: crontab, which indicates periodic backup.
     *
     * @example
     * crontab
     */
    filterType?: string;
    /**
     * @remarks
     * The filter condition value for data backup. If the filter option is crontab, enter a cron expression.
     *
     * - When FilterKey is set to backupInterval, this value indicates the backup interval in minutes.
     * - When FilterKey is set to dayOfWeek, this value indicates the fixed day of the week for backup.
     *
     * @example
     * 0 2 * * 1-5
     */
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
    /**
     * @remarks
     * The retention type. Valid values:
     *
     * - delay: fixed retention period.
     * - never: long-term retention (LTR).
     *
     * @example
     * delay
     */
    retentionType?: string;
    /**
     * @remarks
     * The number of days for which data backups are retained. This parameter takes effect only when RetentionType is set to delay.
     *
     * @example
     * 365
     */
    retentionValue?: number;
    /**
     * @remarks
     * The region ID of the source region for data backup.
     *
     * @example
     * cn-beijing
     */
    srcRegion?: string;
    /**
     * @remarks
     * The type of the source storage pool.
     *
     * @example
     * db
     */
    srcType?: string;
    /**
     * @remarks
     * The ID of the sub-backup policy.
     *
     * @example
     * cb875ec7f9809b284f02b88a229061ce
     */
    strategyId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ModifyBackupPolicyRequestAdvancedLogPolicies extends $dara.Model {
    /**
     * @remarks
     * The operation on this sub-policy. Valid values:
     *
     * - CREATE: create.
     * - UPDATE: update.
     * - DELETE: delete.
     *
     * @example
     * update
     */
    actionType?: string;
    /**
     * @remarks
     * The region ID of the destination region for log backup.
     *
     * @example
     * ap-northeast-1
     */
    destRegion?: string;
    /**
     * @remarks
     * The type of the destination storage pool. Valid values:
     *
     * - level1: level-1 storage.
     * - level2Cross: cross-region backup.
     * - level2: intra-region backup.
     *
     * @example
     * level1
     */
    destType?: string;
    /**
     * @remarks
     * The flag that indicates whether log backup is enabled. Pass an integer.
     *
     * @example
     * 1
     */
    enableLogBackup?: number;
    /**
     * @remarks
     * The filter option. Valid values:
     *
     * - backupInterval: fixed interval.
     * - dayOfWeek: fixed day of the week.
     *
     * @example
     * dayOfWeek
     */
    filterKey?: string;
    /**
     * @remarks
     * The filter condition value for log backup. If the filter option is crontab, enter a cron expression.
     *
     * - When FilterKey is set to backupInterval, this value indicates the backup interval in minutes.
     * - When FilterKey is set to dayOfWeek, this value indicates the fixed day of the week for backup.
     *
     * @example
     * 0 2 * * 1-5
     */
    filterValue?: string;
    /**
     * @remarks
     * The log retention type. Valid values:
     *
     * - delay: fixed retention period.
     * - never: long-term retention (LTR).
     *
     * @example
     * delay
     */
    logRetentionType?: string;
    /**
     * @remarks
     * The number of days for which logs are retained. This parameter takes effect only when LogRetentionType is set to delay.
     *
     * @example
     * 7
     */
    logRetentionValue?: number;
    /**
     * @remarks
     * The region ID of the source region for log backup.
     *
     * @example
     * cn-beijing
     */
    srcRegion?: string;
    /**
     * @remarks
     * The type of the source storage pool.
     *
     * @example
     * db
     */
    srcType?: string;
    /**
     * @remarks
     * The ID of the sub-backup policy.
     *
     * @example
     * cb875ec7f9809b284f02b88a229061ce
     */
    strategyId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ModifyBackupPolicyRequest extends $dara.Model {
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
     * The retention period of archived backups. The number of backups that can be retained within this period is determined by **ArchiveBackupKeepCount**. Default value: **0**. Valid values:
     * * **ByMonth**: month.
     * * **ByWeek**: week.
     * * **KeepAll**: all backups are retained.
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
     * > * The ApsaraDB RDS for MySQL instance must be a cloud disk instance of MySQL 5.7 or 8.0 in the **high availability series or Cluster Edition**.
     * > * The ApsaraDB RDS for PostgreSQL instance must be a cloud disk instance.
     * > * [**Snapshot backup**](https://help.aliyun.com/document_detail/211143.html) must be **enabled** for the ApsaraDB RDS for SQL Server instance.
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
     * **For ApsaraDB RDS for SQL Server instances**, log backup is enabled by default and cannot be disabled. However, you can modify the log backup frequency as follows:
     *
     * - To set the log backup frequency to **every 5 minutes**: Set BackupLog to Enable and leave LogBackupFrequency empty. For more information, see [5-minute log backup](https://help.aliyun.com/document_detail/2861729.html). **This configuration is not supported when the preferred secondary instance is configured for backup (BackupPriority is set to 1). Otherwise, an error is reported.**
     * - To set the log backup frequency to **every 30 minutes**: Leave BackupLog empty and set LogBackupFrequency to LogInterval.
     * - To set the log backup frequency to **the same as the data backup frequency**: Leave both BackupLog and LogBackupFrequency empty.
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
     * The setting for [secondary instance backup](https://help.aliyun.com/document_detail/95717.html) of **ApsaraDB RDS for SQL Server Cluster Edition** instances. Valid values:
     * - **1**: prefer the secondary instance.
     * - **2**: force the primary instance.
     *
     * > - This parameter takes effect only when **BackupMethod** is set to **Physical**. If **BackupMethod** is set to **Snapshot**, ApsaraDB RDS for SQL Server Cluster Edition instances are forced to back up data on the primary instance.
     * > - After you set **BackupPriority** to **1** (prefer the secondary instance), the **5-minute log backup** policy (BackupLog is set to Enable and LogBackupFrequency is left empty) is **not supported**. Otherwise, an error is reported. Set the log backup frequency to every 30 minutes or the same as the data backup frequency.
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
     * * **4**: quicklz compression. The format is xb.gz. This method is supported only for MySQL 5.6, MySQL 5.7, and PostgreSQL. You can use this compression method to [restore individual databases and tables](https://help.aliyun.com/document_detail/103175.html).
     * * **8**: quicklz compression. The format is xb.gz. This method is supported only for MySQL 8.0. Restoration of individual databases and tables is not supported.
     *
     * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
     *
     * @example
     * 4
     */
    compressType?: string;
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
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
     * Specifies whether to enable log backup for **ApsaraDB RDS for MySQL**, **ApsaraDB RDS for PostgreSQL**, and **ApsaraDB RDS for MariaDB** instances. Valid values:
     * * **True** or **1**: enables log backup.
     * * **False** or **0**: disables log backup.
     *
     * > - Log backup is enabled by default and cannot be disabled for **ApsaraDB RDS for SQL Server** instances. Therefore, you do not need to configure this parameter for ApsaraDB RDS for SQL Server instances.
     * > - This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**. It is used to enable or disable log backup.
     *
     * @example
     * 1
     */
    enableBackupLog?: string;
    /**
     * @remarks
     * - **Specifies whether to enable the immutable backup feature.**
     *   - **Valid values**: Only `true` is supported. If you pass other values, an error is reported. **If you do not pass this parameter, the feature remains disabled.**
     *   - **Limits**: This parameter is supported only for ApsaraDB RDS for PostgreSQL and takes effect only when `EnableAdvancedBackupPolicy` is set to 1.
     *   - **⚠️ Important**: After this feature is enabled, it **cannot be disabled**. Evaluate the impact on your business before you enable this feature.
     *
     * @example
     * true
     *
     * **if can be null:**
     * false
     */
    enableImmutableBackup?: boolean;
    /**
     * @remarks
     * Specifies whether to enable incremental backup for **ApsaraDB RDS for SQL Server instances with cloud disks and ApsaraDB RDS for MySQL instances with local SSDs**. Valid values:
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
     * Specifies whether to enable point-in-time recovery (PITR) for **ApsaraDB RDS for MySQL** instances. Valid values:
     * - **True**: enables PITR.
     * - **False**: disables PITR.
     *
     * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy** and **BackupLog** is set to **Enable**. For feature details, see [Settings for the point-in-time recovery policy](https://help.aliyun.com/document_detail/2666046.html).
     *
     * @example
     * True
     */
    enablePitrProtection?: boolean;
    /**
     * @remarks
     * Specifies whether to unconditionally delete binary log files when the storage usage of the **ApsaraDB RDS for MySQL** instance exceeds 80% or the remaining storage is less than 5 GB. Valid values: **Enable** and **Disable**. By default, this parameter is not modified.
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
     * The number of hours for which log backups are retained locally on the **ApsaraDB RDS for MySQL** instance. Valid values: **0** to **168** (7 × 24). A value of 0 indicates that log backups are not retained.
     *
     * > This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**. In this case, this parameter is required.
     *
     * @example
     * 18
     */
    localLogRetentionHours?: string;
    /**
     * @remarks
     * The maximum usage of the local log circular space for the **ApsaraDB RDS for MySQL** instance. If the usage exceeds this value, the earliest binary log files are deleted until the usage drops below this value. Valid values: **0** to **50**. By default, this parameter is not modified.
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
     * * **Empty** (no value is required): every 5 minutes or the same as the data backup frequency.
     *
     * > This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
     *
     * @example
     * LogInterval
     */
    logBackupFrequency?: string;
    /**
     * @remarks
     * The number of local binary log files to retain. Default value: **60**. Valid values: **6** to **100**.
     *
     * > * This parameter takes effect only when **BackupPolicyMode** is set to **LogBackupPolicy**.
     * > * If the instance is an ApsaraDB RDS for MySQL instance, you can set this parameter to -1, which indicates that the number of local binary log files to retain is not limited.
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
     * > * This parameter and the **BackupInterval** parameter determine the backup policy together. For example, if this parameter is set to Saturday and Sunday, and the **BackupInterval** parameter is set to 30 minutes, a backup is performed every 30 minutes on Saturdays and Sundays.
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
     * The data retention policy for archived backups of deleted **ApsaraDB RDS for MySQL** instances. Valid values:
     * * **None**: no backups are retained.
     * * **Lastest**: the last backup is retained.
     * * **All**: all backups are retained.
     *
     * > - This parameter takes effect only when **BackupPolicyMode** is set to **DataBackupPolicy**.
     * > - For ApsaraDB RDS for MySQL cloud disk instances purchased on or after February 1, 2024, the default value of ReleasedKeepPolicy is **Lastest**. For an instance with Premium Local SSDs, the default value is **None**. For feature details, see [Backups of deleted instances](https://help.aliyun.com/document_detail/2836955.html).
     *
     * @example
     * None
     */
    releasedKeepPolicy?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
