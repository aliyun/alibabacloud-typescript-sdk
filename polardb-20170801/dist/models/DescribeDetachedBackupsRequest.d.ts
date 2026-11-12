import * as $dara from '@darabonba/typescript';
export declare class DescribeDetachedBackupsRequest extends $dara.Model {
    /**
     * @remarks
     * The backup ID.
     *
     * @example
     * 111111111
     */
    backupId?: string;
    /**
     * @remarks
     * The backup mode. Valid values:
     * * **Automated**: Automatic backup.
     * * **Manual**: Manual backup.
     *
     * @example
     * Manual
     */
    backupMode?: string;
    /**
     * @remarks
     * The destination region for cross-region backups.
     *
     * > This parameter is supported only by PolarDB for MySQL.
     *
     * @example
     * cn-hangzhou
     */
    backupRegion?: string;
    /**
     * @remarks
     * The backup status. Valid values:
     * * **Success**: The backup is completed.
     * * **Failed**: The backup failed.
     *
     * @example
     * Success
     */
    backupStatus?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The end time of the query. The end time must be later than the start time. Specify the time in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2020-05-14T00:00Z
     */
    endTime?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer type. Default value: **1**.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     * * **30**
     * * **50**
     * * **100**
     *
     * Default value: **30**.
     *
     * @example
     * 30
     */
    pageSize?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The start time of the query. Specify the time in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2020-05-01T00:00Z
     */
    startTime?: string;
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
