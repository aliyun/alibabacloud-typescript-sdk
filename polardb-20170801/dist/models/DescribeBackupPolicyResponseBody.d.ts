import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupPolicyResponseBodyAdvancedDataPoliciesAdvancedDataPolicy extends $dara.Model {
    autoCreated?: boolean;
    bakType?: string;
    destRegion?: string;
    destType?: string;
    dumpAction?: string;
    filterKey?: string;
    filterType?: string;
    filterValue?: string;
    onlyPreserveOneEachDay?: boolean;
    onlyPreserveOneEachHour?: boolean;
    policyId?: string;
    retentionType?: string;
    retentionValue?: string;
    srcRegion?: string;
    srcType?: string;
    storageClass?: string;
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
export declare class DescribeBackupPolicyResponseBody extends $dara.Model {
    advancedDataPolicies?: DescribeBackupPolicyResponseBodyAdvancedDataPolicies;
    /**
     * @remarks
     * The advanced backup policy option. Valid values:
     * * **enable**: Advanced backup is enabled.
     * * **disable**: Advanced backup is disabled. You can enable it.
     * * **notSupport**: Advanced backup is not supported.
     * > * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
     *
     * @example
     * disable
     */
    advancedPolicyOption?: string;
    /**
     * @remarks
     * The backup frequency. Valid values:
     *
     * - **Normal** (default): standard backup. Backups are performed once a day at a scheduled time.
     * - **2/24H**: enhanced backup. Backups are performed once every 2 hours.
     * - **3/24H**: enhanced backup. Backups are performed once every 3 hours.
     * - **4/24H**: enhanced backup. Backups are performed once every 4 hours.
     *
     * > * After enhanced backup is enabled, all backups completed within 24 hours are retained. For backups older than 24 hours, the system retains only the first backup completed after 00:00 each day and deletes the rest.
     * > * After enhanced backup is enabled, the backup epoch parameter **PreferredBackupPeriod** is set to all days of the week (Monday to Sunday) by default.
     *
     * @example
     * Normal
     */
    backupFrequency?: string;
    /**
     * @remarks
     * The level of the current backup policy. Valid values:
     * * **Normal**: standard backup.
     * * **Advanced**: advanced backup.
     * > * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
     *
     * @example
     * Normal
     */
    backupPolicyLevel?: string;
    /**
     * @remarks
     * Specifies whether to retain backups when the cluster is deleted. Valid values:
     *
     * * **ALL**: retains all backups for long-term retention (LTR).
     * * **LATEST**: retains the latest backup for long-term retention (LTR).
     * * **NONE** (default): does not retain backup sets.
     *
     * @example
     * NONE
     */
    backupRetentionPolicyOnClusterDeletion?: string;
    /**
     * @remarks
     * The backup frequency. Valid values:
     *
     * - **Normal** (default): standard backup. Backups are performed once a day at a scheduled time.
     * - **2/24H**: high-frequency backup. Backups are performed once every 2 hours.
     * - **3/24H**: high-frequency backup. Backups are performed once every 3 hours.
     * - **4/24H**: high-frequency backup. Backups are performed once every 4 hours.
     *
     * > * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
     * > * This parameter is not supported if the region where your PolarDB for MySQL cluster resides does not support cross-region backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
     * > * After advanced backup is enabled, use the AdvancedDataPolicies parameter instead of this parameter.
     *
     * @example
     * Normal
     */
    dataLevel1BackupFrequency?: string;
    /**
     * @remarks
     * The level-1 backup cycle. Valid values:
     * * **Monday**: Monday
     * * **Tuesday**: Tuesday
     * * **Wednesday**: Wednesday
     * * **Thursday**: Thursday
     * * **Friday**: Friday
     * * **Saturday**: Saturday
     * * **Sunday**: Sunday
     *
     * > * You must select at least two days. Separate multiple values with commas (,).
     * > * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
     * > * This parameter is not supported if the region where your PolarDB for MySQL cluster resides does not support cross-region backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
     * > * After advanced backup is enabled, use the AdvancedDataPolicies parameter instead of this parameter.
     *
     * @example
     * Monday,Tuesday
     */
    dataLevel1BackupPeriod?: string;
    /**
     * @remarks
     * The retention period of level-1 backups. Valid values: 3 to 14. Unit: days.
     * > After advanced backup is enabled, use the AdvancedDataPolicies parameter instead of this parameter.
     *
     * @example
     * 7
     */
    dataLevel1BackupRetentionPeriod?: string;
    /**
     * @remarks
     * The time period during which automatic backups are performed. The format is `hh:mmZ-hh:mmZ` (UTC). The specified time must be on the hour with a 1-hour interval, such as `14:00Z-15:00Z`.
     *
     * > * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
     * > * This parameter is not supported if the region where your PolarDB for MySQL cluster resides does not support cross-region backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
     *
     * @example
     * 15:00Z-16:00Z
     */
    dataLevel1BackupTime?: string;
    /**
     * @remarks
     * The destination region for cross-region level-2 backups. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
     *
     * > After advanced backup is enabled, use the AdvancedDataPolicies parameter instead of this parameter.
     *
     * @example
     * cn-hangzhou
     */
    dataLevel2BackupAnotherRegionRegion?: string;
    /**
     * @remarks
     * The retention epoch of cross-region backup for level-2 backups. Valid values:
     *
     * - **0**: shutdown of the level-2 backup feature.
     *
     * - **30 to 7300**: the retention epoch of level-2 backups. Unit: days.
     *
     * - **-1**: long-term retention (LTR) of level-2 backups.
     *
     * >
     * > - When a cluster is created, the default value is **0**, which means shutdown of the cross-region backup feature for level-2 backups.
     * > - After advanced backup is enabled, use the AdvancedDataPolicies parameter instead of this parameter.
     *
     * @example
     * 30
     */
    dataLevel2BackupAnotherRegionRetentionPeriod?: string;
    /**
     * @remarks
     * The level-2 backup cycle. Valid values:
     * * **Monday**: Monday
     * * **Tuesday**: Tuesday
     * * **Wednesday**: Wednesday
     * * **Thursday**: Thursday
     * * **Friday**: Friday
     * * **Saturday**: Saturday
     * * **Sunday**: Sunday
     *
     * > * You must select at least two days. Separate multiple values with commas (,).
     * > * This parameter is not supported by PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for PostgreSQL.
     * > * This parameter is not supported if the region where your PolarDB for MySQL cluster resides does not support cross-region backup. For more information about the regions that support cross-region backup, see [Overview](https://help.aliyun.com/document_detail/72672.html).
     * > * After advanced backup is enabled, use the AdvancedDataPolicies parameter instead of this parameter.
     *
     * @example
     * Monday,Tuesday
     */
    dataLevel2BackupPeriod?: string;
    /**
     * @remarks
     * The retention epoch of level-2 backups. Valid values:
     * * 0: shutdown of the level-2 backup feature.
     * * 30 to 7300: the retention epoch of level-2 backups. Unit: days.
     * * -1: long-term retention (LTR) of level-2 backups.
     *
     * >
     * > * When a cluster is created, the default value is **0**, which means shutdown of the level-2 backup feature.
     * > * After advanced backup is enabled, use the AdvancedDataPolicies parameter instead of this parameter.
     *
     * @example
     * 0
     */
    dataLevel2BackupRetentionPeriod?: string;
    /**
     * @remarks
     * Indicates whether immutable backup for cross-region backup is enabled.
     */
    enableCrossRegionImmutableBackup?: boolean;
    /**
     * @remarks
     * Indicates whether immutable backup is enabled.
     */
    enableImmutableBackup?: boolean;
    /**
     * @remarks
     * The data backup cycle. Valid values:
     *
     * - Monday: Monday
     * - Tuesday: Tuesday
     * - Wednesday: Wednesday
     * - Thursday: Thursday
     * - Friday: Friday
     * - Saturday: Saturday
     * - Sunday: Sunday
     * > After advanced backup is enabled, use the AdvancedDataPolicies parameter instead of this parameter.
     *
     * @example
     * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
     */
    preferredBackupPeriod?: string;
    /**
     * @remarks
     * The time period during which automatic backups are performed. The format is `HH:mmZ-HH:mmZ` (UTC).
     *
     * @example
     * 07:00Z-08:00Z
     */
    preferredBackupTime?: string;
    /**
     * @remarks
     * The time of the next backup. The format is `YYYY-MM-DDThh:mmZ` (UTC).
     *
     * @example
     * 2020-11-16T07:30Z
     */
    preferredNextBackupTime?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EADFCE0F-9FB5-4685-B395-1440B******
     */
    requestId?: string;
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
