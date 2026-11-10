import * as $dara from '@darabonba/typescript';
export declare class ModifyBackupPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The backup compression method. Valid values:
     * * **0**: no compression.
     * * **1**: zlib compression.
     * * **2**: parallel zlib compression.
     * * **4**: quicklz compression. Database and table restoration is enabled.
     * * **8**: quicklz compression for MySQL 8.0. Database and table restoration is not supported.
     *
     * @example
     * 4
     */
    compressType?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceID?: string;
    /**
     * @remarks
     * Indicates whether log backup is enabled. Valid values:
     * * **1**: enabled.
     * * **0**: disabled.
     *
     * > Log backup is enabled by default and cannot be disabled for ApsaraDB RDS for SQL Server instances.
     *
     * @example
     * 1
     */
    enableBackupLog?: string;
    /**
     * @remarks
     * Indicates whether incremental backup is enabled.
     */
    enableIncrementDataBackup?: boolean;
    /**
     * @remarks
     * Indicates whether point-in-time recovery (PITR) is enabled for the ApsaraDB RDS for MySQL instance.
     */
    enablePitrProtection?: boolean;
    /**
     * @remarks
     * Indicates whether binary log files are unconditionally deleted when the storage usage of the **ApsaraDB RDS for MySQL** instance exceeds 80% or the remaining storage is less than 5 GB.
     *
     * @example
     * Disable
     */
    highSpaceUsageProtection?: string;
    /**
     * @remarks
     * The high-frequency incremental backup interval. Unit: minutes. Valid values: 60, 120, 240, 360, and 720.
     *
     * @example
     * 120
     */
    incBackupInterval?: number;
    /**
     * @remarks
     * The number of hours for which log backups are retained locally on the **ApsaraDB RDS for MySQL** instance.
     *
     * @example
     * 18
     */
    localLogRetentionHours?: number;
    /**
     * @remarks
     * The maximum usage of the local binary log loop space for the **ApsaraDB RDS for MySQL** instance.
     *
     * @example
     * 30
     */
    localLogRetentionSpace?: string;
    /**
     * @remarks
     * The number of local binary log files retained on the **ApsaraDB RDS for MySQL** instance.
     *
     * @example
     * 60
     */
    logBackupLocalRetentionNumber?: number;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * DA147739-AEAD-4417-9089-65E9B1D8240D
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
