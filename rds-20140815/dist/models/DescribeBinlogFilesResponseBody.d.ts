import * as $dara from '@darabonba/typescript';
export declare class DescribeBinlogFilesResponseBodyItemsBinLogFile extends $dara.Model {
    checksum?: string;
    downloadLink?: string;
    fileSize?: number;
    hostInstanceID?: string;
    intranetDownloadLink?: string;
    linkExpiredTime?: string;
    logBeginTime?: string;
    logEndTime?: string;
    logFileName?: string;
    remoteStatus?: string;
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
export declare class DescribeBinlogFilesResponseBodyItems extends $dara.Model {
    binLogFile?: DescribeBinlogFilesResponseBodyItemsBinLogFile[];
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
export declare class DescribeBinlogFilesResponseBody extends $dara.Model {
    items?: DescribeBinlogFilesResponseBodyItems;
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
     * 30
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * ED169A3E-1657-4104-82AB-24EA8CD0DB75
     */
    requestId?: string;
    /**
     * @remarks
     * The total size of the log files.
     *
     * @example
     * 2269410
     */
    totalFileSize?: number;
    /**
     * @remarks
     * The total number of log files.
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
