import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationLogsResponseBodyItemsLogRecords extends $dara.Model {
    componentName?: string;
    containerName?: string;
    content?: string;
    date?: string;
    fileLine?: string;
    fileName?: string;
    fullFilePath?: string;
    hostname?: string;
    insName?: string;
    logLevelId?: number;
    logLevelName?: string;
    method?: string;
    name?: string;
    runtime?: string;
    runtimeVersion?: string;
    time?: string;
    timestamp?: number;
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
export declare class DescribeApplicationLogsResponseBodyItems extends $dara.Model {
    logRecords?: DescribeApplicationLogsResponseBodyItemsLogRecords[];
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
export declare class DescribeApplicationLogsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    items?: DescribeApplicationLogsResponseBodyItems;
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
     * 6
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CED079B7-A408-41A1-BFF1-EC608E******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 9
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
