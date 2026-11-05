import * as $dara from '@darabonba/typescript';
export declare class DescribeCrossRegionLogBackupFilesRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the destination region for cross-region backup. You can call the DescribeCrossRegionBackupDBInstance operation to query the region ID.
     *
     * @example
     * cn-shanghai
     */
    crossBackupRegion?: string;
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
     * The end time of the query. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
     *
     * This parameter is required.
     *
     * @example
     * 2019-06-15T12:10:00Z
     */
    endTime?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type.
     *
     * Default value: **1**.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     *
     * * **30**
     * * **50**
     * * **100**
     *
     * Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID of the instance. You can call the DescribeRegions operation to query the region ID.
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
     * The start time of the query. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
     *
     * This parameter is required.
     *
     * @example
     * 2019-05-30T12:10:00Z
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
