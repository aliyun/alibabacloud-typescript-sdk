import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
    step?: number;
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
export declare class DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $dara.Model {
    performanceItemValue?: DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
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
export declare class DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
    componentId?: string;
    componentType?: string;
    measurement?: string;
    metricName?: string;
    points?: DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
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
export declare class DescribeApplicationPerformanceResponseBodyPerformanceKeys extends $dara.Model {
    performanceItem?: DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItem[];
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
export declare class DescribeApplicationPerformanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the application cluster.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The application type.
     *
     * @example
     * supabase
     */
    applicationType?: string;
    /**
     * @remarks
     * The end time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and must be in UTC.
     *
     * @example
     * 2025-05-23T02:21:00Z
     */
    endTime?: string;
    /**
     * @remarks
     * The data granularity.
     *
     * @example
     * 60
     */
    interval?: string;
    performanceKeys?: DescribeApplicationPerformanceResponseBodyPerformanceKeys;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * The start time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and must be in UTC.
     *
     * @example
     * 2022-11-15T16:00Z
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
