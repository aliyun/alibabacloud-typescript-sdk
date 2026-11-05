import * as $dara from '@darabonba/typescript';
export declare class DescribeLogBackupFilesResponseBodyItemsBinLogFile extends $dara.Model {
    downloadLink?: string;
    fileSize?: number;
    intranetDownloadLink?: string;
    linkExpiredTime?: string;
    logBeginTime?: string;
    logEndTime?: string;
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
export declare class DescribeLogBackupFilesResponseBodyItems extends $dara.Model {
    binLogFile?: DescribeLogBackupFilesResponseBodyItemsBinLogFile[];
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
export declare class DescribeLogBackupFilesResponseBody extends $dara.Model {
    items?: DescribeLogBackupFilesResponseBodyItems;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of log files on the current page.
     *
     * @example
     * 100
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F8EC669C-FC85-43D7-AF06-C3641626B37E
     */
    requestId?: string;
    /**
     * @remarks
     * The total size of all log files. Unit: bytes.
     *
     * @example
     * 2300
     */
    totalFileSize?: number;
    /**
     * @remarks
     * The total number of log files.
     *
     * @example
     * 17
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
