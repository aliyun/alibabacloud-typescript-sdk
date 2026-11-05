import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
    timestamp?: number;
    value?: string;
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
export declare class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $dara.Model {
    performanceItemValue?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
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
export declare class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
    measurement?: string;
    metricName?: string;
    points?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
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
export declare class DescribeDBInstancePerformanceResponseBodyPerformanceKeys extends $dara.Model {
    performanceItem?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItem[];
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
export declare class DescribeDBInstancePerformanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The node ID.
     *
     * @example
     * pi-*************
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The database engine type. Valid values:
     *
     * - **MySQL**
     *
     * - **PostgreSQL**
     *
     * - **Oracle**
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The MySQL version number. Valid values:
     *
     * - **5.6**
     *
     * - **5.7**
     *
     * - **8.0**
     *
     * @example
     * 5.6
     */
    DBVersion?: string;
    /**
     * @remarks
     * The end time of the query. The time is in the `yyyy-MM-ddTHH:mmZ` format in UTC.
     *
     * @example
     * 2020-09-23T01:01Z
     */
    endTime?: string;
    /**
     * @remarks
     * The database engine type.
     *
     * @example
     * POLARDB
     */
    engine?: string;
    performanceKeys?: DescribeDBInstancePerformanceResponseBodyPerformanceKeys;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F2A9EFA7-915F-4572-8299-85A307******
     */
    requestId?: string;
    /**
     * @remarks
     * The start time of the query. The time is in the `yyyy-MM-ddTHH:mmZ` format in UTC.
     *
     * @example
     * 2020-09-23T01:01Z
     */
    startTime?: string;
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
