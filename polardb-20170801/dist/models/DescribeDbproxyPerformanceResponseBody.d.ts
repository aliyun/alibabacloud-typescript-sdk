import * as $dara from '@darabonba/typescript';
export declare class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
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
export declare class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $dara.Model {
    performanceItemValue?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
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
export declare class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
    DBNodeId?: string;
    measurement?: string;
    metricName?: string;
    points?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
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
export declare class DescribeDBProxyPerformanceResponseBodyPerformanceKeys extends $dara.Model {
    performanceItem?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem[];
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
export declare class DescribeDBProxyPerformanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the cluster.
     *
     * @example
     * pc-*****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The type of the database engine.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The version of the database engine.
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
    performanceKeys?: DescribeDBProxyPerformanceResponseBodyPerformanceKeys;
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
