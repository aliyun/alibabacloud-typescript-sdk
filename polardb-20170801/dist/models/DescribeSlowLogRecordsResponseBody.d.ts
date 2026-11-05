import * as $dara from '@darabonba/typescript';
export declare class DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord extends $dara.Model {
    DBName?: string;
    DBNodeId?: string;
    executionStartTime?: string;
    hostAddress?: string;
    lockTimeMS?: number;
    lockTimes?: number;
    parseRowCounts?: number;
    queryTimeMS?: number;
    queryTimes?: number;
    returnRowCounts?: number;
    SQLHash?: string;
    SQLText?: string;
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
     * The cluster ID.
     *
     * @example
     * pc-*****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The database engine.
     *
     * @example
     * polardb_mysql
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
     * The number of records on the current page.
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
     * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
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
