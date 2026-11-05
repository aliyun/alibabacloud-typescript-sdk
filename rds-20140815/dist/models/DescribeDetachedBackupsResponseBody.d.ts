import * as $dara from '@darabonba/typescript';
export declare class DescribeDetachedBackupsResponseBodyItemsBackup extends $dara.Model {
    backupDownloadURL?: string;
    backupEndTime?: string;
    backupId?: string;
    backupIntranetDownloadURL?: string;
    backupMethod?: string;
    backupMode?: string;
    backupSize?: number;
    backupStartTime?: string;
    backupStatus?: string;
    backupType?: string;
    consistentTime?: number;
    DBInstanceComment?: string;
    DBInstanceId?: string;
    hostInstanceID?: string;
    isAvail?: number;
    metaStatus?: string;
    storeStatus?: string;
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
export declare class DescribeDetachedBackupsResponseBodyItems extends $dara.Model {
    backup?: DescribeDetachedBackupsResponseBodyItemsBackup[];
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
export declare class DescribeDetachedBackupsResponseBody extends $dara.Model {
    items?: DescribeDetachedBackupsResponseBodyItems;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: string;
    /**
     * @remarks
     * The number of backup sets on the current page.
     *
     * @example
     * 30
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 1A6D328C-84B8-40DC-BF49-6C73984D7494
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 100
     */
    totalRecordCount?: string;
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
