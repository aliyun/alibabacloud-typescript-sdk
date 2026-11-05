import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupLogsResponseBodyItemsBackupLog extends $dara.Model {
    backupLogEndTime?: string;
    backupLogId?: string;
    backupLogName?: string;
    backupLogSize?: string;
    backupLogStartTime?: string;
    downloadLink?: string;
    intranetDownloadLink?: string;
    linkExpiredTime?: string;
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
export declare class DescribeBackupLogsResponseBodyItems extends $dara.Model {
    backupLog?: DescribeBackupLogsResponseBodyItemsBackupLog[];
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
export declare class DescribeBackupLogsResponseBody extends $dara.Model {
    items?: DescribeBackupLogsResponseBodyItems;
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
     * The number of entries on the current page.
     *
     * @example
     * 2
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * ADAC63DB-0691-4ECE-949A-FAEA68******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 2
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
