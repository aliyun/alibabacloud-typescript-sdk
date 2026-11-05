import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupLogsRequest extends $dara.Model {
    /**
     * @remarks
     * The backup region.
     *
     * @example
     * cn-hangzhou
     */
    backupRegion?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The end time of the query. The end time must be later than the start time. Specify the time in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2020-02-12T15:00Z
     */
    endTime?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. Valid values: an integer greater than 0 and up to the maximum value of the Integer data type. Default value: **1**.
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
     * 2020-02-01T15:00Z
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
