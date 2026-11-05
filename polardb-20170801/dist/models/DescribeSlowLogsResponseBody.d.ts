import * as $dara from '@darabonba/typescript';
export declare class DescribeSlowLogsResponseBodyItemsSQLSlowLog extends $dara.Model {
    createTime?: string;
    DBName?: string;
    DBNodeId?: string;
    maxExecutionTime?: number;
    maxExecutionTimeMs?: string;
    maxLockTime?: number;
    parseMaxRowCount?: number;
    parseTotalRowCounts?: number;
    returnMaxRowCount?: number;
    returnTotalRowCounts?: number;
    SQLHASH?: string;
    SQLText?: string;
    totalExecutionCounts?: number;
    totalExecutionTimes?: number;
    totalLockTimes?: number;
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
export declare class DescribeSlowLogsResponseBodyItems extends $dara.Model {
    SQLSlowLog?: DescribeSlowLogsResponseBodyItemsSQLSlowLog[];
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
export declare class DescribeSlowLogsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The end date of the query.
     *
     * The date is in UTC. Format: YYYY-MM-DDZ.
     *
     * @example
     * 2021-05-30Z
     */
    endTime?: string;
    /**
     * @remarks
     * The database engine.
     *
     * @example
     * polardb_mysql
     */
    engine?: string;
    items?: DescribeSlowLogsResponseBodyItems;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 3
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of SQL statements on the current page.
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
     * 2553A660-E4EB-4AF4-A402-8AFF70A49143
     */
    requestId?: string;
    /**
     * @remarks
     * The start date of the query.
     *
     * The date is in UTC. Format: YYYY-MM-DDZ.
     *
     * @example
     * 2021-05-01Z
     */
    startTime?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 5
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
