import * as $dara from '@darabonba/typescript';
export declare class DescribeSlowLogsRequest extends $dara.Model {
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
     * The name of the database.
     *
     * @example
     * PolarDB_MySQL
     */
    DBName?: string;
    /**
     * @remarks
     * The end date of the query. The end date cannot be earlier than the start date, and the interval between the start date and the end date cannot exceed 31 days. Specify the time in the yyyy-MM-ddZ format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2021-05-30Z
     */
    endTime?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. Valid values: any positive integer up to the maximum value of the Integer type.
     *
     * Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values: 30 to 100. Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
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
     * The start date of the query. The interval between the start date and the current date cannot exceed 31 days. Specify the time in the yyyy-MM-ddZ format. The time must be in UTC.
     *
     * This parameter is required.
     *
     * @example
     * 2021-05-01Z
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
