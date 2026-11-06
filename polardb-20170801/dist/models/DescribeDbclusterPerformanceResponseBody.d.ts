import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
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
export declare class DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $dara.Model {
    performanceItemValue?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
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
export declare class DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
    DBNodeId?: string;
    measurement?: string;
    metricName?: string;
    points?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
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
export declare class DescribeDBClusterPerformanceResponseBodyPerformanceKeys extends $dara.Model {
    performanceItem?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItem[];
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
export declare class DescribeDBClusterPerformanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the database cluster.
     *
     * @example
     * pc-*****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The compatible database type.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The compatible database version.
     *
     * @example
     * 8.0
     */
    DBVersion?: string;
    /**
     * @remarks
     * The end time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
     *
     * @example
     * 2020-09-23T01:01:00Z
     */
    endTime?: string;
    performanceKeys?: DescribeDBClusterPerformanceResponseBodyPerformanceKeys;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 35D3E3DA-4650-407A-BFF5-59BFF1******
     */
    requestId?: string;
    /**
     * @remarks
     * The start time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
     *
     * @example
     * 2020-09-23T01:00:00Z
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
