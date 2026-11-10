import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy extends $dara.Model {
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
export declare class DescribeBackupPolicyResponseBodyAdvancedDataPolicies extends $dara.Model {
    advancedDataPolicy?: DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy[];
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
export declare class DescribeBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy extends $dara.Model {
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
export declare class DescribeBackupPolicyResponseBodyAdvancedLogPolicies extends $dara.Model {
    advancedLogPolicy?: DescribeBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy[];
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
export declare class DescribeBackupPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the advanced backup policy is enabled.
     *
     * @example
     * false
     */
    advancedBackupPolicyEnabled?: boolean;
    advancedDataPolicies?: DescribeBackupPolicyResponseBodyAdvancedDataPolicies;
    advancedLogPolicies?: DescribeBackupPolicyResponseBodyAdvancedLogPolicies;
    /**
     * @remarks
     * The number of archived backups retained for an **ApsaraDB RDS for MySQL** instance.
     *
     * @example
     * 1
     */
    archiveBackupKeepCount?: string;
    /**
     * @remarks
     * The retention cycle of archived backups for an **ApsaraDB RDS for MySQL** instance.
     *
     * @example
     * ByMonth
     */
    archiveBackupKeepPolicy?: string;
    /**
     * @remarks
     * The number of days for which archived backups are retained for an **ApsaraDB RDS for MySQL** instance.
     *
     * @example
     * 365
     */
    archiveBackupRetentionPeriod?: string;
    /**
     * @remarks
     * The backup interval. Unit: minutes.
     * * For an ApsaraDB RDS for MySQL instance, this parameter indicates the [snapshot backup frequency](https://help.aliyun.com/document_detail/98818.html) rather than the snapshot backup cycle.
     * * For an ApsaraDB RDS for SQL Server instance, this parameter indicates the log backup frequency.
     *
     * @example
     * 30
     */
    backupInterval?: string;
    /**
     * @remarks
     * Indicates whether log backup is enabled. Valid values:
     * * **Enable**: yes
     * * **Disabled**: no
     *
     * **For an ApsaraDB RDS for SQL Server instance:**
     *
     * - **Enable** is returned only when instance log backup frequency of the instance is set to **Every 5 Minutes**.
     * - **Disabled** is returned when instance log backup frequency is set to **Every 30 Minutes** or **Same as Data Backup**. **Refer to the value of BackupInterval**.
     *
     * @example
     * Enable
     */
    backupLog?: string;
    /**
     * @remarks
     * The backup method for an **ApsaraDB RDS for SQL Server instance with cloud disks**. Valid values:
     * * **Physical**: physical backup
     * * **Snapshot**: snapshot backup
     *
     * @example
     * Physical
     */
    backupMethod?: string;
    /**
     * @remarks
     * The secondary node backup setting for an **ApsaraDB RDS for SQL Server Cluster Edition** instance. Valid values:
     * - **1**: prefer secondary node
     * - **2**: force primary node
     *
     * > This parameter is returned only when SupportModifyBackupPriority is set to True.
     *
     * @example
     * 2
     */
    backupPriority?: number;
    /**
     * @remarks
     * The number of days for which data backups are retained.
     *
     * @example
     * 7
     */
    backupRetentionPeriod?: number;
    /**
     * @remarks
     * Indicates whether backup within seconds is enabled for **ApsaraDB RDS for MySQL** and **ApsaraDB RDS for PostgreSQL** instances. Valid values:
     *
     * - **Flash**: enabled
     * - **Standard**: disabled
     *
     * > This parameter takes effect only when the **BackupPolicyMode** parameter is set to **DataBackupPolicy**.
     *
     * @example
     * Standard
     */
    category?: string;
    /**
     * @remarks
     * The backup compression method. Valid values:
     * * **0**: no compression
     * * **1**: zlib compression
     * * **2**: parallel zlib compression
     * * **4**: QuickLZ compression with database and table restoration enabled
     * * **8**: QuickLZ compression without database and table restoration supported
     *
     * @example
     * 1
     */
    compressType?: string;
    /**
     * @remarks
     * Indicates whether log backup is enabled. Valid values:
     * * **1**: enabled
     * * **0**: disabled
     *
     * **For an ApsaraDB RDS for SQL Server instance:**
     * - **1** is returned only when instance log backup frequency of the instance is set to **Every 5 Minutes**.
     * - **0** is returned when instance log backup frequency is set to **Every 30 Minutes** or **Same as Data Backup**. **Refer to the value of BackupInterval**.
     *
     * @example
     * 1
     */
    enableBackupLog?: string;
    /**
     * @remarks
     * Indicates whether immutable backup is enabled. This parameter takes effect only when Engine is set to PostgreSQL.
     *
     * @example
     * False
     */
    enableImmutableBackup?: boolean;
    /**
     * @remarks
     * Indicates whether incremental backup is enabled for an **ApsaraDB RDS for SQL Server** instance. Valid values:
     * * **True**: yes
     * * **False**: no
     *
     * @example
     * True
     */
    enableIncrementDataBackup?: boolean;
    /**
     * @remarks
     * Indicates whether point-in-time recovery (PITR) is enabled for an **ApsaraDB RDS for MySQL** instance. PITR is an upgraded version of log backup. Valid values:
     * - **True**: yes
     * - **False**: no
     *
     * > For more information, see [Configure a point-in-time recovery policy](https://help.aliyun.com/document_detail/2666046.html).
     *
     * @example
     * True
     */
    enablePitrProtection?: boolean;
    /**
     * @remarks
     * Indicates whether binary logs are forcibly deleted when the storage usage of an **ApsaraDB RDS for MySQL** instance exceeds 80% or the remaining storage is less than 5 GB. Valid values:
     *
     * * **Disable**: no
     * * **Enable**: yes
     *
     * @example
     * Enable
     */
    highSpaceUsageProtection?: string;
    /**
     * @remarks
     * The interval for high-frequency incremental backups. Unit: minutes. Valid values: 60, 120, 240, 360, and 720.
     *
     * @example
     * 120
     */
    incBackupInterval?: number;
    /**
     * @remarks
     * The number of hours for which local binary log backups are retained for an **ApsaraDB RDS for MySQL** instance.
     *
     * @example
     * 0
     */
    localLogRetentionHours?: number;
    /**
     * @remarks
     * The maximum storage usage of binary logs for an **ApsaraDB RDS for MySQL** instance.
     *
     * @example
     * 30
     */
    localLogRetentionSpace?: string;
    /**
     * @remarks
     * The log backup frequency for an **ApsaraDB RDS for SQL Server** instance. Valid values:
     *
     * * **LogInterval**: every 30 minutes
     * * Default value: the same as the data backup cycle specified by **PreferredBackupPeriod**.
     *
     * @example
     * LogInterval
     */
    logBackupFrequency?: string;
    /**
     * @remarks
     * The number of local binary logs retained for an **ApsaraDB RDS for MySQL** instance.
     *
     * @example
     * 60
     */
    logBackupLocalRetentionNumber?: number;
    /**
     * @remarks
     * The number of days for which log backups are retained.
     *
     * @example
     * 7
     */
    logBackupRetentionPeriod?: number;
    /**
     * @remarks
     * The number of days to which an **ApsaraDB RDS for MySQL** instance can be restored by using PITR.
     *
     * @example
     * 7
     */
    pitrRetentionPeriod?: number;
    /**
     * @remarks
     * The data backup cycle. Separate multiple values with commas (,). Valid values:
     * * **Monday**: Monday
     * * **Tuesday**: Tuesday
     * * **Wednesday**: Wednesday
     * * **Thursday**: Thursday
     * * **Friday**: Friday
     * * **Saturday**: Saturday
     * * **Sunday**: Sunday
     *
     * @example
     * Monday,Wednesday,Friday,Sunday
     */
    preferredBackupPeriod?: string;
    /**
     * @remarks
     * The data backup time. Format: <i>HH:mm</i>Z-<i>HH:mm</i>Z (UTC).
     *
     * @example
     * 15:00Z-16:00Z
     */
    preferredBackupTime?: string;
    /**
     * @remarks
     * The time of the next backup. Format: <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z (UTC).
     *
     * @example
     * 2018-01-19T15:15Z
     */
    preferredNextBackupTime?: string;
    /**
     * @remarks
     * The data retention policy for archived backups of a deleted **ApsaraDB RDS for MySQL** instance. Valid values:
     * * **None**: does not retain archived backups
     * * **Lastest**: retains only the last archived backup
     * * **All**: retains all archived backups
     *
     * @example
     * None
     */
    releasedKeepPolicy?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * B87E2AB3-B7C9-4394-9160-7F639F732031
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the secondary node backup option can be modified for an **ApsaraDB RDS for SQL Server** instance. Valid values:
     *
     * - **True**: yes
     * - **False**: no
     *
     * @example
     * False
     */
    supportModifyBackupPriority?: boolean;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * 0
     */
    supportReleasedKeep?: number;
    /**
     * @remarks
     * Indicates whether snapshot backup is supported for an **ApsaraDB RDS for SQL Server** instance. Valid values:
     *
     * - **1**: yes
     * - **0**: no
     *
     * @example
     * 1
     */
    supportVolumeShadowCopy?: number;
    /**
     * @remarks
     * Indicates whether the [5-minute log backup feature](https://help.aliyun.com/document_detail/95717.html) is supported for an **ApsaraDB RDS for SQL Server** instance. Valid values:
     * - **0**: not supported
     * - **1**: supported
     *
     * @example
     * 0
     */
    supportsHighFrequencyBackup?: number;
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
