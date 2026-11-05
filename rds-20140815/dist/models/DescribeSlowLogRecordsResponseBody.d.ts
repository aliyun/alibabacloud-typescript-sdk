import * as $dara from '@darabonba/typescript';
export declare class DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord extends $dara.Model {
    applicationName?: string;
    clientHostName?: string;
    cpuTime?: number;
    DBName?: string;
    executionStartTime?: string;
    hostAddress?: string;
    lastRowsAffectedCount?: number;
    lockTimeMS?: number;
    lockTimes?: number;
    logicalIORead?: number;
    parseRowCounts?: number;
    physicalIORead?: number;
    queryTimeMS?: number;
    queryTimes?: number;
    returnRowCounts?: number;
    rowsAffectedCount?: number;
    SQLHash?: string;
    SQLText?: string;
    userName?: string;
    writeIOCount?: number;
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
export declare class DescribeSlowLogRecordsResponseBodyItems extends $dara.Model {
    SQLSlowRecord?: DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord[];
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
export declare class DescribeSlowLogRecordsResponseBody extends $dara.Model {
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
     * The database engine.
     *
     * @example
     * MySQL
     */
    engine?: string;
    items?: DescribeSlowLogRecordsResponseBodyItems;
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
     * The number of SQL statements on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4DBB1BB0-E5D8-4D41-B1C9-142364DB****
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 1
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
