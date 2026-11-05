import * as $dara from '@darabonba/typescript';
export declare class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
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
export declare class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $dara.Model {
    performanceItemValue?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
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
export declare class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
    measurement?: string;
    metricName?: string;
    points?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
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
export declare class DescribeDBNodePerformanceResponseBodyPerformanceKeys extends $dara.Model {
    performanceItem?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem[];
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
export declare class DescribeDBNodePerformanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the node in the PolarDB cluster.
     *
     * @example
     * pi-*****************
     */
    DBNodeId?: string;
    /**
     * @remarks
     * The database engine type.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The database engine version.
     *
     * @example
     * 8.0
     */
    DBVersion?: string;
    /**
     * @remarks
     * The end of the time range. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is in UTC.
     *
     * @example
     * 2020-09-23T01:01:00Z
     */
    endTime?: string;
    performanceKeys?: DescribeDBNodePerformanceResponseBodyPerformanceKeys;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E2FDB684-751D-424D-98B9-704BEA******
     */
    requestId?: string;
    /**
     * @remarks
     * The beginning of the time range. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is in UTC.
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
