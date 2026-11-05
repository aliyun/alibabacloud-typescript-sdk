import * as $dara from '@darabonba/typescript';
export declare class ModifyInstanceCrossBackupPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable the overall cross-region backup feature, which includes data backup and log backup. Valid values:
     * * **0**: disabled
     * * **1**: enabled
     *
     * > When you enable cross-region backup, you must specify the destination region ID.
     *
     * @example
     * 1
     */
    backupEnabled?: string;
    /**
     * @remarks
     * The ID of the destination region for cross-region backup.
     *
     * @example
     * cn-shanghai
     */
    crossBackupRegion?: string;
    /**
     * @remarks
     * The retention type of cross-region backups. Only **1** is supported, which indicates that all backups are retained.
     *
     * @example
     * 1
     */
    crossBackupType?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * Specifies whether to enable cross-region log backup. Valid values:
     * * **0**: disabled
     * * **1**: enabled
     *
     * > You can configure this parameter only when the overall cross-region backup feature is enabled.
     *
     * @example
     * 1
     */
    logBackupEnabled?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID of the source instance. You can call the DescribeRegions operation to query region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The retention method for cross-region backups. Only **1** is supported, which indicates that backups are retained based on a specified retention period.
     *
     * @example
     * 1
     */
    retentType?: number;
    /**
     * @remarks
     * The retention period of cross-region backups. Valid values: **7 to 1825**. Unit: days.
     *
     * @example
     * 7
     */
    retention?: number;
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
