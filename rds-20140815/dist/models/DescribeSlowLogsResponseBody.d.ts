import * as $dara from '@darabonba/typescript';
export declare class DescribeSlowLogsResponseBodyItemsSQLSlowLog extends $dara.Model {
    avgExecutionTime?: number;
    avgIOWriteCounts?: number;
    avgLastRowsAffectedCounts?: number;
    avgLogicalReadCounts?: number;
    avgPhysicalReadCounts?: number;
    avgRowsAffectedCounts?: number;
    createTime?: string;
    DBName?: string;
    maxExecutionTime?: number;
    maxExecutionTimeMS?: number;
    maxIOWriteCounts?: number;
    maxLastRowsAffectedCounts?: number;
    maxLockTime?: number;
    maxLockTimeMS?: number;
    maxLogicalReadCounts?: number;
    maxPhysicalReadCounts?: number;
    maxRowsAffectedCounts?: number;
    minIOWriteCounts?: number;
    minLastRowsAffectedCounts?: number;
    minLogicalReadCounts?: number;
    minPhysicalReadCounts?: number;
    minRowsAffectedCounts?: number;
    mySQLTotalExecutionCounts?: number;
    mySQLTotalExecutionTimes?: number;
    parseMaxRowCount?: number;
    parseTotalRowCounts?: number;
    reportTime?: string;
    returnMaxRowCount?: number;
    returnTotalRowCounts?: number;
    SQLHASH?: string;
    SQLIdStr?: string;
    SQLServerAvgCpuTime?: number;
    SQLServerAvgExecutionTime?: number;
    SQLServerMaxCpuTime?: number;
    SQLServerMinCpuTime?: number;
    SQLServerMinExecutionTime?: number;
    SQLServerTotalCpuTime?: number;
    SQLServerTotalExecutionCounts?: number;
    SQLServerTotalExecutionTimes?: number;
    SQLText?: string;
    slowLogId?: number;
    totalIOWriteCounts?: number;
    totalLastRowsAffectedCounts?: number;
    totalLockTimes?: number;
    totalLogicalReadCounts?: number;
    totalPhysicalReadCounts?: number;
    totalRowsAffectedCounts?: number;
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
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The end date of the query.
     *
     * @example
     * 2011-05-30Z
     */
    endTime?: string;
    /**
     * @remarks
     * The database engine.
     *
     * @example
     * SQLServer
     */
    engine?: string;
    items?: DescribeSlowLogsResponseBodyItems;
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
     * 10
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
     * @example
     * 2011-05-01Z
     */
    startTime?: string;
    /**
     * @remarks
     * The total number of entries.
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
