import * as $dara from '@darabonba/typescript';
export declare class DescribeSQLLogFilesResponseBodyItemsLogFile extends $dara.Model {
    fileID?: string;
    logDownloadURL?: string;
    logEndTime?: string;
    logSize?: string;
    logStartTime?: string;
    logStatus?: string;
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
export declare class DescribeSQLLogFilesResponseBodyItems extends $dara.Model {
    logFile?: DescribeSQLLogFilesResponseBodyItemsLogFile[];
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
export declare class DescribeSQLLogFilesResponseBody extends $dara.Model {
    items?: DescribeSQLLogFilesResponseBodyItems;
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
     * The number of entries on the current page.
     *
     * @example
     * 10
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 10
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
