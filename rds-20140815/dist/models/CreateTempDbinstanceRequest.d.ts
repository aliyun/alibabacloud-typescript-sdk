import * as $dara from '@darabonba/typescript';
export declare class CreateTempDBInstanceRequest extends $dara.Model {
    /**
     * @remarks
     * The backup set ID. You can call the DescribeBackups operation to query the backup set ID.
     * >You must specify at least one of **BackupId** and **RestoreTime**.
     *
     * @example
     * 1883****
     */
    backupId?: number;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp13****
     */
    DBInstanceId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * A point in time within the backup retention period. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
     *
     * > * You can specify any point in time within the last 7 days that is at least 30 minutes earlier than the current time. The default time zone is UTC.
     * > * You must specify at least one of **BackupId** and **RestoreTime**.
     *
     * @example
     * 2023-06-11T16:00:00Z
     */
    restoreTime?: string;
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
