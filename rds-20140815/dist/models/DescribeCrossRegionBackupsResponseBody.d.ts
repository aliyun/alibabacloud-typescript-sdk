import * as $dara from '@darabonba/typescript';
export declare class DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions extends $dara.Model {
    restoreRegion?: string[];
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
export declare class DescribeCrossRegionBackupsResponseBodyItemsItem extends $dara.Model {
    backupEndTime?: string;
    backupMethod?: string;
    backupSetScale?: number;
    backupSetStatus?: number;
    backupStartTime?: string;
    backupType?: string;
    category?: string;
    consistentTime?: string;
    crossBackupDownloadLink?: string;
    crossBackupId?: number;
    crossBackupRegion?: string;
    crossBackupSetFile?: string;
    crossBackupSetLocation?: string;
    crossBackupSetSize?: number;
    DBInstanceStorageType?: string;
    engine?: string;
    engineVersion?: string;
    instanceId?: number;
    restoreRegions?: DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions;
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
export declare class DescribeCrossRegionBackupsResponseBodyItems extends $dara.Model {
    item?: DescribeCrossRegionBackupsResponseBodyItemsItem[];
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
export declare class DescribeCrossRegionBackupsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The end time of the query.
     *
     * @example
     * 2019-06-15T12:10:00Z
     */
    endTime?: string;
    items?: DescribeCrossRegionBackupsResponseBodyItems;
    /**
     * @remarks
     * The page number. Valid values: any integer greater than 0 and less than or equal to the maximum value of the Integer type.
     *
     * Default value: **1**.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of backup files on the current page.
     *
     * @example
     * 30
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The region ID of the instance.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 60912B41-7579-4B5D-B289-8856030F0A6A
     */
    requestId?: string;
    /**
     * @remarks
     * The start time of the query.
     *
     * @example
     * 2019-05-30T12:10:00Z
     */
    startTime?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 100
     */
    totalRecordCount?: number;
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
