import * as $dara from '@darabonba/typescript';
export declare class DescribeSQLLogRecordsResponseBodyItemsSQLRecord extends $dara.Model {
    accountName?: string;
    DBName?: string;
    executeTime?: string;
    hostAddress?: string;
    returnRowCounts?: number;
    SQLText?: string;
    threadID?: string;
    totalExecutionTimes?: number;
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
export declare class DescribeSQLLogRecordsResponseBodyItems extends $dara.Model {
    SQLRecord?: DescribeSQLLogRecordsResponseBodyItemsSQLRecord[];
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
export declare class DescribeSQLLogRecordsResponseBody extends $dara.Model {
    items?: DescribeSQLLogRecordsResponseBodyItems;
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
     * The number of SQL audit logs on the current page.
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
     * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
     */
    requestId?: string;
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
