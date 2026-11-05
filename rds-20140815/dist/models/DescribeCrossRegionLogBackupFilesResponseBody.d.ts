import * as $dara from '@darabonba/typescript';
export declare class DescribeCrossRegionLogBackupFilesResponseBodyItemsItem extends $dara.Model {
    crossBackupRegion?: string;
    crossDownloadLink?: string;
    crossIntranetDownloadLink?: string;
    crossLogBackupId?: number;
    crossLogBackupSize?: number;
    instanceId?: number;
    linkExpiredTime?: string;
    logBeginTime?: string;
    logEndTime?: string;
    logFileName?: string;
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
export declare class DescribeCrossRegionLogBackupFilesResponseBodyItems extends $dara.Model {
    item?: DescribeCrossRegionLogBackupFilesResponseBodyItemsItem[];
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
export declare class DescribeCrossRegionLogBackupFilesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The end time of the query. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
     *
     * @example
     * 2019-06-15T12:10:00Z
     */
    endTime?: string;
    items?: DescribeCrossRegionLogBackupFilesResponseBodyItems;
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
     * DAC241E8-28E6-49DA-BFB0-B2DD090885C1
     */
    requestId?: string;
    /**
     * @remarks
     * The start time of the query. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
     *
     * @example
     * 2019-05-30T12:10:00Z
     */
    startTime?: string;
    /**
     * @remarks
     * The total number of records.
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
